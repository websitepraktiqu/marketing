'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Clock, Video, ArrowRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

type Topic = {
    id: number;
    name: string;
    image?: string;
    price?: number;
    originalPrice?: number;
};

type TopicCarouselProps = {
    topics: Topic[];
};

const TopicCarousel = ({ topics }: TopicCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { align: 'start' }
        }
    }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative group/carousel">
            <div className="overflow-hidden p-4 -m-4" ref={emblaRef}>
                <div className="flex touch-pan-y -ml-6">
                    {topics.map((topic, index) => (
                        <div key={index} className="flex-[0_0_100%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-6">
                            <div className="h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#435b9b]/10 transition-all duration-300 group hover:-translate-y-2 border-2 border-slate-100 relative">

                                <div className="h-32 bg-[#e0f2fe] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#fe6007] text-white font-black text-lg flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,0.1)] border-2 border-white transform rotate-12">
                                        0{topic.id}
                                    </div>
                                </div>

                                <div className="px-5 pb-6 -mt-16 relative">
                                    <div className="w-full aspect-video relative bg-slate-200 rounded-2xl overflow-hidden shadow-md mb-4 border-4 border-white">
                                        <Image
                                            src={topic.image || "/images/placeholder-topic.png"}
                                            alt={topic.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                                            <div className="inline-block px-2 py-1 bg-[#27ae60] text-white text-[10px] font-bold rounded-lg uppercase tracking-wider shadow-sm">
                                                Tersedia Rekaman
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-slate-900 font-extrabold text-lg leading-tight mb-2 line-clamp-2 min-h-[3rem]">
                                                {topic.name}
                                            </h4>
                                            <div className="space-y-2 text-sm text-slate-600">
                                                <div className="flex items-start gap-2">
                                                    <Video className="w-4 h-4 text-[#435b9b] mt-0.5 shrink-0" />
                                                    <span>Materi Video & PDF</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <Clock className="w-4 h-4 text-[#435b9b] mt-0.5 shrink-0" />
                                                    <span>Durasi 60-90 Menit</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-slate-100">
                                            <div className="flex justify-between items-end mb-4">
                                                <div>
                                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Investasi Belajar</p>
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-sm text-slate-400 line-through">
                                                            Rp{(topic.originalPrice || 150000).toLocaleString('id-ID')}
                                                        </span>
                                                        <span className="text-xl font-extrabold text-[#fe6007]">
                                                            Rp{(topic.price || 100000).toLocaleString('id-ID')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <Link
                                                href={`/checkout/seri-bantu?plan=topik-${topic.id}`}
                                                className="block w-full text-center bg-[#435b9b] text-white font-bold py-3 rounded-xl shadow-[0_4px_0_#2c3e50] hover:shadow-[0_2px_0_#2c3e50] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
                                            >
                                                Daftar Sekarang
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#435b9b] hover:bg-[#fe6007] hover:text-white transition-all z-20 border-2 border-[#eff6ff] opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#435b9b] hover:bg-[#fe6007] hover:text-white transition-all z-20 border-2 border-[#eff6ff] opacity-0 group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
};

export default TopicCarousel;
