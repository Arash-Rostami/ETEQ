'use client';

import {useEffect, useState} from 'react';
import {useParams, usePathname, useRouter} from 'next/navigation';

import {defaultLanguage, languages} from '@/lib/i18n/config';

export function useLingo() {
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();
    const [lang, setLang] = useState(params.lang || defaultLanguage);

    useEffect(() => {
        if (params.lang && params.lang !== lang) setLang(params.lang);
    }, [params.lang]);

    useEffect(() => {
        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const changeLang = (newLang) => {
        if (newLang === lang) return;

        setLang(newLang);
        localStorage.setItem('preferred-lang', newLang);

        const segments = pathname.split('/');
        if (languages.some(l => l.code === segments[1])) segments[1] = newLang;
        router.push(segments.join('/'));
    };

    return {lang, changeLang, languages};
}