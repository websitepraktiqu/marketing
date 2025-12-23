export default function TestimonialSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Apa Kata <span className="text-[#0ea5e9]">Alumni Praktiqu?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-slate-50 p-8 rounded-2xl relative">
                        <div className="text-4xl text-[#06b6d4]/20 absolute top-4 left-6 font-serif">"</div>
                        <p className="text-slate-600 italic mb-6 relative z-10 leading-relaxed">
                            "Sesi ini bikin saya lebih paham cara melihat tumbuh kembang anak secara utuh, bukan sepotong-sepotong. Penjelasan tentang tahapan prenatal sampai DDTK sangat membantu saya saat membaca hasil asesmen dan menentukan rujukan."
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-slate-50 p-8 rounded-2xl relative">
                        <div className="text-4xl text-[#06b6d4]/20 absolute top-4 left-6 font-serif">"</div>
                        <p className="text-slate-600 italic mb-6 relative z-10 leading-relaxed">
                            "Pembahasan deviasi perkembangan dan contoh kasusnya sangat aplikatif. Saya jadi lebih percaya diri membedakan keterlambatan perkembangan, speech delay, dan indikasi GDD saat diskusi tim interdisiplin."
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-slate-50 p-8 rounded-2xl relative">
                        <div className="text-4xl text-[#06b6d4]/20 absolute top-4 left-6 font-serif">"</div>
                        <p className="text-slate-600 italic mb-6 relative z-10 leading-relaxed">
                            "Yang paling saya rasakan, sudut pandang saya jadi lebih sistematis. Tidak hanya fokus ke perilaku anak, tapi juga memahami dasar sensori, refleks awal, dan kaitannya dengan perkembangan selanjutnya."
                        </p>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="bg-slate-50 p-8 rounded-2xl relative">
                        <div className="text-4xl text-[#06b6d4]/20 absolute top-4 left-6 font-serif">"</div>
                        <p className="text-slate-600 italic mb-6 relative z-10 leading-relaxed">
                            "Materinya padat tapi terstruktur. Cocok untuk praktisi yang butuh penguatan konsep dasar tumbuh kembang sekaligus gambaran nyata di lapangan."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
