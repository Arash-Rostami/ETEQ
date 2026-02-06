'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getContacts, deleteContact, verifyAdminKey } from '@/services/actions';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdminContactsPage({ params }) {
    const { lang } = params;
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState(false);
    const [adminKey, setAdminKey] = useState(null);
    const [t, setT] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const loadT = async () => {
            const translations = await useTranslation(lang);
            setT(translations);
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
        if (!confirm(t?.admin?.deleteConfirm || 'Are you sure you want to delete this message?')) {
            return;
        }

        const result = await deleteContact(adminKey, id);
        if (result.success) {
            setContacts(contacts.filter(c => c._id !== id));
        } else {
            alert(t?.admin?.deleteFailed || 'Failed to delete');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_key');
        router.push(`/${lang}/contact`);
    };

    if (loading || !t) {
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
                        {t?.admin?.accessDenied || 'Access Denied'}
                    </h1>
                    <p className="body-large text-[var(--on-surface-variant)] mb-8">
                        {t?.admin?.accessDeniedDesc || 'You do not have permission to view this page.'}
                    </p>
                    <Link href={`/${lang}/contact`} className="px-8 py-3 bg-[var(--primary)] text-[var(--on-primary)] rounded-full font-bold">
                        {t?.admin?.backToContact || 'Back to Contact'}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className={lang === 'ja' ? 'font-noto' : 'font-poppins'}>
            <Header t={t} lang={lang} />

            {/* Admin Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--surface-container)]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl animate-reveal-up flex justify-between items-end">
                        <div>
                            <nav className="flex items-center space-x-2 text-[var(--primary)] label-large mb-8">
                                <Link href={`/${lang}`} className="hover:underline">Home</Link>
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                <span>Admin</span>
                            </nav>
                            <h1 className="display-large text-[var(--on-surface)] mb-4">
                                {t.admin.messagesTitle}
                            </h1>
                            <p className="body-large text-[var(--on-surface-variant)] text-xl mb-8 flex items-center">
                                <span className="material-symbols-outlined mr-2 text-[var(--primary)]">inbox</span>
                                {contacts.length} {t.admin.totalMessages}
                            </p>
                            <div className="h-1.5 bg-eteq-gradient w-32 rounded-full"></div>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <button
                                onClick={() => fetchContacts(adminKey)}
                                className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--outline)]/20 text-[var(--primary)] flex items-center justify-center hover:bg-[var(--primary-container)]/10 transition-all shadow-[var(--elevation-1)]"
                                title={t.admin.refresh}
                            >
                                <span className="material-symbols-outlined">refresh</span>
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-12 h-12 rounded-full bg-[var(--error-container)] text-[var(--on-error-container)] flex items-center justify-center hover:shadow-[var(--elevation-2)] transition-all"
                                title={t.admin.logout}
                            >
                                <span className="material-symbols-outlined">logout</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-purple)]/10 to-transparent -z-10"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--color-coral)]/5 rounded-full blur-3xl -z-10"></div>
            </section>

            {/* Records List Section */}
            <section className="py-20 bg-[var(--background)] min-h-[60vh]">
                <div className="container mx-auto px-4">
                    {contacts.length === 0 ? (
                        <div className="bg-[var(--surface-container)] p-20 rounded-[var(--shape-extra-large)] text-center border border-dashed border-[var(--outline)]/30 animate-reveal-up">
                            <span className="material-symbols-outlined text-6xl text-[var(--on-surface-variant)] opacity-20 mb-4">mail_outline</span>
                            <p className="body-large text-[var(--on-surface-variant)] italic">
                                {t.admin.noMessages}
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-8 max-w-5xl mx-auto">
                            {contacts.map((contact, index) => (
                                <div
                                    key={contact._id}
                                    className="bg-[var(--surface)] p-8 rounded-[var(--shape-extra-large)] border border-[var(--outline)]/10 hover:border-[var(--primary)]/30 transition-all shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] animate-reveal-up group relative overflow-hidden"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    {/* Accent Decoration */}
                                    <div className="absolute top-0 left-0 w-2 h-full bg-eteq-gradient opacity-70 group-hover:w-3 transition-all"></div>

                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="flex-1 space-y-6">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="headline-large text-[var(--on-surface)] font-bold">
                                                            {contact.name}
                                                        </h3>
                                                        <span className="px-3 py-1 rounded-full bg-[var(--secondary-container)] text-[var(--on-secondary-container)] label-small font-bold">
                                                            {contact.lang.toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <p className="headline-small text-[var(--primary)] font-medium leading-tight">
                                                        {contact.title}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="label-large text-[var(--on-surface-variant)] font-medium">
                                                        {new Date(contact.createdAt).toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </p>
                                                    <p className="label-small text-[var(--on-surface-variant)] opacity-60">
                                                        {new Date(contact.createdAt).toLocaleTimeString(lang === 'ja' ? 'ja-JP' : 'en-US', {
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-[var(--surface-container)] p-6 rounded-[var(--shape-medium)] border border-[var(--outline)]/5 relative">
                                                <span className="material-symbols-outlined absolute -top-3 -left-3 text-4xl text-[var(--primary)]/10 rotate-180">format_quote</span>
                                                <p className="body-large text-[var(--on-surface)] whitespace-pre-wrap leading-relaxed">
                                                    {contact.message}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-6 pt-2">
                                                <div className="flex items-center bg-[var(--surface-container-high)] px-4 py-2 rounded-full border border-[var(--outline)]/10">
                                                    <span className="material-symbols-outlined text-sm mr-2 text-[var(--primary)]">contact_page</span>
                                                    <span className="body-medium font-medium text-[var(--on-surface)]">{contact.contactInfo}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex md:flex-col justify-end gap-4 shrink-0">
                                            <a
                                                href={`mailto:${contact.contactInfo.includes('@') ? contact.contactInfo : ''}`}
                                                className="w-14 h-14 rounded-2xl bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center hover:shadow-[var(--elevation-3)] hover:-translate-y-1 transition-all"
                                                title={t.admin.reply}
                                            >
                                                <span className="material-symbols-outlined text-2xl font-bold">reply</span>
                                            </a>
                                            <button
                                                onClick={() => handleDelete(contact._id)}
                                                className="w-14 h-14 rounded-2xl bg-[var(--error-container)] text-[var(--on-error-container)] flex items-center justify-center hover:shadow-[var(--elevation-3)] hover:-translate-y-1 transition-all"
                                                title={t.admin.delete}
                                            >
                                                <span className="material-symbols-outlined text-2xl font-bold">delete_forever</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer t={t} lang={lang} />
        </main>
    );
}
