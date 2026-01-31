export default function FinalCTA({ t }) {
    return (
        <section id="contact" className="py-24 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-[var(--shape-extra-large)] bg-eteq-gradient-alt shadow-[var(--elevation-4)] p-12 md:p-24 text-center animate-scale-in">
                    {/* Background Decorative Circles */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="display-medium text-white mb-6">
                            {t.cta.title}
                        </h2>
                        <p className="body-large text-white/80 mb-12">
                            {t.cta.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="w-full sm:w-auto px-10 py-4 bg-white text-[var(--primary)] rounded-full font-bold text-lg shadow-[var(--elevation-2)] hover:shadow-[var(--elevation-3)] hover:scale-105 active:scale-95 transition-all">
                                {t.cta.cta1}
                            </button>
                            <button className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                                {t.cta.cta2}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
