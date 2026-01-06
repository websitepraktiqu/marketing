'use client';

import { useActionState } from 'react';
import { changePassword } from '@/lib/actions';
import { KeyRound, CheckCircle, AlertCircle } from 'lucide-react';

const initialState = {
    error: '',
    success: false,
} as any;

export default function ProfilePage() {
    // Note: useActionState is for React 19 / Next JS 15+. 
    // If user is on older version, might need useFormState from react-dom.
    // Based on package.json, user is on Next 16.1.0 and React 19.
    const [state, formAction, isPending] = useActionState(changePassword, initialState);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
                <p className="text-gray-500 mt-1">Manage your account settings and preferences.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
                    <KeyRound className="w-5 h-5 text-gray-500 mr-2" />
                    <h2 className="text-sm font-medium text-gray-700">Change Password</h2>
                </div>

                <div className="p-6">
                    {state?.success && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3" />
                            <div className="text-sm text-green-700">
                                <p className="font-medium">Password updated successfully!</p>
                                <p className="mt-1">Please logout and login again with your new password.</p>
                            </div>
                        </div>
                    )}

                    {state?.error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
                            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                            <div className="text-sm text-red-700 font-medium">
                                {state.error}
                            </div>
                        </div>
                    )}

                    <form action={formAction} className="space-y-4">
                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-gray-700">New Password</label>
                            <input
                                type="password"
                                name="new_password"
                                required
                                minLength={6}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                            <input
                                type="password"
                                name="confirm_password"
                                required
                                minLength={6}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                {isPending ? 'Updating...' : 'Update Password'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
