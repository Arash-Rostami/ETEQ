'use client';

import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function ExperienceTimeline({ t }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [flippedIndices, setFlippedIndices] = useState([]);

    const toggleFlip = (index) => {
        setFlippedIndices(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };
    const events = t.timeline.events;

    return (
        <section ref={ref} className="py-24 bg-[var(--background)] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={`text-center max-w-3xl mx-auto mb-12 reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                    <h2 className="display-medium text-[var(--on-surface)] mb-4">{t.timeline.title}</h2>
                    <div className="h-1.5 w-24 bg-eteq-gradient mx-auto rounded-full mb-6"></div>
                    <p className="body-large text-[var(--on-surface-variant)]">
                        {t.timeline.subtitle}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-coral)] via-[var(--color-purple)] to-[var(--color-deep-blue)] -translate-x-1/2 rounded-full opacity-30"></div>

                    <div className="space-y-6">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group reveal-hidden ${index % 2 === 0 ? 'reveal-right' : 'reveal-left'} ${isVisible ? 'reveal-visible' : ''}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[var(--surface)] border-4 border-[var(--primary)] rounded-full -translate-x-1/2 z-10 group-hover:scale-125 transition-transform shadow-[var(--elevation-1)]">
                                    <div className="w-full h-full rounded-full bg-eteq-gradient opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                <div className={`ml-12 md:ml-0 md:w-1/2 w-[calc(100%-48px)] ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                                    <div
                                        className="group/card cursor-pointer w-full"
                                        style={{ perspective: '1000px' }}
                                        onClick={() => toggleFlip(index)}
                                    >
                                        <div
                                            className={`relative w-full min-h-[220px] md:min-h-[200px] transition-transform duration-700 ease-in-out group-hover/card:[transform:rotateY(180deg)] ${flippedIndices.includes(index) ? '[transform:rotateY(180deg)]' : ''}`}
                                            style={{ transformStyle: 'preserve-3d' }}
                                        >

                                            {/* Front */}
                                            <div className="w-full h-full bg-[var(--surface)] p-6 md:p-8 rounded-[var(--shape-large)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] transition-all duration-300 border border-[var(--outline)]/10 animate-fade-in group-hover:border-[var(--primary)]/20 flex flex-col justify-center" style={{ backfaceVisibility: 'hidden' }}>
                                                <div className="label-large text-[var(--primary)] font-bold mb-2 uppercase tracking-widest">{event.year}</div>
                                                <h3 className="headline-small text-[var(--on-surface)] mb-1">{event.company}</h3>
                                                <div className="body-large text-[var(--on-surface-variant)] font-medium mb-4">{event.role}</div>
                                                <div className={`h-0.5 w-12 bg-[var(--primary-container)] group-hover:w-full transition-all duration-700 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto md:mr-0'}`}></div>
                                            </div>

                                            {/* Back */}
                                            <div className="absolute inset-0 w-full h-full bg-[var(--surface)] p-6 md:p-8 rounded-[var(--shape-large)] shadow-[var(--elevation-3)] border border-[var(--outline)]/10 flex flex-col justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                                                <div className="label-large text-[var(--primary)] font-bold mb-2 uppercase tracking-widest">{event.year}</div>
                                                <p className="body-large text-[var(--on-surface-variant)] leading-relaxed">{event.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[var(--color-coral)]/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[var(--color-deep-blue)]/5 rounded-full blur-[100px]"></div>
        </section>
    );
}