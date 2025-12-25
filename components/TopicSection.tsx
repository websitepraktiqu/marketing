export default function TopicSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Kenapa harus ikutan di <br />
                    <span className="text-[#06b6d4]">Mini Course Ini?</span>
                </h2>

                <Carousel />
            </div>
        </section>
    );
}

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const items = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
        ),
        color: "sky",
        title: "Paham Fondasi Sensori & Refleks",
        desc: "Belajar bagaimana sistem sensori dan refleks bekerja dalam tumbuh kembang anak, serta kaitannya dengan perilaku, emosi, dan kemampuan fungsional anak di kehidupan sehari-hari."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        ),
        color: "cyan",
        title: "Tidak Bingung Deviasi Perkembangan",
        desc: "Mengenali tanda awal gangguan perkembangan melalui pendekatan sensori, refleks, dan DDTK—sehingga tahu kapan perlu rujukan dan intervensi lanjutan."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
        ),
        color: "blue",
        title: "Pola Kerja Psikolog Nyata",
        desc: "Memahami alur kerja psikolog: mulai dari proses rujukan, penggunaan form pemeriksaan, peran PIC intervensi, hingga kolaborasi dengan terapis dan tenaga profesional lainnya."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        ),
        color: "indigo",
        title: "Pendekatan Interdisiplin",
        desc: "Cocok untuk mahasiswa, praktisi pemula, guru, dan tenaga pendamping anak yang ingin memahami cara bekerja lintas profesi tanpa tumpang tindih peran."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        ),
        color: "purple",
        title: "Real Case Discussion",
        desc: "Diskusi kasus nyata bersama tim interdisiplin dan member kelas untuk mendapatkan pemahaman penanganan praktis."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        ),
        color: "rose",
        title: "Sharing Kasus Berkelanjutan",
        desc: (
            <>
                Ikuti seluruh sesinya untuk bisa mengikuti sharing kasus bersama tim pemateri, secara berkala. <br /><span className="font-bold text-rose-600">KHUSUS ALUMNI PAKET ALL SESSION</span>
            </>
        )
    }
];

function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000 })]);
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

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'sky': return { bg: 'bg-sky-100', text: 'text-sky-600' };
            case 'cyan': return { bg: 'bg-cyan-100', text: 'text-cyan-600' };
            case 'blue': return { bg: 'bg-blue-100', text: 'text-blue-600' };
            case 'indigo': return { bg: 'bg-indigo-100', text: 'text-indigo-600' };
            case 'purple': return { bg: 'bg-purple-100', text: 'text-purple-600' };
            case 'rose': return { bg: 'bg-rose-100', text: 'text-rose-600' };
            default: return { bg: 'bg-slate-100', text: 'text-slate-600' };
        }
    }

    return (
        <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                    {items.map((item, index) => {
                        const colors = getColorClasses(item.color);
                        return (
                            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0" key={index}>
                                <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-6 ${colors.text} shrink-0`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed grow">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
                <button
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${prevBtnEnabled ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-50 text-slate-300 cursor-not-allowed'}`}
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${nextBtnEnabled ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-50 text-slate-300 cursor-not-allowed'}`}
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
}
