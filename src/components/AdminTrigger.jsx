'use client';

import {useState} from 'react';
import AdminModal from '@/components/AdminModal';
import {useTranslation} from "@/lib/i18n/useTranslation";

export default  function AdminTrigger({lang}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslation(lang);

    return (
        <>
            <div className="mt-12 pb-8 border-b border-[var(--outline)]/10 flex justify-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center space-x-2 text-[var(--on-surface-variant)] opacity-30 hover:opacity-100 transition-all duration-500 hover:text-[var(--primary)] group"
                >
                    <span
                        className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">lock_person</span>
                    <span className="label-small uppercase tracking-widest">
                        {lang === 'en' ? 'Admin' : '管理者'}
                    </span>
                </button>
            </div>

            <AdminModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lang={lang}
                t={t}
            />
        </>
    );
}