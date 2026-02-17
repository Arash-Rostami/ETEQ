'use client'

import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';

export default function FounderMessage({t}) {
    const [ref, isVisible] = useIntersectionObserver({threshold: 0.1});
    const message = t.aboutPage.message;

    return (
        <section ref={ref} className="py-24 bg-[var(--surface-container)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className={`mb-12 text-center reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                        <h2 className="display-medium text-[var(--on-surface)] mb-4">{message.title}</h2>
                    </div>

                    <div className={`bg-[var(--surface)] p-8 md:p-12 rounded-[var(--shape-extra-large)] shadow-[var(--elevation-2)] border border-[var(--outline)]/10 reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{transitionDelay: '200ms'}}>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-[var(--surface-variant)] overflow-hidden shadow-md mx-auto md:mx-0">
                                <img src="/dariush.png" alt={t.founder.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                {message.content.map((paragraph, index) => (
                                    <p key={index} className="body-large text-[var(--on-surface-variant)] mb-6 last:mb-0 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                                <div className="mt-8 pt-6 border-t border-[var(--outline-variant)] flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div>
                                        <div className="title-large font-bold text-[var(--on-surface)]">{t.founder.name}</div>
                                        <div className="body-medium text-[var(--primary)] font-medium">{t.founder.role}</div>
                                    </div>
                                    <img src="/eteq_logo_placeholder.png" alt="Signature" className="h-12 opacity-50 hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-[var(--color-blue)]/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
}
