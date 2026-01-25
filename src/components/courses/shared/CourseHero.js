import React from 'react';

/**
 * Reusable Hero Section Component for Course Pages
 * @param {string} title - Main course title
 * @param {string} subtitle - Course subtitle/description
 */
const CourseHero = ({ title, subtitle }) => {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
            color: '#ffffff',
            padding: '60px 20px',
            textAlign: 'center',
            marginBottom: '40px'
        }}>
            <h1 style={{ 
                fontSize: '48px', 
                marginBottom: '20px',
                fontWeight: 'bold'
            }}>
                {title}
            </h1>
            <p style={{
                fontSize: '20px',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6'
            }}>
                {subtitle}
            </p>
        </div>
    );
};

export default CourseHero;
