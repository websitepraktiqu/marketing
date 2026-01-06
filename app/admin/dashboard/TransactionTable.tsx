"use client";

import { useState } from 'react';
import { Calendar, User, Package, Search } from 'lucide-react';

interface Transaction {
    id: number;
    date: string;
    invoice_id: string;
    name: string;
    phone: string;
    email: string;
    product_id: string;
    product_name: string;
    status: string;
    billing?: {
        first_name: string;
        email: string;
        phone: string;
    };
    order_id?: string;
}

export default function TransactionTable({ transactions }: { transactions: Transaction[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter Logic
    const filteredTransactions = transactions?.filter((trx) => {
        const term = searchTerm.toLowerCase();
        const invoice = (trx.invoice_id || trx.order_id || "").toLowerCase();
        const name = (trx.name || trx.billing?.first_name || "").toLowerCase();
        const email = (trx.email || trx.billing?.email || "").toLowerCase();
        const phone = (trx.phone || trx.billing?.phone || "").toLowerCase();

        return invoice.includes(term) || name.includes(term) || email.includes(term) || phone.includes(term);
    }) || [];

    if (!transactions || transactions.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <div className="mx-auto h-12 w-12 text-gray-300">
                    <Package className="w-full h-full" />
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No transactions</h3>
                <p className="mt-1 text-sm text-gray-500">No transactions found.</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-slate-950 rounded-lg shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden transition-colors">
            {/* Header & Search */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
                <h2 className="text-sm font-medium text-gray-700 dark:text-slate-200 uppercase tracking-wider">Recent Transactions</h2>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400 dark:text-slate-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Cari transaksi..."
                        className="pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white dark:bg-slate-950 text-gray-900 dark:text-white w-full sm:w-64 transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-800">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-slate-900 transition-colors">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">Invoice</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">Participant</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-950 divide-y divide-gray-200 dark:divide-slate-800 transition-colors">
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map((trx, idx) => (
                                <tr key={trx.id || idx} className="hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2 text-gray-400 dark:text-slate-500" />
                                            {trx.date || '-'}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-slate-200">
                                        {trx.invoice_id || trx.order_id || '-'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 pt-0.5">
                                                <User className="w-4 h-4 text-gray-400 dark:text-slate-500" />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">{trx.name || trx.billing?.first_name}</div>
                                                <div className="text-xs text-gray-500 dark:text-slate-400">{trx.phone || trx.billing?.phone}</div>
                                                <div className="text-xs text-gray-500 dark:text-slate-400">{trx.email || trx.billing?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 dark:text-white">{trx.product_name || 'Unknown Product'}</div>
                                        <div className="text-xs text-gray-500 dark:text-slate-400">ID: {trx.product_id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                                            ${trx.status === 'completed' || trx.status === 'success' || trx.status === 'publish'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                                : trx.status === 'pending'
                                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                                                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                                            }
                                        `}>
                                            {trx.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-gray-500 dark:text-slate-400">
                                    Tidak ada data yang cocok dengan "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
