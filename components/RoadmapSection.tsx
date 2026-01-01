"use client";

import React from 'react';

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
    return (
        <section className="bg-sky-50 py-24 px-4 overflow-hidden relative font-sans">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-sky-900 uppercase tracking-tighter">
                        ROAD MAP.
                    </h2>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-sky-200 md:-translate-x-1/2 border-r-2 border-dashed border-sky-300 bg-transparent"></div>

                    <div className="space-y-12">
                        {roadmapData.map((item, index) => {
                            const isOdd = index % 2 !== 0;
                            return (
                                <div key={item.id} className={`relative flex items-center md:justify-between ${isOdd ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Node (Circle) */}
                                    <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-12 md:h-12 bg-sky-600 rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2 flex items-center justify-center">
                                        <span className="text-white text-xs md:text-sm font-bold">{item.id}</span>
                                    </div>

                                    {/* Content Card - Left/Right based on index */}
                                    <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isOdd ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`bg-white p-6 rounded-2xl shadow-md border-l-4 ${isOdd ? 'border-sky-400' : 'border-sky-600'} hover:shadow-lg transition-shadow duration-300 relative`}>

                                            {/* Connector line for Desktop */}
                                            <div className={`hidden md:block absolute top-1/2 w-8 h-[2px] bg-sky-300 ${isOdd ? '-left-8' : '-right-8'} -translate-y-1/2`}></div>

                                            {item.type && (
                                                <span className="inline-block px-3 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded-full mb-2">
                                                    {item.type}
                                                </span>
                                            )}
                                            <h3 className="text-xl font-bold text-slate-800 mb-2 leading-snug">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {item.date}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty spacer for the other side to maintain flex structure */}
                                    <div className="hidden md:block w-[45%]"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-center mt-20">
                    <p className="text-sky-900 font-handwriting text-2xl italic">
                        Towards a Mental Health Ecosystem
                    </p>
                </div>
            </div>
        </section>
    );
}
