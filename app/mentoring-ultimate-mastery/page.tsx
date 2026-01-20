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

                        <div className="mt-16 relative animate-fade-in-up">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#CDA434]/20 blur-[100px] rounded-full -z-10"></div>
                            <Image
                                src="/images/mentoring/hero.png"
                                alt="Praktiqu Mentorship Team"
                                width={1024}
                                height={576}
                                className="mx-auto drop-shadow-2xl rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F] to-transparent"></div>
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

                {/* BENEFITS GRID */}
                <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            Yang didapat dengan bergabung ke ultimate mentoring
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Program Mentoring 6 Bulan", desc: "Pendampingan intensif untuk memastikan Anda mencapai target bisnis psikologi Anda." },
                                { title: "Landing Page", desc: "Website profesional yang siap pakai untuk membangun kredibilitas Anda di mata klien." },
                                { title: "Sistem Management", desc: "Template SOP & administrasi yang rapi agar praktek berjalan autopilot." },
                                { title: "Ebook & Worksheet", desc: "Modul pembelajaran praktis yang bisa diakses kapan saja untuk panduan harian." },
                                { title: "Zoom Recording", desc: "Rekaman sesi mentoring yang bisa dionton ulang kapanpun Anda butuh refresh materi." },
                                { title: "Talent Maping Konsultasi", desc: "Pahami kekuatan diri Anda untuk membangun personal branding yang autentik." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-[#141414] p-8 rounded-2xl border border-gray-800 hover:border-[#CDA434]/50 transition-all hover:-translate-y-2 group">
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

                {/* MENTORS SECTION */}
                <section className="py-24 px-6 md:px-12 relative">
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

                    <div className="text-center mt-20">
                        <Image
                            src="/logo.png"
                            alt="PraktiQu Logo"
                            width={150}
                            height={50}
                            className="mx-auto mb-4 brightness-0 invert opacity-70"
                        />
                        <p className="text-2xl font-bold tracking-widest text-white">PRAKTIQU MASTERY PROGRAM</p>

                        <div className="flex justify-center gap-4 mt-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 bg-[#CDA434] rounded-sm flex items-center justify-center text-black hover:bg-white transition-colors cursor-pointer">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer removed */}
            <FloatingWhatsApp />
        </div>
    );
}
