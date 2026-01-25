import React from 'react';
// eslint-disable-next-line no-unused-vars
import link from '../../../utilities/links.json';
import AgilelLogo from '../../../images/tabs/agileLogo.png'; 
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const agile = () => {
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
                        The Agile Manifesto
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        Values and Principles for Effective Software Development
                    </p>
                </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <img 
                        src={getImageSrc(AgilelLogo)} 
                        alt='Agile Logo'
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

            {/* Main Content */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    The Key Values and Principles of Agile
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Nearly 20 years ago, 17 software developers came together in Snowbird, Utah to propose a new way of developing software "by doing it and helping others do it." Through this work, the signers of the Manifesto understood how much of an impact these principles would help them in the field of software development—but they had no idea how quickly their ideas would spread beyond their industry.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
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
                        borderLeft: '4px solid #00416A',
                        textAlign: 'left'
                    }}>
                        <strong style={{ color: '#00416A' }}>Individuals and interactions</strong> over processes and tools
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A',
                        textAlign: 'left'
                    }}>
                        <strong style={{ color: '#00416A' }}>Working software</strong> over comprehensive documentation
            </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A',
                        textAlign: 'left'
                    }}>
                        <strong style={{ color: '#00416A' }}>Customer collaboration</strong> over contract negotiation
            </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A',
                        textAlign: 'left'
                    }}>
                        <strong style={{ color: '#00416A' }}>Responding to change</strong> over following a plan
            </div>
            </div>

                <p style={leftAlignStyles.paragraph}>
                    Since that time, the original document has been used by groups as disparate as coders to Boy Scout Troops, from marketing departments to restaurants. Its universality is derived from a group of principles that can be broadly applied, easily learned, and rarely mastered completely. Before spreading to all corners of the globe, here are the key principles for incremental development that have made Agile what it is today:
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    The 12 Principles of Agile
                </h3>
                <ol style={leftAlignStyles.list}>
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
            <div style={leftAlignStyles.linksContainer}>
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
            </div>
            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}
export default agile;
