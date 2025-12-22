export default function AgendaSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Agenda & <span className="text-[#0ea5e9]">Materi</span>
                </h2>

                <div className="space-y-6">
                    {/* Day 1 */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                            <h3 className="font-bold text-slate-900">Hari Pertama</h3>
                            <span className="text-xs font-bold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">17 Des 2025</span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-4">
                                <span className="text-[#06b6d4] font-bold w-16 text-sm">16.00</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Pembukaan & Pengantar</h4>
                                    <p className="text-slate-600 text-sm">Pengenalan ruang lingkup tumbuh kembang anak.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#06b6d4] font-bold w-16 text-sm">16.30</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Fase Prenatal & Refleks Awal</h4>
                                    <p className="text-slate-600 text-sm">Memahami perkembangan janin dan refleks primitif bayi baru lahir.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#06b6d4] font-bold w-16 text-sm">18.00</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Sensori & Motorik Dasar</h4>
                                    <p className="text-slate-600 text-sm">Dasar-dasar sistem sensorik dan milestone motorik.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                            <h3 className="font-bold text-slate-900">Hari Kedua</h3>
                            <span className="text-xs font-bold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">18 Des 2025</span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex gap-4">
                                <span className="text-[#06b6d4] font-bold w-16 text-sm">16.00</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Postnatal & DDTK</h4>
                                    <p className="text-slate-600 text-sm">Deteksi Dini Tumbuh Kembang (DDTK) dan instrumennya.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#06b6d4] font-bold w-16 text-sm">17.30</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Deviasi Perkembangan</h4>
                                    <p className="text-slate-600 text-sm">Studi kasus: Global Developmental Delay, Autism Speech Delay, dll.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#06b6d4] font-bold w-16 text-sm">19.00</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Q&A & Penutup</h4>
                                    <p className="text-slate-600 text-sm">Sesi tanya jawab interaktif dengan narasumber.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
