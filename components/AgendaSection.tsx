const sessions = [
    {
        id: 1,
        title: "Session 1: Building The Foundation",
        topics: [
            "Perkenalan Sistem Sensori",
            "Anatomi & Fisiologi Dasar",
            "Hubungan Sensori & Perilaku",
            "Studi Kasus Sederhana"
        ]
    },
    {
        id: 2,
        title: "Session 2: Sensory & Development",
        topics: [
            "Sistem Sensori dalam Tumbuh Kembang",
            "Milestone Perkembangan Sensori",
            "Red Flag Gangguan Sensori",
            "Observasi & Checklist"
        ]
    },
    {
        id: 3,
        title: "Session 3: Reflexes & Integration",
        topics: [
            "Perkenalan Sistem Refleks",
            "Refleks Primitif & Postural",
            "Integrasi Refleks",
            "Dampak Refleks yang Tidak Terintegrasi"
        ]
    },
    {
        id: 4,
        title: "Session 4: Professional Workflow",
        topics: [
            "Pola Kerja Psikolog",
            "Alur Rujukan & Kolaborasi",
            "Penyusunan Laporan",
            "Etika & Batasan Kompetensi"
        ]
    }
];

export default function AgendaSection() {
    return (
        <section className="bg-slate-900 py-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Kisi Materi Per Sesi
                    </h2>
                    <p className="text-slate-400">Pembahasan komprehensif dari teori hingga praktik</p>
                </div>

                {/* Carousel Container */}
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
                    {sessions.map((session) => (
                        <div
                            key={session.id}
                            className="min-w-[300px] md:min-w-[350px] bg-slate-800 rounded-2xl p-6 border border-slate-700 snap-center hover:border-cyan-500/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                                    {session.id}
                                </div>
                                <h3 className="text-lg font-bold text-white leading-tight">{session.title}</h3>
                            </div>

                            <ul className="space-y-3">
                                {session.topics.map((topic, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                        <svg className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
