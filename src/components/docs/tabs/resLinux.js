import React from 'react';
import link from '../../../utilities/links.json';
import linuxLogo from '../../../images/tabs/linuxLogo.png';
import linuxCheatSheet from '../../../images/tabs/linuxCheatSheet.png';
import PdfDownload from '../../shared/PdfDownload';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const ResLinux = () => {
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
                        Unix/Linux
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        Open-Source Operating System and Command Line Interface
                    </p>
                </div>
                            <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <img 
                        src={getImageSrc(linuxLogo)} 
                        alt='Linux Logo'
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
                    Introduction to Linux
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Just like Windows, iOS, and Mac OS, Linux is an operating system. In fact, one of the most popular platforms on the planet, Android, is powered by the Linux operating system. An operating system is software that manages all of the hardware resources associated with your desktop or laptop. To put it simply, the operating system manages the communication between your software and your hardware. Without the operating system (OS), the software wouldn't function.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What is Linux?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Linux is an open-source operating system</li>
                    <li>Linux powers Android, servers, embedded systems, and desktop computers</li>
                    <li>Linux manages communication between software and hardware</li>
                    <li>Linux is free to use, modify, and distribute</li>
                    <li>Linux has a large community of developers and users</li>
                                    </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Linux Operating System Components
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Bootloader:</strong> Software that manages the boot process of your computer</li>
                    <li><strong>Kernel:</strong> The core of the system that manages CPU, memory, and peripheral devices</li>
                    <li><strong>Init system:</strong> Sub-system that bootstraps the user space and controls daemons (e.g., systemd)</li>
                    <li><strong>Daemons:</strong> Background services (printing, sound, scheduling, etc.)</li>
                    <li><strong>Graphical server:</strong> Sub-system that displays graphics on your monitor (X server)</li>
                    <li><strong>Desktop environment:</strong> The piece that users interact with (GNOME, KDE, Xfce, etc.)</li>
                    <li><strong>Applications:</strong> Software titles that can be easily found and installed</li>
                                    </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Open Source
                </h3>
                <p style={leftAlignStyles.paragraph}>
                    Linux is distributed under an open source license. Open source follows these key tenants:
                </p>
                <ul style={leftAlignStyles.list}>
                    <li>The freedom to run the program, for any purpose</li>
                    <li>The freedom to study how the program works, and change it to make it do what you wish</li>
                    <li>The freedom to redistribute copies so you can help your neighbor</li>
                    <li>The freedom to distribute copies of your modified versions to others</li>
                                    </ul>
                <p style={leftAlignStyles.paragraph}>
                    These points are crucial to understanding the community that works together to create the Linux platform. Without a doubt, Linux is an operating system that is "by the people, for the people". These tenants are also a main factor in why many people choose Linux. It's about freedom and freedom of use and freedom of choice.
                </p>
                                </div>

            {/* Basic Commands Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Basic Unix Commands for Terminal
                </h2>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        File and Directory Commands
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>ls -R</code>: List all files in sub-directories as well</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>ls -a</code>: Show hidden files</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>ls -al</code>: List files with detailed information (permissions, size, owner)</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>pwd</code>: Present working directory</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cd</code>: Change directory to home folder</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cd -</code>: Move to previous directory</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cd ..</code>: One directory up (back)</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>mkdir Test</code>: Make directory - create Test folder</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>touch index.html</code>: Create index.html file</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>mv index.html about.html</code>: Rename file</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>rm about.html</code>: Delete file (only works for files)</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>rm -r Test</code>: Delete folder</li>
                                    </ul>
                                </div>

                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Utility Commands
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>clear</code>: Clear the terminal</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>open .</code>: Open current folder</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>open index.html</code>: Open file</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>echo "Print statement"</code>: Print statement</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>zip, unzip</code>: Zip and extract files</li>
                                    </ul>
                                </div>

                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Keyboard Shortcuts
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><strong>Up/Down Arrow:</strong> Navigate command history</li>
                        <li><strong>Ctrl + C:</strong> Terminate any command</li>
                        <li><strong>Tab:</strong> Autocomplete what you are typing</li>
                        <li><strong>Ctrl + Z:</strong> Pause any command</li>
                        <li><strong>Ctrl + S:</strong> Freeze terminal</li>
                        <li><strong>Ctrl + Q:</strong> Unfreeze terminal</li>
                                    </ul>
                                </div>
                                </div>

            {/* Advanced Commands Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Advanced Unix Commands for Terminal
                </h2>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                                <h3 style={{
                                    color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        File Operations
                                </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cat</code>: List contents of a file (short for concatenate)</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cp</code>: Copy files from current directory to different directory</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>mv</code>: Move files or rename files</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>grep</code>: Search through all text in a given file</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>head</code>: View first lines of any text file (e.g., head -n 5 filename.ext)</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>tail</code>: Display last ten lines of a text file</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>diff</code>: Compare contents of two files line by line</li>
                    </ul>
                                </div>

                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        System and Permissions
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>sudo</code>: Execute tasks requiring administrative or root permissions (SuperUser Do)</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>chmod</code>: Change read, write, and execute permissions of files and directories</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>chown</code>: Transfer ownership of a file to specified username</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>kill</code>: Kill process by process identification number (PID)</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>ps ux</code>: Show process identification number (PID) of programs</li>
                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>man</code>: Manual instruction for any command</li>
                    </ul>
                                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '20px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <p style={{ margin: 0, fontSize: '16px', color: '#333333', textAlign: 'left' }}>
                        <strong>Tip:</strong> You can run multiple commands in one single command by using the ";" to separate them. For example: <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px' }}>Command1; Command2; Command3</code>. Or use <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px' }}>&&</code> if you only want the next command to run when the first one is successful.
                    </p>
                                </div>
                                </div>

            {/* CMDER Installation */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
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
                        CMDER Install for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            What is CMDER?
                        </h5>
                        <p style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Cmder is a software package created out of pure frustration over the absence of nice console emulators on Windows. It is based on amazing software, and spiced up with the Monokai color scheme and a custom prompt layout, looking sexy from the start.
                        </p>
                                </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Installation Steps
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href={link.CMDER} target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://cmder.net/</a></li>
                            <li>Click on <strong>"Download Full"</strong></li>
                            <li>Double-click on the downloaded software</li>
                            <li>Extract to a folder (e.g., <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\cmder</code>)</li>
                            <li>Run <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Cmder.exe</code></li>
                            <li>Click, Click & Done!</li>
                        </ul>
                                </div>
                                </div>

                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img 
                        src={getImageSrc(linuxCheatSheet)} 
                        alt='Linux Cheat Sheet'
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '8px'
                        }}
                    />
                                </div>
                                </div>

            {/* PDF Download Section */}
            <div style={leftAlignStyles.mainContent}>
            <PdfDownload
                pdfPath="LinuxWindosMacCommand.pdf"
                title="📥 Download Terminal Commands PDF Handout"
                description="Download the complete terminal commands checklist for Windows, macOS, and Linux (PDF format)"
                downloadFileName="LinuxWindosMacCommand.pdf"
            />
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
                    href={link.LINUX_} 
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
                    Linux Commands on GitHub
                </a>
                <a 
                    href="https://www.linux.org/" 
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
                    Linux.org
                </a>
                <a 
                    href="https://www.gnu.org/gnu/linux-and-gnu.en.html" 
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
                    Linux and GNU
                </a>
                </div>

            <section style={{ marginTop: '40px' }}>
            </section>
                </div>
    );
}

export default ResLinux;
