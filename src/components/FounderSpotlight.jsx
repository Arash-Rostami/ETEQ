'use client'

import { useLingo } from '@/hooks/useLingo';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function FounderSpotlight({ t }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const { lang } = useLingo();
    const credentials = t.founder.credentials;

    return (
        <section ref={ref} id="bio" className="py-24 bg-[var(--background)] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className={`relative bg-[var(--surface)] rounded-[var(--shape-extra-large)] shadow-[var(--elevation-3)] overflow-hidden reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                        {/* Gradient Border Accent */}
                        <div className="absolute inset-0 p-px bg-eteq-gradient -z-10 rounded-[var(--shape-extra-large)] opacity-50"></div>

                        <div className="grid lg:grid-cols-2 items-stretch">
                            {/* Left: Image Placeholder */}
                            <div className="relative bg-[var(--surface-variant)] min-h-[400px] flex items-center justify-center group overflow-hidden">
                                <div className="absolute inset-0 bg-eteq-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                                <div className="relative z-10 text-center p-8">
                                    <div
                                        className="w-48 h-48 rounded-full bg-[var(--surface)] shadow-[var(--elevation-2)] mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white/50">
                                        <video
                                            src={isVisible ? "/eteq.mp4" : ""}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            preload="none"
                                            className="w-full h-full object-cover"
                                            aria-label={t.founder.name}
                                        />
                                    </div>
                                    <div className="headline-small text-[var(--on-surface)] mb-1">{t.founder.name}</div>
                                    <div
                                        className="label-large text-[var(--primary)] font-bold tracking-widest uppercase">{t.founder.role}</div>
                                </div>

                                {/* Background Abstract Element */}
                                <div
                                    className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                            </div>

                            {/* Right: Content */}
                            <div className="p-10 lg:p-16 flex flex-col justify-center">
                            <h2 className="headline-large text-[var(--on-surface)] mb-8 flex items-center">
                                    <span className="material-symbols-outlined mr-4 text-4xl text-[var(--primary)]">format_quote</span>
                                    {t.founder.title}
                                </h2>

                                <p className="body-large text-[var(--on-surface-secondary)] mb-10 leading-relaxed italic">
                                    "{t.founder.bio}"
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                                    {credentials.map((cred, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center space-x-3 bg-[var(--surface-container)] p-4 rounded-xl border border-[var(--outline)]/10 hover:border-[var(--primary)]/30 transition-colors group reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}
                                            style={{ transitionDelay: `${400 + index * 100}ms` }}
                                        >
                                            <span className="material-symbols-outlined text-[var(--primary)] group-hover:scale-110 transition-transform">verified</span>
                                            <span className="label-large text-[var(--on-surface)]">{cred}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={`/${lang}/bio`}
                                    className="w-fit flex items-center px-8 py-3 bg-[var(--primary)] text-[var(--on-primary)] rounded-full hover:shadow-[var(--elevation-2)] hover:scale-105 active:scale-95 transition-all font-bold label-large"
                                >
                                    {t.founder.viewFullBio || 'View Full Bio'}
                                    <span className="material-symbols-outlined ml-2">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-purple)]/5 to-transparent -z-10"></div>
        </section>
    );
}
