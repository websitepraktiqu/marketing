"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function ExpertSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setProgress(scrollPercentage);
        }
    };

    useEffect(() => {
        handleScroll(); // Initial check
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', handleScroll);
    }, []);

    return (
        <section id="expert" className="bg-[#06b6d4] py-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Belajar Langsung dari Expert:</h2>
                    <p className="text-white/90">Dapatkan insight mendalam dari praktisi berpengalaman.</p>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide"
                >
                    {/* Expert 1 */}
                    <div className="min-w-[280px] md:min-w-[320px] bg-transparent transform hover:-translate-y-2 transition-transform duration-300 snap-center">
                        <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/experts/expert-1.jpg"
                                alt="Expert 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Expert 2 */}
                    <div className="min-w-[280px] md:min-w-[320px] bg-transparent transform hover:-translate-y-2 transition-transform duration-300 snap-center">
                        <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/experts/expert-2.jpg"
                                alt="Expert 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Expert 3 */}
                    <div className="min-w-[280px] md:min-w-[320px] bg-transparent transform hover:-translate-y-2 transition-transform duration-300 snap-center">
                        <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/experts/expert-3.jpg"
                                alt="Expert 3"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Expert 4 */}
                    <div className="min-w-[280px] md:min-w-[320px] bg-transparent transform hover:-translate-y-2 transition-transform duration-300 snap-center">
                        <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/experts/expert-4.jpg"
                                alt="Expert 4"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Expert 5 */}
                    <div className="min-w-[280px] md:min-w-[320px] bg-transparent transform hover:-translate-y-2 transition-transform duration-300 snap-center">
                        <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/experts/expert-5.jpg"
                                alt="Expert 5"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Expert 6 */}
                    <div className="min-w-[280px] md:min-w-[320px] bg-transparent transform hover:-translate-y-2 transition-transform duration-300 snap-center">
                        <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/experts/expert-6.jpg"
                                alt="Expert 6"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Expert 7 */}
                    <div className="min-w-[280px] md:min-w-[320px] bg-transparent transform hover:-translate-y-2 transition-transform duration-300 snap-center">
                        <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/experts/expert-7.jpg"
                                alt="Expert 7"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Expert 8 */}
                    <div className="min-w-[280px] md:min-w-[320px] bg-transparent transform hover:-translate-y-2 transition-transform duration-300 snap-center">
                        <div className="w-full relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/images/experts/expert-8.jpg"
                                alt="Expert 8"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-md mx-auto h-2 bg-white/30 rounded-full mt-4 overflow-hidden">
                    <div
                        className="h-full bg-white rounded-full transition-all duration-150 ease-out"
                        style={{ width: `${Math.max(5, progress)}%` }}
                    />
                </div>
            </div>
        </section>
    );
}
