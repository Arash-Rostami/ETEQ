'use client';

import {useEffect, useState} from 'react';

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[3000] animate-fade-out"
             style={{animationDelay: '1.7s', animationFillMode: 'forwards'}}>
            <div
                className="fixed inset-0 z-[2000] bg-[var(--background)] flex items-center justify-center overflow-hidden">

                {/* Ambient gradient orbs */}
                <div
                    className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-[var(--color-coral)]/15 blur-[140px] animate-pulse-slow"/>
                <div
                    className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vh] bg-[var(--color-deep-blue)]/15 blur-[140px] animate-pulse-slow"
                    style={{animationDelay: '1s'}}/>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vh] bg-[var(--color-purple)]/10 blur-[120px] animate-pulse-slow"
                    style={{animationDelay: '0.5s'}}/>

                {/* Top progress bar */}
                <div
                    className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-[var(--color-coral)] via-[var(--color-purple)] to-[var(--color-deep-blue)] w-full origin-left animate-loader-progress"/>

                <div className="relative flex flex-col items-center">

                    {/* Spinner system */}
                    <div className="relative w-32 h-32 mb-12">

                        {/* Rotating gradient rings - more visible */}
                        <div
                            className="absolute inset-0 rounded-full border-[3px] border-transparent bg-gradient-to-tr from-[var(--color-coral)] via-transparent to-transparent animate-spin opacity-80"
                            style={{animationDuration: '3s'}}/>
                        <div
                            className="absolute inset-3 rounded-full border-[3px] border-transparent bg-gradient-to-bl from-[var(--color-purple)] via-transparent to-transparent animate-spin-reverse opacity-70"
                            style={{animationDuration: '2.5s'}}/>
                        <div
                            className="absolute inset-6 rounded-full border-[2px] border-transparent bg-gradient-to-tr from-[var(--color-deep-blue)] via-transparent to-transparent animate-spin opacity-60"
                            style={{animationDuration: '4s'}}/>

                        {/* Center logo */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-coral)] via-[var(--color-purple)] to-[var(--color-deep-blue)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-center animate-float">
                                <span className="text-white font-bold text-3xl tracking-tight relative z-10">E</span>
                                <div className="absolute inset-0 rounded-2xl bg-white/15 animate-pulse-subtle"/>
                            </div>
                        </div>

                        {/* Subtle outer glow */}
                        <div
                            className="absolute -inset-2 bg-gradient-to-b from-white/[0.05] to-transparent rounded-full border border-white/10"/>
                    </div>

                    {/* Brand */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[var(--on-surface)] to-[var(--on-surface)]/80 bg-clip-text text-transparent">
                            ETEQ
                        </h1>

                        {/* Animated underline */}
                        <div className="relative h-px w-48 mx-auto mb-4 bg-white/5">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-coral)] to-transparent animate-line-progress"/>
                        </div>

                        <p className="text-xs uppercase tracking-[0.4em] text-[var(--on-surface-variant)]/70 font-semibold animate-reveal-up">
                            Engineering Excellence
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}