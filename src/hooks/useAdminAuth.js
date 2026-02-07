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

    const verifyKey = useCallback(async (key, isCheckOnly = false) => {
        try {
            const response = await fetch('/api/admin/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key }),
            });

            if (!response.ok) {
                return { success: false, errorType: 'server_error' };
            }

            const data = await response.json();

            if (data.success) {
                if (!isCheckOnly) {
                    const expiry = new Date().getTime() + 3600000; // 1 hour
                    localStorage.setItem('admin_key', JSON.stringify({ key, expiry }));
                }
                setAdminKey(key);
                setIsAdmin(true);
                return { success: true };
            }
            return { success: false, errorType: 'invalid_key' };
        } catch (error) {
            console.error('Verification error:', error);
            return { success: false, errorType: 'network_error' };
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

            const result = await verifyKey(key, true);

            // If it's a network error or server error, we TRUST the stored key (don't logout)
            // since we know it was previously valid and hasn't expired.
            if (result.success || result.errorType === 'network_error' || result.errorType === 'server_error') {
                setAdminKey(key);
                setIsAdmin(true);
                setLoading(false);
                return true;
            }

            // If explicitly invalid, logout
            if (result.errorType === 'invalid_key') {
                logout();
            }

            setLoading(false);
            return false;
        } catch (error) {
            // Unexpected error (like JSON parse) - safer to fail but maybe not logout
            // unless it's clearly corrupted. Let's keep it simple.
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
