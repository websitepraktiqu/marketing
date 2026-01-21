"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FeaturesBar from "./components/FeaturesBar";
import TopicCarousel from "./components/TopicCarousel";

// Data untuk Roadmap
const roadmapData = [
    {
        step: 1,
        title: "Sadari & Pahami",
        image: "/images/seri-bantu-anakku/step1.png",
        topics: [
            { id: 1, name: "Awal yang Cerdas: Memahami Tanda-Tanda Masalah Anak Sejak Dini", image: "/images/seri-bantu-anakku/topics/topic-1.png" }
        ]
    },
    {
        step: 2,
        title: "Bangun Pondasi Anak",
        image: "/images/seri-bantu-anakku/step2.png",
        topics: [
            { id: 2, name: "Membangun Kemandirian Anak di Rumah dan Sekolah: Dari Manja Menuju Mandiri", image: "/images/seri-bantu-anakku/topics/topic-2.png" },
            { id: 3, name: "Membangun Kepercayaan Diri Anak: Tips Mengatasi Minder sejak Dini", image: "/images/seri-bantu-anakku/topics/topic-3.png" }
        ]
    },
    {
        step: 3,
        title: "Hadapi Emosi Sulit Anak",
        image: "/images/seri-bantu-anakku/step3.png",
        topics: [
            { id: 4, name: "Membantu Anak Menghadapi Rasa Takutnya", image: "/images/seri-bantu-anakku/topics/topic-4.png" },
            { id: 5, name: "Cemas Beda Dengan Takut? Cara Membimbing Anak Saat Cemas", image: "/images/seri-bantu-anakku/topics/topic-5.png" }
        ]
    },
    {
        step: 4,
        title: "Perbaiki Relasi & Komunikasi",
        image: "/images/seri-bantu-anakku/step4.png",
        topics: [
            { id: 6, name: "Mengapa Anak Berbohong? Mengajarkan Kejujuran Sejak Kecil", image: "/images/seri-bantu-anakku/topics/topic-6.png" },
            { id: 7, name: "Komunikasi Hipnotik dalam Pengasuhan: Memilih Kata yang Memiliki Kekuatan Mempengaruhi", image: "/images/seri-bantu-anakku/topics/topic-7.png" }
        ]
    }
];


// Data untuk FAQ
const faqData = [
    {
        question: "Apakah mini series eCourse ini hanya untuk orang tua dengan latar belakang psikologi?",
        answer: "Tidak. Mini series ini disusun khusus untuk orang tua umum, tanpa perlu latar belakang psikologi atau pendidikan khusus. Bahasa yang digunakan ringan, membumi, dan dekat dengan situasi sehari-hari di rumah maupun sekolah."
    },
    {
        question: "Apakah saya harus mengikuti semua modul secara berurutan?",
        answer: "Tidak harus. Setiap modul berdiri sendiri dan bisa dipelajari sesuai kebutuhan Anda saat ini. Namun, jika ingin pemahaman yang lebih utuh, modul disusun berurutan sebagai perjalanan pendampingan orang tua."
    },
    {
        question: "Anak saya tidak punya diagnosis tertentu. Apakah eCourse ini tetap relevan?",
        answer: "Sangat relevan. Mini series ini fokus pada pemahaman dan pendampingan anak dalam keseharian, bukan pada diagnosis. Cocok untuk orang tua yang ingin lebih peka membaca sinyal anak sejak dini, sebelum masalah berkembang lebih jauh."
    },
    {
        question: "Apakah materi di dalam eCourse ini bersifat teori atau praktik?",
        answer: "Keduanya, dengan penekanan pada praktik. Materi disampaikan dengan dasar psikologi yang kuat, lalu diterjemahkan ke dalam contoh konkret, refleksi, dan strategi sederhana yang bisa langsung diterapkan di rumah."
    },
    {
        question: "Apakah eCourse ini cocok untuk orang tua dengan anak usia berapa?",
        answer: "Mini series ini paling relevan untuk orang tua dengan anak usia dini hingga sekolah dasar. Namun, prinsip pendampingan dan komunikasi yang dibahas tetap bisa diterapkan pada usia anak yang lebih besar dengan penyesuaian."
    },
    {
        question: "Berapa lama saya bisa mengakses eCourse ini?",
        answer: "Setelah mendaftar, Anda dapat mengakses materi kapan saja sesuai kebijakan akses yang berlaku. Anda bebas belajar sesuai ritme keluarga, tanpa tekanan waktu."
    },
    {
        question: "Apakah eCourse ini menggantikan terapi atau konsultasi profesional?",
        answer: "Tidak. Mini series ini bukan pengganti terapi atau asesmen profesional, melainkan sarana edukasi dan pendampingan bagi orang tua agar lebih sadar, tenang, dan tepat dalam merespons anak. Jika diperlukan, Anda tetap dianjurkan mencari bantuan profesional."
    },
    {
        question: "Apakah saya akan mendapatkan sertifikat setelah mengikuti eCourse?",
        answer: "Ya. Peserta yang menyelesaikan eCourse akan mendapatkan E-Certificate dari PraktiQu sebagai bukti partisipasi dan pembelajaran."
    },
    {
        question: "Bagaimana jika saya hanya ingin mempelajari satu topik tertentu?",
        answer: "Anda bisa. Mini series ini memungkinkan Anda membeli per modul, tanpa harus mengambil seluruh paket, sehingga bisa fokus pada isu yang paling relevan dengan kondisi anak saat ini."
    },
    {
        question: "Saya sering merasa ragu dan takut salah sebagai orang tua. Apakah eCourse ini cocok untuk saya?",
        answer: "Justru itu alasan mini series ini dibuat. Materi dirancang untuk membantu orang tua lebih memahami anak tanpa menyalahkan diri sendiri, serta membangun kepercayaan diri dalam mendampingi tumbuh kembang anak."
    }
];

