import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, User, LogOut } from 'lucide-react';
import { adminLogout } from '@/lib/actions';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Helper to check active state
    const isActive = (path: string) => pathname === path;

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-slate-900 transition-colors duration-300">
            {/* Sidebar - Forced Visible for Debugging */}
            <aside className="w-64 bg-white dark:bg-slate-950 border-r border-gray-300 dark:border-slate-800 flex-shrink-0 flex flex-col justify-between transition-colors duration-300">
                <div>
                    <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-slate-800">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Admin Panel</span>
                        <ThemeToggle />
                    </div>

                    <nav className="p-4 space-y-2">
                        <Link
                            href="/admin/dashboard"
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive('/admin/dashboard')
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                                : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-900'
                                }`}
                        >
                            <LayoutDashboard className="w-5 h-5 mr-3" />
                            Dashboard
                        </Link>

                        <Link
                            href="/admin/dashboard/profile"
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive('/admin/dashboard/profile')
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                                : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-900'
                                }`}
                        >
                            <User className="w-5 h-5 mr-3" />
                            Profile
                        </Link>
                    </nav>
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-slate-800">
                    <form action={adminLogout}>
                        <button type="submit" className="flex w-full items-center px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-md transition-colors">
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">
                {children}
            </main>
        </div>
    );
}
