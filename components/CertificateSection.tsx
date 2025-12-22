import Image from 'next/image';

export default function CertificateSection() {
    return (
        <section className="bg-slate-50 py-20 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                        BENEFIT EXCLUSIVE
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Dapatkan <span className="text-[#06b6d4]">Certificate of Completion</span>
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        Sertifikat resmi dari Praktiqu yang dapat Anda gunakan untuk validasi keahlian di LinkedIn atau portofolio karir Anda.
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <span className="text-slate-700">Terverifikasi oleh Psikolog Profesional</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <span className="text-slate-700">Mencantumkan total jam pembelajaran</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <span className="text-slate-700">Format digital high-resolution</span>
                        </li>
                    </ul>
                </div>

                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-[#0ea5e9] blur-3xl opacity-20 transform rotate-6 rounded-full"></div>
                    <div className="relative bg-white p-2 rounded-lg shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                        {/* Mock Certificate */}
                        <div className="aspect-[4/3] border-4 border-slate-100 relative bg-white flex flex-col items-center justify-center p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#06b6d4]"></div>
                            <div className="w-16 h-16 bg-slate-100 rounded-full mb-4 flex items-center justify-center font-serif text-2xl text-[#06b6d4] font-bold">P</div>
                            <h3 className="text-3xl font-serif text-slate-900 mb-2">Certificate of Completion</h3>
                            <p className="text-slate-500 text-sm mb-6">This is to certify that</p>
                            <p className="text-2xl font-bold text-[#0ea5e9] font-serif mb-6 border-b border-slate-300 pb-2 px-12">Nama Peserta</p>
                            <p className="text-slate-500 text-xs max-w-sm mx-auto mb-8">
                                Has successfully completed the "Introduction to Child Development" webinar held on December 17-18, 2025.
                            </p>
                            <div className="flex justify-between w-full px-12 mt-auto">
                                <div className="text-left">
                                    <div className="h-10 border-b border-slate-300 w-24 mb-1"></div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Director</p>
                                </div>
                                <div className="text-right">
                                    <div className="h-10 border-b border-slate-300 w-24 mb-1"></div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400">Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
