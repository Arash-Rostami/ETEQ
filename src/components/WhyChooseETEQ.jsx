export default function WhyChooseETEQ({ t }) {
    const points = t.whyChoose.points;
    const icons = [
        'person_check', 'history', 'bolt', 'sync_alt',
        'savings', 'gavel', 'construction', 'star'
    ];

    return (
        <section className="py-24 bg-[var(--surface-container)] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <div className="animate-slide-up">
                        <h2 className="display-medium text-[var(--on-surface)] mb-4">{t.whyChoose.title}</h2>
                        <div className="h-1.5 w-24 bg-eteq-gradient rounded-full mb-12"></div>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-[var(--surface)] transition-all duration-300 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-container)] text-[var(--primary)] flex items-center justify-center group-hover:bg-eteq-gradient group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-xl">{icons[index] || 'check'}</span>
                                    </div>
                                    <div>
                                        <h4 className="label-large text-[var(--on-surface)] font-bold mb-1">{point.title}</h4>
                                        <p className="text-sm text-[var(--on-surface-variant)] leading-snug">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative hidden lg:block">
                        <div className="relative z-10 rounded-[var(--shape-extra-large)] overflow-hidden shadow-[var(--elevation-4)] aspect-square max-w-md mx-auto group">
                            <div className="absolute inset-0 bg-eteq-gradient opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-6xl text-white">workspace_premium</span>
                                </div>
                                <h3 className="headline-large text-white mb-4">{t.whyChoose.visualTitle}</h3>
                                <p className="body-large text-white/80">
                                    {t.whyChoose.visualSubtitle}
                                </p>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-white/20 rounded-full"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 border-4 border-white/10 rounded-full"></div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-bright-cyan)]/10 rounded-full blur-[100px] z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
