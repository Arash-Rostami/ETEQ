'use client';

import { useState, useCallback, useEffect } from 'react';
import { verifyAdminKey } from '@/services/actions';

export function useAdminAuth() {
    const [adminKey, setAdminKey] = useState(null);
    const [status, setStatus] = useState('loading'); // 'loading', 'authenticated', 'unauthenticated'

    const checkSession = useCallback(async () => {
        try {
            const stored = localStorage.getItem('admin_key');
            if (!stored) {
                setAdminKey(null);
                setStatus('unauthenticated');
                return null;
            }

            const { key, expiry } = JSON.parse(stored);
            const now = new Date().getTime();

            if (now > expiry) {
                localStorage.removeItem('admin_key');
                setAdminKey(null);
                setStatus('unauthenticated');
                return null;
            }

            const isValid = await verifyAdminKey(key);
            if (!isValid) {
                localStorage.removeItem('admin_key');
                setAdminKey(null);
                setStatus('unauthenticated');
                return null;
            }

            setAdminKey(key);
            setStatus('authenticated');
            return key;
        } catch (error) {
            console.error('Auth Check Error:', error);
            setStatus('unauthenticated');
            return null;
        }
    }, []);

    const login = async (key) => {
        const isValid = await verifyAdminKey(key);
        if (isValid) {
            const expiry = new Date().getTime() + 3600000; // 1 hour
            localStorage.setItem('admin_key', JSON.stringify({ key, expiry }));
            setAdminKey(key);
            setStatus('authenticated');
            return true;
        }
        return false;
    };

    const logout = useCallback(() => {
        localStorage.removeItem('admin_key');
        setAdminKey(null);
        setStatus('unauthenticated');
    }, []);

    useEffect(() => {
        checkSession();
    }, [checkSession]);

    return { adminKey, status, login, logout, checkSession };
}
