import React from 'react';
import GoogleAd from '../../GoogleAd';
import helpLogo from '../../../images/tabs/helpLogo.png';
import link from '../../../utilities/links.json';
import Footer from '../../../components/footer';

const help = () => {
    const helpLinks = [
        { name: 'OpenAI - ChatGPT', url: link.chatGPT },
        { name: 'Development Roadmap', url: link.roadmap },
        { name: 'HTML Playground', url: link.htmlCompiler },
        { name: 'HTML CSS Javascript Playground', url: link.codePedHtmlCssJs },
        { name: 'HTML CSS Javascript Playground', url: link.codePenHtmlCssJS },
        { name: 'JAVA Playground', url: link.javaCompiler },
        { name: 'C# Playground', url: link.cSharpCompiler },
        { name: 'Python Playground', url: link.pythonCompiler },
        { name: 'Javascript Playground', url: link.javascriptCompiler }
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
                    Help
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    Useful Tools and Resources for Development
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
                    src={helpLogo} 
                    alt='Help Logo'
                    style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        borderRadius: '8px'
                    }}
                />
            </div>

            {/* Links Section */}
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
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Helpful Resources
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px'
                }}>
                    {helpLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                padding: '20px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                color: '#00416A',
                                fontWeight: '600',
                                fontSize: '16px',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#e7f3ff';
                                e.currentTarget.style.borderColor = '#00416A';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                                e.currentTarget.style.borderColor = '#e0e0e0';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
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
export default help;
