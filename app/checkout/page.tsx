"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { submitOrder } from "../../lib/actions";
import { roadmapData } from "../../lib/data";

function CheckoutContent() {
    const searchParams = useSearchParams();
    const plan = searchParams.get("plan") || "personal";

    // --- LOGIC: Determine Plan / Topic Details ---
    let productId = plan;
    let productName = "Personal Plan";
    let productPrice = 0;
    let productOriginalPrice = 0;
    let productImage = "/images/placeholder-topic.png";
    let isTopicProduct = false;

    // Check if it's a specific topic (topik-1 to topik-7)
    if (plan.startsWith("topik-")) {
        const topicId = parseInt(plan.replace("topik-", ""), 10);
        // Find topic in roadmapData
        const foundTopic = roadmapData
            .flatMap(step => step.topics)
            .find(t => t.id === topicId);

        if (foundTopic) {
            productId = plan; // "topik-1" etc.
            productName = foundTopic.name;
            productPrice = foundTopic.price || 75000;
            productOriginalPrice = foundTopic.originalPrice || 150000;
            productImage = foundTopic.image || "/images/placeholder-topic.png";
            isTopicProduct = true;
        }
    } else {
        // Fallback for previous bundles/plans logic
        if (plan === "group") {
            productId = "group";
            productName = "Group Plan (3 Orang)";
            productPrice = 1200000;
        } else if (plan === "bundle-personal") {
            productId = "bundle-personal";
            productName = "Paket All Session - Bundling Personal";
            productPrice = 445000;
            productOriginalPrice = 700000;
            productImage = "/images/seri-bantu-anakku/bundling-banner.png";
        } else if (plan === "bundle-group") {
            productId = "bundle-group";
            productName = "Paket All Session - Bundling Group";
            productPrice = 1599000;
        } else if (plan === "bundling-bantu-anakku") {
            // New bundling specific name from landing page link
            productId = "bundle-personal"; // Map to backend product ID
            productName = "Bundling 7 Topik - Seri Bantu Anakku";
            productPrice = 445000;
            productOriginalPrice = 700000;
            productImage = "/images/seri-bantu-anakku/bundling-banner.png";
        } else {
            // Default Personal
            productId = "personal";
            productName = "Personal Plan (1 Orang)";
            productPrice = 450000;
        }
    }

    const isGroupProduct = plan.includes("group"); // Simple check for group logic

    // Form State
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        setIsPending(true);

        const formData = new FormData(event.currentTarget);

        try {
            const result = await submitOrder(null, formData);
            if (result.error) {
                setError(result.error);
            } else if (result.payment_url) {
                window.location.href = result.payment_url;
            }
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan yang tidak diketahui.");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* COLUMN 1: User Data Form */}
                <div className="order-2 lg:order-1">
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                        <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
                            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-[#435b9b] text-white flex items-center justify-center text-sm">1</span>
                                Data Pendaftaran
                            </h2>
                        </div>

                        <div className="p-8">
                            {error && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl flex items-start gap-3">
                                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <div>
                                        <p className="font-bold">Gagal Memproses</p>
                                        <p>{error}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <input type="hidden" name="product_id" value={productId} />

                                <div className="space-y-5">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:border-[#435b9b] focus:ring-4 focus:ring-[#435b9b]/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 bg-white"
                                            placeholder="Masukkan nama sesuai KTP"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Alamat Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:border-[#435b9b] focus:ring-4 focus:ring-[#435b9b]/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 bg-white"
                                            placeholder="nama@email.com"
                                        />
                                        <p className="text-xs text-slate-500 mt-2 ml-1">Akses materi akan dikirimkan ke email ini.</p>
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Nomor WhatsApp</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm">+62</div>
                                            <input
                                                name="phone"
                                                type="tel"
                                                required
                                                className="w-full pl-14 pr-5 py-3 rounded-xl border border-slate-300 focus:border-[#435b9b] focus:ring-4 focus:ring-[#435b9b]/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 bg-white"
                                                placeholder="812345678"
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field - NEW */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Buat Password Akun</label>
                                        <input
                                            name="password"
                                            type="password"
                                            required
                                            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:border-[#435b9b] focus:ring-4 focus:ring-[#435b9b]/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 bg-white"
                                            placeholder="Minimal 6 karakter"
                                            minLength={6}
                                        />
                                        <p className="text-xs text-slate-500 mt-2 ml-1">Password ini akan digunakan untuk login member area.</p>
                                    </div>

                                    {/* Profession Field */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Profesi / Pekerjaan</label>
                                        <input
                                            name="profesi"
                                            type="text"
                                            required
                                            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:border-[#435b9b] focus:ring-4 focus:ring-[#435b9b]/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 bg-white"
                                            placeholder="Contoh: Guru TK / Ibu Rumah Tangga"
                                        />
                                    </div>

                                    {/* Group logic fields would go here if isGroupProduct is true - omitted for brevity based on current task focus on single topics */}
                                </div>

                                <div className="pt-6 border-t border-slate-100">
                                    <h3 className="text-sm font-bold text-slate-700 mb-4">Metode Pembayaran Tersedia</h3>
                                    <div className="flex flex-wrap gap-2 opacity-70 grayscale hover:grayscale-0 transition-all">
                                        {/* Mock Payment Logos */}
                                        <div className="h-8 px-2 border rounded flex items-center justify-center bg-white"><span className="text-xs font-bold text-blue-800">BCA</span></div>
                                        <div className="h-8 px-2 border rounded flex items-center justify-center bg-white"><span className="text-xs font-bold text-orange-600">BNI</span></div>
                                        <div className="h-8 px-2 border rounded flex items-center justify-center bg-white"><span className="text-xs font-bold text-blue-600">Mandiri</span></div>
                                        <div className="h-8 px-2 border rounded flex items-center justify-center bg-white"><span className="text-xs font-bold text-green-600">GoPay</span></div>
                                        <div className="h-8 px-2 border rounded flex items-center justify-center bg-white"><span className="text-xs font-bold text-purple-600">OVO</span></div>
                                        <div className="h-8 px-2 border rounded flex items-center justify-center bg-white"><span className="text-xs font-bold text-blue-400">QRIS</span></div>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">Pembayaran diproses aman oteh Payment Gateway otomatis.</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full bg-[#fe6007] hover:bg-[#e55606] text-white font-bold py-4 rounded-xl shadow-[0_4px_0_#c2410c] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                >
                                    {isPending ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Memproses...
                                        </>
                                    ) : (
                                        <>
                                            Bayar Sekarang
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* COLUMN 2: Order Summary */}
                <div className="order-1 lg:order-2">
                    <div className="sticky top-8">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#435b9b]/10 relative group">
                            {/* Header Image */}
                            <div className="relative h-48 w-full bg-slate-100">
                                <Image
                                    src={productImage}
                                    alt={productName}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Produk yang dipilih</div>
                                    <h3 className="text-white text-xl md:text-2xl font-bold leading-tight shadow-sm text-shadow">{productName}</h3>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-end mb-6 pb-6 border-b border-dashed border-slate-200">
                                    <span className="text-slate-500 font-medium">Total Harga</span>
                                    <div className="text-right">
                                        {productOriginalPrice > productPrice && (
                                            <div className="text-sm text-slate-400 line-through mb-1">Rp {productOriginalPrice.toLocaleString('id-ID')}</div>
                                        )}
                                        <div className="text-3xl font-extrabold text-[#fe6007]">Rp {productPrice.toLocaleString('id-ID')}</div>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4 mb-8">
                                    <h4 className="font-bold text-slate-800">Fasilitas yang Didapatkan:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-600 text-sm">
                                            <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            Akses video materi selamanya
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600 text-sm">
                                            <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            PDF Materi Presentasi
                                        </li>
                                        {isTopicProduct && (
                                            <li className="flex items-start gap-3 text-slate-600 text-sm">
                                                <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                Worksheet & Tools Refleksi sesuai Topik
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
                                    <div className="shrink-0 mt-1 text-blue-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <p className="text-xs text-blue-700 leading-relaxed">
                                        <strong>Jaminan Garansi 100%</strong> jika materi tidak bisa diakses atau terjadi kendala teknis dari sistem kami.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            Secure 256-bit SSL Encrypted Checkout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            {/* Simple Header for Checkout */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-bold text-xl text-[#435b9b]">PraktiQu</span>
                    </Link>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:block">Secure Checkout</div>
                </div>
            </div>

            <Suspense fallback={<div className="text-center p-20 text-slate-500">Memuat formulir...</div>}>
                <CheckoutContent />
            </Suspense>
        </div>
    );
}
