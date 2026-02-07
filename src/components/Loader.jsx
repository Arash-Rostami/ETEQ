'use client';

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[2000] bg-[var(--background)] flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-0 h-1 bg-eteq-gradient w-full origin-left animate-loader-progress opacity-50"></div>
            <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-[var(--color-coral)]/10 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vh] bg-[var(--color-deep-blue)]/10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="relative flex flex-col items-center">
                <div className="relative w-24 h-24 mb-8">
                    <div className="absolute inset-0 rounded-full border-t-2 border-l-2 border-[var(--color-coral)] animate-spin" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute inset-2 rounded-full border-b-2 border-r-2 border-[var(--color-purple)] animate-spin-reverse" style={{ animationDuration: '2s' }}></div>
                    <div className="absolute inset-4 rounded-full border-t-2 border-r-2 border-[var(--color-deep-blue)] animate-spin" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-xl bg-eteq-gradient shadow-[var(--elevation-3)] flex items-center justify-center animate-bounce-slow">
                            <span className="text-white font-bold text-2xl">E</span>
                        </div>
                    </div>
                    <div className="absolute -inset-4 bg-white/5 backdrop-blur-[2px] rounded-full border border-white/10 scale-110 animate-pulse-slow"></div>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-2xl font-bold tracking-tight text-[var(--on-surface)]">ETEQ</span>
                        <div className="w-1 h-1 rounded-full bg-[var(--color-coral)] animate-ping"></div>
                    </div>
                    <div className="overflow-hidden h-4">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--on-surface-variant)] font-bold animate-reveal-up">
                            Engineering Excellence
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
