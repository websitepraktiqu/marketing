import Link from 'next/link';
import Image from 'next/image';

export default function NavbarSeriBantu() {
    return (
        <nav className="w-full bg-[#435b9b] py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm text-white">
            <div className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="Praktiqu Logo"
                    width={150}
                    height={40}
                    className="h-10 w-auto brightness-0 invert"
                    priority
                />
            </div>

            <div className="hidden md:flex gap-8 text-sm font-semibold text-white/90">
                <Link href="#programs" className="hover:text-[#fe6007] transition-colors">Programs</Link>
                <Link href="#expert" className="hover:text-[#fe6007] transition-colors">Expert</Link>
                <Link href="#reviews" className="hover:text-[#fe6007] transition-colors">Reviews</Link>
            </div>

            <div className="flex gap-4">
                <Link
                    href="#investasi"
                    className="bg-[#fe6007] hover:bg-[#e55606] text-white font-bold py-2 px-6 rounded-xl transition-colors text-sm shadow-md"
                >
                    Daftar Sekarang
                </Link>
            </div>
        </nav>
    );
}
