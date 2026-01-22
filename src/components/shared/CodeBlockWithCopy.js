import React, { useState } from 'react';

/**
 * Code Block Component with Copy Functionality
 * Shows a copy icon on hover and allows copying code to clipboard
 * 
 * This is a low-level component. For easier usage, use:
 * - <CodeBlock /> for code blocks (pre elements)
 * - <InlineCode /> for inline code elements
 * 
 * @param {string} code - The code content to display
 * @param {Object} codeStyle - Style object for the code block (from codeBlockStyles or inlineCodeStyles)
 * @param {boolean} isInline - Whether this is an inline code element (default: false)
 */
const CodeBlockWithCopy = ({ code, codeStyle, isInline = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = async (e) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = code;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
            }
            document.body.removeChild(textArea);
        }
    };

    if (isInline) {
        // For inline code, wrap in a span with relative positioning
        return (
            <span
                style={{
                    position: 'relative',
                    display: 'inline-block'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <code style={codeStyle}>{code}</code>
                {isHovered && (
                    <button
                        onClick={handleCopy}
                        style={{
                            position: 'absolute',
                            top: '-24px',
                            right: '0px',
                            backgroundColor: '#667eea',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '3px 6px',
                            cursor: 'pointer',
                            fontSize: '11px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            zIndex: 10,
                            transition: 'all 0.2s ease',
                            whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#5568d3';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#667eea';
                            e.target.style.transform = 'scale(1)';
                        }}
                        title={copied ? 'Copied!' : 'Copy code'}
                    >
                        {copied ? (
                            <span>✓</span>
                        ) : (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        )}
                    </button>
                )}
            </span>
        );
    }

    // For code blocks (pre elements)
    return (
        <div
            style={{
                position: 'relative',
                marginTop: codeStyle.marginTop || '16px',
                marginBottom: codeStyle.marginBottom || '16px'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <pre style={codeStyle}>
                <code>{code}</code>
            </pre>
            {isHovered && (
                <button
                    onClick={handleCopy}
                    style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        backgroundColor: '#667eea',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '6px 12px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                        zIndex: 10,
                        transition: 'all 0.2s ease',
                        fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#5568d3';
                        e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#667eea';
                        e.target.style.transform = 'scale(1)';
                    }}
                    title={copied ? 'Copied!' : 'Copy code'}
                >
                    {copied ? (
                        <>
                            <span>✓</span>
                            <span>Copied!</span>
                        </>
                    ) : (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span>Copy</span>
                        </>
                    )}
                </button>
            )}
        </div>
    );
};

export default CodeBlockWithCopy;
