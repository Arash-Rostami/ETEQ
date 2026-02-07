'use client';

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[2000] bg-[var(--background)] flex items-center justify-center overflow-hidden">
            {/* Top Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-eteq-gradient w-full origin-left animate-loader-progress opacity-60"></div>

            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-[var(--color-coral)]/15 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vh] bg-[var(--color-deep-blue)]/15 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative flex flex-col items-center">
                {/* Modern 2026 Liquid/Glass Loader */}
                <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
                    {/* Rotating Rings with different speeds and directions */}
                    <div className="absolute inset-0 rounded-full border-t-[3px] border-l-[3px] border-[var(--color-coral)] animate-spin" style={{ animationDuration: '2s' }}></div>
                    <div className="absolute inset-3 rounded-full border-b-[3px] border-r-[3px] border-[var(--color-purple)] animate-spin-reverse" style={{ animationDuration: '1.5s' }}></div>
                    <div className="absolute inset-6 rounded-full border-t-[3px] border-r-[3px] border-[var(--color-deep-blue)] animate-spin" style={{ animationDuration: '3s' }}></div>

                    {/* Central Logo Card */}
                    <div className="relative w-14 h-14 rounded-2xl bg-eteq-gradient shadow-[var(--elevation-4)] flex items-center justify-center animate-bounce-slow z-10 border border-white/20">
                        <span className="text-white font-bold text-3xl select-none">E</span>
                        {/* Shimmer effect on the card */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-full animate-shimmer-fast"></div>
                    </div>

                    {/* Glassmorphism Outer Ring */}
                    <div className="absolute -inset-6 bg-white/5 backdrop-blur-[4px] rounded-full border border-white/10 scale-110 animate-pulse-slow"></div>
                </div>

                {/* Typography */}
                <div className="text-center animate-reveal-up delay-300">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-black tracking-tighter bg-eteq-gradient bg-clip-text text-transparent animate-pulse uppercase">ETEQ</span>
                        <div className="w-2 h-2 rounded-full bg-[var(--color-coral)] animate-ping"></div>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-[11px] uppercase tracking-[0.5em] text-[var(--on-surface-variant)] font-black opacity-80">
                            Engineering Excellence
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer-fast {
                    0% { transform: translateX(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) rotate(45deg); }
                }
                .animate-shimmer-fast {
                    animation: shimmer-fast 1.5s infinite;
                }
            `}</style>
        </div>
    );
}
