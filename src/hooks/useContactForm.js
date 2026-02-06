'use client';

import {useState} from 'react';
import {submitContactForm} from '@/services/actions';

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
        formData.append('lang', lang);

        if (!validate(formData)) return;
        setStatus('loading');

        try {
            const result = await submitContactForm(formData);
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