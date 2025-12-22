export interface CheckoutData {
    product_id: string;
    name: string;
    email: string;
    phone: string;
}

interface CheckoutResponse {
    status: string;
    payment_url: string;
    order_id?: number;
    message?: string;
}

export async function handleBuy(data: CheckoutData): Promise<void> {
    const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL || "https://event.praktiqu.com";

    try {
        const response = await fetch(`${apiUrl}/wp-json/praktiqu/v1/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result: CheckoutResponse = await response.json();

        if (!response.ok || (result.status && result.status !== "success")) {
            throw new Error(result.message || "Gagal memproses pembayaran");
        }

        if (result.payment_url) {
            window.location.href = result.payment_url;
        } else {
            throw new Error("Payment URL not found in response");
        }
    } catch (error) {
        console.error("Checkout Error:", error);
        throw error;
    }
}
