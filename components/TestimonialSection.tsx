export default function TestimonialSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Apa Kata <span className="text-[#0ea5e9]">Alumni Praktiqu?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-slate-50 p-8 rounded-2xl relative">
                        <div className="text-4xl text-[#06b6d4]/20 absolute top-4 left-6 font-serif">"</div>
                        <p className="text-slate-600 italic mb-6 relative z-10">
                            "Materinya daging banget! Saya jadi paham kalau tumbuh kembang itu sangat kompleks tapi bisa dipelajari polanya. Sangat membantu karir saya sebagai terapis pemula."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700">A</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Andi Pratama</h4>
                                <p className="text-xs text-slate-500">Terapis Okupasi</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-slate-50 p-8 rounded-2xl relative">
                        <div className="text-4xl text-[#06b6d4]/20 absolute top-4 left-6 font-serif">"</div>
                        <p className="text-slate-600 italic mb-6 relative z-10">
                            "Penjelasannya Bu Vonny sangat detail tapi mudah dimengerti. Sesi tanya jawabnya juga sangat memuaskan, semua pertanyaan dijawab tuntas."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-cyan-200 rounded-full flex items-center justify-center font-bold text-cyan-700">S</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Siti Nurhaliza</h4>
                                <p className="text-xs text-slate-500">Mahasiswa Psikologi</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-slate-50 p-8 rounded-2xl relative">
                        <div className="text-4xl text-[#06b6d4]/20 absolute top-4 left-6 font-serif">"</div>
                        <p className="text-slate-600 italic mb-6 relative z-10">
                            "Join yang paket group bareng teman-teman kantor, worth it banget! Insight-nya bisa langsung kami diskusikan dan terapkan di tempat kerja."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center font-bold text-rose-700">R</div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Rina Wulandari</h4>
                                <p className="text-xs text-slate-500">Guru PAUD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
