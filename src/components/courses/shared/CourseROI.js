import React from 'react';

/**
 * Reusable ROI Section Component for Course Pages
 * @param {string} title - ROI section title
 * @param {Array<string>} paragraphs - Array of paragraph content (can include JSX)
 */
const CourseROI = ({ title, paragraphs }) => {
    return (
        <section style={{
            marginBottom: '60px'
        }}>
            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    {title}
                </h2>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '8px',
                    border: '2px solid #00416A',
                    lineHeight: '1.8'
                }}>
                    {paragraphs.map((paragraph, index) => (
                        <p 
                            key={index}
                            style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: index < paragraphs.length - 1 ? '20px' : 0
                            }}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseROI;
