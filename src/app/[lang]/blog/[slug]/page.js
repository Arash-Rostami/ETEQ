import {useTranslation} from "@/lib/i18n/useTranslation";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import {createMetadata} from "@/lib/seo/metadata";
import {getFontClass} from "@/lib/i18n/config";
import {blogPosts} from "@/lib/blogData";
import {notFound} from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({params}) {
    const {lang, slug} = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) {
        return {
            title: 'Not Found | ETEQ',
        };
    }

    const translation = post.translations[lang] || post.translations['en'];

    return {
        title: `${translation.title} | ETEQ`,
        description: translation.excerpt,
        openGraph: {
            title: translation.title,
            description: translation.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({params}) {
    const {lang, slug} = await params;
    const t = await useTranslation(lang);
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    const translation = post.translations[lang] || post.translations['en'];

    return (
        <main className={getFontClass(lang)}>
            <Header t={t}/>

            <article className="pt-32 pb-24 bg-[var(--background)] min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link href={`/${lang}/blog`} className="inline-flex items-center text-[var(--primary)] font-bold hover:underline mb-8 group">
                        <span className="material-symbols-outlined mr-2 text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        {t.blogPage.backToBlog}
                    </Link>

                    <header className="mb-12">
                        <div className="label-large text-[var(--on-surface-variant)] mb-4 font-bold uppercase tracking-wider opacity-80 flex items-center gap-2">
                             <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                            {post.date}
                        </div>
                        <h1 className="display-medium text-[var(--on-surface)] mb-8 leading-tight font-bold">
                            {translation.title}
                        </h1>
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-[var(--shape-extra-large)] overflow-hidden shadow-[var(--elevation-2)]">
                            <Image
                                src={post.image}
                                alt={translation.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </header>

                    <div className="prose prose-lg prose-headings:text-[var(--on-surface)] prose-headings:font-bold prose-p:text-[var(--on-surface-variant)] prose-strong:text-[var(--on-surface)] prose-li:text-[var(--on-surface-variant)] max-w-none">
                        <div dangerouslySetInnerHTML={{__html: translation.content}} />
                    </div>

                    <div className="mt-16 pt-8 border-t border-[var(--outline-variant)]">
                        <Link href={`/${lang}/blog`} className="inline-flex items-center px-8 py-3 bg-[var(--surface-container-high)] text-[var(--on-surface)] rounded-full hover:bg-[var(--surface-container-highest)] transition-colors font-medium hover:shadow-sm">
                            <span className="material-symbols-outlined mr-2">arrow_back</span>
                            {t.blogPage.backToBlog}
                        </Link>
                    </div>
                </div>
            </article>

            <Footer t={t} lang={lang}/>
            <ChatWidget t={t} lang={lang}/>
        </main>
    );
}
