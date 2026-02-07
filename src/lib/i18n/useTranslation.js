const translation = {
    en: () => import("@/lib/i18n/en").then((module) => module.en),
    ja: () => import("@/lib/i18n/ja").then((module) => module.ja),
    de: () => import("@/lib/i18n/de").then((module) => module.de),
    fr: () => import("@/lib/i18n/fr").then((module) => module.fr),
};

export const useTranslation = async (locale) => {
    return translation[locale]?.() ?? await translation.en();
};