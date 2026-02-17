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
        {name: t.header.about, href: `/${lang}/about`, icon: "info"},
        {name: t.header.services, href: `/${lang}/services`, icon: "engineering"},
        {name: t.header.blog, href: `/${lang}/blog`, icon: "article"},
        {name: t.header.bio, href: `/${lang}#bio`, icon: "person"},
        {name: t.header.industries, href: `/${lang}#industries`, icon: "factory"},
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-[cubic-bezier(0.2,0.0,0,1.0)] 
            ${scrolled
                ? 'h-16 bg-[var(--surface-container)] shadow-[var(--elevation-2)]'
                : 'h-20 bg-transparent'}`}
        >
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href={`/${lang}`} className="flex items-center gap-3 group">
                        <div
                            className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-eteq-gradient flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                            <span className="text-white font-bold text-xl">E</span>
                            <div
                                className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-colors"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-title-medium font-bold text-[var(--on-surface)] tracking-wide">ETEQ</span>
                            <span
                                className="text-[10px] uppercase tracking-[0.2em] text-[var(--on-surface-variant)] font-medium leading-none">Engineering Excellence</span>
                        </div>
                    </Link>

                    <nav
                        className="hidden md:flex items-center gap-1 bg-[var(--surface-container-low)]/50 p-1.5 rounded-full border border-[var(--outline-variant)]/20 backdrop-blur-sm">
                        {navLinks.map((link) => {
                            const isAnchor = link.href.includes('#');
                            const isActive = pathname === link.href;

                            const linkClasses = `relative flex items-center px-4 py-1.5 rounded-full text-label-large transition-all duration-200 overflow-hidden group
                                ${isActive
                                ? 'bg-[var(--secondary-container)] text-[var(--on-secondary-container)] shadow-sm'
                                : 'text-[var(--on-surface-variant)] hover:text-[var(--on-surface)] hover:bg-[var(--on-surface)]/8'}`;

                            if (isAnchor && isHome) {
                                const hash = link.href.substring(link.href.indexOf('#'));
                                return (
                                    <a
                                        key={link.name}
                                        href={hash}
                                        onClick={(e) => handleAnchorClick(e)}
                                        className={linkClasses}
                                    >
                                        <span
                                            className={`material-symbols-outlined mr-2 text-[18px] ${isActive ? 'fill-1' : ''}`}>{link.icon}</span>
                                        {link.name}
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={linkClasses}
                                >
                                    <span
                                        className={`material-symbols-outlined mr-2 text-[18px] ${isActive ? 'fill-1' : ''}`}>{link.icon}</span>
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="relative" ref={contactRef}>
                            <button
                                onClick={toggleContact}
                                className={`group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden transition-all duration-200
            ${contactOpen
                                    ? 'bg-[var(--primary)] text-[var(--on-primary)]'
                                    : 'text-[var(--on-surface-variant)] hover:bg-[var(--on-surface)]/8 hover:text-[var(--on-surface)]'}`}
                                aria-label="Quick contact options"
                            >
                                <span
                                    className={`material-symbols-outlined text-2xl ${contactOpen ? 'fill-1' : ''}`}>contact_support</span>
                            </button>

                            {contactOpen && (
                                <>
                                    <div className="fixed inset-0 bg-black/20 z-[105] md:hidden"
                                         onClick={closeContact}/>
                                    <div
                                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-[288px]
                           md:absolute md:inset-auto md:top-full md:right-0 md:translate-x-0 md:translate-y-0 md:w-72 md:mt-2
                           bg-[var(--surface-container-high)] rounded-[28px] shadow-[var(--elevation-3)] p-2
                           animate-scale-in z-[110] origin-center md:origin-top-right overflow-hidden border border-[var(--outline-variant)]/20"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="px-4 py-3 pb-2">
                    <span
                        className="text-label-small uppercase tracking-wider text-[var(--primary)] font-bold opacity-80">
                        {t.header.quickContact}
                    </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <button
                                                onClick={() => {
                                                    window.location.href = `mailto:${t.header.email}`;
                                                    closeContact();
                                                }}
                                                className="w-full px-4 py-3 flex items-center gap-4 rounded-[20px] hover:bg-[var(--on-surface)]/8 transition-colors group text-left"
                                            >
                                                <div
                                                    className="w-10 h-10 rounded-full bg-[var(--tertiary-container)] text-[var(--on-tertiary-container)] flex items-center justify-center group-hover:scale-105 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span
                                                        className="text-body-large font-medium text-[var(--on-surface)]">{t.header.sendEmail}</span>
                                                    <span
                                                        className="text-body-small text-[var(--on-surface-variant)]">{t.header.email}</span>
                                                </div>
                                            </button>
                                            <button
                                                onClick={() => {
                                                    window.location.href = `tel:${t.header.phone.replace(/\s/g, '')}`;
                                                    closeContact();
                                                }}
                                                className="w-full px-4 py-3 flex items-center gap-4 rounded-[20px] hover:bg-[var(--on-surface)]/8 transition-colors group text-left"
                                            >
                                                <div
                                                    className="w-10 h-10 rounded-full bg-[var(--secondary-container)] text-[var(--on-secondary-container)] flex items-center justify-center group-hover:scale-105 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px]">call</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span
                                                        className="text-body-large font-medium text-[var(--on-surface)]">{t.header.callUs}</span>
                                                    <span
                                                        className="text-body-small text-[var(--on-surface-variant)]">{t.header.phone}</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-[var(--on-surface-variant)] hover:bg-[var(--on-surface)]/8 hover:text-[var(--on-surface)] transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            <span className={`material-symbols-outlined text-2xl ${isDark ? 'fill-1' : ''}`}>
                                {isDark ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>

                        <div className="relative">
                            <button
                                onClick={toggleLang}
                                className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all 
                                    ${langOpen
                                    ? 'bg-[var(--primary-container)] text-[var(--on-primary-container)]'
                                    : 'text-[var(--on-surface-variant)] hover:bg-[var(--on-surface)]/8 hover:text-[var(--on-surface)]'}`}
                                aria-label={t.header.switchLanguage}
                            >
                                <div
                                    className="relative w-6 h-6 rounded-full overflow-hidden shadow-sm border border-[var(--outline-variant)]">
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
                                        className="absolute top-full right-0 mt-2 w-44 bg-[var(--surface-container-high)] rounded-[20px] shadow-[var(--elevation-3)] py-2 animate-scale-in z-20 overflow-hidden origin-top-right border border-[var(--outline-variant)]/20"
                                    >
                                        {languages.map((l) => (
                                            <button
                                                key={l.code}
                                                onClick={() => {
                                                    changeLang(l.code);
                                                    closeLang();
                                                }}
                                                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors
                                                    ${lang === l.code
                                                    ? 'bg-[var(--secondary-container)] text-[var(--on-secondary-container)]'
                                                    : 'text-[var(--on-surface)] hover:bg-[var(--on-surface)]/8'}`}
                                            >
                                                <div
                                                    className="relative w-6 h-4 overflow-hidden rounded-[4px] shadow-sm border border-[var(--outline)]/20">
                                                    <Image
                                                        src={l.flag}
                                                        alt={l.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <span className="text-label-large font-medium">{l.name}</span>
                                                {lang === l.code && <span
                                                    className="material-symbols-outlined text-[18px] ml-auto">check</span>}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="hidden sm:block h-8 w-[1px] bg-[var(--outline-variant)] mx-1"></div>

                        <Link
                            href={`/${lang}/contact`}
                            className="hidden sm:flex items-center px-6 py-2.5 bg-[var(--primary)] text-[var(--on-primary)] rounded-full hover:shadow-md hover:bg-[var(--primary)]/90 active:scale-[0.98] transition-all text-label-large font-bold"
                        >
                            {t.header.contact}
                        </Link>

                        <button
                            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors 
                                ${mobileMenuOpen ? 'bg-[var(--secondary-container)] text-[var(--on-secondary-container)]' : 'text-[var(--on-surface)]'}`}
                            onClick={toggleMobileMenu}
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {mobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-x-0 top-[64px] bottom-0 bg-[var(--surface-container)] z-[90] md:hidden transition-transform duration-300 ease-[cubic-bezier(0.2,0.0,0,1.0)] origin-top ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col p-6 gap-2">
                    {navLinks.map((link) => {
                        const isAnchor = link.href.includes('#');

                        const mobileLinkClasses = "flex items-center p-4 rounded-[16px] text-title-medium text-[var(--on-surface)] active:bg-[var(--surface-variant)] transition-colors";

                        if (isAnchor && isHome) {
                            const hash = link.href.substring(link.href.indexOf('#'));
                            return (
                                <a
                                    key={link.name}
                                    href={hash}
                                    onClick={(e) => handleAnchorClick(e, closeMobileMenu)}
                                    className={mobileLinkClasses}
                                >
                                    <span
                                        className="material-symbols-outlined mr-4 text-[24px] text-[var(--primary)]">{link.icon}</span>
                                    {link.name}
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className={mobileLinkClasses}
                            >
                                <span
                                    className="material-symbols-outlined mr-4 text-[24px] text-[var(--primary)]">{link.icon}</span>
                                {link.name}
                            </Link>
                        );
                    })}
                    <div className="h-[1px] bg-[var(--outline-variant)] my-2 opacity-50"></div>
                    <Link
                        href={`/${lang}/contact`}
                        className="mt-2 flex items-center justify-center w-full py-4 bg-[var(--primary)] text-[var(--on-primary)] rounded-[20px] font-bold text-lg shadow-sm active:scale-[0.98] transition-transform"
                        onClick={closeMobileMenu}
                    >
                        {t.header.contact}
                    </Link>
                </nav>
            </div>
        </header>
    );
}