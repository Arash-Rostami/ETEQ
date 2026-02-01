'use client';

import {useEffect, useState} from 'react';
import {useParams, usePathname, useRouter} from 'next/navigation';

export function useLingo() {
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();
    const [lang, setLang] = useState(params.lang || 'en');

    useEffect(() => {
        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const toggle = () => {
        const next = lang === 'en' ? 'ja' : 'en';
        setLang(next);
        localStorage.setItem('preferred-lang', next);
        router.push(pathname.replace(`/${lang}`, `/${next}`));
    };

    return {lang, toggle};
}