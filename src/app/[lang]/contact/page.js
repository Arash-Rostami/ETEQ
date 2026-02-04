import {useTranslation} from "@/lib/i18n/useTranslation";
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    return {
        title: `ETEQ - ${t.contactPage.title}`,
        description: t.contactPage.intro,
        alternates: {
            canonical: `/${lang}/contact`,
            languages: {
                'en': '/en/contact',
                'ja': '/ja/contact',
            },
        },
        openGraph: {
            title: `ETEQ - ${t.contactPage.title}`,
            description: t.contactPage.intro,
            url: `/${lang}/contact`,
            siteName: 'ETEQ Engineering',
            locale: lang === 'ja' ? 'ja_JP' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `ETEQ - ${t.contactPage.title}`,
            description: t.contactPage.intro,
        },
    };
}

export default async function ContactPage({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    const page = t.contactPage;

    return (
        <main className={lang === 'ja' ? 'font-noto' : 'font-poppins'}>
            <Header t={t} lang={lang}/>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--surface-container)]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl animate-slide-up">
                        <nav className="flex items-center space-x-2 text-[var(--primary)] label-large mb-8">
                            <Link href={`/${lang}`} className="hover:underline">Home</Link>
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                            <span>{page.title}</span>
                        </nav>
                        <h1 className="display-large text-[var(--on-surface)] mb-8">
                            {page.title}
                        </h1>
                        <p className="body-large text-[var(--on-surface-variant)] text-xl leading-relaxed mb-12">
                            {page.intro}
                        </p>
                        <div className="h-1.5 bg-eteq-gradient w-32 rounded-full"></div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div
                    className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-purple)]/10 to-transparent -z-10"></div>
                <div
                    className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--color-coral)]/5 rounded-full blur-3xl -z-10"></div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-24 bg-[var(--background)]">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Form Column */}
                        <div className="lg:col-span-2 animate-slide-up">
                            <ContactForm t={t} lang={lang}/>
                        </div>

                        {/* Info Column */}
                        <div className="space-y-12 animate-slide-up delay-200">
                            <div>
                                <h2 className="headline-large text-[var(--on-surface)] mb-6">{page.info.title}</h2>
                                <p className="body-large text-[var(--on-surface-variant)] leading-relaxed">
                                    {page.info.description}
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-12 h-12 rounded-2xl bg-[var(--primary-container)] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="label-large text-[var(--on-surface-variant)] mb-1">{page.info.email}</p>
                                        <a href={`mailto:${t.header.email}`}
                                           className="headline-small text-[var(--on-surface)] hover:text-[var(--primary)] transition-colors">
                                            {t.header.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-12 h-12 rounded-2xl bg-[var(--tertiary-container)] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <p className="label-large text-[var(--on-surface-variant)] mb-1">{page.info.phone}</p>
                                        <a href={`tel:${t.header.phone.replace(/\s/g, '')}`}
                                           className="headline-small text-[var(--on-surface)] hover:text-[var(--primary)] transition-colors">
                                            {t.header.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-12 h-12 rounded-2xl bg-[var(--secondary-container)] text-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="label-large text-[var(--on-surface-variant)] mb-1">{page.info.location}</p>
                                        <p className="headline-small text-[var(--on-surface)]">
                                            {t.footer.location}
                                        </p>
                                    </div>
                                </div>
                                <small className="animate-pulse text-[var(--on-surface-variant)] ">
                                    <sub className="material-symbols-outlined text-xs">schedule</sub>
                                    <span className="italic">{page.info.response}</span>
                                </small>
                            </div>

                            {/* Trust Badge / Stat Highlight */}
                            <div
                                className="p-8 rounded-[var(--shape-extra-large)] bg-eteq-gradient text-white shadow-[var(--elevation-3)]">
                                <span className="material-symbols-outlined text-4xl mb-4">verified</span>
                                <p className="headline-small font-bold mb-2">35+ Years</p>
                                <p className="body-large opacity-90">Of senior engineering leadership delivered directly
                                    to you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Additional Professional Section - Proven Results Preview */}
            <section className="py-24 bg-[var(--surface-container)]">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="display-medium text-[var(--on-surface)] mb-4">{t.trustBuilders.title}</h2>
                        <div className="h-1.5 w-24 bg-eteq-gradient mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {t.trustBuilders.stats.slice(0, 6).map((stat, index) => (
                            <div
                                key={index}
                                className="bg-[var(--surface)] p-6 rounded-[var(--shape-extra-large)] shadow-[var(--elevation-1)] text-center animate-fade-in"
                                style={{animationDelay: `${index * 100}ms`}}
                            >
                                <div className="text-[var(--primary)] mb-2">
                                    <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                                </div>
                                <div
                                    className="headline-small font-bold text-[var(--on-surface)] mb-1">{stat.value}</div>
                                <div
                                    className="label-small text-[var(--on-surface-variant)] uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer t={t} lang={lang}/>
        </main>
    );
}
