'use client';

import {useState} from 'react';
import {useShare} from '@/hooks/useShare';
import {useLingo} from '@/hooks/useLingo';
import Modal from '@/components/Modal';

export default function Footer({t}) {
    const {isOpen: shareOpen, message: shareMessage, toggle: toggleShare, close: closeShare, share} = useShare(t);
    const {lang, toggle: toggleLanguage} = useLingo();
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    const quickLinks = [
        {href: "#services", label: t.header.services, icon: "engineering"},
        {href: "#about", label: t.header.about, icon: "info"},
        {href: `/${lang}/bio`, label: t.header.bio, icon: "person"},
        {href: "#industries", label: t.header.industries, icon: "factory"},
        {href: `/${lang}/contact`, label: t.header.contact, icon: "mail"}
    ];

    return (
        <>
            <footer className="bg-eteq-gradient-footer text-white pt-20 pb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                        {/* Col 1: Logo & Tagline */}
                        <div className="space-y-6">
                            <div
                                className="text-3xl font-bold bg-gradient-to-r from-[#FF7F6E] to-[#7B5C9D] bg-clip-text text-transparent">
                                ETEQ
                            </div>
                            <p className="text-gray-400 leading-relaxed max-w-xs">
                                {t.footer.tagline}
                            </p>

                            {/* Share Button */}
                            <div className="relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleShare();
                                    }}
                                    className="group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#FF7F6E] hover:to-[#7B5C9D] transition-all duration-300 border border-white/10 hover:border-transparent hover:scale-110 shadow-lg hover:shadow-[#FF7F6E]/20"
                                >
                                    <span
                                        className="material-symbols-outlined text-sm group-hover:text-white transition-colors">share</span>
                                </button>

                                {shareOpen && (
                                    <div
                                        className="absolute bottom-full left-0 mb-2 w-48 rounded-[var(--shape-large)] border border-white/10 py-2 animate-fade-in"
                                        style={{
                                            backgroundColor: 'var(--custom-color)',
                                            boxShadow: 'var(--elevation-5)'
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {shareMessage ? (
                                            <div className="px-4 py-3 text-sm flex items-center"
                                                 style={{color: 'var(--color-vibrant-green)'}}>
                                                <span
                                                    className="material-symbols-outlined text-sm mr-2">check_circle</span>
                                                {shareMessage}
                                            </div>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => share('native')}
                                                    className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center"
                                                >
                                                    <span className="material-symbols-outlined text-sm mr-3"
                                                          style={{color: 'var(--color-coral)'}}>share_windows</span>
                                                    {t.footer.share.title}
                                                </button>
                                                <button
                                                    onClick={() => share('copy')}
                                                    className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center"
                                                >
                                                    <span className="material-symbols-outlined text-sm mr-3"
                                                          style={{color: 'var(--color-purple)'}}>content_copy</span>
                                                    {t.footer.share.copyLink}
                                                </button>
                                                <button
                                                    onClick={() => share('email')}
                                                    className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center"
                                                >
                                                    <span className="material-symbols-outlined text-sm mr-3"
                                                          style={{color: 'var(--color-coral)'}}>email</span>
                                                    {t.footer.share.sendEmail}
                                                </button>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Col 2: Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 flex items-center">
                                <span className="material-symbols-outlined mr-2 text-[#FF7F6E] text-xl">link</span>
                                {t.footer.quickLinks}
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center text-gray-400 hover:text-[#FF7F6E] transition-all duration-300 py-1"
                                        >
                                            <span
                                                className="material-symbols-outlined mr-3 text-sm text-gray-500 group-hover:text-[#FF7F6E] transition-colors">
                                                {link.icon}
                                            </span>
                                            <span
                                                className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.label}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Contact Info */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 flex items-center">
                                <span
                                    className="material-symbols-outlined mr-2 text-[#FF7F6E] text-xl">contact_mail</span>
                                {t.footer.contactInfo}
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-center group">
                                    <div
                                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-[#FF7F6E]/20 transition-colors">
                                        <span className="material-symbols-outlined text-[#FF7F6E] text-sm">mail</span>
                                    </div>
                                    <a href={`mailto:${t.header.email}`} className="hover:text-white transition-colors">
                                        {t.header.email}
                                    </a>
                                </li>
                                <li className="flex items-center group">
                                    <div
                                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-[#00B8D4]/20 transition-colors">
                                        <span className="material-symbols-outlined text-[#00B8D4] text-sm">call</span>
                                    </div>
                                    <a href={`tel:${t.header.phone.replace(/\s/g, '')}`}
                                       className="hover:text-white transition-colors">
                                        {t.header.phone}
                                    </a>
                                </li>
                                <li className="flex items-center group">
                                    <div
                                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-[#7B5C9D]/20 transition-colors">
                                        <span
                                            className="material-symbols-outlined text-[#7B5C9D] text-sm">location_on</span>
                                    </div>
                                    <span>{t.footer.location}</span>
                                </li>
                            </ul>
                        </div>

                        {/* Col 4: Language & Follow */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 flex items-center">
                                <span className="material-symbols-outlined mr-2 text-[#FF7F6E] text-xl">language</span>
                                {t.footer.followUs}
                            </h4>
                            <p className="text-gray-400 text-sm mb-6 italic border-l-2 border-[#FF7F6E]/30 pl-4">
                                {t.footer.missionStatement}
                            </p>

                            {/* Animated Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="group relative inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className={`
                                    absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[#FF7F6E] to-[#7B5C9D] shadow-lg transition-all duration-500 ease-out
                                    ${lang === 'ja' ? 'translate-x-full' : 'translate-x-0'}
                                `}></div>
                                <span className={`
                                    relative z-10 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300 w-16 text-center
                                    ${lang === 'en' ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}
                                `}>
                                    EN
                                </span>
                                <span className={`
                                    relative z-10 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300 w-16 text-center
                                    ${lang === 'ja' ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}
                                `}>
                                    JP
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="relative mt-16 pt-8">
                        <div
                            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7F6E] to-transparent opacity-50"></div>

                        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                            <div className="flex items-center space-x-4 group cursor-default">
                                <div
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7F6E] to-[#7B5C9D] flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition-transform">
                                    E
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-light">Engineering Excellence</span>
                                    <p className="text-sm text-gray-400">
                                        © {new Date().getFullYear()}
                                        <span
                                            className="inline-flex items-baseline gap-1.5 mx-1.5 px-2 py-0.5 rounded bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500">
                                            <span
                                                className="font-bold bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse">ETEQ</span>
                                            <span className="text-[8px] text-blue-400/60 font-mono">v1.0</span>
                                        </span>
                                        {t.footer.rights}
                                    </p>
                                </div>
                            </div>

                            <div className="hidden lg:flex flex-col items-center space-y-2 relative top-4">
                                <div className="flex space-x-2">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i}
                                             className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-[#FF7F6E] transition-colors duration-300"></div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-gray-500 font-mono tracking-wide group cursor-help"
                                   title="Crafted with precision">
                                    <span className="opacity-60">{'<'}</span>
                                    <span
                                        className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-700 font-semibold">
                                        A. Rostami
                                    </span>
                                    <span className="opacity-60">{' />'}</span>
                                </p>
                            </div>

                            <div className="flex space-x-4">
                                <button
                                    onClick={() => setShowPrivacy(true)}
                                    className="group relative px-6 py-2.5 text-sm text-gray-400 overflow-hidden rounded-full border border-white/10 hover:border-[#FF7F6E]/30 transition-colors duration-300 hover:text-white"
                                >
                                    <span className="relative z-10">{t.footer.privacyPolicy}</span>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-[#FF7F6E]/0 via-[#FF7F6E]/10 to-[#FF7F6E]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                </button>
                                <button
                                    onClick={() => setShowTerms(true)}
                                    className="group relative px-6 py-2.5 text-sm text-gray-400 overflow-hidden rounded-full border border-white/10 hover:border-[#7B5C9D]/30 transition-colors duration-300 hover:text-white"
                                >
                                    <span className="relative z-10">{t.footer.termsOfService}</span>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-[#7B5C9D]/0 via-[#7B5C9D]/10 to-[#7B5C9D]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Modals */}
            <Modal
                isOpen={showPrivacy}
                onClose={() => setShowPrivacy(false)}
                title={t.footer.privacyPolicyTitle}
                content={t.footer.privacyPolicyContent}
                lang={lang}
            />

            <Modal
                isOpen={showTerms}
                onClose={() => setShowTerms(false)}
                title={t.footer.termsOfServiceTitle}
                content={t.footer.termsOfServiceContent}
                lang={lang}
            />
        </>
    );
}