"use client";

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const sessions = [
    {
        id: 1,
        title: "Session 1: Building The Foundation",
        topics: [
            "Perkenalan Sistem Sensori",
            "Anatomi & Fisiologi Dasar",
            "Hubungan Sensori & Perilaku",
            "Studi Kasus Sederhana"
        ]
    },
    {
        id: 2,
        title: "Session 2: Sensory & Development",
        topics: [
            "Sistem Sensori dalam Tumbuh Kembang",
            "Milestone Perkembangan Sensori",
            "Red Flag Gangguan Sensori",
            "Observasi & Checklist"
        ]
    },
    {
        id: 3,
        title: "Session 3: Reflexes & Integration",
        topics: [
            "Perkenalan Sistem Refleks",
            "Refleks Primitif & Postural",
            "Integrasi Refleks",
            "Dampak Refleks yang Tidak Terintegrasi"
        ]
    },
    {
        id: 4,
        title: "Session 4: Professional Workflow",
        topics: [
            "Pola Kerja Psikolog",
            "Alur Rujukan & Kolaborasi",
            "Penyusunan Laporan",
            "Etika & Batasan Kompetensi"
        ]
    }
];

export default function AgendaSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' }, [Autoplay({ delay: 5000 })]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

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

    return (
        <section className="bg-slate-900 py-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Kisi Materi Per Sesi
                    </h2>
                    <p className="text-slate-400">Pembahasan komprehensif dari teori hingga praktik</p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6">
                            {sessions.map((session) => (
                                <div
                                    key={session.id}
                                    className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                                            {session.id}
                                        </div>
                                        <h3 className="text-lg font-bold text-white leading-tight">{session.title}</h3>
                                    </div>

                                    <ul className="space-y-3">
                                        {session.topics.map((topic, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                                <svg className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${prevBtnEnabled ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-900/50 text-slate-600 cursor-not-allowed'}`}
                            onClick={scrollPrev}
                            disabled={!prevBtnEnabled}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${nextBtnEnabled ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-900/50 text-slate-600 cursor-not-allowed'}`}
                            onClick={scrollNext}
                            disabled={!nextBtnEnabled}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
