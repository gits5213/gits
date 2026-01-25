import React from 'react';
import { Link } from 'react-router-dom';

const SeleniumWebDriver = () => {
    return (
        <div className='page-tab-body' style={{ height: 'auto', minHeight: 'auto', paddingBottom: '100px', marginBottom: '40px' }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                color: '#ffffff',
                padding: '60px 20px',
                textAlign: 'center',
                marginBottom: '40px'
            }}>
                <h1 style={{ 
                    fontSize: '48px', 
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    Selenium WebDriver - Complete Course Outline
                </h1>
                <p style={{
                    fontSize: '20px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Master Selenium WebDriver from setup to advanced automation techniques
                </p>
            </div>

            {/* Main Content Container */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px'
            }}>
                {/* Introduction Section */}
                <section style={{
                    marginBottom: '60px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '30px',
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}>
                            Selenium WebDriver Program
                        </h2>
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            border: '2px solid #00416A',
                            lineHeight: '1.8'
                        }}>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Selenium WebDriver is the industry-standard tool for web automation testing. This comprehensive course covers everything from initial setup to advanced automation techniques, providing you with the skills needed to build robust, maintainable test automation frameworks.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                You'll learn <strong style={{ color: '#00416A' }}>WebDriver architecture</strong>, <strong style={{ color: '#00416A' }}>browser automation</strong>, <strong style={{ color: '#00416A' }}>element location strategies</strong>, and advanced techniques for handling dynamic content, frames, and complex web applications.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                This course is part of the <Link to="/courses/automation" style={{ color: '#00416A', textDecoration: 'underline' }}>Frontend (UI) Test Automation Program</Link> and provides the foundation for mastering web automation testing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Detailed Course Outline */}
                <section style={{
                    marginBottom: '60px'
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '40px',
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}>
                            Selenium WebDriver Detailed Course Outline
                        </h2>

                        {/* Section 1: Setup */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '30px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                1. Selenium WebDriver Setup
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Installation & Configuration:</strong> Installing Selenium WebDriver, setting up development environment, configuring IDE (VS Code, IntelliJ, Eclipse)
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Browser Drivers:</strong> ChromeDriver, GeckoDriver (Firefox), EdgeDriver, SafariDriver setup and configuration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>WebDriverManager:</strong> Automatic driver management, driver version management, driver path configuration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Project Setup:</strong> Creating Maven/Gradle projects, adding Selenium dependencies, project structure best practices
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>TypeScript/JavaScript Setup:</strong> npm initialization, installing @types/selenium-webdriver, TypeScript configuration for WebDriver
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>First WebDriver Script:</strong> Writing your first automation script, basic browser launch, script execution
                                </li>
                            </ul>
                        </div>

                        {/* Section 2: WebDriver Architecture */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '30px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                2. WebDriver Architecture
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>WebDriver Interface:</strong> Understanding the WebDriver interface, driver implementations, browser-specific drivers
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>JSON Wire Protocol:</strong> Communication protocol between WebDriver and browsers, HTTP-based communication
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>W3C WebDriver Protocol:</strong> Standard WebDriver protocol, modern browser support, protocol commands
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Driver Architecture:</strong> ChromeDriver architecture, GeckoDriver architecture, driver-browser communication
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Remote WebDriver:</strong> Selenium Grid setup, remote execution, distributed testing architecture
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>WebDriver Lifecycle:</strong> Driver initialization, session management, driver cleanup and teardown
                                </li>
                            </ul>
                        </div>

                        {/* Section 3: Browser Automation */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '30px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                3. Browser Automation
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Browser Launch:</strong> Launching different browsers (Chrome, Firefox, Edge, Safari), browser options configuration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Browser Options:</strong> ChromeOptions, FirefoxOptions, EdgeOptions, setting preferences and arguments
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Browser Navigation:</strong> get(), navigate().to(), navigate().back(), navigate().forward(), navigate().refresh()
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Window Management:</strong> getWindowHandle(), getWindowHandles(), switchTo().window(), window sizing and positioning
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Browser Information:</strong> getTitle(), getCurrentUrl(), getPageSource(), browser capabilities
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Headless Mode:</strong> Running browsers in headless mode, headless Chrome, headless Firefox, CI/CD integration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Browser Profiles:</strong> Using existing browser profiles, profile preferences, user data directories
                                </li>
                            </ul>
                        </div>

                        {/* Section 4: Element Location Strategies */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '30px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                4. Element Location Strategies
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Locator Types:</strong> ID, Name, ClassName, TagName, LinkText, PartialLinkText, CSS Selector, XPath
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>findElement() vs findElements():</strong> Finding single elements, finding multiple elements, handling NoSuchElementException
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>CSS Selectors:</strong> Basic CSS selectors, attribute selectors, pseudo-classes, complex CSS selector strategies
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>XPath Strategies:</strong> Absolute XPath, relative XPath, XPath axes (parent, child, sibling), XPath functions
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Best Practices:</strong> Locator priority (ID &gt; Name &gt; CSS &gt; XPath), stable locators, avoiding brittle selectors
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Dynamic Elements:</strong> Handling dynamic IDs, waiting for elements, locating elements with changing attributes
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Element Identification Tools:</strong> Browser DevTools, SelectorsHub, ChroPath, element inspection techniques
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Relative Locators:</strong> above(), below(), toLeftOf(), toRightOf(), near() - modern locator strategies
                                </li>
                            </ul>
                        </div>

                        {/* Learning Outcomes */}
                        <div style={{
                            backgroundColor: '#e8f4f8',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '30px',
                            borderLeft: '4px solid #00416A'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Learning Outcomes
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                fontSize: '16px',
                                color: '#333',
                                lineHeight: '1.8'
                            }}>
                                <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                    Set up and configure Selenium WebDriver in your development environment
                                </li>
                                <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                    Understand WebDriver architecture and browser communication protocols
                                </li>
                                <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                    Automate browser actions including navigation, window management, and browser options
                                </li>
                                <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                    Master all element location strategies including CSS selectors and XPath
                                </li>
                                <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                    Create stable, maintainable locators following best practices
                                </li>
                            </ul>
                        </div>

                        {/* Back to Course Link */}
                        <div style={{
                            textAlign: 'center',
                            marginTop: '40px'
                        }}>
                            <Link 
                                to="/courses/automation"
                                style={{
                                    display: 'inline-block',
                                    padding: '15px 40px',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: '#ffffff',
                                    backgroundColor: '#00416A',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease'
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
                                ← Back to Automation Course
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SeleniumWebDriver;
