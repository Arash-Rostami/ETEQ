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
            router.push(`/${lang}/admin/contact`);
            onClose();
        } else {
            setError(true);
        }
        setLoading(false);
    };

    const modalContent = (
        <form onSubmit={handleSubmit} className="space-y-8 py-4">
            <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-eteq-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[var(--color-coral)]/20">
                    <span className="material-symbols-outlined text-white text-3xl">lock</span>
                </div>
                <p className="body-large text-gray-300 leading-relaxed max-w-xs mx-auto">
                    {t?.subtitle || 'Please enter the admin secret key to continue.'}
                </p>
            </div>

            <div className="space-y-3">
                <div className="relative group">
                    <input
                        type="password"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder={t?.keyPlaceholder || 'Secret Key'}
                        required
                        autoFocus
                        className={`w-full px-6 py-4 rounded-2xl bg-white/5 border ${error ? 'border-[var(--error)]' : 'border-white/10 group-hover:border-white/20'} focus:border-[var(--color-coral)] outline-none transition-all body-large text-white placeholder:text-gray-500`}
                    />
                    <span className="absolute right-4 top-4 material-symbols-outlined text-gray-500 group-hover:text-gray-400 transition-colors">
                        key
                    </span>
                </div>
                {error && (
                    <div className="flex items-center text-[var(--error)] text-sm ml-2 animate-fade-in">
                        <span className="material-symbols-outlined text-base mr-1.5">error</span>
                        <span className="font-medium">{t?.invalidKey || 'Invalid key'}</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-4 rounded-2xl border border-white/10 text-gray-300 font-bold hover:bg-white/5 transition-all active:scale-95"
                >
                    {t?.cancel || 'Cancel'}
                </button>
                <button
                    type="submit"
                    disabled={loading || !key}
                    className="flex-[2] px-6 py-4 rounded-2xl bg-eteq-gradient text-white font-bold hover:shadow-xl hover:shadow-[var(--color-coral)]/20 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center"
                >
                    {loading ? (
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <>
                            {t?.login || 'Login'}
                            <span className="material-symbols-outlined ml-2">login</span>
                        </>
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
