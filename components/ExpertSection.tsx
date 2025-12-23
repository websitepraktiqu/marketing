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
                        <div className="w-full h-64 bg-slate-200 rounded-lg mb-4 overflow-hidden relative group">
                            <Image
                                src="/images/vonny.jpg"
                                alt="Vonny Susanty"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Vonny Susanty, AMd.OT., M.Psi.</h3>
                        <p className="text-[#0ea5e9] text-xs font-semibold">Psikolog & Terapis Okupasional</p>
                    </div>

                    {/* Expert 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-full h-64 bg-slate-200 rounded-lg mb-4 overflow-hidden relative group">
                            <Image
                                src="/images/hilda.jpg"
                                alt="Hilda Cokrojoyo"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Hilda Cokrojoyo, S.Psi., M.S.Ed</h3>
                        <p className="text-[#0ea5e9] text-xs font-semibold">Special Education Consultant</p>
                    </div>

                    {/* Expert 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-full h-64 bg-slate-200 rounded-lg mb-4 overflow-hidden relative group">
                            <Image
                                src="/images/rina.jpg"
                                alt="Rina Saputri"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Rina Saputri, S.Tr. Kes</h3>
                        <p className="text-[#0ea5e9] text-xs font-semibold">Terapis Okupasional</p>
                    </div>

                    {/* Expert 4 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-full h-64 bg-slate-200 rounded-lg mb-4 overflow-hidden relative group">
                            <Image
                                src="/images/indah.jpg"
                                alt="Indah Setiowati"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Indah Setiowati, S.FT</h3>
                        <p className="text-[#0ea5e9] text-xs font-semibold">Fisioterapis</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
