import {useTranslation} from "@/lib/i18n/useTranslation";
import Header from '@/components/Header';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import {createMetadata} from "@/lib/seo/metadata";
import {getFontClass} from "@/lib/i18n/config";

export async function generateMetadata({params}) {
    return createMetadata({
        params,
        key: 'blog',
        slug: 'blog',
        descKey: 'subtitle'
    });
}

export default async function BlogPage({params}) {
    const {lang} = await params;
    const t = await useTranslation(lang);
    const page = t.blogPage;

    return (
        <main className={getFontClass(lang)}>
            <Header t={t}/>
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--surface-container)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--background)] to-[var(--secondary)]/5 -z-10"></div>
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-label-large font-bold mb-6 border border-[var(--primary)]/20 animate-reveal-up">
                        <span className="material-symbols-outlined mr-2 text-[20px]">article</span>
                        {page.title}
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <h1 className="display-large text-[var(--on-surface)] mb-6 animate-reveal-up" style={{animationDelay: '100ms'}}>
                            {page.subtitle}
                        </h1>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent"></div>
            </section>

            <section className="py-16 md:py-24 bg-[var(--background)] min-h-[50vh]">
                <div className="container mx-auto px-4">
                    <BlogList t={t} lang={lang} />
                </div>
            </section>

            <Footer t={t} lang={lang}/>
            <ChatWidget t={t} lang={lang}/>
        </main>
    );
}
