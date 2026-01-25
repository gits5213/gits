/**
 * Custom hook for managing collapsible section state
 * Provides a reusable way to handle expand/collapse functionality
 * 
 * @param {boolean} initialExpanded - Initial state (default: false)
 * @returns {Object} { isExpanded, toggle, expand, collapse }
 */
import { useState } from 'react';

export const useCollapsible = (initialExpanded = false) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  const toggle = () => setIsExpanded(prev => !prev);
  const expand = () => setIsExpanded(true);
  const collapse = () => setIsExpanded(false);

  return {
    isExpanded,
    toggle,
    expand,
    collapse
  };
};

export default useCollapsible;
