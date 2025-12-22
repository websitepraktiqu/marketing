import Image from 'next/image';

export default function ExpertSection() {
    return (
        <section id="expert" className="bg-[#06b6d4] py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Belajar Langsung dari Expert:</h2>
                <p className="text-white/90 mb-12">Dapatkan insight mendalam dari praktisi berpengalaman.</p>

                <div className="flex justify-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-full h-64 bg-slate-200 rounded-lg mb-6 overflow-hidden relative group">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <svg className="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900">Vonny Susanty, Amd.OT., M.Psi.</h3>
                        <p className="text-[#0ea5e9] font-semibold mb-4">Psikolog</p>

                        <ul className="text-left text-sm text-slate-600 space-y-2 border-t pt-4">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 font-bold">✓</span>
                                Expert di bidang Tumbuh Kembang Anak
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 font-bold">✓</span>
                                Praktisi Psikologi Klinis
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
