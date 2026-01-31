export default function IndustriesServed({t}) {
    const industryIcons = [
        'medication', 'biotech', 'restaurant', 'science', 'factory'
    ];

    return (
        <section id="industries" className="py-24 bg-[#F5F7FA]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.industries.title}</h2>
                    <p className="text-gray-600 text-lg">
                        Providing specialized engineering strategic consulting across a diverse range of critical global
                        sectors.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {t.industries.list.map((industry, index) => (
                        <div
                            key={index}
                            className="group flex items-center bg-white hover:bg-gradient-to-r hover:from-[#FF7F6E] hover:to-[#7B5C9D] px-8 py-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent cursor-default"
                        >
                       <span
                           className="material-symbols-outlined mr-4 text-[#7B5C9D] group-hover:text-white transition-colors text-3xl">
                        {industryIcons[index] || 'business_center'}
                       </span>
                            <span className="text-lg font-bold text-gray-800 group-hover:text-white transition-colors">
                        {industry}
                       </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
