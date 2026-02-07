'use client';

import {useEffect} from 'react';

export default function Modal({isOpen, onClose, title, content, lang, t}) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            ></div>

            <div
                className="relative bg-[var(--surface-container-high)] w-full max-w-2xl max-h-[80vh] rounded-[28px] shadow-[var(--elevation-3)] animate-scale-in overflow-hidden flex flex-col"
            >
                {/* Header */}
                <div
                    className="sticky top-0 bg-[var(--surface-container-high)] z-10 px-6 py-4 flex items-center justify-between shrink-0 border-b border-[var(--outline-variant)]/20">
                    <h3 className="text-headline-small text-[var(--on-surface)] flex items-center">
                        <span className="material-symbols-outlined mr-3 text-[var(--primary)] text-2xl">policy</span>
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full text-[var(--on-surface-variant)] hover:bg-[var(--on-surface)]/8 flex items-center justify-center transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                    {Array.isArray(content) ? content.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`
                                text-[var(--on-surface-variant)] text-body-large leading-relaxed mb-4
                                ${paragraph === '' ? 'h-2' : ''} 
                                ${paragraph.startsWith('•') ? 'pl-4' : ''} 
                                ${paragraph.endsWith(':') ? 'font-bold text-[var(--on-surface)] mt-6' : ''}
                            `}
                        >
                            {paragraph}
                        </p>
                    )) : (
                        <div className="text-[var(--on-surface-variant)] text-body-large">
                            {content}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {Array.isArray(content) && (
                    <div
                        className="sticky bottom-0 bg-[var(--surface-container-high)] border-t border-[var(--outline-variant)]/20 px-6 py-4 flex justify-end shrink-0">
                        <button
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-full bg-[var(--primary)] text-[var(--on-primary)] font-medium hover:shadow-[var(--elevation-2)] active:scale-[0.98] transition-all"
                        >
                            {t?.common?.close || (lang === 'ja' ? '閉じる' : 'Close')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}