import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

type Topic = {
    id: number;
    name: string;
};

type TopicCarouselProps = {
    topics: Topic[];
};

const TopicCarousel = ({ topics }: TopicCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1
    }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative max-w-6xl mx-auto px-6 mb-16">
            <h3 className="text-xl font-bold text-center text-slate-900 mb-8">
                Atau Pilih Per Topik
            </h3>

            <div className="relative group">
                <div className="overflow-hidden p-4 -m-4" ref={emblaRef}>
                    <div className="flex touch-pan-y -ml-4">
                        {topics.map((topic, index) => (
                            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 pl-4">
                                <div className="h-full bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#435b9b]/30 transition-all duration-300 flex flex-col items-start justify-between group/card hover:-translate-y-1">
                                    <div className="w-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-[#435b9b] flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform shadow-md shadow-[#435b9b]/20">
                                                <BookOpen className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-[#435b9b] font-bold text-sm bg-[#435b9b]/5 px-3 py-1 rounded-full">Topik {topic.id}</span>
                                        </div>

                                        <h4 className="text-slate-800 font-bold text-lg mb-2 leading-tight h-[3.5rem] line-clamp-2">
                                            {topic.name}
                                        </h4>
                                    </div>

                                    <div className="w-full pt-6 mt-2 border-t border-dashed border-slate-200 flex items-end justify-between">
                                        <div>
                                            <div className="text-xs text-slate-400 line-through">Rp100.000</div>
                                            <div className="text-xl font-extrabold text-[#fe6007]">Rp75.000</div>
                                        </div>
                                        <Link
                                            href={`/checkout?plan=topik-${topic.id}`}
                                            className="bg-[#435b9b]/10 text-[#435b9b] font-bold py-2 px-4 rounded-lg hover:bg-[#435b9b] hover:text-white transition-all text-sm"
                                        >
                                            Pilih →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:text-[#435b9b] hover:scale-110 transition-all z-10 border border-slate-100 opacity-0 group-hover:opacity-100"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 hover:text-[#435b9b] hover:scale-110 transition-all z-10 border border-slate-100 opacity-0 group-hover:opacity-100"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default TopicCarousel;
