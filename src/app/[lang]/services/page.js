import {useTranslation} from "@/lib/i18n/useTranslation";
import Header from '@/components/Header';
import ServiceHighlights from '@/components/ServiceHighlights';
import ServiceGrid from '@/components/ServiceGrid';
import ProcessSteps from '@/components/ProcessSteps';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import {createMetadata} from "@/lib/seo/metadata";
import {getFontClass} from "@/lib/i18n/config";

export async function generateMetadata({params}) {
    return createMetadata({
        params,
        key: 'services',
        slug: 'services',
        descKey: 'subtitle'
    });
}

export default async function ServicesPage({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    const page = t.servicesPage;

    return (
        <main className={getFontClass(lang)}>
            <Header t={t}/>
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--surface-container)]">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--background)] to-[var(--secondary)]/5 -z-10"></div>
                <div className="container mx-auto px-4 text-center">
                    <div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-label-large font-bold mb-6 border border-[var(--primary)]/20 animate-reveal-up">
                        <span className="material-symbols-outlined mr-2 text-[20px]">engineering</span>
                        {page.title}
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <h6 className="display-medium text-[var(--on-surface)] mb-6 animate-reveal-up"
                            style={{animationDelay: '100ms'}}>
                            {page.subtitle}
                        </h6>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent"></div>
            </section>

            <ServiceHighlights t={t}/>
            <ServiceGrid t={t}/>
            <ProcessSteps t={t}/>

            <section className="py-24 bg-[var(--primary)] text-[var(--on-primary)] relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto animate-reveal-up">
                        <p className="display-small mb-10 leading-relaxed font-normal">
                            {page.cta.text}
                        </p>
                        <a href={`/${lang}/contact`}
                           className="inline-flex items-center px-10 py-4 bg-white text-[var(--primary)] rounded-full hover:shadow-[var(--elevation-3)] hover:scale-105 active:scale-95 transition-all font-bold text-lg shadow-lg">
                            {page.cta.button}
                            <span className="material-symbols-outlined ml-2">arrow_forward</span>
                        </a>
                    </div>
                </div>
                <div className="absolute inset-0 bg-eteq-gradient opacity-20 mix-blend-overlay"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            </section>

            <Footer t={t} lang={lang}/>
            <ChatWidget t={t} lang={lang}/>
        </main>
    );
}
