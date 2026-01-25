import React from 'react';
import macLogo from '../../../images/tabs/macLogo.png';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const mac = () => {
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
                    Mac
                </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                    Mac Operating System Resources and Tools
                </p>
            </div>
            <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
            }}>
                <img 
                    src={getImageSrc(macLogo)} 
                    alt='Mac Logo'
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

            {/* Mac Keyboard Shortcuts Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Mac Keyboard Shortcuts
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Essential keyboard shortcuts to improve your productivity on macOS.
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
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + C</strong> - Copy
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + V</strong> - Paste
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + X</strong> - Cut
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Z</strong> - Undo
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + Z</strong> - Redo
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + A</strong> - Select All
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + S</strong> - Save
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + P</strong> - Print
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + W</strong> - Close Window
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Q</strong> - Quit Application
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + T</strong> - New Tab
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + N</strong> - New Window
                        </p>
                    </div>
                </div>

                {/* Finder Shortcuts */}
                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Finder Shortcuts
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
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Space</strong> - Spotlight Search
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + F</strong> - Find
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Delete</strong> - Move to Trash
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + Delete</strong> - Empty Trash
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + I</strong> - Get Info
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + D</strong> - Duplicate
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + N</strong> - New Folder
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + G</strong> - Go to Folder
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Up Arrow</strong> - Go to Parent Folder
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Down Arrow</strong> - Open Selected Item
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + ,</strong> - Preferences
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Y</strong> - Quick Look
                        </p>
                    </div>
                </div>

                {/* System Shortcuts */}
                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    System Shortcuts
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
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Tab</strong> - Switch Applications
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + `</strong> - Switch Windows
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + H</strong> - Hide Application
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + M</strong> - Minimize Window
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Control + F</strong> - Full Screen
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Option + Esc</strong> - Force Quit
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>Control + ⌘ + Power</strong> - Restart
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>Control + Option + ⌘ + Power</strong> - Shutdown
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + 3</strong> - Screenshot Entire Screen
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + 4</strong> - Screenshot Selection
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + 5</strong> - Screenshot Options
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Space</strong> - Spotlight Search
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
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + B</strong> - Bold
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + I</strong> - Italic
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + U</strong> - Underline
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Left Arrow</strong> - Beginning of Line
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Right Arrow</strong> - End of Line
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Up Arrow</strong> - Beginning of Document
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Down Arrow</strong> - End of Document
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>Option + Left Arrow</strong> - Previous Word
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>Option + Right Arrow</strong> - Next Word
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + K</strong> - Insert Link
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + C</strong> - Copy Style
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + V</strong> - Paste Style
                        </p>
                    </div>
                </div>

                {/* Browser Shortcuts */}
                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Browser Shortcuts
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
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + R</strong> - Refresh Page
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + R</strong> - Hard Refresh
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + L</strong> - Focus Address Bar
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + T</strong> - New Tab
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + W</strong> - Close Tab
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + T</strong> - Reopen Closed Tab
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + [</strong> - Go Back
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + ]</strong> - Go Forward
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + +</strong> - Zoom In
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + -</strong> - Zoom Out
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + 0</strong> - Reset Zoom
                        </p>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                            <strong>⌘ + Shift + Delete</strong> - Clear History
                        </p>
                    </div>
                </div>
            </div>

            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}
export default mac;
