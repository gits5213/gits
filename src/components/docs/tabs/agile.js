import React from 'react';
import { Link } from 'react-router-dom';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import AgilelLogo from '../../../images/tabs/agileLogo.png'; 
import Footer from '../../../components/footer';

const agile = () => {
    return(
        <div style={{
            maxWidth: '1400px',
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
                    The Agile Manifesto
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    Values and Principles for Effective Software Development
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
                    src={AgilelLogo} 
                    alt='Agile Logo'
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        height: 'auto',
                        borderRadius: '8px'
                    }}
                />
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
                    The Key Values and Principles of Agile
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                    Nearly 20 years ago, 17 software developers came together in Snowbird, Utah to propose a new way of developing software "by doing it and helping others do it." Through this work, the signers of the Manifesto understood how much of an impact these principles would help them in the field of software development—but they had no idea how quickly their ideas would spread beyond their industry.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '20px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Core Values
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <strong style={{ color: '#00416A' }}>Individuals and interactions</strong> over processes and tools
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <strong style={{ color: '#00416A' }}>Working software</strong> over comprehensive documentation
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <strong style={{ color: '#00416A' }}>Customer collaboration</strong> over contract negotiation
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <strong style={{ color: '#00416A' }}>Responding to change</strong> over following a plan
                    </div>
                </div>

                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                    Since that time, the original document has been used by groups as disparate as coders to Boy Scout Troops, from marketing departments to restaurants. Its universality is derived from a group of principles that can be broadly applied, easily learned, and rarely mastered completely. Before spreading to all corners of the globe, here are the key principles for incremental development that have made Agile what it is today:
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '20px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    The 12 Principles of Agile
                </h3>
                <ol style={{
                    paddingLeft: '20px',
                    lineHeight: '2',
                    fontSize: '16px',
                    color: '#333'
                }}>
                    <li style={{ marginBottom: '12px' }}>Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</li>
                    <li style={{ marginBottom: '12px' }}>Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.</li>
                    <li style={{ marginBottom: '12px' }}>Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.</li>
                    <li style={{ marginBottom: '12px' }}>Business people and developers must work together daily throughout the project.</li>
                    <li style={{ marginBottom: '12px' }}>Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</li>
                    <li style={{ marginBottom: '12px' }}>The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</li>
                    <li style={{ marginBottom: '12px' }}>Working software is the primary measure of progress.</li>
                    <li style={{ marginBottom: '12px' }}>Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</li>
                    <li style={{ marginBottom: '12px' }}>Continuous attention to technical excellence and good design enhances agility.</li>
                    <li style={{ marginBottom: '12px' }}>Simplicity--the art of maximizing the amount of work not done--is essential.</li>
                    <li style={{ marginBottom: '12px' }}>The best architectures, requirements, and designs emerge from self-organizing teams.</li>
                    <li style={{ marginBottom: '12px' }}>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</li>
                </ol>
            </div>

            {/* Action Buttons */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                <a 
                    href={link.AGILE_MENUFESTO} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    New to Agile and Scrum
                </a>
                <a 
                    href={link.AGILE_TOOLS_TECHN} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: '#00416A',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#005a8a';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Agile Tools & Techniques
                </a>
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
export default agile;
