import React from 'react';
import '../../../App.css';
import architecData from '../../../utilities/data/architectureData.json';
import selenium4Logo from '../../../images/architecture/selenium-4-Architecture.png'; 
import cypressLogo from '../../../images/architecture/cypressArchitecture.png'; 
import palywrightLogo from '../../../images/architecture/playwrightArchitecture.jpeg'; 
import webDriverIOLogo from '../../../images/architecture/webdriverIO-Architecture.png'; 
import { getImageSrc } from '../../../utils/getImageSrc';
const Architecture = () => {
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
                    Framework Architecture
                </h1>
                <p style={{
                    fontSize: '20px',
                    opacity: '0.95'
                }}>
                    Understanding the Architecture of Modern Test Automation Frameworks
                </p>
            </div>
            
            {/* Architecture Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Selenium 4 */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        {architecData.componentName.selenium4}
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        {architecData.architecData[0].SeleniumDescription}
                    </p>
                    <ul style={{
                        fontSize: '14px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px',
                        marginBottom: '20px'
                    }}>
                            <li>{architecData.seleniumDescription.sd1}</li>
                            <li>{architecData.seleniumDescription.sd2}</li>
                            <li>{architecData.seleniumDescription.sd3}</li>
                        </ul>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px'
                    }}>
                        <img 
                            src={getImageSrc(selenium4Logo)} 
                            alt='Selenium 4 Architecture'
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px'
                    }}>
                        <a 
                            href={architecData.links.seleniumArchDiagram_2}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '14px',
                                color: '#00416A',
                                textDecoration: 'underline'
                            }}
                        >
                            {architecData.componentName.testProject}
                        </a>
                        <span style={{ color: '#666' }}>|</span>
                        <a 
                            href={architecData.links.seleniumArchDiagram_2}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '14px',
                                color: '#00416A',
                                textDecoration: 'underline'
                            }}
                        >
                            {architecData.componentName.selenium}
                        </a>
                    </div>
                    </div>

                {/* CypressIO */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        {architecData.componentName.cypressIO}
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        {architecData.architecData[0].cypressIOdescription}
                    </p>
                    <ul style={{
                        fontSize: '14px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px',
                        marginBottom: '20px'
                    }}>
                            <li>{architecData.cypressIOdescription.cd1}</li>
                            <li>{architecData.cypressIOdescription.cd2}</li>
                            <li>{architecData.cypressIOdescription.cd3}</li>
                            <li>{architecData.cypressIOdescription.cd4}</li>
                            <li>{architecData.cypressIOdescription.cd5}</li>
                        </ul>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px'
                    }}>
                        <img 
                            src={getImageSrc(cypressLogo)} 
                            alt='CypressIO Architecture'
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px'
                    }}>
                        <a 
                            href={architecData.links.cypressArchDiagram_1}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '14px',
                                color: '#00416A',
                                textDecoration: 'underline'
                            }}
                        >
                            {architecData.componentName.cypressIOArchitecture}
                        </a>
                        <span style={{ color: '#666' }}>|</span>
                        <a 
                            href={architecData.links.cypressArchDiagram_2}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '14px',
                                color: '#00416A',
                                textDecoration: 'underline'
                            }}
                        >
                            {architecData.componentName.tutorialsPoint}
                        </a>
                    </div>
                    </div>

                {/* Playwright */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        {architecData.componentName.playWright}
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        {architecData.architecData[0].playWrightDescription}
                    </p>
                    <ul style={{
                        fontSize: '14px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px',
                        marginBottom: '20px'
                    }}>
                            <li>{architecData.playWrightDescription.pd1}</li>
                            <li>{architecData.playWrightDescription.pd2}</li>
                            <li>{architecData.playWrightDescription.pd3}</li>
                            <li>{architecData.playWrightDescription.pd4}</li>
                        </ul>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px'
                    }}>
                        <img 
                            src={getImageSrc(palywrightLogo)} 
                            alt='Playwright Architecture'
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px'
                    }}>
                        <a 
                            href={architecData.links.playwrightArchDiagram_1}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '14px',
                                color: '#00416A',
                                textDecoration: 'underline'
                            }}
                        >
                            {architecData.componentName.playWrightArchitecture}
                        </a>
                        <span style={{ color: '#666' }}>|</span>
                        <a 
                            href={architecData.links.playwrightArchDiagram_2}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '14px',
                                color: '#00416A',
                                textDecoration: 'underline'
                            }}
                        >
                            {architecData.componentName.programsBuzz}
                        </a>
                    </div>
                </div>

                {/* WebDriverIO */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #e0e0e0'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        {architecData.componentName.webDriverIO}
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        {architecData.architecData[0].webDriverIODescription}
                    </p>
                    <ul style={{
                        fontSize: '14px',
                        lineHeight: '2',
                        color: '#333',
                        paddingLeft: '20px',
                        marginBottom: '20px'
                    }}>
                            <li>{architecData.webDriverIODescription.wd1}</li>
                            <li>{architecData.webDriverIODescription.wd2}</li>
                        </ul>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px'
                    }}>
                        <img 
                            src={getImageSrc(webDriverIOLogo)} 
                            alt='WebDriverIO Architecture'
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px'
                    }}>
                        <a 
                            href={architecData.links.webDriverIOArchDiagram_1}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '14px',
                                color: '#00416A',
                                textDecoration: 'underline'
                            }}
                        >
                            {architecData.componentName.webDriverArchitecture}
                        </a>
                        <span style={{ color: '#666' }}>|</span>
                        <a 
                            href={architecData.links.webDriverIOArchDiagram_2}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '14px',
                                color: '#00416A',
                                textDecoration: 'underline'
                            }}
                        >
                            {architecData.componentName.tutorialsPoint}
                        </a>
                    </div>
                </div>
            </div>

            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}
export default Architecture;
