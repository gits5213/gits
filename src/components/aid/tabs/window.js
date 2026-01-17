import React from 'react';
import windowsLogo from '../../../images/tabs/winLogo.png';
import link from '../../../utilities/links.json';
import Footer from '../../../components/footer';
import { leftAlignStyles } from '../../../utils/globalStyles';

const window = () => {
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
                        Windows
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        Screen Recording and Software Download Tools for Windows
                    </p>
                </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <img 
                        src={windowsLogo} 
                        alt='Windows Logo'
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

            {/* Tools Section */}
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
                    textAlign: 'left'
                }}>
                    Windows Screen Recorders
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px',
                    marginBottom: '40px'
                }}>
                    {/* Screencastify */}
                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Screencastify (Chrome Plugin)
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            Free: 5 minute limit per recording | Ultimate($29): Unlimited recording
                        </p>
                        <a 
                            href={link.screencastify}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                fontSize: '14px',
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
                            Visit Screencastify
                        </a>
                    </div>

                    {/* Screensy */}
                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Screensy (Chrome Plugin)
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            Free: Unlimited recording
                        </p>
                        <a 
                            href={link.screensy}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                fontSize: '14px',
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
                            Visit Screensy
                        </a>
                    </div>
                </div>

                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginTop: '40px'
                }}>
                    Software Download Resources
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px'
                }}>
                    {/* Flashback Recorder */}
                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Flashback Recorder
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            Free: Unlimited Screen Recorder Downloading - Screen Recorders For Everyone
                        </p>
                        <a 
                            href={link.DownloadSoftware_bb}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                fontSize: '14px',
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
                            Download Software
                        </a>
                </div>

                    {/* General Software Download */}
                    <div style={{
                        padding: '25px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.3s ease'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Unlimited Software Downloads
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            Free: Unlimited Software Downloading
                        </p>
                        <a 
                            href={link.DownloadSoftware}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                fontSize: '14px',
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
                            Download Software
                        </a>
                </div>
                </div>
            </div>

            {/* Mac Recording Section */}
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
                    textAlign: 'left'
                }}>
                    MAC Screen, Audio & Video Recording
                </h2>
                <div style={{
                    padding: '25px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        QuickTime Player (Mac Built-in Feature)
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333',
                        textAlign: 'left'
                    }}>
                        Free: Unlimited recording
                    </p>
                </div>
            </div>

            {/* Windows Keyboard Shortcuts Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Windows Keyboard Shortcuts
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Essential keyboard shortcuts to improve your productivity on Windows.
                </p>

                {/* General Shortcuts */}
                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    General Shortcuts
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + C</strong> - Copy
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + V</strong> - Paste
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + X</strong> - Cut
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + Z</strong> - Undo
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + Y</strong> - Redo
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + A</strong> - Select All
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + S</strong> - Save
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + P</strong> - Print
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + W</strong> - Close Window
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Alt + F4</strong> - Close Application
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + T</strong> - New Tab
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + N</strong> - New Window
                        </p>
                    </div>
                </div>

                {/* Windows System Shortcuts */}
                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Windows System Shortcuts
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows Key</strong> - Open Start Menu
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + D</strong> - Show Desktop
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + E</strong> - Open File Explorer
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + R</strong> - Open Run Dialog
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + L</strong> - Lock Screen
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + Tab</strong> - Task View
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + I</strong> - Open Settings
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + S</strong> - Search
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + X</strong> - Quick Link Menu
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Alt + Tab</strong> - Switch Applications
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Alt + Shift + Tab</strong> - Switch Backward
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + Alt + Del</strong> - Security Options
                        </p>
                    </div>
                </div>

                {/* File Explorer Shortcuts */}
                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    File Explorer Shortcuts
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + F</strong> - Find/Search
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + N</strong> - New Window
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Delete</strong> - Move to Recycle Bin
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Shift + Delete</strong> - Permanent Delete
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + Shift + N</strong> - New Folder
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>F2</strong> - Rename
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Alt + Enter</strong> - Properties
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Alt + Left Arrow</strong> - Go Back
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Alt + Right Arrow</strong> - Go Forward
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Alt + Up Arrow</strong> - Go to Parent Folder
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>F5</strong> - Refresh
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + D</strong> - Duplicate
                        </p>
                    </div>
                </div>

                {/* Text Editing Shortcuts */}
                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Text Editing Shortcuts
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + B</strong> - Bold
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + I</strong> - Italic
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + U</strong> - Underline
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Home</strong> - Beginning of Line
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>End</strong> - End of Line
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + Home</strong> - Beginning of Document
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + End</strong> - End of Document
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + Left Arrow</strong> - Previous Word
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + Right Arrow</strong> - Next Word
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + Shift + Arrow</strong> - Select Word
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + K</strong> - Insert Link
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Ctrl + F</strong> - Find
                        </p>
                    </div>
                </div>

                {/* Screenshot & Screen Shortcuts */}
                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Screenshot & Screen Shortcuts
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + Shift + S</strong> - Snipping Tool
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Print Screen</strong> - Screenshot Entire Screen
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Alt + Print Screen</strong> - Screenshot Active Window
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + P</strong> - Project/Display Options
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + Up Arrow</strong> - Maximize Window
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + Down Arrow</strong> - Minimize/Restore
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + Left Arrow</strong> - Snap Left
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + Right Arrow</strong> - Snap Right
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + M</strong> - Minimize All Windows
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + Shift + M</strong> - Restore Minimized
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + Number</strong> - Open Taskbar App
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px', textAlign: 'left' }}>
                            <strong>Windows + Shift + Number</strong> - New Instance
                        </p>
                    </div>
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
export default window;
