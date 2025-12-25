export default function TopicSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Kenapa harus ikutan di <br />
                    <span className="text-[#06b6d4]">Mini Course Ini?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 font-bold text-xl">1</div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Paham Fondasi Sensori & Refleks</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Belajar bagaimana sistem sensori dan refleks bekerja dalam tumbuh kembang anak, serta kaitannya dengan perilaku, emosi, dan kemampuan fungsional anak di kehidupan sehari-hari.
                        </p>
                    </div>

                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6 text-cyan-600 font-bold text-xl">2</div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Tidak Bingung Deviasi Perkembangan</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Mengenali tanda awal gangguan perkembangan melalui pendekatan sensori, refleks, dan DDTK—sehingga tahu kapan perlu rujukan dan intervensi lanjutan.
                        </p>
                    </div>

                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">3</div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Pola Kerja Psikolog Nyata</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Memahami alur kerja psikolog: mulai dari proses rujukan, penggunaan form pemeriksaan, peran PIC intervensi, hingga kolaborasi dengan terapis dan tenaga profesional lainnya.
                        </p>
                    </div>

                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600 font-bold text-xl">4</div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Pendekatan Interdisiplin</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Cocok untuk mahasiswa, praktisi pemula, guru, dan tenaga pendamping anak yang ingin memahami cara bekerja lintas profesi tanpa tumpang tindih peran.
                        </p>
                    </div>

                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600 font-bold text-xl">5</div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Real Case Discussion</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Diskusi kasus nyata bersama tim interdisiplin dan member kelas untuk mendapatkan pemahaman penanganan praktis.
                        </p>
                    </div>

                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-600 font-bold text-xl">6</div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Sharing Kasus Berkelanjutan</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Ikuti seluruh sesinya untuk bisa mengikuti sharing kasus bersama tim pemateri, secara berkala. <br /><span className="font-bold text-rose-600">KHUSUS ALUMNI PAKET ALL SESSION</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
