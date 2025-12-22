import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#0ea5e9]"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

            <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                    Siap Memahami Tumbuh Kembang Anak Lebih Dalam?
                </h2>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                    Jangan lewatkan kesempatan belajar langsung dari ahlinya. Kuota terbatas untuk menjaga kualitas interaksi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="https://bit.ly/InterdisiplinPraktiqu"
                        target="_blank"
                        className="bg-white text-[#0ea5e9] font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-1 text-lg"
                    >
                        Daftar Sekarang
                    </Link>
                    <Link
                        href="https://wa.me/6287870519230"
                        target="_blank"
                        className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all"
                    >
                        Hubungi Admin
                    </Link>
                </div>

                <p className="mt-8 text-sm text-blue-100 opacity-80">
                    Diskon khusus 10% untuk pendaftaran sebelum 10 Desember!
                </p>
            </div>
        </section>
    );
}
