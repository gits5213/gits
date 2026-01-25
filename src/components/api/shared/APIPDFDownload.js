/**
 * Reusable PDF Download Section Component for API Pages
 * Displays downloadable PDF resources in a grid layout
 * 
 * @param {Object} props
 * @param {Array} props.downloads - Array of download objects with { title, description, pdfPath, downloadFileName }
 * @param {string} props.sectionTitle - Section title (default: '📥 Download Resources')
 * @param {string} props.borderColor - Border color for title (default: '#667eea')
 */

import React from 'react';
import { modernCardStyles, colors } from '../../../utils/globalStyles';

const APIPDFDownload = ({
  downloads = [],
  sectionTitle = '📥 Download Resources',
  borderColor = '#667eea'
}) => {
  if (!downloads || downloads.length === 0) {
    return null;
  }

  return (
    <div style={{
      ...modernCardStyles.base,
      marginBottom: '32px'
    }}>
      <h3 style={{ 
        color: '#1e293b', 
        fontSize: '28px', 
        marginBottom: '28px',
        fontWeight: '700',
        textAlign: 'left',
        letterSpacing: '-0.02em',
        paddingBottom: '16px',
        borderBottom: `3px solid ${borderColor}`
      }}>
        {sectionTitle}
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px'
      }}>
        {downloads.map((download, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid #e2e8f0',
              textAlign: 'left',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.primary;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 65, 106, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
            }}
          >
            <h4 style={{ 
              marginBottom: '10px',
              color: '#1e293b',
              fontSize: '16px',
              fontWeight: '600',
              textAlign: 'left',
              lineHeight: '1.3'
            }}>
              {download.title}
            </h4>
            <p style={{
              marginBottom: '16px',
              color: '#64748b',
              fontSize: '13px',
              lineHeight: '1.5',
              textAlign: 'left'
            }}>
              {download.description}
            </p>
            <a
              href={`/resources/${download.pdfPath}`}
              download={download.downloadFileName || download.pdfPath}
              style={{
                display: 'inline-block',
                backgroundColor: colors.primary,
                color: colors.textWhite,
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 65, 106, 0.2)',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.primaryDark;
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0, 65, 106, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.primary;
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 65, 106, 0.2)';
              }}
            >
              📄 Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default APIPDFDownload;
