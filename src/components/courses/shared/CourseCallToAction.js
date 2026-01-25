import React from 'react';

/**
 * Reusable Call to Action Component for Course Pages
 * @param {string} title - CTA title
 * @param {string} description - CTA description
 * @param {string} buttonText - Button text (default: "Enroll Now")
 * @param {string} enrollUrl - Enrollment URL (default: "https://gitsics.com/enroll/")
 */
const CourseCallToAction = ({ 
    title, 
    description, 
    buttonText = "Enroll Now",
    enrollUrl = "https://gitsics.com/enroll/"
}) => {
    return (
        <section style={{
            textAlign: 'center',
            marginBottom: '60px'
        }}>
            <div style={{
                backgroundColor: '#00416A',
                color: '#ffffff',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
                <h2 style={{
                    fontSize: '28px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    {title}
                </h2>
                <p style={{
                    fontSize: '18px',
                    marginBottom: '30px',
                    opacity: '0.9'
                }}>
                    {description}
                </p>
                <a 
                    href={enrollUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '15px 40px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#00416A',
                        backgroundColor: '#ffffff',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#f0f0f0';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#ffffff';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                    }}
                >
                    {buttonText}
                </a>
            </div>
        </section>
    );
};

export default CourseCallToAction;
