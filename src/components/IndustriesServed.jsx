'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function IndustriesServed({ t }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const industryIcons = [
        'medication', 'biotech', 'restaurant', 'science', 'factory'
    ];

    return (
        <section ref={ref} id="industries" className="py-24 bg-[var(--surface-container)]">
            <div className="container mx-auto px-4">
                <div className={`text-center max-w-3xl mx-auto mb-16 reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                    <h2 className="display-medium text-[var(--on-surface)] mb-4">{t.industries.title}</h2>
                    <div className="h-1.5 w-24 bg-eteq-gradient mx-auto rounded-full mb-8"></div>
                    <p className="body-large text-[var(--on-surface-variant)]">
                        {t.industries.subtitle}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {t.industries.list.map((industry, index) => (
                        <div
                            key={index}
                            className={`group flex items-center bg-[var(--surface)] hover:bg-eteq-gradient px-8 py-4 rounded-full shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] transition-all duration-300 border border-[var(--outline)]/20 hover:border-transparent cursor-default reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            <span className="material-symbols-outlined mr-3 text-[var(--primary)] transition-colors text-2xl group-hover:text-[var(--color-coral)]">
                                {industryIcons[index] || 'business_center'}
                            </span>
                            <span className="label-large text-[var(--on-surface)] group-hover:text-[var(--primary)]  transition-colors font-bold uppercase tracking-wider">
                                {industry}
                            </span>
                        </div>
                    ))}
                </div>

                <div className={`mt-24 pt-12 border-t border-[var(--outline)]/10 text-center reveal-hidden reveal-up delay-700 ${isVisible ? 'reveal-visible' : ''}`}>
                    <div className="opacity-40">
                        <p className="label-large uppercase tracking-[0.4em] text-[var(--on-surface-variant)] mb-10">{t.industries.globalExperience}</p>
                        <div className="flex flex-wrap justify-center gap-12 grayscale hover:grayscale-0 hover:cursor-help">
                            {['TAKEDA', 'DSM', 'DANONE', 'SUNTORY', 'TERUMO'].map(name => (
                                <span key={name} className="text-2xl font-black tracking-tighter hover:text-[var(--color-coral)] ">{name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
