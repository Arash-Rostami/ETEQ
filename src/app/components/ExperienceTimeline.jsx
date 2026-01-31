export default function ExperienceTimeline({ t }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t.timeline.title}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#7B5C9D] to-[#2E4C8B] mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>

          <div className="space-y-12">
            {t.timeline.events.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#FF7F6E] to-[#7B5C9D] -translate-x-1/2 z-10 border-4 border-white shadow-sm"></div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                  <div className="bg-[#F5F7FA] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-[#7B5C9D]/10 text-[#7B5C9D] rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                      {event.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{event.company}</h4>
                    <p className="text-[#2E4C8B] font-medium text-sm mb-4">{event.role}</p>
                    <div className="h-1 w-12 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
