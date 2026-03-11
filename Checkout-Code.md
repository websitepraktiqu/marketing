```ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Outer try-catch to catch ALL unhandled errors and return JSON (bukan blank 500)
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method Not Allowed' });
        }

        // Jika body belum di-parse (mis. Content-Type salah), tangkap dulu
        const body = req.body ?? {};
        const items = body.items;
        const couponCode = body.couponCode ?? null;
        const billing = body.billing ?? {};

        // Kunci REST API WooCommerce dari environment Vercel
        const key = process.env.WC_CONSUMER_KEY;
        const secret = process.env.WC_CONSUMER_SECRET;

        console.log('[checkout] WC_KEY exists:', !!key, '| WC_SECRET exists:', !!secret);

        if (!key || !secret) {
            return res.status(500).json({ error: 'Kunci REST API WooCommerce belum dipasang di Vercel Environment Variables.' });
        }

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Keranjang belanja kosong.' });
        }

        if (!billing.email || !billing.name) {
            console.error('[checkout] Billing tidak lengkap:', billing);
            return res.status(400).json({ error: 'Data penagihan (Nama & Email) tidak lengkap.' });
        }

        const authHeader = 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64');
        let customerId = 0;

        // 1. Cari customer berdasarkan email
        try {
            const customerRes = await fetch(
                `https://event.praktiqu.com/wp-json/wc/v3/customers?email=${encodeURIComponent(billing.email)}&role=all`,
                { headers: { 'Authorization': authHeader } }
            );
            if (customerRes.ok) {
                const customers = await customerRes.json();
                if (Array.isArray(customers) && customers.length > 0) {
                    customerId = customers[0].id;
                    console.log('[checkout] Found existing customer:', customerId);
                }
            }
        } catch (e) {
            console.error('[checkout] Error searching customer:', e);
        }

        // 2. Jika belum ada, buat akun baru
        if (customerId === 0) {
            try {
                const username = billing.email.split('@')[0].replace(/[^a-zA-Z0-9_]/g, '') + '_' + Date.now();
                const generatedPassword = Math.random().toString(36).slice(-10) + 'Aa1!';

                const createCustRes = await fetch('https://event.praktiqu.com/wp-json/wc/v3/customers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authHeader
                    },
                    body: JSON.stringify({
                        email: billing.email,
                        first_name: billing.name.split(' ')[0],
                        last_name: billing.name.split(' ').slice(1).join(' ') || '',
                        username: username,
                        password: generatedPassword,
                    })
                });

                if (createCustRes.ok) {
                    const newCustomer = await createCustRes.json();
                    customerId = newCustomer.id ?? 0;
                    console.log('[checkout] Created new customer:', customerId);
                } else {
                    const errBody = await createCustRes.text();
                    console.error('[checkout] Failed to create customer:', createCustRes.status, errBody.substring(0, 200));
                }
            } catch (e) {
                console.error('[checkout] Error creating customer:', e);
            }
        }

        // 3. Buat Order menggunakan Endpoint Kustom di WordPress
        interface OrderItem {
            product_id?: number | string;
            quantity?: number;
            coupon?: string;
            [key: string]: any;
        }

        const orderData: {
            customer_id: number;
            billing: { first_name: string; email: string; phone: string };
            items: OrderItem[];
        } = {
            customer_id: customerId,
            billing: {
                first_name: billing.name,
                email: billing.email,
                phone: billing.phone ?? '',
            },
            items: items,
        };

        if (couponCode) {
            orderData.items.push({ coupon: couponCode }); // if the snippet handled it; but we didn't add coupon handling to snippet. Let's send it anyway.
        }

        console.log('[checkout] Creating order via custom WP endpoint for customer_id:', customerId);

        const wpRes = await fetch('https://event.praktiqu.com/wp-json/praktiqu/v1/checkout-xendit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        const wpText = await wpRes.text();
        console.log('[checkout] WP response status:', wpRes.status, '| body preview:', wpText.substring(0, 300));

        let data: any;
        try {
            data = JSON.parse(wpText);
        } catch {
            return res.status(502).json({
                error: 'WordPress mengembalikan respons tidak valid. Kemungkinan fatal error di endpoint kustom WP.',
                wpResponse: wpText.substring(0, 500),
            });
        }

        if (!wpRes.ok || data.code) {
            return res.status(wpRes.status).json({
                error: data.message || 'Gagal membuat tagihan di WooCommerce (Custom Endpoint)',
                details: data,
            });
        }

        return res.status(200).json({
            success: true,
            orderId: data.order_id,
            paymentUrl: data.paymentUrl || null,
        });

    } catch (fatalError: any) {
        // Menangkap error apapun yang tidak tertangani agar tidak menjadi blank 500
        console.error('[checkout] FATAL UNHANDLED ERROR:', fatalError);
        return res.status(500).json({
            error: 'Internal server error',
            details: fatalError?.message ?? String(fatalError),
        });
    }
}

```