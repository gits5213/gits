import React from 'react';
import link from '../../../utilities/links.json';
import CypressLogo from '../../../images/tabs/CypressLogo.png';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const resCypress = () => {
    return(
        <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={leftAlignStyles.heroSection}>
                <h1 style={leftAlignStyles.heroTitle}>
                    CypressIO Framework
                </h1>
                <p style={leftAlignStyles.heroSubtitle}>
                    Fast, Easy and Reliable Testing for Anything That Runs in a Browser
                </p>
            </div>

            {/* Image Section */}
            <div style={leftAlignStyles.imageSection}>
                <img 
                    src={getImageSrc(CypressLogo)} 
                    alt='Cypress Logo'
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: 'auto',
                        borderRadius: '8px'
                    }}
                />
            </div>

            {/* GitHub Links */}
            <div style={leftAlignStyles.linksContainer}>
                <a 
                    href={link.CYPRESS_GITHUB} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#dc3545',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#c82333';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#dc3545';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    <img src={getImageSrc(link.GITHUB_ICON)} alt='github' style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                    Cypress on GitHub                 
                </a>
                <a 
                    href={link.CYPRESS_WEBSITE} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#28a745',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#218838';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#28a745';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    <img src={link.GITHUB_ICON} alt='github' style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                    Cypress Org                 
                </a>
            </div>

            <div>
            </div>
            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}
export default resCypress;
