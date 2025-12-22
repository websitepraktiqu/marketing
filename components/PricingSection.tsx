import Link from "next/link";

export default function PricingSection() {
    return (
        <section className="bg-slate-50 py-20 px-6 md:px-12 border-t border-slate-200">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Investasi Ilmu</h2>
                <p className="text-slate-600 mb-12">Pilih paket yang sesuai dengan kebutuhan Anda</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Personal Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">PERSONAL</h3>
                        <div className="text-3xl font-bold text-slate-900 mb-6">Rp450.000<span className="text-sm font-normal text-slate-500">,-</span></div>
                        <ul className="text-left w-full space-y-3 mb-8 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Akses Webinar 2 Hari
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                E-Certificate
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Materi PDF
                            </li>
                        </ul>
                        <Link href="https://bit.ly/InterdisiplinPraktiqu" className="w-full block bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 rounded-lg transition-colors">
                            Daftar Personal
                        </Link>
                    </div>

                    {/* Group Plan */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#06b6d4] transform scale-105 relative hidden md:flex md:flex-col">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#06b6d4] text-xs font-bold px-3 py-1 rounded text-white uppercase tracking-wide">
                            Best Value
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">GROUP</h3>
                        <div className="text-3xl font-bold text-slate-900 mb-1">Rp400.000<span className="text-sm font-normal text-slate-500">,-</span></div>
                        <p className="text-xs text-slate-500 mb-6">Per orang (Min. 3 orang)</p>

                        <ul className="text-left w-full space-y-3 mb-8 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Semua benefit Personal
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Harga lebih hemat
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                Networking group
                            </li>
                        </ul>
                        <Link href="https://bit.ly/InterdisiplinPraktiqu" className="w-full block bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                            Daftar Group
                        </Link>
                    </div>

                    {/* Mobile view of Group Plan */}
                    <div className="md:hidden bg-white p-8 rounded-2xl shadow-lg border-2 border-[#06b6d4] flex flex-col items-center relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#06b6d4] text-xs font-bold px-3 py-1 rounded text-white uppercase tracking-wide">
                            Best Value
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">GROUP</h3>
                        <div className="text-3xl font-bold text-slate-900 mb-1">Rp400.000<span className="text-sm font-normal text-slate-500">,-</span></div>
                        <p className="text-xs text-slate-500 mb-6">Per orang (Min. 3 orang)</p>
                        <Link href="https://bit.ly/InterdisiplinPraktiqu" className="w-full block bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                            Daftar Group
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
