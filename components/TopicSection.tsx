import React from 'react';

export default function TopicSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Kenapa harus ikutan di <br />
                    <span className="text-[#06b6d4]">Mini Course Ini?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Item 1 */}
                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Paham Fondasi Sensori & Refleks</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Belajar bagaimana sistem sensori dan refleks bekerja dalam tumbuh kembang anak, serta kaitannya dengan perilaku, emosi, dan kemampuan fungsional anak di kehidupan sehari-hari.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6 text-cyan-600 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Tidak Bingung Deviasi Perkembangan</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Mengenali tanda awal gangguan perkembangan melalui pendekatan sensori, refleks, dan DDTK—sehingga tahu kapan perlu rujukan dan intervensi lanjutan.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Pola Kerja Psikolog Nyata</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Memahami alur kerja psikolog: mulai dari proses rujukan, penggunaan form pemeriksaan, peran PIC intervensi, hingga kolaborasi dengan terapis dan tenaga profesional lainnya.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Pendekatan Interdisiplin</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Cocok untuk mahasiswa, praktisi pemula, guru, dan tenaga pendamping anak yang ingin memahami cara bekerja lintas profesi tanpa tumpang tindih peran.
                        </p>
                    </div>

                    {/* Item 5 */}
                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Real Case Discussion</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Diskusi kasus nyata bersama tim interdisiplin dan member kelas untuk mendapatkan pemahaman penanganan praktis.
                        </p>
                    </div>

                    {/* Item 6 */}
                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-600 shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
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
