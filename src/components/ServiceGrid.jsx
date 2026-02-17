'use client'

import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';

export default function ServiceGrid({t}) {
    const [ref, isVisible] = useIntersectionObserver({threshold: 0.1});
    const services = t.servicesPage.servicesList;

    return (
        <section ref={ref} id="services-grid" className="py-24 bg-[var(--background)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`bg-[var(--surface)] p-8 md:p-10 rounded-[var(--shape-extra-large)] border border-[var(--outline)]/10 shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] transition-all duration-300 reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}
                                style={{transitionDelay: `${index * 150}ms`}}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[var(--secondary-container)] flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-2xl text-[var(--on-secondary-container)]">
                                            {index === 0 ? 'strategy' : index === 1 ? 'account_tree' : index === 2 ? 'manufacturing' : 'groups'}
                                        </span>
                                    </div>
                                    <h3 className="headline-small font-bold text-[var(--on-surface)]">
                                        {service.title}
                                    </h3>
                                </div>
                                <ul className="space-y-4">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-[var(--primary)] mt-1 text-lg">check_circle</span>
                                            <span className="body-large text-[var(--on-surface-variant)] leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
