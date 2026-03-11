import { NextRequest, NextResponse } from 'next/server';

// Mapping from string product slug → numeric WooCommerce product ID
// Source: snippets.php product_map
const PRODUCT_ID_MAP: Record<string, number> = {
    'bundling-bantu-anakku': 5389,
    'topik-1': 5225,
    'topik-2': 5265,
    'topik-3': 5268,
    'topik-4': 5272,
    'topik-5': 5276,
    'topik-6': 5280,
    'topik-7': 5283,
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { product_id, billing, profesi } = body;

        // --- Validate env ---
        const key = process.env.WC_CONSUMER_KEY;
        const secret = process.env.WC_CONSUMER_SECRET;
        const wcBaseUrl = process.env.NEXT_PUBLIC_WP_API_URL || 'https://event.praktiqu.com';

        console.log('[checkout] WC_KEY exists:', !!key, '| WC_SECRET exists:', !!secret);

        if (!key || !secret) {
            return NextResponse.json(
                { error: 'Konfigurasi server belum lengkap. Hubungi admin.' },
                { status: 500 }
            );
        }

        // --- Validate input ---
        if (!product_id || !billing?.email || !billing?.name || !billing?.phone) {
            return NextResponse.json(
                { error: 'Data tidak lengkap. Nama, email, nomor WhatsApp, dan produk diperlukan.' },
                { status: 400 }
            );
        }

        const numericProductId = PRODUCT_ID_MAP[product_id];
        if (!numericProductId) {
            return NextResponse.json(
                { error: `Produk tidak dikenal: ${product_id}` },
                { status: 400 }
            );
        }

        const authHeader = 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64');
        let customerId = 0;

        // --- Step 1: Look up existing WooCommerce customer by email ---
        try {
            const customerRes = await fetch(
                `${wcBaseUrl}/wp-json/wc/v3/customers?email=${encodeURIComponent(billing.email)}&role=all`,
                { headers: { Authorization: authHeader } }
            );
            if (customerRes.ok) {
                const customers = await customerRes.json();
                if (Array.isArray(customers) && customers.length > 0) {
                    customerId = customers[0].id;
                    console.log('[checkout] Found existing customer:', customerId);
                }
            }
        } catch (e) {
            console.error('[checkout] Customer lookup error:', e);
        }

        // --- Step 2: Create customer if not found ---
        if (customerId === 0) {
            try {
                const nameParts = billing.name.trim().split(' ');
                const username =
                    billing.email.split('@')[0].replace(/[^a-zA-Z0-9_]/g, '') + '_' + Date.now();

                const createRes = await fetch(`${wcBaseUrl}/wp-json/wc/v3/customers`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: authHeader,
                    },
                    body: JSON.stringify({
                        email: billing.email,
                        first_name: nameParts[0],
                        last_name: nameParts.slice(1).join(' ') || '',
                        username,
                        // Include password so member area login works immediately
                        ...(billing.password ? { password: billing.password } : {}),
                    }),
                });

                if (createRes.ok) {
                    const newCustomer = await createRes.json();
                    customerId = newCustomer.id ?? 0;
                    console.log('[checkout] Created new customer:', customerId);
                } else {
                    const errText = await createRes.text();
                    console.error(
                        '[checkout] Failed to create customer:',
                        createRes.status,
                        errText.substring(0, 200)
                    );
                }
            } catch (e) {
                console.error('[checkout] Customer creation error:', e);
            }
        }

        // --- Step 3: Create order via custom WP endpoint + Xendit ---
        const orderData = {
            customer_id: customerId,
            billing: {
                first_name: billing.name,
                email: billing.email,
                phone: billing.phone,
            },
            items: [{ product_id: numericProductId, quantity: 1 }],
            profesi: profesi ?? '',
        };

        console.log('[checkout] Creating order for customer_id:', customerId, '| product_id:', numericProductId);

        const wpRes = await fetch(`${wcBaseUrl}/wp-json/praktiqu/v1/checkout-xendit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        });

        const wpText = await wpRes.text();
        console.log('[checkout] WP response status:', wpRes.status, '| preview:', wpText.substring(0, 300));

        let data: any;
        try {
            data = JSON.parse(wpText);
        } catch {
            return NextResponse.json(
                {
                    error: 'Server mengembalikan respons tidak valid.',
                    raw: wpText.substring(0, 500),
                },
                { status: 502 }
            );
        }

        if (!wpRes.ok || data?.code) {
            return NextResponse.json(
                { error: data?.message || 'Gagal membuat order di WordPress.', details: data },
                { status: wpRes.status || 500 }
            );
        }

        // Support both paymentUrl and payment_url key (defensive)
        const paymentUrl = data.paymentUrl || data.payment_url || null;

        return NextResponse.json({
            success: true,
            orderId: data.order_id,
            paymentUrl,
        });
    } catch (err: any) {
        console.error('[checkout] FATAL ERROR:', err);
        return NextResponse.json(
            { error: 'Internal server error', details: err?.message ?? String(err) },
            { status: 500 }
        );
    }
}
