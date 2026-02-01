const translation = {
    en: () => import("@/lib/i18n/en").then((module) => module.en),
    ja: () => import("@/lib/i18n/ja").then((module) => module.ja),
};

export const useTranslation = async (locale) => {
    return translation[locale]?.() ?? await translation.en();
};