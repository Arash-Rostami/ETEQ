'use client';

import { useState, useCallback } from 'react';

export function useAdminContacts(adminKey) {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchContacts = useCallback(async () => {
        if (!adminKey) return;
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/contacts', {
                headers: {
                    'Authorization': `Bearer ${adminKey}`
                }
            });
            const data = await response.json();
            if (data.success) {
                setContacts(data.data);
            } else {
                setError(data.error || 'Failed to fetch contacts');
            }
        } catch (err) {
            setError('An error occurred while fetching contacts');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [adminKey]);

    const deleteContact = useCallback(async (id) => {
        if (!adminKey) return false;
        try {
            const response = await fetch(`/api/contacts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${adminKey}`
                }
            });
            const data = await response.json();
            if (data.success) {
                setContacts(prev => prev.filter(c => c._id !== id));
                return true;
            }
            return false;
        } catch (err) {
            console.error('Delete error:', err);
            return false;
        }
    }, [adminKey]);

    return {
        contacts,
        loading,
        error,
        fetchContacts,
        deleteContact
    };
}
