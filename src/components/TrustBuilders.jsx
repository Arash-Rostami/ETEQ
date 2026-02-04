export default function TrustBuilders({ t }) {
    const stats = t.trustBuilders.stats;
    const icons = [
        'eco', 'energy_savings_leaf', 'trending_up', 'verified', 'public', 'fact_check'
    ];

    return (
        <section className="py-24 bg-[var(--surface-container)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
                    <h2 className="headline-large text-[var(--on-surface)] mb-4">{t.trustBuilders.title}</h2>
                    <div className="h-1.5 w-24 bg-eteq-gradient mx-auto rounded-full mb-8"></div>
                    <p className="body-large text-[var(--on-surface-variant)]">
                        {t.trustBuilders.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group bg-[var(--surface)] p-8 rounded-[var(--shape-large)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[var(--primary-container)] text-[var(--primary)] flex items-center justify-center mb-6 group-hover:bg-eteq-gradient group-hover:text-white transition-all duration-500 shadow-sm">
                                <span className="material-symbols-outlined text-3xl">
                                    {icons[index] || 'analytics'}
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
