import React from 'react';

/**
 * Reusable Code Block Component
 * @param {string} code - The code content to display
 * @param {string} language - Optional language for syntax highlighting (not implemented yet)
 * @param {Object} customStyle - Optional custom styles to override defaults
 */
const CodeBlock = ({ code, language = '', customStyle = {} }) => {
    const defaultStyle = {
        backgroundColor: '#1e293b',
        color: '#e2e8f0',
        padding: '16px',
        borderRadius: '8px',
        overflow: 'auto',
        fontSize: '14px',
        fontFamily: 'Monaco, "Courier New", monospace',
        lineHeight: '1.6',
        border: '1px solid #334155',
        marginTop: '12px',
        marginBottom: '12px',
        textAlign: 'left',
        ...customStyle
    };

    return (
        <pre style={defaultStyle}>
            <code>{code}</code>
        </pre>
    );
};

export default CodeBlock;

