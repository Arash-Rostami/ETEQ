import {useTranslation} from '@/lib/i18n/useTranslation';
import AdminContactsClient from '@/components/AdminContactsClient';
import {createMetadata} from "@/lib/seo/metadata";

export async function generateMetadata({params}) {
    const metadata = await createMetadata({
        params,
        key: 'admin',
        slug: 'admin/contacts',
        descKey: 'subtitle'
    });

    return {
        ...metadata,
        robots: {
            index: false,
            follow: false,
        },
    };
}
export default async function AdminContactsPage({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);

    return <AdminContactsClient
        t={t}
        lang={lang}
    />;
}