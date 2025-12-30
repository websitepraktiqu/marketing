"use client";

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const sessions = [
    {
        id: 5,
        image: "/images/agenda/agenda-5.png",
        alt: "Talkshow Special Price",
        isFinished: true
    },
    {
        id: 1,
        image: "/images/agenda/agenda-1.png",
        alt: "Session 1 Agenda",
        isFinished: true
    },
    {
        id: 2,
        image: "/images/agenda/agenda-2.png",
        alt: "Session 2 Agenda",
        isFinished: true
    },
    {
        id: 3,
        image: "/images/agenda/agenda-3.png",
        alt: "Session 3 Agenda",
        isFinished: false
    },
    {
        id: 4,
        image: "/images/agenda/agenda-4.png",
        alt: "Case Study Session",
        isFinished: false
    }
];

export default function AgendaSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', containScroll: 'trimSnaps' }, [Autoplay({ delay: 5000 })]);
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
                                            <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center backdrop-blur-[1px]">
                                                <div className="bg-red-500/90 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg border border-red-400 transform -rotate-12 uppercase tracking-wider">
                                                    Acara Sudah Selesai
                                                </div>
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
        </section>
    );
}
