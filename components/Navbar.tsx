import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#06b6d4] py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm text-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#06b6d4] font-bold text-sm">
          P
        </div>
        <span className="font-bold text-xl tracking-tight text-white">Praktiqu</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-semibold text-white/90">
        <Link href="#programs" className="hover:text-white transition-colors">Programs</Link>
        <Link href="#expert" className="hover:text-white transition-colors">Expert</Link>
        <Link href="#reviews" className="hover:text-white transition-colors">Reviews</Link>
      </div>

      <div className="flex gap-4">
        <Link
          href="https://bit.ly/InterdisiplinPraktiqu"
          target="_blank"
          className="bg-white hover:bg-slate-100 text-[#06b6d4] font-bold py-2 px-6 rounded transition-colors text-sm shadow-md"
        >
          Daftar Sekarang
        </Link>
      </div>
    </nav>
  );
}
