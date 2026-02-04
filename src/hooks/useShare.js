'use client';

import { useState, useCallback } from 'react';

export function useShare(t) {
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://eteq.jp';

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
        if (isOpen) setMessage('');
    }, [isOpen]);

    const close = useCallback(() => {
        setIsOpen(false);
        setMessage('');
    }, []);

    const share = useCallback(async (method) => {
        const shareData = {
            title: 'ETEQ Engineering Consultancy',
            text: 'Expert engineering consulting with 35+ years of global leadership experience.',
            url: shareUrl
        };

        try {
            if (method === 'native' && navigator.share) {
                await navigator.share(shareData);
                setMessage(t?.footer?.share?.success || 'Shared successfully!');
            } else if (method === 'copy') {
                await navigator.clipboard.writeText(`${shareData.text} ${shareUrl}`);
                setMessage(t?.footer?.share?.copied || 'Link copied to clipboard!');
            } else if (method === 'email') {
                window.location.href = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text + '\n\n' + shareUrl)}`;
                return;
            }
        } catch (err) {
            console.log('Share failed', err);
        }

        setTimeout(() => {
            close();
        }, 2000);
    }, [shareUrl, close, t]);

    return {
        isOpen,
        message,
        toggle,
        close,
        share
    };
}