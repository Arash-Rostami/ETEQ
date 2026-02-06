'use client';

import { useState, useCallback } from 'react';
import { getContacts, deleteContact } from '@/services/actions';

export function useAdminContacts(adminKey) {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchContacts = useCallback(async () => {
        if (!adminKey) return;
        setLoading(true);
        setError(null);
        try {
            const result = await getContacts(adminKey);
            if (result.success) {
                setContacts(result.data);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError('Failed to fetch contacts');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [adminKey]);

    const removeContact = useCallback(async (id) => {
        if (!adminKey) return false;
        try {
            const result = await deleteContact(adminKey, id);
            if (result.success) {
                setContacts(prev => prev.filter(c => c._id !== id));
                return true;
            }
            return false;
        } catch (err) {
            console.error('Delete Error:', err);
            return false;
        }
    }, [adminKey]);

    return { contacts, loading, error, fetchContacts, removeContact };
}
