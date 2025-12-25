"use client";

import { useState } from "react";
import { submitOrder } from "../lib/actions";

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    productId: string; // 'personal' or 'group'
}

export default function PaymentModal({ isOpen, onClose, productName, productId }: PaymentModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [profesi, setProfesi] = useState("");

    // Additional participants state for controlled inputs (Optional but good for UX if we want to add validation later)
    // We will rely on FormData for submission, but let's clear inputs if needed or just use uncontrolled for simplicity on the extra ones to save lines?
    // Let's stick to uncontrolled for extra participants to keep file size manageable, or use a simple loop.
    // Actually, user wants "form wajib diisi", so "required" attribute is enough.


    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");

    if (!isOpen) return null;

    // Manual submission handler to avoid useActionState (React #310 issues with some versions)
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
                // Successful, redirect to Xendit
                window.location.href = result.payment_url;
            }
        } catch (err) {
            console.error(err);
            setError("Terjadi kesalahan yang tidak diketahui.");
        } finally {
            setIsPending(false);
        }
    };

    // Removed manual handleSubmit, using formAction directly on <form>

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-6 md:p-8">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-slate-900">Form Pendaftaran</h3>
                        <p className="text-slate-600 text-sm mt-1">Paket: <span className="font-semibold text-[#0ea5e9]">{productName}</span></p>
                    </div>



                    {error && (
                        <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg flex items-start gap-2">
                            <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="hidden" name="product_id" value={productId} />
                        {productId === 'group' ? (
                            <div className="space-y-6">
                                {/* Participant 1 */}
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                    <h4 className="font-semibold text-slate-700 mb-3 border-b border-slate-200 pb-2">Peserta 1 (Ketua)</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                            <input name="name" type="text" required className="w-full px-3 py-2 border rounded-lg" placeholder="Nama Peserta 1" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                            <input name="email" type="email" required className="w-full px-3 py-2 border rounded-lg" placeholder="email@contoh.com" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                                            <input name="phone" type="tel" required className="w-full px-3 py-2 border rounded-lg" placeholder="08xxxxxxxx" defaultValue={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Profesi / Pekerjaan</label>
                                            <input name="profesi" type="text" required className="w-full px-3 py-2 border rounded-lg" placeholder="Profesi" defaultValue={profesi} onChange={(e) => setProfesi(e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                                {/* Participant 2 */}
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                    <h4 className="font-semibold text-slate-700 mb-3 border-b border-slate-200 pb-2">Peserta 2</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                            <input name="name_2" type="text" required className="w-full px-3 py-2 border rounded-lg" placeholder="Nama Peserta 2" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                            <input name="email_2" type="email" required className="w-full px-3 py-2 border rounded-lg" placeholder="email@contoh.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                                            <input name="phone_2" type="tel" required className="w-full px-3 py-2 border rounded-lg" placeholder="08xxxxxxxx" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Profesi / Pekerjaan</label>
                                            <input name="profesi_2" type="text" required className="w-full px-3 py-2 border rounded-lg" placeholder="Profesi" />
                                        </div>
                                    </div>
                                </div>

                                {/* Participant 3 */}
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                    <h4 className="font-semibold text-slate-700 mb-3 border-b border-slate-200 pb-2">Peserta 3</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                            <input name="name_3" type="text" required className="w-full px-3 py-2 border rounded-lg" placeholder="Nama Peserta 3" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                            <input name="email_3" type="email" required className="w-full px-3 py-2 border rounded-lg" placeholder="email@contoh.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                                            <input name="phone_3" type="tel" required className="w-full px-3 py-2 border rounded-lg" placeholder="08xxxxxxxx" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Profesi / Pekerjaan</label>
                                            <input name="profesi_3" type="text" required className="w-full px-3 py-2 border rounded-lg" placeholder="Profesi" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Personal Plan View (Original)
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
                                        placeholder="Contoh: Guru / Mahasiswa"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
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
                                "Lanjut Pembayaran"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
