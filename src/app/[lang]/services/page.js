'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function ServicesPage() {
  const { t, locale } = useTranslation();

  const services = [
    { title: t.services.service1.title, description: t.services.service1.description, icon: '🎯' },
    { title: t.services.service2.title, description: t.services.service2.description, icon: '🌱' },
    { title: t.services.service3.title, description: t.services.service3.description, icon: '⚡' },
    { title: t.services.service4.title, description: t.services.service4.description, icon: '🏗️' },
    { title: t.services.service5.title, description: t.services.service5.description, icon: '🛡️' },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-flow text-white">
        <div className="container-custom text-center">
          <h1 className={`heading-1 mb-6 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{t.services.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-16">
          {services.map((service, index) => (
            <div key={index} className="card-elevated p-8">
              <div className="flex items-start space-x-4">
                <span className="text-5xl">{service.icon}</span>
                <div>
                  <h2 className={`heading-3 mb-4 ${locale === 'ja' ? 'font-noto text-2xl' : 'font-poppins'}`}>{service.title}</h2>
                  <p className={`text-gray-600 dark:text-gray-400 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-lightGrey dark:bg-darkNavy/50">
        <div className="container-custom text-center">
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">{t.hero.cta}</Link>
        </div>
      </section>
    </div>
  );
}
