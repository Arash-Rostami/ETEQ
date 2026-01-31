import {en} from '@/lib/i18n/en';
import {ja} from '@/lib/i18n/ja';

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
    const t = lang === 'ja' ? ja : en;
    return {
        title: `ETEQ - ${t.hero.title.substring(0, 50)}...`,
        description: t.hero.subtitle,
    };
}

export default async function HomePage({params}) {
    const {lang} = await params;
    const t = lang === 'ja' ? ja : en;

    return (
        <main className={lang === 'ja' ? 'font-noto' : 'font-poppins'}>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
            />

            {/* Smooth Scroll and Custom Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
        html {
          scroll-behavior: smooth;
        }
        section {
          scroll-margin-top: 80px;
        }
        .font-poppins {
          font-family: var(--font-poppins), sans-serif;
        }
        .font-noto {
          font-family: var(--font-noto-sans-jp), sans-serif;
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-flow 15s ease infinite;
        }
      `
            }}/>

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
                <FinalCTA t={t}/>
            </div>

            <Footer t={t} lang={lang}/>
        </main>
    );
}
