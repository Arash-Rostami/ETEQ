'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';

export default function EntranceLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Show loader for at least 1.8 seconds for that "enterprise" feel
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[3000] animate-fade-out" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
            <Loader />
        </div>
    );
}
