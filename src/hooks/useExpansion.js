'use client';

import { useState, useCallback } from 'react';

export function useExpansion(initialState = null) {
    const [expandedIndex, setExpandedIndex] = useState(initialState);

    const toggleExpand = useCallback((index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    }, []);

    const isExpanded = useCallback((index) => {
        return expandedIndex === index;
    }, [expandedIndex]);

    return { expandedIndex, toggleExpand, isExpanded };
}
