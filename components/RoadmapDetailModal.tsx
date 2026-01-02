"use client";

import { useEffect, useState } from "react";

interface RoadmapDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        id: string;
        date: string;
        type: string;
        title: string;
        syllabus?: string[];
        description?: string;
    } | null;
}

export default function RoadmapDetailModal({ isOpen, onClose, data }: RoadmapDetailModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    if (!data) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "bg-slate-900/60 backdrop-blur-sm" : "bg-transparent pointer-events-none"}`}
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative flex flex-col max-h-[90vh] transition-all duration-300 transform ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-sky-500 to-cyan-400 p-6 md:p-8 relative overflow-hidden shrink-0">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="text-9xl font-black text-white">{data.id}</span>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors z-10 backdrop-blur-md"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">
                                {data.type}
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                            {data.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sky-100 font-medium">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {data.date}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                    {data.description && (
                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Tentang Sesi Ini</h4>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {data.description}
                            </p>
                        </div>
                    )}

                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                            <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            Kisi-Kisi Materi
                        </h4>

                        {data.syllabus && data.syllabus.length > 0 ? (
                            <ul className="space-y-3">
                                {data.syllabus.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors border border-transparent hover:border-sky-100">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                                            <svg className="w-3.5 h-3.5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="text-center py-8 text-slate-400 italic bg-slate-50 rounded-xl border border-dashed border-slate-200">
                                Detail materi akan segera diperbarui.
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 md:p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Tutup Detail
                    </button>
                </div>
            </div>
        </div>
    );
}
