/**
 * Reusable API Hero Component
 * Displays framework name, description, and logo in a modern hero section
 * 
 * @param {Object} props
 * @param {string} props.title - Framework title (e.g., "CypressIO Framework")
 * @param {string} props.subtitle - Framework subtitle/description
 * @param {string|Object} props.logo - Logo image source
 * @param {string} props.gradientStart - Gradient start color (default: '#667eea')
 * @param {string} props.gradientEnd - Gradient end color (default: '#764ba2')
 * @param {string} props.logoAlt - Alt text for logo (default: '{title} Logo')
 */

import React from 'react';
import Image from 'next/image';
import { getImageSrc } from '../../../utils/getImageSrc';
import { modernHeroStyles, pageContainerStyles } from '../../../utils/globalStyles';

const APIHero = ({
  title,
  subtitle,
  logo,
  gradientStart = '#667eea',
  gradientEnd = '#764ba2',
  logoAlt = null
}) => {
  return (
    <div style={{
      ...modernHeroStyles.base,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px',
      flexWrap: 'wrap',
      textAlign: 'left',
      background: `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
      boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)`,
      position: 'relative',
      overflow: 'hidden',
      padding: '56px 48px'
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        transform: 'translate(20%, -20%)'
      }}></div>

      {/* Content */}
      <div style={{ flex: '1', minWidth: '300px', position: 'relative', zIndex: 1 }}>
        <h1 style={{
          ...modernHeroStyles.title,
          fontSize: 'clamp(36px, 5vw, 52px)',
          fontWeight: '800',
          letterSpacing: '-0.02em',
          marginBottom: '20px'
        }}>
          {title}
        </h1>
        <p style={{
          ...modernHeroStyles.subtitle,
          fontSize: 'clamp(18px, 2.5vw, 22px)',
          opacity: 0.95,
          lineHeight: '1.6'
        }}>
          {subtitle}
        </p>
      </div>

      {/* Logo */}
      {logo && (
        <div style={{
          flex: '0 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          position: 'relative',
          zIndex: 1
        }}>
          <img 
            src={getImageSrc(logo)} 
            alt={logoAlt || `${title} Logo`}
            style={{
              maxWidth: '300px',
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              filter: 'brightness(1.1)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default APIHero;
