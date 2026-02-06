'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getContacts, deleteContact, verifyAdminKey } from '@/services/actions';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function AdminContactsPage({ params: { lang } }) {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState(false);
    const [adminKey, setAdminKey] = useState(null);
    const [t, setT] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const loadT = async () => {
            const translations = await useTranslation(lang);
            setT(translations.admin);
        };
        loadT();
    }, [lang]);

    const checkAuth = useCallback(async () => {
        const stored = localStorage.getItem('admin_key');
        if (!stored) {
            setAuthError(true);
            setLoading(false);
            return;
        }

        const { key, expiry } = JSON.parse(stored);
        const now = new Date().getTime();

        if (now > expiry) {
            localStorage.removeItem('admin_key');
            setAuthError(true);
            setLoading(false);
            return;
        }

        const isValid = await verifyAdminKey(key);
        if (!isValid) {
            localStorage.removeItem('admin_key');
            setAuthError(true);
            setLoading(false);
            return;
        }

        setAdminKey(key);
        fetchContacts(key);
    }, []);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    const fetchContacts = async (key) => {
        setLoading(true);
        const result = await getContacts(key);
        if (result.success) {
            setContacts(result.data);
        } else {
            console.error(result.error);
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (!confirm(t?.deleteConfirm || 'Are you sure you want to delete this message?')) {
            return;
        }

        const result = await deleteContact(adminKey, id);
        if (result.success) {
            setContacts(contacts.filter(c => c._id !== id));
        } else {
            alert(t?.deleteFailed || 'Failed to delete');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_key');
        router.push(`/${lang}/contact`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
            </div>
        );
    }

    if (authError) {
        return (
            <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center p-4">
                <div className="bg-[var(--surface-container)] p-8 rounded-[var(--shape-extra-large)] shadow-[var(--elevation-2)] text-center max-w-md">
                    <span className="material-symbols-outlined text-6xl text-[var(--error)] mb-4">lock</span>
                    <h1 className="headline-large text-[var(--on-surface)] mb-4">
                        {t?.accessDenied || 'Access Denied'}
                    </h1>
                    <p className="body-large text-[var(--on-surface-variant)] mb-8">
                        {t?.accessDeniedDesc || 'You do not have permission to view this page.'}
                    </p>
                    <Link href={`/${lang}/contact`} className="px-8 py-3 bg-[var(--primary)] text-[var(--on-primary)] rounded-full font-bold">
                        {t?.backToContact || 'Back to Contact'}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--on-surface)]">
            {/* Admin Header */}
            <header className="sticky top-0 z-50 bg-[var(--surface)]/80 backdrop-blur-md border-b border-[var(--outline)]/10 px-6 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href={`/${lang}`} className="text-2xl font-bold bg-eteq-gradient bg-clip-text text-transparent">
                            ETEQ
                        </Link>
                        <div className="h-6 w-px bg-[var(--outline)]/20 mx-2"></div>
                        <h1 className="headline-small text-[var(--on-surface)] font-medium">
                            {t?.messagesTitle || 'Contact Messages'}
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-[var(--success-container)] text-[var(--on-success-container)] text-xs font-bold rounded-full flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            ADMIN
                        </span>
                        <button
                            onClick={handleLogout}
                            className="p-2 rounded-full hover:bg-[var(--error-container)]/10 text-[var(--error)] transition-colors"
                            title={t?.logout || 'Logout'}
                        >
                            <span className="material-symbols-outlined">logout</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="display-small text-[var(--on-surface)] mb-2">
                            {t?.inbox || 'In-box'}
                        </h2>
                        <p className="body-large text-[var(--on-surface-variant)]">
                            {contacts.length} {t?.totalMessages || 'messages total'}
                        </p>
                    </div>
                    <button
                        onClick={() => fetchContacts(adminKey)}
                        className="flex items-center text-[var(--primary)] hover:underline"
                    >
                        <span className="material-symbols-outlined mr-1">refresh</span>
                        {t?.refresh || 'Refresh'}
                    </button>
                </div>

                {contacts.length === 0 ? (
                    <div className="bg-[var(--surface-container)] p-20 rounded-[var(--shape-extra-large)] text-center border border-dashed border-[var(--outline)]/30">
                        <span className="material-symbols-outlined text-6xl text-[var(--on-surface-variant)] opacity-20 mb-4">mail_outline</span>
                        <p className="body-large text-[var(--on-surface-variant)] italic">
                            {t?.noMessages || 'No messages yet.'}
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {contacts.map((contact) => (
                            <div
                                key={contact._id}
                                className="bg-[var(--surface)] rounded-[var(--shape-extra-large)] border border-[var(--outline)]/5 hover:border-[var(--primary)]/20 transition-all hover:shadow-[var(--elevation-2)] overflow-hidden group"
                            >
                                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="headline-medium text-[var(--on-surface)]">
                                                        {contact.name}
                                                    </h3>
                                                    <span className="px-2 py-0.5 rounded bg-[var(--secondary-container)] text-[var(--on-secondary-container)] label-small">
                                                        {contact.lang.toUpperCase()}
                                                    </span>
                                                </div>
                                                <p className="label-large text-[var(--primary)] font-medium">
                                                    {contact.title}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="label-medium text-[var(--on-surface-variant)]">
                                                    {new Date(contact.createdAt).toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-[var(--surface-container)] p-4 rounded-[var(--shape-medium)] border border-[var(--outline)]/10">
                                            <p className="body-large text-[var(--on-surface)] whitespace-pre-wrap italic">
                                                "{contact.message}"
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 pt-2">
                                            <div className="flex items-center text-[var(--on-surface-variant)]">
                                                <span className="material-symbols-outlined text-sm mr-2 text-[var(--primary)]">contact_page</span>
                                                <span className="body-medium">{contact.contactInfo}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex md:flex-col justify-end gap-3 shrink-0">
                                        <a
                                            href={`mailto:${contact.contactInfo.includes('@') ? contact.contactInfo : ''}`}
                                            className="w-12 h-12 rounded-full bg-[var(--primary-container)] text-[var(--primary)] flex items-center justify-center hover:shadow-[var(--elevation-2)] transition-all"
                                            title={t?.reply || 'Reply'}
                                        >
                                            <span className="material-symbols-outlined">reply</span>
                                        </a>
                                        <button
                                            onClick={() => handleDelete(contact._id)}
                                            className="w-12 h-12 rounded-full bg-[var(--error-container)] text-[var(--error)] flex items-center justify-center hover:shadow-[var(--elevation-2)] transition-all"
                                            title={t?.delete || 'Delete'}
                                        >
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <footer className="py-12 border-t border-[var(--outline)]/5 opacity-50">
                <div className="container mx-auto px-4 text-center">
                    <p className="label-small uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
                        ETEQ Enterprise Management System v1.0
                    </p>
                </div>
            </footer>
        </div>
    );
}
