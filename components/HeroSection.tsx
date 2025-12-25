"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {

    const [pricingMode, setPricingMode] = useState<'personal' | 'group'>('personal');

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-10 pb-24 px-6 md:px-12">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                        Sesi 3 Open
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2]">
                        SHORT COURSE EXCLUSIVE CLASS SERI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4]">
                            Penanganan Masalah Tumbuh Kembang Anak
                        </span>
                    </h1>

                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                        Yuk, siapkan diri kamu mendampingi klien dengan masalah tumbuh kembang.
                    </p>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        {[
                            {
                                text: "Materi Terstruktur",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            }, // Book
                            {
                                text: "Kelas Lengkap (Tools & Diskusi)",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            }, // Briefcase/Toolbox
                            {
                                text: "Diskusi Kasus (Khusus Alumni)",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            }, // Chat/Discussion
                            {
                                text: "POV Berbagai Disiplin Ilmu",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            }, // Globe/Perspective
                            {
                                text: "Akses Rekaman Belajar",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            }, // Video Camera
                            {
                                text: "Tools Alur Kerja Psikolog",
                                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            } // Clipboard/Checklist
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {item.icon}
                                    </svg>
                                </div>
                                <span className="text-sm font-bold text-slate-700 leading-tight">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Card */}
                <div className="relative mx-auto w-full max-w-md order-1 lg:order-2 mb-8 lg:mb-0">

                    {/* Card Effect */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10 border border-slate-100">
                            <div className="bg-slate-900 p-4 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#0ea5e9] opacity-90"></div>
                                <div className="relative z-10">
                                    <span className="inline-block py-1 px-3 rounded text-[10px] font-bold tracking-widest bg-white/20 text-white mb-1 backdrop-blur-sm">
                                        LIMITED SEAT
                                    </span>
                                    <h3 className="text-white font-bold text-lg">Sesi 3</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-100">
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase mb-1">Date</p>
                                        <p className="text-slate-900 font-bold">17 Januari 2026</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-500 font-bold uppercase mb-1">Time</p>
                                        <p className="text-slate-900 font-bold">09.00 - 16.00 WIB</p>
                                    </div>
                                </div>

                                {/* Toggle Options */}
                                <div className="flex bg-slate-100 p-1 rounded-lg mb-6">
                                    <button
                                        onClick={() => setPricingMode('personal')}
                                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${pricingMode === 'personal'
                                            ? 'bg-white text-cyan-600 shadow-sm'
                                            : 'text-slate-500 hover:text-slate-700'
                                            }`}
                                    >
                                        Personal
                                    </button>
                                    <button
                                        onClick={() => setPricingMode('group')}
                                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${pricingMode === 'group'
                                            ? 'bg-white text-cyan-600 shadow-sm'
                                            : 'text-slate-500 hover:text-slate-700'
                                            }`}
                                    >
                                        Grup (Min 3)
                                    </button>
                                </div>

                                {/* Countdown Timer */}
                                <div className="mb-4 bg-orange-50 border border-orange-100 rounded-lg p-3 flex items-center justify-between">
                                    <span className="text-xs font-bold text-orange-600 uppercase">Promo Berakhir:</span>
                                    <div className="flex gap-2 text-xs font-mono font-bold text-orange-700">
                                        <span className="bg-white px-2 py-1 rounded border border-orange-200">02</span> :
                                        <span className="bg-white px-2 py-1 rounded border border-orange-200">14</span> :
                                        <span className="bg-white px-2 py-1 rounded border border-orange-200">30</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-2">Special Price</p>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-4xl font-extrabold text-slate-900">
                                            {pricingMode === 'personal' ? 'Rp450' : 'Rp400'}
                                            <span className="text-xl text-slate-500">rb{pricingMode === 'group' ? '/pax' : ''}</span>
                                        </span>
                                        <span className="text-sm text-slate-400 line-through decoration-red-400">Rp600rb</span>
                                    </div>
                                    <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        {pricingMode === 'personal' ? 'Hemat Rp50rb untuk grup' : 'Lebih hemat dengan daftar grup'}
                                    </p>
                                </div>

                                <Link
                                    href={`/checkout?plan=${pricingMode}`}
                                    className="group relative block w-full overflow-hidden rounded-xl bg-[#0ea5e9] p-4 text-center font-bold text-white shadow-lg transition-all hover:bg-[#0284c7] hover:shadow-cyan-200 mb-6"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Daftar {pricingMode === 'personal' ? 'Sekarang' : 'Grup'}
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                </Link>

                                {/* Social Proof */}
                                <div className="flex items-center justify-center gap-3">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                            <svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                                            <svg className="w-full h-full text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                            <svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-cyan-100 flex items-center justify-center text-[10px] font-bold text-cyan-600">
                                            500+
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium">
                                        Alumni telah bergabung
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
