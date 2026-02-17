import {useTranslation} from "@/lib/i18n/useTranslation";
import Header from '@/components/Header';
import TrustBuilders from '@/components/TrustBuilders';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import CompanyTable from '@/components/CompanyTable';
import FounderMessage from '@/components/FounderMessage';
import CompanyValues from '@/components/CompanyValues';
import {createMetadata} from "@/lib/seo/metadata";
import {getFontClass} from "@/lib/i18n/config";
import Link from 'next/link';

export async function generateMetadata({params}) {
    return createMetadata({
        params,
        key: 'about',
        slug: 'about',
        descKey: 'intro'
    });
}

export default async function AboutPage({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    const page = t.aboutPage;

    return (
        <main className={getFontClass(lang)}>
            <Header t={t}/>

            {/* About Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--surface-container)] -z-20"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--primary)]/5 to-transparent -z-10"></div>

                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-reveal-up">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-label-large font-bold mb-6 border border-[var(--primary)]/20">
                            <span className="material-symbols-outlined mr-2 text-[20px]">business</span>
                            {page.title}
                        </div>
                        <h1 className="display-large text-[var(--on-surface)] mb-8 tracking-tight">
                            {page.intro}
                        </h1>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="px-6 py-3 bg-[var(--surface)] shadow-sm rounded-xl border border-[var(--outline)]/10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[var(--primary)]">verified_user</span>
                                <span className="label-large font-medium text-[var(--on-surface)]">35+ Years Experience</span>
                            </div>
                            <div className="px-6 py-3 bg-[var(--surface)] shadow-sm rounded-xl border border-[var(--outline)]/10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[var(--primary)]">groups</span>
                                <span className="label-large font-medium text-[var(--on-surface)]">Expert Team</span>
                            </div>
                            <div className="px-6 py-3 bg-[var(--surface)] shadow-sm rounded-xl border border-[var(--outline)]/10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[var(--primary)]">globe_asia</span>
                                <span className="label-large font-medium text-[var(--on-surface)]">Global Reach</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CompanyTable t={t} />
            <FounderMessage t={t} />
            <TrustBuilders t={t} />
            <CompanyValues t={t} />

            <section className="py-24 bg-[var(--primary)] text-[var(--on-primary)] relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center animate-reveal-up">
                        <span className="material-symbols-outlined text-6xl mb-8 opacity-50">engineering</span>
                        <h2 className="display-medium mb-8">
                            {page.expertise.title}
                        </h2>
                        <p className="body-large text-xl leading-relaxed mb-12 opacity-90">
                            {page.expertise.description}
                        </p>
                        <div className="p-10 rounded-[var(--shape-extra-large)] bg-white/10 backdrop-blur-md border border-white/20 mb-12">
                             <p className="body-large text-lg italic leading-relaxed">
                                "{page.expertise.closing}"
                            </p>
                        </div>
                        <Link
                            href={`/${lang}/contact`}
                            className="inline-flex items-center px-10 py-4 bg-white text-[var(--primary)] rounded-full hover:shadow-[var(--elevation-4)] hover:scale-105 active:scale-95 transition-all font-bold text-lg"
                        >
                            {page.expertise.cta}
                            <span className="material-symbols-outlined ml-2">arrow_forward</span>
                        </Link>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-eteq-gradient opacity-10"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </section>

            <Footer t={t} lang={lang}/>
            <ChatWidget t={t} lang={lang}/>
        </main>
    );
}
