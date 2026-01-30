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

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen font-sans bg-white text-slate-900 relative overflow-x-hidden">
            {/* Custom CSS for animations */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(3deg); }
                }
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(15px) rotate(-3deg); }
                }
                @keyframes bounce-soft {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-float { animation: float 4s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 4s ease-in-out infinite; }
                .animate-bounce-soft { animation: bounce-soft 2s ease-in-out infinite; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
                .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, #435b9b1a 1px, transparent 1px),
                    linear-gradient(to bottom, #435b9b1a 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>

            <Navbar />
            <main>
                {/* HERO SECTION */}
                <section className="relative overflow-hidden bg-white pt-12 pb-24 px-6 md:px-12">
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.3] pointer-events-none" />
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-[#435b9b]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-[#fe6007]/5 rounded-full blur-3xl" />

                    {/* Decorative floating shapes */}
                    <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#435b9b]/10 animate-float hidden lg:block" />
                    <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-[#fe6007]/10 animate-float-reverse hidden lg:block" style={{ animationDelay: "1s" }} />

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className={`text-center space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#435b9b]/10 border border-[#435b9b]/20 text-[#435b9b] text-sm font-bold uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-[#435b9b] animate-pulse"></span>
                                E-Course Praktis
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                                Mahir Konseling & Psikoterapi dengan <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#435b9b] to-[#fe6007]">
                                    Metode Carkhuff
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
                                Bangun relasi terapeutik yang kuat. Tangkap inti emosi klien. Arahkan perubahan nyata tanpa memaksa.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="#investasi"
                                    className="group inline-flex items-center gap-2 bg-[#fe6007] text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(254,96,7,0.3)] hover:bg-[#e55606] transition-all hover:scale-105 hover:shadow-[0_15px_30px_rgba(254,96,7,0.4)]"
                                >
                                    Pelajari Sekarang
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Benefits Strip */}
                            <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-slate-100">
                                {["Akses Fleksibel", "Bisa Diulang Kapan Saja", "E-Certificate"].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-[#435b9b]/10 flex items-center justify-center text-[#435b9b]">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-bold text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Expert Badge */}
                            <div className="inline-flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
                                <div className="w-12 h-12 rounded-full bg-[#435b9b] flex items-center justify-center text-white font-bold text-lg">
                                    IK
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-slate-500">Dipandu oleh</p>
                                    <p className="font-bold text-slate-900">Drs. Irfanul Kamal, Psikolog, MHRM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 1: Target Audience Introduction */}
                <section className="bg-slate-50 py-16 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed">
                            Apakah Anda seorang <span className="text-[#435b9b]">Guru BK</span>, <span className="text-[#435b9b]">Psikolog</span>, <span className="text-[#435b9b]">Calon Psikolog</span>, <span className="text-[#435b9b]">Konselor</span>, <span className="text-[#435b9b]">HR</span> atau anda seseorang yang sering menerima curhatan orang lain?
                        </h2>
                    </div>
                </section>

                {/* SECTION 2: Pain Points */}
                <section className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#fe6007]/10 blur-2xl animate-float" />

                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
                            APAKAH INI PERNAH <span className="text-[#fe6007]">ANDA ALAMI?</span>
                        </h2>

                        <div className="space-y-4">
                            {carkhuffPainPoints.map((point, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border-2 border-slate-100 hover:border-[#fe6007]/30 hover:shadow-lg transition-all"
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#fe6007] flex-shrink-0 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-slate-700 font-medium text-lg">{point}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-xl text-slate-600 mb-4">
                                Jika iya, <span className="font-bold text-[#435b9b]">Anda tidak sendirian.</span>
                            </p>
                            <p className="text-slate-500 max-w-2xl mx-auto">
                                Dan kemungkinan besar, masalahnya bukan pada teknik lanjutan, melainkan pada <span className="font-bold text-slate-700">fondasi keterampilan interpersonal konseling.</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Core Problems */}
                <section className="bg-[#435b9b] py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/10 blur-xl animate-float" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-xl animate-float-reverse" />

                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                Banyak konselor memahami teori,
                            </h2>
                            <p className="text-xl text-white/80">namun kesulitan dalam:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {carkhuffCoreProblems.map((problem, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#fe6007] flex items-center justify-center text-white font-bold text-lg">
                                            {idx + 1}
                                        </div>
                                        <p className="text-white font-bold text-lg">{problem}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-2xl font-bold text-white">
                                Di sinilah <span className="text-[#fe6007]">Metode Carkhuff</span> berperan.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: Metode Carkhuff Introduction */}
                <section className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#435b9b]/10 blur-3xl animate-float" />

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <p className="text-lg text-slate-600 mb-4 max-w-3xl mx-auto">
                                Metode Carkhuff adalah pendekatan klasik yang telah teruji puluhan tahun dalam dunia konseling dan psikoterapi.
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                                Pendekatan ini membantu Anda untuk:
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {carkhuffBenefits.map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-[#435b9b] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="w-12 h-12 mb-4 rounded-xl bg-[#435b9b] flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                                        {idx + 1}
                                    </div>
                                    <p className="text-slate-800 font-bold">{benefit}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-xl text-[#fe6007] font-bold">
                                Bukan sekadar teori, tetapi keterampilan yang bisa langsung dipraktikkan.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: Video E-Course Content */}
                <section id="materi" className="bg-slate-50 py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-[#fe6007]/10 blur-xl animate-float" />

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                APA YANG AKAN <span className="text-[#fe6007]">ANDA PELAJARI</span>
                            </h2>
                            <p className="text-slate-600 text-lg">Bundling 5 Video E-Course</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {carkhuffModules.map((module) => (
                                <div
                                    key={module.id}
                                    className="group bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-[#435b9b] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#435b9b] flex items-center justify-center text-white font-bold">
                                            {module.id}
                                        </div>
                                        <span className="text-sm font-bold text-[#fe6007] uppercase tracking-wider">Video {module.id}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
                                    <p className="text-sm font-medium text-[#435b9b] mb-3">{module.subtitle}</p>
                                    <p className="text-slate-600 text-sm">{module.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Material Preview Grid Placeholder */}
                        <div className="mt-12 p-8 bg-white rounded-3xl border-2 border-dashed border-slate-300 text-center">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center">
                                        <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-400 text-sm mt-4">Preview Materi E-Course</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: Target Audience */}
                <section className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-[#435b9b]/10 blur-2xl animate-float" />

                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
                            KELAS INI COCOK UNTUK <span className="text-[#435b9b]">SIAPA?</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {carkhuffTargetAudience.map((audience, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-slate-100 hover:border-[#435b9b]/30 hover:shadow-md transition-all"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#435b9b] flex-shrink-0 flex items-center justify-center mt-0.5">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-slate-700 font-medium">{audience}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-lg text-[#fe6007] font-bold">
                                Semua orang boleh belajar dan bergabung.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: Expert Profile */}
                <section id="expert" className="bg-[#e0f2fe] py-24 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#fe6007]/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 border-4 border-white shadow-xl relative overflow-hidden ring-4 ring-[#435b9b]/10">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                {/* Expert Image Placeholder */}
                                <div className="lg:col-span-4 relative order-1">
                                    <div className="relative rounded-3xl overflow-hidden border-4 border-[#435b9b]/20 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <div className="aspect-[3/4] relative bg-gradient-to-br from-[#435b9b] to-[#435b9b]/80 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                                                    <span className="text-4xl font-bold">IK</span>
                                                </div>
                                                <p className="text-sm opacity-80">Foto Expert</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name Badge */}
                                    <div className="absolute -bottom-6 -right-6 bg-[#435b9b] text-white p-6 rounded-tl-3xl rounded-br-3xl shadow-xl hidden md:block border-4 border-white">
                                        <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80 text-[#fe6007]">Expert</p>
                                        <h3 className="text-xl font-bold leading-none">Drs. Irfanul Kamal</h3>
                                    </div>
                                </div>

                                {/* Expert Content */}
                                <div className="lg:col-span-8 order-2 text-left space-y-8">
                                    <div>
                                        <div className="inline-block px-4 py-1 rounded-full bg-[#fe6007]/10 text-[#fe6007] font-bold text-sm mb-4">
                                            Psikolog Senior dengan Pengalaman Puluhan Tahun
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#435b9b] mb-2 leading-tight">
                                            Drs. Irfanul Kamal, <span className="text-[#fe6007]">Psikolog, MHRM</span>
                                        </h2>
                                        <div className="h-1.5 w-24 bg-[#fe6007] mt-6 rounded-full"></div>
                                    </div>

                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        Psikolog senior dengan pengalaman puluhan tahun di bidang konseling, psikoterapi interpersonal, dan pengembangan SDM.
                                    </p>

                                    <div>
                                        <p className="text-slate-700 font-bold mb-4">Dikenal dengan gaya mengajar yang:</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {carkhuffExpertTraits.map((trait, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[#435b9b]/10 flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-slate-700 font-medium">{trait}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: What You Get */}
                <section className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-[#fe6007]/10 blur-3xl animate-float" />

                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
                            APA YANG ANDA <span className="text-[#fe6007]">DAPATKAN?</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {carkhuffWhatYouGet.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 p-5 bg-white rounded-xl border-2 border-slate-100 hover:border-[#435b9b] hover:shadow-lg transition-all"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#435b9b] flex-shrink-0 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-slate-800 font-bold">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-xl text-slate-600 font-medium">
                                Jadilah konselor yang <span className="text-[#fe6007] font-bold">membantu perubahan terjadi</span>, bukan sekadar mendengarkan.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 9: Pricing & CTA */}
                <section id="investasi" className="bg-slate-50 py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#435b9b] opacity-5 blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#fe6007] opacity-5 blur-3xl animate-float-reverse" />

                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Investasi untuk <span className="text-[#fe6007]">Kompetensi Anda</span>
                            </h2>
                            <p className="text-slate-600">Akses penuh ke semua materi pembelajaran</p>
                        </div>

                        {/* Pricing Card */}
                        <div className="max-w-lg mx-auto">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#435b9b] relative ring-4 ring-[#435b9b]/10">
                                <div className="bg-[#435b9b] p-4 text-center">
                                    <span className="text-white font-bold tracking-widest text-sm uppercase">E-Course Metode Carkhuff</span>
                                </div>

                                <div className="p-8 md:p-10">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Bundling 5 Video E-Course</h3>
                                        <p className="text-slate-500">Akses lengkap ke semua modul pembelajaran</p>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center mb-8">
                                        <div className="inline-block px-4 py-1 rounded-full bg-[#fe6007]/10 text-[#fe6007] font-bold text-sm mb-4">
                                            Harga Spesial
                                        </div>
                                        <div className="flex items-center justify-center gap-4">
                                            <span className="text-3xl font-extrabold text-slate-900">
                                                Rp 299.000
                                            </span>
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="space-y-3 mb-8">
                                        {["5 Video Pembelajaran", "Worksheet Refleksi", "E-Certificate", "Akses Fleksibel"].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <svg className="w-5 h-5 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href="https://wa.me/6281219486430?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20E-Course%20Metode%20Carkhuff"
                                        target="_blank"
                                        className="block w-full text-center bg-[#fe6007] text-white font-bold py-4 rounded-xl hover:bg-[#e55606] transition-all hover:scale-105 shadow-lg shadow-[#fe6007]/20"
                                    >
                                        Daftar Sekarang
                                    </Link>

                                    <p className="text-center text-sm text-slate-400 mt-4">
                                        Klik untuk chat langsung via WhatsApp
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 10: FAQ */}
                <section id="faq" className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#435b9b]/10 blur-2xl animate-float" />

                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">
                            Frequently Asked <span className="text-[#fe6007]">Questions (FAQ)</span>
                        </h2>

                        <div className="space-y-4">
                            {carkhuffFaqData.map((faq, idx) => (
                                <details key={idx} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-2 border-slate-100 hover:border-[#435b9b]/30">
                                    <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                                        <span className="flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-full bg-[#435b9b]/10 flex items-center justify-center text-[#435b9b] text-sm font-bold flex-shrink-0">{idx + 1}</span>
                                            <span className="text-left">{faq.question}</span>
                                        </span>
                                        <span className="transition group-open:rotate-180 text-[#fe6007] ml-4 flex-shrink-0">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <div className="bg-white p-6 text-slate-600 border-t border-slate-100 rounded-b-xl">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-[#435b9b] py-16 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-5 left-10 w-24 h-24 rounded-full bg-white/10 blur-xl animate-float" />
                    <div className="absolute bottom-5 right-10 w-28 h-28 rounded-full bg-white/10 blur-xl animate-float-reverse" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center animate-bounce-soft">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Siap Meningkatkan Keterampilan Konseling Anda?
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Mulai perjalanan menjadi konselor yang lebih efektif dengan Metode Carkhuff. Jadilah praktisi yang mampu membangun relasi dan memfasilitasi perubahan nyata.
                        </p>
                        <Link
                            href="#investasi"
                            className="group inline-flex items-center gap-2 bg-white text-[#fe6007] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            Daftar Sekarang
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
