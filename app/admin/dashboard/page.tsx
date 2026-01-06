import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTransactions } from '@/lib/actions';
import { AlertCircle } from 'lucide-react';
import TransactionTable from './TransactionTable';

export default async function AdminDashboard() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token');

    if (!token) {
        redirect('/admin/login');
    }

    const { data: transactions, error } = await getTransactions(token.value);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
                    <p className="text-gray-500 dark:text-slate-400 mt-1">Overview of recent transactions.</p>
                </div>
            </div>

            {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start text-red-700 dark:text-red-300">
                    <AlertCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                        <h3 className="font-medium">Error loading data</h3>
                        <p className="text-sm mt-1">{error}</p>
                    </div>
                </div>
            )}

            {/* Client Component: Table with Search */}
            <TransactionTable transactions={transactions || []} />
        </div>
    );
}
