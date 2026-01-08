import React from 'react';
import { colors } from '../../utils/globalStyles';

/**
 * Reusable PDF Download Component
 * @param {string} pdfPath - Path to PDF file in public/resources folder (e.g., 'Git_Commands_Playwright_TS_Course_Handout.pdf')
 * @param {string} title - Title text for the download section
 * @param {string} description - Description text for the download section
 * @param {string} downloadFileName - Optional custom download filename (defaults to pdfPath)
 */
const PdfDownload = ({ 
    pdfPath, 
    title = '📥 Download PDF Handout', 
    description = 'Download the complete handout',
    downloadFileName = null 
}) => {
    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = colors.primaryDark;
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = '0 6px 12px rgba(0, 65, 106, 0.3)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = colors.primary;
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 4px 6px rgba(0, 65, 106, 0.2)';
    };

    const downloadName = downloadFileName || pdfPath;

    return (
        <section style={{ 
            marginBottom: '40px',
            textAlign: 'center'
        }}>
            <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '12px',
                padding: '32px',
                border: '2px dashed #cbd5e1',
                marginBottom: '24px'
            }}>
                <h3 style={{ 
                    marginBottom: '16px',
                    color: '#1e293b',
                    fontSize: '24px',
                    fontWeight: '600'
                }}>
                    {title}
                </h3>
                <p style={{
                    marginBottom: '24px',
                    color: '#64748b',
                    fontSize: '16px',
                    lineHeight: '1.6'
                }}>
                    {description}
                </p>
                <a
                    href={`/resources/${pdfPath}`}
                    download={downloadName}
                    style={{
                        display: 'inline-block',
                        backgroundColor: colors.primary,
                        color: colors.textWhite,
                        padding: '14px 32px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 6px rgba(0, 65, 106, 0.2)',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    📄 Download PDF
                </a>
            </div>
        </section>
    );
};

export default PdfDownload;

