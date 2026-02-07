'use client';

import {useAdminModal} from '@/hooks/useAdminModal';

export default function AdminModal({isOpen, onClose, lang, t}) {
    const {
        key,
        setKey,
        error,
        isProcessing,
        showPassword,
        togglePassword,
        handleSubmit
    } = useAdminModal(isOpen, onClose, lang);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            ></div>

            <div
                className="relative bg-[var(--surface)] w-full max-w-md rounded-[var(--shape-extra-large)] border border-[var(--outline)]/10 shadow-[var(--elevation-5)] animate-scale-in overflow-hidden flex flex-col">
                <div className="bg-[var(--primary-container)] px-6 py-4 flex items-center justify-between shrink-0">
                    <h3 className="text-xl font-bold text-[var(--on-primary-container)] flex items-center">
                        <span className="material-symbols-outlined mr-2">admin_panel_settings</span>
                        {t?.title || 'Admin Access'}
                    </h3>
                    <button
                        onClick={onClose}
                        type="button"
                        className="w-8 h-8 rounded-full hover:bg-[var(--on-primary-container)]/10 flex items-center justify-center transition-colors"
                    >
                        <span className="material-symbols-outlined text-[var(--on-primary-container)]">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <p className="body-medium text-[var(--on-surface-variant)] text-center">
                        {t?.subtitle || 'Please enter the admin secret key to continue.'}
                    </p>

                    <div className="space-y-2">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
                                placeholder={t?.keyPlaceholder || 'Secret Key'}
                                required
                                autoFocus
                                className={`w-full pl-4 pr-12 py-3 rounded-[var(--shape-medium)] bg-[var(--surface-container)] border ${error ? 'border-[var(--error)]' : 'border-[var(--outline)]/20'} focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all body-large text-[var(--on-surface)]`}
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors p-1"
                                tabIndex="-1"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {showPassword ? 'visibility' : 'visibility_off'}
                                </span>
                            </button>
                        </div>
                        {error && (
                            <p className="text-[var(--error)] text-xs ml-1 flex items-center">
                                <span className="material-symbols-outlined text-sm mr-1">error</span>
                                {t?.invalidKey || 'Invalid key'}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end space-x-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 rounded-full border border-[var(--outline)] text-[var(--primary)] font-medium hover:bg-[var(--primary)]/5 transition-all"
                        >
                            {t?.cancel || 'Cancel'}
                        </button>
                        <button
                            type="submit"
                            disabled={isProcessing || !key}
                            className="px-8 py-2 rounded-full bg-[var(--primary)] text-[var(--on-primary)] font-medium hover:shadow-[var(--elevation-2)] transition-all disabled:opacity-50 flex items-center"
                        >
                            {isProcessing ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                t?.login || 'Login'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}