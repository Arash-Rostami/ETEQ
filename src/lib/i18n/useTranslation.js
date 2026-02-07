import { languages, defaultLanguage } from './config';

const translationMap = Object.fromEntries(
    languages.map(lang => [
        lang.code,
        () => import(`@/lib/i18n/${lang.code}`).then((module) => module[lang.code])
    ])
);

export const useTranslation = async (locale) => {
    const loader = translationMap[locale] || translationMap[defaultLanguage];
    return await loader();
};