export default function AgendaSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    TOPIK
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0">1</div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Perkenalan Sistem Sensori</h3>
                            <p className="text-slate-600 text-sm">Dasar-dasar sistem sensorik dalam konteks tumbuh kembang.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0">2</div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Sistem Sensori dalam Tumbuh Kembang</h3>
                            <p className="text-slate-600 text-sm">Pembahasan spesifik peran sensori dalam tiap tahapan perkembangan.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0">3</div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Perkenalan Sistem Refleks</h3>
                            <p className="text-slate-600 text-sm">Memahami refleks primitif dan integrasinya.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold shrink-0">4</div>
                        <div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Pola Kerja Psikolog</h3>
                            <p className="text-slate-600 text-sm">Rujukan, form pemeriksaan, peran PIC Intervensi dan pola kerjasama antar profesional.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
