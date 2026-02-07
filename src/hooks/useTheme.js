'use client';

import {useEffect, useState} from 'react';

export function useTheme() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const dark = saved === 'dark' || (!saved && prefersDark);
        setIsDark(dark);
        document.documentElement.classList.toggle('dark', dark);
    }, []);

    const toggle = (event) => {
        if (!event || !document.startViewTransition) {
            setIsDark(prev => {
                const next = !prev;
                document.documentElement.classList.toggle('dark', next);
                localStorage.setItem('theme', next ? 'dark' : 'light');
                return next;
            });
            return;
        }

        const x = event.clientX;
        const y = event.clientY;
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            setIsDark(prev => {
                const next = !prev;
                document.documentElement.classList.toggle('dark', next);
                localStorage.setItem('theme', next ? 'dark' : 'light');
                return next;
            });
        });

        transition.ready.then(() => {
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${endRadius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 650,
                    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };

    return {isDark, toggle};
}