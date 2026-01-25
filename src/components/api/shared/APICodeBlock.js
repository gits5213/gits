/**
 * Reusable Code Block Component for API Pages
 * Displays code with consistent styling and optional syntax highlighting
 * 
 * @param {Object} props
 * @param {string} props.code - Code content to display
 * @param {string} props.language - Language for syntax highlighting (optional)
 * @param {string} props.variant - Style variant: 'dark' or 'light' (default: 'dark')
 * @param {Object} props.style - Additional inline styles
 */

import React from 'react';
import { codeBlockStyles } from '../../../utils/globalStyles';

const APICodeBlock = ({
  code,
  language = null,
  variant = 'dark',
  style = {}
}) => {
  const baseStyle = variant === 'dark' ? codeBlockStyles.dark : codeBlockStyles.light;

  return (
    <pre style={{
      ...baseStyle,
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
      ...style
    }}>
      {code}
    </pre>
  );
};

export default APICodeBlock;
