"use client";

import React from 'react';

const roadmapData = [
    {
        id: "00",
        date: "16 November 2025",
        type: "Talkshow:",
        title: "Peran Psikolog dalam Masalah Tumbuh Kembang",
        position: "right-top",
        textAlign: "text-left"
    },
    {
        id: "01",
        date: "29 November 2025",
        type: "Sesi Webinar:",
        title: "Tim Penanganan Interdisiplin",
        position: "left",
        textAlign: "text-right"
    },
    {
        id: "02",
        date: "17-18 Desember 2025",
        type: "Sesi Webinar:",
        title: "Tumbuh Kembang dan Deviasi Perkembangan",
        position: "right",
        textAlign: "text-left"
    },
    {
        id: "03",
        date: "17 Januari 2026",
        type: "Sesi Webinar:",
        title: "Sistem Sensori, Refleks, dan Pola Kerja Psikolog",
        position: "center-right", // Adjusted for better visual flow
        textAlign: "text-left"
    },
    {
        id: "04",
        date: "21 Februari 2026",
        type: "",
        title: "Diskusi Kasus",
        position: "center-bottom",
        textAlign: "text-center"
    }
];

export default function RoadmapSection() {
    return (
        <section className="bg-sky-50 py-20 px-4 overflow-hidden relative font-sans">
            {/* Background decorative elements could go here */}

            <div className="max-w-5xl mx-auto relative">
                <div className="mb-16 md:mb-24 px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-sky-900 uppercase tracking-tighter">
                        ROAD MAP.
                    </h2>
                </div>

                <div className="relative min-h-[800px] md:min-h-[1000px]">
                    {/* Dashed Line SVG Path - Desktop & Mobile Responsive */}
                    {/* 
                        We need a responsive SVG path. 
                        For mobile: A simple vertical line.
                        For desktop: A winding path.
                     */}

                    {/* Desktop Path (Hidden on Mobile) */}
                    <div className="hidden md:block absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 1000 1200" preserveAspectRatio="none">
                            <path
                                d="M550,50 
                                   Q550,150 650,150 
                                   T750,250
                                   V300
                                   Q750,400 650,400
                                   T350,400
                                   Q250,400 250,500
                                   V550
                                   Q250,650 350,650
                                   T650,650
                                   Q750,650 750,750
                                   V800
                                   Q750,900 650,900
                                   T350,900
                                   Q250,900 250,1000
                                   V1150"
                                fill="none"
                                stroke="#0ea5e9" // sky-500
                                strokeWidth="4"
                                strokeDasharray="16 16"
                                strokeLinecap="round"
                                className="opacity-40"
                            />
                        </svg>
                    </div>

                    {/* Mobile Path (Visible on Mobile) */}
                    <div className="md:hidden absolute left-8 top-20 bottom-20 w-1 border-l-4 border-dashed border-sky-300 transform -translate-x-1/2"></div>


                    {/* Items */}
                    <div className="space-y-12 md:space-y-0 relative">

                        {/* Item 00 */}
                        <div className="relative md:absolute md:right-[15%] md:top-[5%] w-full md:w-1/3 pl-20 md:pl-0">
                            {/* Marker Node */}
                            <div className="absolute left-4 md:-left-12 top-0 md:top-4 w-12 h-12 md:w-20 md:h-20 bg-sky-800 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl z-10 shadow-lg border-4 border-white">
                                00.
                                {/* Triangle pointer */}
                                <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-sky-800 border-r-[6px] border-r-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="text-left md:text-left">
                                <p className="text-gray-600 text-sm mb-1">Talkshow:</p>
                                <h3 className="text-sky-700 font-bold text-xl md:text-2xl mb-2 leading-tight">
                                    Peran Psikolog dalam Masalah Tumbuh Kembang
                                </h3>
                                <p className="inline-block bg-sky-200/50 text-sky-800 font-medium px-2 py-1 rounded">
                                    16 November 2025
                                </p>
                            </div>
                        </div>

                        {/* Item 01 */}
                        <div className="relative md:absolute md:left-[15%] md:top-[28%] w-full md:w-1/3 pl-20 md:pl-0">
                            {/* Marker Node */}
                            <div className="absolute left-4 md:-right-12 top-0 md:top-4 w-12 h-12 md:w-20 md:h-20 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl z-10 shadow-lg border-4 border-white">
                                01.
                                <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-sky-500 border-r-[6px] border-r-transparent"></div>
                            </div>

                            <div className="text-left md:text-right">
                                <p className="text-gray-600 text-sm mb-1">Sesi Webinar:</p>
                                <h3 className="text-sky-700 font-bold text-xl md:text-2xl mb-2 leading-tight">
                                    Tim Penanganan Interdisiplin
                                </h3>
                                <p className="inline-block border-b-2 border-sky-300 text-gray-700 font-medium pb-0.5">
                                    29 November 2025
                                </p>
                            </div>
                        </div>

                        {/* Item 02 */}
                        <div className="relative md:absolute md:right-[15%] md:top-[43%] w-full md:w-1/3 pl-20 md:pl-0">
                            <div className="absolute left-4 md:-left-12 top-0 md:top-4 w-12 h-12 md:w-20 md:h-20 bg-sky-800 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl z-10 shadow-lg border-4 border-white">
                                02.
                                <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-sky-800 border-r-[6px] border-r-transparent"></div>
                            </div>

                            <div className="text-left md:text-left">
                                <p className="text-gray-600 text-sm mb-1">Sesi Webinar:</p>
                                <h3 className="text-sky-700 font-bold text-xl md:text-2xl mb-2 leading-tight">
                                    Tumbuh Kembang dan Deviasi Perkembangan
                                </h3>
                                <p className="inline-block border-b-2 border-sky-300 text-gray-700 font-medium pb-0.5">
                                    17-18 Desember 2025
                                </p>
                            </div>
                        </div>

                        {/* Item 03 */}
                        <div className="relative md:absolute md:left-[35%] md:top-[65%] w-full md:w-1/3 pl-20 md:pl-0">
                            <div className="absolute left-4 md:-left-12 top-0 md:top-4 w-12 h-12 md:w-20 md:h-20 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl z-10 shadow-lg border-4 border-white">
                                03.
                                <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-sky-500 border-r-[6px] border-r-transparent"></div>
                            </div>

                            <div className="text-left md:text-left md:pl-16">
                                <p className="text-gray-600 text-sm mb-1">Sesi Webinar:</p>
                                <h3 className="text-sky-700 font-bold text-xl md:text-2xl mb-2 leading-tight">
                                    Sistem Sensori, Refleks, dan Pola Kerja Psikolog
                                </h3>
                                <p className="inline-block border-b-2 border-sky-300 text-gray-700 font-medium pb-0.5">
                                    17 Januari 2026
                                </p>
                            </div>
                        </div>

                        {/* Item 04 */}
                        <div className="relative md:absolute md:left-[15%] md:bottom-[0%] w-full md:w-1/3 pl-20 md:pl-0 pb-12">
                            <div className="absolute left-4 md:left-1/2 top-0 md:-top-4 w-12 h-12 md:w-20 md:h-20 bg-sky-800 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl z-10 shadow-lg border-4 border-white md:-translate-x-1/2">
                                04.
                                <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-sky-800 border-r-[6px] border-r-transparent"></div>
                            </div>

                            <div className="text-left md:text-center md:pt-24">
                                <h3 className="text-sky-700 font-bold text-xl md:text-2xl mb-2 leading-tight">
                                    Diskusi Kasus
                                </h3>
                                <p className="inline-block border-b-2 border-sky-300 text-gray-700 font-medium pb-0.5">
                                    21 Februari 2026
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="md:hidden text-center mt-12 pb-8">
                    <p className="text-sky-900 font-handwriting text-xl">
                        Towards a Mental Health Ecosystem
                    </p>
                    <p className="text-sky-700 font-bold mt-2">@praktiqu</p>
                    <p className="text-sky-600 text-sm">www.praktiqu.com</p>
                </div>

                <div className="hidden md:flex justify-between items-end border-b-2 border-sky-200 pb-4 mt-20">
                    <p className="text-sky-900 font-handwriting text-2xl italic">
                        Towards a Mental Health Ecosystem
                    </p>
                    <div className="text-right">
                        <p className="text-sky-900 font-bold text-xl">@praktiqu</p>
                        <p className="text-sky-600">www.praktiqu.com</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
