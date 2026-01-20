"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAMES = [
    "Putri dari Jakarta",
    "Dr. Andi dari Surabaya",
    "Rina dari Bandung",
    "Budi dari Medan",
    "Siska dari Tangerang",
    "Dewi dari Yogyakarta",
    "Hendra dari Makassar",
    "Citra dari Semarang",
    "Eka dari Denpasar",
    "Fajar dari Bekasi",
    "Tama dari Lampung",
    "Yuna dari Padang",
    "Rizky dari Jakarta",
    "Dian dari Bandung",
    "Rian dari Bogor",
    "Sarah dari Malang",
    "Agus dari Palembang",
    "Mega dari Pontianak",
    "Bayu dari Balikpapan",
    "Intan dari Samarinda",
    "Reza dari Banjarmasin",
    "Lina dari Manado",
    "Tio dari Ambon",
    "Sari dari Jayapura",
    "Dedi dari Batam",
    "Wulan dari Pekanbaru",
    "Jaya dari Jambi",
    "Nur dari Bengkulu",
    "Candra dari Mataram",
    "Gita dari Kupang",
    "Hadi dari Aceh",
    "Indah dari Solo",
    "Joko dari Magelang",
    "Maya dari Cirebon",
    "Arif dari Tegal",
    "Nanda dari Purwokerto",
    "Gilang dari Madiun",
    "Vina dari Kediri",
    "Bagas dari Jember",
    "Ratna dari Banyuwangi",
    "Adit dari Probolinggo",
    "Mira dari Pasuruan",
    "Dimas dari Cimahi",
    "Bella dari Tasikmalaya",
    "Agung dari Sukabumi",
    "Rosa dari Depok",
    "Fikri dari Serang",
    "Tari dari Cilegon",
    "Lukman dari Palu",
    "Nia dari Kendari"
];

const ACTIONS = [
    "baru saja mendaftar",
    "bergabung dengan mentoring",
    "mengamankan slot konsultasi",
    "mendaftar waiting list"
];

export default function SalesNotification() {
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const showNotification = () => {
            const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
            const randomAction = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
            setMessage(`${randomName} ${randomAction}`);
            setIsVisible(true);

            // Hide after 5 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        };

        // Initial delay
        const initialTimer = setTimeout(showNotification, 3000);

        // Interval
        const interval = setInterval(() => {
            const delay = Math.floor(Math.random() * (15000 - 8000 + 1) + 8000); // Random between 8-15s
            setTimeout(showNotification, delay);
        }, 15000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 left-6 z-50 max-w-sm bg-[#111] border border-[#CDA434]/30 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] p-4 flex items-center gap-4"
                >
                    <div className="w-10 h-10 rounded-full bg-[#CDA434]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🔥</span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-200 font-medium">
                            <span className="text-[#CDA434] font-bold">{message}</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">Baru saja</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
