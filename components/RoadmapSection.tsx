"use client";

import React, { useState } from 'react';

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
        type: "Diskusi Kasus",
        title: "Diskusi Kasus",
    }
];

export default function RoadmapSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const goToNext = () => {
        setActiveIndex((prev) => (prev < roadmapData.length - 1 ? prev + 1 : prev));
    };

    const activeItem = roadmapData[activeIndex];

    return (
        <section className="bg-sky-50 py-20 px-4 overflow-hidden relative font-sans">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-sky-900 uppercase tracking-tight mb-2">
                        Roadmap.
                    </h2>
                    <p className="text-sky-500 font-medium">Perjalanan pembelajaran Anda bersama kami</p>
                </div>

                {/* Timeline Progress Bar */}
                <div className="relative flex items-center justify-between mb-12 px-4 md:px-8">
                    {/* Progress Line Background */}
                    <div className="absolute left-0 right-0 top-1/2 h-1 bg-sky-200 -translate-y-1/2 z-0 rounded-full"></div>

                    {/* Active Progress Line */}
                    <div
                        className="absolute left-0 top-1/2 h-1 bg-sky-500 -translate-y-1/2 z-0 rounded-full transition-all duration-500"
                        style={{ width: `${(activeIndex / (roadmapData.length - 1)) * 100}%` }}
                    ></div>

                    {/* Timeline Dots */}
                    {roadmapData.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base transition-all duration-300 border-4 
                                ${index <= activeIndex
                                    ? 'bg-sky-500 text-white border-white shadow-lg scale-100'
                                    : 'bg-white text-sky-400 border-sky-200 hover:border-sky-400'
                                }
                                ${index === activeIndex ? 'ring-4 ring-sky-300 scale-110' : ''}
                            `}
                            aria-label={`Go to step ${item.id}`}
                        >
                            {item.id}
                        </button>
                    ))}
                </div>

                {/* Active Item Content Card */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden transition-all duration-500 border border-sky-100">
                    {/* Top Accent */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 to-cyan-300"></div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                            {activeItem.type && (
                                <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                    {activeItem.type}
                                </span>
                            )}
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                                {activeItem.title}
                            </h3>
                            <div className="flex items-center gap-2 text-slate-500 text-base font-medium">
                                <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {activeItem.date}
                            </div>
                        </div>

                        {/* Big Step Number */}
                        <div className="text-8xl md:text-9xl font-black text-sky-100 select-none hidden md:block">
                            {activeItem.id}
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center items-center gap-6 mt-10">
                    <button
                        onClick={goToPrev}
                        disabled={activeIndex === 0}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2 
                            ${activeIndex === 0
                                ? 'bg-sky-50 text-sky-300 border-sky-100 cursor-not-allowed'
                                : 'bg-white text-sky-600 border-sky-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 shadow-md'
                            }`}
                        aria-label="Previous step"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <span className="text-sky-600 font-bold text-lg">
                        {activeIndex + 1} / {roadmapData.length}
                    </span>

                    <button
                        onClick={goToNext}
                        disabled={activeIndex === roadmapData.length - 1}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2 
                            ${activeIndex === roadmapData.length - 1
                                ? 'bg-sky-50 text-sky-300 border-sky-100 cursor-not-allowed'
                                : 'bg-white text-sky-600 border-sky-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 shadow-md'
                            }`}
                        aria-label="Next step"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
