'use client'

import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';

export default function ProcessSteps({t}) {
    const [ref, isVisible] = useIntersectionObserver({threshold: 0.1});
    const process = t.servicesPage.process;

    return (
        <section ref={ref} className="py-24 bg-[var(--surface-container)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className={`mb-16 text-center reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                        <h2 className="display-medium text-[var(--on-surface)] mb-4">{process.title}</h2>
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        {process.steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}
                                style={{transitionDelay: `${index * 200}ms`}}
                            >
                                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--primary)] text-[var(--on-primary)] flex items-center justify-center display-small font-bold shadow-[var(--elevation-2)] relative">
                                    {step.num}
                                    {index < process.steps.length - 1 && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 h-12 md:h-20 w-1 bg-[var(--outline)]/20 -z-10"></div>
                                    )}
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="headline-medium font-bold text-[var(--on-surface)] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="body-large text-[var(--on-surface-variant)] leading-relaxed text-lg">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-blue)]/5 to-transparent -z-10"></div>
        </section>
    );
}
