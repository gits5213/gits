/**
 * FooterSection Component - Individual footer section with heading and links
 * Part of the modern university footer design
 */

import React from 'react'
import Link from 'next/link'
import { footerStyles as styles, colors, typography, spacing, transitions } from '../../utils/universityDesignSystem'

const FooterSection = ({ title, links = [], externalLinks = [] }) => {
  // Generate section key from title for ID generation
  const sectionKey = title ? title.toLowerCase().replace(/\s+/g, '-') : 'section';
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      {title && (
        <h3 style={{
          margin: 0,
          fontSize: '16px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '0.3px',
          textTransform: 'uppercase'
        }}>
          {title}
        </h3>
      )}
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {links.map((link, index) => {
          const linkKey = link.label.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and');
          return (
            <li key={index}>
              <Link 
                id={`footer-${sectionKey}-${linkKey}-link`}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 400,
                  transition: 'color 0.2s',
                  display: 'block'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        {externalLinks.map((link, index) => {
          const linkKey = link.label.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and').replace(/['"]/g, '');
          return (
            <li key={`external-${index}`}>
              <a 
                id={`footer-${sectionKey}-${linkKey}-link`}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 400,
                  transition: 'color 0.2s',
                  display: 'block'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default FooterSection
