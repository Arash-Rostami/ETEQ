export default function Hero({ t }) {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Background Gradient Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#FF7F6E]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-[#2E4C8B]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#FF7F6E]/5 via-[#7B5C9D]/5 to-[#2E4C8B]/5 animate-gradient pointer-events-none"></div>

            {/*
        Suggestion for Premium Background Image:
        A high-end, out-of-focus background of a clean, modern industrial facility or
        a laboratory environment. This would add depth and reinforce the "Engineering" theme.
        Style: High-key, bright, professional.
      */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            <span className="bg-gradient-to-r from-[#FF7F6E] via-[#7B5C9D] to-[#2E4C8B] bg-clip-text text-transparent">
              {t.hero.title}
            </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <a
                            href="#services"
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF7F6E] to-[#7B5C9D] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            {t.hero.cta1}
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 border-2 border-[#7B5C9D] text-[#7B5C9D] rounded-full font-bold text-lg hover:bg-gray-50 transition-all text-center"
                        >
                            {t.hero.cta2}
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <span className="material-symbols-outlined text-gray-400 text-3xl">keyboard_double_arrow_down</span>
            </div>
        </section>
    );
}
