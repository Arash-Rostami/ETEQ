'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

export function useHeaderContact() {
    const [isOpen, setIsOpen] = useState(false);
    const contactRef = useRef(null);

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contactRef.current && !contactRef.current.contains(event.target)) {
                close();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            // Handle escape key
            const handleEsc = (e) => {
                if (e.key === 'Escape') close();
            };
            document.addEventListener('keydown', handleEsc);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
                document.removeEventListener('keydown', handleEsc);
            };
        }
    }, [isOpen, close]);

    return {
        isOpen,
        toggle,
        close,
        contactRef
    };
}
