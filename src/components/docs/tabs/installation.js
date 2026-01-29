import React from 'react';
import link from '../../../utilities/links.json';
import { leftAlignStyles } from '../../../utils/globalStyles';

const Installation = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Highlight the section briefly
            const originalBgColor = element.style.backgroundColor || 'transparent';
            element.style.backgroundColor = '#fef3c7';
            element.style.transition = 'background-color 0.3s ease';
            setTimeout(() => {
                element.style.backgroundColor = originalBgColor;
            }, 2000);
        }
    };

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
                        Installation Guides
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        Step-by-step installation instructions for development tools
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Introduction to Installation Guides
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    This page provides comprehensive installation guides for essential development tools. Each section contains detailed, step-by-step instructions for Windows and macOS platforms.
                </p>
                <p style={leftAlignStyles.paragraph}>
                    Follow the instructions carefully for your operating system to ensure proper installation and configuration of each tool.
                </p>
            </div>

            {/* Table of Contents */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Table of Contents
                </h2>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    marginBottom: '40px'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px'
                    }}>
                        {/* VS Code */}
                        <div>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                VS Code
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#vscode-mac"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('vscode-mac');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        VS Code Install for Mac
                                    </a>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#vscode-windows"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('vscode-windows');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        VS Code Install for Windows
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Git */}
                        <div>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                Git
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#git-mac"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('git-mac');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Git Install for Mac
                                    </a>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#git-windows"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('git-windows');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Git Install for Windows
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Node.js */}
                        <div>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                Node.js
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#nodejs-mac"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('nodejs-mac');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Node.js Install for Mac
                                    </a>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#nodejs-windows"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('nodejs-windows');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Node.js Install for Windows
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Java */}
                        <div>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                Java
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#java-mac"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('java-mac');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Java Install for Mac
                                    </a>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#java-windows"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('java-windows');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Java Install for Windows
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* C# */}
                        <div>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                C#
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#csharp-mac"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('csharp-mac');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        C# Install for Mac
                                    </a>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#csharp-windows"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('csharp-windows');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        C# Install for Windows
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Python */}
                        <div>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                Python
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#python-mac"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('python-mac');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Python Install for Mac
                                    </a>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#python-windows"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('python-windows');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Python Install for Windows
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Postman */}
                        <div>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                Postman
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#postman-mac"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('postman-mac');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Postman Install for Mac (including Newman)
                                    </a>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#postman-windows"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('postman-windows');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Postman Install for Windows (including Newman)
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Appium */}
                        <div>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                Appium
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#appium-mac"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('appium-mac');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Appium Install for Mac
                                    </a>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#appium-windows"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('appium-windows');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        Appium Install for Windows
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* JMeter */}
                        <div>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                JMeter
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#jmeter-mac"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('jmeter-mac');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        JMeter Install for Mac
                                    </a>
                                </li>
                                <li style={{ marginBottom: '8px' }}>
                                    <a
                                        href="#jmeter-windows"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('jmeter-windows');
                                        }}
                                        style={{
                                            color: '#00416A',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            display: 'inline-block',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = '#005a8a';
                                            e.target.style.borderBottomColor = '#005a8a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = '#00416A';
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                    >
                                        JMeter Install for Windows
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* VS Code Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* VS Code Mac Installation */}
                <div id="vscode-mac" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        VS Code Install for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download VS Code
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://code.visualstudio.com/</a></li>
                            <li>Click on <strong>"Download for Mac"</strong></li>
                            <li>The file (VSCode-darwin-universal.zip or VSCode-darwin-arm64.zip) will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Extract and Install
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Finder and locate the downloaded ZIP file</li>
                            <li>Double-click to extract (or right-click and select "Open With" → Archive Utility)</li>
                            <li>Drag <strong>Visual Studio Code.app</strong> to your <strong>Applications</strong> folder</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Launch VS Code
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open <strong>Applications</strong> folder</li>
                            <li>Double-click <strong>Visual Studio Code</strong></li>
                            <li>If prompted about security, go to System Preferences → Security & Privacy → Click "Open Anyway"</li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Add to PATH (Optional)
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open VS Code</li>
                            <li>Press <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Cmd+Shift+P</code></li>
                            <li>Type "Shell Command: Install 'code' command in PATH"</li>
                            <li>Restart Terminal and verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>code --version</code></li>
                        </ul>
                    </div>
                </div>

                {/* VS Code Windows Installation */}
                <div id="vscode-windows" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        VS Code Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download VS Code
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://code.visualstudio.com/</a></li>
                            <li>Click on <strong>"Download for Windows"</strong></li>
                            <li>The installer file (VSCodeUserSetup-x64-xxx.exe) will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Run the Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Locate the downloaded file in your Downloads folder</li>
                            <li>Double-click <strong>VSCodeUserSetup-x64-xxx.exe</strong></li>
                            <li>If prompted by User Account Control, click <strong>"Yes"</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Installation Options
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Accept the license agreement</li>
                            <li>Choose installation location (default is recommended)</li>
                            <li>Select additional tasks: Add to PATH (recommended), Register Code as editor for supported file types</li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Complete Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Click <strong>"Install"</strong> button</li>
                            <li>Wait for the installation to complete</li>
                            <li>Click <strong>"Finish"</strong> button</li>
                            <li>VS Code will launch automatically</li>
                            <li>Verify: Open Command Prompt and type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>code --version</code></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Git Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Git Mac Installation */}
                <div id="git-mac" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Git Install for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Check if Git is Already Installed
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>git --version</code></li>
                            <li>If Git is installed, you'll see the version number</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Install Xcode Command Line Tools (Recommended)
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>xcode-select --install</code></li>
                            <li>Click <strong>"Install"</strong> in the popup dialog</li>
                            <li>Wait for installation to complete</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Alternative - Install via Homebrew
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>If you have Homebrew installed, run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>brew install git</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Configure Git (First Time Setup)
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Set your name: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>git config --global user.name "Your Name"</code></li>
                            <li>Set your email: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>git config --global user.email "your.email@example.com"</code></li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>git --version</code></li>
                        </ul>
                    </div>
                </div>

                {/* Git Windows Installation */}
                <div id="git-windows" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Git Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download Git for Windows
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://git-scm.com/download/win</a></li>
                            <li>Click on <strong>"Download"</strong> button</li>
                            <li>The installer file will download automatically</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Run the Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded installer file</li>
                            <li>Click <strong>"Yes"</strong> if prompted by User Account Control</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Select Components
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Accept default components (recommended)</li>
                            <li>Ensure <strong>"Git Bash Here"</strong> and <strong>"Git GUI Here"</strong> are selected</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Choose Default Editor
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Select your preferred editor (VS Code, Notepad++, etc.)</li>
                            <li>Or keep default (Vim)</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Configure Line Ending Conversions
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Select <strong>"Checkout Windows-style, commit Unix-style line endings"</strong> (recommended)</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 6: Choose Terminal Emulator
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Select <strong>"Use Windows default console window"</strong> or <strong>"Use MinTTY"</strong></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 7: Complete Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Click <strong>"Install"</strong></li>
                            <li>Wait for installation to complete</li>
                            <li>Click <strong>"Finish"</strong></li>
                            <li>Verify: Right-click on Desktop → You should see <strong>"Git GUI Here"</strong> and <strong>"Git Bash Here"</strong> options</li>
                            <li>Or open Command Prompt and type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>git --version</code></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Node.js Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Node.js Mac Installation */}
                <div id="nodejs-mac" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Node.js Install for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download Node.js Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://nodejs.org/</a></li>
                            <li>Click on <strong>"Download for macOS"</strong> (LTS version recommended)</li>
                            <li>The installer file (.pkg) will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Run the Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .pkg file</li>
                            <li>Follow the installation wizard</li>
                            <li>Click <strong>"Continue"</strong> through the steps</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Authenticate Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Enter your Mac password when prompted</li>
                            <li>Click <strong>"Install Software"</strong></li>
                            <li>Wait for installation to complete</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Alternative - Install via Homebrew
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>If you have Homebrew: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>brew install node</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>node --version</code></li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm --version</code></li>
                            <li>Both commands should display version numbers</li>
                        </ul>
                    </div>
                </div>

                {/* Node.js Windows Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Node.js Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download Node.js Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://nodejs.org/</a></li>
                            <li>Click on <strong>"Download for Windows"</strong> (LTS version recommended)</li>
                            <li>The installer file (.msi) will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Run the Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .msi file</li>
                            <li>Click <strong>"Yes"</strong> if prompted by User Account Control</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Accept License Agreement
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Read and accept the license agreement</li>
                            <li>Click <strong>"Next"</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Choose Installation Location
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Accept default location (recommended) or choose custom location</li>
                            <li>Click <strong>"Next"</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Select Components
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Ensure all components are selected (Node.js runtime, npm package manager, etc.)</li>
                            <li>Click <strong>"Next"</strong></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 6: Complete Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Click <strong>"Install"</strong></li>
                            <li>Wait for installation to complete</li>
                            <li>Click <strong>"Finish"</strong></li>
                            <li>Verify: Open Command Prompt and type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>node --version</code> and <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm --version</code></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Java Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Java Mac Installation */}
                <div id="java-mac" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Java Install for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Check if Java is Already Installed
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                            <li>If Java is installed, you'll see the version number</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Download Java JDK
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Oracle JDK downloads</a> or <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Eclipse Adoptium</a></li>
                            <li>Select macOS and download the .pkg installer</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Install Java (OpenJDK .pkg method)
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .pkg file</li>
                            <li>Follow the installation wizard</li>
                            <li>Click <strong>"Continue"</strong> through the steps</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Set JAVA_HOME Environment Variable
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Edit your shell profile: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>nano ~/.zshrc</code> (or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>~/.bash_profile</code>)</li>
                            <li>Add: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>export JAVA_HOME=$(/usr/libexec/java_home)</code></li>
                            <li>Save and reload: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>source ~/.zshrc</code></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Alternative - Install via Homebrew
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Install Homebrew if not already installed</li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>brew install openjdk</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 6: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>javac -version</code></li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>echo $JAVA_HOME</code></li>
                            <li>All commands should display version/path information</li>
                        </ul>
                    </div>
                </div>

                {/* Java Windows Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Java Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download Java JDK
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Oracle JDK downloads</a> or <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Eclipse Adoptium</a></li>
                            <li>Select Windows and download the .exe installer</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Run the Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .exe file</li>
                            <li>Click <strong>"Yes"</strong> if prompted by User Account Control</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Choose Installation Options
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Accept default installation location (recommended: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Program Files\Java\jdk-x.x.x</code>)</li>
                            <li>Click <strong>"Next"</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Set Environment Variables
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Right-click <strong>"This PC"</strong> → <strong>"Properties"</strong></li>
                            <li>Click <strong>"Advanced system settings"</strong></li>
                            <li>Click <strong>"Environment Variables"</strong></li>
                            <li>Under "System variables", create <strong>JAVA_HOME</strong>:
                                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                    <li>Variable name: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>JAVA_HOME</code></li>
                                    <li>Variable value: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Program Files\Java\jdk-x.x.x</code></li>
                                </ul>
                            </li>
                            <li>Edit <strong>Path</strong> variable and add: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>%JAVA_HOME%\bin</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>javac -version</code></li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>echo %JAVA_HOME%</code></li>
                            <li>All commands should display version/path information</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* C# Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* C# Mac Installation */}
                <div id="csharp-mac" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        C# Install for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download .NET SDK
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://dotnet.microsoft.com/download</a></li>
                            <li>Select macOS and download the .pkg installer</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Run the Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .pkg file</li>
                            <li>Follow the installation wizard</li>
                            <li>Enter your Mac password when prompted</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Alternative - Install via Homebrew
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>brew install --cask dotnet-sdk</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>dotnet --version</code></li>
                            <li>Should display the .NET SDK version</li>
                        </ul>
                    </div>
                </div>

                {/* C# Windows Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        C# Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download .NET SDK
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://dotnet.microsoft.com/download</a></li>
                            <li>Select Windows and download the .exe installer</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Run the Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .exe file</li>
                            <li>Click <strong>"Yes"</strong> if prompted by User Account Control</li>
                            <li>Follow the installation wizard</li>
                            <li>Click <strong>"Install"</strong></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>dotnet --version</code></li>
                            <li>Should display the .NET SDK version</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Python Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Python Mac Installation */}
                <div id="python-mac" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Python Install for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Check if Python is Already Installed
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>python3 --version</code></li>
                            <li>macOS comes with Python 2.7, but Python 3 is recommended</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Download Python Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://www.python.org/downloads/</a></li>
                            <li>Click <strong>"Download Python"</strong> (latest version)</li>
                            <li>The installer file (.pkg) will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Run the Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .pkg file</li>
                            <li>Follow the installation wizard</li>
                            <li>Ensure <strong>"Add Python to PATH"</strong> is checked</li>
                            <li>Enter your Mac password when prompted</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Alternative - Install via Homebrew
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>brew install python3</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>python3 --version</code></li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>pip3 --version</code></li>
                            <li>Both commands should display version numbers</li>
                        </ul>
                    </div>
                </div>

                {/* Python Windows Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Python Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download Python Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://www.python.org/downloads/</a></li>
                            <li>Click <strong>"Download Python"</strong> (latest version)</li>
                            <li>The installer file (.exe) will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Run the Installer
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .exe file</li>
                            <li>Click <strong>"Yes"</strong> if prompted by User Account Control</li>
                            <li><strong>IMPORTANT:</strong> Check <strong>"Add Python to PATH"</strong> at the bottom</li>
                            <li>Click <strong>"Install Now"</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Complete Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Wait for installation to complete</li>
                            <li>Click <strong>"Close"</strong></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>python --version</code></li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>pip --version</code></li>
                            <li>Both commands should display version numbers</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Postman Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Postman Mac Installation */}
                <div id="postman-mac" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Postman Install for Mac (including Newman)
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download Postman
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://www.postman.com/downloads/</a></li>
                            <li>Click <strong>"Download for Mac"</strong></li>
                            <li>The installer file will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Install Postman
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open the downloaded file</li>
                            <li>Drag <strong>Postman.app</strong> to your <strong>Applications</strong> folder</li>
                            <li>Launch Postman from Applications</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Install Newman (Command Line Tool)
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Ensure Node.js is installed (see Node.js installation above)</li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g newman</code></li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Launch Postman application</li>
                            <li>Verify Newman: Open Terminal and type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>
                </div>

                {/* Postman Windows Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Postman Install for Windows (including Newman)
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download Postman
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://www.postman.com/downloads/</a></li>
                            <li>Click <strong>"Download for Windows"</strong></li>
                            <li>The installer file (.exe) will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Install Postman
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .exe file</li>
                            <li>Click <strong>"Yes"</strong> if prompted by User Account Control</li>
                            <li>Follow the installation wizard</li>
                            <li>Click <strong>"Install"</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Install Newman (Command Line Tool)
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt or PowerShell</li>
                            <li>Ensure Node.js is installed (see Node.js installation above)</li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g newman</code></li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Launch Postman application</li>
                            <li>Verify Newman: Open Command Prompt and type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Appium Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Appium Mac Installation */}
                <div id="appium-mac" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Appium Install for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Verify Prerequisites
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Ensure Node.js is installed (see Node.js installation above)</li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>node --version</code></li>
                            <li>Ensure npm is installed: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm --version</code></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Install Appium
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g appium</code></li>
                            <li>Wait for installation to complete</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Install Appium Doctor
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g appium-doctor</code></li>
                            <li>Verify setup: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium-doctor</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium --version</code></li>
                            <li>Start Appium server: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code></li>
                        </ul>
                    </div>
                </div>

                {/* Appium Windows Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Appium Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Verify Prerequisites
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Ensure Node.js is installed (see Node.js installation above)</li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>node --version</code></li>
                            <li>Ensure npm is installed: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm --version</code></li>
                            <li>Install Android Studio and Android SDK (for Android testing)</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Install Appium
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt or PowerShell</li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g appium</code></li>
                            <li>Wait for installation to complete</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Install Appium Doctor
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g appium-doctor</code></li>
                            <li>Verify setup: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium-doctor</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium --version</code></li>
                            <li>Start Appium server: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* JMeter Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* JMeter Mac Installation */}
                <div id="jmeter-mac" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        JMeter Install for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Verify Java Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Check Java version: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                            <li>Verify JAVA_HOME: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>echo $JAVA_HOME</code></li>
                            <li>If Java is not installed, refer to "Java Install for Mac" above</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Download JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://jmeter.apache.org/download_jmeter.cgi</a></li>
                            <li>Download the binary distribution: <strong>apache-jmeter-x.x.x.tgz</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Extract JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Finder and navigate to Downloads folder</li>
                            <li>Double-click <strong>apache-jmeter-x.x.x.tgz</strong> to extract</li>
                            <li>Move the folder to <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/Applications</code></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Set Environment Variables
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Edit your shell profile: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>nano ~/.zshrc</code></li>
                            <li>Add: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>export JMETER_HOME=/Applications/apache-jmeter-x.x.x</code></li>
                            <li>Add: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>export PATH=$PATH:$JMETER_HOME/bin</code></li>
                            <li>Save and reload: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>source ~/.zshrc</code></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Alternative - Install via Homebrew
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>brew install jmeter</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 6: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter --version</code></li>
                            <li>Launch JMeter GUI: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter</code></li>
                        </ul>
                    </div>
                </div>

                {/* JMeter Windows Installation */}
                <div id="jmeter-windows" style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    scrollMarginTop: '100px',
                    transition: 'background-color 0.3s ease'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        JMeter Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Verify Java Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt</li>
                            <li>Check Java version: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                            <li>Verify JAVA_HOME: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>echo %JAVA_HOME%</code></li>
                            <li>If Java is not installed, refer to "Java Install for Windows" above</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Download JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://jmeter.apache.org/download_jmeter.cgi" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://jmeter.apache.org/download_jmeter.cgi</a></li>
                            <li>Download the binary distribution: <strong>apache-jmeter-x.x.x.zip</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Extract JMeter
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Right-click on the downloaded ZIP file</li>
                            <li>Select <strong>"Extract All..."</strong></li>
                            <li>Choose location (e.g., <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Program Files\</code>)</li>
                            <li>Click <strong>"Extract"</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Set Environment Variables
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Right-click <strong>"This PC"</strong> → <strong>"Properties"</strong></li>
                            <li>Click <strong>"Advanced system settings"</strong> → <strong>"Environment Variables"</strong></li>
                            <li>Create <strong>JMETER_HOME</strong> variable: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Program Files\apache-jmeter-x.x.x</code></li>
                            <li>Add to PATH: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>%JMETER_HOME%\bin</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 5: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt</li>
                            <li>Type: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>jmeter --version</code></li>
                            <li>Launch JMeter GUI: Navigate to <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Program Files\apache-jmeter-x.x.x\bin</code> and double-click <strong>jmeter.bat</strong></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section style={{ marginTop: '40px' }}>
            </section>
        </div>
    );
}

export default Installation;
