"use client";

import Image from 'next/image';
import Link from 'next/link';
// Navbar and Footer removed
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function MentoringUltimateMastery() {
    return (
        <div className="min-h-screen font-sans bg-[#0F0F0F] text-white overflow-x-hidden">
            {/* Navbar removed */}

            <main>
                {/* HERO SECTION */}
                <section className="relative pt-20 pb-32 px-6 md:px-12 overflow-hidden bg-[url('/images/mentoring/bg-main.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/80"></div>

                    <div className="max-w-6xl mx-auto relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Bangun Praktek Mandiri Psikolog yang <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CDA434] to-[#F3D578]">Stabil & Menguntungkan</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Kami akan membantu Anda membangun fundamental bisnis yang kokoh, mendapatkan klien yang tepat, dan menciptakan sistem yang berkelanjutan tanpa harus mengorbankan waktu bersama keluarga.
                        </p>

                        <Link
                            href="#daftar"
                            className="inline-block bg-gradient-to-r from-[#CDA434] to-[#B88A20] text-black font-bold text-lg py-4 px-10 rounded-full shadow-[0_0_20px_rgba(205,164,52,0.4)] hover:shadow-[0_0_30px_rgba(205,164,52,0.6)] hover:scale-105 transition-all duration-300 transform"
                        >
                            Daftar Sekarang
                        </Link>

                        <div className="mt-16 relative animate-fade-in-up [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#CDA434]/20 blur-[100px] rounded-full -z-10"></div>
                            <Image
                                src="/images/mentoring/hero-team.png"
                                alt="Praktiqu Mentorship Team"
                                width={1024}
                                height={576}
                                className="mx-auto drop-shadow-2xl rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* PROMISE SECTION */}
                <section className="py-20 px-6 md:px-12 bg-[#1a1a1a]">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-2xl md:text-4xl font-bold mb-16">
                            PraktiQu Mastery Mentoring Program yang <br />
                            <span className="text-[#CDA434]">Menghasilkan Action Plan Nyata.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {[
                                { icon: "🚀", title: "Pendampingan 1 Tahun Penuh", desc: "Jadilah psikolog yang memiliki bisnis kokoh dan dampaknya luas untuk klien Anda." },
                                { icon: "💡", title: "Strategi Bisnis Teruji", desc: "Belajar langsung kurikulum yang sudah terbukti menghasilkan ratusan juta." },
                                { icon: "🎯", title: "Fokus pada Hasil", desc: "Bukan sekadar teori, tapi panduan langkah demi langkah yang bisa langsung dieksekusi." },
                                { icon: "🤝", title: "Komunitas Eksklusif", desc: "Networking dengan sesama psikolog yang memiliki visi bertumbuh yang sama." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-6 bg-[#0F0F0F] rounded-xl border border-gray-800 hover:border-[#CDA434] transition-colors group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#CDA434]/10 rounded-full flex items-center justify-center text-2xl group-hover:bg-[#CDA434] transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROBLEM SECTION */}
                <section className="py-24 px-6 md:px-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#CDA434]/5 to-transparent"></div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                Apakah Kamu Juga <br />
                                <span className="text-[#CDA434]">Mengalami Ini?</span>
                            </h2>

                            <ul className="space-y-4">
                                {[
                                    "Bingung cara mulai buka praktek mandiri?",
                                    "Takut sepi klien & tidak tahu cara promosi?",
                                    "Merasa stuck & income tidak stabil?",
                                    "Kewalahan mengurus administrasi sendirian?",
                                    "Ingin punya waktu lebih banyak untuk keluarga?"
                                ].map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                        <span className="text-[#CDA434]">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        </span>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10">
                                <Link
                                    href="#daftar"
                                    className="inline-block bg-[#CDA434] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#B88A20] transition-colors"
                                >
                                    Daftar Sekarang
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-[#CDA434] blur-[80px] opacity-20 rounded-full"></div>
                            <Image
                                src="/images/mentoring/problem-woman.png"
                                alt="Confused Psychologist"
                                width={500}
                                height={600}
                                className="relative z-10 w-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </section>

                {/* ROADMAP SECTION */}
                <section className="py-24 px-6 md:px-12 bg-[#111] relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#CDA434]/20 to-transparent"></div>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Roadmap Program <span className="text-[#CDA434]">Mentoring</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Kurikulum yang disusun secara sistematis untuk memastikan transformasi Anda berjalan terukur.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[2px] bg-[#222]"></div>
                            <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[2px] bg-[#CDA434] origin-left scale-x-75 opacity-50"></div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {[
                                    {
                                        phase: "Fase 1",
                                        title: "Get Ready",
                                        desc: "Mengkondisikan mental yang siap untuk belajar dan berubah."
                                    },
                                    {
                                        phase: "Fase 2",
                                        title: "Self Development",
                                        desc: "Membangun fondasi psikologis dan profesional yang kokoh untuk pertumbuhan jangka panjang melalui diri yang pulih dan identitas yang kuat."
                                    },
                                    {
                                        phase: "Fase 3",
                                        title: "Business & Practice Growth",
                                        desc: "Membangun bisnis praktik yang berkelanjutan melalui perencanaan finansial yang matang, pemahaman proses bisnis, serta branding yang efektif."
                                    },
                                    {
                                        phase: "Fase 4",
                                        title: "Creating Sustainability",
                                        desc: "Evaluasi secara berkala untuk pengembangan diri dan bisnis praktik agar terus bertumbuh tanpa batas."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative group">
                                        {/* Dot Indicator */}
                                        <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 items-center justify-center -mt-10 z-10">
                                            <div className="w-6 h-6 rounded-full bg-[#111] border-4 border-[#CDA434] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_20px_rgba(205,164,52,0.5)]"></div>
                                        </div>

                                        {/* Mobile Line */}
                                        <div className="md:hidden absolute left-[1.3rem] top-0 w-[2px] h-full bg-[#222]"></div>

                                        <div className="pt-2 md:pt-16 pl-12 md:pl-0 text-left md:text-center relative">
                                            {/* Mobile Dot */}
                                            <div className="md:hidden absolute left-3 top-3 w-5 h-5 rounded-full bg-[#111] border-2 border-[#CDA434] z-10"></div>

                                            <div className="inline-block px-3 py-1 rounded-full bg-[#CDA434]/10 text-[#CDA434] text-xs font-bold uppercase tracking-wider mb-3">
                                                {item.phase}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#CDA434] transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-[#CDA434]/20 pl-4 md:border-0 md:pl-0">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* BENEFITS GRID */}
                {/* BENEFITS GRID - Calibrated to Elevated Dark Gray */}
                <section className="py-24 px-6 md:px-12 bg-[#161616] relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            Fasilitas Eksklusif yang Anda Dapatkan
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Program Mentoring 6 Bulan", desc: "Pendampingan intensif untuk memastikan Anda mencapai target bisnis psikologi Anda." },
                                { title: "Landing Page Profesional", desc: "Website profesional yang siap pakai untuk membangun kredibilitas Anda di mata klien." },
                                { title: "Toolkit Psikolog Siap Pakai", desc: "Template SOP, administrasi, dan tools praktis yang siap langsung digunakan." },
                                { title: "Ebook & Worksheet", desc: "Modul pembelajaran praktis yang bisa diakses kapan saja untuk panduan harian." },
                                { title: "Zoom Recording", desc: "Rekaman sesi mentoring yang bisa dionton ulang kapanpun Anda butuh refresh materi." },
                                { title: "Hasil Talents Mapping Assessment", desc: "Laporan lengkap potensi diri untuk strategi karir yang akurat." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-[#1F1F1F] p-8 rounded-2xl border border-white/5 hover:border-[#CDA434]/50 transition-all hover:-translate-y-2 group shadow-lg">
                                    <div className="w-10 h-10 rounded-full bg-[#CDA434]/20 text-[#CDA434] flex items-center justify-center mb-6 group-hover:bg-[#CDA434] group-hover:text-black transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#CDA434] transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUTCOMES SECTION */}
                {/* OUTCOMES SECTION - Calibrated to Deep Black with Gold Border */}
                <section className="py-32 px-6 md:px-12 bg-black border-t border-[#CDA434]/20 relative overflow-hidden">
                    {/* Subtle gold glow from top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#CDA434] to-transparent opacity-50"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-[#CDA434]/5 blur-[80px] rounded-[100%] pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Setelah Mengikuti Program Ini, <br />
                                <span className="text-[#CDA434]">Anda Akan:</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                "Punya kejelasan arah karier & layanan praktik.",
                                "Lebih percaya diri menetapkan harga layanan.",
                                "Memiliki branding profesional di media sosial.",
                                "Praktik yang stabil dengan pemasukan berkelanjutan.",
                                "Didampingi mentor & komunitas sepanjang 1 tahun penuh.",
                                "Memiliki sistem praktik lengkap dari awal hingga akhir."
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-[#CDA434] flex items-center justify-center text-black font-bold flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <p className="text-lg text-gray-200 font-medium leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MENTORS SECTION */}
                {/* MENTORS SECTION - Calibrated with Gradient Depth */}
                <section className="py-32 px-6 md:px-12 relative bg-gradient-to-b from-[#0F0F0F] via-[#1C1C1C] to-[#0F0F0F]">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Kenalan dengan Tim Pendampingmu
                        </h2>
                        <p className="text-gray-400">
                            Tim terbaik dari PraktiQr yang siap membantu Anda bertumbuh
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Hira Yuki Molira", role: "Principal Psychologist", image: "/images/mentoring/mentor-hira.png" },
                            { name: "Azani Dianda", role: "Brand Strategist", image: "/images/mentoring/mentor-azani.png" },
                            { name: "IIP Fariha", role: "Digital Marketing Expert", image: "/images/mentoring/mentor-iip.png" }
                        ].map((mentor, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-3xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80"></div>
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-center">
                                    {/* Name removed */}
                                    {/* Role removed */}
                                </div>
                            </div>
                        ))}
                    </div>


                </section>

                {/* VALUE STACK SECTION */}
                <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#CDA434]/5 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="bg-[#111] rounded-3xl border border-[#CDA434]/20 p-8 md:p-12 shadow-[0_0_50px_-20px_rgba(205,164,52,0.15)] relative overflow-hidden">
                            {/* Decorative top header */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CDA434] to-transparent opacity-50"></div>

                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Total Value PraktiQu Mastery Program
                                </h2>
                                <p className="text-[#CDA434] font-medium tracking-wide uppercase text-sm">
                                    Investasi Terbaik untuk Karir Profesional Anda
                                </p>
                            </div>

                            <div className="space-y-4 mb-12">
                                {/* List Items */}
                                {[
                                    { name: "Self Development Mentoring", value: "Rp5.000.000" },
                                    { name: "Pendampingan Bisnis Psikolog", value: "Rp10.000.000" },
                                    { name: "Sistem Praktik Menyeluruh", value: "Rp5.000.000" },
                                    { name: "Sistem Automasi Praktik", value: "Rp3.000.000" },
                                    { name: "Mentoring & Pendampingan Personal", value: "Rp5.000.000" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row justify-between md:items-center border-b border-gray-800 pb-4 last:border-0 gap-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#CDA434]/10 flex items-center justify-center text-[#CDA434] mt-0.5 md:mt-0 flex-shrink-0">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-gray-200 font-medium">{item.name}</span>
                                        </div>
                                        <span className="font-bold text-white pl-8 md:pl-0">{item.value}</span>
                                    </div>
                                ))}

                                {/* Bonus Item */}
                                <div className="bg-gradient-to-br from-[#CDA434]/10 to-transparent rounded-xl p-6 mt-6 border border-[#CDA434]/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#CDA434]/10 blur-xl rounded-full"></div>
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#CDA434] flex items-center justify-center text-black mt-1 flex-shrink-0 shadow-lg">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                                            </div>
                                            <div>
                                                <span className="font-bold text-[#CDA434] block mb-1 tracking-wide text-sm">BONUS SPESIAL</span>
                                                <span className="text-gray-300 text-sm block leading-relaxed max-w-md">Ebook, worksheet, form automasi, rekaman e-course, sesi materi, diskusi & mentoring</span>
                                            </div>
                                        </div>
                                        <div className="text-right w-full md:w-auto pl-9 md:pl-0">
                                            <span className="font-bold text-[#CDA434] text-xl">Rp5.000.000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Total Value */}
                            <div className="flex flex-col items-center justify-center pt-8 border-t border-gray-800">
                                <p className="text-gray-400 mb-3 text-sm uppercase tracking-widest">Total Value yang Anda Dapatkan</p>
                                <div className="text-4xl md:text-6xl font-extrabold text-white mb-10 tracking-tight">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#CDA434] via-[#F3D578] to-[#CDA434] drop-shadow-sm">Rp33.000.000+</span>
                                </div>

                                <Link
                                    href="#daftar"
                                    className="w-full md:w-auto text-center inline-block bg-[#CDA434] text-black font-bold text-lg py-4 px-12 rounded-lg hover:bg-[#B88A20] hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(205,164,52,0.4)]"
                                >
                                    Ambil Kesempatan Ini
                                </Link>
                                <p className="text-xs text-gray-500 mt-4 font-mono">Penawaran terbatas untuk batch ini</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER BRANDING SECTION */}
                <section className="py-20 px-6 bg-black text-center relative z-20">
                    <div className="max-w-4xl mx-auto">
                        <Image
                            src="/logo.png"
                            alt="PraktiQu Logo"
                            width={180}
                            height={60}
                            className="mx-auto mb-6 brightness-0 invert opacity-90"
                        />
                        <p className="text-2xl md:text-3xl font-bold tracking-widest text-white mb-8">PRAKTIQU MASTERY PROGRAM</p>

                        <div className="flex justify-center gap-6">
                            {/* Facebook */}
                            <a href="#" className="w-12 h-12 bg-[#CDA434] rounded-lg flex items-center justify-center text-black hover:bg-white transition-all transform hover:scale-110 cursor-pointer shadow-lg hover:shadow-[#CDA434]/50">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>

                            {/* Instagram */}
                            <a href="#" className="w-12 h-12 bg-[#CDA434] rounded-lg flex items-center justify-center text-black hover:bg-white transition-all transform hover:scale-110 cursor-pointer shadow-lg hover:shadow-[#CDA434]/50">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="#" className="w-12 h-12 bg-[#CDA434] rounded-lg flex items-center justify-center text-black hover:bg-white transition-all transform hover:scale-110 cursor-pointer shadow-lg hover:shadow-[#CDA434]/50">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer removed */}
            <FloatingWhatsApp />
        </div >
    );
}
