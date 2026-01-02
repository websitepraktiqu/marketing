"use client";

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import AgendaDetailModal from './AgendaDetailModal';

const sessions = [
    {
        id: 5,
        image: "/images/agenda/agenda-5.png",
        alt: "Talkshow Special Price",
        isFinished: true,
        title: "Peran Psikolog dalam Masalah Tumbuh Kembang",
        date: "16 November 2025",
        type: "Talkshow",
        description: "Sesi pembuka ini akan membahas peran vital seorang psikolog dalam mendeteksi dan menangani masalah tumbuh kembang anak sejak dini. Peserta akan memahami batasan klinis, etika profesi, dan kolaborasi dengan orang tua.",
        syllabus: [
            "Perkenalan peran psikolog dalam masalah tumbuh kembang.",
            "Beragam masalah terkait tumbuh kembang.",
            "Sharing pengalaman kasus anak tidak tuntas.",
            "Gambaran awal yang diperlukan dalam mempelajari tumbuh kembang.",
            "Tips interview & observasi awal."
        ]
    },
    {
        id: 1,
        image: "/images/agenda/agenda-1.png",
        alt: "Session 1 Agenda",
        isFinished: true,
        title: "Tim Penanganan Interdisiplin",
        date: "29 November 2025",
        type: "Sesi Webinar",
        description: "Menjelaskan pentingnya kerjasama antar disiplin ilmu (dokter anak, terapis wicara, okupasi terapis, dll) untuk memberikan penanganan yang holistik bagi anak berkebutuhan khusus.",
        syllabus: [
            "Pentingnya kolaborasi interdisiplin.",
            "Peran masing-masing profesional.",
            "Studi kasus kolaborasi sukses.",
            "Tantangan dalam tim interdisiplin."
        ]
    },
    {
        id: 2,
        image: "/images/agenda/agenda-2.png",
        alt: "Session 2 Agenda",
        isFinished: true,
        title: "Tumbuh Kembang dan Deviasi Perkembangan",
        date: "17-18 Desember 2025",
        type: "Sesi Webinar",
        description: "Deep dive ke dalam tahapan tumbuh kembang normal dan tanda-tanda red flags atau penyimpangan yang perlu diwaspadai.",
        syllabus: [
            "Milestone perkembangan anak usia 0-5 tahun.",
            "Red flags perkembangan motorik, bahasa, dan sosial.",
            "Mengenal gangguan neurodevelopmental.",
            "Deteksi dini di puskesmas/sekolah."
        ]
    },
    {
        id: 3,
        image: "/images/agenda/agenda-3.png",
        alt: "Session 3 Agenda",
        isFinished: false,
        title: "Sistem Sensori, Refleks, dan Pola Kerja Psikolog",
        date: "17 Januari 2026",
        type: "Sesi Webinar",
        description: "Memahami bagaimana sistem sensori dan refleks primitif mempengaruhi perilaku dan emosi anak, serta bagaimana psikolog dapat mengintervensinya.",
        syllabus: [
            "Dasar-dasar integrasi sensori.",
            "Refleks primitif dan pengaruhnya pada belajar.",
            "Asesmen profil sensori sederhana.",
            "Intervensi berbasis sensori di ruang terapi."
        ]
    },
    {
        id: 4,
        image: "/images/agenda/agenda-4.png",
        alt: "Case Study Session",
        isFinished: false,
        title: "Diskusi Kasus",
        date: "21 Februari 2026",
        type: "Diskusi Kasus",
        description: "Sesi interaktif bedah kasus nyata yang dibawa oleh peserta atau narasumber, menerapkan teori yang sudah dipelajari sebelumnya.",
        syllabus: [
            "Presentasi kasus terpilih.",
            "Analisis masalah dan diagnosis banding.",
            "Merancang rencana intervensi.",
            "Evaluasi dan follow-up."
        ]
    }
];

export default function AgendaSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', containScroll: 'trimSnaps' }, [Autoplay({ delay: 5000 })]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSession, setSelectedSession] = useState<typeof sessions[0] | null>(null);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    const handleOpenModal = (session: typeof sessions[0]) => {
        setSelectedSession(session);
        setIsModalOpen(true);
    };

    return (
        <section className="bg-slate-900 py-20 px-4 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Kisi Materi Per Sesi
                    </h2>
                    <p className="text-slate-400">Pembahasan komprehensif dari teori hingga praktik</p>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-7xl mx-auto px-4 md:px-0">
                    <div className="overflow-hidden py-10 -my-10" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {sessions.map((session) => (
                                <div
                                    key={session.id}
                                    className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_33.33%] pl-4 min-w-0"
                                >
                                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group">
                                        <Image
                                            src={session.image}
                                            alt={session.alt}
                                            fill
                                            className={`object-cover transition-transform duration-500 ${session.isFinished ? 'blur-[2px]' : 'hover:scale-105'}`}
                                            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
                                        />
                                        {session.isFinished && (
                                            <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center gap-4 backdrop-blur-[1px]">
                                                <div className="bg-green-500/90 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg border border-green-400 transform -rotate-12 uppercase tracking-wider">
                                                    Tersedia Rekaman
                                                </div>
                                                <button
                                                    onClick={() => handleOpenModal(session)}
                                                    className="bg-white/90 backdrop-blur-sm hover:bg-cyan-500 hover:text-white text-cyan-600 text-sm font-bold py-2.5 px-5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-1"
                                                >
                                                    Lihat Lainnya
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}

                                        {!session.isFinished && (
                                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button
                                                    onClick={() => handleOpenModal(session)}
                                                    className="bg-white/90 backdrop-blur-sm hover:bg-cyan-500 hover:text-white text-cyan-600 text-xs font-bold py-2 px-4 rounded-lg transition-all shadow-lg flex items-center gap-1.5"
                                                >
                                                    Detail
                                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-slate-800 text-white hover:bg-cyan-500 hover:text-white border border-slate-700"
                            onClick={scrollPrev}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-slate-800 text-white hover:bg-cyan-500 hover:text-white border border-slate-700"
                            onClick={scrollNext}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <AgendaDetailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={selectedSession}
            />
        </section>
    );
}
