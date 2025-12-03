import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import css_logo from '../../../images/tabs/cssLogo.png';
import css_image from '../../../images/tabs/cssImage.jpeg';
import Footer from '../../../components/footer';

const resCss = () => {
    const cssLinks = [
        { name: 'Learn More CSS', url: link.W3_CSS },
        { name: 'CSS - How To', url: link.W3_CSS_HOWTO },
        { name: 'CSS-TRICKS', url: link.CSS_TRICKS },
        { name: 'CSS - W3CSS Framework', url: link.W3_CSS_F }
    ];

    const cssFrameworks = [
        { name: 'BOOTSTRAP FW', url: link.BOOTSTRAP },
        { name: 'MATERIAL FW', url: link.MATERIAL },
        { name: 'Font Awesome ICONIC CSS TOOLKIT', url: link.FONT_AWESOME },
        { name: 'F.A ICONIC CSS Cheatsheet', url: link.FONT_AWESOME_CHEATSHEET }
    ];

    const reactCssFrameworks = [
        { name: 'TECHYONS FW', url: link.TACHYONS },
        { name: 'METERIAL UI FW', url: link.METERIAL_UI_F },
        { name: 'REACT BOOTSTRAP FW', url: link.REACT_BOOTSTRAP }
    ];

    return(
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 20px'
        }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                color: '#ffffff',
                padding: '60px 20px',
                textAlign: 'center',
                borderRadius: '12px',
                marginBottom: '40px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
                <h1 style={{
                    fontSize: '48px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    CSS
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    Cascading Style Sheets for Web Design
                </p>
            </div>

            {/* Image Section */}
            <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <img 
                    src={css_logo} 
                    alt='CSS Logo'
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '8px'
                    }}
                />
            </div>

            {/* GitHub Links */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                <a 
                    href={link.CSS_FRAMEWORK_TOPICS} 
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
                    CSS FW Topics on GitHub
                </a>
                <a 
                    href={link.REACT_CSS_FRAMEWORK_TOPICS} 
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
                    React CSS FW Topics on GitHub
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
                    What is CSS?
                </h2>
                <ul style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#333',
                    paddingLeft: '20px',
                    marginBottom: '30px'
                }}>
                    <li><strong>CSS</strong> stands for <strong>C</strong>ascading <strong>S</strong>tyle <strong>S</strong>heets</li>
                    <li>CSS describes <strong>how HTML elements are to be displayed on screen, paper, or in other media</strong></li>
                    <li>CSS <strong>saves a lot of work</strong>. It can control the layout of multiple web pages all at once</li>
                    <li>External stylesheets are stored in <strong>CSS files</strong></li>
                </ul>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    Why Use CSS?
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                    CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
                </p>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>
                    CSS Solved a Big Problem
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    HTML was NEVER intended to contain tags for formatting a web page! HTML was created to <strong>describe the content</strong> of a web page, like:
                </p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    fontFamily: 'monospace',
                    fontSize: '16px'
                }}>
                    <code style={{ color: '#00416A' }}>{'<'}h1{'>'}</code>This is a heading<code style={{ color: '#00416A' }}>{'</'}h1{'>'}</code><br />
                    <code style={{ color: '#00416A' }}>{'<'}p{'>'}</code>This is a paragraph.<code style={{ color: '#00416A' }}>{'</'}p{'>'}</code>
                </div>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    When tags like <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>{'<'}font{'>'}</code>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    To solve this problem, the World Wide Web Consortium (W3C) created CSS. CSS removed the style formatting from the HTML page!
                </p>
                <div style={{
                    backgroundColor: '#e7f3ff',
                    padding: '20px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #00416A',
                    marginTop: '20px'
                }}>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        margin: 0,
                        fontWeight: '600'
                    }}>
                        CSS Saves a Lot of Work! With an external stylesheet file, you can change the look of an entire website by changing just one file!
                    </p>
                </div>
            </div>

            {/* CSS Image */}
            <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                backgroundColor: '#f8f9fa',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <img 
                    src={css_image} 
                    alt='CSS Image'
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                />
            </div>

            {/* References */}
            <div style={{
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    References
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px',
                    marginBottom: '40px'
                }}>
                    {cssLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                padding: '12px 20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#00416A',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* CSS Framework */}
            <div style={{
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    CSS Framework
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px',
                    marginBottom: '40px'
                }}>
                    {cssFrameworks.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                padding: '12px 20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#00416A',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* React CSS Framework */}
            <div style={{
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    React CSS Framework
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px'
                }}>
                    {reactCssFrameworks.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                padding: '12px 20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#00416A',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    )
}
export default resCss;
