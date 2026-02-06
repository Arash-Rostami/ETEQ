'use client';

import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, content, lang }) {
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

            <div className="relative bg-[var(--custom-color)] w-full max-w-2xl max-h-[80vh] rounded-[var(--shape-extra-large)] border border-white/10 shadow-[var(--elevation-5)] animate-slide-up overflow-hidden flex flex-col">
                {/* Header */}
                <div className="sticky top-0 bg-[var(--custom-color)] border-b border-white/10 px-6 py-4 flex items-center justify-between shrink-0">
                    <h3 className="text-xl font-bold text-white flex items-center">
                        <span className="material-symbols-outlined mr-2 text-[var(--color-coral)]">policy</span>
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                    >
                        <span className="material-symbols-outlined text-gray-400 hover:text-white">close</span>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto space-y-4">
                    {content.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`
                                text-gray-300 leading-relaxed 
                                ${paragraph === '' ? 'h-4' : ''} 
                                ${paragraph.startsWith('•') ? 'pl-4' : ''} 
                                ${paragraph.endsWith(':') ? 'font-bold text-white mt-4' : ''}
                            `}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-[var(--custom-color)] border-t border-white/10 px-6 py-4 flex justify-end shrink-0">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded-full bg-eteq-gradient text-white font-medium hover:shadow-lg hover:shadow-[var(--color-coral)]/20 transition-all"
                    >
                        {lang === 'ja' ? '閉じる' : 'Close'}
                    </button>
                </div>
            </div>
        </div>
    );
}