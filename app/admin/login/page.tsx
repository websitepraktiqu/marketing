'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminLogin } from '@/lib/actions';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        try {
            const res = await adminLogin(formData);
            if (res?.error) {
                setError(res.error);
            } else {
                router.push('/admin');
            }
        } catch (err: any) {
            setError('Terjadi kesalahan saat login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 px-4 transition-colors duration-300">
            <div className="max-w-md w-full bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-slate-800 transition-colors">
                <div className="text-center mb-8">
                    <div className="mx-auto h-12 w-12 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 transition-colors">
                        <Lock className="h-6 w-6 text-gray-600 dark:text-slate-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Admin Portal</h1>
                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">Sign in to access the dashboard</p>
                </div>

                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 px-4 py-3 rounded-md mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-blue-500 focus:border-black dark:focus:border-blue-500 bg-white dark:bg-slate-950 text-gray-900 dark:text-white sm:text-sm transition-all placeholder:text-gray-400 dark:placeholder:text-slate-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-blue-500 focus:border-black dark:focus:border-blue-500 bg-white dark:bg-slate-950 text-gray-900 dark:text-white sm:text-sm transition-all placeholder:text-gray-400 dark:placeholder:text-slate-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gray-900 dark:bg-blue-600 text-white py-2.5 px-4 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-50 transition-all shadow-sm"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
