'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function TrustBuilders({ t }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const stats = t.trustBuilders.stats;
    const marqueeStats = [...stats, ...stats];

    return (
        <section ref={ref} className="py-24 bg-[var(--surface-container)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 mb-16">
                <div className={`text-center max-w-3xl mx-auto reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                    <h2 className="display-medium text-[var(--on-surface)] mb-4">{t.trustBuilders.title}</h2>
                    <div className="h-1.5 w-24 bg-eteq-gradient mx-auto rounded-full mb-8"></div>
                    <p className="body-large text-[var(--on-surface-variant)]">
                        {t.trustBuilders.subtitle}
                    </p>
                </div>
            </div>

            <div className={`relative marquee-mask reveal-hidden reveal-up delay-300 ${isVisible ? 'reveal-visible' : ''}`}>
                <div className="animate-marquee-reverse py-8 items-start">
                    {marqueeStats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-4 w-[240px] md:w-[300px] group bg-[var(--surface)] p-8 rounded-[var(--shape-large)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[var(--primary-container)] text-[var(--primary)] flex items-center justify-center mb-6 group-hover:bg-eteq-gradient group-hover:text-white transition-all duration-500 shadow-sm">
                                <span className="material-symbols-outlined text-3xl">
                                    {stat.icon || 'analytics'}
                                </span>
                            </div>
                            <div className="display-medium font-bold text-[var(--on-surface)] mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="label-large text-[var(--on-surface-variant)] font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-purple)]/5 rounded-full blur-[80px]"></div>
        </section>
    );
}
