'use client';

import {useCallback, useEffect, useRef, useState} from 'react';

export function useMomentaryActive(delay = 1000) {
    const [activeIndex, setActiveIndex] = useState(null);
    const timeoutRef = useRef(null);

    const trigger = useCallback((index) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setActiveIndex(index);

        timeoutRef.current = setTimeout(() => {
            setActiveIndex(null);
            timeoutRef.current = null;
        }, delay);
    }, [delay]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return [activeIndex, trigger];
}
