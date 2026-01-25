'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import websiteLogo from '../src/images/websiteLogo.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/docs', label: 'Docs' },
    { href: '/apis', label: 'API' },
    { href: '/aid', label: 'AID' },
    { href: '/practice', label: 'Practice' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Sticky Announcement Banner */}
      <div style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1002,
        backgroundColor: '#003366',
        color: '#ffffff',
        padding: '10px 0',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          animation: 'scrollText 30s linear infinite',
          whiteSpace: 'nowrap'
        }}>
          <span style={{
            paddingRight: '100px',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.3px'
          }}>
            Enrolling now for upcoming QA Engineering and Web Development programs. Limited availability. Contact us at +1 (917) 561-6554 for enrollment information.
          </span>
          <span style={{
            paddingRight: '100px',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.3px'
          }}>
            Enrolling now for upcoming QA Engineering and Web Development programs. Limited availability. Contact us at +1 (917) 561-6554 for enrollment information.
          </span>
          <span style={{
            paddingRight: '100px',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.3px'
          }}>
            Enrolling now for upcoming QA Engineering and Web Development programs. Limited availability. Contact us at +1 (917) 561-6554 for enrollment information.
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: '40px',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: `0 24px`,
        }}>
          {/* Logo, Navigation, and Enroll Now Section */}
          <div className="header-main-row" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 0',
            borderBottom: '1px solid #e0e0e0',
            position: 'relative',
            gap: '16px',
            flexWrap: 'nowrap'
          }}>
            {/* Logo */}
            <Link 
              href="/" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                textDecoration: 'none',
                color: '#003366',
                flexShrink: 0,
                minWidth: 0
              }}
              onClick={closeMobileMenu}
            >
              <Image 
                src={websiteLogo}
                alt="GITS Logo" 
                width={70}
                height={70}
                style={{ 
                  height: '70px', 
                  width: 'auto',
                  objectFit: 'contain',
                  flexShrink: 0
                }} 
              />
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '4px',
                minWidth: 0,
                overflow: 'hidden'
              }}>
                <h1 className="brand-title" style={{ 
                  margin: 0, 
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#003366',
                  lineHeight: 1.1,
                  letterSpacing: '-0.5px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  GLOBAL I TECH SOLUTIONS
                </h1>
                <span className="brand-subtitle" style={{
                  fontSize: '15px',
                  color: '#666666',
                  fontWeight: 400,
                  letterSpacing: '0.3px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  IN THE CITY OF NEW YORK
                </span>
              </div>
            </Link>

            {/* Main Navigation - Center */}
            <nav className="desktop-nav" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              flex: 1,
              justifyContent: 'center',
              padding: '0 12px',
              minWidth: 0,
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  style={{
                    padding: '16px 16px',
                    textDecoration: 'none',
                    color: isActive(link.href) ? '#003366' : '#666666',
                    fontSize: '15px',
                    fontWeight: isActive(link.href) ? 600 : 400,
                    borderBottom: isActive(link.href) ? '3px solid #003366' : '3px solid transparent',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    top: '1px',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.href)) {
                      e.currentTarget.style.color = '#003366'
                      e.currentTarget.style.borderBottomColor = '#003366'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href)) {
                      e.currentTarget.style.color = '#666666'
                      e.currentTarget.style.borderBottomColor = 'transparent'
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions - Enroll Now and Hamburger */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0
            }}>
              {/* Enroll Now Button */}
              <a
                href="https://gitsics.com/enroll/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '10px 24px',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#002244';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#003366';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Enroll Now
              </a>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu-button"
                style={{
                  display: 'none',
                  flexDirection: 'column',
                  gap: '5px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                aria-label="Toggle menu"
              >
                <span style={{
                  width: '24px',
                  height: '3px',
                  backgroundColor: '#003366',
                  borderRadius: '2px',
                  transition: 'all 0.3s',
                  transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
                }}></span>
                <span style={{
                  width: '24px',
                  height: '3px',
                  backgroundColor: '#003366',
                  borderRadius: '2px',
                  transition: 'all 0.3s',
                  opacity: mobileMenuOpen ? 0 : 1
                }}></span>
                <span style={{
                  width: '24px',
                  height: '3px',
                  backgroundColor: '#003366',
                  borderRadius: '2px',
                  transition: 'all 0.3s',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
                }}></span>
              </button>
            </div>
          </div>
        </div>


        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e0e0e0',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 999
          }}>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px 24px',
              gap: '8px'
            }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={closeMobileMenu}
                  style={{
                    padding: '12px 16px',
                    textDecoration: 'none',
                    color: isActive(link.href) ? '#003366' : '#666666',
                    fontWeight: isActive(link.href) ? 600 : 400,
                    borderRadius: '4px',
                    backgroundColor: isActive(link.href) ? '#f0f4f8' : 'transparent',
                    transition: 'all 0.2s'
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://gitsics.com/enroll/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                style={{
                  marginTop: '8px',
                  padding: '12px 24px',
                  backgroundColor: '#003366',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: 600,
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#002244';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#003366';
                }}
              >
                Enroll Now
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
