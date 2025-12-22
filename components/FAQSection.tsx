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
                            <span>Apakah webinar ini cocok untuk orang tua awam?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 animate-fadeIn">
                            Ya, materi disusun secara sistematis mulai dari dasar sehingga mudah dipahami oleh orang tua maupun praktisi pemula yang ingin memahami tumbuh kembang anak.
                        </div>
                    </details>

                    <details className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                            <span>Bagaimana jika saya berhalangan hadir saat live zoom?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 rounded-b-xl">
                            Jangan khawatir! Peserta akan mendapatkan akses rekaman (recording) webinar yang bisa diakses kembali kapan saja.
                        </div>
                    </details>

                    <details className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 list-none">
                            <span>Apakah sertifikatnya ada jam pelajarannya?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="bg-slate-50 p-6 text-slate-600 text-sm border-t border-slate-100 rounded-b-xl">
                            Ya, sertifikat yang diberikan akan mencantumkan detail materi dan total durasi jam pembelajaran sebagai bukti partisipasi Anda.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
