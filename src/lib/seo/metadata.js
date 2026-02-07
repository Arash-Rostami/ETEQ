import {useTranslation} from "@/lib/i18n/useTranslation";

export async function createMetadata({params, key, slug = '', descKey = 'intro', titleSuffix = ''}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    const pageData = t[key];
    const path = slug ? `/${slug}` : '';

    return {
        title: `ETEQ | ${pageData.title}${titleSuffix}`,
        description: pageData[descKey],
        alternates: {
            languages: {
                'en': `/en${path}`,
                'ja': `/ja${path}`,
            },
        },
    };
}