'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function IndustriesPage() {
  const { t, locale } = useTranslation();

  const industries = [
    { name: t.industries.pharmaceutical, icon: '💊' },
    { name: t.industries.lifeSciences, icon: '🔬' },
    { name: t.industries.foodBeverage, icon: '🍶' },
    { name: t.industries.glass, icon: '🏺' },
    { name: t.industries.process, icon: '⚙️' },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-flow text-white">
        <div className="container-custom text-center">
          <h1 className={`heading-1 mb-6 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{t.industries.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div key={i} className="card-elevated p-8 text-center hover:-translate-y-2 transition-all">
                <span className="text-6xl mb-6 block">{industry.icon}</span>
                <h3 className={`text-xl font-semibold ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-lightGrey dark:bg-darkNavy/50">
        <div className="container-custom text-center">
          <h2 className={`heading-2 mb-6 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>
            {locale === 'en' ? 'Transform Your Operations' : '運営を変革する'}
          </h2>
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">{t.hero.cta}</Link>
        </div>
      </section>
    </div>
  );
}
