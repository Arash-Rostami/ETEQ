'use client';

import { useState } from 'react';

export function useContactForm(lang) {
    const [status, setStatus] = useState('idle');
    const [errors, setErrors] = useState({});

    const validate = (formData) => {
        const newErrors = {};
        const contactInfo = formData.get('contactInfo');

        if (!formData.get('name')) newErrors.name = true;
        if (!formData.get('title')) newErrors.title = true;
        if (!formData.get('message')) newErrors.message = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[\d\s\-\+\(\)]{7,20}$/;

        if (!contactInfo) {
            newErrors.contactInfo = 'required';
        } else if (!emailRegex.test(contactInfo) && !phoneRegex.test(contactInfo)) {
            newErrors.contactInfo = 'invalid';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        if (!validate(formData)) return;
        setStatus('loading');

        const payload = {
            name: formData.get('name'),
            title: formData.get('title'),
            contactInfo: formData.get('contactInfo'),
            message: formData.get('message'),
            lang: lang
        };

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return {
        status,
        errors,
        handleSubmit,
        resetStatus: () => setStatus('idle')
    };
}
