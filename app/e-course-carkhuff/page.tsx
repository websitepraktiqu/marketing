"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import {
    carkhuffModules,
    carkhuffPainPoints,
    carkhuffCoreProblems,
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
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
                            Kuasai Teknik Konseling Dasar yang Terbukti Efektif Selama Puluhan&nbsp;Tahun
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



                {/* Pain Points - Two Column */}
                <section className="py-16 px-6 md:px-12 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left - Image */}
                            <div className="md:sticky md:top-24">
                                <Image
                                    src="/images/carkhuff/counseling-session.png"
                                    alt="Counseling session"
                                    width={600}
                                    height={450}
                                    className="rounded-lg w-full"
                                />
                            </div>

                            {/* Right - Content */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                    Apakah Ini Pernah <span className="text-[#fe6007]">Anda Alami?</span>
                                </h2>

                                {/* List 1 - Pain Points */}
                                <ul className="space-y-3 text-slate-700 mb-6">
                                    {carkhuffPainPoints.map((point, idx) => (
                                        <li key={idx} className="flex gap-3 items-start">
                                            <div className="w-6 h-6 rounded-full bg-[#fe6007]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-3.5 h-3.5 text-[#fe6007]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="pt-0.5 text-sm">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-slate-600 border-l-2 border-[#435b9b] pl-4">
                                    Jika iya, Anda tidak sendirian. Dan kemungkinan besar, masalahnya bukan pada teknik lanjutan, melainkan pada <strong>fondasi keterampilan interpersonal konseling</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Problems - Full Width Row */}
                <section className="py-14 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-center text-slate-700 text-lg mb-8">
                            Banyak konselor memahami teori, namun kesulitan dalam:
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {carkhuffCoreProblems.map((problem, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-3 bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:border-[#435b9b]/30 transition-all">
                                    <div className="w-10 h-10 rounded-full bg-[#435b9b]/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-slate-700 font-medium">{problem}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <div className="inline-block bg-[#435b9b] text-white rounded-xl px-6 py-3">
                                <p className="font-semibold text-sm">Di sinilah <span className="text-[#fe6007] font-bold">Metode Carkhuff</span> berperan.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metode Carkhuff - Two Column with Image */}
                <section className="py-16 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left - Content */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                                    Apa itu Metode Carkhuff?
                                </h2>
                                <p className="text-slate-600 mb-6">
                                    Pendekatan klasik yang telah teruji puluhan tahun dalam dunia konseling dan psikoterapi — bukan sekadar teori, tetapi keterampilan yang bisa langsung dipraktikkan.
                                </p>

                                <div className="space-y-3">
                                    {carkhuffBenefits.map((benefit, idx) => (
                                        <div key={idx} className="flex gap-3 items-start">
                                            <span className="w-6 h-6 rounded-full bg-[#435b9b] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                                {idx + 1}
                                            </span>
                                            <p className="text-slate-700">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right - Image */}
                            <div>
                                <Image
                                    src="/images/carkhuff/carkhuff-method.png"
                                    alt="Counselor taking notes"
                                    width={600}
                                    height={600}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>




                {/* Materi - Zigzag Roadmap */}
                <section id="materi" className="py-20 px-6 md:px-12 bg-slate-50 overflow-x-hidden">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                Apa yang Akan <span className="text-[#fe6007]">Anda Pelajari</span>
                            </h2>
                            <p className="text-slate-600">Bundling 5 Video E-Course</p>
                        </div>

                        {/* Desktop Zigzag Roadmap */}
                        <div className="hidden md:block relative">
                            {/* Horizontal line */}
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#435b9b]/20 via-[#435b9b] to-[#435b9b]/20 -translate-y-1/2 z-0"></div>

                            <div className="grid grid-cols-5 gap-0 relative z-10">
                                {carkhuffModules.map((module, idx) => {
                                    const isTop = idx % 2 === 0;
                                    return (
                                        <div key={module.id} className="flex flex-col items-center">
                                            {/* Top card slot */}
                                            <div className={`w-full px-2 ${isTop ? 'mb-4' : 'mb-4 invisible'}`}>
                                                {isTop && (
                                                    <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-md hover:shadow-xl hover:border-[#435b9b]/40 transition-all group">
                                                        <span className="text-xs font-semibold text-[#fe6007] uppercase block mb-2">Video {module.id}</span>
                                                        <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#435b9b] transition-colors">{module.title}</h3>
                                                        <p className="text-xs text-[#435b9b] mb-1">{module.subtitle}</p>
                                                        <p className="text-xs text-slate-500">{module.description}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Center node */}
                                            <div className="flex flex-col items-center">
                                                {/* Connector line top */}
                                                <div className={`w-0.5 h-4 ${isTop ? 'bg-[#435b9b]' : 'bg-transparent'}`}></div>
                                                {/* Node circle */}
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg z-10 ${idx % 2 === 0 ? 'bg-[#435b9b]' : idx % 2 === 1 ? 'bg-[#fe6007]' : 'bg-[#435b9b]'} ring-4 ring-white`}>
                                                    {module.id}
                                                </div>
                                                {/* Connector line bottom */}
                                                <div className={`w-0.5 h-4 ${!isTop ? 'bg-[#435b9b]' : 'bg-transparent'}`}></div>
                                            </div>

                                            {/* Bottom card slot */}
                                            <div className={`w-full px-2 ${!isTop ? 'mt-4' : 'mt-4 invisible'}`}>
                                                {!isTop && (
                                                    <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-md hover:shadow-xl hover:border-[#fe6007]/40 transition-all group">
                                                        <span className="text-xs font-semibold text-[#fe6007] uppercase block mb-2">Video {module.id}</span>
                                                        <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#435b9b] transition-colors">{module.title}</h3>
                                                        <p className="text-xs text-[#435b9b] mb-1">{module.subtitle}</p>
                                                        <p className="text-xs text-slate-500">{module.description}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile: Vertical Roadmap */}
                        <div className="md:hidden flex flex-col gap-0 relative">
                            {/* Vertical line */}
                            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#435b9b]/20 via-[#435b9b] to-[#435b9b]/20 z-0"></div>

                            {carkhuffModules.map((module, idx) => (
                                <div key={module.id} className="flex gap-4 items-start relative z-10 mb-6">
                                    {/* Node */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg flex-shrink-0 ring-4 ring-slate-50 ${idx % 2 === 0 ? 'bg-[#435b9b]' : 'bg-[#fe6007]'}`}>
                                        {module.id}
                                    </div>
                                    {/* Card */}
                                    <div className="flex-1 bg-white rounded-xl border border-slate-100 p-4 shadow-md hover:shadow-lg transition-all">
                                        <span className="text-xs font-semibold text-[#fe6007] uppercase block mb-1">Video {module.id}</span>
                                        <h3 className="font-bold text-slate-900 text-sm mb-1">{module.title}</h3>
                                        <p className="text-xs text-[#435b9b] mb-1">{module.subtitle}</p>
                                        <p className="text-xs text-slate-500">{module.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Target Audience - Two Column with Image */}
                <section className="py-16 px-6 md:px-12 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left - Content */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                    Siapa yang cocok mengikuti e-course ini?
                                </h2>

                                <div className="space-y-3">
                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-lg bg-[#435b9b]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-700 pt-1"><strong>Konselor & Terapis</strong> — memperdalam teknik relasi</p>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-lg bg-[#435b9b]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-700 pt-1"><strong>Psikolog</strong> — pemula maupun berpengalaman</p>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-lg bg-[#435b9b]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-700 pt-1"><strong>Guru BK</strong> — mendampingi siswa di sekolah</p>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-lg bg-[#435b9b]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-700 pt-1"><strong>HR & People Dev</strong> — mendampingi karyawan</p>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-lg bg-[#fe6007]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-[#fe6007]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-700 pt-1"><strong>Praktisi Helping</strong> — coach, mentor, pendamping</p>
                                    </div>

                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-lg bg-[#fe6007]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-[#fe6007]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-700 pt-1"><strong>Orang Tua</strong> — membangun komunikasi dengan anak</p>
                                    </div>
                                </div>

                                <p className="mt-6 text-slate-500 text-sm">
                                    Semua orang boleh belajar — tidak ada prasyarat khusus.
                                </p>
                            </div>

                            {/* Right - Image */}
                            <div>
                                <Image
                                    src="/images/carkhuff/target-audience.png"
                                    alt="Target audience"
                                    width={600}
                                    height={450}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>


                {/* Expert */}
                <section id="expert" className="py-20 px-6 md:px-12 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                Belajar Langsung dari <span className="text-[#fe6007]">Ahlinya</span>
                            </h2>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 overflow-hidden relative">
                            {/* Decorative bg */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#435b9b]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                                <div className="order-2 md:order-1">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#435b9b]/10 text-[#435b9b] text-sm font-semibold mb-4 border border-[#435b9b]/20">
                                        Instruktur Utama
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                                        Drs. Irfanul Kamal, MHRM
                                    </h3>
                                    <p className="text-lg text-[#fe6007] font-medium mb-6">
                                        Psikolog, Dosen, & Penulis
                                    </p>

                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Beliau adalah praktisi berpengalaman yang juga aktif sebagai Dosen dan Penulis buku <em>"Psikologi Tulis Tangan"</em> dan bidang <em>Human Capital</em>.
                                    </p>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        Dengan pengalaman puluhan tahun, beliau akan membimbing Anda memahami esensi konseling Carkhuff secara mendalam namun mudah dipraktikkan.
                                    </p>

                                    <div>
                                        <p className="text-slate-900 font-semibold mb-3">Keahlian Utama:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {carkhuffExpertTraits.map((trait, idx) => (
                                                <span key={idx} className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm shadow-sm">
                                                    {trait}
                                                </span>
                                            ))}
                                            <span className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm shadow-sm">
                                                Human Capital
                                            </span>
                                            <span className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm shadow-sm">
                                                Graphology
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-1 md:order-2 flex justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#fe6007] rounded-2xl rotate-3 opacity-20 transform scale-95 blur-sm"></div>
                                        <Image
                                            src="/images/carkhuff/instructor-irfanul.jpg"
                                            alt="Drs. Irfanul Kamal, MHRM"
                                            width={400}
                                            height={500}
                                            className="rounded-2xl shadow-lg relative z-10 bg-slate-200"
                                            objectFit="cover"
                                        />
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
                            {carkhuffWhatYouGet.map((item, idx) => {
                                // Define icons based on index
                                const icons = [
                                    // 0: 5 video pembelajaran (Play/Video)
                                    <svg key="0" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,

                                    // 1: Materi terstruktur (Book)
                                    <svg key="1" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,

                                    // 2: Contoh respons (Chat)
                                    <svg key="2" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,

                                    // 3: Worksheet (Document)
                                    <svg key="3" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,

                                    // 4: Panduan relasi (Heart)
                                    <svg key="4" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,

                                    // 5: Akses fleksibel (Clock)
                                    <svg key="5" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,

                                    // 6: Contoh kasus (Users/Case)
                                    <svg key="6" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                ];

                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:border-[#435b9b]/30 transition-all shadow-sm hover:shadow-md"
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${idx % 2 === 0 ? 'bg-[#435b9b]' : 'bg-[#fe6007]'}`}>
                                            {icons[idx] || icons[0]}
                                        </div>
                                        <p className="text-slate-800 font-medium">{item}</p>
                                    </div>
                                );
                            })}
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
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">
                                Pertanyaan yang <span className="text-[#fe6007]">Sering Ditanyakan</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
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
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#f8faff] rounded-3xl p-8 md:p-14 text-center border-2 border-[#435b9b]/10 shadow-xl overflow-hidden relative">
                            {/* Pattern decoration - Geometric/Clean instead of blurry blobs */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#fe6007]"></div>
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#435b9b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                    Siap Menjadi Konselor yang <br /><span className="text-[#435b9b]">Lebih Berdampak?</span>
                                </h2>
                                <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Jangan biarkan sesi konseling Anda berjalan tanpa arah. Kuasai fondasi Carkhuff untuk hasil yang nyata.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Link
                                        href="#investasi"
                                        className="bg-[#fe6007] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-[#fe6007]/20 hover:bg-[#e55606] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                                    >
                                        Daftar Sekarang
                                    </Link>
                                    <Link
                                        href="https://wa.me/6281219486430"
                                        target="_blank"
                                        className="bg-white border-2 border-[#435b9b]/20 text-[#435b9b] font-bold text-lg px-10 py-4 rounded-xl hover:bg-[#435b9b]/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Konsultasi Dulu
                                    </Link>
                                </div>

                                <p className="mt-8 text-slate-500 text-sm font-medium">
                                    <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200">
                                        <svg className="w-4 h-4 text-[#fe6007]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        1 Tahun Akses
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
