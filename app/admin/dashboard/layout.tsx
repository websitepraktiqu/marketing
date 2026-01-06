'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Using inline SVGs initially to ensure it works even if lucide install fails
// If install succeeds, I can swap them later, but inline is safer for "now".
// Actually, let's try to use Lucide if installed, but fallback if not.
// For simplicity in this file, I'll use standard separate Imports assuming install works.
// If it fails, the user will get a build error, so I will check the install result first.
// Wait, to be safe, I will use lucid-react imports.
import { LayoutDashboard, User, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';
import { adminLogout } from '@/lib/actions';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Helper to check active state
    const isActive = (path: string) => pathname === path;

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar - Forced Visible for Debugging */}
            <aside className="w-64 bg-white border-r border-gray-300 flex-shrink-0 flex flex-col justify-between">
                <div>
                    <div className="h-16 flex items-center px-6 border-b border-gray-200">
                        <span className="text-xl font-bold text-gray-900">Admin Panel</span>
                    </div>

                    <nav className="p-4 space-y-2">
                        <Link
                            href="/admin/dashboard"
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive('/admin/dashboard')
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <LayoutDashboard className="w-5 h-5 mr-3" />
                            Dashboard
                        </Link>

                        <Link
                            href="/admin/dashboard/profile"
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive('/admin/dashboard/profile')
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <User className="w-5 h-5 mr-3" />
                            Profile
                        </Link>
                    </nav>
                </div>

                <div className="p-4 border-t border-gray-200">
                    <form action={adminLogout}>
                        <button type="submit" className="flex w-full items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md">
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
