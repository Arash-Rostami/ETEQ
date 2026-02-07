'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import AdminModal from '@/components/AdminModal';
import {useAdminAuth} from '@/hooks/useAdminAuth';

export default function AdminTrigger({lang, t}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {isAdmin, checkAuth} = useAdminAuth();
    const router = useRouter();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const handleClick = () => {
        (isAdmin) ? router.push(`/${lang}/admin/contact`) : setIsModalOpen(true);
    };

    return (
        <>
            <div className="mt-12 pb-8 border-b border-[var(--outline)]/10 flex justify-center">
                <button
                    onClick={handleClick}
                    className="flex items-center space-x-2 text-[var(--on-surface-variant)] opacity-30 hover:opacity-100 transition-all duration-500 hover:text-[var(--primary)] group"
                >
                    <span
                        className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">lock_person</span>
                    <span className="label-small uppercase tracking-widest">
                        {t?.admin?.adminLabel || (lang === 'en' ? 'Admin' : '管理者')}
                    </span>
                </button>
            </div>

            <AdminModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lang={lang}
                t={t?.admin}
            />
        </>
    );
}