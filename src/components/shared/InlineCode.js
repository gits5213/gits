import React from 'react';
import CodeBlockWithCopy from './CodeBlockWithCopy';
import { inlineCodeStyles } from '../../utils/globalStyles';

/**
 * Reusable Inline Code Component with Copy Functionality
 * Automatically adds copy icon on hover for inline code elements
 * 
 * @param {string} children - The code text to display
 * @param {Object} customStyle - Optional custom styles to override defaults
 * @param {boolean} showCopy - Whether to show copy button (default: true)
 */
const InlineCode = ({ children, customStyle = {}, showCopy = true }) => {
    const codeText = typeof children === 'string' ? children : String(children);
    const inlineCodeStyle = { ...inlineCodeStyles.base, ...customStyle };

    if (!showCopy) {
        // Return simple code element without copy functionality
        return <code style={inlineCodeStyle}>{codeText}</code>;
    }

    // Return code with copy functionality
    return (
        <CodeBlockWithCopy 
            code={codeText} 
            codeStyle={inlineCodeStyle} 
            isInline={true} 
        />
    );
};

export default InlineCode;
