'use client';

import Link from 'next/link';

export default function Footer({ t, lang }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1B1B1F] text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Logo & Tagline */}
                    <div className="flex flex-col space-y-6">
                        <Link href={`/${lang}`} className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-xl bg-eteq-gradient flex items-center justify-center">
                                <span className="text-white font-bold text-xl">E</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">ETEQ</span>
                        </Link>
                        <p className="body-large text-gray-400 leading-relaxed">
                            {t.footer.tagline}
                        </p>
                        <div className="flex space-x-4">
                            {['linkedin', 'public', 'mail'].map((icon) => (
                                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-eteq-gradient transition-all group">
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-white transition-colors">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="label-large uppercase tracking-[0.2em] text-white font-bold mb-8">{t.footer.quickLinks}</h3>
                        <ul className="space-y-4">
                            {['services', 'about', 'industries', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-block">
                                        {t.header[item] || item.charAt(0).toUpperCase() + item.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="label-large uppercase tracking-[0.2em] text-white font-bold mb-8">{t.footer.contactInfo}</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <span className="material-symbols-outlined text-[var(--color-coral)]">mail</span>
                                <span className="text-gray-400">{t.header.email}</span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <span className="material-symbols-outlined text-[var(--color-purple)]">location_on</span>
                                <span className="text-gray-400">Tokyo, Japan<br/>Minato-ku, Engineering District</span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <span className="material-symbols-outlined text-[var(--color-bright-cyan)]">phone</span>
                                <span className="text-gray-400">+81 (0) 3-XXXX-XXXX</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/CTA */}
                    <div>
                        <h3 className="label-large uppercase tracking-[0.2em] text-white font-bold mb-8">{t.footer.stayConnected}</h3>
                        <p className="text-sm text-gray-400 mb-6">{t.footer.newsletter}</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder={t.footer.emailPlaceholder}
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                            />
                            <button className="absolute right-1 top-1 w-10 h-10 rounded-full bg-eteq-gradient flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-xl">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
                    <div>© {currentYear} ETEQ Engineering Strategic Consulting. {t.footer.rights}</div>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
                        <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
