'use client'

import React from 'react'
import Link from 'next/link'
import link from '../src/utilities/links.json'
import SocialIcon from '../src/components/socialIcon'
import FooterSection from '../src/components/layout/FooterSection'
import { footerStyles as styles } from '../src/utils/universityDesignSystem'

const Footer = () => {
  // Footer data structure - easily maintainable and scalable
  const footerData = {
    quickLinks: {
      title: 'Quick Links',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/how-it-works', label: 'How It Works' },
        { href: '/#training-programs', label: 'Services' },
      ],
      externalLinks: [
        { href: 'https://gitsics.com/contact/', label: 'Contact Us' },
        { href: 'https://us06web.zoom.us/j/9803798160', label: 'Zoom Meeting' },
        { href: 'https://mdszaman.com/', label: "MD's Portfolio" },
        { href: 'https://github.com/gits5213/gits5213/blob/master/README.md', label: "MD's Github" },
      ],
    },
    courses: {
      title: 'Courses',
      links: [
        { href: '/courses/sdet-roadmap', label: 'SDET Roadmap' },
        { href: '/courses/webdevelopment', label: 'Web Development' },
        { href: '/courses/code4kids', label: 'Code4Kids' },
        { href: '/courses/automation', label: 'UI Automation' },
        { href: '/courses/automation', label: 'API Automation' },
        { href: '/courses/manual', label: 'Manual Testing' },
        { href: '/courses/accessibility', label: '508 Compliance' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { href: '/docs', label: 'Documentation' },
        { href: '/apis', label: 'API Resources' },
        { href: '/practice', label: 'Practice Labs' },
        { href: '/aid', label: 'Student Aid' },
      ],
      externalLinks: [
        { href: link.QUESTIONS, label: 'Q&A Forum' },
        { href: 'https://jobright.ai/jobs/', label: 'Career Pathways' },
      ],
    },
    legal: {
      title: 'Legal & Support',
      links: [
        { href: '/terms-of-use', label: 'Terms of Use' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/copyright-notice', label: 'Copyright Notice' },
        { href: '/website-disclaimer', label: 'Website Disclaimer' },
      ],
      externalLinks: [
        { href: 'https://gitsics.com/', label: 'Global I Tech Solutions Inc.' },
      ],
    },
  }

  return (
    <footer style={{
      backgroundColor: '#003366',
      color: '#ffffff',
      padding: '60px 0 30px',
      marginTop: 'auto',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {/* Main Footer Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <FooterSection {...footerData.quickLinks} />
          <FooterSection {...footerData.courses} />
          <FooterSection {...footerData.resources} />
          <FooterSection {...footerData.legal} />
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          margin: '40px 0 30px'
        }}></div>

        {/* Bottom Section - Social Media & Copyright */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div>
            <SocialIcon />
          </div>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.6
          }}>
            &copy; {new Date().getFullYear()}{' '}
            <a 
              id="footer-copyright-company-link"
              href={link.ITNYCUSA} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#ffffff',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              GLOBAL I TECH SOLUTIONS IN THE CITY OF NEW YORK
            </a>
            {' '}All Rights Reserved
          </p>
          <p style={{
            margin: 0,
            fontSize: '13px',
            color: 'rgba(255,255,255,0.7)'
          }}>
            Providing quality education and training in the heart of New York City
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
