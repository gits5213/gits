import React from 'react';
import link from '../utilities/links.json';

const socialIcon = () => {
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
        }}>
            {/* Facebook */}
            <a 
                href={link.FACEBOOK} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Facebook"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#1877f2',
                    color: '#ffffff',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1565c0';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(24, 119, 242, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#1877f2';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            </a>

            {/* GitHub */}
            <a 
                href={link.GITHUB} 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#333333',
                    color: '#ffffff',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#24292e';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(51, 51, 51, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#333333';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>

            {/* Instagram */}
            <a 
                href={link.INSTRAGRAM} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    color: '#ffffff',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(225, 48, 108, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            </a>

            {/* YouTube */}
            <a 
                href={link.YOUTUBE} 
                target="_blank" 
                rel="noopener noreferrer"
                title="YouTube"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#ff0000',
                    color: '#ffffff',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#cc0000';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(255, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#ff0000';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            </a>

            {/* Slack */}
            <a 
                href={link.SLACK} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Slack"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#4a154b',
                    color: '#ffffff',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#350d36';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(74, 21, 75, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#4a154b';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 18.956 0a2.528 2.528 0 0 1 2.523 2.522v2.52H18.956zM18.956 6.313a2.528 2.528 0 0 1 2.523 2.521 2.528 2.528 0 0 1-2.523 2.521h-2.52V8.834a2.528 2.528 0 0 1 2.52-2.521zM15.165 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 20.207 8.834a2.528 2.528 0 0 1-2.521 2.523h-2.521V8.834zM15.165 18.956a2.528 2.528 0 0 1-2.521 2.523 2.528 2.528 0 0 1-2.521-2.523v-2.52h2.521a2.528 2.528 0 0 1 2.521 2.52v2.52zM13.644 15.165a2.528 2.528 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 16.165 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
                </svg>
            </a>

            {/* LinkedIn */}
            <a 
                href={link.LINKEDIN} 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#0077b5',
                    color: '#ffffff',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#005885';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 119, 181, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#0077b5';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </a>
        </div>
    );
  }   
export default socialIcon;
