export default function Footer({ t, lang }) {
    return (
        <footer className="bg-[#2C3E50] text-white pt-20 pb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Col 1: Logo & Tagline */}
                    <div className="space-y-6">
                        <div className="text-3xl font-bold bg-gradient-to-r from-[#FF7F6E] to-[#7B5C9D] bg-clip-text text-transparent">
                            ETEQ
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-xs">
                            {t.footer.tagline}
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                                <span className="material-symbols-outlined text-sm">share</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">{t.footer.quickLinks}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#services" className="hover:text-[#FF7F6E] transition-colors">{t.header.services}</a></li>
                            <li><a href="#about" className="hover:text-[#FF7F6E] transition-colors">{t.header.about}</a></li>
                            <li><a href="#industries" className="hover:text-[#FF7F6E] transition-colors">{t.header.industries}</a></li>
                            <li><a href="#contact" className="hover:text-[#FF7F6E] transition-colors">{t.header.contact}</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">{t.footer.contactInfo}</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center">
                                <span className="material-symbols-outlined mr-3 text-[#FF7F6E]">mail</span>
                                <a href={`mailto:${t.header.email}`} className="hover:text-white transition-colors">{t.header.email}</a>
                            </li>
                            <li className="flex items-center">
                                <span className="material-symbols-outlined mr-3 text-[#FF7F6E]">location_on</span>
                                <span>Tokyo, Japan</span>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Language & Follow */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">{t.footer.followUs}</h4>
                        <p className="text-gray-400 text-sm mb-6 italic">
                            Empowering industry through strategic excellence and sustainable innovation.
                        </p>
                        <div className="inline-block px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-400">
                            {lang === 'en' ? 'English (Global)' : '日本語 (日本)'}
                        </div>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
                    <p>© {new Date().getFullYear()} ETEQ Engineering Consultancy. {t.footer.rights}</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
