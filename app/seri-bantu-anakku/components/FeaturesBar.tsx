import React from 'react';

const features = [
    "AKSES SELAMANYA",
    "STUDI KASUS NYATA",
    "7 WORKSHEET",
    "7 TOOLS REFLEKSI",
    "5 TOOLS SKRINING",
    "E-CERTIFICATE"
];

const FeaturesBar = () => {
    return (
        <div className="w-full bg-white/50 backdrop-blur-sm border-y border-slate-200 py-6 mb-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#435b9b]/10 flex items-center justify-center shrink-0">
                                <svg
                                    className="w-3.5 h-3.5 text-[#435b9b]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <span className="text-slate-700 font-bold text-sm tracking-wide">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesBar;
