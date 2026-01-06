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
        <div className="min-h-screen bg-gray-50 flex font-sans">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:transform-none ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 flex items-center px-6 border-b border-gray-200">
                    <span className="text-xl font-bold text-gray-900">Admin Panel</span>
                </div>

                <nav className="p-4 space-y-1">
                    <Link
                        href="/admin"
                        className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${isActive('/admin')
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <LayoutDashboard className="w-5 h-5 mr-3" />
                        Dashboard
                    </Link>

                    <Link
                        href="/admin/profile"
                        className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${isActive('/admin/profile')
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <User className="w-5 h-5 mr-3" />
                        Profile
                    </Link>
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
                    <form action={adminLogout}>
                        <button type="submit" className="flex w-full items-center px-4 py-2.5 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors">
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="lg:hidden bg-white border-b border-gray-200 flex items-center px-4 h-16">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="ml-4 text-lg font-bold text-gray-900">Admin Panel</span>
                </header>

                <main className="flex-1 overflow-y-auto p-4 sm:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
