import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTransactions } from '@/lib/actions';
import { Calendar, CreditCard, User, Package, AlertCircle } from 'lucide-react';

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
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500 mt-1">Overview of recent transactions.</p>
                </div>
                {/* Stats can go here later */}
            </div>

            {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start text-red-700">
                    <AlertCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                        <h3 className="font-medium">Error loading data</h3>
                        <p className="text-sm mt-1">{error}</p>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h2 className="text-sm font-medium text-gray-700 uppercase tracking-wider">Recent Transactions</h2>
                </div>

                {!error && (!transactions || transactions.length === 0) ? (
                    <div className="p-12 text-center">
                        <div className="mx-auto h-12 w-12 text-gray-300">
                            <Package className="w-full h-full" />
                        </div>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No transactions</h3>
                        <p className="mt-1 text-sm text-gray-500">No transactions found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participant</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {transactions?.map((trx: any, idx: number) => (
                                    <tr key={trx.id || idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                                {trx.date || '-'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                                            {trx.invoice_id || trx.order_id || '-'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 pt-0.5">
                                                    <User className="w-4 h-4 text-gray-400" />
                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-sm font-medium text-gray-900">{trx.name || trx.billing?.first_name}</div>
                                                    <div className="text-xs text-gray-500">{trx.phone || trx.billing?.phone}</div>
                                                    <div className="text-xs text-gray-500">{trx.email || trx.billing?.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{trx.product_name || 'Unknown Product'}</div>
                                            <div className="text-xs text-gray-500">ID: {trx.product_id}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                                ${trx.status === 'completed' || trx.status === 'success' || trx.status === 'publish'
                                                    ? 'bg-green-100 text-green-800'
                                                    : trx.status === 'pending'
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : 'bg-red-100 text-red-800'
                                                }
                                            `}>
                                                {trx.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
