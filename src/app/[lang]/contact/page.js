'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function ContactPage() {
  const { t, locale } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-flow text-white">
        <div className="container-custom text-center">
          <h1 className={`heading-1 mb-6 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>{t.contact.title}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <a href="mailto:info@eteq.jp" className="card p-6 flex items-start space-x-4 hover:shadow-material-3 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-flow flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">info@eteq.jp</p>
                </div>
              </a>

              <a href="tel:+819096391856" className="card p-6 flex items-start space-x-4 hover:shadow-material-3 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-flow flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+81 90 9639 1856</p>
                </div>
              </a>
            </div>

            <div className="card-elevated p-8">
              <h3 className={`heading-4 mb-6 ${locale === 'ja' ? 'font-noto' : 'font-poppins'}`}>
                {locale === 'en' ? 'Send a Message' : 'メッセージを送る'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.form.name}</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-darkNavy" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.form.email}</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-darkNavy" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.form.message}</label>
                  <textarea name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-darkNavy resize-none" />
                </div>
                <button type="submit" className="w-full btn btn-primary">{t.contact.form.submit}</button>
                {submitted && <div className="p-4 rounded-lg bg-vibrantGreen/10 text-vibrantGreen text-center">
                  {locale === 'en' ? 'Message sent!' : 'メッセージが送信されました！'}
                </div>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
