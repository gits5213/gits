import React, { useState } from 'react';
import link from '../../../utilities/links.json';
import APPIUM_LOGO from '../../../images/tabs/appiumLogo.png';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';
import CodeBlock from '../../shared/CodeBlock';

const Appium = () => {
    const [openSection, setOpenSection] = useState(null);
    const [babyStepsOpen, setBabyStepsOpen] = useState(false);
    const [openSectionMacOS, setOpenSectionMacOS] = useState(null);
    const [macOSBabyStepsOpen, setMacOSBabyStepsOpen] = useState(false);

    const toggleSection = (num) => {
        setOpenSection((prev) => (prev === num ? null : num));
    };

    const toggleSectionMacOS = (num) => {
        setOpenSectionMacOS((prev) => (prev === num ? null : num));
    };

    const sectionHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 24px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        border: '1px solid #e8e8e8',
        marginBottom: '4px',
        userSelect: 'none'
    };

    const sectionBodyStyle = {
        backgroundColor: '#ffffff',
        padding: '0 30px 30px 30px',
        borderRadius: '0 0 12px 12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        border: '1px solid #e8e8e8',
        borderTop: 'none',
        marginBottom: '16px'
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
                        Appium
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        Cross-Platform Mobile App Automation Framework
                    </p>
                </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <img 
                        src={getImageSrc(APPIUM_LOGO)} 
                        alt='Appium Logo'
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
                    Introduction to Appium
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Appium is an open-source automation framework for mobile applications. It allows you to write tests against multiple platforms (iOS, Android, Windows) using the same API, enabling code reuse between iOS and Android test suites.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What is Appium?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Appium is an open-source automation framework for mobile applications</li>
                    <li>Appium allows testing of native, hybrid, and mobile web applications</li>
                    <li>Appium follows the WebDriver protocol (Selenium WebDriver)</li>
                    <li>Appium supports multiple programming languages (Java, JavaScript, Python, Ruby, C#, PHP)</li>
                    <li>Appium enables code reuse between iOS and Android test suites</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What Can Appium Do?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Cross-platform mobile app testing (iOS, Android, Windows)</li>
                    <li>Test native, hybrid, and mobile web applications</li>
                    <li>No need to recompile or modify your app</li>
                    <li>Uses standard WebDriver protocol</li>
                    <li>Multiple programming language support</li>
                    <li>Real device and emulator/simulator testing</li>
                    <li>Open-source and actively maintained</li>
                    <li>Supports multiple test frameworks (JUnit, TestNG, Mocha, Jest, etc.)</li>
                    <li>Parallel test execution</li>
                    <li>CI/CD integration</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Appium on macOS vs Windows (iOS + Android Support)
                </h3>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '16px', fontWeight: '600' }}>Can I run both iOS and Android Appium automation from a Mac?</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>✅ <strong>Yes.</strong> On a <strong>Mac</strong>, you can run <strong>both iOS and Android</strong> test automation with Appium:</p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>iOS (XCUITest):</strong> Works on macOS because Apple's XCUITest/WebDriverAgent setup requires <strong>macOS + Xcode</strong>. (<a href="https://appium.github.io/appium.io/docs/en/drivers/ios-xcuitest/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>appium.github.io</a>)</li>
                    <li><strong>Android (UiAutomator2):</strong> Works on macOS (and also Windows/Linux) as long as you have the <strong>Android SDK + ADB</strong> available. (<a href="https://appium.github.io/appium.io/docs/en/drivers/android-uiautomator2/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>appium.github.io</a>)</li>
                </ul>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '16px', fontWeight: '600' }}>Can I run Appium iOS automation locally from Windows?</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '12px' }}>❌ <strong>No (not locally).</strong> iOS automation with Appium uses the <strong>XCUITest driver</strong>, which explicitly requires <strong>macOS and Xcode</strong>, so it can't be executed on Windows as a host machine. (<a href="https://appium.github.io/appium.io/docs/en/drivers/ios-xcuitest/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>appium.github.io</a>)</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '16px', fontWeight: '600' }}>What can I do from Windows with Appium?</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>✅ <strong>Android automation is fully supported on Windows.</strong> Appium's <strong>UiAutomator2</strong> driver supports <strong>Mac, Windows, and Linux</strong>, so you can run Android tests locally on Windows using an emulator or real Android device. (<a href="https://appium.github.io/appium.io/docs/en/drivers/android-uiautomator2/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>appium.github.io</a>)</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>✅ <strong>iOS is still possible from Windows if you use a remote Mac or cloud devices.</strong> You can write and trigger tests from Windows, but the execution must happen on:</p>
                <ul style={leftAlignStyles.list}>
                    <li>a <strong>Mac host</strong> (local lab / remote Mac), or</li>
                    <li>a <strong>cloud device farm</strong> that provides iOS devices and an Appium endpoint.</li>
                </ul>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px', fontStyle: 'italic' }}>(Windows = test authoring + runner, Mac/cloud = iOS execution.) (<a href="https://appium.github.io/appium-xcuitest-driver/5.9/setup/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>appium.github.io</a>)</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '16px', fontWeight: '600' }}>Simple summary (easy to remember)</h4>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Mac:</strong> ✅ iOS + ✅ Android (Appium supports both) (<a href="https://appium.github.io/appium-xcuitest-driver/5.9/setup/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>appium.github.io</a>)</li>
                    <li><strong>Windows:</strong> ✅ Android locally, ❌ iOS locally (iOS requires Mac/Xcode) (<a href="https://appium.github.io/appium-xcuitest-driver/5.9/setup/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>appium.github.io</a>)</li>
                    <li><strong>Windows + iOS:</strong> ✅ possible via <strong>remote Mac / cloud</strong> (<a href="https://appium.github.io/appium-xcuitest-driver/5.9/setup/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>appium.github.io</a>)</li>
                </ul>
            </div>

            {/* Installation Guides */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Mac Installation */}
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
                        Appium Setup for Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Install Prerequisites
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Install Node.js (see Installation tab)</li>
                            <li>Install Xcode from Mac App Store</li>
                            <li>Install Xcode Command Line Tools: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>xcode-select --install</code></li>
                            <li>For Android testing: Install Android Studio and Android SDK</li>
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
                            <li>Install Appium Doctor: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g appium-doctor</code></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Install Drivers
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>For iOS: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver install xcuitest</code></li>
                            <li>For Android: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver install uiautomator2</code></li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver list</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Setup
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium-doctor</code></li>
                            <li>Fix any issues reported</li>
                            <li>Start Appium: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code></li>
                        </ul>
                    </div>
                </div>

                {/* Windows Installation */}
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
                        Appium Setup for Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Install Prerequisites
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Install Node.js (see Installation tab)</li>
                            <li>Install Android Studio</li>
                            <li>Install Android SDK and set ANDROID_HOME environment variable</li>
                            <li>Add Android SDK platform-tools to PATH</li>
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
                            <li>Install Appium Doctor: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g appium-doctor</code></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Install Drivers
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>For Android: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver install uiautomator2</code></li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver list</code></li>
                            <li>Note: iOS testing requires Mac (Xcode is Mac-only)</li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Setup
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium-doctor</code></li>
                            <li>Fix any issues reported</li>
                            <li>Start Appium: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Appium TypeScript + WebDriverIO — Windows Baby Steps (outer collapsible) */}
            <div style={{ marginBottom: '40px' }}>
                <div
                    style={{ ...sectionHeaderStyle, marginBottom: babyStepsOpen ? '4px' : '16px' }}
                    onClick={() => setBabyStepsOpen((prev) => !prev)}
                    role="button"
                    aria-expanded={babyStepsOpen}
                >
                    <h2 style={{ color: '#00416A', fontSize: '24px', margin: 0, fontWeight: 'bold' }}>
                        Appium TypeScript + WebDriverIO on Windows — Baby Steps
                    </h2>
                    <span style={{ fontSize: '20px', color: '#00416A' }}>{babyStepsOpen ? '▼' : '▶'}</span>
                </div>
                {babyStepsOpen && (
                <div style={{ ...sectionBodyStyle, marginBottom: '24px' }}>
                <p style={leftAlignStyles.paragraph}>
                    Written for beginners. No coding experience needed. Do each step in order. When you see a gray box with text, copy it exactly and paste it where the step says (usually in Command Prompt or PowerShell — the black or blue window where you type commands). If something fails, go back one step and try again.
                </p>
                <div style={{ marginTop: '24px' }}>
                {/* Section 1: Emulator + Chrome */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSection(1)}
                        role="button"
                        aria-expanded={openSection === 1}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            1. Emulator + Chrome (fake phone on your PC, Chrome browser)
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSection === 1 ? '▼' : '▶'}</span>
                    </div>
                    {openSection === 1 && (
                    <div style={sectionBodyStyle}>
                    <p style={{ fontSize: '14px', color: '#555', marginBottom: '20px', paddingTop: '8px' }}>
                        You will open a fake Android phone on your computer and control the Chrome browser on it. All on Windows.
                    </p>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 1: What you need before starting</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.7', color: '#333', paddingLeft: '24px' }}>
                            <li><strong>Node.js</strong>
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Go to nodejs.org.</li>
                                    <li>Download the LTS version and run the installer.</li>
                                    <li>When done, open Command Prompt and type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>node -v</code>. You should see a version number (e.g. v20.10.0).</li>
                                </ol>
                            </li>
                            <li><strong>Android Studio</strong>
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Download from developer.android.com/studio and install it.</li>
                                    <li>During setup, make sure you install the Android SDK (it usually asks).</li>
                                    <li>Remember where it installed the SDK — often <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Users\YourName\AppData\Local\Android\Sdk</code>.</li>
                                </ol>
                            </li>
                            <li><strong>Tell Windows where Android is</strong>
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Search Windows for “environment variables” and open “Edit the system environment variables”.</li>
                                    <li>Click “Environment Variables”. Under “User variables” click “New”.</li>
                                    <li>Variable name: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>ANDROID_HOME</code>. Variable value: the folder where the SDK is (e.g. <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\Users\YourName\AppData\Local\Android\Sdk</code>). Click OK.</li>
                                    <li>Find “Path”, click Edit, click New, add <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>%ANDROID_HOME%\platform-tools</code>.</li>
                                    <li>Add another new line: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>%ANDROID_HOME%\emulator</code>. OK out.</li>
                                    <li>Close any open Command Prompt windows and open a new one so it sees the change.</li>
                                </ol>
                            </li>
                            <li><strong>A fake phone (emulator)</strong>
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Open Android Studio. Click “More Actions” or “Device Manager”.</li>
                                    <li>Create a virtual device (e.g. Pixel 4, API 30 or higher).</li>
                                    <li>Make sure the emulator has Chrome (it usually does).</li>
                                    <li>Write down the exact name of the device (e.g. Pixel_4_API_30).</li>
                                </ol>
                            </li>
                            <li><strong>Appium</strong>
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Open Command Prompt. Copy and paste: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g appium</code>. Press Enter. Wait until it finishes.</li>
                                    <li>Then copy and paste: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver install uiautomator2</code>. Press Enter. Wait until it says “success” or similar.</li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 2: Create your test project (do these in order)</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Create a new folder on your PC (e.g. on Desktop). Name it something like <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium-chrome</code>.</li>
                            <li>Open that folder.
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>In the address bar at the top, type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cmd</code> and press Enter.</li>
                                    <li>A black window (Command Prompt) will open with that folder as the current location.</li>
                                </ol>
                            </li>
                            <li>Copy this exactly and paste into the black window, then press Enter: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm init -y</code>. You should see a short message and a new file <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>package.json</code> in your folder.</li>
                            <li>Copy this exactly, paste, Enter: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install webdriverio @wdio/cli typescript ts-node @types/node --save-dev</code>. Wait until it finishes (can take a minute).</li>
                            <li>Copy this, paste, Enter: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio config</code>. It will ask questions.
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Choose Mocha (or press Enter if it’s default).</li>
                                    <li>Choose TypeScript.</li>
                                    <li>Run specs from root.</li>
                                    <li>Say no to adding a reporter.</li>
                                    <li>When it asks to add commands to package.json you can say No (you will run the command yourself later).</li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 3: Point your test at Chrome on the emulator</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Open the file <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> in your project folder (with Notepad or any editor).</li>
                            <li>Find the <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>capabilities</code> section. Make sure it has:
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>platformName: 'Android'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>automationName: 'UiAutomator2'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>browserName: 'Chrome'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>deviceName</code> set to your emulator name (e.g. <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Pixel_4_API_30</code>)</li>
                                </ol>
                            </li>
                            <li>To get your emulator name: in Command Prompt type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>emulator -list-avds</code> and use one of the names shown.</li>
                            <li>Do not set <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>app</code> or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appPackage</code> — we are testing the browser.</li>
                            <li>Save the file.</li>
                        </ol>
                        <p style={{ fontSize: '14px', color: '#333', marginTop: '12px', marginBottom: '8px' }}><strong>Example (copy into <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> capabilities):</strong></p>
                        <CodeBlock
                            code={`capabilities: [
  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:browserName': 'Chrome',
    'appium:deviceName': 'Pixel_4_API_30',  // replace with your emulator name from: emulator -list-avds
  }
],`}
                            variant="dark"
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Sample <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code></h5>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Minimal config for Emulator + Chrome. Replace <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Pixel_4_API_30</code> with your emulator name from <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>emulator -list-avds</code>.</p>
                        <CodeBlock
                            code={`import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
  runner: 'local',

  // Appium server address (Appium must be running)
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  specs: ['./test/specs/**/*.ts'],

  maxInstances: 1,

  // ✅ Emulator + Chrome capabilities
  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Android Emulator',

      // This tells Appium we want Chrome browser automation
      browserName: 'Chrome',

      // Helpful defaults
      'appium:noReset': true,
      'appium:newCommandTimeout': 180,

      // If WebdriverIO/Appium needs chromedriver automatically
      'appium:chromedriverAutodownload': true,
    },
  ],

  // Use Appium service so WDIO knows we are running mobile tests
  services: [
    [
      'appium',
      {
        // We are NOT auto-starting Appium here.
        // You already start Appium with: appium
      },
    ],
  ],

  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },

  // These make logs readable
  logLevel: 'info',
}`}
                            variant="dark"
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Sample test</h5>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Save as <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>specs/chrome.emulator.spec.ts</code>. This opens Chrome on the emulator, navigates to a page, and checks the title.</p>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Now install Chai (for the <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>expect</code> statement):</p>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm i --save-dev chai @types/chai</code></p>
                        <CodeBlock
                            code={`import { expect } from 'chai'

describe('Mobile Chrome test (Emulator)', () => {
  it('opens Google and searches for WebdriverIO', async () => {
    // 1) Open website
    await browser.url('https://www.google.com')

    // 2) Accept cookies if it appears (sometimes shows, sometimes not)
    // We try safely: if not found, we just continue.
    const acceptBtn = await $('button=I agree')
    if (await acceptBtn.isDisplayed().catch(() => false)) {
      await acceptBtn.click()
    }

    // 3) Find the search box and type
    const searchBox = await $('textarea[name="q"], input[name="q"]')
    await searchBox.waitForDisplayed({ timeout: 20000 })
    await searchBox.click()
    await searchBox.setValue('WebdriverIO')

    // 4) Press Enter
    await browser.keys('Enter')

    // 5) Check results page has the word "WebdriverIO"
    await browser.pause(2000) // small pause only for demo (later we'll replace with better wait)
    const pageText = await $('body').getText()
    expect(pageText).to.include('WebdriverIO')
  })
})`}
                            variant="dark"
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 4: Run the test</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Start your emulator (from Android Studio Device Manager, click the play button next to your virtual device). Wait until the phone screen appears on your PC.</li>
                            <li>Open a second Command Prompt window.
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>In that window type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code> and press Enter.</li>
                                    <li>Leave this window open; it is the Appium server. You should see a line like “Appium REST http interface listener started”.</li>
                                </ol>
                            </li>
                            <li>In your first Command Prompt (the one in your project folder), type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio run wdio.conf.ts</code> and press Enter. The test will run; Chrome may open on the emulator. When it finishes, you should see a summary (e.g. “passed” or number of tests).</li>
                        </ol>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 5: Add a run command</h5>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Open <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>package.json</code> and under <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>&quot;scripts&quot;</code> replace with this:</p>
                        <CodeBlock
                            code={`"scripts": {
  "test": "wdio run wdio.conf.ts"
}`}
                            variant="dark"
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>If it fails (most common fixes)</h5>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px', fontWeight: '600' }}>A) Chrome not found / browserName Chrome fails</p>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '12px', paddingLeft: '16px' }}>In emulator, open Play Store → update/install Chrome.</p>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px', fontWeight: '600' }}>B) Chromedriver mismatch error</p>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '12px', paddingLeft: '16px' }}>You already have <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>&quot;appium:chromedriverAutodownload&quot;: true</code>. So it usually fixes itself. If not, tell me the error text.</p>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px', fontWeight: '600' }}>C) It opens “desktop Google” weirdly</p>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '12px', paddingLeft: '16px' }}>That’s fine for now. Next step we’ll set mobile device metrics or use a mobile-friendly site.</p>
                    </div>
                    </div>
                    )}
                </div>

                {/* Section 2: Emulator + my-demo-app-android */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSection(2)}
                        role="button"
                        aria-expanded={openSection === 2}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            2. Emulator + Sauce Labs demo app (fake phone, sample app)
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSection === 2 ? '▼' : '▶'}</span>
                    </div>
                    {openSection === 2 && (
                    <div style={sectionBodyStyle}>
                    <p style={{ fontSize: '14px', color: '#555', marginBottom: '20px', paddingTop: '8px' }}>
                        Same as above, but instead of Chrome you will open a sample Android app (Sauce Labs “my-demo-app”) on the fake phone.
                    </p>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 1: What you need before starting</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.7', color: '#333', paddingLeft: '24px' }}>
                            <li>Everything from Section 1 (Node.js, Android Studio, ANDROID_HOME, Path, emulator, Appium + uiautomator2).</li>
                            <li><strong>The demo app file (APK)</strong>
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>In your browser go to: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>https://github.com/saucelabs/my-demo-app-android/releases</code>.</li>
                                    <li>Download the latest <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.apk</code> file (e.g. “Android.SauceLabs.Mobile.Sample.app.apk”).</li>
                                    <li>Save it somewhere simple (e.g. <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\apps\</code>).</li>
                                    <li>Write down the full path, e.g. <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\apps\Android.SauceLabs.Mobile.Sample.app.apk</code>.</li>
                                    <li>If the path has backslashes, in your config file you will need to use double backslashes: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\\apps\\Android.SauceLabs.Mobile.Sample.app.apk</code>.</li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 2: Create your test project (do these in order)</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Create a new folder (e.g. <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium-demo-app</code>).
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Open the folder.</li>
                                    <li>Type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cmd</code> in the address bar and press Enter.</li>
                                </ol>
                            </li>
                            <li>In the black window: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm init -y</code> → Enter.</li>
                            <li>Then: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install webdriverio @wdio/cli typescript ts-node @types/node --save-dev</code> → Enter. Wait until it finishes.</li>
                            <li>Then: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio config</code> → choose Mocha, TypeScript, specs in root. Same as Section 1.</li>
                        </ol>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 3: Point your test at the demo app on the emulator</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Open <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code>.</li>
                            <li>In <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>capabilities</code> set:
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>platformName: 'Android'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>automationName: 'UiAutomator2'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>deviceName</code> to your emulator name (from <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>emulator -list-avds</code>)</li>
                                </ol>
                            </li>
                            <li>Set <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>app</code> to the full path of your APK (e.g. <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\\apps\\Android.SauceLabs.Mobile.Sample.app.apk</code>).</li>
                            <li>Set:
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appPackage: 'com.saucelabs.mydemoapp.android'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appActivity: 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity'</code></li>
                                </ol>
                            </li>
                            <li>Do not set <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>browserName</code>. Save the file.</li>
                        </ol>
                        <p style={{ fontSize: '14px', color: '#333', marginTop: '12px', marginBottom: '8px' }}><strong>Example (copy into <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> capabilities):</strong></p>
                        <CodeBlock
                            code={`capabilities: [
  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Pixel_4_API_30',  // replace with your emulator name from: emulator -list-avds
    'appium:app': 'C:\\\\apps\\\\Android.SauceLabs.Mobile.Sample.app.apk',
    'appium:appPackage': 'com.saucelabs.mydemoapp.android',
    'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
  }
],`}
                            variant="dark"
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 4: Run the test</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Start the emulator (Device Manager → play button). Wait until the phone screen is visible.</li>
                            <li>In a second Command Prompt window run <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code>. Leave it open.</li>
                            <li>In the first window (project folder) run <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio run wdio.conf.ts</code>. The demo app should open on the emulator and the test will run.</li>
                        </ol>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />
                    <div style={{ marginBottom: '24px' }}>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '16px' }}>
                            Absolutely — below is a <strong>copy/paste-ready</strong> setup for:
                        </p>
                        <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px', marginBottom: '16px' }}>
                            <li>✅ <strong>Android Emulator</strong> + <strong>Appium 2</strong> + <strong>WebdriverIO (TypeScript)</strong> + <strong>Sauce Labs Demo App (Swag Labs sample app)</strong></li>
                        </ul>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '16px' }}>
                            I'll keep it <strong>non-tech friendly</strong>, with comments in the files.
                        </p>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}># 0) What you will do</h5>
                            <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                                <li>Create a folder project</li>
                                <li>Install the tools (1 command)</li>
                                <li>Put the demo app APK in a folder</li>
                                <li>Run the test (1 command)</li>
                            </ol>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}># 1) Create project folder</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Open <strong>Command Prompt</strong> and run:
                            </p>
                            <CodeBlock
                                code={`mkdir wdio-sauce-demo
cd wdio-sauce-demo
npm init -y`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}># 2) Install dependencies</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Run:
                            </p>
                            <CodeBlock
                                code={`npm i -D webdriverio @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter @wdio/appium-service typescript ts-node @types/node chai`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}># 3) Put the Sauce demo APK in the project</h5>
                            <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                                <li>Create a folder named <strong>apps</strong></li>
                                <li>Put the demo APK file inside it and name it exactly:
                                    <ul style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                        <li>✅ <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>apps/sauce-demo.apk</code></li>
                                    </ul>
                                </li>
                            </ol>
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '12px', marginBottom: '8px' }}>
                                Your project should look like:
                            </p>
                            <CodeBlock
                                code={`wdio-sauce-demo/
  apps/
    sauce-demo.apk
  test/
    specs/
  wdio.conf.ts
  package.json`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#666', marginTop: '12px', fontStyle: 'italic' }}>
                                &gt; If you already have the Sauce demo APK, just rename it to <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>sauce-demo.apk</code> and put it in <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/apps</code>.
                            </p>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}># 4) Create <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> (copy-paste)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Create a file named: <strong>wdio.conf.ts</strong> in the root and paste this:
                            </p>
                            <CodeBlock
                                code={`export const config: WebdriverIO.Config = {
  //
  // Where Appium is running:
  //
  hostname: "127.0.0.1",
  port: 4723,
  path: "/",

  runner: "local",
  framework: "mocha",
  reporters: ["spec"],

  //
  // Where your tests are:
  //
  specs: ["./test/specs/**/*.ts"],

  //
  // How long to wait for commands:
  //
  waitforTimeout: 15000,

  //
  // Appium service (so WDIO can talk to Appium):
  //
  services: [
    [
      "appium",
      {
        // If Appium is already running, WDIO will just connect to it.
        // If you want WDIO to start Appium automatically, set:
        // command: "appium"
      },
    ],
  ],

  //
  // Android emulator capabilities:
  //
  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",

      // "Android Emulator" works for most people
      "appium:deviceName": "Android Emulator",

      // If you have multiple devices, you can set udid like:
      // "appium:udid": "emulator-5554",

      // This is the demo app APK in your project folder:
      "appium:app": \`\${process.cwd()}\\\\apps\\\\sauce-demo.apk\`,

      // Helpful defaults:
      "appium:autoGrantPermissions": true,
      "appium:noReset": false, // set true if you don't want reinstall each run
      "appium:newCommandTimeout": 180,
    },
  ],

  //
  // Mocha options:
  //
  mochaOpts: {
    timeout: 180000, // 3 minutes (mobile can be slow)
  },
};`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}># 5) Create sample test <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>test/specs/sauce-demo.e2e.ts</code></h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Create folders:
                            </p>
                            <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px', marginBottom: '10px' }}>
                                <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>test/specs</code></li>
                            </ul>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Create file: <strong>test/specs/sauce-demo.e2e.ts</strong> and paste:
                            </p>
                            <CodeBlock
                                code={`import { expect } from "chai";

describe("Sauce Demo App - Login and add to cart", () => {
  it("should login and add an item to cart", async () => {
    //
    // Wait until the login screen is visible
    // Most demo builds have these accessibility IDs:
    //
    const username = await $(\`~test-Username\`);
    await username.waitForDisplayed({ timeout: 30000 });

    //
    // Fill login form
    //
    await username.setValue("standard_user");

    const password = await $(\`~test-Password\`);
    await password.setValue("secret_sauce");

    //
    // Tap Login
    //
    const loginBtn = await $(\`~test-LOGIN\`);
    await loginBtn.click();

    //
    // Confirm we landed on Products screen
    //
    const productsTitle = await $(\`~test-PRODUCTS\`);
    await productsTitle.waitForDisplayed({ timeout: 30000 });

    //
    // Add first item to cart
    //
    const addToCartBtn = await $(\`~test-ADD TO CART\`);
    await addToCartBtn.click();

    //
    // Open cart
    //
    const cartIcon = await $(\`~test-Cart\`);
    await cartIcon.click();

    //
    // Validate cart has at least 1 item
    //
    const cartItem = await $(\`~test-Item\`);
    await cartItem.waitForDisplayed({ timeout: 30000 });

    expect(await cartItem.isDisplayed()).to.equal(true);
  });
});`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#666', marginTop: '12px', fontStyle: 'italic' }}>
                                &gt; If any selector doesn't match your APK version, tell me what fails and I'll adjust to the exact IDs your build uses.
                            </p>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}># 6) Add run script to <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>package.json</code></h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Open <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>package.json</code> and in <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>"scripts"</code> set:
                            </p>
                            <CodeBlock
                                code={`"scripts": {
  "test": "wdio run ./wdio.conf.ts"
}`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}># 7) Run it (2 terminals)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
                                Terminal 1: start Appium
                            </p>
                            <CodeBlock
                                code={`appium`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '16px', marginBottom: '10px', fontWeight: '600' }}>
                                Terminal 2: run tests
                            </p>
                            <CodeBlock
                                code={`npm test`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '12px' }}>
                                ✅ Emulator should open the app, login, add item, open cart.
                            </p>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Common beginner problems (quick fixes)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
                                A) "Appium driver not installed"
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '16px' }}>
                                Run:
                            </p>
                            <CodeBlock
                                code={`appium driver install uiautomator2`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '16px', marginBottom: '10px', fontWeight: '600' }}>
                                B) "adb not recognized"
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '16px' }}>
                                You already hit this — you must add:
                                <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>...Android\\Sdk\\platform-tools</code> to PATH.
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '16px', marginBottom: '10px', fontWeight: '600' }}>
                                C) "Can't find app / apk"
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '16px' }}>
                                Make sure this file exists exactly:
                                <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio-sauce-demo\\apps\\sauce-demo.apk</code>
                            </p>
                        </div>
                    </div>
                    </div>
                    )}
                </div>

                {/* Section 3: Real device + Chrome */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSection(3)}
                        role="button"
                        aria-expanded={openSection === 3}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            3. Real device + Chrome (your own Android phone, Chrome browser)
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSection === 3 ? '▼' : '▶'}</span>
                    </div>
                    {openSection === 3 && (
                    <div style={sectionBodyStyle}>
                    <p style={{ fontSize: '14px', color: '#555', marginBottom: '20px', paddingTop: '8px' }}>
                        Use a real Android phone connected by USB. You will control the Chrome browser on that phone from your Windows PC.
                    </p>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 1: What you need before starting</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.7', color: '#333', paddingLeft: '24px' }}>
                            <li>Everything from Section 1: Node.js, Android Studio, ANDROID_HOME, Path, Appium + uiautomator2. You do not need an emulator for this one.</li>
                            <li><strong>Your Android phone</strong>
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>On the phone: go to Settings → About phone.</li>
                                    <li>Tap “Build number” seven times. You will see “You are now a developer.”</li>
                                    <li>Go back to Settings → System → Developer options.</li>
                                    <li>Turn on “USB debugging”.</li>
                                    <li>Connect the phone to your PC with a USB cable.</li>
                                    <li>When the phone asks “Allow USB debugging?” tap Allow (and optionally “Always allow from this computer”).</li>
                                </ol>
                            </li>
                            <li><strong>Check the connection</strong>
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Open Command Prompt and type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code>. You should see your device listed.</li>
                                    <li>If you see “unauthorized”, check the phone for the USB debugging popup and tap Allow.</li>
                                    <li>If the device does not appear, you may need to install USB drivers for your phone (search “[your phone model] USB driver Windows”).</li>
                                </ol>
                            </li>
                            <li>Make sure <strong>Chrome</strong> is installed on the phone.</li>
                        </ol>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 2: Create your test project (do these in order)</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Create a folder (e.g. <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium-real-chrome</code>).
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Open it.</li>
                                    <li>Type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cmd</code> in the address bar and Enter.</li>
                                </ol>
                            </li>
                            <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm init -y</code> → Enter.</li>
                            <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install webdriverio @wdio/cli typescript ts-node @types/node --save-dev</code> → Enter. Wait.</li>
                            <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio config</code> → Mocha, TypeScript, specs in root. Same as before.</li>
                        </ol>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 3: Point your test at Chrome on your phone</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>In Command Prompt type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices -l</code>. Note the device name or ID (first column).</li>
                            <li>Open <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code>.</li>
                            <li>In <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>capabilities</code> set:
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>platformName: 'Android'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>automationName: 'UiAutomator2'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>browserName: 'Chrome'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>deviceName</code> or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>udid</code> to the device name/ID from <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code></li>
                                </ol>
                            </li>
                            <li>Save the file.</li>
                        </ol>
                        <p style={{ fontSize: '14px', color: '#333', marginTop: '12px', marginBottom: '8px' }}><strong>Example (copy into <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> capabilities):</strong></p>
                        <CodeBlock
                            code={`capabilities: [
  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:browserName': 'Chrome',
    'appium:udid': 'ABC123XYZ',  // replace with your device ID from: adb devices -l
  }
],`}
                            variant="dark"
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 4: Run the test</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Keep the phone connected and unlocked (or unlock when asked). Accept the USB debugging prompt if it appears again.</li>
                            <li>Open a second Command Prompt and run <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code>. Leave it open.</li>
                            <li>In the first window run <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio run wdio.conf.ts</code>. Chrome on your phone should be controlled by the test.</li>
                        </ol>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />
                    <div style={{ marginBottom: '24px' }}>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '16px' }}>
                            Below is a <strong>copy-paste working example</strong> for <strong>Real Android phone + Chrome (mobile web)</strong> using <strong>WebdriverIO + Appium 2 + TypeScript</strong> on Windows. I'm writing it in <strong>non-tech friendly steps</strong>.
                        </p>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 0) Before you start (2 must-do checks)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
                                A) Connect phone
                            </p>
                            <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                                <li>On your Android phone: <strong>Settings → About phone → tap "Build number" 7 times</strong></li>
                                <li>Go back: <strong>Settings → Developer options</strong></li>
                                <li>Turn ON:
                                    <ul style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                        <li>✅ <strong>USB debugging</strong></li>
                                    </ul>
                                </li>
                                <li>Plug phone into PC (USB cable)</li>
                                <li>On phone popup: <strong>Allow USB debugging</strong> → tap <strong>Allow</strong></li>
                            </ol>
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '16px', marginBottom: '10px', fontWeight: '600' }}>
                                B) Make sure PC sees your phone
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Open <strong>Command Prompt</strong> and run:
                            </p>
                            <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px', marginBottom: '10px' }}>
                                <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code></li>
                            </ul>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                You should see something like:
                            </p>
                            <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px', marginBottom: '10px' }}>
                                <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>R58N123ABC    device</code></li>
                            </ul>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                That <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>R58N123ABC</code> is your <strong>UDID</strong> (device id). Copy it.
                            </p>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 1) Create a project folder</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                In Command Prompt:
                            </p>
                            <CodeBlock
                                code={`mkdir wdio-realdevice-chrome
cd wdio-realdevice-chrome
npm init -y`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 2) Install WebdriverIO + Appium packages</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Run:
                            </p>
                            <CodeBlock
                                code={`npm i -D typescript ts-node @types/node
npm i -D @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/spec-reporter
npm i -D @wdio/appium-service webdriverio`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 3) Make sure Appium 2 + Android driver installed</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Run:
                            </p>
                            <CodeBlock
                                code={`npm i -g appium
appium -v
appium driver install uiautomator2
appium driver list --installed`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '12px', marginBottom: '10px' }}>
                                Start Appium server in a separate terminal:
                            </p>
                            <CodeBlock
                                code={`appium`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '12px' }}>
                                Keep it running.
                            </p>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 4) Create <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>tsconfig.json</code></h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Create a file named <strong>tsconfig.json</strong> in the project root:
                            </p>
                            <CodeBlock
                                code={`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "types": ["node"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist"
  },
  "include": ["./test/**/*.ts", "./wdio.conf.ts"]
}`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 5) Create <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> (Real Device + Chrome)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Create a file named <strong>wdio.conf.ts</strong> in the project root.
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
                                IMPORTANT: Replace <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>PUT_YOUR_UDID_HERE</code> with your <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code> value.
                            </p>
                            <CodeBlock
                                code={`import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  runner: "local",

  hostname: "127.0.0.1",
  port: 4723,
  path: "/",

  specs: ["./test/specs/**/*.ts"],
  maxInstances: 1,

  logLevel: "info",

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 180000
  },

  reporters: ["spec"],

  services: [
    [
      "appium",
      {
        // We are running "appium" ourselves in another terminal.
        // If you want WDIO to start it automatically, tell me and I'll adjust.
        command: "appium"
      }
    ]
  ],

  capabilities: [
    {
      platformName: "Android",

      // Appium 2 namespaced capabilities:
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "My Android Phone",
      "appium:udid": "PUT_YOUR_UDID_HERE",

      // Chrome browser automation:
      "appium:browserName": "Chrome",

      // Helpful stability settings:
      "appium:noReset": true,
      "appium:newCommandTimeout": 180,

      // If chromedriver version mismatch happens, this often fixes it:
      "appium:chromedriverAutodownload": true
    }
  ]
};`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 6) Create a sample test (simple Google search)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Create folder: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>test/specs/</code>
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Create file: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>test/specs/chrome-real-device.e2e.ts</code>
                            </p>
                            <CodeBlock
                                code={`import { expect } from "chai";

describe("Mobile Chrome on real Android device", () => {
  it("opens Google and searches WebdriverIO", async () => {
    // 1) Open a website
    await browser.url("https://www.google.com");

    // 2) Sometimes Google shows a consent screen; handle it safely
    // (If it doesn't appear, the try/catch will ignore it)
    try {
      const agreeBtn = await $("//button//*[contains(text(),'I agree') or contains(text(),'Accept all')]/..");
      if (await agreeBtn.isDisplayed()) {
        await agreeBtn.click();
      }
    } catch (e) {
      // ignore if not found
    }

    // 3) Find the search box and type text
    const searchBox = await $(\`input[name="q"]\`);
    await searchBox.waitForDisplayed({ timeout: 30000 });

    await searchBox.click();
    await searchBox.setValue("WebdriverIO Appium tutorial");

    // 4) Press Enter on the phone keyboard
    await browser.keys("Enter");

    // 5) Verify results page loaded (title contains our text)
    await browser.waitUntil(
      async () => (await browser.getTitle()).toLowerCase().includes("webdriverio"),
      { timeout: 30000, timeoutMsg: "Search results did not load or title did not match." }
    );

    const title = await browser.getTitle();
    expect(title.toLowerCase()).to.contain("webdriverio");
  });
});`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '12px', marginBottom: '10px' }}>
                                Now install chai types:
                            </p>
                            <CodeBlock
                                code={`npm i -D chai @types/chai`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 7) Add a run script</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Open <strong>package.json</strong> and add:
                            </p>
                            <CodeBlock
                                code={`"scripts": {
  "test:android:chrome": "wdio run ./wdio.conf.ts"
}`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 8) Run it (2 terminals)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
                                Terminal 1 (Appium server)
                            </p>
                            <CodeBlock
                                code={`appium`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '16px', marginBottom: '10px', fontWeight: '600' }}>
                                Terminal 2 (run test)
                            </p>
                            <CodeBlock
                                code={`npm run test:android:chrome`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '12px' }}>
                                Your phone Chrome should open Google and perform the search.
                            </p>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>If it fails (most common reasons + fix)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
                                A) "ChromeDriver version mismatch"
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Keep this in capabilities (already included):
                            </p>
                            <CodeBlock
                                code={`"appium:chromedriverAutodownload": true`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '16px', marginBottom: '10px', fontWeight: '600' }}>
                                B) Phone not detected
                            </p>
                            <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px', marginBottom: '10px' }}>
                                <li>Run <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code> again</li>
                                <li>Unplug/plug USB</li>
                                <li>Accept USB debugging popup again</li>
                            </ul>
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '16px', marginBottom: '10px', fontWeight: '600' }}>
                                C) "Appium server not reachable"
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Make sure Appium is running on:
                            </p>
                            <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                                <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>http://127.0.0.1:4723</code></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    )}
                </div>

                {/* Section 4: Real device + my-demo-app-android */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSection(4)}
                        role="button"
                        aria-expanded={openSection === 4}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            4. Real device + Sauce Labs demo app (your phone, sample app)
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSection === 4 ? '▼' : '▶'}</span>
                    </div>
                    {openSection === 4 && (
                    <div style={sectionBodyStyle}>
                    <p style={{ fontSize: '14px', color: '#555', marginBottom: '20px', paddingTop: '8px' }}>
                        Use your real Android phone and run the Sauce Labs demo app on it from your Windows PC.
                    </p>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 1: What you need before starting</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.7', color: '#333', paddingLeft: '24px' }}>
                            <li>Everything from Section 3: Node.js, Android Studio, ANDROID_HOME, Path, phone with USB debugging on, connected and showing in <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code>, Appium + uiautomator2.</li>
                            <li>The Sauce Labs demo APK (same as Section 2).
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Download from <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>https://github.com/saucelabs/my-demo-app-android/releases</code>.</li>
                                    <li>Save it and write down the full path (e.g. <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\apps\Android.SauceLabs.Mobile.Sample.app.apk</code>).</li>
                                    <li>Use double backslashes in the config: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\\apps\\Android.SauceLabs.Mobile.Sample.app.apk</code>.</li>
                                </ol>
                            </li>
                        </ol>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 2: Create your test project (do these in order)</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Create a folder (e.g. <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium-real-demo</code>).
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li>Open it.</li>
                                    <li>Type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cmd</code> in the address bar and Enter.</li>
                                </ol>
                            </li>
                            <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm init -y</code> → Enter.</li>
                            <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install webdriverio @wdio/cli typescript ts-node @types/node --save-dev</code> → Enter. Wait.</li>
                            <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio config</code> → Mocha, TypeScript, specs in root.</li>
                        </ol>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 3: Point your test at the demo app on your phone</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Open <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code>.</li>
                            <li>In <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>capabilities</code> set:
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>platformName: 'Android'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>automationName: 'UiAutomator2'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>deviceName</code> or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>udid</code> from <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code></li>
                                </ol>
                            </li>
                            <li>Set <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>app</code> to the full path of the APK (use double backslashes).</li>
                            <li>Set:
                                <ol style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appPackage: 'com.saucelabs.mydemoapp.android'</code></li>
                                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appActivity: 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity'</code></li>
                                </ol>
                            </li>
                            <li>Save the file.</li>
                        </ol>
                        <p style={{ fontSize: '14px', color: '#333', marginTop: '12px', marginBottom: '8px' }}><strong>Example (copy into <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> capabilities):</strong></p>
                        <CodeBlock
                            code={`capabilities: [
  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:udid': 'ABC123XYZ',  // replace with your device ID from: adb devices -l
    'appium:app': 'C:\\\\apps\\\\Android.SauceLabs.Mobile.Sample.app.apk',
    'appium:appPackage': 'com.saucelabs.mydemoapp.android',
    'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
  }
],`}
                            variant="dark"
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>Step 4: Run the test</h5>
                        <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                            <li>Keep the phone connected. Accept USB debugging if asked.</li>
                            <li>In a second Command Prompt run <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code>. Leave it open.</li>
                            <li>In the first window run <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio run wdio.conf.ts</code>. The demo app will be installed and opened on your phone and the test will run.</li>
                        </ol>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />
                    <div style={{ marginBottom: '24px' }}>
                        <p style={{ fontSize: '14px', color: '#333', marginBottom: '16px' }}>
                            Below is a <strong>copy-paste ready</strong> <strong><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code></strong> + <strong>one simple test</strong> for <strong>Real Android phone + Sauce Labs demo app (APK)</strong>. I'm writing it so a non-technical person can follow: <strong>you only replace 2 things</strong>: <strong>UDID</strong> and <strong>APK path</strong>.
                        </p>
                        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px', fontStyle: 'italic' }}>
                            &gt; This setup runs on <strong>your own phone</strong> using a <strong>local Appium server</strong> (not Sauce cloud).
                        </p>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 0) Before you paste anything (2 quick values you must get)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
                                A) Get your phone UDID
                            </p>
                            <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                                <li>Plug phone via USB (USB Debugging ON)</li>
                                <li>Run:</li>
                            </ol>
                            <CodeBlock
                                code={`adb devices`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '12px', marginBottom: '10px' }}>
                                You will see something like:
                                <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A', marginLeft: '6px' }}>R58N123ABC  device</code>
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '16px' }}>
                                ✅ Your <strong>UDID</strong> is: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>R58N123ABC</code>
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
                                B) Download the Sauce Labs Android demo app (APK)
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Sauce provides a public sample APK link in their docs (<a href="https://docs.saucelabs.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>Sauce Labs Documentation</a>).
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Example: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>Android.SauceLabs.Mobile.Sample.app.2.3.0.apk</code>
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Download it and save it somewhere like:
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>C:\mobile-apps\Android.SauceLabs.Mobile.Sample.app.2.3.0.apk</code>
                            </p>
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 1) <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> (copy/paste)</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Create a file: <strong><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code></strong>
                            </p>
                            <CodeBlock
                                code={`import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  runner: "local",

  // Appium runs locally on your machine
  hostname: "127.0.0.1",
  port: 4723,
  path: "/",

  specs: ["./test/specs/**/*.ts"],
  maxInstances: 1,

  logLevel: "info",

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 180000
  },

  // Start/stop Appium automatically for you
  services: [
    [
      "appium",
      {
        // You can keep defaults. This is beginner-friendly.
        args: {
          address: "127.0.0.1",
          port: 4723,
          // comment these out if you want less logs
          log: "./appium.log"
        }
      }
    ]
  ],

  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",

      // ✅ REPLACE THIS with your real device UDID from: adb devices
      "appium:udid": "PASTE_YOUR_UDID_HERE",

      // ✅ REPLACE THIS with the APK file path on your PC
      "appium:app": "C:\\\\mobile-apps\\\\Android.SauceLabs.Mobile.Sample.app.2.3.0.apk",

      "appium:autoGrantPermissions": true,
      "appium:noReset": false,
      "appium:newCommandTimeout": 180
    }
  ]
};`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 2) Sample test (login) — super simple</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Create file: <strong><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>test/specs/login.e2e.ts</code></strong>
                            </p>
                            <CodeBlock
                                code={`import { expect } from "expect";

describe("Sauce Demo App - Login", () => {
  it("should login with a sample user", async () => {
    // These locator names are common in the Sauce demo apps.
    // If any element is not found, see the note below ("If selectors differ").
    const username = await $("~test-Username");
    const password = await $("~test-Password");
    const loginBtn = await $("~test-LOGIN");

    await username.waitForDisplayed({ timeout: 30000 });

    await username.setValue("standard_user");
    await password.setValue("secret_sauce");
    await loginBtn.click();

    // After login, many Sauce demo apps show Products screen.
    // Common locator:
    const productsTitle = await $("~test-PRODUCTS");
    await productsTitle.waitForDisplayed({ timeout: 30000 });

    expect(await productsTitle.isDisplayed()).toBe(true);
  });
});`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>## 3) Install the minimal packages + run</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                From your project folder:
                            </p>
                            <CodeBlock
                                code={`npm init -y
npm i -D typescript ts-node @types/node
npm i -D @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/appium-service webdriverio expect
npx tsc --init`}
                                variant="dark"
                            />
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '12px', marginBottom: '10px' }}>
                                Run:
                            </p>
                            <CodeBlock
                                code={`npx wdio run wdio.conf.ts`}
                                variant="dark"
                            />
                        </div>
                        <div style={{ marginBottom: '24px' }}>
                            <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '10px', fontWeight: '600' }}>If the test fails because "element not found"</h5>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                                Different versions of the Sauce demo apps may have slightly different <strong>accessibility ids</strong>.
                            </p>
                            <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>
                                Fast beginner fix:
                            </p>
                            <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                                <li>Install <strong>Appium Inspector</strong></li>
                                <li>Start Appium (or let WDIO start it)</li>
                                <li>Inspect the screen and copy the <strong>Accessibility ID</strong></li>
                                <li>Replace:
                                    <ul style={{ marginTop: '6px', paddingLeft: '20px' }}>
                                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>~test-Username</code></li>
                                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>~test-Password</code></li>
                                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>~test-LOGIN</code></li>
                                        <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>~test-PRODUCTS</code></li>
                                    </ul>
                                </li>
                            </ol>
                            <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>
                                (That's it.)
                            </p>
                        </div>
                    </div>
                    </div>
                    )}
                </div>
                {/* Section 5: Best free app for emulator practice */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSection(5)}
                        role="button"
                        aria-expanded={openSection === 5}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            Best free app for emulator practice
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSection === 5 ? '▼' : '▶'}</span>
                    </div>
                    {openSection === 5 && (
                    <div style={sectionBodyStyle}>
                <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', paddingTop: '8px' }}>
                    Yes — since you're on an <strong>emulator</strong>, the easiest free app to practice Appium locators + flows is a <strong>demo APK</strong> (so you don't depend on Play Store logins).
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Sauce Labs “My Demo App” (Android)
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Built specifically for automation demos (login, product list, cart, forms)</li>
                    <li>Open-source repo (so it's safe + consistent for learning) — <a href="https://github.com/saucelabs/my-demo-app-android" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>GitHub</a></li>
                </ul>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '30px 0' }} />

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Option A (Recommended): Use the APK from the GitHub Release
                </h3>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '12px', marginTop: '20px', fontWeight: '600' }}>Step 1: Download the APK</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open the repo releases page for <strong>saucelabs/my-demo-app-android</strong> — <a href="https://github.com/saucelabs/my-demo-app-android/releases" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>GitHub Releases</a></li>
                    <li>Download the latest <strong>.apk</strong> from “Releases” (Assets)</li>
                </ol>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '12px', marginTop: '20px', fontWeight: '600' }}>Step 2: Install APK on your emulator</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>From Command Prompt (after fixing <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb</code> PATH):</p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    marginBottom: '20px',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`adb devices
adb install -r "C:\\path\\to\\my-demo-app.apk"`}</pre>
                </div>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '12px', marginTop: '20px', fontWeight: '600' }}>Step 3: Find the package name (confirm install)</h4>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    marginBottom: '20px',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`adb shell pm list packages | findstr demo`}</pre>
                </div>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '12px', marginTop: '20px', fontWeight: '600' }}>Step 4: Launch the app (quick)</h4>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    marginBottom: '20px',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`adb shell monkey -p <package.name.here> -c android.intent.category.LAUNCHER 1`}</pre>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '30px 0' }} />

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Option B: Start with Android “Settings” (no APK needed)
                </h3>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '12px' }}>This is fastest if you just want locator practice right now. Use capabilities like:</p>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    border: '1px solid #e0e0e0',
                    marginBottom: '20px',
                    overflowX: 'auto'
                }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android Emulator",
  "appium:udid": "emulator-5554",
  "appium:appPackage": "com.android.settings",
  "appium:appActivity": ".Settings",
  "appium:noReset": true
}`}</pre>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '30px 0' }} />

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Next: Locators + Appium Inspector
                </h3>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '0' }}>
                    Once the demo app is installed, open <strong>Appium Inspector</strong> and start a session to click elements and copy locators. (That's the fastest way to learn.)
                </p>
                    </div>
                    )}
                </div>

                {/* Section 6: Appium Inspector Setup (Windows + Android Emulator) */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSection(6)}
                        role="button"
                        aria-expanded={openSection === 6}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            Appium Inspector Setup (Windows + Android Emulator)
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSection === 6 ? '▼' : '▶'}</span>
                    </div>
                    {openSection === 6 && (
                    <div style={sectionBodyStyle}>
                <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', paddingTop: '8px' }}>
                    Baby steps for using <strong>Appium Inspector</strong> on Windows with an Android emulator. Follow in order.
                </p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>What you need (before Inspector)</h4>
                <ul style={{ fontSize: '14px', lineHeight: '1.7', color: '#333', paddingLeft: '24px' }}>
                    <li>Windows PC</li>
                    <li>Android Studio installed</li>
                    <li>Android Emulator is running</li>
                    <li>Node.js installed</li>
                    <li>Appium 2 installed (<code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm i -g appium</code>)</li>
                    <li>UiAutomator2 driver installed (<code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver install uiautomator2</code>)</li>
                </ul>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 1: Confirm your emulator is running</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open <strong>Android Studio → Device Manager</strong></li>
                    <li>Click <strong>Play ▶</strong> on your emulator</li>
                    <li>Wait until you see the Android home screen</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Emulator is now running.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 2: Fix ADB (so Windows can talk to emulator)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open <strong>Command Prompt</strong></li>
                    <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ You should see something like: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>emulator-5554    device</code></p>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '8px', fontStyle: 'italic' }}>If you see "adb is not recognized", add Android <strong>platform-tools</strong> to Windows PATH.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 3: Start Appium Server (must be running)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open <strong>Command Prompt</strong> (new window)</li>
                    <li>Run:</li>
                </ol>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #e0e0e0', margin: '8px 0 16px 0', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`appium`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333' }}>3. Keep this window open.</p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Appium server is now running at <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>http://127.0.0.1:4723</code></p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 4: Install + Open Appium Inspector</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Download <strong>Appium Inspector</strong> (Windows installer) from GitHub Releases</li>
                    <li>Install it</li>
                    <li>Open it from <strong>Start Menu → Appium Inspector</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Appium Inspector opens.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 5: Create a New Session in Inspector</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>In Appium Inspector click <strong>New Session</strong></li>
                    <li>Fill the server fields: <strong>Remote Host</strong>: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>127.0.0.1</code>, <strong>Remote Port</strong>: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>4723</code>, <strong>Remote Path</strong>: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Now you must add <strong>capabilities</strong>.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 6: Paste capabilities (choose ONE option)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>Option A (Easiest):</strong> Inspect Android Settings app (no APK needed). Paste this into the <strong>Capabilities</strong> box:</p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '13px', border: '1px solid #e0e0e0', marginBottom: '16px', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android Emulator",
  "appium:udid": "emulator-5554",
  "appium:appPackage": "com.android.settings",
  "appium:appActivity": ".Settings",
  "appium:noReset": true,
  "appium:autoGrantPermissions": true,
  "appium:newCommandTimeout": 120
}`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>Option B:</strong> Inspect your own APK (after installing it):</p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '13px', border: '1px solid #e0e0e0', marginBottom: '16px', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android Emulator",
  "appium:udid": "emulator-5554",
  "appium:app": "C:\\\\Apps\\\\myapp.apk",
  "appium:autoGrantPermissions": true,
  "appium:newCommandTimeout": 120
}`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>If your emulator id is different, replace <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>"emulator-5554"</code> with what you see from <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code>.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 7: Start Session</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click <strong>Start Session</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ If everything is correct you will see: your emulator screen inside Inspector, a tree of elements (page source), and element attributes on the right panel.</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>How to find locators in Inspector</h3>
                <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Step 1: Select an element</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Click the <strong>crosshair/target icon</strong> (Select Element)</li>
                    <li>Click any button/text on the emulator screen inside Inspector</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ The element's details will show on the right.</p>

                <h4 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Step 2: Pick the best locator (use this order)</h4>
                <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li><strong>Best 1: Accessibility ID (content-desc)</strong> — If you see <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>content-desc</code> in Inspector, use it first. WebdriverIO: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>$('~Login')</code></li>
                    <li><strong>Best 2: resource-id</strong> — If you see <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>resource-id</code>, it's usually stable. WebdriverIO: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>$('android=new UiSelector().resourceId("com.example:id/loginBtn")')</code></li>
                    <li><strong>Best 3: text</strong> — WebdriverIO: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>$('android=new UiSelector().text("Sign in")')</code></li>
                    <li><strong>Last resort: XPath</strong> — Use only when you must (often flaky). <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>$('//android.widget.TextView[@text="Sign in"]')</code></li>
                </ul>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>Common errors + fixes</h3>
                <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li><strong>"Could not connect to server"</strong> — Make sure Appium server is running (<code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code>). Host = <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>127.0.0.1</code>, Port = <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>4723</code>, Path = <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/</code></li>
                    <li><strong>"No devices found"</strong> — Emulator must be running; <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code> must show it. If not: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb kill-server</code> then <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb start-server</code></li>
                    <li><strong>Session starts then fails immediately</strong> — Ensure driver is installed: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver list --installed</code>. If missing: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver install uiautomator2</code></li>
                </ul>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>Pro Tip: Get appPackage / appActivity (when testing real apps)</h3>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open the app on emulator</li>
                    <li>Run:</li>
                </ol>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #e0e0e0', margin: '8px 0 12px 0', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`adb shell dumpsys window | findstr mCurrentFocus`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333' }}>✅ It prints something like <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>com.company.app/com.company.app.MainActivity</code>. Use those values in Inspector capabilities.</p>
                    </div>
                    )}
                </div>

                {/* Section 7: Integrate Sauce Labs Real Devices with Windows (Android + Appium) */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSection(7)}
                        role="button"
                        aria-expanded={openSection === 7}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            Integrate Sauce Labs Real Devices with Windows (Android + Appium) — Baby Steps
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSection === 7 ? '▼' : '▶'}</span>
                    </div>
                    {openSection === 7 && (
                    <div style={sectionBodyStyle}>
                <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', paddingTop: '8px' }}>
                    This guide is for <strong>non-technical</strong> users who want to run <strong>Android Appium tests from a Windows computer</strong> using <strong>Sauce Labs Real Devices</strong> (cloud-hosted Android phones).
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>What this means (simple)</h4>
                <ul style={leftAlignStyles.list}>
                    <li>Your <strong>test code runs on your Windows laptop</strong></li>
                    <li>The <strong>Android phone runs in Sauce Labs cloud</strong></li>
                    <li>Sauce Labs provides the <strong>remote Appium server</strong> and the <strong>real device</strong></li>
                </ul>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Sauce Labs supports running <strong>Appium tests on real Android devices</strong>, and your app can be installed from <strong>Sauce App Storage</strong> or a <strong>public download link</strong>. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 1: Create a Sauce Labs account</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Sign up for Sauce Labs (free trial works)</li>
                    <li>In Sauce Labs, find your: <strong>Username</strong> and <strong>Access Key</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>You'll use these to connect your Windows tests to Sauce Labs. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 2: Get an Android app to test (APK)</h4>
                <p style={{ fontSize: '14px', color: '#333' }}>You need an <strong>Android .apk</strong> (or .aab). If you don't have one, use a demo app. Sauce Labs docs mention using demo apps if you don't have your own. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 3: Upload your APK to Sauce Labs App Storage</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>In Sauce Labs, open <strong>Mobile App Storage</strong></li>
                    <li>Upload your <strong>.apk</strong></li>
                    <li>After upload, note either the <strong>File ID</strong> or the <strong>Filename</strong> you uploaded</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Sauce App Storage supports Android app files and is designed for real-device testing. (<a href="https://docs.saucelabs.com/mobile-apps/app-storage/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '12px' }}>✅ You will reference the uploaded app in your test like:</p>
                <ul style={leftAlignStyles.list}>
                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>storage:&lt;file_id&gt;</code> <strong>or</strong></li>
                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>storage:filename=&lt;your_apk_name.apk&gt;</code> (<a href="https://docs.saucelabs.com/mobile-apps/app-storage/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</li>
                </ul>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 4: Prepare your Windows project (WebdriverIO + Appium)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>On Windows, you'll need:</p>
                <ul style={leftAlignStyles.list}>
                    <li>Node.js installed (you already have it)</li>
                    <li>A WebdriverIO project (your test framework)</li>
                    <li>Appium client dependencies (through WDIO)</li>
                </ul>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>(You do NOT need to run a local emulator or local Appium server for Sauce Labs real devices.)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 5: Add Sauce Labs connection settings</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>In your WebdriverIO config (<code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.js</code>), set your Sauce Labs credentials and region.</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>Example (easy copy/paste):</strong></p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '13px', border: '1px solid #e0e0e0', marginBottom: '12px', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`export const config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  protocol: "https",
  path: "/wd/hub",

  // ...
};`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>Tip: Keep credentials in environment variables (SAUCE_USERNAME, SAUCE_ACCESS_KEY) so they're not hardcoded.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 6: Add Android "Real Device" capabilities</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Use capabilities that tell Sauce Labs: platform = Android, real device name (e.g. "Google Pixel.*"), automation driver = UiAutomator2, and where your APK is in Sauce Storage.</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>Example capabilities (Android real device):</strong></p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '13px', border: '1px solid #e0e0e0', marginBottom: '12px', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`capabilities: [
  {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",

    // Pick a device (Sauce chooses a matching available phone)
    "appium:deviceName": "Google Pixel.*",

    // Your uploaded app in Sauce App Storage:
    "appium:app": "storage:filename=MyAndroidApp.apk",

    "sauce:options": {
      name: "Android Appium - Real Device Test",
      build: "Windows-Android-Appium-Run"
    }
  }
]`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Sauce Labs real-device Appium runs use <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>platformName</code> and (for native apps) the <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>app</code> capability, which can point to <strong>Sauce App Storage</strong>. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 7: Run your test from Windows</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open Command Prompt in your project folder</li>
                    <li>Run your normal WDIO command, for example:</li>
                </ol>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #e0e0e0', margin: '8px 0 12px 0', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`npx wdio run wdio.conf.js`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '12px' }}>Sauce Labs will: allocate a real Android phone, install your APK, run your automation, and record logs/videos/screenshots (depending on your plan/settings).</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 8: View results in Sauce Labs</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open Sauce Labs dashboard</li>
                    <li>Go to <strong>Test Results</strong></li>
                    <li>Click your test run: video playback, device logs, screenshots, errors</li>
                </ol>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Optional (but helpful): Speed up repeated runs</h4>
                <p style={{ fontSize: '14px', color: '#333' }}>If you run many tests back-to-back on the <strong>same device</strong>, Sauce Labs supports options like <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>cacheId</code> and <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>noReset</code> to reduce device cleaning/reinstall cycles. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Alternative to App Storage (if you don't want to upload)</h4>
                <p style={{ fontSize: '14px', color: '#333' }}>If your APK is hosted on a <strong>public URL</strong> (e.g. a public GitHub release), you can set:</p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>"appium:app": "https://public-link-to-your.apk"</code></p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Sauce Labs supports installing an Android app from a remote location for real devices (must be publicly accessible). (<a href="https://docs.saucelabs.com/mobile-apps/app-storage/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>
                    </div>
                    )}
                </div>

                {/* Section 8: Integrate LambdaTest Real Devices with Windows Android Appium */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSection(8)}
                        role="button"
                        aria-expanded={openSection === 8}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            Integrate <strong>LambdaTest Real Devices</strong> with <strong>Windows Android Appium</strong> (Baby Steps)
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSection === 8 ? '▼' : '▶'}</span>
                    </div>
                    {openSection === 8 && (
                    <div style={sectionBodyStyle}>
                <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', paddingTop: '8px' }}>
                    This section explains how to run your <strong>Android Appium tests from a Windows computer</strong>, while the <strong>real Android phone runs on LambdaTest cloud</strong>.
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>What you need (simple checklist)</h4>
                <ul style={leftAlignStyles.list}>
                    <li>✅ A <strong>LambdaTest account</strong></li>
                    <li>✅ Your <strong>LambdaTest Username</strong> + <strong>Access Key</strong></li>
                    <li>✅ An Android app file (<strong>.apk</strong>) to test (your app or a sample)</li>
                    <li>✅ Your existing test project on Windows (Appium client like WebdriverIO / Java / Python)</li>
                </ul>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 1: Get your LambdaTest login keys</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Log in to <strong>LambdaTest</strong></li>
                    <li>Go to your <strong>Profile / Account settings</strong></li>
                    <li>Copy: <strong>Username</strong> and <strong>Access Key</strong></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>These two values allow your Windows test to connect to LambdaTest devices.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 2: Upload your Android app (APK) to LambdaTest</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>You have two easy options:</p>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Option A (Easiest): Upload from LambdaTest Dashboard</h5>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open LambdaTest Dashboard</li>
                    <li>Go to <strong>Real Device → App Automation</strong></li>
                    <li>Click <strong>App Upload</strong></li>
                    <li>Upload your <strong>.apk</strong></li>
                    <li>Copy the <strong>App URL</strong> you get (it looks like <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>lt://APP123...</code>) (<a href="https://www.lambdatest.com/support/docs/appium-java-testng/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>LambdaTest</a>)</li>
                </ol>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Option B (Alternative): Upload using a simple command (cURL)</h5>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>LambdaTest provides an upload API endpoint:</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>https://manual-api.lambdatest.com/app/upload/realDevice</code> (<a href="https://www.testmu.ai/support/docs/hyperexecute-appium-testing/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>testmu.ai</a>)</p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>After uploading, LambdaTest returns an <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>app_url</code> in this format:</p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>lt://APP123456789...</code> (<a href="https://www.testmu.ai/support/docs/hyperexecute-appium-testing/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>testmu.ai</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 3: Use the correct LambdaTest "Appium Server" address</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>To run tests on LambdaTest real devices, your project must connect to their Appium hub:</p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>https://mobile-hub.lambdatest.com/wd/hub</code> (<a href="https://www.lambdatest.com/support/docs/migrate-appium-tests-from-browserstack-and-saucelabs/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>LambdaTest</a>)</p>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '8px' }}>(Think of this as the "cloud address" your Windows tests talk to.)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 4: Add the device details (Capabilities)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Capabilities are just "settings" that tell LambdaTest what phone + Android version you want, and which app to install.</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>At minimum you choose:</p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Device name</strong> (example: Samsung Galaxy / Pixel)</li>
                    <li><strong>Android version</strong> (example: 13, 14)</li>
                    <li>Your uploaded <strong>App URL</strong> (<code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>lt://...</code>) (<a href="https://www.lambdatest.com/support/docs/appium-java-testng/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>LambdaTest</a>)</li>
                </ul>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>LambdaTest commonly groups these as <strong>LT Options</strong> (example shown in their docs): (<a href="https://www.lambdatest.com/support/docs/appium-ruby-rspec/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>LambdaTest</a>)</p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '13px', border: '1px solid #e0e0e0', marginBottom: '12px', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`{
  "LT:Options": {
    "platformName": "Android",
    "isRealMobile": true,
    "deviceName": "Galaxy S21",
    "platformVersion": "13",
    "app": "lt://APP123456789123456789",
    "build": "Windows-Android-Appium",
    "name": "Login Test"
  }
}`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '8px' }}>You can generate the exact capabilities for your preferred device using LambdaTest's <strong>Capabilities Generator</strong> (recommended by LambdaTest). (<a href="https://www.lambdatest.com/support/docs/migrate-appium-tests-from-browserstack-and-saucelabs/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>LambdaTest</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 5: Run your test from Windows</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open your project folder on Windows</li>
                    <li>Run your normal test command (example: "run tests" in your framework)</li>
                    <li>LambdaTest will: start a <strong>real Android phone in the cloud</strong>, install your app, run your test steps, and save results (video/logs)</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>You can watch results on <strong>Real Device → App Automation</strong> in the LambdaTest dashboard. (<a href="https://www.lambdatestinternal.com/blog/how-to-automate-android-apps-using-appium/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>lambdatestinternal.com</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 6: View results (video + logs)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>After the run:</p>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Go to <strong>LambdaTest Dashboard → Real Device → App Automation</strong></li>
                    <li>Open the latest test session</li>
                    <li>You can see: ✅ Video recording, ✅ Device logs / network logs (depending on settings), ✅ Pass/fail + error details (<a href="https://www.lambdatestinternal.com/blog/how-to-automate-android-apps-using-appium/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>lambdatestinternal.com</a>)</li>
                </ol>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Optional: Use <strong>Appium Inspector</strong> with LambdaTest real devices</h4>
                <p style={{ fontSize: '14px', color: '#333' }}>If you want to <strong>find mobile element locators</strong> (buttons/text fields) on a cloud device, LambdaTest supports connecting <strong>Appium Inspector</strong> to their real devices. (<a href="https://www.lambdatest.com/support/docs/appium-inspector-integration/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>LambdaTest</a>)</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>One-line summary (for your website)</h4>
                <p style={{ fontSize: '14px', color: '#333' }}>✅ <strong>Windows can run Android Appium tests on LambdaTest real devices</strong> by (1) uploading an APK to get an <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>lt://</code> app URL, (2) pointing tests to <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>mobile-hub.lambdatest.com/wd/hub</code>, and (3) selecting device/OS in capabilities. (<a href="https://www.lambdatest.com/support/docs/migrate-appium-tests-from-browserstack-and-saucelabs/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>LambdaTest</a>)</p>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '8px' }}>If you tell me your stack (<strong>WebdriverIO + TypeScript</strong> or Java?), I'll paste a <strong>ready-to-copy config file</strong> tailored for LambdaTest with the exact fields in the right place.</p>
                    </div>
                    )}
                </div>
                </div>
                </div>
                )}
            </div>

            {/* Appium TypeScript + WebDriverIO — macOS Baby Steps (outer collapsible) */}
            <div style={{ marginBottom: '40px' }}>
                <div
                    style={{ ...sectionHeaderStyle, marginBottom: macOSBabyStepsOpen ? '4px' : '16px' }}
                    onClick={() => setMacOSBabyStepsOpen((prev) => !prev)}
                    role="button"
                    aria-expanded={macOSBabyStepsOpen}
                >
                    <h2 style={{ color: '#00416A', fontSize: '24px', margin: 0, fontWeight: 'bold' }}>
                        Appium TypeScript + WebDriverIO on macOS — Baby Steps
                    </h2>
                    <span style={{ fontSize: '20px', color: '#00416A' }}>{macOSBabyStepsOpen ? '▼' : '▶'}</span>
                </div>
                {macOSBabyStepsOpen && (
                <div style={{ ...sectionBodyStyle, marginBottom: '24px' }}>
                <p style={leftAlignStyles.paragraph}>
                    Written for beginners. No coding experience needed. Do each step in order. When you see a gray box with text, copy it exactly and paste it where the step says (usually in Terminal — the command-line window where you type commands). If something fails, go back one step and try again.
                </p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '16px', marginBottom: '8px' }}>
                    <strong>Note:</strong> On macOS, you can run <strong>both iOS and Android</strong> Appium tests. iOS requires <strong>Xcode</strong> and <strong>macOS</strong>, while Android requires the <strong>Android SDK + ADB</strong> (similar to Windows).
                </p>
                <div style={{ marginTop: '24px' }}>
                {/* Section 1: Android Emulator + Sauce Labs Demo App (macOS) */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSectionMacOS(1)}
                        role="button"
                        aria-expanded={openSectionMacOS === 1}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            Appium + TypeScript + WebdriverIO on macOS (Android Emulator + Sauce Labs Demo App)
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSectionMacOS === 1 ? '▼' : '▶'}</span>
                    </div>
                    {openSectionMacOS === 1 && (
                    <div style={sectionBodyStyle}>
                <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', paddingTop: '8px' }}>
                    This is a <strong>baby-steps</strong> guide for beginners. You will run tests on a <strong>fake Android phone (Emulator)</strong> using a <strong>sample app (Sauce Labs Demo App)</strong>.
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>What you will have at the end</h4>
                <ul style={leftAlignStyles.list}>
                    <li>✅ A running Android Emulator (virtual phone)</li>
                    <li>✅ The demo app installed on the emulator</li>
                    <li>✅ A WebdriverIO + TypeScript project</li>
                    <li>✅ 1 working Appium test you can run anytime</li>
                </ul>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 1: Install the basic tools (one time)</h4>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>1. Install Android Studio</h5>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Download and install <strong>Android Studio</strong></li>
                    <li>Open Android Studio once (let it finish setup)</li>
                </ol>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>2. Install Node.js</h5>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Download and install <strong>Node.js (LTS version)</strong></li>
                    <li>Confirm Node works: Open <strong>Terminal</strong> and run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>node -v</code> and <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm -v</code></li>
                </ol>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>3. Install Java (required for Android tools)</h5>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Install <strong>JDK 17</strong> (recommended)</li>
                    <li>Confirm it works: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>java -version</code></li>
                </ol>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 2: Create and start the Android Emulator (fake phone)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open <strong>Android Studio</strong></li>
                    <li>Go to <strong>Tools → Device Manager</strong></li>
                    <li>Click <strong>Create device</strong></li>
                    <li>Pick a device like <strong>Pixel 6</strong> → <strong>Next</strong></li>
                    <li>Choose Android version (example <strong>Android 13/14</strong>) → <strong>Download</strong> if needed → <strong>Next</strong></li>
                    <li>Click <strong>Finish</strong></li>
                    <li>In Device Manager, click <strong>Play ▶</strong> to start the emulator</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Wait until you see the Android home screen.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 3: Install Appium 2 (one time)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open <strong>Terminal</strong></li>
                    <li>Install Appium: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm i -g appium</code></li>
                    <li>Install the Android driver (UiAutomator2): <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver install uiautomator2</code></li>
                    <li>Confirm driver is installed: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver list --installed</code></li>
                </ol>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 4: Install the Sauce Labs Demo App on the Emulator</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>You need the <strong>demo app APK</strong> file on your Mac first.</p>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>1) Download the demo APK</h5>
                <ul style={leftAlignStyles.list}>
                    <li>Download the <strong>Sauce Labs demo Android APK</strong> (often called "My Demo App") to your Mac</li>
                    <li>Put it somewhere easy like: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>~/Downloads/MyDemoApp.apk</code></li>
                </ul>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>2) Install it to the emulator</h5>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open Terminal</li>
                    <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code> (You should see an emulator listed)</li>
                    <li>Install the APK: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb install -r ~/Downloads/MyDemoApp.apk</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Now the demo app will appear on the emulator screen like a normal app.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 5: Start the Appium Server (required every time you test)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open Terminal</li>
                    <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ Leave this terminal open (don't close it).</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 6: Create a WebdriverIO + TypeScript project</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open a <strong>new Terminal window</strong></li>
                    <li>Create a project folder: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>mkdir wdio-appium-ts &amp;&amp; cd wdio-appium-ts</code></li>
                    <li>Start the setup wizard: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm init -y</code> then <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio config</code></li>
                    <li>During the wizard choose: <strong>TypeScript</strong>: Yes, <strong>Framework</strong>: Mocha (easy), <strong>Service</strong>: Appium, <strong>Reporter</strong>: spec</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ After this, your project will have a <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> file.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 7: Add "capabilities" (settings for the fake phone + app)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Open <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code> and set the Android capability like this (example):</p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '13px', border: '1px solid #e0e0e0', marginBottom: '12px', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`capabilities: [
  {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Android Emulator",
    "appium:noReset": true,
    "appium:newCommandTimeout": 120
  }
],`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '8px' }}>If you want Appium to launch the demo app automatically, we can add <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appPackage</code> + <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appActivity</code> once you confirm them (easy to extract).</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 8: Run your first test</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Make sure: Emulator is running ✅, Appium server is running ✅</li>
                    <li>Run tests: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npx wdio run wdio.conf.ts</code></li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ If everything is correct, WebdriverIO will connect to the emulator and start automation.</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 9: Find buttons and fields (locators) using Appium Inspector (optional but recommended)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open <strong>Appium Inspector</strong> on macOS</li>
                    <li>Create a new session with: Host: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>127.0.0.1</code>, Port: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>4723</code>, Path: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>/</code></li>
                    <li>Use the same Android capabilities and click <strong>Start Session</strong></li>
                    <li>Click on elements inside Inspector to see: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>content-desc</code> (best), <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>resource-id</code> (great), <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>text</code> (ok), XPath (last option)</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>✅ This is how you "grab locators" for your tests.</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Quick troubleshooting (beginner-friendly)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>"adb not found"</strong> — Install Android Platform Tools or set PATH via Android Studio SDK Manager.</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>Emulator not showing in <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb devices</code></strong> — Restart adb: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb kill-server</code> then <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>adb start-server</code></p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>Appium session fails</strong> — Make sure UiAutomator2 driver is installed: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>appium driver list --installed</code></p>
                    </div>
                    )}
                </div>

                {/* Section 2: Real Device + Sauce Labs Demo App (macOS) */}
                <div>
                    <div
                        style={sectionHeaderStyle}
                        onClick={() => toggleSectionMacOS(2)}
                        role="button"
                        aria-expanded={openSectionMacOS === 2}
                    >
                        <h3 style={{ color: '#00416A', fontSize: '22px', margin: 0, fontWeight: 'bold' }}>
                            Appium (TypeScript) + WebdriverIO on macOS — Real Device + Sauce Labs Demo App (Baby Steps)
                        </h3>
                        <span style={{ fontSize: '18px', color: '#00416A' }}>{openSectionMacOS === 2 ? '▼' : '▶'}</span>
                    </div>
                    {openSectionMacOS === 2 && (
                    <div style={sectionBodyStyle}>
                <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px', paddingTop: '8px' }}>
                    This guide shows how to run your <strong>mobile Appium tests from a Mac</strong>, while Sauce Labs provides a <strong>real phone in the cloud</strong> (Android or iOS). You'll use a <strong>Sauce Labs demo app</strong> so you don't need your own app yet. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>What you need (simple checklist)</h4>
                <ul style={leftAlignStyles.list}>
                    <li>✅ A <strong>Mac</strong> with internet</li>
                    <li>✅ A <strong>Sauce Labs account</strong> (free trial works) + your <strong>Username</strong> and <strong>Access Key</strong> (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</li>
                    <li>✅ Node.js installed (for TypeScript + WebdriverIO)</li>
                    <li>✅ A demo app file (<strong>Android .apk</strong> or <strong>iOS .ipa</strong>) — Sauce provides demo apps (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</li>
                </ul>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic', marginTop: '8px' }}>Note: You don't need an emulator for Sauce real devices. Sauce runs the phone remotely. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 1) Get your Sauce Labs login keys</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Log in to Sauce Labs</li>
                    <li>Copy your: <strong>Username</strong> and <strong>Access Key</strong> (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</li>
                </ol>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 2) Download a Sauce Labs demo app</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Sauce Labs recommends using their <strong>Demo Apps</strong> if you don't have your own. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>Pick one:</strong></p>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Android Demo App</strong> → download the <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.apk</code></li>
                    <li><strong>iOS Demo App</strong> → download the <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.ipa</code> (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</li>
                </ul>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 3) Upload the demo app to Sauce "Mobile App Storage"</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>In Sauce Labs, open <strong>Mobile App Storage</strong></li>
                    <li>Upload the demo app file (<code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.apk</code> or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.ipa</code>)</li>
                    <li>After upload, note the app reference you'll use in your test: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>storage:&lt;file_id&gt;</code> <strong>OR</strong> <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>storage:filename=&lt;your-file-name&gt;.apk</code> (or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.ipa</code>) (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</li>
                </ol>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Sauce App Storage supports <strong>.apk/.aab/.ipa</strong> and is used for both virtual and real devices. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 4) Create your WebdriverIO + TypeScript project (one-time)</h4>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px' }}>
                    <li>Open <strong>Terminal</strong> on your Mac</li>
                    <li>Create a project folder:</li>
                </ol>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #e0e0e0', margin: '8px 0 12px 0', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`mkdir wdio-appium-sauce && cd wdio-appium-sauce`}</pre>
                </div>
                <ol style={{ fontSize: '14px', lineHeight: '1.8', color: '#333', paddingLeft: '24px', listStyle: 'none', counterReset: 'step' }}>
                    <li style={{ marginTop: '12px' }}><strong>3.</strong> Start setup:</li>
                </ol>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #e0e0e0', margin: '8px 0 12px 0', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`npm init -y`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>4.</strong> Install WebdriverIO + Sauce integration:</p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #e0e0e0', margin: '8px 0 12px 0', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`npm install --save-dev @wdio/cli @wdio/sauce-service typescript ts-node`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><strong>5.</strong> Run the WebdriverIO setup wizard:</p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #e0e0e0', margin: '8px 0 12px 0', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`npx wdio config`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Choose <strong>TypeScript</strong> when asked.</p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>WebdriverIO's <strong>Sauce Service</strong> is the standard integration for running WDIO tests on Sauce Labs (including Real Device Cloud). (<a href="https://webdriver.io/docs/sauce-service" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>webdriver.io</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 5) Add your Sauce credentials (safe way)</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Create a file named <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>.env</code> (example):</p>
                <ul style={leftAlignStyles.list}>
                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>SAUCE_USERNAME=your_username</code></li>
                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>SAUCE_ACCESS_KEY=your_access_key</code></li>
                </ul>
                <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>(Keep it private—don't post it publicly.)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 6) Tell WebdriverIO to run on Sauce real devices</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>In your <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>wdio.conf.ts</code>, make sure you have:</p>
                <ul style={leftAlignStyles.list}>
                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>services: ['sauce']</code></li>
                    <li><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>user</code> and <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>key</code> set (from environment variables)</li>
                    <li>Sauce region (optional; defaults to US). (<a href="https://v7.webdriver.io/docs/sauce-service" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>v7.webdriver.io</a>)</li>
                </ul>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Sauce's modern default endpoint for WDIO is the unified platform (US West). (<a href="https://v7.webdriver.io/docs/sauce-service" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>v7.webdriver.io</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 7) Choose ONE real device capability (Android or iOS)</h4>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Option A — Android real device (Sauce demo app from storage)</h5>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Use your uploaded app reference:</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}><code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>storage:&lt;file_id&gt;</code> or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>storage:filename=...apk</code> (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Example capability shape (high-level): platform: Android, automation: UiAutomator2, app: your Sauce storage reference, sauce job name/build (for reporting).</p>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '8px' }}>Sauce requires the <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>app</code> capability (storage id/filename or public URL) for native app tests on real devices. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>
                <h5 style={{ color: '#00416A', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>Option B — iOS real device (Sauce demo app from storage)</h5>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>Same idea: platform: iOS, automation: XCUITest, app: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>storage:&lt;file_id&gt;</code> or <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>storage:filename=...ipa</code> (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Step 8) Run your tests</h4>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '8px' }}>From your project folder:</p>
                <div style={{ backgroundColor: '#f8f9fa', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '14px', border: '1px solid #e0e0e0', margin: '8px 0 12px 0', overflowX: 'auto' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`npx wdio run wdio.conf.ts`}</pre>
                </div>
                <p style={{ fontSize: '14px', color: '#333', marginTop: '12px' }}>Sauce Labs will: reserve a <strong>real phone</strong>, install the demo app, run your test steps, and show results (video/logs) in your Sauce dashboard (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>

                <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '24px 0' }} />

                <h4 style={{ color: '#00416A', fontSize: '18px', marginBottom: '10px', marginTop: '20px', fontWeight: '600' }}>Quick "non-technical" summary</h4>
                <p style={{ fontSize: '14px', color: '#333' }}><strong>Download</strong> Sauce demo app → <strong>upload</strong> to Sauce App Storage → <strong>run</strong> WDIO tests from your Mac → Sauce runs them on a <strong>real device in the cloud</strong>. (<a href="https://docs.saucelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>docs.saucelabs.com</a>)</p>
                    </div>
                    )}
                </div>
                </div>
                </div>
                )}
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
                    href={link.APPIUM_WEBSITE} 
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
                    Appium Official Website
                </a>
                <a 
                    href={link.APPIUM_GITHUB} 
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
                    Appium GitHub
                </a>
                <a 
                    href="https://appium.io/docs/en/latest/" 
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
                    Appium Documentation
                </a>
                <a 
                    href="https://appium.io/docs/en/latest/guides/caps/" 
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
                    Desired Capabilities Guide
                </a>
            </div>

            <section style={{ marginTop: '40px' }}>
            </section>
        </div>
    )
}

export default Appium;
