export default function TrustBuilders({ t, isMarquee = false }) {
    const stats = t.trustBuilders.stats;
    const marqueeStats = [...stats, ...stats];

    if (isMarquee) {
        return (
            <section className="py-24 bg-[var(--background)] overflow-hidden">
                <div className="container mx-auto px-4 mb-16">
                    <div className="max-w-4xl animate-slide-up">
                        <h2 className="display-medium text-[var(--on-surface)] mb-4">{t.trustBuilders.title}</h2>
                        <div className="h-1.5 w-20 bg-eteq-gradient rounded-full mb-6"></div>
                        <p className="body-large text-[var(--on-surface-variant)] text-lg">
                            Demonstrated impact across sustainability, efficiency, and operational excellence for global manufacturing leaders.
                        </p>
                    </div>
                </div>

                <div className="relative marquee-mask">
                    <div className="animate-marquee-reverse py-8">
                        {marqueeStats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-4 w-[280px] sm:w-[320px] bg-[var(--surface-container)] p-8 rounded-[var(--shape-large)] border border-[var(--outline)]/10 shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] hover:-translate-y-1 transition-all duration-500 group flex flex-col items-center text-center relative overflow-hidden"
                            >
                                {/* Decorative Background Icon */}
                                <span className="absolute -bottom-2 -right-2 material-symbols-outlined text-[60px] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none group-hover:scale-110 duration-700">
                                    {stat.icon || 'analytics'}
                                </span>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-xl bg-[var(--surface)] text-[var(--primary)] flex items-center justify-center mb-4 shadow-sm group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                                        <span className="material-symbols-outlined text-2xl">
                                            {stat.icon || 'analytics'}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="headline-small font-bold text-[var(--on-surface)] mb-1 tracking-tight group-hover:text-[var(--primary)] transition-colors">
                                            {stat.value}
                                        </span>
                                        <span className="label-small text-[var(--on-surface-variant)] font-bold uppercase tracking-tighter leading-tight h-[40px] flex items-center justify-center">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-[var(--background)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16 animate-slide-up">
                    <h2 className="display-medium text-[var(--on-surface)] mb-4">{t.trustBuilders.title}</h2>
                    <div className="h-1.5 w-24 bg-eteq-gradient mx-auto rounded-full mb-8"></div>
                    <p className="body-large text-[var(--on-surface-variant)] text-lg">
                        Demonstrated impact across sustainability, efficiency, and operational excellence for global manufacturing leaders.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-[var(--surface-container)] p-6 rounded-[var(--shape-large)] border border-[var(--outline)]/10 shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] hover:-translate-y-1 transition-all duration-500 animate-fade-in flex flex-col items-center text-center overflow-hidden"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Decorative Background Icon */}
                            <span className="absolute -bottom-2 -right-2 material-symbols-outlined text-[60px] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none group-hover:scale-110 duration-700">
                                {stat.icon || 'analytics'}
                            </span>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-10 h-10 rounded-xl bg-[var(--surface)] text-[var(--primary)] flex items-center justify-center mb-4 shadow-sm group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                                    <span className="material-symbols-outlined text-2xl">
                                        {stat.icon || 'analytics'}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="headline-small font-bold text-[var(--on-surface)] mb-1 tracking-tight group-hover:text-[var(--primary)] transition-colors">
                                        {stat.value}
                                    </span>
                                    <span className="label-small text-[var(--on-surface-variant)] font-bold uppercase tracking-tighter leading-tight h-[40px] flex items-center justify-center overflow-hidden">
                                        {stat.label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[var(--color-bright-cyan)]/5 to-transparent -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-r from-[var(--color-purple)]/5 to-transparent -z-10"></div>
        </section>
    );
}
