"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
    simplePainPoints,
    simpleSocialProof,
    simpleExpert,
    simpleCurriculum,
    simpleTargetAudience,
    simpleUSPs,
    simpleFaqData,
} from "@/lib/carkhuff-simple-data";

export default function CarkhuffEcourse() {
    const [isVisible, setIsVisible] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900 relative overflow-x-hidden">
            <style jsx global>{`
                @keyframes fade-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-up { animation: fade-up 0.6s ease-out forwards; }
            `}</style>

            <Navbar />

            <main>
                {/* ========== 1. HERO ========== */}
                <section className="bg-gradient-to-b from-[#f0f4ff] to-white pt-20 pb-16 px-6 md:px-12">
                    <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#435b9b]/10 text-[#435b9b] text-sm font-black mb-6 border border-[#435b9b]/20">
                            E-Course
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                            Metode Konseling <span className="text-[#435b9b]">Carkhuff</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 font-extrabold mb-4 max-w-2xl mx-auto leading-relaxed">
                            Sebuah E-Course Dasar <strong>Untuk Membangun Relasi Konseling yang Berdampak Nyata</strong>
                        </p>
                        <p className="text-slate-600 font-bold mb-8 max-w-xl mx-auto">
                            Pelajari fondasi keterampilan konseling yang telah digunakan dan terbukti efektif selama puluhan tahun.
                        </p>
                        <Link
                            href="#investasi"
                                className="block w-full bg-[#fe6007] text-white font-extrabold py-4 px-10 rounded-xl hover:bg-[#e55606] transition-all shadow-lg shadow-[#fe6007]/20 hover:scale-105 text-lg text-center"
                        >
                            GABUNG ECOURSE
                        </Link>
                    </div>
                </section>

                {/* ========== 2. PAIN POINTS ========== */}
                <section id="pain-points" className="py-16 px-6 md:px-12 bg-white">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                <div className="md:sticky md:top-24">
                                    <Image
                                        src="/images/carkhuff/counseling-session.png"
                                        alt="Counseling session"
                                        width={600}
                                        height={450}
                                        className="rounded-lg w-full"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-10 text-center md:text-left">
                                        Apakah Anda Pernah Mengalami <span className="text-[#fe6007]">Hal Ini?</span>
                                    </h2>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                        {simplePainPoints.map((point, idx) => (
                                            <div
                                                key={idx}
                                                className="flex gap-3 items-start bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#fe6007]/30 transition-all"
                                            >
                                                <div className="w-7 h-7 rounded-full bg-[#fe6007]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg className="w-4 h-4 text-[#fe6007]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-700 font-extrabold">{point}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-center md:text-left">
                                        <Link
                                            href="#investasi"
                                            className="block w-full bg-[#fe6007] text-white font-extrabold py-3 px-8 rounded-xl hover:bg-[#e55606] transition-all shadow-lg shadow-[#fe6007]/20 text-center"
                                        >
                                            GABUNG ECOURSE
                                        </Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>

                {/* ========== 3. SOLUTION INTRO ========== */}
                <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            {/* Image placeholder */}
                            <div className="bg-slate-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                                <Image 
                                    src="/images/carkhuff/carkhuf-e-course-landscape.png" 
                                    alt="E-Course Image" 
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
                                    Selamat, Anda Bertemu dengan <span className="text-[#435b9b]">E-Course yang Tepat!</span>
                                </h2>
                                <p className="text-slate-600 font-bold mb-4 leading-relaxed">
                                    E-Course Metode Carkhuff adalah e-course dasar konseling yang membantu Anda membangun fondasi keterampilan konseling yang kuat, bukan sekadar teknik lanjutan.
                                </p>
                                <p className="text-slate-600 font-bold mb-6 leading-relaxed">
                                    Disusun dengan bahasa sederhana, sistematis, dan langsung bisa dipraktikkan dalam sesi nyata.
                                </p>
                                <Link
                                    href="#investasi"
                                    className="block w-full bg-[#435b9b] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#374a84] transition-all text-center"
                                >
                                    GABUNG ECOURSE
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== 4. SOCIAL PROOF STRIP ========== */}
                <section className="py-8 px-6 md:px-12 bg-[#435b9b]">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                            {/* Participants */}
                            <div>
                                <p className="text-3xl md:text-4xl font-extrabold">{simpleSocialProof.participants}+</p>
                                <p className="text-sm text-white/80 mt-1">Peserta dari Berbagai Profesi</p>
                            </div>

                            {/* Rating */}
                            <div>
                                <div className="flex items-center justify-center gap-1 mb-1">
                                    <p className="text-3xl md:text-4xl font-extrabold">{simpleSocialProof.rating}</p>
                                    <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-white/80">Rating Kelas</p>
                            </div>

                            {/* Badges */}
                            {simpleSocialProof.badges.map((badge, idx) => (
                                <div key={idx}>
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2">
                                        {idx === 0 ? (
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        )}
                                    </div>
                                    <p className="text-sm font-semibold">{badge}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== 5. EXPERT / INSTRUCTOR ========== */}
                <section id="expert" className="py-20 px-6 md:px-12 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                Dibawakan Langsung oleh:
                            </h2>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 overflow-hidden relative">
                            {/* Decorative bg */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#435b9b]/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                                <div className="order-2 md:order-1">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#435b9b]/10 text-[#435b9b] text-sm font-bold mb-4 border border-[#435b9b]/20">
                                        Instruktur Utama
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
                                        {simpleExpert.name}
                                    </h3>

                                    <ul className="space-y-3 mb-6">
                                        {simpleExpert.credentials.map((cred, idx) => (
                                            <li key={idx} className="flex gap-3 items-start">
                                                <div className="w-6 h-6 rounded-full bg-[#435b9b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg className="w-3.5 h-3.5 text-[#435b9b]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-700 font-extrabold">{cred}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-slate-700 font-semibold mb-4 leading-relaxed">
                                        {simpleExpert.description}
                                    </p>
                                    <p className="text-slate-700 font-semibold mb-6 leading-relaxed">
                                        {simpleExpert.subdescription}
                                    </p>

                                    <Link
                                        href="#investasi"
                                        className="block w-full bg-[#fe6007] text-white font-extrabold py-3 px-8 rounded-xl hover:bg-[#e55606] transition-all shadow-lg shadow-[#fe6007]/20 text-center"
                                    >
                                        GABUNG ECOURSE!
                                    </Link>
                                </div>

                                {/* Expert image placeholder */}
                                <div className="order-1 md:order-2 flex justify-center w-full">
                                    <div className="relative w-full max-w-[400px]">
                                        <div className="absolute inset-0 bg-[#fe6007] rounded-2xl rotate-3 opacity-20 transform scale-95 blur-sm"></div>
                                        <div className="w-full aspect-[4/5] bg-slate-200 rounded-2xl relative z-10 overflow-hidden">
                                            <Image
                                                src="/images/carkhuff/instructor-irfanul.jpg"
                                                alt="Expert Image"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== 6. CURRICULUM ========== */}
                <section id="materi" className="py-20 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                                Apa Saja yang Akan Anda Pelajari di <span className="text-[#435b9b]">E-Course Metode Carkhuff</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {simpleCurriculum.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-5 items-start bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#435b9b]/30 transition-all"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-extrabold text-white text-lg ${idx % 2 === 0 ? "bg-[#435b9b]" : "bg-[#fe6007]"}`}>
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-slate-900 text-lg mb-1">{item.title}</h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== 7. TARGET AUDIENCE ========== */}
                <section className="py-16 px-6 md:px-12 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-10">
                            E-Course Ini Cocok Untuk <span className="text-[#fe6007]">Siapa?</span>
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                            {simpleTargetAudience.map((audience, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100 text-left"
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${idx < 4 ? "bg-[#435b9b]/10" : "bg-[#fe6007]/10"}`}>
                                        <svg className={`w-4 h-4 ${idx < 4 ? "text-[#435b9b]" : "text-[#fe6007]"}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 font-semibold text-sm">{audience}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-500 font-semibold">
                            Tidak ada prasyarat khusus. <span className="text-[#435b9b]">Semua boleh belajar.</span>
                        </p>
                    </div>
                </section>

                {/* ========== 8. TESTIMONIALS ========== */}
                <section className="py-16 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                            Apa Kata <span className="text-[#fe6007]">Mereka?</span>
                        </h2>
                        <p className="text-slate-500 mb-10">Peserta yang sudah merasakan manfaatnya</p>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                {
                                    quote: "Saya guru BK sudah 8 tahun, tapi baru sekarang saya benar-benar paham cara mendengarkan siswa dengan tepat. Metode Carkhuff mengubah cara saya merespons — siswa jadi lebih terbuka dan mau cerita lebih dalam. Ini bukan sekadar teori, langsung bisa dipraktikkan!",
                                    name: "Dewi Rahmawati, S.Pd.",
                                    role: "Guru BK SMA, Yogyakarta",
                                    initials: "DR",
                                    color: "bg-[#435b9b]",
                                },
                                {
                                    quote: "Awalnya skeptis karena sudah pernah ikut beberapa pelatihan konseling. Tapi e-course ini beda — penjelasannya sistematis, contohnya relevan banget sama kasus nyata. Setelah selesai, sesi konseling saya terasa jauh lebih terarah dan klien bilang mereka merasa lebih dipahami.",
                                    name: "Ahmad Fauzi, M.Psi.",
                                    role: "Konselor Keluarga, Jakarta",
                                    initials: "AF",
                                    color: "bg-[#fe6007]",
                                },
                                {
                                    quote: "Sebagai orang tua, saya ikut kursus ini karena sering gagal ngobrol sama anak remaja saya. Module tentang empati dan respons yang tepat benar-benar membuka mata saya. Sekarang anak saya lebih mau cerita masalahnya tanpa takut dihakimi. Worth every penny!",
                                    name: "Siti Nurhaliza",
                                    role: "Ibu Rumah Tangga & Aktivis Parenting, Bandung",
                                    initials: "SN",
                                    color: "bg-[#435b9b]",
                                },
                            ].map((t, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm text-left flex flex-col"
                                >
                                    <div className="flex items-center gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                                            <span className="text-white text-xs font-extrabold">{t.initials}</span>
                                        </div>
                                        <div>
                                            <p className="text-slate-800 text-sm font-bold">{t.name}</p>
                                            <p className="text-slate-400 text-xs">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== 9. WHY JOIN (USPs) ========== */}
                <section className="py-20 px-6 md:px-12 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                Kenapa Anda Harus Ikut <span className="text-[#435b9b]">E-Course Ini</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {simpleUSPs.map((usp, idx) => {
                                const icons = [
                                    // Mudah Dipahami — lightbulb
                                    <svg key="0" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                                    // Terbukti & Klasik — shield check
                                    <svg key="1" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                                    // Praktis & Aplikatif — play
                                    <svg key="2" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                                    // Dilengkapi Worksheet — document
                                    <svg key="3" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                                    // Sertifikat — badge
                                    <svg key="4" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                                ];

                                return (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#435b9b]/30 transition-all group"
                                    >
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${idx % 2 === 0 ? "bg-[#435b9b]" : "bg-[#fe6007]"} group-hover:scale-110 transition-transform`}>
                                            {icons[idx] || icons[0]}
                                        </div>
                                        <h3 className="font-extrabold text-slate-900 text-lg mb-2">{usp.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{usp.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ========== 10. PRICING ========== */}
                <section id="investasi" className="py-20 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-lg mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                                Akses Penuh ke Semua Materi
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                            {/* Top accent */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#435b9b] to-[#fe6007]"></div>

                            <div className="rounded-xl overflow-hidden mb-6">
                                <Image
                                    src="/images/carkhuff/carkhuf-e-course-landscape.png"
                                    alt="E-Course Metode Konseling Carkhuff"
                                    width={300}
                                    height={450}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="text-center mb-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#fe6007]/10 text-[#fe6007] text-sm font-bold mb-4">
                                    Harga Spesial
                                </span>
                                <div className="text-5xl font-extrabold text-slate-900">
                                    Rp299.000
                                </div>
                            </div>

                            <div className="space-y-3 mb-8">
                                {["5 Video Pembelajaran", "Worksheet Refleksi", "E-Certificate", "Akses Fleksibel", "Contoh Kasus Nyata"].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#435b9b]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/checkout/carkhuff"
                                className="block w-full text-center bg-[#fe6007] text-white font-extrabold py-4 rounded-xl hover:bg-[#e55606] transition-all text-lg shadow-lg shadow-[#fe6007]/20"
                            >
                                GABUNG ECOURSE!
                            </Link>

                            <p className="text-center text-slate-500 text-sm mt-4">
                                Tim kami siap membantu Anda
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========== 11. FINAL CTA ========== */}
                <section className="py-24 px-6 md:px-12 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#f8faff] rounded-3xl p-8 md:p-14 text-center border-2 border-[#435b9b]/10 shadow-xl overflow-hidden relative">
                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#fe6007]"></div>
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#435b9b 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                                    Siap Menjadi Konselor yang <br />
                                    <span className="text-[#435b9b]">Lebih Berdampak?</span>
                                </h2>
                                <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Jangan biarkan sesi konseling berjalan tanpa arah. Kuasai fondasi Carkhuff untuk perubahan yang nyata.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Link
                                        href="#investasi"
                                        className="bg-[#fe6007] text-white font-extrabold text-lg px-10 py-4 rounded-xl shadow-lg shadow-[#fe6007]/20 hover:bg-[#e55606] transition-all transform hover:-translate-y-1 w-full text-center"
                                    >
                                        GABUNG ECOURSE!
                                    </Link>
                                    <Link
                                        href="https://wa.me/6281219486430"
                                        target="_blank"
                                        className="bg-white border-2 border-[#435b9b]/20 text-[#435b9b] font-extrabold text-lg px-10 py-4 rounded-xl hover:bg-[#435b9b]/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Konsultasi Dulu
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== 12. FAQ ========== */}
                <section id="faq" className="py-20 px-6 md:px-12 bg-slate-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                                Frequently Asked <span className="text-[#fe6007]">Questions</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {simpleFaqData.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl border border-slate-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                                        <span className={`text-[#435b9b] transition-transform flex-shrink-0 ${openFaq === idx ? "rotate-180" : ""}`}>
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

                {/* ========== 13. CONTACT / REGISTRATION INFO ========== */}
                <section className="py-12 px-6 md:px-12 bg-white">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-slate-600 mb-4">Pendaftaran dapat dilakukan melalui:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="https://event.praktiqu.com"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#435b9b]/10 text-[#435b9b] font-semibold hover:bg-[#435b9b]/20 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                event.praktiqu.com
                            </Link>
                            <Link
                                href="https://wa.me/6281219486430"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                </svg>
                                0812-1948-6430
                            </Link>
                            <Link
                                href="https://wa.me/6287870519230"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                                </svg>
                                0878-7051-9230
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
