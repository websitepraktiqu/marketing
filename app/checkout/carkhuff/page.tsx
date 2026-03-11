"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";

const PRODUCT_ID = "carkhuff-ecourse";
const PRODUCT_NAME = "E-Course Metode Konseling Carkhuff";
const PRODUCT_PRICE = 299000;
const PRODUCT_IMAGE = "/images/carkhuff/carkhuf-e-course-landscape.png";

function CheckoutContent() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        setIsPending(true);

        const formData = new FormData(event.currentTarget);

        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    product_id: PRODUCT_ID,
                    billing: {
                        name: formData.get("name") as string,
                        email: formData.get("email") as string,
                        phone: formData.get("phone") as string,
                        password: formData.get("password") as string,
                    },
                    profesi: formData.get("profesi") as string,
                }),
            });

            const result = await res.json();

            if (!res.ok || result.error) {
                setError(result.error || "Terjadi kesalahan. Silakan coba lagi.");
            } else if (result.paymentUrl) {
                window.location.href = result.paymentUrl;
            } else {
                setError("Tidak ada URL pembayaran yang diterima. Hubungi admin.");
            }
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan koneksi. Periksa internet Anda dan coba lagi.");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* COLUMN 1: Form */}
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
                                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <div>
                                        <p className="font-bold">Gagal Memproses</p>
                                        <p>{error}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-5">
                                    {/* Name */}
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

                                    {/* Email */}
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

                                    {/* Phone */}
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

                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Buat Password Akun</label>
                                        <input
                                            name="password"
                                            type="password"
                                            required
                                            minLength={6}
                                            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:border-[#435b9b] focus:ring-4 focus:ring-[#435b9b]/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 bg-white"
                                            placeholder="Minimal 6 karakter"
                                        />
                                        <p className="text-xs text-slate-500 mt-2 ml-1">Password untuk login ke member area setelah pembayaran.</p>
                                    </div>

                                    {/* Profesi */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Profesi / Pekerjaan</label>
                                        <input
                                            name="profesi"
                                            type="text"
                                            required
                                            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:border-[#435b9b] focus:ring-4 focus:ring-[#435b9b]/10 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 bg-white"
                                            placeholder="Contoh: Psikolog / Konselor / Guru BK"
                                        />
                                    </div>
                                </div>

                                {/* Payment methods */}
                                <div className="pt-6 border-t border-slate-100">
                                    <h3 className="text-sm font-bold text-slate-700 mb-4">Metode Pembayaran Tersedia</h3>
                                    <div className="relative w-full">
                                        <Image
                                            src="/images/payment-methods.png"
                                            alt="Metode Pembayaran: BCA, Mandiri, BRI, BNI, GoPay, OVO, ShopeePay"
                                            width={600}
                                            height={200}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">Pembayaran diproses aman oleh Payment Gateway otomatis.</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full bg-[#fe6007] hover:bg-[#e55606] text-white font-bold py-4 rounded-xl shadow-[0_4px_0_#c2410c] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                >
                                    {isPending ? "Memproses..." : "Bayar Sekarang"}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* COLUMN 2: Order Summary */}
                <div className="order-1 lg:order-2">
                    <div className="sticky top-8">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#435b9b]/10">
                            {/* Header Image */}
                            <div className="relative h-56 w-full bg-slate-100">
                                <Image
                                    src={PRODUCT_IMAGE}
                                    alt={PRODUCT_NAME}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="text-white/70 text-xs font-bold uppercase tracking-wider mb-2">E-Course</div>
                                    <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">{PRODUCT_NAME}</h3>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-end mb-6 pb-6 border-b border-dashed border-slate-200">
                                    <span className="text-slate-500 font-medium">Total Harga</span>
                                    <div className="text-3xl font-extrabold text-[#fe6007]">
                                        Rp {PRODUCT_PRICE.toLocaleString("id-ID")}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <h4 className="font-bold text-slate-800">Yang Akan Anda Dapatkan:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            "5 Video Pembelajaran Intensif",
                                            "Worksheet Refleksi Konselor",
                                            "E-Certificate Kelulusan",
                                            "Akses Fleksibel (bisa diulang)",
                                            "Contoh Kasus Nyata",
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[#435b9b]/5 p-4 rounded-xl flex items-start gap-3">
                                    <div className="shrink-0 mt-1 text-[#435b9b]">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs text-[#435b9b] leading-relaxed">
                                        <strong>Jaminan Garansi 100%</strong> jika materi tidak bisa diakses atau terjadi kendala teknis dari sistem kami.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CheckoutCarkhuff() {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans">
            {/* Sticky Header */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                    <Link href="/carkhuff-e-course" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="PraktiQu Logo"
                            width={120}
                            height={40}
                            className="h-8 w-auto"
                        />
                    </Link>
                    <div className="hidden md:flex items-center gap-2 text-xs font-bold text-green-700 bg-green-50 px-4 py-2 rounded-full uppercase tracking-widest border border-green-100">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Secure Checkout</span>
                    </div>
                </div>
            </div>

            <Suspense fallback={<div className="text-center p-20 text-slate-500">Memuat formulir...</div>}>
                <CheckoutContent />
            </Suspense>
        </div>
    );
}
