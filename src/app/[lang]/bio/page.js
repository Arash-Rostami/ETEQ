import Image from 'next/image';
import {useTranslation} from "@/lib/i18n/useTranslation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {createMetadata} from "@/lib/seo/metadata";


export async function generateMetadata({params}) {
    return createMetadata({
        params,
        key: 'bioPage',
        slug: 'bio',
        descKey: 'subtitle',
        titleSuffix: ' - Dariushi Rosutami'
    });
}

export default async function BioPage({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    const page = t.bioPage;

    return (
        <main className={lang === 'ja' ? 'font-noto' : 'font-poppins'}>
            <Header t={t} lang={lang}/>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--surface-container)]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl animate-reveal-up">
                        <nav className="flex items-center space-x-2 text-[var(--primary)] label-large mb-8">
                            <a href={`/${lang}`} className="hover:underline">Home</a>
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                            <span>{page.title}</span>
                        </nav>
                        <h1 className="display-large text-[var(--on-surface)] mb-4">
                            Dariushi Rosutami
                        </h1>
                        <p className="headline-small text-[var(--primary)] font-medium mb-8">
                            {page.subtitle}
                        </p>
                        <div className="h-1 bg-eteq-gradient w-32 rounded-full"></div>
                    </div>
                </div>
                {/* Decorative background */}
                <div
                    className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-purple)]/10 to-transparent -z-10"></div>
            </section>

            <section className="py-24 bg-[var(--background)]">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Sidebar: Image & Quick Info */}
                        <div className="lg:col-span-4 space-y-8 animate-reveal-up">
                            <div
                                className="relative aspect-[4/5] rounded-[var(--shape-extra-large)] overflow-hidden shadow-[var(--elevation-3)] group bg-[var(--surface-variant)]">
                                <div
                                    className="absolute inset-0 bg-eteq-gradient opacity-10 group-hover:opacity-20 transition-opacity z-10"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src="/bio.jpg"
                                        alt={t.alts.profile}
                                        fill
                                        className="p-4 object-cover opacity-60 rounded-lg"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                {/* Label overlay */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent z-20">
                                    <p className="text-white font-bold label-large">Dariushi Rosutami</p>
                                    <p className="text-white/80 text-xs uppercase tracking-widest">Founder & Lead
                                        Consultant</p>
                                </div>
                            </div>

                            {/* Credentials Card */}
                            <div
                                className="bg-[var(--surface-container)] p-8 rounded-[var(--shape-large)] border border-[var(--outline)]/10 shadow-[var(--elevation-1)] animate-reveal-up delay-200">
                                <h3 className="label-large text-[var(--primary)] font-bold uppercase tracking-widest mb-6 flex items-center">
                                    <span className="material-symbols-outlined mr-2 text-xl">verified</span>
                                    Credentials
                                </h3>
                                <div className="space-y-4">
                                    {t.founder.credentials.map((cred, idx) => (
                                        <div key={idx} className="flex items-center text-[var(--on-surface)]">
                                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-3"></span>
                                            <span className="body-medium">{cred}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Languages Card */}
                            <div
                                className="bg-[var(--surface-container)] p-8 rounded-[var(--shape-large)] border border-[var(--outline)]/10 shadow-[var(--elevation-1)] animate-reveal-up delay-300">
                                <h3 className="label-large text-[var(--primary)] font-bold uppercase tracking-widest mb-6 flex items-center">
                                    <span className="material-symbols-outlined mr-2 text-xl">language</span>
                                    Language Support
                                </h3>
                                <div className="space-y-4">
                                    {page.languages.map((lang, idx) => (
                                        <div key={idx}>
                                            <p className="label-medium text-[var(--on-surface)] font-bold">{lang.name}</p>
                                            <p className="body-small text-[var(--on-surface-variant)]">{lang.level}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content: Bio */}
                        <div className="lg:col-span-8 space-y-12 animate-reveal-up delay-400">
                            <div className="prose prose-lg max-w-none">
                                {page.content.map((paragraph, idx) => (
                                    <p key={idx}
                                       className="body-large text-[var(--on-surface-variant)] leading-relaxed mb-8 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Specialties Grid */}
                            <div className="pt-8 border-t border-[var(--outline)]/10">
                                <h3 className="headline-small text-[var(--on-surface)] mb-8">Expertise &
                                    Specialties</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {page.specialties.map((spec, idx) => (
                                        <div key={idx}
                                             className="flex items-start p-4 rounded-xl bg-[var(--surface-container)] hover:bg-[var(--primary-container)]/10 transition-colors group animate-reveal-up"
                                             style={{animationDelay: `${(idx * 100) + 500}ms`}}
                                        >
                                            <span
                                                className="material-symbols-outlined text-[var(--primary)] mr-3 group-hover:scale-110 transition-transform">check_circle</span>
                                            <span
                                                className="body-large text-[var(--on-surface)] font-medium">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div
                                className="mt-16 p-10 rounded-[var(--shape-extra-large)] bg-eteq-gradient text-white shadow-[var(--elevation-4)] relative overflow-hidden group animate-reveal-up delay-700">
                                <div
                                    className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="text-center md:text-left">
                                        <h3 className="headline-medium mb-2">Work Directly with Dariushi</h3>
                                        <p className="body-large opacity-90">Leverage 35 years of engineering excellence
                                            for your next project.</p>
                                    </div>
                                    <a
                                        href={`/${lang}/contact`}
                                        className="px-8 py-4 bg-white text-[var(--primary)] rounded-full font-bold hover:shadow-[var(--elevation-2)] hover:scale-105 transition-all"
                                    >
                                        Start a Conversation
                                    </a>
                                </div>
                                {/* Decorative elements */}
                                <div
                                    className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                                <div
                                    className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer t={t} lang={lang}/>
        </main>
    );
}
