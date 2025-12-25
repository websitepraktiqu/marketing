"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { submitOrder } from "../../lib/actions";

function CheckoutForm() {
    const searchParams = useSearchParams();
    const plan = searchParams.get("plan") || "personal";

    let productId = plan;
    let productName = "Personal Plan (1 Orang)";
    let priceDisplay = "Rp 450.000 / orang";

    if (plan === "group") {
        productId = "group";
        productName = "Group Plan (3 Orang)";
        priceDisplay = "Rp 1.200.000 (Hemat Rp 150rb)";
    } else if (plan === "bundle-personal") {
        productId = "bundle-personal";
        productName = "Paket All Session - Personal";
        priceDisplay = "Rp 1.699.000 / orang";
    } else if (plan === "bundle-group") {
        productId = "bundle-group";
        productName = "Paket All Session - Group";
        priceDisplay = "Rp 1.599.000 (Hemat Banyak)";
    } else {
        // default fallback
        productId = "personal";
        productName = "Personal Plan (1 Orang)";
        priceDisplay = "Rp 450.000 / orang";
    }

    const isGroupProduct = productId === 'group' || productId === 'bundle-group';
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [profesi, setProfesi] = useState("");

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
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Form Pendaftaran</h1>
                <p className="text-slate-600 mt-2">Anda memilih: <span className="font-semibold text-[#0ea5e9]">{productName}</span></p>
                <div className="mt-4 inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm">
                    {priceDisplay}
                </div>
            </div>

            {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg flex items-start gap-2">
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="product_id" value={productId} />

                {isGroupProduct ? (
                    <div className="space-y-8">
                        {/* Participant 1 */}
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">1</span>
                                Peserta 1 (Ketua)
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                    <input name="name" type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Nama Lengkap" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input name="email" type="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="email@contoh.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                                    <input name="phone" type="tel" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="08xxxxxxxx" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Profesi / Pekerjaan</label>
                                    <input name="profesi" type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Contoh: Guru TK / Psikolog / Orang Tua" value={profesi} onChange={(e) => setProfesi(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        {/* Participant 2 */}
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">2</span>
                                Peserta 2
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                    <input name="name_2" type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Nama Lengkap" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input name="email_2" type="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="email@contoh.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                                    <input name="phone_2" type="tel" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="08xxxxxxxx" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Profesi / Pekerjaan</label>
                                    <input name="profesi_2" type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Contoh: Guru TK / Psikolog / Orang Tua" />
                                </div>
                            </div>
                        </div>

                        {/* Participant 3 */}
                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                            <h4 className="font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">3</span>
                                Peserta 3
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                    <input name="name_3" type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Nama Lengkap" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input name="email_3" type="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="email@contoh.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                                    <input name="phone_3" type="tel" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="08xxxxxxxx" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Profesi / Pekerjaan</label>
                                    <input name="profesi_3" type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Contoh: Guru TK / Psikolog / Orang Tua" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Personal Plan View
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                                placeholder="Masukkan nama lengkap"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                                placeholder="nama@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                name="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                                placeholder="08xxxxxxxxxx"
                                required
                            />
                            <p className="text-xs text-slate-500 mt-1">*Pastikan nomor terdaftar di WhatsApp untuk notifikasi.</p>
                        </div>

                        <div>
                            <label htmlFor="profesi" className="block text-sm font-medium text-slate-700 mb-1">Profesi / Pekerjaan</label>
                            <input
                                type="text"
                                id="profesi"
                                value={profesi}
                                name="profesi"
                                onChange={(e) => setProfesi(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent outline-none transition-all"
                                placeholder="Contoh: Guru TK / Psikolog / Orang Tua"
                                required
                            />
                        </div>
                    </div>
                )}

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isPending ? "Memproses..." : "Lanjut Pembayaran"}
                    </button>

                    <div className="text-center mt-4">
                        <Link href="/" className="text-sm text-slate-500 hover:text-slate-700">
                            &larr; Kembali ke Home
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
            <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
                <CheckoutForm />
            </Suspense>
        </div>
    );
}
