export default function FAQSection() {
    return (
        <section className="bg-slate-50 py-20 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Frequently Asked <span className="text-[#06b6d4]">Questions</span>
                </h2>

                <div className="space-y-4">
                    <details className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                            <span>1. Apakah e-course ini hanya untuk Psikolog dan Profesional Kesehatan Mental (PKM)?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 animate-fadeIn">
                            Ya. Mini course ini dirancang khusus untuk Psikolog dan Profesional Kesehatan Mental (PKM) yang ingin memperdalam pemahaman tumbuh kembang anak dari sudut pandang klinis dan interdisiplin. Materi tidak ditujukan untuk orang tua awam atau peserta tanpa latar belakang kesehatan mental.
                        </div>
                    </details>

                    <details className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                            <span>2. Apakah materi yang dibahas bersifat teoritis atau aplikatif?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 animate-fadeIn">
                            Materi bersifat aplikatif dan berbasis praktik lapangan. Peserta akan mempelajari: Sistem sensori dan refleks dalam konteks tumbuh kembang, Identifikasi deviasi perkembangan, Pola kerja psikolog, alur rujukan, form pemeriksaan, serta kolaborasi antar profesional. Sehingga dapat langsung diterapkan dalam praktik profesional.
                        </div>
                    </details>

                    <details className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                            <span>3. Apakah e-course ini cocok untuk psikolog pemula atau fresh graduate?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 animate-fadeIn">
                            Ya. E-course ini sangat cocok untuk psikolog pemula, fresh graduate, maupun PKM yang ingin: Memperkuat fondasi asesmen tumbuh kembang, Memahami peran psikolog dalam tim intervensi, dan Meningkatkan kepercayaan diri saat menangani kasus anak.
                        </div>
                    </details>

                    <details className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                            <span>4. Bagaimana jika saya berhalangan hadir saat sesi live?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 animate-fadeIn">
                            Peserta akan mendapatkan akses materi pendukung (PDF). Untuk kebijakan rekaman (jika tersedia), informasi detail akan disampaikan oleh tim admin setelah pendaftaran.
                        </div>
                    </details>

                    <details className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                            <span>5. Apakah peserta mendapatkan sertifikat?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 animate-fadeIn">
                            Ya. Peserta akan mendapatkan e-Certificate of Completion dari Praktiqu yang: Terverifikasi oleh Psikolog Profesional, Mencantumkan total jam pembelajaran, dan Dapat digunakan untuk portofolio profesional dan LinkedIn.
                        </div>
                    </details>

                    <details className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                            <span>6. Platform apa yang digunakan untuk e-course ini?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 animate-fadeIn">
                            E-course akan dilaksanakan secara online melalui platform meeting (Zoom). Link dan informasi teknis akan dikirimkan setelah pendaftaran berhasil.
                        </div>
                    </details>

                    <details className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                            <span>7. Apakah sesi ini bersifat interaktif?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 animate-fadeIn">
                            Ya. Terdapat sesi Q&A interaktif langsung dengan narasumber, sehingga peserta dapat mendiskusikan kasus, kendala praktik, dan insight lapangan.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
