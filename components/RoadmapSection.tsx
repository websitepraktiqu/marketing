"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const roadmapData = [
    {
        id: "00",
        date: "16 November 2025",
        type: "Talkshow",
        title: "Peran Psikolog dalam Masalah Tumbuh Kembang",
    },
    {
        id: "01",
        date: "29 November 2025",
        type: "Sesi Webinar",
        title: "Tim Penanganan Interdisiplin",
    },
    {
        id: "02",
        date: "17-18 Desember 2025",
        type: "Sesi Webinar",
        title: "Tumbuh Kembang dan Deviasi Perkembangan",
    },
    {
        id: "03",
        date: "17 Januari 2026",
        type: "Sesi Webinar",
        title: "Sistem Sensori, Refleks, dan Pola Kerja Psikolog",
    },
    {
        id: "04",
        date: "21 Februari 2026",
        type: "",
        title: "Diskusi Kasus",
    }
];

export default function RoadmapSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true // Allows smooth dragging
    });
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
        <section className="bg-sky-50 py-24 px-4 overflow-hidden relative font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 flex justify-between items-end px-4 md:px-0">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-sky-900 uppercase tracking-tighter mb-2">
                            ROAD MAP.
                        </h2>
                        <p className="text-sky-600">Perjalanan pembelajaran Anda bersama kami</p>
                    </div>

                    {/* Navigation Buttons (Desktop) */}
                    <div className="hidden md:flex gap-4">
                        <button
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border border-sky-200 ${!prevBtnEnabled ? 'opacity-50 cursor-not-allowed bg-sky-100 text-sky-300' : 'bg-white text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600'}`}
                            onClick={scrollPrev}
                            disabled={!prevBtnEnabled}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border border-sky-200 ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed bg-sky-100 text-sky-300' : 'bg-white text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600'}`}
                            onClick={scrollNext}
                            disabled={!nextBtnEnabled}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden" ref={emblaRef}>

                    {/* Decor line running through visual center */}
                    <div className="absolute top-[3.5rem] left-0 right-0 h-1 bg-sky-200 pointer-events-none hidden md:block"></div>

                    <div className="flex touch-pan-y gap-8 md:gap-0 pl-4 md:pl-0 pb-12 pt-4">
                        {roadmapData.map((item, index) => (
                            <div
                                key={item.id}
                                className="flex-[0_0_85%] md:flex-[0_0_35%] lg:flex-[0_0_28%] min-w-0 relative group md:px-6"
                            >
                                <div className="md:pt-14 relative">
                                    {/* Connection Dot on Line */}
                                    <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-sky-600 rounded-full border-4 border-white shadow-md z-10 items-center justify-center -mt-[1.25rem]">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>

                                    {/* Card */}
                                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-sky-100 hover:border-sky-300 transition-all duration-300 h-full relative overflow-hidden group-hover:shadow-xl">
                                        {/* Top accent */}
                                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-cyan-300"></div>

                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-4xl font-bold text-sky-100 group-hover:text-sky-500 transition-colors duration-300 font-mono">
                                                {item.id}
                                            </span>
                                            {item.type && (
                                                <span className="px-3 py-1 bg-sky-50 text-sky-600 text-[10px] uppercase font-bold tracking-wider rounded-full border border-sky-100">
                                                    {item.type}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-800 mb-4 leading-snug group-hover:text-sky-700 transition-colors">
                                            {item.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium border-t border-slate-100 pt-4 mt-auto">
                                            <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation (Visible only on mobile) */}
                <div className="md:hidden flex justify-center gap-4 mt-4">
                    <button
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border border-sky-200 ${!prevBtnEnabled ? 'opacity-50 cursor-not-allowed bg-sky-100 text-sky-300' : 'bg-white text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600'}`}
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border border-sky-200 ${!nextBtnEnabled ? 'opacity-50 cursor-not-allowed bg-sky-100 text-sky-300' : 'bg-white text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600'}`}
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
