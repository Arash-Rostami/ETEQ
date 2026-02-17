import Link from 'next/link';
import Image from 'next/image';
import {blogPosts} from '@/lib/i18n/blogData';

export default function BlogList({t, lang}) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
                const translation = post.translations[lang] || post.translations['en'];
                return (
                    <div key={post.slug}
                         className="group bg-[var(--surface)] rounded-[var(--shape-large)] overflow-hidden shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] transition-all duration-300 flex flex-col h-full">
                        <Link href={`/${lang}/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                            <Image src={post.image} alt={translation.title} fill
                                   className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                        </Link>
                        <div className="p-6 flex flex-col flex-1">
                            <div
                                className="label-medium text-[var(--primary)] mb-3 font-bold uppercase tracking-wider opacity-80">
                                {post.date}
                            </div>
                            <h3 className="headline-small font-bold text-[var(--on-surface)] mb-4 group-hover:text-[var(--primary)] transition-colors line-clamp-2 leading-tight">
                                <Link href={`/${lang}/blog/${post.slug}`}>
                                    {translation.title}
                                </Link>
                            </h3>
                            <p className="body-medium text-[var(--on-surface-variant)] line-clamp-3 mb-6 flex-1 leading-relaxed">
                                {translation.excerpt}
                            </p>
                            <Link href={`/${lang}/blog/${post.slug}`}
                                  className="inline-flex items-center text-[var(--primary)] font-bold hover:underline mt-auto">
                                {t.blogPage.readMore}
                                <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
