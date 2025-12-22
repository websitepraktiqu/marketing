export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-12 text-sm text-center md:text-left border-t-4 border-[#06b6d4]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <div className="w-8 h-8 bg-[#06b6d4] text-white rounded-full flex items-center justify-center font-bold">P</div>
                    <span className="text-white font-bold text-lg">Praktiqu</span>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    <a href="#" className="hover:text-[#06b6d4] transition-colors">About Us</a>
                    <a href="#" className="hover:text-[#06b6d4] transition-colors">Contact</a>
                    <a href="#" className="hover:text-[#06b6d4] transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[#06b6d4] transition-colors">Terms of Service</a>
                </div>

                <div className="text-xs">
                    &copy; {new Date().getFullYear()} Praktiqu. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
