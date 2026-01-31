export default function Hero({ t }) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[var(--background)]">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[var(--color-coral)]/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-deep-blue)]/20 rounded-full blur-[120px]"></div>
                <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-[var(--color-purple)]/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Geometric Patterns */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03] z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="flex flex-col space-y-8 animate-slide-up">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--primary-container)] text-[var(--on-primary-container)] label-large w-fit border border-[var(--primary)]/10">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] mr-2 animate-ping"></span>
                            {t.hero.badge}
                        </div>

                        <h1 className="display-large tracking-tight text-[var(--on-surface)]">
                            <span className="block mb-2">{t.hero.titlePrimary}</span>
                            <span className="bg-gradient-to-r from-[var(--color-coral)] via-[var(--color-purple)] to-[var(--color-deep-blue)] bg-clip-text text-transparent">
                                {t.hero.titleSecondary}
                            </span>
                        </h1>

                        <p className="body-large text-[var(--on-surface-variant)] max-w-xl leading-relaxed">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-10 py-4 bg-eteq-gradient text-white rounded-2xl font-bold text-lg shadow-[var(--elevation-3)] hover:shadow-[var(--elevation-4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
                            >
                                {t.hero.cta1}
                                <span className="material-symbols-outlined ml-2">arrow_forward</span>
                            </a>
                            <a
                                href={`mailto:${t.header.email}`}
                                className="w-full sm:w-auto px-10 py-4 border-2 border-[var(--outline)] text-[var(--on-surface)] rounded-2xl font-bold text-lg hover:bg-[var(--surface-variant)] transition-all text-center"
                            >
                                {t.hero.cta2}
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Visual Element */}
                    <div className="hidden lg:block relative animate-fade-in delay-300">
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Abstract Floating Shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-eteq-gradient rounded-[var(--shape-extra-large)] rotate-6 opacity-20 animate-pulse"></div>
                            <div className="absolute bottom-10 left-0 w-48 h-48 border-4 border-[var(--color-bright-cyan)] rounded-[var(--shape-extra-large)] -rotate-12 opacity-30"></div>

                            {/* Main "Glass" Card */}
                            <div className="absolute inset-4 bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 rounded-[var(--shape-extra-large)] shadow-[var(--elevation-4)] flex items-center justify-center overflow-hidden group">
                                <div className="p-8 text-center">
                                    <div className="text-6xl font-black bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent opacity-80 mb-4">ETEQ</div>
                                    <div className="h-1 w-24 bg-eteq-gradient mx-auto rounded-full group-hover:w-32 transition-all duration-500"></div>
                                </div>

                                {/* Animated Data Lines */}
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute bg-white/50 h-px animate-slide-left-right"
                                            style={{
                                                top: `${20 * i}%`,
                                                left: 0,
                                                width: '100%',
                                                animationName: 'slideLeftRight',
                                                animationDuration: `${5 + i}s`,
                                                animationTimingFunction: 'linear',
                                                animationIterationCount: 'infinite',
                                                animationDirection: 'alternate'
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
                <span className="label-large uppercase tracking-widest text-[var(--on-surface-variant)]">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-[var(--primary)] to-transparent"></div>
            </div>
        </section>
    );
}
