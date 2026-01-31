export default function FinalCTA({ t }) {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Specified Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B8D4] to-[#2E4C8B] animate-gradient"></div>

            {/* Decorative Overlays */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_white_0%,_transparent_50%)]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
                    {t.cta.title}
                </h2>
                <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                    {t.cta.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a
                        href={`mailto:${t.header.email}`}
                        className="w-full sm:w-auto px-10 py-4 bg-white text-[#2E4C8B] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                    >
                        {t.cta.cta1}
                    </a>
                    <a
                        href="#services"
                        className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                    >
                        {t.cta.cta2}
                    </a>
                </div>
            </div>
        </section>
    );
}
