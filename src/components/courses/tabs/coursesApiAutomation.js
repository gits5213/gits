import React from 'react';
import { Link } from 'react-router-dom';
import link from '../../../utilities/links.json';
import courseOutline from '../../../images/CourseOutline.png';
import { getImageSrc } from '../../../utils/getImageSrc';

const coursesApiAutomation = () => {
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
                    API Testing & Automation Course Outline
                </h1>
                <p style={{
                    fontSize: '20px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Master API testing and automation to accelerate your QA career
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
                            API Testing & Automation Program
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
                                Our comprehensive API Testing & Automation program is designed to equip you with the skills needed to test and automate REST and GraphQL APIs effectively. Whether you're a beginner or looking to advance your QA career, this course covers industry-leading tools, modern frameworks, and best practices for API testing and automation.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                You'll master popular API testing tools including <strong style={{ color: '#00416A' }}>Postman</strong> and <strong style={{ color: '#00416A' }}>ReadyAPI</strong> for manual and automated API testing, <strong style={{ color: '#00416A' }}>Browser DevTools Network Tab</strong> for API inspection and debugging, <strong style={{ color: '#00416A' }}>REST Assured</strong> for Java-based API automation, <strong style={{ color: '#00416A' }}>Newman</strong> for CI/CD integration, <strong style={{ color: '#00416A' }}>SuperTest</strong> for Node.js API testing, and <strong style={{ color: '#00416A' }}>Swagger</strong> for API documentation and contract testing. Our curriculum also includes performance testing for APIs and seamless CI/CD integration.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our hands-on, project-based approach ensures you gain practical experience building enterprise-grade API test suites with comprehensive coverage, automated regression tests, and performance testing. You'll complete portfolio-ready projects that demonstrate your mastery of modern API testing technologies.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Join our API Testing & Automation program and take your QA career to the next level! Our comprehensive curriculum prepares you for roles as API Test Engineer, API Automation Engineer, QA Automation Specialist, and Backend Testing Engineer.
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
                            Return on Investment (ROI) for API Testing & Automation
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
                                API testing and automation is one of the most in-demand specializations in the QA field. With the rapid growth of microservices architecture and API-first development, skilled API test engineers are essential for organizations seeking to ensure quality and reliability of their backend services.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our comprehensive API Testing & Automation program prepares you for immediate entry into high-paying roles with practical, hands-on experience building enterprise API test suites. Graduates typically see a <strong style={{ color: '#00416A' }}>200-350% return on investment</strong> within the first year of employment, with API automation engineers earning significantly more than manual testers.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Whether you're looking to transition from manual testing, advance in your current QA role, or specialize in API testing and automation, this program provides the foundation for long-term success in the rapidly evolving field of API quality assurance.
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
                            API Testing & Automation Program Curriculum
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
                                        }}>API Fundamentals</div>
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
                                        }}>Postman & ReadyAPI</div>
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
                                        }}>REST Assured Automation</div>
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
                                        }}>API Documentation & Contract Testing</div>
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
                                        }}>Performance Testing</div>
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
                                        }}>CI/CD Integration</div>
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
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>API automation engineers earn $70K-120K, with senior roles reaching $130K-180K+</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💼 Freelance Opportunities</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Build API test suites for clients ($2,000-8,000+ per project)</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🚀 Career Growth</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Fast-track to API Test Lead, QA Architect, or Backend Testing Specialist roles</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🌐 Remote Work</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>High demand for remote API test engineers and automation specialists</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📈 Long-term ROI</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Potential lifetime earnings of $2.5M-5M+ in API testing careers</div>
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
                                        <strong style={{ color: '#00416A' }}>Progressive Learning:</strong> Build from API fundamentals to advanced automation frameworks, with comprehensive coverage of REST, GraphQL, performance testing, and CI/CD integration
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 1: API Fundamentals */}
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
                                Module 1: API Fundamentals & Concepts
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>REST API Concepts:</strong> HTTP methods (GET, POST, PUT, DELETE, PATCH), status codes, request/response structure, headers, query parameters
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>GraphQL Fundamentals:</strong> Queries, mutations, subscriptions, schema definition, resolvers
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Authentication:</strong> API keys, OAuth 2.0, JWT tokens, Basic Auth, Bearer tokens
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>JSON/XML Data Formats:</strong> Understanding JSON structure, XML parsing, data validation
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Testing Principles:</strong> Test strategy, test case design, positive/negative testing, boundary value analysis
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Analyze real-world APIs, document API endpoints, create test scenarios
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
                                        Understand REST and GraphQL API architectures and concepts
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Master HTTP methods, status codes, and API authentication mechanisms
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Design comprehensive API test scenarios and test cases
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Work with JSON and XML data formats effectively
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
                                        <strong>Junior API Tester:</strong> Entry-level positions ($55-75K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>API Test Documentation:</strong> Create API test documentation ($40-60/hour)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 2: Postman & Manual API Testing */}
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
                                Module 2: Postman, ReadyAPI & Manual API Testing
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Postman Fundamentals:</strong> Setup, workspace management, collections, environments, variables
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Request Creation:</strong> Creating GET, POST, PUT, DELETE requests, headers, body, authentication
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Scripts & Assertions:</strong> Writing test scripts in JavaScript, pre-request scripts, test assertions, response validation
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Collection Runner:</strong> Running collections, data-driven testing with CSV/JSON, test reports
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>GraphQL Testing:</strong> Testing GraphQL queries and mutations in Postman
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Browser DevTools Network Tab:</strong> Inspecting API requests and responses, analyzing headers, payloads, timing, and status codes, capturing network traffic, debugging API calls, filtering and searching network requests
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Network Tab Advanced Features:</strong> Request/response preview, copying requests as cURL/fetch, throttling network conditions, analyzing performance metrics, monitoring WebSocket connections
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>ReadyAPI Fundamentals:</strong> Setup, project creation, REST and SOAP API testing, test cases, assertions, data-driven testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>ReadyAPI Advanced Features:</strong> Load testing, security testing, service virtualization, API mocking, CI/CD integration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Build comprehensive Postman collections and ReadyAPI projects for real-world APIs
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
                                        Master Postman and ReadyAPI for manual and automated API testing
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use Browser DevTools Network Tab to inspect, debug, and analyze API requests and responses
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create and organize API test collections with environments
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Write test scripts and assertions for API response validation
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Perform data-driven API testing with external data sources
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
                                        <strong>API Test Engineer:</strong> Work as API tester ($65-85K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Postman Collection Development:</strong> Create collections for clients ($1,500-4,000 per project)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>ReadyAPI Project Development:</strong> Create ReadyAPI test suites for clients ($2,000-5,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 3: REST Assured Automation */}
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
                                Module 3: REST Assured API Automation
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>REST Assured Setup:</strong> Maven/Gradle setup, REST Assured configuration, Java/TestNG integration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Request Building:</strong> GET, POST, PUT, DELETE requests, headers, query parameters, path parameters, request body
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Response Validation:</strong> Status code validation, response body validation, JSON path assertions, schema validation
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Authentication:</strong> API key authentication, OAuth 2.0, JWT token handling, Basic Auth
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Data-Driven Testing:</strong> External data sources, CSV/JSON data, parameterized tests
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Framework Design:</strong> Page Object Model for APIs, reusable components, test utilities
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Build comprehensive API automation framework with REST Assured
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
                                        Build robust API automation frameworks using REST Assured
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Implement comprehensive API test suites with validation and assertions
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create data-driven and maintainable API test frameworks
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Handle authentication and authorization in API tests
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
                                        <strong>API Automation Engineer:</strong> Work as automation engineer ($75-105K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Framework Development:</strong> Build API frameworks ($3,000-7,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 4: API Documentation & Contract Testing */}
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
                                Module 4: API Documentation & Contract Testing
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Swagger/OpenAPI:</strong> Understanding OpenAPI specification, Swagger UI, API documentation standards
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Contract Testing:</strong> API contract validation, schema validation, contract-first testing approach
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Mocking:</strong> Creating API mocks, Mockoon, WireMock, Postman mock servers
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Schema Validation:</strong> JSON Schema validation, XML Schema validation, response schema testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Versioning:</strong> Handling API versions, backward compatibility testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Create API documentation, implement contract testing, build mock servers
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
                                        Work with Swagger/OpenAPI for API documentation and testing
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Implement contract testing to ensure API compliance
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create and use API mocks for testing and development
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Validate API schemas and ensure API version compatibility
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
                                        <strong>API Documentation Specialist:</strong> Create API docs ($60-80/hour)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Contract Testing Consultant:</strong> Implement contract testing ($2,500-5,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 5: Performance Testing for APIs */}
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
                                Module 5: Performance Testing for APIs
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Performance Fundamentals:</strong> Response time, throughput, latency, concurrent users, load testing concepts
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Postman Performance Testing:</strong> Using Postman for basic performance testing, monitoring response times
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>JMeter for API Testing:</strong> Setting up JMeter for API load testing, creating test plans, analyzing results
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Metrics:</strong> Understanding key performance indicators, SLA monitoring, performance bottlenecks
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Load Testing Scenarios:</strong> Creating realistic load scenarios, stress testing, spike testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Design and execute API performance test suites, analyze and report results
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
                                        Understand API performance testing concepts and methodologies
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use Postman and JMeter for API performance and load testing
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Analyze performance metrics and identify bottlenecks
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Design and execute comprehensive API performance test scenarios
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
                                        <strong>API Performance Tester:</strong> Work as performance tester ($80-110K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Performance Testing Projects:</strong> Execute performance tests ($4,000-10,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 6: CI/CD Integration for API Tests */}
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
                                Module 6: CI/CD Integration for API Tests
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Newman CLI:</strong> Running Postman collections via command line, Newman configuration, reporting
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Jenkins Integration:</strong> Setting up Jenkins pipelines, running API tests in CI/CD, test reporting
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>GitHub Actions:</strong> Creating GitHub Actions workflows for API tests, automated test execution
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>GitLab CI/CD:</strong> Configuring GitLab pipelines for API test automation
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Reporting:</strong> Integrating test reports, Allure reports, HTML reports, dashboard integration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Set up complete CI/CD pipeline for API test automation
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
                                        Integrate API tests into CI/CD pipelines using Newman, Jenkins, GitHub Actions
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Automate API test execution in continuous integration environments
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Configure test reporting and dashboard integration
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Build end-to-end CI/CD workflows for API test automation
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
                                        <strong>CI/CD Automation Engineer:</strong> Work as DevOps/QA engineer ($85-120K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Pipeline Setup:</strong> Configure CI/CD pipelines ($3,500-8,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tools & Technologies Section */}
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
                            Tools & Technologies
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '20px',
                            marginTop: '30px'
                        }}>
                            {['Postman', 'ReadyAPI', 'DevTools Network', 'REST Assured', 'Newman', 'Swagger', 'JSON/XML', 'JMeter', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'SuperTest'].map((tool) => (
                                <div key={tool} style={{
                                    backgroundColor: '#ffffff',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    border: '2px solid #00416A',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <div style={{
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: '#00416A'
                                    }}>
                                        {tool}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hands-On Projects Section */}
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
                            Hands-On Projects
                        </h2>
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '30px',
                            borderRadius: '8px',
                            border: '2px solid #00416A',
                            lineHeight: '1.8'
                        }}>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A', fontSize: '20px' }}>•</span>
                                    Complete API test suite for REST and GraphQL APIs
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A', fontSize: '20px' }}>•</span>
                                    Automated API regression tests with REST Assured
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A', fontSize: '20px' }}>•</span>
                                    API performance tests and load testing scenarios
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A', fontSize: '20px' }}>•</span>
                                    CI/CD pipeline setup for automated API test execution
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A', fontSize: '20px' }}>•</span>
                                    API documentation and contract testing implementation
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Duration Section */}
                <section style={{
                    marginBottom: '60px'
                }}>
                    <div style={{
                        backgroundColor: '#00416A',
                        padding: '40px',
                        borderRadius: '8px',
                        color: '#ffffff',
                        textAlign: 'center'
                    }}>
                        <h2 style={{
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}>
                            Duration: 6 weeks
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            opacity: '0.9'
                        }}>
                            Comprehensive training program with hands-on projects and real-world scenarios
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{
                    marginBottom: '60px',
                    textAlign: 'center'
                }}>
                    <a
                        href={link.enrollNow}
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
                </section>
            </div>

            <div>
            </div>
            <section className='pt4'>
            </section>
        </div>
    );
}

export default coursesApiAutomation;
