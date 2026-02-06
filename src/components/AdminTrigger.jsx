'use client';

import { useState, useEffect } from 'react';
import AdminModal from './AdminModal';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function AdminTrigger({ lang }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [t, setT] = useState(null);

    useEffect(() => {
        const loadT = async () => {
            const translations = await useTranslation(lang);
            setT(translations.admin);
        };
        loadT();
    }, [lang]);

    return (
        <>
            <div className="mt-16 flex justify-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative flex items-center space-x-3 px-6 py-3 rounded-full border border-[var(--outline)]/10 hover:border-[var(--primary)]/30 text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-all duration-500 overflow-hidden"
                >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-eteq-gradient opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>

                    <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform duration-500">
                        admin_panel_settings
                    </span>
                    <span className="label-large uppercase tracking-[0.2em] font-bold">
                        {t?.title ? (lang === 'ja' ? '管理者' : 'Admin') : ''}
                    </span>

                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
            </div>

            <AdminModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lang={lang}
            />
        </>
    );
}
