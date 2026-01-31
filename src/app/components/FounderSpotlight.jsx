export default function FounderSpotlight({ t }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#7B5C9D]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="grid md:grid-cols-5 gap-12 items-center relative z-10">
              {/* Founder Image */}
              <div className="md:col-span-2">
                <div className="aspect-[4/5] rounded-3xl bg-gray-100 overflow-hidden relative group">
                  {/*
                    Suggestion for Premium Image:
                    A professional corporate portrait of a senior executive (Dariushi Rosutami).
                    Style: Minimalist background, high-end lighting, looking confident and approachable.
                  */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col p-4 text-center">
                    <span className="material-symbols-outlined text-6xl mb-4">person</span>
                    <p className="text-sm font-medium">Founder Portrait Placeholder</p>
                  </div>
                  {/* Next/Image would go here: <Image src="/dariushi.jpg" fill className="object-cover" alt={t.founder.name} /> */}
                </div>
              </div>

              {/* Founder Bio */}
              <div className="md:col-span-3">
                <h2 className="text-sm font-bold text-[#7B5C9D] uppercase tracking-[0.2em] mb-4">{t.founder.title}</h2>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{t.founder.name}</h3>
                <p className="text-[#FF7F6E] font-bold mb-6">{t.founder.role}</p>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                   "{t.founder.bio}"
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Core Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {t.founder.credentials.map((cred, index) => (
                      <div key={index} className="flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                        <span className="material-symbols-outlined text-sm text-[#7B5C9D] mr-2">verified</span>
                        <span className="text-sm font-bold text-gray-700">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
