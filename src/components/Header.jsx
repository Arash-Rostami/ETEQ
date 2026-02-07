'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Image from 'next/image';
import {useTheme} from '@/hooks/useTheme';
import {useLingo} from '@/hooks/useLingo';
import {useScroll} from '@/hooks/useScroll';
import {useToggle} from '@/hooks/useToggle';
import {useContactPopUp} from '@/hooks/useContactPopUp';


export default function Header({t}) {
    const {isDark, toggle: toggleTheme} = useTheme();
    const {lang, changeLang, languages} = useLingo();
    const {scrolled, handleAnchorClick} = useScroll();
    const [mobileMenuOpen, toggleMobileMenu, {setOff: closeMobileMenu}] = useToggle(false);
    const [langOpen, toggleLang, {setOff: closeLang}] = useToggle(false);
    const {isOpen: contactOpen, toggle: toggleContact, close: closeContact, contactRef} = useContactPopUp();

    const pathname = usePathname();
    const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

    const navLinks = [
        {name: t.header.about, href: `/${lang}/about`, icon: 'info'},
        {name: t.header.bio, href: `/${lang}#bio`, icon: 'person'},
        {name: t.header.services, href: `/${lang}#services`, icon: 'engineering'},
        {name: t.header.industries, href: `/${lang}#industries`, icon: 'factory'},
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out border-0
        ${scrolled
                ? 'header-scrolled h-16'
                : 'h-20 bg-transparent border-b-0'}
    `}
        >
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href={`/${lang}`} className="flex items-center space-x-2 group">
                        <div
                            className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-eteq-gradient flex items-center justify-center shadow-[var(--elevation-1)] group-hover:shadow-[var(--elevation-2)] transition-all">
                            <span className="text-white font-bold text-xl">E</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-[var(--on-surface)]">ETEQ</span>
                            <span
                                className="text-[10px] uppercase tracking-[0.2em] text-[var(--on-surface-variant)] font-medium leading-none">Engineering</span>
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
                                        <sub
                                            className="material-symbols-outlined mr-1.5 text-xs text-[var(--color-purple)]">{link.icon}</sub>
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
                                    <sub
                                        className="material-symbols-outlined mr-1.5 text-xs text-[var(--color-purple)]">{link.icon}</sub>
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center space-x-2 md:space-x-4">
                        {/* Contact Quick Options */}
                        <div className="relative" ref={contactRef}>
                            <button
                                onClick={toggleContact}
                                className={`flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border transition-all 
                                    ${contactOpen
                                    ? 'bg-[var(--primary)] text-[var(--on-primary)] border-[var(--primary)] shadow-[var(--elevation-2)]'
                                    : 'border-[var(--outline)] hover:bg-[var(--surface-variant)] text-[var(--on-surface)]'}`}
                                aria-label="Quick contact options"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    contact_support
                                </span>
                            </button>

                            {contactOpen && (
                                <div
                                    className="absolute top-full right-0 mt-3 w-56 bg-[var(--custom-color)] rounded-2xl border border-white/10 shadow-2xl py-2 animate-scale-in z-[110] overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="px-4 py-2 border-b border-white/5 mb-1">
                                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                                            {t.header.quickContact}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            window.location.href = `mailto:${t.header.email}`;
                                            closeContact();
                                        }}
                                        className="w-full px-4 py-3 text-left text-sm text-gray-200 hover:bg-white/5 transition-all flex items-center group"
                                    >
                                        <div
                                            className="w-8 h-8 rounded-full bg-[#FF7F6E]/20 text-[#FF7F6E] flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-sm">mail</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white">{t.header.sendEmail}</span>
                                            <span className="text-[10px] text-gray-400">{t.header.email}</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => {
                                            window.location.href = `tel:${t.header.phone.replace(/\s/g, '')}`;
                                            closeContact();
                                        }}
                                        className="w-full px-4 py-3 text-left text-sm text-gray-200 hover:bg-white/5 transition-all flex items-center group"
                                    >
                                        <div
                                            className="w-8 h-8 rounded-full bg-[#7B5C9D]/20 text-[#7B5C9D] flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-sm">call</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white">{t.header.callUs}</span>
                                            <span className="text-[10px] text-gray-400">{t.header.phone}</span>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-[var(--outline)] hover:bg-[var(--surface-variant)] transition-all text-[var(--on-surface)]"
                            aria-label="Toggle dark mode"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>

                        {/* Language Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleLang}
                                className={`flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border transition-all
                                    ${langOpen
                                    ? 'bg-[var(--primary-container)] text-[var(--on-primary-container)] border-[var(--primary)] shadow-[var(--elevation-1)]'
                                    : 'border-[var(--outline)] hover:bg-[var(--surface-variant)] text-[var(--on-surface)]'}`}
                                aria-label={t.header.switchLanguage}
                            >
                                <div className="relative w-6 h-4 overflow-hidden rounded-sm shadow-sm border border-black/5">
                                    <Image
                                        src={languages.find(l => l.code === lang)?.flag}
                                        alt={lang}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </button>

                            {langOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={closeLang}></div>
                                    <div
                                        className="absolute top-full right-0 mt-3 w-40 bg-[var(--surface-container-high)] rounded-2xl border border-[var(--outline-variant)] shadow-2xl py-2 animate-scale-in z-20 overflow-hidden"
                                    >
                                        {languages.map((l) => (
                                            <button
                                                key={l.code}
                                                onClick={() => {
                                                    changeLang(l.code);
                                                    closeLang();
                                                }}
                                                className={`w-full px-4 py-3 text-left text-sm transition-all flex items-center group
                                                    ${lang === l.code
                                                    ? 'bg-[var(--primary-container)] text-[var(--on-primary-container)]'
                                                    : 'text-[var(--on-surface)] hover:bg-[var(--surface-variant)]'}`}
                                            >
                                                <div className="relative w-6 h-4 mr-3 overflow-hidden rounded-sm shadow-sm border border-black/5 group-hover:scale-110 transition-transform">
                                                    <Image
                                                        src={l.flag}
                                                        alt={l.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <span className="font-bold">{l.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <Link
                            href={`/${lang}/contact`}
                            className="hidden sm:flex items-center px-6 py-2.5 bg-[var(--primary)] text-[var(--on-primary)] rounded-full hover:shadow-[var(--elevation-2)] active:scale-95 transition-all label-large font-bold"
                        >
                            {t.header.contact}
                        </Link>

                        <button
                            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full text-[var(--on-surface)]"
                            onClick={toggleMobileMenu}
                        >
                            <span className="material-symbols-outlined">
                                {mobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 top-16 bg-[var(--surface)] z-[90] md:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
                                    onClick={(e) => handleAnchorClick(e, closeMobileMenu)}
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
                                onClick={closeMobileMenu}
                                className="text-2xl font-medium text-[var(--on-surface)] py-2 border-b border-[var(--surface-variant)]"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href={`/${lang}/contact`}
                        className="mt-4 flex items-center justify-center w-full py-4 bg-eteq-gradient text-white rounded-2xl font-bold text-lg"
                        onClick={closeMobileMenu}
                    >
                        {t.header.contact}
                    </Link>
                </nav>
            </div>
        </header>
    );
}