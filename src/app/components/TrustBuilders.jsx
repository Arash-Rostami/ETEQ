export default function TrustBuilders({ t }) {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.trustBuilders.title}</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#FF7F6E] to-[#7B5C9D] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.trustBuilders.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center flex flex-col items-center justify-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-[#7B5C9D] to-[#2E4C8B] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
