'use client';

import {useEffect, useRef, useState} from 'react';

export function useIntersectionObserver(options = {}, triggerOnce = true) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (triggerOnce && elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            } else if (!triggerOnce) setIsVisible(false);
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) observer.observe(currentElement);

        return () => {
            if (currentElement) observer.unobserve(currentElement);
        };
    }, [options, triggerOnce]);

    return [elementRef, isVisible];
}
