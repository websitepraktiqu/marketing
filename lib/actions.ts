"use server";

import { redirect } from "next/navigation";

export interface CheckoutState {
    error?: string;
    success?: boolean;
    payment_url?: string;
}

export async function submitOrder(prevState: any, formData: FormData): Promise<CheckoutState> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const productId = formData.get("product_id") as string;

    // Extra participants
    const name_2 = formData.get("name_2") as string;
    const email_2 = formData.get("email_2") as string;
    const phone_2 = formData.get("phone_2") as string;

    const name_3 = formData.get("name_3") as string;
    const email_3 = formData.get("email_3") as string;
    const phone_3 = formData.get("phone_3") as string;

    const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL || "https://event.praktiqu.com";
    // SECURITY: Hardcoded usage to enable "git push" deployment without Vercel dashboard config.
    // Ideally, this should be in Environment Variables.
    const apiSecret = process.env.PRAKTIQU_API_SECRET || "b64f9765-af25-4707-ab30-f794dcfac8c4";

    if (!apiSecret) {
        console.error("CONFIGURATION ERROR: PRAKTIQU_API_SECRET is not set.");
        return { error: "Server configuration error. Please contact support." };
    }

    try {
        const response = await fetch(`${apiUrl}/wp-json/praktiqu/v1/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Praktiqu-Secret": apiSecret, // Inject Secret Key
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                product_id: productId,
                // Pass extras
                name_2, email_2, phone_2,
                name_3, email_3, phone_3,

                // Pass professions
                profesi: formData.get("profesi") as string,
                profesi_2: formData.get("profesi_2") as string,
                profesi_3: formData.get("profesi_3") as string,
            }),
        });

        const result = await response.json();

        if (!response.ok || result.status !== "success") {
            throw new Error(result.message || "Failed to create order");
        }

        // We cannot use window.location in Server Action, using redirect()
        // Note: redirect throws an error internally in Next.js, so it must be outside try/catch if we want to catch other errors, 
        // or we handle the specific redirect error type.
        // Easiest is to return the URL and let client redirect, OR just redirect here.
        // However, redirect() terminates execution.
        if (result.payment_url) {
            // Return URL to client for redirection (avoids NEXT_REDIRECT error in try-catch blocks)
            return { success: true, payment_url: result.payment_url };
        } else {
            return { error: "No payment URL received" };
        }

    } catch (error: any) {
        console.error("Order Submit Error:", error);
        // The instruction provided a specific error message for the catch block.
        // Assuming this is for general API connection errors.
        if (error.message === "Failed to fetch") { // Example: network error
            return { error: "Gagal menghubungkan ke server." };
        }
        return { error: error.message || "Something went wrong" };
    }
}
