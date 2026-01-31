export default function Certifications({ t }) {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-12">{t.certifications.title}</h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {t.certifications.list.map((cert, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                   <span className="material-symbols-outlined text-4xl text-[#2E4C8B]">workspace_premium</span>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900 leading-tight max-w-[120px]">{cert.name}</div>
                  {cert.year && <div className="text-xs font-bold text-[#7B5C9D] mt-1">{cert.year}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
