import Image from 'next/image';

export default function ExpertSection() {
    return (
        <section id="expert" className="bg-[#06b6d4] py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Belajar Langsung dari Expert:</h2>
                <p className="text-white/90 mb-12">Dapatkan insight mendalam dari praktisi berpengalaman.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Expert 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-full h-48 bg-slate-200 rounded-lg mb-4 overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <svg className="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Vonny Susanty, AMd.OT., M.Psi.</h3>
                        <p className="text-[#0ea5e9] text-xs font-semibold">Psikolog & Terapis Okupasional</p>
                    </div>

                    {/* Expert 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-full h-48 bg-slate-200 rounded-lg mb-4 overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <svg className="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Astrini, M.Psi.</h3>
                        <p className="text-[#0ea5e9] text-xs font-semibold">Psikolog</p>
                    </div>

                    {/* Expert 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-full h-48 bg-slate-200 rounded-lg mb-4 overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <svg className="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Rina Saputri, S.Tr. Kes</h3>
                        <p className="text-[#0ea5e9] text-xs font-semibold">Terapis Okupasional</p>
                    </div>

                    {/* Expert 4 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-full h-48 bg-slate-200 rounded-lg mb-4 overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                <svg className="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Indah Setiowati, S.FT</h3>
                        <p className="text-[#0ea5e9] text-xs font-semibold">Fisioterapis</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
