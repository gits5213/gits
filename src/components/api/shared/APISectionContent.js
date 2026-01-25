/**
 * Reusable Section Content Component for API Pages
 * Displays structured content with title, definition, and code examples
 * 
 * @param {Object} props
 * @param {string} props.subtitle - Subtitle/heading for the content
 * @param {string} props.definition - Definition text
 * @param {string} props.code - Code example (optional)
 * @param {React.ReactNode} props.children - Additional content (optional)
 * @param {string} props.id - Optional ID for scrolling
 */

import React from 'react';
import APICodeBlock from './APICodeBlock';

const APISectionContent = ({
  subtitle,
  definition,
  code = null,
  children = null,
  id = null
}) => {
  return (
    <div 
      id={id}
      style={{ 
        marginBottom: '32px',
        scrollMarginTop: '100px',
        transition: 'background-color 0.3s ease'
      }}
    >
      {subtitle && (
        <h4 style={{
          color: '#00416A',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '12px',
          textAlign: 'left'
        }}>
          {subtitle}
        </h4>
      )}
      
      {definition && (
        <p style={{
          marginBottom: code || children ? '16px' : '0',
          color: '#475569',
          lineHeight: '1.8',
          textAlign: 'left'
        }}>
          <strong style={{ color: '#1e293b' }}>Definition:</strong> {definition}
        </p>
      )}
      
      {code && <APICodeBlock code={code} />}
      
      {children && <div>{children}</div>}
    </div>
  );
};

export default APISectionContent;
