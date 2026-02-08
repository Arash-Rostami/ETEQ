'use client';

import { useToggle } from '@/hooks/useToggle';

export function useChatWidget() {
    const [chatOpen, toggleChat, { setOn: openChat, setOff: closeChat }] = useToggle(false);
    const [maximized, toggleMaximized, { setOn: maximize, setOff: minimize }] = useToggle(false);

    // Set to true to enable maintenance mode
    const maintenance = false;

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
