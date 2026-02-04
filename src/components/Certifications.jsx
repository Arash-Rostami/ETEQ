export default function Certifications({ t }) {
    const certs = t.certifications.list;
    const icons = ['assignment', 'psychology', 'search_check', 'lock'];

    return (
        <section className="py-24 bg-[var(--surface-container)]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
                    <h2 className="headline-large text-[var(--on-surface)] mb-4">{t.certifications.title}</h2>
                    <div className="h-1.5 w-24 bg-eteq-gradient mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in delay-200">
                    {certs.map((cert, index) => (
                        <div
                            key={index}
                            className="group bg-[var(--surface)] p-8 rounded-[var(--shape-large)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-3)] transition-all duration-300 border border-[var(--outline)]/10 hover:border-[var(--primary)]/20"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary-container)] text-[var(--primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-2xl">{icons[index] || 'verified'}</span>
                            </div>
                            <h3 className="label-large text-[var(--on-surface)] font-bold mb-2 group-hover:text-[var(--primary)] transition-colors uppercase tracking-tight">
                                {cert.name}
                            </h3>
                            {cert.year && (
                                <div className="text-xs text-[var(--on-surface-variant)] font-medium uppercase tracking-[0.2em]">
                                    {t.certifications.certifiedLabel} {cert.year}
                                </div>
                            )}
                            <div className="mt-4 h-1 w-0 bg-eteq-gradient group-hover:w-full transition-all duration-500 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
