"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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

// --- ADMIN ACTIONS ---

export async function adminLogin(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const cookieStore = await cookies();

    const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL || "https://event.praktiqu.com";

    try {
        const response = await fetch(`${apiUrl}/wp-json/jwt-auth/v1/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await response.json();

        if (!response.ok || !data.token) {
            console.error("Login Failed:", data);
            return { error: data.message || "Login gagal. Periksa username & password." };
        }

        // Set Cookie
        cookieStore.set("admin_token", data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 7 Days
            path: "/",
        });

        return { success: true };

    } catch (error: any) {
        console.error("Admin Login Error:", error);
        return { error: "Terjadi kesalahan koneksi ke server." };
    }
}

export async function adminLogout() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_token");
    redirect("/admin/login");
}

export async function getTransactions(token: string) {
    const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL || "https://event.praktiqu.com";

    try {
        const response = await fetch(`${apiUrl}/wp-json/praktiqu/v1/transactions`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));

            if (response.status === 404) {
                return { error: "Endpoint API Transaksi belum ditemukan di WordPress." };
            }
            if (response.status === 403 || response.status === 401) {
                return { error: "Sesi kadaluarsa, silakan login ulang." };
            }
            return { error: errorData.message || `Error: ${response.statusText}` };
        }

        const data = await response.json();
        return { data };

    } catch (error: any) {
        console.error("Get Transactions Error:", error);
        return { error: "Gagal mengambil data transaksi." };
    }
}
