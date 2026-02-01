import { useTranslation } from "@/lib/i18n/useTranslation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function AboutPage({ params }) {
    const { lang } = await params;
    const t = await useTranslation(lang);
    const page = t.aboutPage;

    return (
        <main className={lang === 'ja' ? 'font-noto' : 'font-poppins'}>
            <Header t={t} lang={lang} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--surface-container)]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl animate-slide-up">
                        <nav className="flex items-center space-x-2 text-[var(--primary)] label-large mb-8">
                            <a href={`/${lang}`} className="hover:underline">Home</a>
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                            <span>{page.title}</span>
                        </nav>
                        <h1 className="display-large text-[var(--on-surface)] mb-8">
                            {page.title}
                        </h1>
                        <p className="body-large text-[var(--on-surface-variant)] text-xl leading-relaxed mb-12">
                            {page.intro}
                        </p>
                        <div className="h-1 bg-eteq-gradient w-32 rounded-full"></div>
                    </div>
                </div>
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-bright-cyan)]/10 to-transparent -z-10"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--color-purple)]/5 rounded-full blur-3xl -z-10"></div>
            </section>

            {/* Founder Context Section */}
            <section className="py-24 bg-[var(--background)]">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slide-up">
                            <h2 className="headline-large text-[var(--on-surface)] mb-6">{page.founderTitle}</h2>
                            <p className="body-large text-[var(--on-surface-variant)] mb-8 leading-relaxed">
                                {page.founderContext}
                            </p>
                            <div className="flex items-center p-6 bg-[var(--surface-container)] rounded-[var(--shape-large)] border-l-4 border-[var(--primary)] shadow-[var(--elevation-1)]">
                                <span className="material-symbols-outlined text-4xl text-[var(--primary)] mr-4">workspace_premium</span>
                                <div>
                                    <p className="label-large text-[var(--on-surface)] font-bold">Dariushi Rosutami</p>
                                    <p className="label-medium text-[var(--on-surface-variant)]">Founder & Lead Consultant</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-[var(--shape-extra-large)] overflow-hidden shadow-[var(--elevation-3)] aspect-video group animate-fade-in">
                            <div className="absolute inset-0 bg-eteq-gradient opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            {/* Suggestion: Use 'public/white-crop.jpg' or a professional facility image here */}
                            <img
                                src="/white-crop.jpg"
                                alt="Engineering Excellence"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                <p className="label-large text-white font-medium flex items-center">
                                    <span className="material-symbols-outlined mr-2">location_on</span>
                                    Global Operations Strategy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Infographic Section */}
            <section className="py-24 bg-[var(--surface-container)] relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
                        <h2 className="display-medium text-[var(--on-surface)] mb-4">{page.results.title}</h2>
                        <p className="body-large text-[var(--on-surface-variant)] italic">
                            {page.results.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {page.results.stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-[var(--surface)] p-8 rounded-[var(--shape-extra-large)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-4)] transition-all duration-500 text-center group animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[var(--surface-variant)] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-3xl text-[var(--primary)]">
                                        {stat.icon}
                                    </span>
                                </div>
                                <div className="display-small text-[var(--primary)] font-bold mb-2 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="label-medium text-[var(--on-surface-variant)] font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative Background */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-[var(--color-coral)]/5 rounded-full blur-3xl -z-10"></div>
            </section>

            {/* Differentiation Section */}
            <section className="py-24 bg-[var(--background)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 animate-slide-up">
                            <h2 className="display-medium text-[var(--on-surface)] mb-4">{page.differentiation.title}</h2>
                            <p className="body-large text-[var(--on-surface-variant)] text-lg">
                                {page.differentiation.subtitle}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {page.differentiation.points.map((point, index) => (
                                <div
                                    key={index}
                                    className="p-10 rounded-[var(--shape-extra-large)] bg-[var(--surface-container)] hover:bg-[var(--surface)] border border-transparent hover:border-[var(--outline)]/20 shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] transition-all duration-500 group animate-fade-in"
                                >
                                    <h3 className="headline-small text-[var(--on-surface)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                                        {point.title}
                                    </h3>
                                    <p className="body-large text-[var(--on-surface-variant)] leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise and Closing */}
            <section className="py-24 bg-[var(--primary)] text-[var(--on-primary)] relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center animate-slide-up">
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
                        <a
                            href={`/${lang}/contact`}
                            className="inline-flex items-center px-10 py-4 bg-white text-[var(--primary)] rounded-full hover:shadow-[var(--elevation-4)] hover:scale-105 active:scale-95 transition-all font-bold text-lg"
                        >
                            {page.expertise.cta}
                            <span className="material-symbols-outlined ml-2">arrow_forward</span>
                        </a>
                    </div>
                </div>
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-eteq-gradient opacity-10"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </section>

            <Footer t={t} lang={lang} />
        </main>
    );
}
