'use client'

import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';

export default function ServiceHighlights({t}) {
    const [ref, isVisible] = useIntersectionObserver({threshold: 0.1});
    const highlights = t.servicesPage.highlights;

    return (
        <section ref={ref} className="py-16 md:py-24 bg-[var(--surface-container)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-[var(--surface)] p-8 rounded-[var(--shape-extra-large)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] transition-all duration-300 reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}
                                style={{transitionDelay: `${index * 150}ms`}}
                            >
                                <div className="w-14 h-14 mb-6 rounded-xl bg-[var(--tertiary-container)] flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl text-[var(--on-tertiary-container)]">
                                        {index === 0 ? 'visibility' : index === 1 ? 'analytics' : 'public'}
                                    </span>
                                </div>
                                <h3 className="headline-small font-bold text-[var(--on-surface)] mb-3">
                                    {item.title}
                                </h3>
                                <p className="body-large text-[var(--on-surface-variant)] leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
