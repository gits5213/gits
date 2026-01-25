/**
 * Reusable Collapsible Section Component for API Pages
 * Provides consistent expand/collapse functionality with modern styling
 * 
 * @param {Object} props
 * @param {string} props.title - Section title
 * @param {boolean} props.isExpanded - Whether section is expanded
 * @param {Function} props.onToggle - Toggle function
 * @param {React.ReactNode} props.children - Content to show when expanded
 * @param {string} props.borderColor - Border color when expanded (default: '#667eea')
 * @param {string} props.id - Optional ID for the section
 */

import React from 'react';
import { modernCardStyles, colors } from '../../../utils/globalStyles';

const APICollapsibleSection = ({
  title,
  isExpanded,
  onToggle,
  children,
  borderColor = '#667eea',
  id = null
}) => {
  return (
    <div style={{
      ...modernCardStyles.base,
      marginBottom: '48px'
    }}>
      <div
        onClick={onToggle}
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: isExpanded ? '24px' : '0',
          paddingBottom: isExpanded ? '20px' : '0',
          borderBottom: isExpanded ? `3px solid ${borderColor}` : 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.backgroundColor = '#f0f7fa';
          }
        }}
        onMouseLeave={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        <h2 
          id={id}
          style={{ 
            color: '#1e293b', 
            fontSize: '28px', 
            marginBottom: 0,
            fontWeight: '700',
            textAlign: 'left',
            scrollMarginTop: '100px',
            transition: 'background-color 0.3s ease',
            margin: 0,
            letterSpacing: '-0.02em'
          }}
        >
          {title}
        </h2>
        <span style={{
          fontSize: '32px',
          color: borderColor,
          fontWeight: 'bold',
          marginLeft: '20px',
          flexShrink: 0,
          transition: 'transform 0.3s ease'
        }}>
          {isExpanded ? '−' : '+'}
        </span>
      </div>

      {isExpanded && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default APICollapsibleSection;
