'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { verifyAdminKey } from '@/services/actions';
import { useTranslation } from '@/lib/i18n/useTranslation';
import Modal from './Modal';

export default function AdminModal({ isOpen, onClose, lang }) {
    const [key, setKey] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [t, setT] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const loadT = async () => {
            const translations = await useTranslation(lang);
            setT(translations.admin);
        };
        loadT();
    }, [lang]);

    useEffect(() => {
        if (isOpen) {
            setKey('');
            setError(false);
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        const isValid = await verifyAdminKey(key);

        if (isValid) {
            const expiry = new Date().getTime() + 3600000; // 1 hour
            localStorage.setItem('admin_key', JSON.stringify({ key, expiry }));
            router.push(`/${lang}/admin/contacts`);
            onClose();
        } else {
            setError(true);
        }
        setLoading(false);
    };

    const modalContent = (
        <form onSubmit={handleSubmit} className="space-y-6">
            <p className="body-medium text-gray-300 text-center">
                {t?.subtitle || 'Please enter the admin secret key to continue.'}
            </p>

            <div className="space-y-2">
                <div className="relative">
                    <input
                        type="password"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder={t?.keyPlaceholder || 'Secret Key'}
                        required
                        autoFocus
                        className={`w-full px-4 py-3 rounded-[var(--shape-medium)] bg-white/5 border ${error ? 'border-[var(--error)]' : 'border-white/20'} focus:border-[var(--color-coral)] outline-none transition-all body-large text-white`}
                    />
                    <span className="absolute right-3 top-3 material-symbols-outlined text-gray-400">
                        key
                    </span>
                </div>
                {error && (
                    <p className="text-[var(--error)] text-xs ml-1 flex items-center">
                        <span className="material-symbols-outlined text-sm mr-1">error</span>
                        {t?.invalidKey || 'Invalid key'}
                    </p>
                )}
            </div>

            <div className="flex justify-end space-x-3 pt-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 rounded-full border border-white/20 text-gray-300 font-medium hover:bg-white/5 transition-all"
                >
                    {t?.cancel || 'Cancel'}
                </button>
                <button
                    type="submit"
                    disabled={loading || !key}
                    className="px-8 py-2 rounded-full bg-eteq-gradient text-white font-medium hover:shadow-lg transition-all disabled:opacity-50 flex items-center"
                >
                    {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        t?.login || 'Login'
                    )}
                </button>
            </div>
        </form>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={t?.title || 'Admin Access'}
            content={modalContent}
            lang={lang}
        />
    );
}
