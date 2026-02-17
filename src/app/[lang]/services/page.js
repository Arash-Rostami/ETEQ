import {useTranslation} from "@/lib/i18n/useTranslation";
import Header from '@/components/Header';
import ServiceHighlights from '@/components/ServiceHighlights';
import ServiceGrid from '@/components/ServiceGrid';
import ProcessSteps from '@/components/ProcessSteps';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ImageCarousel from "@/components/ImageCarousel";
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

const SERVICES_IMAGES = [
    { src: '/lab-zoom.png', alt: 'Advanced Laboratory Environment' },
    { src: '/safety.png', alt: 'Safety Standards and Compliance' }
];

export default async function ServicesPage({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    const page = t.servicesPage;

    return (
        <main className={getFontClass(lang)}>
            <Header t={t}/>
            <section className="relative h-[60vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                {/* Background Carousel */}
                <div className="absolute inset-0 z-0">
                    <ImageCarousel t={t} images={SERVICES_IMAGES} />
                </div>

                {/* Overlay for Readability */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Content */}
                <div className="container mx-auto px-4 text-center relative z-20">
                    <div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-label-large font-bold mb-6 border border-white/20 animate-reveal-up shadow-lg">
                        <span className="material-symbols-outlined mr-2 text-[20px]">engineering</span>
                        {page.title}
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <h6 className="display-medium text-white mb-6 animate-reveal-up drop-shadow-lg"
                            style={{animationDelay: '100ms'}}>
                            {page.subtitle}
                        </h6>
                    </div>
                </div>

                {/* Bottom Gradient Transition */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--surface-container)] to-transparent z-20"></div>
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
