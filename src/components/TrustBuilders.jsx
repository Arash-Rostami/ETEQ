'use client';

import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import {colors} from '@/contexts/colors'


export default function TrustBuilders({t}) {
    const [ref, isVisible] = useIntersectionObserver({threshold: 0.2});

    const shimmerPairs = colors.shimmerPairs;
    const trustData = t?.trustBuilders || {};
    const stats = trustData.stats || [];
    const title = trustData.title || 'Trust Builders';
    const subtitle = trustData.subtitle || '';
    const marqueeStats = stats.length > 0 ? [...stats, ...stats] : [];

    return (
        <section ref={ref} className="py-24 bg-[var(--surface-container)] relative overflow-hidden">
            {/* Deep ambient glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/[0.04] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 mb-16">
                <div
                    className={`text-center max-w-3xl mx-auto reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                    <h2 className="display-medium text-[var(--on-surface)] mb-4">{title}</h2>
                    <div className="h-1.5 w-24 bg-eteq-gradient mx-auto rounded-full mb-8"></div>
                    <p className="body-large text-[var(--on-surface-variant)]">
                        {subtitle}
                    </p>
                </div>
            </div>

            <div
                className={`relative marquee-mask reveal-hidden reveal-up delay-300 ${isVisible ? 'reveal-visible' : ''}`}>
                <div className="animate-marquee-reverse py-8 items-start group/marquee">
                    {marqueeStats.map((stat, index) => {
                        const originalIndex = index % (stats.length || 1);
                        const [colorA, colorB] = shimmerPairs[originalIndex % shimmerPairs.length];

                        return (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-4 w-[260px] md:w-[320px] relative bg-[var(--surface)] rounded-[var(--shape-extra-large)] shadow-[var(--elevation-2)] hover:shadow-[var(--elevation-4)] transition-all duration-500 flex flex-col items-center text-center p-8 overflow-hidden group/card"
                                style={{
                                    '--shimmer-a': colorA,
                                    '--shimmer-b': colorB
                                }}
                            >
                                {/* Holographic Shimmer Edge - Top */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] holographic-edge opacity-60 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                                {/* Secondary subtle edge - Bottom */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-[1px] holographic-edge opacity-30 group-hover/card:opacity-60 transition-opacity duration-300"
                                    style={{animationDirection: 'reverse', animationDuration: '4s'}}></div>

                                {/* Inner glow on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${colorA}10 0%, transparent 50%)`
                                    }}></div>

                                {/* Icon with chromatic reflection */}
                                <div
                                    className="relative w-14 h-14 rounded-2xl bg-[var(--surface-variant)] flex items-center justify-center mb-6 overflow-hidden group-hover/card:scale-110 transition-transform duration-500">
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 holographic-edge"
                                        style={{animationDuration: '2s'}}></div>
                                    <span
                                        className="material-symbols-outlined text-3xl text-[var(--on-surface-variant)] group-hover/card:text-[var(--primary)] transition-colors duration-300 relative z-10">
                                        {stat?.icon || 'analytics'}
                                    </span>
                                </div>

                                {/* Value */}
                                <div
                                    className="display-medium font-bold text-[var(--on-surface)] mb-2 tracking-tight relative">
                                    <span
                                        className="group-hover/card:opacity-0 transition-opacity duration-300">{stat?.value || '0'}</span>
                                    <span
                                        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--shimmer-a)] to-[var(--shimmer-b)] bg-clip-text text-transparent">
                                        {stat?.value || '0'}
                                    </span>
                                </div>

                                {/* Label */}
                                <div
                                    className="label-large text-[var(--on-surface-variant)] font-medium max-w-[220px] group-hover/card:text-[var(--on-surface)] transition-colors duration-300">
                                    {stat?.label || 'Stat'}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}