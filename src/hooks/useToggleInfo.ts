import { useState, useCallback } from 'react';

/**
 * Custom hook for managing info tooltip toggle state
 * @returns Object with openInfo set and toggleInfo function
 */
export function useToggleInfo() {
  const [openInfo, setOpenInfo] = useState<Set<string>>(new Set());

  const toggleInfo = useCallback((id: string) => {
    setOpenInfo((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  return { openInfo, toggleInfo };
}

