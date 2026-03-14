"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopicCarousel from "./components/TopicCarousel";

import {
    roadmapData,
    faqData,
    testimonials,
    painPoints,
    whatYouLearn,
    whySeries,
    whatYouGet
} from "@/lib/seri-bantu-data";

// Testimonial Carousel Component
function TestimonialCarousel({ testimonials }: { testimonials: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, 5000);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    const goToPrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <section id="reviews" className="bg-white py-20 px-6 md:px-12 overflow-hidden relative">
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-[#435b9b]/10 blur-2xl animate-float" />
            <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-[#fe6007]/10 blur-2xl animate-float-reverse" />

            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Apa Kata <span className="text-[#fe6007]">Peserta?</span>
                </h2>

                <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, idx) => (
                                <div key={idx} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white p-8 md:p-12 rounded-3xl border-2 border-[#435b9b] shadow-xl relative min-h-[200px] flex flex-col justify-center hover:shadow-2xl transition-shadow duration-300">
                                        <div className="text-8xl text-[#fe6007]/20 absolute top-4 left-8 font-serif leading-none">"</div>
                                        <div className="absolute top-6 right-8 w-12 h-12 rounded-full bg-[#fe6007] flex items-center justify-center shadow-md">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>
                                        <div className="relative z-10 text-center pt-8">
                                            <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed font-medium">
                                                &quot;{testimonial}&quot;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg border border-[#435b9b]/20 flex items-center justify-center text-[#435b9b] hover:bg-[#435b9b]/5 hover:scale-110 transition-all z-20"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg border border-[#435b9b]/20 flex items-center justify-center text-[#435b9b] hover:bg-[#435b9b]/5 hover:scale-110 transition-all z-20"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center items-center gap-3 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`transition-all duration-300 rounded-full ${idx === currentIndex
                                ? 'w-8 h-3 bg-[#fe6007]'
                                : 'w-3 h-3 bg-[#435b9b]/30 hover:bg-[#435b9b]/50'
                                }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>

                <p className="text-center text-slate-400 text-sm mt-4">
                    {currentIndex + 1} / {testimonials.length}
                </p>
            </div>
        </section>
    );
}

export default function SeriesBantuAnaku() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const allTopics = roadmapData.flatMap(step =>
        step.topics.map(topic => ({ ...topic, image: topic.image || step.image }))
    );

    return (
        <div className="min-h-screen font-sans bg-white text-slate-900 relative overflow-x-hidden">
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
                @keyframes wiggle {
                    0%, 100% { transform: rotate(-3deg); }
                    50% { transform: rotate(3deg); }
                }
                .animate-float { animation: float 4s ease-in-out infinite; }
                .animate-float-reverse { animation: float-reverse 4s ease-in-out infinite; }
                .animate-bounce-soft { animation: bounce-soft 2s ease-in-out infinite; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
                .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
                .animate-wiggle { animation: wiggle 1s ease-in-out infinite; }
                .animate-delay-100 { animation-delay: 0.1s; }
                .animate-delay-200 { animation-delay: 0.2s; }
                .animate-delay-300 { animation-delay: 0.3s; }
                .animate-delay-400 { animation-delay: 0.4s; }
                .animate-delay-500 { animation-delay: 0.5s; }
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, #435b9b1a 1px, transparent 1px),
                    linear-gradient(to bottom, #435b9b1a 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>

            <Navbar />
            <main>

                {/* ──────────────────────────────────────────────
                    HERO SECTION
                ────────────────────────────────────────────── */}
                <section className="relative overflow-hidden bg-white pt-10 pb-24 px-6 md:px-12">
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.3] pointer-events-none" />
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-[#435b9b]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-[#fe6007]/5 rounded-full blur-3xl" />
                    <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#435b9b]/10 animate-float hidden lg:block" />
                    <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-[#fe6007]/10 animate-float-reverse hidden lg:block" style={{ animationDelay: "1s" }} />
                    <div className="absolute bottom-40 left-20 w-10 h-10 rounded-full bg-[#435b9b]/10 animate-float hidden lg:block" style={{ animationDelay: "2s" }} />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            {/* LEFT: Content */}
                            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#435b9b]/10 border border-[#435b9b]/20 text-[#435b9b] text-sm font-bold uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-[#435b9b] animate-pulse"></span>
                                    Mini Series eCourse Parenting
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                                    Seri Bantu Anak-ku!{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#435b9b] to-[#fe6007]">
                                        Mini Series eCourse untuk Orang Tua
                                    </span>
                                </h1>

                                <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl">
                                    7 eCourse tematik yang membantu orang tua memahami masalah anak{' '}
                                    <span className="font-bold text-slate-800">tanpa panik, tanpa menghakimi</span>, dan dengan
                                    respon yang lebih menenangkan — dari membaca tanda awal masalah hingga membangun
                                    komunikasi yang lebih sehat.
                                </p>

                                <p className="text-base text-slate-500 font-medium italic">
                                    Mulai dari modul yang benar-benar Anda butuhkan.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="#investasi"
                                            className="group flex w-full items-center justify-center gap-2 bg-[#fe6007] text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(254,96,7,0.3)] hover:bg-[#e55606] transition-all hover:scale-105 hover:shadow-[0_15px_30px_rgba(254,96,7,0.4)]"
                                    >
                                        Gabung Mini Series
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#expert"
                                        className="group inline-flex items-center gap-2 bg-white text-slate-700 font-bold py-4 px-8 rounded-full border border-slate-200 hover:border-[#435b9b] hover:text-[#435b9b] transition-all"
                                    >
                                        Kenalan dengan Ahli
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: Pricing Card */}
                            <div className={`relative w-full max-w-md mx-auto lg:ml-auto ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#435b9b] to-[#fe6007] rounded-3xl transform rotate-2 scale-105 opacity-20 blur-xl"></div>
                                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10 border-2 border-[#435b9b] ring-4 ring-[#435b9b]/5">
                                    <div className="bg-[#435b9b] p-3 text-center">
                                        <span className="text-white font-bold tracking-widest text-sm">PILIHAN FAVORIT ORANG TUA</span>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <div className="flex justify-between items-end mb-6">
                                            <div>
                                                <p className="text-slate-500 font-medium mb-1">Bundling 7 Topik</p>
                                                <h3 className="text-3xl font-extrabold text-slate-900">Full Access</h3>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-sm text-slate-400 line-through block">Rp700.000</span>
                                                <span className="text-3xl font-extrabold text-[#fe6007]">Rp560.000</span>
                                            </div>
                                        </div>
                                        <hr className="border-slate-100 mb-6" />
                                        <ul className="space-y-3 mb-8">
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <svg className="w-5 h-5 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Akses ke seluruh 7 modul
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <svg className="w-5 h-5 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                7 Worksheet & 5 Tools Skrining
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <svg className="w-5 h-5 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                E-Certificate
                                            </li>
                                        </ul>
                                        <Link
                                            href="/checkout/seri-bantu?plan=bundling-bantu-anakku"
                                            className="block w-full text-center bg-[#435b9b] text-white font-bold py-4 rounded-xl hover:bg-[#36497c] transition-colors"
                                        >
                                            Ambil Promo Bundling
                                        </Link>
                                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                                            <span>Atau beli satuan di bawah</span>
                                            <svg className="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    PAIN POINTS SECTION
                ────────────────────────────────────────────── */}
                <section className="bg-slate-50 py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-[#435b9b]/5 blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-[#fe6007]/5 blur-3xl" />

                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-1 rounded-full bg-[#fe6007]/10 text-[#fe6007] font-bold text-sm mb-4 uppercase tracking-wider">
                                Apakah Ini Terasa Familiar?
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                                Apakah Anda Pernah <span className="text-[#fe6007]">Mengalami Hal Ini?</span>
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl border-2 border-slate-100 shadow-lg p-8 md:p-12 mb-10">
                            <ul className="space-y-4">
                                {painPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-[#fe6007]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#fe6007]/20 transition-colors">
                                            <svg className="w-4 h-4 text-[#fe6007]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-700 text-lg italic leading-relaxed">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center space-y-4">
                            <p className="text-slate-600 text-lg font-medium">
                                Jika iya, <span className="font-bold text-slate-900">Anda tidak sendirian.</span>
                            </p>
                            <p className="text-slate-500">
                                Dan kabar baiknya: ada cara yang lebih tenang dan terarah untuk mendampingi anak.
                            </p>
                            <Link
                                href="#investasi"
                                    className="flex w-full items-center justify-center gap-2 bg-[#fe6007] text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(254,96,7,0.3)] hover:bg-[#e55606] transition-all hover:scale-105 mt-4"
                            >
                                Gabung Mini Series
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    SOLUTION INTRO SECTION
                ────────────────────────────────────────────── */}
                <section className="bg-[#e0f2fe] py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#435b9b]/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border-4 border-white ring-4 ring-[#435b9b]/10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Image */}
                                <div className="relative order-2 lg:order-1">
                                    <div className="relative rounded-3xl overflow-hidden border-4 border-[#435b9b]/20 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <div className="aspect-[4/5] relative">
                                            <Image
                                                src="/images/seri-bantu-anakku/hero.png"
                                                alt="Seri Bantu Anak-ku — Mini Series eCourse"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-[#fe6007] text-white p-5 rounded-tl-3xl rounded-br-3xl shadow-xl hidden md:block border-4 border-white">
                                        <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Mini Series</p>
                                        <p className="text-lg font-bold leading-tight">Seri Bantu Anak-ku!</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="order-1 lg:order-2 space-y-6">
                                    <div className="inline-block px-4 py-1 rounded-full bg-[#435b9b]/10 text-[#435b9b] font-bold text-sm uppercase tracking-wider">
                                        Anda Menemukan Mini Series yang Tepat
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#435b9b] leading-tight">
                                        Selamat, Anda Menemukan{' '}
                                        <span className="text-[#fe6007]">Mini Series yang Tepat</span>
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        <span className="font-bold text-slate-800">Seri Bantu Anak-ku!</span> adalah mini series
                                        e-course parenting yang membantu orang tua{' '}
                                        <span className="font-bold text-[#435b9b]">memahami perilaku anak dari akarnya</span>,
                                        bukan sekadar memberi tips instan.
                                    </p>
                                    <p className="text-slate-500 font-medium">Materi disusun:</p>
                                    <ul className="space-y-3">
                                        {[
                                            "Dengan bahasa sederhana & membumi",
                                            "Berbasis kasus sehari-hari di rumah & sekolah",
                                            "Fokus pada kesadaran orang tua sebelum tindakan"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#435b9b] flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-slate-500 italic text-sm">
                                        Bisa dipelajari <span className="font-bold not-italic text-slate-800">sesuai kebutuhan</span>, tanpa harus mengikuti semuanya sekaligus.
                                    </p>
                                    <Link
                                        href="#investasi"
                                            className="flex w-full items-center justify-center gap-2 bg-[#fe6007] text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(254,96,7,0.3)] hover:bg-[#e55606] transition-all hover:scale-105"
                                    >
                                        Gabung Mini Series
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    ROADMAP SECTION
                ────────────────────────────────────────────── */}
                <section id="programs" className="bg-slate-50 py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#435b9b]/5 blur-xl animate-float" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#fe6007]/5 blur-xl animate-float-reverse" />

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-4">
                            <div className="inline-block px-4 py-1 rounded-full bg-[#435b9b]/10 text-[#435b9b] font-bold text-sm mb-4 uppercase tracking-wider">
                                Perjalanan Pendampingan
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#435b9b] mb-4">
                                Roadmap Pendampingan Orang Tua
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Perjalanan memahami anak, dari mengenali tanda hingga mengubah cara berkomunikasi
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {roadmapData.map((step) => (
                                <div
                                    key={step.step}
                                    className="group bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-[#435b9b] transition-all duration-300 hover:-translate-y-2 relative z-10"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                                                <Image
                                                    src={step.image}
                                                    alt={step.title}
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-[#fe6007] text-white font-bold text-sm flex items-center justify-center shadow-md border-2 border-white">
                                                {step.step}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#fe6007] uppercase tracking-wider mb-1">Step {step.step}</p>
                                            <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 pl-4">
                                        {step.topics.map((topic) => (
                                            <li key={topic.id} className="flex items-start gap-2 text-slate-600 text-sm">
                                                <span className="text-[#fe6007] font-bold shrink-0">[Topik {topic.id}]</span>
                                                <span className="group-hover:text-slate-800 transition-colors">{topic.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <Link
                                href="#investasi"
                                    className="flex w-full items-center justify-center gap-2 bg-[#fe6007] text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(254,96,7,0.3)] hover:bg-[#e55606] transition-all hover:scale-105"
                            >
                                Gabung Mini Series
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    WHAT YOU WILL LEARN SECTION
                ────────────────────────────────────────────── */}
                <section className="bg-[#435b9b] py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl animate-float" />
                    <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full bg-white/10 blur-xl animate-float-reverse" />

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                Apa yang Akan Orang Tua Pelajari dari Mini Series Ini
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whatYouLearn.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white p-6 rounded-2xl border-l-4 border-[#fe6007] hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="w-10 h-10 mb-4 rounded-full bg-[#435b9b] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-slate-800 font-bold">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    WHY THIS SERIES SECTION (3 cards)
                ────────────────────────────────────────────── */}
                <section className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#435b9b]/10 blur-2xl animate-float" />

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-1 rounded-full bg-[#435b9b]/10 text-[#435b9b] font-bold text-sm mb-4 uppercase tracking-wider">
                                Mengapa Memilih Kami
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Kenapa Mini Series Ini <span className="text-[#fe6007]">Dibutuhkan Orang Tua?</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {whySeries.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group text-center p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-[#435b9b] hover:shadow-[0_20px_40px_-15px_rgba(67,91,155,0.2)] transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#435b9b] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <Link
                                href="#investasi"
                                    className="flex w-full items-center justify-center gap-2 bg-[#fe6007] text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(254,96,7,0.3)] hover:bg-[#e55606] transition-all hover:scale-105"
                            >
                                Gabung Mini Series
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    WHAT YOU GET SECTION
                ────────────────────────────────────────────── */}
                <section className="bg-[#e0f2fe] py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#435b9b]/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-1 rounded-full bg-[#435b9b]/10 text-[#435b9b] font-bold text-sm mb-4 uppercase tracking-wider">
                                Yang Anda Dapatkan
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Apa Saja yang <span className="text-[#fe6007]">Anda Dapatkan</span>
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-white ring-4 ring-[#435b9b]/10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {whatYouGet.map((item, idx) => (
                                    <div key={idx} className={`flex items-start gap-4 group ${idx === whatYouGet.length - 1 && whatYouGet.length % 2 !== 0 ? 'md:col-span-2 md:max-w-sm md:mx-auto' : ''}`}>
                                        <div className="w-8 h-8 rounded-full bg-[#fe6007] flex items-center justify-center shrink-0 mt-0.5 shadow-md group-hover:scale-110 transition-transform">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className={`text-slate-800 font-bold text-base ${item === "E-Certificate" ? "text-[#435b9b]" : ""}`}>
                                                {item === "E-Certificate" ? "✨ " : ""}{item}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    EXPERT SECTION
                ────────────────────────────────────────────── */}
                <section id="expert" className="bg-[#e0f2fe] py-24 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-20 -mt-20" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#fe6007]/10 rounded-full blur-3xl -ml-10 -mb-10" />

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 border-4 border-white shadow-xl relative overflow-hidden ring-4 ring-[#435b9b]/10">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                {/* Expert Image */}
                                <div className="lg:col-span-4 relative order-1">
                                    <div className="relative rounded-3xl overflow-hidden border-4 border-[#435b9b]/20 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <div className="aspect-[3/4] relative">
                                            <Image
                                                src="/images/seri-bantu-anakku/expert_wati_suryani.jpg"
                                                alt="Dra. Yeti Widiati Suryani, Psikolog"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 bg-[#435b9b] text-white p-6 rounded-tl-3xl rounded-br-3xl shadow-xl hidden md:block border-4 border-white">
                                        <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80 text-[#fe6007]">Expert</p>
                                        <h3 className="text-xl font-bold leading-none">Dra. Yeti Widiati</h3>
                                    </div>
                                </div>

                                {/* Expert Content */}
                                <div className="lg:col-span-8 order-2 text-left space-y-8">
                                    <div>
                                        <div className="inline-block px-4 py-1 rounded-full bg-[#fe6007]/10 text-[#fe6007] font-bold text-sm mb-4">
                                            Disusun oleh Praktisi Berpengalaman
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#435b9b] mb-2 leading-tight">
                                            Belajar Langsung dari <span className="text-[#fe6007]">Ahlinya</span>
                                        </h2>
                                        <h3 className="text-2xl text-slate-600 font-medium">Dra. Yeti Widiati, Psikolog Perkembangan</h3>
                                        <div className="h-1.5 w-24 bg-[#fe6007] mt-6 rounded-full"></div>
                                    </div>

                                    <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
                                        <p className="font-serif italic text-2xl text-[#435b9b] border-l-4 border-[#fe6007] pl-6 py-2 bg-[#fe6007]/5 rounded-r-xl">
                                            "Orangtua, Guru, Konselor dan Psikolog perlu memahami masalah anak secara mendasar dikaitkan dengan setiap tahap perkembangan anak. Maka, penanganan menjadi lebih komprehensif, anak lebih bahagia dan efek positif bertahan lebih lama."
                                        </p>
                                        <p>
                                            Telah berkarya lebih dari <span className="font-bold text-[#fe6007]">30 tahun</span> memberikan pelayanan psikoterapi, penanganan trauma, dan pendampingan Anak Berkebutuhan Khusus (ABK) serta keluarga.
                                        </p>
                                        <p>
                                            Materi disampaikan dengan pendekatan hangat, realistis, dan relevan dengan dinamika keluarga Indonesia.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                                        <div className="bg-[#435b9b]/5 p-4 rounded-xl">
                                            <div className="text-3xl font-bold text-[#435b9b]">30+</div>
                                            <div className="text-sm text-slate-500 font-bold">Tahun Pengalaman</div>
                                        </div>
                                        <div className="bg-[#fe6007]/5 p-4 rounded-xl">
                                            <div className="text-3xl font-bold text-[#fe6007]">Psikolog</div>
                                            <div className="text-sm text-slate-500 font-bold">Lisensi Resmi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    TESTIMONIAL SECTION
                ────────────────────────────────────────────── */}
                <TestimonialCarousel testimonials={testimonials} />

                {/* ──────────────────────────────────────────────
                    PRICING SECTION
                ────────────────────────────────────────────── */}
                <section id="investasi" className="bg-slate-50 py-20 px-6 md:px-12 border-t border-slate-200 relative overflow-hidden">
                    <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#435b9b] opacity-5 blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#fe6007] opacity-5 blur-3xl animate-float-reverse" />

                    <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                        <div className="inline-block px-4 py-1 rounded-full bg-[#435b9b]/10 text-[#435b9b] font-bold text-sm mb-4 uppercase tracking-wider">
                            Investasi Ilmu
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Investasi Ilmu untuk <span className="text-[#fe6007]">Pendampingan Anak</span>
                        </h2>
                        <p className="text-slate-600">Pilih paket yang sesuai dengan kebutuhan Anda saat ini</p>
                    </div>

                    {/* Bundle Plan */}
                    <div className="max-w-6xl mx-auto mb-16 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Pricing Card */}
                            <div className="order-2 lg:order-2 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#435b9b] relative hover:shadow-[0_25px_50px_-12px_rgba(67,91,155,0.25)] transition-all duration-500 hover:-translate-y-2 group ring-4 ring-[#435b9b]/10 p-8 md:p-12 lg:h-full flex flex-col justify-center">
                                <div className="absolute top-0 right-0 bg-[#fe6007] text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 z-20">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    Best Value
                                </div>
                                <div className="text-center relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Bundling 7 eCourse</h3>
                                    <p className="text-slate-600 mb-6 font-medium">Dapatkan akses lengkap ke semua modul dengan harga hemat</p>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 text-left">
                                        {["Akses Selamanya", "Studi Kasus Nyata", "7 Worksheet", "7 Tools Refleksi", "5 Tools Skrining", "E-Certificate"].map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-[#fe6007] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-slate-700 text-sm font-bold">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6">
                                        <span className="text-2xl text-slate-400 line-through font-bold">Rp700.000</span>
                                        <span className="text-5xl font-extrabold text-slate-900">Rp560.000</span>
                                    </div>
                                    <Link
                                        href="/checkout/seri-bantu?plan=bundling-bantu-anakku"
                                        className="inline-block w-full bg-[#fe6007] text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:bg-[#e55606] transition-all hover:scale-105"
                                    >
                                        Daftar Bundling Sekarang
                                    </Link>
                                </div>
                            </div>

                            {/* Banner Image */}
                            <div className="order-1 lg:order-1 relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#435b9b]/20 hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="/images/seri-bantu-anakku/bundling-banner.png"
                                    alt="Banner Bundling Seri Bantu Anak-ku"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Single Topic Carousel */}
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                Atau Pilih <span className="text-[#fe6007]">Topik Satuan</span>
                            </h3>
                            <p className="text-slate-500">Mulai dari topik yang paling Anda butuhkan hari ini</p>
                        </div>
                        <TopicCarousel topics={allTopics} />
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    CLOSING CTA SECTION
                ────────────────────────────────────────────── */}
                <section className="bg-[#435b9b] py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-5 left-10 w-24 h-24 rounded-full bg-white/10 blur-xl animate-float" />
                    <div className="absolute bottom-5 right-10 w-28 h-28 rounded-full bg-white/10 blur-xl animate-float-reverse" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center animate-bounce-soft">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Siap Mendampingi Anak dengan Lebih Tenang & Penuh Kesadaran?
                        </h2>
                        <p className="text-white/80 text-lg mb-3 max-w-2xl mx-auto italic">
                            Anak tidak selalu butuh orang tua yang sempurna.
                        </p>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto font-medium">
                            Mereka butuh orang tua yang <span className="font-bold text-white">hadir, peka, dan mau belajar memahami</span>.
                        </p>
                        <p className="text-white/70 mb-8 text-sm">Mulai langkah kecil hari ini.</p>
                        <Link
                            href="#investasi"
                                className="group flex w-full items-center justify-center gap-2 bg-white text-[#fe6007] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            Gabung Mini Series
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                    FAQ SECTION
                ────────────────────────────────────────────── */}
                <section className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#435b9b]/10 blur-2xl animate-float" />

                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                            Pertanyaan yang <span className="text-[#fe6007]">Sering Ditanyakan</span>
                        </h2>

                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <details key={idx} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border-2 border-slate-100 hover:border-[#435b9b]/30">
                                    <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                                        <span className="flex items-center gap-3">
                                            <span className="w-7 h-7 rounded-full bg-[#435b9b]/10 flex items-center justify-center text-[#435b9b] text-sm font-bold shrink-0">{idx + 1}</span>
                                            {faq.question}
                                        </span>
                                        <span className="transition group-open:rotate-180 text-[#fe6007] shrink-0 ml-4">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <div className="bg-white p-6 text-slate-600 text-sm border-t border-slate-100 rounded-b-xl leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
