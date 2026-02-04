'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useExpansion } from '@/hooks/useExpansion';

export default function ServicesPreview({ t }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const services = t.services.items;
    const { expandedIndex, toggleExpand, isExpanded } = useExpansion();

    const gradients = [
        'from-[var(--color-coral)] to-[var(--color-purple)]',
        'from-[var(--color-purple)] to-[var(--color-deep-blue)]',
        'from-[var(--color-bright-cyan)] to-[var(--color-deep-blue)]',
        'from-[var(--color-vibrant-green)] to-[var(--color-dark-green)]',
        'from-[var(--color-coral)] to-[var(--color-deep-blue)]'
    ];
    const icons = ['engineering', 'eco', 'bolt', 'factory', 'health_and_safety'];
    const marqueeServices = [...services, ...services];

    return (
        <section ref={ref} id="services" className="py-24 bg-[var(--background)] overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className={`max-w-3xl reveal-hidden reveal-left ${isVisible ? 'reveal-visible' : ''}`}>
                    <h2 className="display-medium text-[var(--on-surface)] mb-4">{t.services.title}</h2>
                    <div className="h-1.5 w-24 bg-eteq-gradient rounded-full mb-6"></div>
                    <p className="body-large text-[var(--on-surface-variant)]">
                        {t.services.subtitle}
                    </p>
                </div>
            </div>

            <div className={`relative marquee-mask reveal-hidden reveal-up delay-300 ${isVisible ? 'reveal-visible' : ''}`}>
                <div className="animate-marquee py-8 items-start">
                    {marqueeServices.map((service, index) => {
                        const originalIndex = index % services.length;
                        const expanded = isExpanded(originalIndex);

                        return (
                            <div
                                key={index}
                                className={`flex-shrink-0 mx-4 w-[280px] sm:w-[350px] md:w-[420px] transition-all duration-500 ease-emphasized group relative bg-[var(--surface-container)] rounded-[var(--shape-extra-large)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-4)] flex flex-col ${expanded ? 'h-auto' : 'h-[460px]'}`}
                            >
                                {/* Top Gradient Accent Bar */}
                                <div className={`h-2 w-[95%] mx-auto bg-gradient-to-r ${gradients[originalIndex]} rounded-t-[var(--shape-extra-large)]`}></div>

                                <div className="p-8 md:p-10 flex flex-col h-full">
                                    {/* Icon Container */}
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--surface-variant)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                        <span className={`material-symbols-outlined text-4xl bg-gradient-to-br ${gradients[originalIndex]} bg-clip-text text-transparent`}>
                                            {icons[originalIndex]}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="headline-small text-[var(--on-surface)] mb-4 group-hover:text-[var(--primary)] transition-colors min-h-[64px] flex items-center">
                                        {service.title}
                                    </h3>

                                    {/* Description Container */}
                                    <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[1000px]' : 'max-h-[120px]'}`}>
                                        <p className="body-large text-[var(--on-surface-variant)] leading-relaxed mb-4">
                                            {service.summary}
                                        </p>
                                        {expanded && (
                                            <p className="body-large text-[var(--on-surface-variant)] leading-relaxed animate-fade-in pb-4">
                                                {service.fullDescription}
                                            </p>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-auto pt-6">
                                        <button
                                            onClick={() => toggleExpand(originalIndex)}
                                            className="flex items-center text-[var(--primary)] font-bold label-large group/btn hover:opacity-80 transition-opacity"
                                        >
                                            {expanded ? (t.services.showLess || 'Show Less') : (t.services.learnMore || 'Learn More')}
                                            <span className={`material-symbols-outlined ml-2 text-xl transition-transform duration-300 ${expanded ? 'rotate-180' : 'group-hover/btn:translate-x-1'}`}>
                                                {expanded ? 'expand_less' : 'expand_more'}
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Background Decorative Icon */}
                                <span className="absolute -bottom-8 -right-8 material-symbols-outlined text-[140px] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                                    {icons[originalIndex]}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
