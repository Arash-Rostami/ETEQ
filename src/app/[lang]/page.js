import Link from 'next/link';
import { en } from '@/lib/i18n/en';
import { ja } from '@/lib/i18n/ja';

const translations = { en, ja };

export default function Home({ params }) {
    const locale = params?.lang || 'en';
    const t = translations[locale] || translations.en;

    // Stats data with translations
    const stats = [
        { value: '76%', label: t.stats?.co2 || 'CO₂ Reduction' },
        { value: '17%', label: t.stats?.energy || 'Energy Savings' },
        { value: '20%', label: t.stats?.cost || 'Cost Reduction' },
        { value: '0', label: t.stats?.audit || 'Audit Findings' }
    ];

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-flow opacity-10 dark:opacity-5"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-float delay-300"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 dark:bg-darkNavy/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-8 animate-fade-in">
                            <div className="w-2 h-2 bg-vibrantGreen rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">{t.stats?.leadership || '35 Years Leadership'}</span>
                        </div>

                        <h1 className="heading-1 mb-6 animate-fade-in-up">
                            <span className="gradient-text">{t.hero?.title || 'Default Title'}</span>
                        </h1>

                        <p className="heading-4 text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-up delay-100">
                            {t.hero?.subtitle || 'Default Subtitle'}
                        </p>

                        <p className="body-large text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
                            {t.hero?.description || 'Default description text here.'}
                        </p>

                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-400">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-flow text-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="heading-2 mb-6">
                            {t.cta?.title || 'Ready to Transform Your Operations?'}
                        </h2>
                        <p className="body-large mb-10 opacity-90">
                            {t.cta?.description || 'Get direct access to 35+ years of proven engineering leadership.'}
                        </p>
                        {/*<Link href={`/${locale}/contact`} className="inline-flex btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">*/}
                        {/*    {t.hero?.cta || 'Get Started'}*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </section>
        </>
    );
}