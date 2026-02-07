import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/hooks/useAdminAuth';

export function useAdminModal(isOpen, onClose, lang) {
    const [key, setKey] = useState('');
    const [error, setError] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();
    const { verifyKey } = useAdminAuth();

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
            setKey('');
            setError(false);
            setShowPassword(false);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setError(false);

        const result = await verifyKey(key);

        if (result.success) {
            router.push(`/${lang}/admin/contact`);
            onClose();
        } else {
            setError(true);
        }
        setIsProcessing(false);
    };

    const togglePassword = () => setShowPassword((prev) => !prev);

    return {
        key,
        setKey,
        error,
        isProcessing,
        showPassword,
        togglePassword,
        handleSubmit
    };
}