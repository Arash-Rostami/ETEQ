'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useLingo } from '@/hooks/useLingo';
import { useScroll } from '@/hooks/useScroll';

export default function Header({ t }) {
    const { isDark, toggle: toggleTheme } = useTheme();
    const { lang, toggle: toggleLanguage } = useLingo();
    const { handleAnchorClick } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pathname = usePathname();
    const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

    const navLinks = [
        { name: t.header.about, href: `/${lang}/about`, icon: 'info' },
        { name: t.header.bio, href: `/${lang}#bio`, icon: 'person' },
        { name: t.header.services, href: `/${lang}#services`, icon: 'engineering' },
        { name: t.header.industries, href: `/${lang}#industries`, icon: 'factory' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out ${
                scrolled ? 'header-scrolled h-16' : 'bg-transparent h-20'
            }`}
        >
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href={`/${lang}`} className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 rounded-xl bg-eteq-gradient flex items-center justify-center shadow-[var(--elevation-1)] group-hover:shadow-[var(--elevation-2)] transition-all">
                            <span className="text-white font-bold text-xl">E</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-[var(--on-surface)]">ETEQ</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--on-surface-variant)] font-medium leading-none">Engineering</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isAnchor = link.href.includes('#');
                            const href = link.href;

                            if (isAnchor && isHome) {
                                const hash = href.substring(href.indexOf('#'));
                                return (
                                    <a
                                        key={link.name}
                                        href={hash}
                                        onClick={(e) => handleAnchorClick(e)}
                                        className="px-4 py-2 rounded-full text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[var(--primary-container)]/10 transition-all label-large"
                                    >
                                        <sub className="material-symbols-outlined mr-1.5 text-xs text-[var(--color-purple)]">{link.icon}</sub>
                                        {link.name}
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={href}
                                    className="px-4 py-2 rounded-full text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[var(--primary-container)]/10 transition-all label-large"
                                >
                                    <sub className="material-symbols-outlined mr-1.5 text-xs text-[var(--color-purple)]">{link.icon}</sub>
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center space-x-2 md:space-x-4">
                        <a
                            href={`mailto:${t.header.email}`}
                            className="hidden lg:flex items-center px-4 py-2 text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors"
                        >
                            <span className="material-symbols-outlined mr-2 text-xl">mail</span>
                            <span className="label-large">{t.header.email}</span>
                        </a>

                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--outline)] hover:bg-[var(--surface-variant)] transition-all text-[var(--on-surface)]"
                            aria-label="Toggle dark mode"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>

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

            <div className={`fixed inset-0 top-16 bg-[var(--surface)] z-[90] md:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => {
                        const isAnchor = link.href.includes('#');
                        const href = link.href;

                        if (isAnchor && isHome) {
                            const hash = href.substring(href.indexOf('#'));
                            return (
                                <a
                                    key={link.name}
                                    href={hash}
                                    onClick={(e) => handleAnchorClick(e, () => setMobileMenuOpen(false))}
                                    className="text-2xl font-medium text-[var(--on-surface)] py-2 border-b border-[var(--surface-variant)]"
                                >
                                    {link.name}
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={link.name}
                                href={href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-medium text-[var(--on-surface)] py-2 border-b border-[var(--surface-variant)]"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
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