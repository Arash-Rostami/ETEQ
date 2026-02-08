'use client';

import { useChatWidget } from '@/hooks/useChatWidget';

export default function ChatWidget({ t, lang }) {
    const {
        chatOpen,
        toggleChat,
        closeChat,
        maximized,
        toggleMaximized,
        maintenance
    } = useChatWidget();

    return (
        <>
            {/* Chat Panel */}
            <div
                className={`fixed z-[1000] transition-all duration-300 ease-[cubic-bezier(0.2,0.0,0,1.0)] chic-shadow chat-widget-glass overflow-hidden flex flex-col border border-[var(--outline-variant)]/20
                    ${maximized
                        ? 'inset-4 md:inset-10 rounded-[28px]'
                        : 'bottom-24 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-[400px] h-[600px] max-h-[70vh] rounded-[28px]'
                    }
                    ${chatOpen
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                        : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
                    }
                `}
                role="dialog"
                aria-label={t.chatWidget.title}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-eteq-gradient text-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full ${maintenance ? 'bg-yellow-400 animate-pulse' : 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]'}`}></div>
                        <span className="font-bold text-title-medium tracking-wide">{maintenance ? t.chatWidget.maintenance : t.chatWidget.title}</span>
                    </div>
                    <div className="flex items-center gap-1">
                         {!maintenance && (
                            <button
                                onClick={toggleMaximized}
                                className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
                                title={maximized ? "Minimize" : "Maximize"}
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {maximized ? 'close_fullscreen' : 'open_in_full'}
                                </span>
                            </button>
                        )}
                        <button
                            onClick={closeChat}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors"
                            title="Close"
                        >
                            <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 relative bg-[var(--surface-container-low)]">
                    {maintenance ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-[var(--on-surface)]">
                            <div className="w-20 h-20 rounded-full bg-[var(--primary-container)] text-[var(--on-primary-container)] flex items-center justify-center mb-6 animate-pulse-slow">
                                <span className="material-symbols-outlined text-4xl">build</span>
                            </div>
                            <h3 className="text-headline-small font-bold mb-2">{t.chatWidget.updating}</h3>
                            <p className="text-body-large mb-1">{t.chatWidget.maintenanceSub}</p>
                            <p className="text-body-small opacity-70">{t.chatWidget.maintenanceNote}</p>
                        </div>
                    ) : (
                        chatOpen && (
                             <iframe
                                src={`https://persol-ai.cldv.dev/?lang=${lang}`}
                                className="w-full h-full border-0 bg-white"
                                allow="microphone; camera; clipboard-write; clipboard-read; fullscreen"
                                loading="lazy"
                                title={t.chatWidget.title}
                            ></iframe>
                        )
                    )}
                </div>
            </div>

            {/* Toggle Button FAB */}
            <button
                onClick={toggleChat}
                className={`fixed bottom-6 right-6 md:right-8 z-[999] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[var(--elevation-3)] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[var(--elevation-4)]
                    ${chatOpen
                        ? 'translate-y-20 opacity-0 pointer-events-none'
                        : 'translate-y-0 opacity-100 bg-eteq-gradient text-white animate-float'
                    }
                `}
                aria-label="Open AI Assistant"
            >
                <span className="material-symbols-outlined text-3xl md:text-4xl">smart_toy</span>
            </button>
        </>
    );
}
