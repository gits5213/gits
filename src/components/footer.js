import React from 'react';
import { Link } from 'react-router-dom';
import link from '../utilities/links.json';
import SocialIcon from '../components/socialIcon';

const footer = () => {
    return(
        <footer style={{
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            padding: '60px 20px 30px',
            marginTop: '60px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
                marginBottom: '40px'
            }}>
                {/* Features Section */}
                <div>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>
                        Features
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href="https://gitsics.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                Global iTech Solutions
                            </a>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href={link.ITNYCUSA} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                React website
                            </a>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href={link.HEROKUAPP} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                Internet Website
                            </a>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href={link.REQRES_WEBSITE} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                ReqRes Website
                            </a>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href={link.ZAMAN_PORTFOLIO} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                Md's Portfolio
                            </a>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href={link.JSON_API_WEBSITE} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                JL Website
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Details Section */}
                <div>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>
                        Details
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/courses/sdet-roadmap"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                SDET ROADMAP
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/courses/webdevelopment"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                Web Development
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/courses/code4kids"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                Code4Kids
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/courses/automation"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                UI Automation
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/courses/automation"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                API Automation
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/courses/manual"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                UI Manual
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/courses/manual"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                API Manual
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/courses/accessibility"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                508 Compliance
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Technology Section */}
                <div>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>
                        Technology
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/how-it-works"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                How it works
                            </Link>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href="https://gitsics.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                Services
                            </a>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/about"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>
                        FAQ
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href={link.QUESTIONS} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                Questions
                            </a>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href={link.ANSWERE} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                Answers
                            </a>
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <Link 
                                to="/contact"
                                style={{
                                    color: '#cccccc',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#00416A'}
                                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Social Icons Section */}
            <div style={{
                borderTop: '1px solid #333',
                paddingTop: '30px',
                textAlign: 'center'
            }}>
                <div style={{ marginBottom: '20px' }}>
                <SocialIcon />
                </div>
                <p style={{
                    fontSize: '14px',
                    color: '#888',
                    margin: 0,
                    lineHeight: '1.6'
                }}>
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <a 
                        href={link.ITNYCUSA} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            color: '#00416A',
                            textDecoration: 'none'
                        }}
                    >
                        Global iTech & Solutions Inc.
                    </a>
                    {' '}All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
export default footer;
