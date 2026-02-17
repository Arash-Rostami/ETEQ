'use client'

import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';

export default function CompanyTable({t}) {
    const [ref, isVisible] = useIntersectionObserver({threshold: 0.1});
    const info = t.aboutPage.companyTable;

    return (
        <section ref={ref} className="py-24 bg-[var(--background)] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className={`mb-12 text-center reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`}>
                        <h2 className="display-medium text-[var(--on-surface)] mb-4">{info.title}</h2>
                    </div>

                    <div className={`bg-[var(--surface)] rounded-[var(--shape-extra-large)] shadow-[var(--elevation-1)] overflow-hidden reveal-hidden reveal-up ${isVisible ? 'reveal-visible' : ''}`} style={{transitionDelay: '200ms'}}>
                        <table className="w-full text-left border-collapse">
                            <tbody>
                            <tr className="border-b border-[var(--outline-variant)]">
                                <th className="p-4 md:p-6 bg-[var(--surface-container)] font-bold text-[var(--on-surface)] w-1/3 text-sm md:text-base">{info.name}</th>
                                <td className="p-4 md:p-6 text-[var(--on-surface-variant)] text-sm md:text-base">{info.nameValue}</td>
                            </tr>
                            <tr className="border-b border-[var(--outline-variant)]">
                                <th className="p-4 md:p-6 bg-[var(--surface-container)] font-bold text-[var(--on-surface)] text-sm md:text-base">{info.engName}</th>
                                <td className="p-4 md:p-6 text-[var(--on-surface-variant)] text-sm md:text-base">{info.engNameValue}</td>
                            </tr>
                            <tr className="border-b border-[var(--outline-variant)]">
                                <th className="p-4 md:p-6 bg-[var(--surface-container)] font-bold text-[var(--on-surface)] text-sm md:text-base">{info.rep}</th>
                                <td className="p-4 md:p-6 text-[var(--on-surface-variant)] text-sm md:text-base">{info.repValue}</td>
                            </tr>
                            <tr className="border-b border-[var(--outline-variant)]">
                                <th className="p-4 md:p-6 bg-[var(--surface-container)] font-bold text-[var(--on-surface)] text-sm md:text-base">{info.business}</th>
                                <td className="p-4 md:p-6 text-[var(--on-surface-variant)] text-sm md:text-base">{info.businessValue}</td>
                            </tr>
                            <tr className="border-b border-[var(--outline-variant)]">
                                <th className="p-4 md:p-6 bg-[var(--surface-container)] font-bold text-[var(--on-surface)] text-sm md:text-base">{info.fields}</th>
                                <td className="p-4 md:p-6 text-[var(--on-surface-variant)] text-sm md:text-base">{info.fieldsValue}</td>
                            </tr>
                            <tr>
                                <th className="p-4 md:p-6 bg-[var(--surface-container)] font-bold text-[var(--on-surface)] text-sm md:text-base">{info.contact}</th>
                                <td className="p-4 md:p-6 text-[var(--on-surface-variant)] text-sm md:text-base">{info.contactValue}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-xs md:text-sm text-[var(--on-surface-variant)] opacity-70 text-right">
                        {info.note}
                    </p>
                </div>
            </div>
        </section>
    );
}
