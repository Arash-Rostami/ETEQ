'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect when an element enters the viewport.
 * @param {Object} options - IntersectionObserver options.
 * @param {boolean} triggerOnce - Whether to trigger only once.
 * @returns {[Object, boolean]} - Ref to attach to the element and visibility state.
 */
export function useIntersectionObserver(options = {}, triggerOnce = true) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    // Use a ref for options to avoid re-triggering effect if object literal is passed
    const optionsRef = useRef(options);

    useEffect(() => {
        optionsRef.current = options;
    });

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (triggerOnce && elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            } else if (!triggerOnce) {
                setIsVisible(false);
            }
        }, optionsRef.current);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [triggerOnce]); // threshold/rootMargin changes are rare for these use cases

    return [elementRef, isVisible];
}
