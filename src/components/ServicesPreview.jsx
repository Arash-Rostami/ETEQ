export default function ServicesPreview({ t }) {
    const services = t.services.items;
    const gradients = [
        'from-[var(--color-coral)] to-[var(--color-purple)]',
        'from-[var(--color-purple)] to-[var(--color-deep-blue)]',
        'from-[var(--color-bright-cyan)] to-[var(--color-deep-blue)]'
    ];
    const icons = ['engineering', 'eco', 'bolt'];

    return (
        <section id="services" className="py-24 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl animate-slide-up">
                        <h2 className="display-medium text-[var(--on-surface)] mb-4">{t.services.title}</h2>
                        <div className="h-1.5 w-24 bg-eteq-gradient rounded-full mb-6"></div>
                        <p className="body-large text-[var(--on-surface-variant)]">
                            Strategic solutions designed to optimize your operations, reduce environmental impact, and drive sustainable growth.
                        </p>
                    </div>
                    <a href="#contact" className="hidden md:flex items-center text-[var(--primary)] font-bold label-large hover:translate-x-2 transition-transform">
                        Explore All Services <span className="material-symbols-outlined ml-2">arrow_forward</span>
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-[var(--surface)] rounded-[var(--shape-extra-large)] shadow-[var(--elevation-1)] hover:shadow-[var(--elevation-4)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
                        >
                            {/* Top Gradient Accent Bar */}
                            <div className={`h-2 w-full bg-gradient-to-r ${gradients[index]}`}></div>

                            <div className="p-10 flex flex-col h-full">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--surface-variant)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <span className={`material-symbols-outlined text-4xl bg-gradient-to-br ${gradients[index]} bg-clip-text text-transparent`}>
                                        {icons[index]}
                                    </span>
                                </div>

                                <h3 className="headline-small text-[var(--on-surface)] mb-4 group-hover:text-[var(--primary)] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="body-large text-[var(--on-surface-variant)] mb-10 flex-grow leading-relaxed">
                                    {service.description}
                                </p>

                                <button className="flex items-center text-[var(--primary)] font-bold label-large group/btn">
                                    Learn More
                                    <span className="material-symbols-outlined ml-2 text-xl group-hover/btn:translate-x-2 transition-transform">
                                        chevron_right
                                    </span>
                                </button>
                            </div>

                            {/* Decorative Background Icon */}
                            <span className="absolute -bottom-10 -right-10 material-symbols-outlined text-[160px] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                                {icons[index]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
