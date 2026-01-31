'use client';

import Link from 'next/link';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header({ t, lang: propLang }) {
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();

    // Use propLang if available, otherwise fallback to params or 'en'
    const [lang, setLang] = useState(propLang || (params && params.lang) || 'en');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);

        // Theme initialization
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (propLang && propLang !== lang) {
            setLang(propLang);
        }
    }, [propLang]);

    useEffect(() => {
        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        if (newDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'ja' : 'en';
        setLang(newLang);
        localStorage.setItem('preferred-lang', newLang);
        const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
        router.push(newPath);
    };

    const navLinks = [
        { name: t.header.services, href: '#services' },
        { name: t.header.about, href: '#about' },
        { name: t.header.industries, href: '#industries' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                scrolled
                ? 'bg-[var(--surface-container)]/80 backdrop-blur-lg shadow-[var(--elevation-2)] h-16'
                : 'bg-transparent h-20'
            }`}
        >
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link href={`/${lang}`} className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 rounded-xl bg-eteq-gradient flex items-center justify-center shadow-[var(--elevation-1)] group-hover:shadow-[var(--elevation-2)] transition-all">
                            <span className="text-white font-bold text-xl">E</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-[var(--on-surface)]">ETEQ</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--on-surface-variant)] font-medium leading-none">Engineering</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 rounded-full text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[var(--primary-container)]/10 transition-all label-large"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <a
                            href={`mailto:${t.header.email}`}
                            className="hidden lg:flex items-center px-4 py-2 text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors"
                        >
                            <span className="material-symbols-outlined mr-2 text-xl">mail</span>
                            <span className="label-large">{t.header.email}</span>
                        </a>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--outline)] hover:bg-[var(--surface-variant)] transition-all text-[var(--on-surface)]"
                            aria-label="Toggle dark mode"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--outline)] hover:bg-[var(--surface-variant)] transition-all label-large text-[var(--on-surface)] font-bold"
                            aria-label={lang === 'en' ? 'Switch to Japanese' : 'Switch to English'}
                        >
                            {lang === 'en' ? 'JP' : 'EN'}
                        </button>

                        <Link
                            href={`/${lang}/contact`}
                            className="hidden sm:flex items-center px-6 py-2.5 bg-[var(--primary)] text-[var(--on-primary)] rounded-full hover:shadow-[var(--elevation-2)] active:scale-95 transition-all label-large font-bold"
                        >
                            {t.header.contact}
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-[var(--on-surface)]"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">
                                {mobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 top-16 bg-[var(--surface)] z-[90] md:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-medium text-[var(--on-surface)] py-2 border-b border-[var(--surface-variant)]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link
                        href={`/${lang}/contact`}
                        className="mt-4 flex items-center justify-center w-full py-4 bg-eteq-gradient text-white rounded-2xl font-bold text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {t.header.contact}
                    </Link>
                </nav>
            </div>
        </header>
    );
}
