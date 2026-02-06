'use client';

import { useState, useCallback, useEffect } from 'react';

export function useAdminAuth() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminKey, setAdminKey] = useState(null);
    const [loading, setLoading] = useState(true);

    const logout = useCallback(() => {
        localStorage.removeItem('admin_key');
        setAdminKey(null);
        setIsAdmin(false);
    }, []);

    const verifyKey = useCallback(async (key) => {
        try {
            const response = await fetch('/api/admin/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key }),
            });
            const data = await response.json();

            if (data.success) {
                const expiry = new Date().getTime() + 3600000; // 1 hour
                localStorage.setItem('admin_key', JSON.stringify({ key, expiry }));
                setAdminKey(key);
                setIsAdmin(true);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Verification error:', error);
            return false;
        }
    }, []);

    const checkAuth = useCallback(async () => {
        setLoading(true);
        const stored = localStorage.getItem('admin_key');
        if (!stored) {
            setIsAdmin(false);
            setLoading(false);
            return false;
        }

        try {
            const { key, expiry } = JSON.parse(stored);
            const now = new Date().getTime();

            if (now > expiry) {
                logout();
                setLoading(false);
                return false;
            }

            const isValid = await verifyKey(key);
            if (!isValid) {
                logout();
                setLoading(false);
                return false;
            }

            setAdminKey(key);
            setIsAdmin(true);
            setLoading(false);
            return true;
        } catch (error) {
            logout();
            setLoading(false);
            return false;
        }
    }, [logout, verifyKey]);

    return {
        isAdmin,
        adminKey,
        loading,
        verifyKey,
        logout,
        checkAuth
    };
}
