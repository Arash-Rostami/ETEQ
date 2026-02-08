'use client';

import {useState} from 'react';

export function useChatWidget() {
    const [chatOpen, setChatOpen] = useState(false);
    const [maximized, setMaximized] = useState(false);

    const maintenance = false;

    const toggleChat = () => setChatOpen(prev => !prev);
    const openChat = () => setChatOpen(true);
    const closeChat = () => setChatOpen(false);

    const toggleMaximized = () => setMaximized(prev => !prev);
    const maximize = () => setMaximized(true);
    const minimize = () => setMaximized(false);

    const handleClose = () => {
        closeChat();
        minimize();
    };

    return {
        chatOpen,
        toggleChat,
        openChat,
        closeChat: handleClose,
        maximized,
        toggleMaximized,
        maximize,
        minimize,
        maintenance
    };
}