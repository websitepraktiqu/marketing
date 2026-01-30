"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import {
    carkhuffModules,
    carkhuffPainPoints,
    carkhuffBenefits,
    carkhuffTargetAudience,
    carkhuffWhatYouGet,
    carkhuffExpertTraits,
    carkhuffFaqData
} from "@/lib/carkhuff-data";

export default function EcourseCarkhuff() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeModule, setActiveModule] = useState(1);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900 relative overflow-x-hidden">
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(3deg); }
                }
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(15px) rotate(-3deg); }
                }
                @keyframes fade-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-float { animation: float 4s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 4s ease-in-out infinite; }
                .animate-fade-up { animation: fade-up 0.6s ease-out forwards; }
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, #435b9b1a 1px, transparent 1px),
                    linear-gradient(to bottom, #435b9b1a 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>


            <Navbar />

            <main>
                {/* HERO SECTION */}
                <section className="bg-white pt-16 pb-20 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                            Kuasai Teknik Konseling Dasar yang Terbukti Efektif Selama Puluhan Tahun
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                            Pelajari Metode Carkhuff — pendekatan konseling yang membantu Anda membangun hubungan terapeutik, memahami emosi klien, dan memfasilitasi perubahan nyata.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <Link
                                href="#investasi"
                                className="bg-[#435b9b] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#374a84] transition-colors"
                            >
                                Lihat Detail E-Course
                            </Link>
                        </div>

                        <p className="text-slate-500 text-sm">
                            5 video pembelajaran • Worksheet pendamping • Sertifikat
                        </p>
                    </div>
                </section>

                {/* Expert Strip */}
                <section className="bg-slate-100 py-6 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <p className="text-slate-600">Dipandu oleh:</p>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-[#435b9b] flex items-center justify-center text-white font-semibold">IK</div>
                            <div>
                                <p className="font-semibold text-slate-900">Drs. Irfanul Kamal, Psikolog, MHRM</p>
                                <p className="text-sm text-slate-500">Psikolog senior dengan pengalaman 20+ tahun</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Pertanyaan */}
                <section className="py-16 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed">
                            Apakah Anda seorang <span className="text-[#435b9b]">Psikolog</span>, <span className="text-[#435b9b]">Konselor</span>, <span className="text-[#435b9b]">Guru BK</span>, atau seseorang yang sering menerima curhatan orang lain?
                        </h2>
                    </div>
                </section>

                {/* Pain Points */}
                <section className="py-20 px-6 md:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                Pernahkah Anda Mengalami <span className="text-[#fe6007]">Hal Ini?</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {carkhuffPainPoints.map((point, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:border-[#fe6007]/30 hover:shadow-md transition-all"
                                >
                                    <div className="w-7 h-7 rounded-full bg-[#fe6007] flex-shrink-0 flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </div>
                                    <p className="text-slate-700">{point}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-slate-600">
                                Jika iya, <span className="font-semibold text-[#435b9b]">Anda tidak sendirian.</span> Masalahnya mungkin bukan pada teknik lanjutan, melainkan pada fondasi keterampilan interpersonal konseling.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Metode Carkhuff */}
                <section className="py-20 px-6 md:px-12 bg-[#435b9b]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-white/70 mb-2">Di sinilah semuanya berubah</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Metode Carkhuff
                            </h2>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Pendekatan klasik yang telah teruji puluhan tahun dalam dunia konseling dan psikoterapi.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {carkhuffBenefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/10 p-5 rounded-xl border border-white/10 hover:bg-white/15 transition-all"
                                >
                                    <div className="text-[#fe6007] text-2xl font-bold mb-3">{idx + 1}</div>
                                    <p className="text-white/90">{benefit}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-center mt-10 text-[#fe6007] font-medium">
                            Bukan sekadar teori, tetapi keterampilan yang bisa langsung dipraktikkan.
                        </p>
                    </div>
                </section>

                {/* Materi */}
                <section id="materi" className="py-20 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                Apa yang Akan <span className="text-[#fe6007]">Anda Pelajari</span>
                            </h2>
                            <p className="text-slate-600">Bundling 5 Video E-Course</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {carkhuffModules.map((module) => (
                                <div
                                    key={module.id}
                                    className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg hover:border-[#435b9b]/30 transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-9 h-9 rounded-lg bg-[#435b9b] text-white font-bold flex items-center justify-center">
                                            {module.id}
                                        </span>
                                        <span className="text-xs font-semibold text-[#fe6007] uppercase">Video {module.id}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{module.title}</h3>
                                    <p className="text-sm text-[#435b9b] mb-2">{module.subtitle}</p>
                                    <p className="text-sm text-slate-600">{module.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Target Audience */}
                <section className="py-20 px-6 md:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                Kelas Ini Cocok Untuk <span className="text-[#435b9b]">Siapa?</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {carkhuffTargetAudience.map((audience, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#435b9b] flex-shrink-0 flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </div>
                                    <p className="text-slate-700">{audience}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-center mt-8 text-[#fe6007] font-medium">
                            Semua orang boleh belajar dan bergabung.
                        </p>
                    </div>
                </section>

                {/* Expert */}
                <section id="expert" className="py-20 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100">
                            <div className="grid md:grid-cols-3 gap-10 items-center">
                                <div className="md:col-span-1">
                                    <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-[#435b9b] to-[#435b9b]/80 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                                                <span className="text-3xl font-bold">IK</span>
                                            </div>
                                            <p className="text-white/60 text-xs">Foto Expert</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <span className="text-xs font-semibold text-[#fe6007] uppercase tracking-wide">Instruktur</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4">
                                        Drs. Irfanul Kamal, Psikolog, MHRM
                                    </h3>
                                    <p className="text-slate-600 mb-6">
                                        Psikolog senior dengan pengalaman puluhan tahun di bidang konseling, psikoterapi interpersonal, dan pengembangan SDM.
                                    </p>

                                    <p className="text-slate-700 font-medium mb-3">Gaya mengajar:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {carkhuffExpertTraits.map((trait, idx) => (
                                            <span key={idx} className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm">
                                                {trait}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What You Get */}
                <section className="py-20 px-6 md:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                Apa yang Anda <span className="text-[#fe6007]">Dapatkan?</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {carkhuffWhatYouGet.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:border-[#435b9b]/30 transition-all"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#435b9b] flex-shrink-0 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </div>
                                    <p className="text-slate-800 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-center mt-10 text-lg text-slate-600">
                            Jadilah konselor yang <span className="text-[#fe6007] font-semibold">membantu perubahan terjadi</span>, bukan sekadar mendengarkan.
                        </p>
                    </div>
                </section>

                {/* Pricing */}
                <section id="investasi" className="py-20 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">Investasi</h2>
                            <p className="text-slate-600">Akses penuh ke semua materi</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                            <div className="text-center mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#fe6007]/10 text-[#fe6007] text-sm font-medium mb-4">
                                    Harga Spesial
                                </span>
                                <div className="text-4xl font-bold text-slate-900">
                                    Rp299.000
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                {["5 Video Pembelajaran", "Worksheet Refleksi", "E-Certificate", "Akses Fleksibel"].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#435b9b]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="https://wa.me/6281219486430?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20E-Course%20Metode%20Carkhuff"
                                target="_blank"
                                className="block w-full text-center bg-[#fe6007] text-white font-semibold py-4 rounded-xl hover:bg-[#e55606] transition-all"
                            >
                                Daftar via WhatsApp
                            </Link>

                            <p className="text-center text-slate-500 text-sm mt-4">
                                Tim kami siap membantu Anda
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="py-20 px-6 md:px-12 bg-white">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                Pertanyaan yang <span className="text-[#fe6007]">Sering Ditanyakan</span>
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {carkhuffFaqData.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl border border-slate-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-medium text-slate-800 pr-4">{faq.question}</span>
                                        <span className={`text-[#435b9b] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                    {openFaq === idx && (
                                        <div className="px-5 pb-5 text-slate-600 border-t border-slate-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 px-6 md:px-12 bg-[#435b9b]">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Siap Meningkatkan Keterampilan Konseling Anda?
                        </h2>
                        <p className="text-white/80 mb-8">
                            Mulai perjalanan Anda dengan Metode Carkhuff hari ini.
                        </p>
                        <Link
                            href="#investasi"
                            className="inline-block bg-white text-[#fe6007] font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-all"
                        >
                            Daftar Sekarang
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
