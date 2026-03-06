"use client";

import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
    className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 ${className}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-[#435b9b] flex items-center justify-center">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <span className="font-bold text-xl text-slate-900">PraktiQu</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#materi" className="text-slate-600 hover:text-[#435b9b] font-medium transition-colors">
                            Materi
                        </Link>
                        <Link href="#expert" className="text-slate-600 hover:text-[#435b9b] font-medium transition-colors">
                            Expert
                        </Link>
                        <Link href="#investasi" className="text-slate-600 hover:text-[#435b9b] font-medium transition-colors">
                            Investasi
                        </Link>
                        <Link href="#faq" className="text-slate-600 hover:text-[#435b9b] font-medium transition-colors">
                            FAQ
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#investasi"
                            className="bg-[#fe6007] text-white font-bold py-2.5 px-6 rounded-full hover:bg-[#e55606] transition-all hover:scale-105 shadow-lg shadow-[#fe6007]/20"
                        >
                            Gabung Ecourse
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-slate-600"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-100">
                        <div className="flex flex-col gap-4">
                            <Link href="#materi" className="text-slate-600 hover:text-[#435b9b] font-medium" onClick={() => setIsMenuOpen(false)}>Materi</Link>
                            <Link href="#expert" className="text-slate-600 hover:text-[#435b9b] font-medium" onClick={() => setIsMenuOpen(false)}>Expert</Link>
                            <Link href="#investasi" className="text-slate-600 hover:text-[#435b9b] font-medium" onClick={() => setIsMenuOpen(false)}>Investasi</Link>
                            <Link href="#faq" className="text-slate-600 hover:text-[#435b9b] font-medium" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                            <Link
                                href="#investasi"
                                className="bg-[#fe6007] text-white font-bold py-3 px-6 rounded-full text-center hover:bg-[#e55606] transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Gabung Ecourse
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
