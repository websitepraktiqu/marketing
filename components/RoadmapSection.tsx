"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const roadmapData = [
    {
        id: "01",
        date: "16 November 2025",
        type: "Talkshow",
        title: "Peran Psikolog dalam Masalah Tumbuh Kembang",
    },
    {
        id: "02",
        date: "29 November 2025",
        type: "Sesi Webinar",
        title: "Tim Penanganan Interdisiplin",
    },
    {
        id: "03",
        date: "17-18 Desember 2025",
        type: "Sesi Webinar",
        title: "Tumbuh Kembang dan Deviasi Perkembangan",
    },
    {
        id: "04",
        date: "17 Januari 2026",
        type: "Sesi Webinar",
        title: "Sistem Sensori, Refleks, dan Pola Kerja Psikolog",
    },
    {
        id: "05",
        date: "21 Februari 2026",
        type: "",
        title: "Diskusi Kasus",
    }
];

export default function RoadmapSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true // Smooth scrolling
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
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end px-4 md:px-0">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-sky-900 uppercase tracking-tight mb-2">
                            Roadmap.
                        </h2>
                        <p className="text-sky-500 font-medium">Perjalanan pembelajaran Anda bersama kami</p>
                    </div>

                    {/* Navigation Buttons (Desktop) */}
                    <div className="hidden md:flex gap-3">
                        <button
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border border-sky-100 ${!prevBtnEnabled ? 'opacity-40 cursor-not-allowed bg-sky-50 text-sky-300' : 'bg-white text-sky-500 hover:bg-sky-500 hover:text-white shadow-sm'}`}
                            onClick={scrollPrev}
                            disabled={!prevBtnEnabled}
                            aria-label="Previous slide"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border border-sky-100 ${!nextBtnEnabled ? 'opacity-40 cursor-not-allowed bg-sky-50 text-sky-300' : 'bg-white text-sky-500 hover:bg-sky-500 hover:text-white shadow-sm'}`}
                            onClick={scrollNext}
                            disabled={!nextBtnEnabled}
                            aria-label="Next slide"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative" ref={emblaRef}>

                    {/* Decor line running through dots (Desktop Only) - Positioned relative to card top */}
                    {/* We need this line to align with the dots. If dots are -mt-5 from card top, and we want line there. */}
                    <div className="absolute top-[35px] md:top-[60px] left-0 right-0 h-[2px] bg-sky-200 pointer-events-none hidden md:block z-0"></div>

                    {/* Embla Container - using -ml approach for spacing */}
                    <div className="flex touch-pan-y -ml-2 md:-ml-8 pb-12 pt-16 md:pt-24 cursor-grab active:cursor-grabbing">
                        {roadmapData.map((item) => (
                            <div
                                key={item.id}
                                className="flex-[0_0_85%] md:flex-[0_0_30%] pl-4 md:pl-8 min-w-0 relative group"
                            >
                                <div className="relative">
                                    {/* Connection Dot (Desktop) */}
                                    <div className="hidden md:flex absolute -top-[52px] left-1/2 -translate-x-1/2 w-8 h-8 bg-sky-600 rounded-full border-[3px] border-white ring-4 ring-sky-50 shadow-sm z-10 items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                    </div>

                                    {/* Connection Dot (Mobile) - On top of card */}
                                    <div className="md:hidden absolute -top-4 left-6 w-8 h-8 bg-sky-600 rounded-full border-[3px] border-white shadow-md z-10 flex items-center justify-center">
                                        <span className="text-white text-[10px] font-bold">{item.id}</span>
                                    </div>

                                    {/* Card */}
                                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden group-hover:-translate-y-1">
                                        {/* Top accent gradient */}
                                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-300 to-cyan-200"></div>

                                        <div className="flex justify-between items-start mb-6">
                                            <span className="text-5xl font-black text-sky-50/80 group-hover:text-sky-100 transition-colors duration-300 select-none">
                                                {item.id}
                                            </span>
                                            {item.type && (
                                                <span className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-sky-100 mt-2">
                                                    {item.type}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6 leading-tight min-h-[3.5rem]">
                                            {item.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-slate-400 text-sm font-medium border-t border-slate-50 pt-4 mt-auto">
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

                {/* Mobile Navigation Indicators */}
                <div className="md:hidden flex justify-center gap-2 mt-2">
                    {roadmapData.map((_, idx) => (
                        <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === 0 ? 'w-8 bg-sky-500' : 'w-2 bg-sky-200'}`}></div>
                    ))}
                </div>

            </div>
        </section>
    );
}
