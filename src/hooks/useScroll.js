'use client';

import { useCallback } from 'react';

const HEADER_HEIGHT = { default: 80, scrolled: 64 };

export function useScroll() {
    const scrollToAnchor = useCallback((hash, closeMobileMenu) => {
        const el = document.querySelector(hash);
        if (!el) return;

        closeMobileMenu?.();

        const offset = window.scrollY > 20 ? HEADER_HEIGHT.scrolled : HEADER_HEIGHT.default;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top, behavior: 'smooth' });
    }, []);

    const handleAnchorClick = useCallback((e, closeMobileMenu) => {
        const hash = e.currentTarget.getAttribute('href');
        if (!hash?.startsWith('#')) return;

        e.preventDefault();
        scrollToAnchor(hash, closeMobileMenu);
    }, [scrollToAnchor]);

    return { handleAnchorClick, scrollToAnchor };
}