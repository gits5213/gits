import React from 'react';
import link from '../../../utilities/links.json';
import reactLogo from '../../../images/tabs/reactLogo.png';
import Footer from '../../../components/footer';
import { leftAlignStyles } from '../../../utils/globalStyles';

const resReact = () => {
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
                        ReactJS
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        A JavaScript Library for Building User Interfaces
                    </p>
                </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <img 
                        src={reactLogo} 
                        alt='React Logo'
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
                    href={link.REACT_GITHUB} 
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
                    ReactJS on GitHub                 
                </a>
                <a 
                    href={link.REACT_ORG} 
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
                    ReactJS Org                 
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
                    What is React?
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                }}>
                    <a href={link.REACT} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>React</a> is a JavaScript library for building user interfaces.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Declarative
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Component-Based
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                </p>

                <h3 style={{
                    color: '#00416A',
                    fontSize: '24px',
                    marginBottom: '15px',
                    marginTop: '30px',
                    fontWeight: 'bold'
                }}>
                    Learn Once, Write Anywhere
                </h3>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using <a href={link.REACT_NATIVE} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>React Native</a>.
                </p>
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
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                    justifyContent: 'center'
                }}>
                    <a
                        href={link.REACT}
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
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        ReactJS.org
                    </a>
                    <a
                        href={link.REACT_NATIVE}
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
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        ReactNative.dev
                    </a>
                    <a
                        href={link.REACT_MDL}
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
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        ReactMDL
                    </a>
                </div>
            </div>

            <div>
            </div>
            <section style={{ marginTop: '40px' }}>
                <Footer />
            </section>
        </div>
    )
}
export default resReact;
