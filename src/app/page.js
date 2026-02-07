'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLanguage } from '@/lib/i18n/config';
import Loader from '@/components/Loader';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        const savedLang = localStorage.getItem('preferred-lang') || defaultLanguage;
        router.replace(`/${savedLang}`);
    }, [router]);

    return <Loader />;
}
