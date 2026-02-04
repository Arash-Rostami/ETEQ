'use client';

import { useContactForm } from '@/hooks/useContactForm';

export default function ContactForm({ t, lang }) {
    const { status, errors, handleSubmit, resetStatus } = useContactForm(lang);
    const formT = t.contactPage.form;

    if (status === 'success') {
        return (
            <div className="bg-[var(--surface-container)] p-8 md:p-12 rounded-[var(--shape-extra-large)] border border-[var(--outline)]/10 shadow-[var(--elevation-2)] animate-scale-in text-center">
                <div className="w-20 h-20 bg-[var(--color-vibrant-green)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-5xl text-[var(--color-vibrant-green)]">check_circle</span>
                </div>
                <h3 className="headline-large text-[var(--on-surface)] mb-4">{formT.success}</h3>
                <button
                    onClick={resetStatus}
                    className="px-8 py-3 bg-[var(--primary)] text-[var(--on-primary)] rounded-full hover:shadow-[var(--elevation-3)] transition-all font-bold"
                >
                    {formT.sendAnother}
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[var(--surface)] p-8 md:p-12 rounded-[var(--shape-extra-large)] border border-[var(--outline)]/10 shadow-[var(--elevation-2)] relative overflow-hidden group"
        >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-eteq-gradient opacity-[0.03] rounded-bl-full -mr-16 -mt-16 group-hover:opacity-[0.06] transition-opacity duration-700"></div>

            <div className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="label-large text-[var(--on-surface-variant)] ml-1">
                            {formT.name} <span className="text-[var(--error)]">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className={`w-full px-4 py-4 rounded-[var(--shape-medium)] bg-[var(--surface-container)] border ${errors.name ? 'border-[var(--error)]' : 'border-[var(--outline)]/20'} focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all body-large text-[var(--on-surface)]`}
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="text-[var(--error)] text-xs mt-1 ml-1">{formT.validation.required}</p>}
                        </div>
                    </div>

                    {/* Title/Subject Field */}
                    <div className="space-y-2">
                        <label htmlFor="title" className="label-large text-[var(--on-surface-variant)] ml-1">
                            {formT.title} <span className="text-[var(--error)]">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="title"
                                name="title"
                                required
                                className={`w-full px-4 py-4 rounded-[var(--shape-medium)] bg-[var(--surface-container)] border ${errors.title ? 'border-[var(--error)]' : 'border-[var(--outline)]/20'} focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all body-large text-[var(--on-surface)]`}
                                placeholder="Strategic Engineering Roadmap"
                            />
                            {errors.title && <p className="text-[var(--error)] text-xs mt-1 ml-1">{formT.validation.required}</p>}
                        </div>
                    </div>
                </div>

                {/* Contact Info Field */}
                <div className="space-y-2">
                    <label htmlFor="contactInfo" className="label-large text-[var(--on-surface-variant)] ml-1">
                        {formT.contactInfo} <span className="text-[var(--error)]">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="contactInfo"
                            name="contactInfo"
                            required
                            className={`w-full px-4 py-4 rounded-[var(--shape-medium)] bg-[var(--surface-container)] border ${errors.contactInfo ? 'border-[var(--error)]' : 'border-[var(--outline)]/20'} focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all body-large text-[var(--on-surface)]`}
                            placeholder="email@example.com or +81 00-0000-0000"
                        />
                        {errors.contactInfo === 'required' && <p className="text-[var(--error)] text-xs mt-1 ml-1">{formT.validation.required}</p>}
                        {errors.contactInfo === 'invalid' && <p className="text-[var(--error)] text-xs mt-1 ml-1">{formT.validation.invalidContact}</p>}
                    </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <label htmlFor="message" className="label-large text-[var(--on-surface-variant)] ml-1">
                        {formT.message} <span className="text-[var(--error)]">*</span>
                    </label>
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            className={`w-full px-4 py-4 rounded-[var(--shape-medium)] bg-[var(--surface-container)] border ${errors.message ? 'border-[var(--error)]' : 'border-[var(--outline)]/20'} focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all body-large text-[var(--on-surface)] resize-none`}
                            placeholder="How can we help you?"
                        ></textarea>
                        {errors.message && <p className="text-[var(--error)] text-xs mt-1 ml-1">{formT.validation.required}</p>}
                    </div>
                </div>

                {/* Status Message */}
                {status === 'error' && (
                    <div className="p-4 rounded-[var(--shape-small)] bg-[var(--error-container)] text-[var(--on-error-container)] flex items-center animate-fade-in">
                        <span className="material-symbols-outlined mr-2">error</span>
                        <p className="label-large">{formT.error}</p>
                    </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full md:w-auto px-12 py-4 rounded-full bg-[var(--primary)] text-[var(--on-primary)] font-bold text-lg hover:shadow-[var(--elevation-4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center disabled:opacity-70 disabled:scale-100 disabled:hover:shadow-none`}
                    >
                        {status === 'loading' ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {formT.sending}
                            </>
                        ) : (
                            <>
                                {formT.submit}
                                <span className="material-symbols-outlined ml-2">send</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}
