'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function AboutPage() {
  const { t, locale } = useTranslation();

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-flow text-white">
        <div className="container-custom text-center">
          <h1 className={`heading-1 mb-6 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{t.about.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className={`body-large text-gray-700 dark:text-gray-300 space-y-6 mb-12 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>
            <p>{t.about.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '76%', label: locale === 'en' ? 'CO₂ Reduction' : 'CO₂削減' },
              { value: '17%', label: locale === 'en' ? 'Energy Savings' : 'エネルギー削減' },
              { value: '20%', label: locale === 'en' ? 'Cost Reduction' : 'コスト削減' },
              { value: '0', label: locale === 'en' ? 'Audit Findings' : '査察指摘' },
            ].map((stat, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className={`text-sm text-gray-600 dark:text-gray-400 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-lightGrey dark:bg-darkNavy/50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-flow flex items-center justify-center text-white text-5xl font-bold">DR</div>
            <h2 className={`heading-2 mb-2 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{t.about.founder.title}</h2>
            <p className={`text-xl text-gray-600 dark:text-gray-400 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{t.about.founder.role}</p>
          </div>
          <p className={`text-gray-700 dark:text-gray-300 mb-8 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{t.about.founder.bio}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className={`heading-2 mb-6 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>
            {locale === 'en' ? 'Work With Us' : '私たちと働く'}
          </h2>
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">{t.hero.cta}</Link>
        </div>
      </section>
    </div>
  );
}
