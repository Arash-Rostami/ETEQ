'use client';

import Link from 'next/link';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header({ t }) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState(params.lang || 'en');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang && savedLang !== lang) {
      // If we wanted to auto-redirect, we could do it here
      // but for now let's just keep it consistent with the URL
    }
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ja' : 'en';
    setLang(newLang);
    localStorage.setItem('preferred-lang', newLang);

    // Redirect to the new locale
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF7F6E] via-[#7B5C9D] to-[#2E4C8B] bg-clip-text text-transparent">
                ETEQ
              </span>
              <span className="hidden sm:block text-xs font-medium text-gray-500 tracking-widest uppercase">
                Engineering
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-[#7B5C9D] transition-colors font-medium">{t.header.services}</a>
            <a href="#about" className="text-gray-600 hover:text-[#7B5C9D] transition-colors font-medium">{t.header.about}</a>
            <a href="#industries" className="text-gray-600 hover:text-[#7B5C9D] transition-colors font-medium">{t.header.industries}</a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center space-x-4">
            <a href={`mailto:${t.header.email}`} className="hidden lg:flex items-center text-gray-600 hover:text-[#2E4C8B] transition-colors">
              <span className="material-symbols-outlined mr-1 text-xl">mail</span>
              <span className="text-sm font-medium">{t.header.email}</span>
            </a>

            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-50 transition-all text-sm font-bold text-gray-700"
              aria-label={lang === 'en' ? 'Switch to Japanese' : 'Switch to English'}
            >
              {lang === 'en' ? 'JP' : 'EN'}
            </button>

            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center px-5 py-2 border-2 border-[#7B5C9D] rounded-full text-[#7B5C9D] hover:bg-[#7B5C9D] hover:text-white transition-all font-bold text-sm shadow-sm"
            >
              {t.header.contact}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
