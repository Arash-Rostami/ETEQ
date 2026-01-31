export default function ServicesPreview({ t }) {
    const icons = ['strategy', 'eco', 'bolt'];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-[#FF7F6E] uppercase tracking-[0.2em] mb-3">What we do</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900">{t.services.title}</h3>
                    </div>
                    <p className="text-gray-500 max-w-sm">
                        Leveraging decades of global experience to deliver precision-engineered solutions for complex industrial challenges.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.services.items.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden flex flex-col h-full"
                        >
                            {/* Gradient accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF7F6E] via-[#7B5C9D] to-[#2E4C8B]"></div>

                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#7B5C9D] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">{icons[index]}</span>
                            </div>

                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                            <p className="text-gray-600 leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            <div className="mt-8 flex items-center text-[#7B5C9D] font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                                <span>Learn more</span>
                                <span className="material-symbols-outlined ml-2">arrow_forward</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
