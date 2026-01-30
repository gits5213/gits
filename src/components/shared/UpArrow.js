'use client';

import React from 'react';

/**
 * Reusable Up Arrow Component
 * Scrolls to top of page when clicked
 * 
 * @param {Object} props
 * @param {string} props.targetId - Optional: ID of element to scroll to (defaults to top of page)
 * @param {number} props.size - Size of the arrow icon (default: 20)
 * @param {string} props.color - Color of the arrow (default: '#667eea')
 * @param {Object} props.style - Additional inline styles
 * @param {string} props.title - Tooltip text (default: 'Back to top')
 */
const UpArrow = ({ 
    targetId = null, 
    size = 20, 
    color = '#667eea',
    style = {},
    title = 'Back to top'
}) => {
    const handleClick = () => {
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                marginLeft: '16px',
                ...style
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
            title={title}
            aria-label={title}
        >
            <svg 
                width={size} 
                height={size} 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M12 19V5M12 5L5 12M12 5L19 12" 
                    stroke={color} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default UpArrow;
