import React from 'react';
import CodeBlockWithCopy from './CodeBlockWithCopy';
import { codeBlockStyles } from '../../utils/globalStyles';

/**
 * Reusable Code Block Component with Copy Functionality
 * Automatically adds copy button on hover for code blocks
 * 
 * @param {string} code - The code content to display
 * @param {string} language - Optional language hint (for future syntax highlighting)
 * @param {string} variant - Style variant: 'dark' (default) or 'light'
 * @param {Object} customStyle - Optional custom styles to override defaults
 * @param {boolean} showCopy - Whether to show copy button (default: true)
 */
const CodeBlock = ({ 
    code, 
    language = '', 
    variant = 'dark', 
    customStyle = {}, 
    showCopy = true 
}) => {
    const codeBlockStyle = { 
        ...codeBlockStyles[variant], 
        ...customStyle 
    };

    if (!showCopy) {
        // Return simple pre/code element without copy functionality
        return (
            <pre style={codeBlockStyle}>
                <code>{code}</code>
            </pre>
        );
    }

    // Return code block with copy functionality
    return (
        <CodeBlockWithCopy 
            code={code} 
            codeStyle={codeBlockStyle} 
            isInline={false} 
        />
    );
};

export default CodeBlock;
