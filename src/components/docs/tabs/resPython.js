import React from 'react';
import link from '../../../utilities/links.json';
import BackToTop from '../../backToTop';
import python_logo from '../../../images/tabs/python_logo.png';
import python_CHEAT_SHEET from '../../../images/tabs/Python_CheatSheet.jpeg';
import Footer from '../../../components/footer';
import { leftAlignStyles } from '../../../utils/globalStyles';

const resPython = () => {
    return(
        <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={{
                ...leftAlignStyles.heroSection,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={leftAlignStyles.heroTitle}>
                        PYTHON
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        A Popular Programming Language for Web Development and More
                    </p>
                </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <img 
                        src={python_logo} 
                        alt='Python Logo'
                        style={{
                            maxWidth: '300px',
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            filter: 'brightness(1.1)'
                        }}
                    />
                </div>
            </div>

            {/* GitHub Links */}
            <div style={leftAlignStyles.linksContainer}>
                <a 
                    href={link.PY_GITHUB} 
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
                    <img src={link.GITHUB_ICON} alt='github' style={{ marginRight: '10px', width: '20px', height: '20px' }} />
                        Python on GitHub                 
                    </a>
                <a 
                    href={link.PY_STYLE_GUIDE} 
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
                        Google Python Style Guide              
                    </a>
                </div>

            {/* Main Content */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    What is Python?
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                        Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
                    </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    It is used for:
                </h3>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                        <li>Web development (server-side)</li>
                        <li>Software development</li>
                        <li>Mathematics</li>
                        <li>System scripting</li>
                    </ul>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    What Can Python do?
                </h2>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                        <li>Python can be used on a server to create web applications.</li>
                        <li>Python can be used alongside software to create workflows.</li>
                        <li>Python can connect to database systems. It can also read and modify files.</li>
                        <li>Python can be used to handle big data and perform complex mathematics.</li>
                        <li>Python can be used for rapid prototyping, or for production-ready software development.</li>
                    </ul>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Why Python?
                </h2>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px'
                }}>
                        <li>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).</li>
                        <li>Python has a simple syntax similar to the English language.</li>
                        <li>Python has syntax that allows developers to write programs with fewer lines than some other programming languages.</li>
                        <li>Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</li>
                        <li>Python can be treated in a procedural way, an object-oriented way or a functional way.</li>
                    </ul>
                </div>

            {/* Python Cheat Sheet */}
            <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '30px',
                    fontWeight: 'bold'
                }}>
                    Python Cheat Sheet
                </h2>
                <img 
                    src={python_CHEAT_SHEET} 
                    alt='Python Cheat Sheet'
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                />
                </div>

                <div>
                    <BackToTop />
                </div> 
            <div>
            </div>
            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    )
}
export default resPython;
