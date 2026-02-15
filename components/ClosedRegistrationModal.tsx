"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface ClosedRegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ClosedRegistrationModal({ isOpen, onClose }: ClosedRegistrationModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Auto-close logic? No, auto-show on page load.
    // The parent component controls `isOpen`.

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "bg-slate-900/60 backdrop-blur-sm" : "bg-transparent pointer-events-none"}`}
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative flex flex-col transition-all duration-300 transform ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-center relative overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-75"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-1">
                            Pendaftaran Ditutup
                        </h3>
                        <p className="text-red-100 text-sm font-medium">
                            Mohon maaf, kuota peserta sudah penuh.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center bg-white relative">
                    <div className="mb-6">
                        <div className="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-4 border-4 border-red-100 ring-4 ring-red-50/50">
                            <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                {/* Lock icon */}
                            </svg>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            Terima kasih atas antusiasme Anda! Sayangnya, pendaftaran untuk <br />
                            <strong className="text-slate-800">Short Course Exclusive Class Sesi 3</strong> <br />
                            saat ini sudah kami tutup karena kuota telah terpenuhi.
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                        <button
                            onClick={onClose}
                            className="block w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide uppercase"
                        >
                            Tutup
                        </button>

                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Pantau info kelas selanjutnya di Instagram kami
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
