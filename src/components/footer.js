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
            marginTop: '60px',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '40px',
                marginBottom: '40px',
                width: '100%',
                boxSizing: 'border-box'
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
                        <li style={{ marginBottom: '12px' }}>
                            <a 
                                href="https://jobright.ai/jobs/" 
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
                                Career Pathways
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact/Location Section */}
                <div>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>
                        Location
                    </h3>
                    <div style={{
                        color: '#cccccc',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        marginBottom: '20px'
                    }}>
                        <p style={{
                            margin: '0 0 12px 0',
                            fontWeight: '500'
                        }}>
                            8905 202nd Street
                        </p>
                        <p style={{
                            margin: '0 0 12px 0'
                        }}>
                            Hollis, NY 11423
                        </p>
                    </div>
                    <div style={{
                        width: '100%',
                        height: '200px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}>
                        <iframe
                            title="GITS Location Map"
                            src="https://www.google.com/maps?q=8905+202nd+Street,+Hollis,+NY+11423&output=embed"
                            width="100%"
                            height="200"
                            style={{
                                border: 0,
                                width: '100%',
                                height: '100%'
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=8905+202nd+Street,+Hollis,+NY+11423"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            marginTop: '12px',
                            color: '#00416A',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#68dca8'}
                        onMouseLeave={(e) => e.target.style.color = '#00416A'}
                    >
                        View on Google Maps →
                    </a>
                </div>
            </div>

            {/* Social Icons Section */}
            <div style={{
                borderTop: '1px solid #333',
                paddingTop: '30px',
                textAlign: 'center',
                maxWidth: '1400px',
                margin: '0 auto',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <div style={{ marginBottom: '20px' }}>
                <SocialIcon />
                </div>
                <p style={{
                    fontSize: '14px',
                    color: '#888',
                    margin: 0,
                    lineHeight: '1.6',
                    padding: '0 20px'
                }}>
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <a 
                        href={link.ITNYCUSA} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            color: '#00416A',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#68dca8'}
                        onMouseLeave={(e) => e.target.style.color = '#00416A'}
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
