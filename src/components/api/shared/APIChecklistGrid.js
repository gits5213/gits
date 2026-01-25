/**
 * Reusable Checklist Grid Component for API Pages
 * Displays checklist items in a modern grid layout
 * 
 * @param {Object} props
 * @param {Array} props.sections - Array of section objects with { id, title, items }
 * @param {Function} props.onSectionClick - Optional click handler for sections
 */

import React from 'react';
import { checklistGridStyles, colors } from '../../../utils/globalStyles';

const APIChecklistGrid = ({
  sections = [],
  onSectionClick = null
}) => {
  return (
    <div style={checklistGridStyles.modern}>
      {sections.map((section) => (
        <div 
          key={section.id} 
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '16px',
            transition: 'all 0.2s ease',
            cursor: onSectionClick ? 'pointer' : 'default'
          }}
          onClick={onSectionClick ? () => onSectionClick(section.id) : undefined}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.primary;
            e.currentTarget.style.backgroundColor = '#f0f7fa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.backgroundColor = '#f8fafc';
          }}
        >
          <h3 style={{
            color: '#00416A',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            display: 'block',
            width: '100%',
            margin: 0
          }}>
            {section.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default APIChecklistGrid;