// Data untuk Testimoni
const testimonials = [
    "Saya jadi lebih paham cara merespons anak saat takut tanpa membuatnya makin cemas.",
    "Materinya ringan tapi mendalam. Cocok banget untuk orang tua yang sibuk.",
    "Setelah ikut eCourse ini, saya lebih sabar dan nggak buru-buru menghakimi anak.",
    "Worksheet-nya membantu banget untuk refleksi diri sebagai orang tua."
];

// Floating illustration component
function FloatingIllustration({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
    return (
        <div
            className={`animate-float ${className}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}

// Testimonial Carousel Component
function TestimonialCarousel({ testimonials }: { testimonials: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, 5000);
        return () => clearInterval(timer);
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
        <section className="bg-white py-20 px-6 md:px-12 overflow-hidden relative">
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-[#435b9b]/10 blur-2xl animate-float" />
            <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-[#fe6007]/10 blur-2xl animate-float-reverse" />

            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Apa Kata <span className="text-[#fe6007]">Peserta?</span>
                </h2>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Main Slide */}
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, idx) => (
                                <div key={idx} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white p-8 md:p-12 rounded-3xl border-2 border-[#435b9b] shadow-xl relative min-h-[200px] flex flex-col justify-center hover:shadow-2xl transition-shadow duration-300">
                                        {/* Quote Mark */}
                                        <div className="text-8xl text-[#fe6007]/20 absolute top-4 left-8 font-serif leading-none">"</div>

                                        {/* Quote icon top right */}
                                        <div className="absolute top-6 right-8 w-12 h-12 rounded-full bg-[#fe6007] flex items-center justify-center shadow-md">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center pt-8">
                                            <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed font-medium">
                                                "{testimonial}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
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

                {/* Dot Indicators */}
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

                {/* Counter */}
                <p className="text-center text-slate-400 text-sm mt-4">
                    {currentIndex + 1} / {testimonials.length}
                </p>
            </div>
        </section>
    );
}

export default function SeriBantuAnakku() {
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
                {/* HERO SECTION - Strategic Theme: Grid Pattern */}
                <section className="relative overflow-hidden bg-white pt-10 pb-24 px-6 md:px-12">
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.3] pointer-events-none" />
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-[#435b9b]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-[#fe6007]/5 rounded-full blur-3xl" />

                    {/* Decorative floating shapes */}
                    <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#435b9b]/10 animate-float hidden lg:block" />
                    <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-[#fe6007]/10 animate-float-reverse hidden lg:block" style={{ animationDelay: "1s" }} />
                    <div className="absolute bottom-40 left-20 w-10 h-10 rounded-full bg-[#435b9b]/10 animate-float hidden lg:block" style={{ animationDelay: "2s" }} />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
                            {/* LEFT COLUMN: Content */}
                            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#435b9b]/10 border border-[#435b9b]/20 text-[#435b9b] text-sm font-bold uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-[#435b9b] animate-pulse"></span>
                                    Mini Series eCourse
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight text-left">
                                    Seri Bantu Anak-ku! <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#435b9b] to-[#fe6007]">
                                        Strategi Penanganan Masalah Anak
                                    </span>
                                </h1>

                                <p className="text-lg text-slate-600 leading-relaxed font-medium text-left max-w-2xl">
                                    7 eCourse tematik yang disusun sebagai strategi step-by-step mendampingi anak. Pahami area masalah anak, lakukan skrining, dan dapatkan strategi penanganan yang tepat.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="#investasi"
                                        className="group inline-flex items-center gap-2 bg-[#fe6007] text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(254,96,7,0.3)] hover:bg-[#e55606] transition-all hover:scale-105 hover:shadow-[0_15px_30px_rgba(254,96,7,0.4)]"
                                    >
                                        Lihat Strategi Lengkap
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

                                {/* Benefits Strip - Moved here */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                                    {[
                                        "Akses 6 Bulan",
                                        "Studi Kasus Nyata",
                                        "7 Worksheet",
                                        "7 Tools Refleksi",
                                        "5 Tools Skrining",
                                        "E-Certificate"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-[#435b9b]/10 flex flex-shrink-0 items-center justify-center text-[#435b9b]">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Pricing Card */}
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
                                                <span className="text-3xl font-extrabold text-[#fe6007]">Rp445.000</span>
                                            </div>
                                        </div>
                                        <hr className="border-slate-100 mb-6" />
                                        <ul className="space-y-3 mb-8">
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <svg className="w-5 h-5 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Akses ke seluruh 7 modul strategi
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <svg className="w-5 h-5 text-[#435b9b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                Bonus Worksheet & Tools Skrining
                                            </li>
                                        </ul>
                                        <Link
                                            href="#investasi"
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

                {/* TOPIC CAROUSEL SECTION - Full Width */}
                <section className={`w-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                    <TopicCarousel topics={roadmapData.flatMap(step => step.topics.map(topic => ({
                        ...topic,
                        image: topic.image || step.image
                    })))} />
                </section>

                {/* ROADMAP SECTION - Strategic Theme: Connecting Lines */}
                <section className="bg-slate-50 py-20 px-6 md:px-12 relative overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#435b9b]/5 blur-xl animate-float" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#fe6007]/5 blur-xl animate-float-reverse" />

                    {/* Connecting Line for Desktop */}
                    <div className="hidden md:block absolute top-[50%] left-0 w-full h-1 border-t-2 border-dashed border-[#435b9b]/20 z-0 transform -translate-y-1/2"></div>

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#435b9b] mb-4">
                                Roadmap Pendampingan Orang Tua
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Perjalanan memahami anak, dari mengenali tanda sampai mengubah cara berkomunikasi
                            </p>
                        </div>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {roadmapData.map((step, idx) => (
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
                                            {/* Step badge */}
                                            <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-[#fe6007] text-white font-bold text-sm flex items-center justify-center shadow-md border-2 border-white">
                                                {step.step}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
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
                    </div>
                </section>

                {/* WHAT YOU WILL LEARN SECTION */}
                <section className="bg-[#435b9b] py-20 px-6 md:px-12 relative overflow-hidden">
                    {/* Floating decorative circles */}
                    <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl animate-float" />
                    <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full bg-white/10 blur-xl animate-float-reverse" />

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                Apa yang Akan Orang Tua Pelajari?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Mengenali tanda masalah anak sejak dini tanpa overthinking",
                                "Memahami perbedaan takut, cemas, dan minder",
                                "Menentukan respon yang menenangkan, bukan memperburuk emosi anak",
                                "Membantu anak bertumbuh mandiri sesuai tahap usia",
                                "Mengubah cara berbicara agar anak lebih kooperatif"
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white p-6 rounded-2xl border-l-4 border-[#fe6007] hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="w-10 h-10 mb-4 rounded-full bg-[#435b9b] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                        {/* Use checkmark icon for "What You Will Learn" */}
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

                {/* WHY THIS SERIES SECTION */}
                <section className="bg-white py-20 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#435b9b]/10 blur-2xl animate-float" />

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Kenapa Mini Series Ini Dibutuhkan <span className="text-[#fe6007]">Orangtua & Profesional Bidang Anak</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Bukan Sekadar Parenting Tips",
                                    desc: "Materi disusun untuk membantu orang tua memahami kenapa anak berperilaku tertentu, bukan hanya apa yang harus dilakukan.",
                                    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                },
                                {
                                    title: "Berbasis Kehidupan Sehari-hari",
                                    desc: "Contoh kasus dekat dengan realita orang tua di rumah & sekolah.",
                                    iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                },
                                {
                                    title: "Fleksibel & Tidak Menghakimi",
                                    desc: "Tidak memaksakan satu gaya pengasuhan, tapi membantu orang tua lebih sadar dalam memilih respon.",
                                    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                },
                                {
                                    title: "Berbasis Prinsip Ilmiah",
                                    desc: "Berdasarkan pada prinsip ilmiah dari tahapan tumbuh kembang anak",
                                    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                },
                                {
                                    title: "Kontekstual Indonesia",
                                    desc: "Sesuai dengan nilai & budaya Indonesia, menyediakan berbagai sudut pandang (anak, orangtua, profesional)",
                                    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                },
                                {
                                    title: "Praktis & Lengkap",
                                    desc: "Mudah dipelajari keluarga, dilengkapi alat bantu yang lengkap",
                                    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group text-center p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-[#435b9b] hover:shadow-[0_20px_40px_-15px_rgba(67,91,155,0.2)] transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#435b9b] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXPERT SECTION - Strategic Theme: Split Layout */}
                <section id="expert" className="bg-slate-900 py-24 px-6 md:px-12 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="bg-slate-800/50 rounded-[3rem] p-8 md:p-12 border border-slate-700 relative overflow-hidden">
                            {/* Grid Pattern Overlay */}
                            <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                                {/* Expert Image - Left Side - Large Portrait */}
                                <div className="lg:col-span-4 relative order-1">
                                    <div className="relative rounded-3xl overflow-hidden border-4 border-[#fe6007]/20 shadow-2xl">
                                        <div className="aspect-[3/4] relative">
                                            <Image
                                                src="/images/seri-bantu-anakku/expert_wati_suryani.jpg"
                                                alt="Dra. Yeti Widiati Suryani, Psikolog"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    {/* Name Badge Floating */}
                                    <div className="absolute -bottom-6 -right-6 bg-[#fe6007] text-white p-6 rounded-tl-3xl rounded-br-3xl shadow-xl hidden md:block">
                                        <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Expert</p>
                                        <h3 className="text-xl font-bold leading-none">Dra. Yeti Widiati</h3>
                                    </div>
                                </div>

                                {/* Expert Content - Right Side */}
                                <div className="lg:col-span-8 order-2 text-left space-y-8">
                                    <div>
                                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
                                            Disusun oleh <span className="text-[#fe6007]">Praktisi Senior</span>
                                        </h2>
                                        <h3 className="text-2xl text-slate-300 font-medium">Dra. Yeti Widiati Suryani, Psikolog</h3>
                                        <div className="h-1 w-20 bg-[#fe6007] mt-6"></div>
                                    </div>

                                    <div className="text-slate-300 space-y-6 text-lg leading-relaxed">
                                        <p className="font-serif italic text-2xl text-white/90 border-l-4 border-[#fe6007] pl-6 py-2">
                                            "Mengawal tumbuh kembang anak adalah investasi seumur hidup. Kita butuh kolaborasi erat antara profesional dan keluarga."
                                        </p>
                                        <p>
                                            Telah berkarya lebih dari 30 tahun memberikan pelayanan psikoterapi, penanganan trauma, dan pendampingan Anak Berkebutuhan Khusus (ABK) serta keluarga.
                                        </p>
                                        <p>
                                            Dra. Yeti membagikan strategi praktis yang mengintegrasikan aspek psikologis, sensori, dan gerak tubuh. Materi ini bukan sekadar teori, tapi "alat tempur" harian bagi orang tua.
                                        </p>
                                    </div>

                                    {/* Stats or Credentials */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-700">
                                        <div>
                                            <div className="text-3xl font-bold text-white">30+</div>
                                            <div className="text-sm text-slate-400">Tahun Pengalaman</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-white">Psikolog</div>
                                            <div className="text-sm text-slate-400">Lisensi Resmi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL SECTION - Carousel */}
                <TestimonialCarousel testimonials={testimonials} />

                {/* PRICING SECTION */}
                <section id="investasi" className="bg-slate-50 py-20 px-6 md:px-12 border-t border-slate-200 relative overflow-hidden">
                    <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#435b9b] opacity-5 blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#fe6007] opacity-5 blur-3xl animate-float-reverse" />

                    <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Investasi Ilmu
                        </h2>
                        <p className="text-slate-600">Pilih paket yang sesuai dengan kebutuhan Anda</p>
                    </div>

                    <FeaturesBar />



                    {/* Bundle Plan */}
                    {/* Bundle Plan - Refactored Side-by-Side */}
                    <div className="max-w-6xl mx-auto mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Column 1: Pricing Card */}
                            <div className="order-2 lg:order-1 bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#435b9b] relative hover:shadow-[0_25px_50px_-12px_rgba(67,91,155,0.25)] transition-all duration-500 hover:-translate-y-2 group ring-4 ring-[#435b9b]/10 p-8 md:p-12 lg:h-full flex flex-col justify-center">
                                <div className="absolute top-0 right-0 bg-[#fe6007] text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 z-20">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    Best Value
                                </div>

                                <div className="text-center relative z-10">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Bundling 7 eCourse</h3>
                                    <p className="text-slate-600 mb-6 font-medium">Dapatkan akses lengkap ke semua modul dengan harga hemat</p>
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6">
                                        <span className="text-2xl text-slate-400 line-through font-bold">Rp700.000</span>
                                        <span className="text-5xl font-extrabold text-slate-900">
                                            Rp445.000
                                        </span>
                                    </div>
                                    <Link
                                        href="/checkout?plan=bundling-bantu-anakku"
                                        className="group inline-block w-full bg-[#fe6007] text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:bg-[#e55606] transition-all hover:scale-105"
                                    >
                                        Daftar Bundling Sekarang
                                    </Link>
                                </div>
                            </div>

                            {/* Column 2: Banner Image */}
                            <div className="order-1 lg:order-2 relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#435b9b]/20 hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="/images/seri-bantu-anakku/bundling-banner.png"
                                    alt="Banner Bundling Seri Bantu Anakku"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>


                </section>

                {/* FAQ SECTION */}
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
                                        <span className="flex items-center gap-2">
                                            <span className="w-6 h-6 rounded-full bg-[#435b9b]/10 flex items-center justify-center text-[#435b9b] text-sm font-bold">{idx + 1}</span>
                                            {faq.question}
                                        </span>
                                        <span className="transition group-open:rotate-180 text-[#fe6007]">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <div className="bg-white p-6 text-slate-600 text-sm border-t border-slate-100 rounded-b-xl">
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
                            Siap Mendampingi Anak dengan Lebih Tenang?
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Mulai perjalanan memahami anak Anda hari ini. Pilih modul yang paling relevan dengan kebutuhan keluarga Anda.
                        </p>
                        <Link
                            href="#investasi"
                            className="group inline-flex items-center gap-2 bg-white text-[#fe6007] font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            Mulai Sekarang
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div >
    );
}
