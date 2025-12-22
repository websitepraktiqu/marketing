export default function TopicSection() {
    return (
        <section className="bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Kenapa harus ikutan di <br />
                    <span className="text-[#06b6d4]">Mini Course Ini?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 font-bold text-xl">
                            1
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Materi Komprehensif</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Mempelajari tahapan tumbuh kembang dari fase prenatal, awal refleks/sensori, hingga postnatal dan DDTK secara mendalam.
                        </p>
                    </div>

                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6 text-cyan-600 font-bold text-xl">
                            2
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Pahami Deviasi</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Mampu mengidentifikasi dan memahami deviasi (penyimpangan) perkembangan anak sejak dini untuk intervensi yang tepat.
                        </p>
                    </div>

                    <div className="border border-slate-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">
                            3
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">Sertifikat Resmi</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Dapatkan e-sertifikat yang kredibel untuk menunjang portofolio karir Anda di bidang psikologi dan tumbuh kembang anak.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
