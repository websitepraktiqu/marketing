import Image from 'next/image';

export default function FooterSeriBantu() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-12 text-sm text-center md:text-left border-t-4 border-[#fe6007]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <Image
                        src="/logo.png"
                        alt="Praktiqu Logo"
                        width={120}
                        height={32}
                        className="h-8 w-auto brightness-0 invert"
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    <a href="#" className="hover:text-[#fe6007] transition-colors">About Us</a>
                    <a href="#" className="hover:text-[#fe6007] transition-colors">Contact</a>
                    <a href="#" className="hover:text-[#fe6007] transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[#fe6007] transition-colors">Terms of Service</a>
                </div>

                <div className="text-xs">
                    &copy; {new Date().getFullYear()} Praktiqu. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
