"use client";

import Link from "next/link";
import ClosedRegistrationModal from './ClosedRegistrationModal';
import { useState } from 'react';

export default function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="investasi" className="bg-slate-50 py-20 px-6 md:px-12 border-t border-slate-200">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Investasi Ilmu</h2>
                <p className="text-slate-600">Pilih paket yang sesuai dengan kebutuhan Anda</p>
            </div>

            {/* Bundle Plan Section */}
            <div className="max-w-4xl mx-auto mb-16 bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#0ea5e9] relative">
                <div className="absolute top-0 right-0 bg-[#0ea5e9] text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                    Recommended
                </div>
                <div className="p-8 md:p-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Ingin akses kelas lanjutan dan ilmu yang lebih lengkap?</h3>
                    <p className="text-slate-600 mb-8 max-w-xl">
                        Ambil <strong>Paket All Session</strong>. Dapatkan akses ke semua sesi reguler dan bonus materi eksklusif.
                        <span className="block text-sm text-slate-500 mt-2 italic">* Untuk sesi yang sudah lewat akan diberi akses rekaman</span>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                            <div className="text-sm font-bold text-slate-500 uppercase mb-1">Paket Personal</div>
                            <div className="text-3xl font-extrabold text-slate-900">Rp1.699<span className="text-lg text-slate-500 font-normal">rb</span></div>
                            <button onClick={() => setIsModalOpen(true)} className="mt-4 block w-full py-2 bg-slate-100 border border-slate-300 rounded-lg text-slate-500 font-bold hover:bg-slate-200 transition-colors cursor-not-allowed">
                                Full Booked
                            </button>
                        </div>
                        <div className="bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] p-4 rounded-xl text-center text-white shadow-lg transform scale-105">
                            <div className="text-sm font-bold text-blue-100 uppercase mb-1">Paket Group</div>
                            <div className="text-3xl font-extrabold text-white">Rp1.599<span className="text-lg text-blue-100 font-normal">rb</span></div>
                            <button onClick={() => setIsModalOpen(true)} className="mt-4 block w-full py-2 bg-white/90 text-[#0ea5e9] rounded-lg font-bold hover:bg-white transition-colors shadow-sm cursor-not-allowed">
                                Full Booked
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-900">Atau Daftar Hanya Sesi Ini (Sesi 3)</h3>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Personal Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">PERSONAL</h3>
                        <div className="text-3xl font-bold text-slate-900 mb-6">Rp450.000<span className="text-sm font-normal text-slate-500">,-</span></div>
                        <ul className="text-left w-full space-y-3 mb-8 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Akses Webinar 2 Hari
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                E-Certificate
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Materi PDF
                            </li>
                        </ul>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full block bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold py-3 rounded-lg transition-colors text-center cursor-not-allowed"
                        >
                            Full Booked
                        </button>
                    </div>

                    {/* Group Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#06b6d4] transform scale-105 relative hidden md:flex md:flex-col">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#06b6d4] text-xs font-bold px-3 py-1 rounded text-white uppercase tracking-wide">
                            Best Value
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">GROUP</h3>
                        <div className="text-3xl font-bold text-slate-900 mb-1">Rp400.000<span className="text-sm font-normal text-slate-500">,-</span></div>
                        <p className="text-xs text-slate-500 mb-6">Per orang (Min. 3 orang)</p>

                        <ul className="text-left w-full space-y-3 mb-8 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Semua benefit Personal
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Harga lebih hemat
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Networking group
                            </li>
                        </ul>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full block bg-slate-300 text-white font-bold py-3 rounded-lg transition-colors shadow-md text-center cursor-not-allowed"
                        >
                            Full Booked
                        </button>
                    </div>

                    {/* Mobile view of Group Plan */}
                    <div className="md:hidden bg-white p-8 rounded-2xl shadow-lg border-2 border-[#06b6d4] flex flex-col items-center relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#06b6d4] text-xs font-bold px-3 py-1 rounded text-white uppercase tracking-wide">
                            Best Value
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">GROUP</h3>
                        <div className="text-3xl font-bold text-slate-900 mb-1">Rp400.000<span className="text-sm font-normal text-slate-500">,-</span></div>
                        <p className="text-xs text-slate-500 mb-6">Per orang (Min. 3 orang)</p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full block bg-slate-300 text-white font-bold py-3 rounded-lg transition-colors shadow-md text-center cursor-not-allowed"
                        >
                            Full Booked
                        </button>
                    </div>
                </div>
            </div>
            <ClosedRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
