'use client';

import { useState, useCallback } from 'react';

export function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(() => {
        setValue((v) => !v);
    }, []);

    const setOn = useCallback(() => setValue(true), []);
    const setOff = useCallback(() => setValue(false), []);

    return [value, toggle, { setOn, setOff }];
}
