export const languages = [
    { code: 'en', label: 'EN', name: 'English', flag: '/flags/en.png', font: 'font-poppins' },
    { code: 'ja', label: 'JP', name: '日本語', flag: '/flags/ja.png', font: 'font-noto' },
    { code: 'de', label: 'DE', name: 'Deutsch', flag: '/flags/de.png', font: 'font-poppins' },
    { code: 'fr', label: 'FR', name: 'Français', flag: '/flags/fr.png', font: 'font-poppins' },
];

export const defaultLanguage = 'en';

export const getLanguage = (code) => languages.find(l => l.code === code) || languages.find(l => l.code === defaultLanguage);

export const getFontClass = (code) => getLanguage(code).font;
