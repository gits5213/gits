/**
 * Shared scroll utility functions for smooth scrolling and highlighting
 */

/**
 * Scrolls to an element by ID with smooth animation and highlight effect
 * @param {string} elementId - The ID of the element to scroll to
 * @param {Object} options - Optional configuration
 * @param {string} options.highlightColor - Color for highlight effect (default: '#fef3c7')
 * @param {number} options.highlightDuration - Duration of highlight in ms (default: 2000)
 * @param {string} options.block - Scroll behavior block option (default: 'start')
 */
export const scrollToElement = (elementId, options = {}) => {
    const {
        highlightColor = '#fef3c7',
        highlightDuration = 2000,
        block = 'start'
    } = options;

    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block });
        // Add highlight effect
        const originalBgColor = element.style.backgroundColor || 'transparent';
        element.style.backgroundColor = highlightColor;
        element.style.transition = 'background-color 0.3s ease';
        
        setTimeout(() => {
            element.style.backgroundColor = originalBgColor;
        }, highlightDuration);
    }
};

/**
 * Scrolls to an item by number (for numbered items like ts-item-1, item-1)
 * @param {number} itemNum - The item number
 * @param {string} prefix - The prefix for the ID (default: 'item')
 * @param {Object} options - Optional configuration (same as scrollToElement)
 */
export const scrollToItem = (itemNum, prefix = 'item', options = {}) => {
    scrollToElement(`${prefix}-${itemNum}`, options);
};

/**
 * Scrolls to a TypeScript item
 * @param {number} itemNum - The item number
 * @param {Object} options - Optional configuration
 */
export const scrollToTypeScriptItem = (itemNum, options = {}) => {
    scrollToItem(itemNum, 'ts-item', options);
};

/**
 * Scrolls to a Git command section
 * @param {string} commandId - The command ID
 * @param {Object} options - Optional configuration
 */
export const scrollToGitCommand = (commandId, options = {}) => {
    scrollToElement(commandId, options);
};

/**
 * Scrolls to an intro section
 * @param {string} sectionId - The section ID
 * @param {Object} options - Optional configuration
 */
export const scrollToIntroSection = (sectionId, options = {}) => {
    scrollToElement(sectionId, options);
};

