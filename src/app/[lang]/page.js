import {useTranslation} from "@/lib/i18n/useTranslation";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBuilders from '@/components/TrustBuilders';
import ServicesPreview from '@/components/ServicesPreview';
import WhyChooseETEQ from '@/components/WhyChooseETEQ';
import FounderSpotlight from '@/components/FounderSpotlight';
import IndustriesServed from '@/components/IndustriesServed';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Certifications from '@/components/Certifications';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export async function generateMetadata({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    return {
        title: `ETEQ | ${t.hero.title}`,
        description: t.hero.subtitle,
        alternates: {
            canonical: `/${lang}`,
            languages: {
                'en': '/en',
                'ja': '/ja',
                'x-default': '/en',
            },
        },
    };
}

export default async function HomePage({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);

    return (
        <main className={lang === 'ja' ? 'font-noto' : 'font-poppins'}>
            <Header t={t} lang={lang}/>
            <div className="flex flex-col">
                <Hero t={t}/>
                <TrustBuilders t={t}/>
                <ServicesPreview t={t}/>
                <WhyChooseETEQ t={t}/>
                <FounderSpotlight t={t}/>
                <IndustriesServed t={t}/>
                <ExperienceTimeline t={t}/>
                <Certifications t={t}/>
                <FinalCTA t={t} lang={lang}/>
            </div>
            <Footer t={t}/>
        </main>
    );
}
