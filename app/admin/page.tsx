import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTransactions, adminLogout } from '@/lib/actions';

export default async function AdminDashboard() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token');

    if (!token) {
        redirect('/admin/login');
    }

    // Fetch transactions using the token or API secret if configured that way
    const { data: transactions, error } = await getTransactions(token.value);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                    <form action={adminLogout}>
                        <button
                            type="submit"
                            className="text-sm text-red-600 hover:text-red-800 font-medium"
                        >
                            Logout
                        </button>
                    </form>
                </div>
            </header>

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadowoverflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">Daftar Transaksi</h2>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-50 text-red-700 border-l-4 border-red-500">
                            <p className="font-medium">Gagal memuat data:</p>
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    {!error && (!transactions || transactions.length === 0) ? (
                        <div className="p-12 text-center text-gray-500">
                            Belum ada data transaksi atau API belum mengembalikan data.
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tanggal
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Invoice / Ref
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Peserta
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Produk
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {transactions?.map((trx: any, idx: number) => (
                                        <tr key={trx.id || idx} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {trx.date || '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                                                {trx.invoice_id || trx.order_id || '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className="font-medium">{trx.name || trx.billing?.first_name}</div>
                                                <div className="text-gray-500 text-xs">{trx.phone || trx.billing?.phone}</div>
                                                <div className="text-gray-500 text-xs">{trx.email || trx.billing?.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="font-medium text-gray-900">{trx.product_name || `Product #${trx.product_id}`}</div>
                                                {trx.product_name && <div className="text-gray-500 text-xs">ID: {trx.product_id}</div>}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${trx.status === 'completed' || trx.status === 'publish' || trx.status === 'success'
                                                        ? 'bg-green-100 text-green-800'
                                                        : trx.status === 'pending'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-red-100 text-red-800'
                                                        }`}
                                                >
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
            </main>
        </div>
    );
}
