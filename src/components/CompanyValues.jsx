'use client'

import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';

export default function CompanyValues({t}) {
    const [ref, isVisible] = useIntersectionObserver({threshold: 0.1});
    const values = t.aboutPage.values;

    return (
        <section ref={ref} className="py-24 bg-[var(--background)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className={`mb-16 text-center reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                        <h2 className="display-medium text-[var(--on-surface)] mb-4">{values.title}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.list.map((value, index) => (
                            <div
                                key={index}
                                className={`group p-8 rounded-[var(--shape-extra-large)] bg-[var(--surface)] border border-[var(--outline)]/10 shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}
                                style={{transitionDelay: `${index * 150}ms`}}
                            >
                                <div className="w-16 h-16 mb-6 rounded-full bg-[var(--secondary-container)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-[var(--on-primary)] transition-colors duration-500">
                                    <span className="material-symbols-outlined text-3xl text-[var(--on-secondary-container)] group-hover:text-[var(--on-primary)]">
                                        {index === 0 ? 'query_stats' : index === 1 ? 'health_and_safety' : 'published_with_changes'}
                                    </span>
                                </div>
                                <h3 className="title-large font-bold text-[var(--on-surface)] leading-snug">
                                    {value}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-green)]/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
}
