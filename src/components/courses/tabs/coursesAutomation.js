import React from 'react';
import { Link } from 'react-router-dom';
import link from '../../../utilities/links.json';
import courseOutline from '../../../images/CourseOutline.png';
import { getImageSrc } from '../../../utils/getImageSrc';
const coursesAutomation = () => {
    return(
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
                    Automation Testing Course Outline
                </h1>
                <p style={{
                    fontSize: '20px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Master automation testing tools and frameworks to accelerate your QA career
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
                            Automation Testing Program
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
                                Our comprehensive Automation Testing program is designed to equip you with the skills needed to build robust, maintainable test automation frameworks for web applications, APIs, and mobile apps. Whether you're a beginner or looking to advance your QA career, this course covers industry-leading tools, modern frameworks, and cutting-edge AI integration for intelligent test automation.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                You'll master popular automation tools including <strong style={{ color: '#00416A' }}>Selenium WebDriver, Playwright, Cypress, WebDriverIO</strong> for web testing, <strong style={{ color: '#00416A' }}>REST Assured, Postman, SuperTest</strong> for API automation, and <strong style={{ color: '#00416A' }}>Appium</strong> for mobile testing. Our curriculum also includes <strong style={{ color: '#00416A' }}>TypeScript</strong> for type-safe automation code and integrates cutting-edge AI technologies including <strong style={{ color: '#00416A' }}>OpenAI GPT, Anthropic Claude, and Microsoft Copilot</strong> for AI-assisted test generation, intelligent debugging, and automated test maintenance.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our hands-on, project-based approach ensures you gain practical experience building enterprise-grade automation frameworks with Page Object Model (POM), Data-Driven Testing, CI/CD integration, and AI-powered test optimization. You'll complete portfolio-ready projects that demonstrate your mastery of modern test automation technologies and AI capabilities.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Join our Automation Testing program and take your QA career to the next level! Our comprehensive curriculum prepares you for roles as Automation Test Engineer, SDET (Software Development Engineer in Test), QA Automation Architect, and AI-Enhanced Test Automation Specialist.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ROI Section */}
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
                            Return on Investment (ROI) for Automation Testing
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
                                Test automation is one of the most in-demand and high-paying specializations in the QA field. With the rapid growth of agile and DevOps practices, skilled automation engineers are essential for organizations seeking to accelerate software delivery while maintaining quality.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our comprehensive Automation Testing program prepares you for immediate entry into high-paying roles with practical, hands-on experience building enterprise automation frameworks. Graduates typically see a <strong style={{ color: '#00416A' }}>250-400% return on investment</strong> within the first year of employment, with automation engineers earning significantly more than manual testers.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Whether you're looking to transition from manual testing, advance in your current QA role, or specialize in AI-enhanced test automation, this program provides the foundation for long-term success in the rapidly evolving field of test automation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Program Outline Curriculum Section */}
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
                            Automation Testing Program Curriculum
                        </h2>

                        {/* Visual Curriculum Diagram */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '40px',
                            borderRadius: '8px',
                            marginBottom: '40px',
                            border: '2px solid #00416A'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '30px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                Learning Path Overview
                            </h3>
                            
                            {/* Diagram Container */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                position: 'relative'
                            }}>
                                {/* Foundation Path */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        backgroundColor: '#e8f4f8',
                                        padding: '20px 30px',
                                        borderRadius: '8px',
                                        border: '2px solid #00416A',
                                        textAlign: 'center',
                                        minWidth: '200px',
                                        flex: '1',
                                        maxWidth: '250px'
                                    }}>
                                        <div style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#00416A',
                                            marginBottom: '8px'
                                        }}>Module 1</div>
                                        <div style={{
                                            fontSize: '16px',
                                            color: '#666'
                                        }}>Selenium & Fundamentals</div>
                                    </div>
                                    <div style={{
                                        fontSize: '24px',
                                        color: '#00416A',
                                        fontWeight: 'bold'
                                    }}>→</div>
                                    <div style={{
                                        backgroundColor: '#e8f4f8',
                                        padding: '20px 30px',
                                        borderRadius: '8px',
                                        border: '2px solid #00416A',
                                        textAlign: 'center',
                                        minWidth: '200px',
                                        flex: '1',
                                        maxWidth: '250px'
                                    }}>
                                        <div style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#00416A',
                                            marginBottom: '8px'
                                        }}>Module 2</div>
                                        <div style={{
                                            fontSize: '16px',
                                            color: '#666'
                                        }}>Playwright & Cypress</div>
                                    </div>
                                </div>

                                {/* Intermediate Path */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center'
                                }}>
                                    <div style={{
                                        backgroundColor: '#e8f4f8',
                                        padding: '20px 30px',
                                        borderRadius: '8px',
                                        border: '2px solid #00416A',
                                        textAlign: 'center',
                                        minWidth: '200px',
                                        flex: '1',
                                        maxWidth: '250px'
                                    }}>
                                        <div style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#00416A',
                                            marginBottom: '8px'
                                        }}>Module 3</div>
                                        <div style={{
                                            fontSize: '16px',
                                            color: '#666'
                                        }}>WebDriverIO & Advanced</div>
                                    </div>
                                    <div style={{
                                        fontSize: '24px',
                                        color: '#00416A',
                                        fontWeight: 'bold'
                                    }}>→</div>
                                    <div style={{
                                        backgroundColor: '#e8f4f8',
                                        padding: '20px 30px',
                                        borderRadius: '8px',
                                        border: '2px solid #00416A',
                                        textAlign: 'center',
                                        minWidth: '200px',
                                        flex: '1',
                                        maxWidth: '250px'
                                    }}>
                                        <div style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#00416A',
                                            marginBottom: '8px'
                                        }}>Module 4</div>
                                        <div style={{
                                            fontSize: '16px',
                                            color: '#666'
                                        }}>API Testing</div>
                                    </div>
                                </div>

                                {/* Advanced Path */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    marginTop: '10px'
                                }}>
                                    <div style={{
                                        backgroundColor: '#00416A',
                                        padding: '20px 30px',
                                        borderRadius: '8px',
                                        border: '2px solid #00416A',
                                        textAlign: 'center',
                                        minWidth: '200px',
                                        flex: '1',
                                        maxWidth: '250px',
                                        color: '#ffffff'
                                    }}>
                                        <div style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            marginBottom: '8px'
                                        }}>Module 5</div>
                                        <div style={{
                                            fontSize: '16px',
                                            opacity: '0.95'
                                        }}>Mobile Testing</div>
                                    </div>
                                    <div style={{
                                        fontSize: '24px',
                                        color: '#00416A',
                                        fontWeight: 'bold'
                                    }}>→</div>
                                    <div style={{
                                        backgroundColor: '#e8f4f8',
                                        padding: '20px 30px',
                                        borderRadius: '8px',
                                        border: '2px solid #00416A',
                                        textAlign: 'center',
                                        minWidth: '200px',
                                        flex: '1',
                                        maxWidth: '250px'
                                    }}>
                                        <div style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#00416A',
                                            marginBottom: '8px'
                                        }}>Module 6</div>
                                        <div style={{
                                            fontSize: '16px',
                                            color: '#666'
                                        }}>Framework & CI/CD</div>
                                    </div>
                                </div>

                                {/* AI Integration Path */}
                                <div style={{
                                    marginTop: '30px',
                                    padding: '20px',
                                    backgroundColor: '#fff9e6',
                                    borderRadius: '8px',
                                    border: '2px solid #ff9800'
                                }}>
                                    <h4 style={{
                                        color: '#ff9800',
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        marginBottom: '15px',
                                        textAlign: 'center'
                                    }}>
                                        🤖 AI Integration Throughout Learning Journey
                                    </h4>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                        gap: '15px',
                                        marginTop: '15px'
                                    }}>
                                        <div style={{
                                            backgroundColor: '#ffffff',
                                            padding: '15px',
                                            borderRadius: '6px',
                                            border: '1px solid #ff9800',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                color: '#ff9800',
                                                marginBottom: '5px'
                                            }}>Modules 1-2</div>
                                            <div style={{
                                                fontSize: '14px',
                                                color: '#666'
                                            }}>AI-Assisted Test Generation</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: '#ffffff',
                                            padding: '15px',
                                            borderRadius: '6px',
                                            border: '1px solid #ff9800',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                color: '#ff9800',
                                                marginBottom: '5px'
                                            }}>Module 3</div>
                                            <div style={{
                                                fontSize: '14px',
                                                color: '#666'
                                            }}>AI-Powered Test Maintenance</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: '#ffffff',
                                            padding: '15px',
                                            borderRadius: '6px',
                                            border: '1px solid #ff9800',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                color: '#ff9800',
                                                marginBottom: '5px'
                                            }}>Modules 4-5</div>
                                            <div style={{
                                                fontSize: '14px',
                                                color: '#666'
                                            }}>AI API & Mobile Testing</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: '#ffffff',
                                            padding: '15px',
                                            borderRadius: '6px',
                                            border: '1px solid #ff9800',
                                            textAlign: 'center'
                                        }}>
                                            <div style={{
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                color: '#ff9800',
                                                marginBottom: '5px'
                                            }}>Module 6</div>
                                            <div style={{
                                                fontSize: '14px',
                                                color: '#666'
                                            }}>AI Framework Optimization</div>
                                        </div>
                                    </div>
                                </div>

                                {/* ROI and Real-World Benefits Section */}
                                <div style={{
                                    marginTop: '30px',
                                    padding: '25px',
                                    backgroundColor: '#00416A',
                                    borderRadius: '8px',
                                    color: '#ffffff'
                                }}>
                                    <h4 style={{
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        marginBottom: '20px',
                                        textAlign: 'center'
                                    }}>
                                        Real-World Benefits & ROI
                                    </h4>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                        gap: '15px',
                                        marginTop: '20px'
                                    }}>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💰 High Earning Potential</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Automation engineers earn $70K-130K, with senior SDET roles reaching $140K-200K+</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💼 Freelance Opportunities</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Build automation frameworks for clients ($2,000-10,000+ per project)</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🚀 Career Growth</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Fast-track to SDET, QA Architect, or Test Automation Lead roles</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🌐 Remote Work</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>High demand for remote automation engineers and SDETs</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💡 AI Specialization</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Become an AI-enhanced test automation specialist with cutting-edge skills</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📈 Long-term ROI</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Potential lifetime earnings of $3M-6M+ in automation testing careers</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Legend */}
                                <div style={{
                                    marginTop: '20px',
                                    padding: '20px',
                                    backgroundColor: '#f0f7fa',
                                    borderRadius: '8px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '14px',
                                        color: '#666',
                                        lineHeight: '1.8'
                                    }}>
                                        <strong style={{ color: '#00416A' }}>Progressive Learning:</strong> Build from fundamentals to advanced automation frameworks, with AI integration and TypeScript throughout the entire curriculum
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 1: Selenium & Test Automation Fundamentals */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Module 1: Selenium & Test Automation Fundamentals
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>
                                        <Link 
                                            to="/courses/selenium-webdriver"
                                            style={{ 
                                                color: '#00416A', 
                                                textDecoration: 'underline',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#005a8a';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = '#00416A';
                                            }}
                                        >
                                            Selenium WebDriver
                                        </Link>:
                                    </strong> Setup, WebDriver architecture, browser automation, element location strategies
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Programming Fundamentals:</strong> JavaScript/TypeScript basics for automation, control structures, functions
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Web Element Interactions:</strong> Click, type, select, wait strategies, handling alerts and popups
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>TypeScript for Automation:</strong> Type-safe test code, interfaces, type definitions for WebDriver
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Frameworks:</strong> TestNG/Jest setup, test execution, assertions, reporting
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Build basic automation scripts, form automation, navigation tests
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Assisted Learning:</strong> Using GPT, Copilot, and Claude for test script generation, debugging, and optimization
                                </li>
                            </ul>
                            <div style={{
                                marginTop: '25px',
                                padding: '20px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    Learning Outcomes:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Set up and configure Selenium WebDriver with TypeScript
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Write type-safe automation scripts for web application testing
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Handle web elements, forms, and browser interactions effectively
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use AI tools to generate, debug, and optimize test automation code
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#e6f3ff',
                                borderRadius: '6px',
                                borderLeft: '4px solid #0066cc'
                            }}>
                                <h4 style={{
                                    color: '#0066cc',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    🤖 AI Topics Covered:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Test Generation:</strong> Using GPT, Claude, and Copilot to generate Selenium test scripts
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Debugging:</strong> Leveraging AI to identify and fix test automation issues
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Code Optimization:</strong> Using AI to improve test performance and maintainability
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#fff4e6',
                                borderRadius: '6px',
                                borderLeft: '4px solid #ff9800'
                            }}>
                                <h4 style={{
                                    color: '#ff9800',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    💰 Earning Opportunities:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Junior Automation Engineer:</strong> Entry-level positions ($60-85K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Test Script Development:</strong> Create automation scripts for clients ($50-100/hour)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Freelance Automation:</strong> Take on automation projects ($2,000-5,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 2: Playwright & Cypress */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Module 2: Playwright & Cypress - Modern Automation Tools
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Playwright Fundamentals:</strong> Setup, multi-browser support, auto-waiting, network interception
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Playwright with TypeScript:</strong> Type-safe Playwright code, Page Object Model, advanced patterns
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Cypress Framework:</strong> Setup, Cypress architecture, commands, custom commands, fixtures
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Advanced Features:</strong> Screenshots, videos, debugging, parallel execution, cross-browser testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Build comprehensive test suites with Playwright and Cypress
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Integration:</strong> Using AI to generate Playwright/Cypress tests, optimize test execution, and maintain test suites
                                </li>
                            </ul>
                            <div style={{
                                marginTop: '25px',
                                padding: '20px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    Learning Outcomes:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Master Playwright for modern, fast, and reliable browser automation
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Build comprehensive test suites with Cypress for end-to-end testing
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Write type-safe automation code using TypeScript with both frameworks
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI tools to enhance test creation and maintenance
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#e6f3ff',
                                borderRadius: '6px',
                                borderLeft: '4px solid #0066cc'
                            }}>
                                <h4 style={{
                                    color: '#0066cc',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    🤖 AI Topics Covered:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Test Generation:</strong> Generate Playwright and Cypress tests using GPT, Claude, and Copilot
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Test Maintenance:</strong> Use AI to update and refactor test code automatically
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#fff4e6',
                                borderRadius: '6px',
                                borderLeft: '4px solid #ff9800'
                            }}>
                                <h4 style={{
                                    color: '#ff9800',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    💰 Earning Opportunities:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Playwright/Cypress Specialist:</strong> Work as automation engineer ($70-110K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Framework Development:</strong> Build test frameworks ($3,000-8,000 per project)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Consulting:</strong> Provide automation consulting ($80-120/hour)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 3: WebDriverIO & Advanced Web Testing */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Module 3: WebDriverIO & Advanced Web Testing
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>WebDriverIO Fundamentals:</strong> Setup, configuration, WebDriverIO architecture, TypeScript integration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Page Object Model (POM):</strong> Implementing POM pattern, page classes, reusable components
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Data-Driven Testing:</strong> External data sources, CSV/JSON data, parameterized tests
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Advanced Patterns:</strong> Custom commands, service objects, test utilities, reporting
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Build enterprise-grade test frameworks with WebDriverIO
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Powered Maintenance:</strong> Using AI to maintain and update test frameworks, generate test data, optimize test execution
                                </li>
                            </ul>
                            <div style={{
                                marginTop: '25px',
                                padding: '20px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    Learning Outcomes:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Build scalable test frameworks using WebDriverIO with TypeScript
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Implement Page Object Model and advanced design patterns
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create data-driven and maintainable test suites
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI for intelligent test maintenance and optimization
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#e6f3ff',
                                borderRadius: '6px',
                                borderLeft: '4px solid #0066cc'
                            }}>
                                <h4 style={{
                                    color: '#0066cc',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    🤖 AI Topics Covered:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Test Maintenance:</strong> Automatically update and refactor test code using AI
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Test Data Generation:</strong> Generate test data using GPT and Claude
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#fff4e6',
                                borderRadius: '6px',
                                borderLeft: '4px solid #ff9800'
                            }}>
                                <h4 style={{
                                    color: '#ff9800',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    💰 Earning Opportunities:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Senior Automation Engineer:</strong> Work as senior automation engineer ($90-130K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Framework Architect:</strong> Design test frameworks ($5,000-15,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 4: API Testing & Automation */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Module 4: API Testing & Automation
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>REST API Fundamentals:</strong> HTTP methods, status codes, request/response handling, authentication
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>REST Assured:</strong> API testing with REST Assured, TypeScript integration, assertions, validations
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Postman & Newman:</strong> API testing, collections, automation, CI/CD integration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>SuperTest:</strong> Node.js API testing, Express.js testing, integration testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Test Frameworks:</strong> Building reusable API test frameworks, data-driven API testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Build comprehensive API test suites for REST and GraphQL APIs
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI API Testing:</strong> Using AI to generate API tests, validate responses, and optimize API test suites
                                </li>
                            </ul>
                            <div style={{
                                marginTop: '25px',
                                padding: '20px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    Learning Outcomes:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Build comprehensive API test suites using REST Assured, Postman, and SuperTest
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Implement type-safe API testing with TypeScript
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create reusable API test frameworks and integrate with CI/CD
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI for intelligent API test generation and validation
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#e6f3ff',
                                borderRadius: '6px',
                                borderLeft: '4px solid #0066cc'
                            }}>
                                <h4 style={{
                                    color: '#0066cc',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    🤖 AI Topics Covered:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI API Test Generation:</strong> Generate API tests using GPT, Claude, and Copilot
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Response Validation:</strong> Use AI to validate and analyze API responses
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#fff4e6',
                                borderRadius: '6px',
                                borderLeft: '4px solid #ff9800'
                            }}>
                                <h4 style={{
                                    color: '#ff9800',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    💰 Earning Opportunities:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>API Test Engineer:</strong> Specialize in API testing ($80-120K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>API Framework Development:</strong> Build API test frameworks ($4,000-12,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 5: Mobile Testing with Appium */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Module 5: Mobile Testing with Appium
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Appium Fundamentals:</strong> Setup, Appium architecture, mobile automation concepts
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>iOS & Android Testing:</strong> Native apps, hybrid apps, web apps on mobile devices
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>TypeScript with Appium:</strong> Type-safe mobile automation, Page Object Model for mobile
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Mobile-Specific Features:</strong> Gestures, device interactions, screenshots, video recording
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Build mobile test automation frameworks for iOS and Android
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Mobile Testing:</strong> Using AI to generate mobile tests, optimize test execution, and handle device-specific scenarios
                                </li>
                            </ul>
                            <div style={{
                                marginTop: '25px',
                                padding: '20px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    Learning Outcomes:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Set up and configure Appium for iOS and Android testing
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Build type-safe mobile automation frameworks with TypeScript
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Automate native, hybrid, and web mobile applications
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use AI to enhance mobile test automation and maintenance
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#e6f3ff',
                                borderRadius: '6px',
                                borderLeft: '4px solid #0066cc'
                            }}>
                                <h4 style={{
                                    color: '#0066cc',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    🤖 AI Topics Covered:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Mobile Test Generation:</strong> Generate mobile tests using AI tools
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Device Optimization:</strong> Use AI to optimize tests for different devices and OS versions
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#fff4e6',
                                borderRadius: '6px',
                                borderLeft: '4px solid #ff9800'
                            }}>
                                <h4 style={{
                                    color: '#ff9800',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    💰 Earning Opportunities:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Mobile Test Engineer:</strong> Specialize in mobile automation ($85-125K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Mobile Framework Development:</strong> Build mobile test frameworks ($5,000-15,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 6: Framework Development & CI/CD */}
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            marginBottom: '20px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Module 6: Framework Development & CI/CD Integration
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Enterprise Framework Design:</strong> Architecture patterns, scalability, maintainability, best practices
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>CI/CD Integration:</strong> Jenkins, GitHub Actions, GitLab CI, Azure DevOps, test execution in pipelines
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Reporting & Analytics:</strong> Allure, Extent Reports, custom reporting, dashboard creation
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Parallel Execution:</strong> Grid setup, cloud testing (Sauce Labs, BrowserStack), distributed testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Capstone Project:</strong> Build and deploy a complete, enterprise-grade automation framework
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Framework Optimization:</strong> Using AI to optimize framework performance, generate test strategies, and automate framework maintenance
                                </li>
                            </ul>
                            <div style={{
                                marginTop: '25px',
                                padding: '20px',
                                backgroundColor: '#e8f4f8',
                                borderRadius: '6px',
                                borderLeft: '4px solid #00416A'
                            }}>
                                <h4 style={{
                                    color: '#00416A',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    Learning Outcomes:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Design and build enterprise-grade test automation frameworks
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Integrate automation frameworks with CI/CD pipelines
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Implement comprehensive reporting and analytics solutions
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI for intelligent framework optimization and maintenance
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#e6f3ff',
                                borderRadius: '6px',
                                borderLeft: '4px solid #0066cc'
                            }}>
                                <h4 style={{
                                    color: '#0066cc',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    🤖 AI Topics Covered:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Framework Optimization:</strong> Use AI to optimize test execution, reduce flakiness, and improve framework performance
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Test Strategy:</strong> Generate comprehensive test strategies using GPT, Claude, and Copilot
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '20px',
                                padding: '20px',
                                backgroundColor: '#fff4e6',
                                borderRadius: '6px',
                                borderLeft: '4px solid #ff9800'
                            }}>
                                <h4 style={{
                                    color: '#ff9800',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '12px'
                                }}>
                                    💰 Earning Opportunities:
                                </h4>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '15px',
                                    color: '#333',
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>SDET / QA Architect:</strong> Work as SDET or QA Architect ($110-180K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Framework Consulting:</strong> Provide framework consulting ($100-200/hour)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Enterprise Framework Development:</strong> Build enterprise frameworks ($10,000-50,000+ per project)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Highlights Section */}
                <section style={{
                    marginBottom: '60px'
                }}>
                    <div style={{
                        backgroundColor: '#e8f4f8',
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
                            What You'll Learn
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '20px'
                        }}>
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '25px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold'
                                }}>
                                    Web Automation Tools
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Selenium WebDriver & TypeScript
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Playwright & TypeScript
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Cypress
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        WebDriverIO & TypeScript
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '25px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold'
                                }}>
                                    API & Mobile Testing
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        REST Assured
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Postman & API Testing
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Appium (Mobile)
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        API Automation Frameworks
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '25px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold'
                                }}>
                                    Framework Development
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Page Object Model (POM) & TypeScript
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Data-Driven Testing
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        CI/CD Integration
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        AI-Enhanced Test Automation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section style={{
                    textAlign: 'center',
                    marginBottom: '60px'
                }}>
                    <div style={{
                        backgroundColor: '#00416A',
                        color: '#ffffff',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                        <h2 style={{
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}>
                            Ready to Master Automation Testing?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            marginBottom: '30px',
                            opacity: '0.9'
                        }}>
                            Join our comprehensive Automation Testing program and build the skills you need for a successful QA career.
                        </p>
                        <a 
                            href="https://gitsics.com/enroll/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '15px 40px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                color: '#00416A',
                                backgroundColor: '#ffffff',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#f0f0f0';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#ffffff';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                            }}
                        >
                            Enroll Now
                        </a>
            </div>
                </section>
            </div>

            <div>
            </div>
            <section className='pt4'>
                </section>
        </div>
    );
}
export default coursesAutomation;
