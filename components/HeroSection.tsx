"use client";

import Link from 'next/link';

export default function HeroSection() {

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-16 pb-24 px-6 md:px-12">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                        Batch 02 Open
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15]">
                        Pendekatan Interdisiplin <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4]">
                            Tumbuh Kembang Anak
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Pahami tahapan tumbuh kembang anak dari prenatal hingga deviasi perkembangan bersama ahlinya.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-slate-900 text-sm">Materi Terstruktur</h3>
                                <p className="text-slate-500 text-xs">Prenatal - DDTK</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-slate-900 text-sm">Deteksi Dini</h3>
                                <p className="text-slate-500 text-xs">Identifikasi Deviasi</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Card: Distinctive "Floating" Card */}
                <div className="relative mx-auto w-full max-w-md">
                    {/* Card Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10 border border-slate-100">
                        <div className="bg-slate-900 p-6 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#0ea5e9] opacity-90"></div>
                            <div className="relative z-10">
                                <span className="inline-block py-1 px-3 rounded text-[10px] font-bold tracking-widest bg-white/20 text-white mb-2 backdrop-blur-sm">
                                    LIMITED SEAT
                                </span>
                                <h3 className="text-white font-bold text-lg">Batch 02 Registration</h3>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-100">
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Date</p>
                                    <p className="text-slate-900 font-bold">17-18 Des 2025</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Time</p>
                                    <p className="text-slate-900 font-bold">16.00 WIB</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-xs text-slate-500 font-bold uppercase mb-2">Special Price</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-extrabold text-slate-900">Rp450<span className="text-xl text-slate-500">rb</span></span>
                                    <span className="text-sm text-slate-400 line-through decoration-red-400">Rp600rb</span>
                                </div>
                                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    Hemat Rp50rb untuk grup
                                </p>
                            </div>

                            <Link
                                href="/checkout?plan=personal"
                                className="group relative block w-full overflow-hidden rounded-xl bg-[#0ea5e9] p-4 text-center font-bold text-white shadow-lg transition-all hover:bg-[#0284c7] hover:shadow-cyan-200"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Daftar Sekarang
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                            </Link>

                            <div className="mt-6 flex justify-center gap-4 text-center">
                                <div className="bg-slate-50 px-3 py-2 rounded">
                                    <span className="block text-lg font-bold text-slate-900 leading-none">09</span>
                                    <span className="text-[9px] text-slate-500 uppercase">Hari</span>
                                </div>
                                <div className="self-center font-bold text-slate-300">:</div>
                                <div className="bg-slate-50 px-3 py-2 rounded">
                                    <span className="block text-lg font-bold text-slate-900 leading-none">14</span>
                                    <span className="text-[9px] text-slate-500 uppercase">Jam</span>
                                </div>
                                <div className="self-center font-bold text-slate-300">:</div>
                                <div className="bg-slate-50 px-3 py-2 rounded">
                                    <span className="block text-lg font-bold text-slate-900 leading-none">25</span>
                                    <span className="text-[9px] text-slate-500 uppercase">Menit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
