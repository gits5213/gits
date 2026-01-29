import React from 'react';
import link from '../../../utilities/links.json';
import APPIUM_LOGO from '../../../images/tabs/appiumLogo.png';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const Appium = () => {
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

            {/* Getting Started Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Getting Started: Creating Your First Test
                </h2>
                <div style={{
                    backgroundColor: '#f8f9fa',
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
                        Step 1: Start Appium Server
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Launch the Appium server before running your tests.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Start Appium server
appium

# Or with specific port
appium -p 4723

# With debug logs
appium --log-level debug`}</pre>
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
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
                        Step 2: Configure Desired Capabilities
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Desired capabilities tell Appium about the device and app you want to test.
                    </p>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><strong>platformName:</strong> "Android" or "iOS"</li>
                        <li><strong>platformVersion:</strong> Device OS version (e.g., "11.0", "15.0")</li>
                        <li><strong>deviceName:</strong> Device name or AVD name</li>
                        <li><strong>app:</strong> Path to your app file (.apk for Android, .app or .ipa for iOS)</li>
                        <li><strong>appPackage:</strong> Android app package name (e.g., "com.example.myapp")</li>
                        <li><strong>appActivity:</strong> Android main activity (e.g., "com.example.myapp.MainActivity")</li>
                        <li><strong>bundleId:</strong> iOS bundle identifier (e.g., "com.example.myapp")</li>
                        <li><strong>automationName:</strong> "UiAutomator2" for Android, "XCUITest" for iOS</li>
                    </ul>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
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
                        Step 3: Finding Device and App Information
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Use these commands to find the information needed for desired capabilities.
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Android: List AVDs
emulator -list-avds

# Android: Get device info
adb devices
adb shell getprop ro.build.version.release
adb shell getprop ro.product.model

# Android: Get app package and activity
aapt dump badging app.apk | grep package
aapt dump badging app.apk | grep activity

# iOS: List simulators
xcrun simctl list devices

# iOS: Get bundle ID (from Xcode or Info.plist)
/usr/libexec/PlistBuddy -c "Print CFBundleIdentifier" app.app/Info.plist`}</pre>
                    </div>
                </div>
            </div>

            {/* Examples Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Android Example (Windows) */}
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
                        Example: Android Test on Windows
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            JavaScript/WebDriverIO Example
                        </h5>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '12px',
                            border: '1px solid #e0e0e0',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  platformVersion: '11.0',
  deviceName: 'Pixel_4_API_30',
  app: 'C:\\\\path\\\\to\\\\app.apk',
  appPackage: 'com.example.myapp',
  appActivity: 'com.example.myapp.MainActivity',
  automationName: 'UiAutomator2'
};

(async () => {
  const driver = await remote({
    hostname: 'localhost',
    port: 4723,
    path: '/',
    capabilities
  });

  try {
    const element = await driver.$('~loginButton');
    await element.click();
    console.log('Test passed!');
  } finally {
    await driver.deleteSession();
  }
})();`}</pre>
                        </div>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Python Example
                        </h5>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '12px',
                            border: '1px solid #e0e0e0',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`from appium import webdriver

capabilities = {
    'platformName': 'Android',
    'platformVersion': '11.0',
    'deviceName': 'Pixel_4_API_30',
    'app': 'C:\\\\path\\\\to\\\\app.apk',
    'appPackage': 'com.example.myapp',
    'appActivity': 'com.example.myapp.MainActivity',
    'automationName': 'UiAutomator2'
}

driver = webdriver.Remote('http://localhost:4723', capabilities)

try:
    element = driver.find_element('accessibility id', 'loginButton')
    element.click()
    print('Test passed!')
finally:
    driver.quit()`}</pre>
                        </div>
                    </div>
                </div>

                {/* iOS Example (Mac) */}
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
                        Example: iOS Test on Mac
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            JavaScript/WebDriverIO Example
                        </h5>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '12px',
                            border: '1px solid #e0e0e0',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'iOS',
  platformVersion: '15.0',
  deviceName: 'iPhone 13',
  app: '/path/to/app.app',
  bundleId: 'com.example.myapp',
  automationName: 'XCUITest'
};

(async () => {
  const driver = await remote({
    hostname: 'localhost',
    port: 4723,
    path: '/',
    capabilities
  });

  try {
    const element = await driver.$('~loginButton');
    await element.click();
    console.log('Test passed!');
  } finally {
    await driver.deleteSession();
  }
})();`}</pre>
                        </div>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Python Example
                        </h5>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '12px',
                            border: '1px solid #e0e0e0',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`from appium import webdriver
from appium.options.ios import XCUITestOptions

capabilities = {
    'platformName': 'iOS',
    'platformVersion': '15.0',
    'deviceName': 'iPhone 13',
    'app': '/path/to/app.app',
    'bundleId': 'com.example.myapp',
    'automationName': 'XCUITest'
}

options = XCUITestOptions().load_capabilities(capabilities)
driver = webdriver.Remote('http://localhost:4723', options=options)

try:
    element = driver.find_element('accessibility id', 'loginButton')
    element.click()
    print('Test passed!')
finally:
    driver.quit()`}</pre>
                        </div>
                    </div>
                </div>
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
