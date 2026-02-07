import {useTranslation} from "@/lib/i18n/useTranslation";
import {languages} from "@/lib/i18n/config";

export async function createMetadata({params, key, slug = '', descKey = 'intro', titleSuffix = ''}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    const pageData = t[key];
    const path = slug ? `/${slug}` : '';

    const languageAlternates = Object.fromEntries(
        languages.map(l => [l.code, `/${l.code}${path}`])
    );

    return {
        title: `ETEQ | ${pageData.title}${titleSuffix}`,
        description: pageData[descKey],
        alternates: {
            languages: {
                ...languageAlternates,
                'x-default': `/en${path}`,
            },
        },
    };
}