export default function WhyChooseETEQ({ t }) {
    const icons = [
        'person_check', 'history', 'verified', 'hub',
        'public', 'precision_manufacturing', 'query_stats', 'psychology'
    ];

    return (
        <section id="about" className="py-24 bg-[#F5F7FA] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Benefits */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">{t.whyChoose.title}</h2>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {t.whyChoose.points.map((point, index) => (
                                <div key={index} className="flex flex-col">
                                    <div className="w-10 h-10 rounded-lg bg-[#7B5C9D]/10 flex items-center justify-center mb-4 text-[#7B5C9D]">
                                        <span className="material-symbols-outlined text-2xl">{icons[index]}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Abstract Visual */}
                    <div className="relative">
                        <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-[#FF7F6E] via-[#7B5C9D] to-[#2E4C8B] shadow-2xl relative overflow-hidden flex items-center justify-center p-12 group">
                            {/* This is the placeholder for the abstract visual */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                            <div className="relative z-10 text-white text-center">
                                <span className="material-symbols-outlined text-9xl opacity-50 group-hover:scale-110 transition-transform duration-700">engineering</span>
                                <p className="mt-4 font-medium tracking-widest uppercase">Innovation & Excellence</p>
                            </div>

                            {/* Suggestions for Premium Image in comments:
                  - 3D abstract render of interconnected metallic nodes or futuristic architectural structures
                  - High-exposure shot of a modern manufacturing facility with light trails
                  - Macro shot of complex high-precision machinery components
              */}

                            {/*
                Suggestion for premium image:
                Use a high-quality 3D abstract visualization representing "Strategic Engineering" or
                "Sustainable Energy Flow". Search for: "abstract futuristic engineering 3d render"
              */}
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <span className="material-symbols-outlined">check_circle</span>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">100%</div>
                                    <div className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Reliability Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
