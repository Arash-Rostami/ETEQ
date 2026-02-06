import {useTranslation} from '@/lib/i18n/useTranslation';
import AdminContactsClient from '@/components/AdminContactsClient';

export default async function AdminContactsPage({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);

    return <AdminContactsClient
        t={t}
        lang={lang}
    />;
}