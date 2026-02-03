import React, { useState } from 'react';
import link from '../../../utilities/links.json';
import { leftAlignStyles } from '../../../utils/globalStyles';
import { UpArrow } from '../../shared';

const ApiTest = () => {
    const [isFundamentalsExpanded, setIsFundamentalsExpanded] = useState(true);
    const [isUserStoryExpanded, setIsUserStoryExpanded] = useState(true);
    const [isManualTestCaseExpanded, setIsManualTestCaseExpanded] = useState(true);
    const [isGettingStartedExpanded, setIsGettingStartedExpanded] = useState(true);
    const [isStatusCodesExpanded, setIsStatusCodesExpanded] = useState(true);
    const [isVerifyExpanded, setIsVerifyExpanded] = useState(true);
    const [isPostmanIntroExpanded, setIsPostmanIntroExpanded] = useState(true);
    const [isFirstRequestExpanded, setIsFirstRequestExpanded] = useState(true);

    return(
        <>
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
            <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #00416A 0%, #005a8a 50%, #006ba8 100%)',
                color: '#ffffff',
                padding: '80px 40px',
                textAlign: 'left',
                borderRadius: '16px',
                marginBottom: '48px',
                boxShadow: '0 8px 32px rgba(0, 65, 106, 0.3)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ 
                    position: 'absolute', 
                    top: '-50%', 
                    right: '-10%', 
                    width: '400px', 
                    height: '400px', 
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}></div>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                        <h1 style={{
                            fontSize: 'clamp(36px, 5vw, 56px)',
                            marginBottom: '16px',
                            fontWeight: '800',
                            letterSpacing: '-0.02em',
                            textShadow: '0 2px 20px rgba(0,0,0,0.2)',
                            lineHeight: '1.2'
                        }}>
                            API Testing Guide
                        </h1>
                        <p style={{
                            fontSize: 'clamp(18px, 2.5vw, 22px)',
                            opacity: '0.95',
                            fontWeight: '300',
                            lineHeight: '1.6',
                            maxWidth: '700px'
                        }}>
                            Comprehensive guide to API development, testing, and best practices
                        </p>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                        <UpArrow 
                            size={24} 
                            color="#ffffff" 
                            title="Back to top"
                            style={{ 
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                padding: '12px',
                                marginLeft: '0',
                                backdropFilter: 'blur(10px)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* API Testing Fundamentals Section */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '32px',
                    borderRadius: '16px',
                    marginBottom: '32px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                    <div
                        onClick={() => setIsFundamentalsExpanded(!isFundamentalsExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: isFundamentalsExpanded ? '20px' : '0',
                            borderBottom: isFundamentalsExpanded ? '3px solid #667eea' : 'none',
                            transition: 'all 0.3s ease',
                            marginBottom: isFundamentalsExpanded ? '24px' : '0'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '0.8';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '1';
                        }}
                    >
                        <h2 id="api-testing-fundamentals" style={{
                            color: '#1e293b',
                            fontSize: '28px',
                            marginBottom: 0,
                            fontWeight: '700',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.3'
                        }}>
                            API Testing Fundamentals
                        </h2>
                        <span style={{
                            fontSize: '28px',
                            color: '#667eea',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px',
                            backgroundColor: isFundamentalsExpanded ? '#eef2ff' : '#f1f5f9'
                        }}>
                            {isFundamentalsExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isFundamentalsExpanded && (
                        <div style={{ marginTop: '24px', animation: 'fadeIn 0.3s ease' }}>
                            {/* What is API from a testing standpoint */}
                            <div style={{ marginBottom: '30px' }}>
                                    <h3 id="what-is-api" style={{
                                    color: '#1e293b',
                                    fontSize: '24px',
                                    marginBottom: '16px',
                                    fontWeight: '700',
                                    textAlign: 'left',
                                    letterSpacing: '-0.01em',
                                    lineHeight: '1.4'
                                }}>
                                    What is API from a Testing Standpoint?
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    From a testing perspective, an <strong>API (Application Programming Interface)</strong> is a set of protocols, routines, and tools that allows different software applications to communicate with each other. APIs define how software components should interact, specifying the methods, data formats, and rules for exchanging information.
                                </p>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    In testing, APIs are tested to ensure:
                                </p>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0',
                                    marginTop: '10px',
                                    marginBottom: '16px',
                                    overflowX: 'auto'
                                }}>
                                    <table style={{
                                        width: '100%',
                                        borderCollapse: 'collapse',
                                        fontSize: '14px',
                                        textAlign: 'left'
                                    }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Aspect</th>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Data exchange</td>
                                                <td style={{ padding: '12px' }}>Correct data exchange between systems</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Request/response</td>
                                                <td style={{ padding: '12px' }}>Proper request/response handling</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Error handling</td>
                                                <td style={{ padding: '12px' }}>Error handling and edge cases</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Performance</td>
                                                <td style={{ padding: '12px' }}>Performance and reliability</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Security</td>
                                                <td style={{ padding: '12px' }}>Security and authentication</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Compliance</td>
                                                <td style={{ padding: '12px' }}>Compliance with API specifications</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Purpose of API Testing */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 id="purpose-of-api-testing" style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    What is the Purpose of API Testing?
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    API testing serves several critical purposes in software development:
                                </p>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0',
                                    marginTop: '10px',
                                    marginBottom: '16px',
                                    overflowX: 'auto'
                                }}>
                                    <table style={{
                                        width: '100%',
                                        borderCollapse: 'collapse',
                                        fontSize: '14px',
                                        textAlign: 'left'
                                    }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Purpose</th>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Functional Validation</td>
                                                <td style={{ padding: '12px' }}>Verify that APIs perform their intended functions correctly</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Integration Testing</td>
                                                <td style={{ padding: '12px' }}>Ensure different systems and services communicate properly</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Data Integrity</td>
                                                <td style={{ padding: '12px' }}>Validate that data is correctly sent, received, and processed</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Error Handling</td>
                                                <td style={{ padding: '12px' }}>Test how APIs handle invalid inputs, errors, and edge cases</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Performance Testing</td>
                                                <td style={{ padding: '12px' }}>Assess response times, throughput, and scalability</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Security Testing</td>
                                                <td style={{ padding: '12px' }}>Identify vulnerabilities, test authentication, and authorization</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Contract Testing</td>
                                                <td style={{ padding: '12px' }}>Verify APIs meet their specifications and contracts</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Regression Testing</td>
                                                <td style={{ padding: '12px' }}>Ensure new changes don't break existing functionality</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Why we need API Testing */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Why We Need API Testing
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    API testing is essential for several reasons:
                                </p>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0',
                                    marginTop: '10px',
                                    marginBottom: '16px',
                                    overflowX: 'auto'
                                }}>
                                    <table style={{
                                        width: '100%',
                                        borderCollapse: 'collapse',
                                        fontSize: '14px',
                                        textAlign: 'left'
                                    }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Reason</th>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Early Detection of Issues</td>
                                                <td style={{ padding: '12px' }}>Catch bugs before they reach production, reducing costs and time</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Faster Testing</td>
                                                <td style={{ padding: '12px' }}>API tests run faster than UI tests, enabling quicker feedback cycles</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Independent of UI</td>
                                                <td style={{ padding: '12px' }}>Test backend logic without waiting for frontend development</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Better Coverage</td>
                                                <td style={{ padding: '12px' }}>Test business logic, data validation, and integration points comprehensively</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Cost-Effective</td>
                                                <td style={{ padding: '12px' }}>Identify and fix issues early in the development lifecycle</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>CI/CD Integration</td>
                                                <td style={{ padding: '12px' }}>Automate testing in continuous integration pipelines</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Microservices Architecture</td>
                                                <td style={{ padding: '12px' }}>Essential for testing service-to-service communication</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Third-Party Integration</td>
                                                <td style={{ padding: '12px' }}>Validate external API integrations work correctly</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Documentation</td>
                                                <td style={{ padding: '12px' }}>API tests serve as living documentation of API behavior</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Risk Mitigation</td>
                                                <td style={{ padding: '12px' }}>Reduce the risk of production failures and security breaches</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Types of API Testing */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 id="types-of-api-testing" style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Different Types of API Testing - Detailed Explanation
                                </h3>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0',
                                    marginBottom: '25px',
                                    overflowX: 'auto'
                                }}>
                                    <table style={{
                                        width: '100%',
                                        borderCollapse: 'collapse',
                                        fontSize: '14px',
                                        textAlign: 'left'
                                    }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Type</th>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Functional Testing</td>
                                                <td style={{ padding: '12px' }}>Validates APIs perform intended functions; CRUD, request/response, business logic</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Integration Testing</td>
                                                <td style={{ padding: '12px' }}>Tests how APIs interact with other APIs, databases, and external services</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Load Testing</td>
                                                <td style={{ padding: '12px' }}>Evaluates API performance under expected load; response time, throughput</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Stress Testing</td>
                                                <td style={{ padding: '12px' }}>Tests API behavior under extreme load; breaking points, recovery</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Security Testing</td>
                                                <td style={{ padding: '12px' }}>Identifies vulnerabilities; auth, SQL injection, XSS, encryption</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Validation Testing</td>
                                                <td style={{ padding: '12px' }}>Verifies behavior, efficiency, reliability; data, schema, response time</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Error Testing</td>
                                                <td style={{ padding: '12px' }}>Tests how APIs handle invalid inputs, errors, and edge cases</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Contract Testing</td>
                                                <td style={{ padding: '12px' }}>Verifies APIs meet their specifications and consumer-provider contracts</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Reliability Testing</td>
                                                <td style={{ padding: '12px' }}>Tests API stability over time; consistency, failure recovery</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="functional-testing" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        1. Functional Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Validates that APIs perform their intended functions correctly according to specifications.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Testing all CRUD operations (Create, Read, Update, Delete)</li>
                                        <li>Validating request/response formats</li>
                                        <li>Testing business logic and workflows</li>
                                        <li>Verifying data transformations</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: Testing User Management API

GET /api/users/1
Expected: Returns user with id=1
Response: 200 OK
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}

POST /api/users
Body: {"name": "Jane Doe", "email": "jane@example.com"}
Expected: Creates new user, returns 201 Created
Response: 201 Created
{
  "id": 2,
  "name": "Jane Doe",
  "email": "jane@example.com"
}

PUT /api/users/2
Body: {"name": "Jane Smith", "email": "jane@example.com"}
Expected: Updates user, returns 200 OK

DELETE /api/users/2
Expected: Deletes user, returns 204 No Content`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="integration-testing" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        2. Integration Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Tests how APIs interact with other APIs, databases, and external services.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>End-to-end workflow testing</li>
                                        <li>Database integration validation</li>
                                        <li>Third-party API integration</li>
                                        <li>Service-to-service communication</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: E-commerce Order Processing Flow

Step 1: Create Order
POST /api/orders
Body: {"userId": 1, "items": [{"productId": 101, "quantity": 2}]}
Response: 201 Created
{
  "orderId": 1001,
  "status": "pending",
  "total": 199.98
}

Step 2: Payment Service Integration
POST /api/payments
Body: {"orderId": 1001, "amount": 199.98, "cardToken": "tok_123"}
Response: 200 OK
{
  "paymentId": "pay_456",
  "status": "succeeded"
}

Step 3: Inventory Service Update
PUT /api/inventory/products/101
Body: {"quantity": -2}
Response: 200 OK

Step 4: Shipping Service Integration
POST /api/shipping
Body: {"orderId": 1001, "address": "123 Main St"}
Response: 201 Created
{
  "trackingNumber": "TRK789",
  "estimatedDelivery": "2024-02-10"
}

Step 5: Verify Order Status Updated
GET /api/orders/1001
Expected: Order status changed to "confirmed"
Response: 200 OK
{
  "orderId": 1001,
  "status": "confirmed",
  "paymentId": "pay_456",
  "trackingNumber": "TRK789"
}`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#1e293b',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        3. Load Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Evaluates API performance under expected load conditions.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Testing with normal expected traffic</li>
                                        <li>Response time validation</li>
                                        <li>Throughput measurement</li>
                                        <li>Resource utilization monitoring</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: Load Test Scenario

Test Configuration:
- Concurrent Users: 100
- Duration: 5 minutes
- Ramp-up: 30 seconds
- Target Endpoint: GET /api/products

Expected Results:
- Average Response Time: < 200ms
- 95th Percentile: < 500ms
- Throughput: > 500 requests/second
- Error Rate: < 0.1%

Actual Results:
- Average Response Time: 185ms ✓
- 95th Percentile: 420ms ✓
- Throughput: 520 requests/second ✓
- Error Rate: 0.05% ✓
- CPU Usage: 65%
- Memory Usage: 2.1GB

Test Script (JMeter/Postman):
1. Create 100 virtual users
2. Each user sends GET /api/products every 2 seconds
3. Monitor response times and error rates
4. Generate performance report`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="stress-testing" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        4. Stress Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Tests API behavior under extreme load conditions beyond normal capacity.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Finding breaking points</li>
                                        <li>Testing system recovery</li>
                                        <li>Identifying bottlenecks</li>
                                        <li>Validating error handling under stress</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: Stress Test Scenario

Test Configuration:
- Start with 50 concurrent users
- Gradually increase to 1000 users
- Target Endpoint: POST /api/orders
- Duration: Until system breaks

Test Results:
Users    Response Time    Error Rate    Status
50       180ms           0%            ✓ Normal
200      450ms           0.2%          ✓ Acceptable
500      1200ms          2.5%          ⚠ Degraded
800      3500ms          15%           ⚠ High Latency
1000     Timeout          45%          ✗ System Failure

Breaking Point: ~850 concurrent users
Bottleneck Identified: Database connection pool exhausted
Recovery Time: 2 minutes after load reduction

Expected Behavior:
- API should return 503 Service Unavailable
- Error messages should be clear
- System should recover gracefully
- No data corruption occurred`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#1e293b',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        5. Security Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Identifies vulnerabilities and ensures APIs are secure against attacks.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Authentication and authorization testing</li>
                                        <li>SQL injection and XSS vulnerability testing</li>
                                        <li>Encryption and data protection validation</li>
                                        <li>Penetration testing</li>
                                        <li>Token and session management testing</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: Security Test Scenarios

1. Authentication Testing:
GET /api/users/1
Headers: (No Authorization header)
Expected: 401 Unauthorized
Actual: 401 Unauthorized ✓

GET /api/users/1
Headers: Authorization: Bearer invalid_token
Expected: 401 Unauthorized
Actual: 401 Unauthorized ✓

2. Authorization Testing:
GET /api/users/999 (Access other user's data)
Headers: Authorization: Bearer user_token_123
Expected: 403 Forbidden
Actual: 403 Forbidden ✓

3. SQL Injection Testing:
GET /api/users?id=1' OR '1'='1
Expected: 400 Bad Request (sanitized)
Actual: 400 Bad Request ✓

POST /api/login
Body: {"username": "admin'--", "password": "anything"}
Expected: Rejected, no SQL execution
Actual: 401 Unauthorized ✓

4. XSS Testing:
POST /api/comments
Body: {"text": "<script>alert('XSS')</script>"}
Expected: Input sanitized, script not executed
Actual: Comment saved with escaped HTML ✓

5. Token Expiration Testing:
GET /api/users/1
Headers: Authorization: Bearer expired_token
Expected: 401 Unauthorized with "Token expired"
Actual: 401 Unauthorized ✓`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="validation-testing" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        6. Validation Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Verifies the behavior, efficiency, and reliability of APIs.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Data validation (correctness, completeness)</li>
                                        <li>Response time validation</li>
                                        <li>Status code verification</li>
                                        <li>Schema validation</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: Validation Test Cases

1. Schema Validation:
POST /api/users
Body: {"name": "John", "email": "john@example.com", "age": 30}
Expected Schema:
{
  "id": number,
  "name": string,
  "email": string (valid email format),
  "age": number (18-120),
  "createdAt": string (ISO date)
}
Actual Response: Matches schema ✓

2. Data Completeness:
GET /api/users/1
Expected: All required fields present
Response:
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "createdAt": "2024-01-15T10:30:00Z"
}
Validation: All fields present ✓

3. Response Time Validation:
GET /api/users
Expected: Response time < 200ms
Actual: 185ms ✓

4. Status Code Verification:
GET /api/users/999 (non-existent)
Expected: 404 Not Found
Actual: 404 Not Found ✓

POST /api/users (invalid data)
Body: {"name": "", "email": "invalid-email"}
Expected: 400 Bad Request
Actual: 400 Bad Request ✓`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#1e293b',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        7. Error Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Tests how APIs handle errors and edge cases.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Invalid input handling</li>
                                        <li>Error message validation</li>
                                        <li>HTTP status code verification</li>
                                        <li>Edge case testing (boundary values, null values)</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: Error Test Scenarios

1. Invalid Input - Missing Required Field:
POST /api/users
Body: {"name": "John"}
Expected: 400 Bad Request
Response: 400 Bad Request
{
  "error": "Validation failed",
  "message": "Email is required"
} ✓

2. Invalid Input - Wrong Data Type:
POST /api/users
Body: {"name": "John", "email": "john@example.com", "age": "thirty"}
Expected: 400 Bad Request
Response: 400 Bad Request
{
  "error": "Validation failed",
  "message": "Age must be a number"
} ✓

3. Boundary Value Testing:
POST /api/users
Body: {"name": "John", "email": "john@example.com", "age": 17}
Expected: 400 Bad Request (age < 18)
Response: 400 Bad Request ✓

Body: {"name": "John", "email": "john@example.com", "age": 121}
Expected: 400 Bad Request (age > 120)
Response: 400 Bad Request ✓

4. Null/Empty Values:
POST /api/users
Body: {"name": null, "email": "", "age": null}
Expected: 400 Bad Request
Response: 400 Bad Request ✓

5. Resource Not Found:
GET /api/users/99999
Expected: 404 Not Found
Response: 404 Not Found
{
  "error": "Not Found",
  "message": "User with id 99999 not found"
} ✓

6. Server Error Handling:
GET /api/users (when database is down)
Expected: 500 Internal Server Error
Response: 500 Internal Server Error
{
  "error": "Internal Server Error",
  "message": "Database connection failed"
} ✓`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="contract-testing" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        8. Contract Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Ensures APIs meet their contracts and specifications (e.g., OpenAPI, Swagger).
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Schema compliance validation</li>
                                        <li>Request/response format verification</li>
                                        <li>API contract validation</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: Contract Testing with OpenAPI/Swagger

OpenAPI Contract (swagger.yaml):
/api/users/{id}:
  get:
    parameters:
      - name: id
        type: integer
        required: true
    responses:
      200:
        schema:
          type: object
          properties:
            id: {type: integer}
            name: {type: string}
            email: {type: string}

Test Case 1: Valid Request
GET /api/users/1
Expected: Matches contract schema
Response: 200 OK
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
Contract Validation: ✓ Passes

Test Case 2: Invalid Parameter Type
GET /api/users/abc
Expected: 400 Bad Request (id must be integer)
Response: 400 Bad Request
Contract Validation: ✓ Passes

Test Case 3: Response Schema Mismatch
GET /api/users/1
Expected: Response matches contract
Actual Response:
{
  "id": "1",  // Should be integer, not string
  "name": "John Doe",
  "email": "john@example.com"
}
Contract Validation: ✗ Fails (id type mismatch)

Test Case 4: Missing Required Field
GET /api/users/1
Expected: All contract fields present
Actual Response:
{
  "id": 1,
  "name": "John Doe"
  // Missing "email" field
}
Contract Validation: ✗ Fails (missing required field)`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#1e293b',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        9. Reliability Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Tests API stability and consistency over time.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Consistent response validation</li>
                                        <li>Uptime and availability testing</li>
                                        <li>Long-running transaction testing</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: Reliability Test Scenarios

1. Consistent Response Testing:
Test: GET /api/users/1 (100 iterations)
Expected: Same response every time
Results:
- Iteration 1-100: All returned identical data ✓
- Response time variance: < 5% ✓
- No intermittent failures ✓

2. Uptime/Availability Testing:
Test: Monitor GET /api/health every 1 minute for 24 hours
Expected: 99.9% uptime
Results:
- Total requests: 1,440
- Successful: 1,438
- Failed: 2 (planned maintenance)
- Uptime: 99.86% ✓

3. Long-Running Transaction Testing:
Test: POST /api/reports/generate
Body: {"type": "monthly", "dateRange": "2024-01-01 to 2024-01-31"}
Expected: Completes successfully, no timeout
Results:
- Request sent: 10:00 AM
- Processing time: 45 minutes
- Status: 202 Accepted (async processing)
- Final status check: 200 OK (completed) ✓
- No data corruption ✓

4. Repeated Request Consistency:
Test: GET /api/products?category=electronics (50 times)
Expected: Same results, no duplicates, no missing items
Results:
- All 50 requests returned identical product list ✓
- No duplicate products ✓
- No missing products ✓`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="fuzz-testing" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        10. Fuzz Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Sends random, invalid, or unexpected data to APIs to find vulnerabilities.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Random data injection</li>
                                        <li>Malformed request testing</li>
                                        <li>Unexpected data type testing</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Example: Fuzz Testing Scenarios

1. Random String Injection:
POST /api/users
Body: {"name": "!@#$%^&*()", "email": "random123", "age": "xyz"}
Expected: 400 Bad Request (proper validation)
Response: 400 Bad Request ✓
No system crash ✓

2. Extremely Long Input:
POST /api/users
Body: {"name": "A" * 10000, "email": "test@example.com", "age": 30}
Expected: 400 Bad Request (length validation)
Response: 400 Bad Request ✓
No buffer overflow ✓

3. Special Characters:
POST /api/users
Body: {"name": "<script>alert('XSS')</script>", "email": "test@example.com"}
Expected: Input sanitized or rejected
Response: 400 Bad Request or sanitized input ✓

4. Malformed JSON:
POST /api/users
Body: {"name": "John", "email": "john@example.com", "age": 30
Expected: 400 Bad Request (invalid JSON)
Response: 400 Bad Request ✓

5. Unexpected Data Types:
POST /api/users
Body: {"name": 12345, "email": ["array"], "age": {"object": "value"}}
Expected: 400 Bad Request (type validation)
Response: 400 Bad Request ✓

6. Unicode/Emoji Injection:
POST /api/users
Body: {"name": "John 😀🎉", "email": "test@example.com", "age": 30}
Expected: Handled gracefully
Response: 201 Created (if supported) or 400 Bad Request ✓

7. SQL Injection via Fuzzing:
POST /api/users
Body: {"name": "John'; DROP TABLE users;--", "email": "test@example.com"}
Expected: Rejected, no SQL execution
Response: 400 Bad Request ✓`}</pre>
                                    </div>
                                </div>
                            </div>

                            {/* API Testing Tools */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 id="api-testing-tools" style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Tools for API Testing
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    There are numerous tools available for API testing, each with its own strengths:
                                </p>
                                
                                <div style={{ marginBottom: '20px' }}>
                                    <h4 id="gui-based-tools" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        GUI-Based Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>Postman:</strong> Popular REST client with GUI, collections, environments, and automation</li>
                                        <li><strong>Insomnia:</strong> Lightweight REST client with clean interface</li>
                                        <li><strong>SoapUI:</strong> Specialized tool for SOAP and REST API testing</li>
                                        <li><strong>REST Assured (with IDE):</strong> Java-based testing framework</li>
                                        <li><strong>HTTPie:</strong> Command-line HTTP client with user-friendly interface</li>
                                        <li><strong>Paw:</strong> Mac-native API testing tool</li>
                                        <li><strong>Bruno:</strong> Open-source API client with local-first approach</li>
                                    </ul>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <h4 id="code-based-tools" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        Code-Based/Programming Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>REST Assured (Java):</strong> Java DSL for REST API testing</li>
                                        <li><strong>Karate DSL:</strong> BDD-style API testing framework</li>
                                        <li><strong>SuperTest (Node.js):</strong> HTTP assertion library for Node.js</li>
                                        <li><strong>Requests (Python):</strong> Python library for HTTP requests</li>
                                        <li><strong>HttpClient (C#/.NET):</strong> .NET library for HTTP requests</li>
                                        <li><strong>Axios (JavaScript):</strong> Promise-based HTTP client</li>
                                        <li><strong>Playwright/WebDriver:</strong> Can be used for API testing alongside UI testing</li>
                                    </ul>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{
                                        color: '#1e293b',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        Performance Testing Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>JMeter:</strong> Apache JMeter for load and performance testing</li>
                                        <li><strong>Gatling:</strong> High-performance load testing tool</li>
                                        <li><strong>K6:</strong> Modern load testing tool with JavaScript</li>
                                        <li><strong>Artillery:</strong> Load testing toolkit</li>
                                        <li><strong>Locust:</strong> Python-based load testing framework</li>
                                    </ul>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <h4 id="security-testing-tools" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        Security Testing Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>OWASP ZAP:</strong> Security testing tool for finding vulnerabilities</li>
                                        <li><strong>Burp Suite:</strong> Web security testing platform</li>
                                        <li><strong>Postman (Security Testing):</strong> Built-in security testing features</li>
                                    </ul>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <h4 id="contract-testing-tools" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        Contract Testing Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>Pact:</strong> Contract testing framework</li>
                                        <li><strong>Dredd:</strong> API testing framework for API Blueprint and OpenAPI</li>
                                        <li><strong>Schemathesis:</strong> Property-based testing for OpenAPI and GraphQL</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Different Types of API Services */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 id="different-types-api-services" style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Different Types of API Services
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    APIs come in various types, each with its own architecture, protocols, and use cases. Understanding these different API types is crucial for effective API testing.
                                </p>

                                {/* REST API */}
                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="rest-api-type" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        1. REST API (Representational State Transfer)
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        REST is the most popular API architecture style. It uses standard HTTP methods and is stateless, meaning each request contains all information needed to process it.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Uses HTTP methods: GET, POST, PUT, DELETE, PATCH</li>
                                        <li>Stateless communication</li>
                                        <li>JSON or XML data format</li>
                                        <li>Resource-based URLs</li>
                                        <li>Cacheable responses</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`REST API Example:

GET /api/users/1
Headers:
  Accept: application/json
  Authorization: Bearer token123
Response: 200 OK
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:30:00Z"
}

POST /api/users
Headers:
  Content-Type: application/json
  Authorization: Bearer token123
Body:
{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
Response: 201 Created
{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane@example.com",
  "createdAt": "2024-01-16T08:20:00Z"
}

PUT /api/users/2
Headers:
  Content-Type: application/json
  Authorization: Bearer token123
Body:
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
Response: 200 OK

DELETE /api/users/2
Headers:
  Authorization: Bearer token123
Response: 204 No Content`}</pre>
                                    </div>
                                </div>

                                {/* SOAP API */}
                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#1e293b',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        2. SOAP API (Simple Object Access Protocol)
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        SOAP is a protocol-based API that uses XML for message format and relies on WSDL (Web Services Description Language) for service definition.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Protocol-based (not just HTTP)</li>
                                        <li>Uses XML format exclusively</li>
                                        <li>Requires WSDL file for service definition</li>
                                        <li>Built-in error handling (SOAP Fault)</li>
                                        <li>More structured and formal than REST</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`SOAP API Example:

POST /calculator.asmx HTTP/1.1
Host: www.dneonline.com
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://tempuri.org/Add"

<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Add xmlns="http://tempuri.org/">
      <intA>10</intA>
      <intB>20</intB>
    </Add>
  </soap:Body>
</soap:Envelope>

Response: 200 OK
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <AddResponse xmlns="http://tempuri.org/">
      <AddResult>30</AddResult>
    </AddResponse>
  </soap:Body>
</soap:Envelope>`}</pre>
                                    </div>
                                </div>

                                {/* GraphQL API */}
                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="graphql-api-type" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        3. GraphQL API
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        GraphQL is a query language and runtime for APIs that allows clients to request exactly the data they need, reducing over-fetching and under-fetching.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Single endpoint for all operations</li>
                                        <li>Client specifies exact data requirements</li>
                                        <li>Uses queries (read) and mutations (write)</li>
                                        <li>Strongly typed schema</li>
                                        <li>Reduces network overhead</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`GraphQL API Example:

POST /graphql
Headers:
  Content-Type: application/json
  Authorization: Bearer token123

Query (Read):
{
  "query": "{
    user(id: 1) {
      id
      name
      email
      posts {
        title
        content
      }
    }
  }"
}

Response: 200 OK
{
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "posts": [
        {
          "title": "My First Post",
          "content": "This is the content..."
        }
      ]
    }
  }
}

Mutation (Write):
{
  "query": "mutation {
    createUser(name: \"Jane Doe\", email: \"jane@example.com\") {
      id
      name
      email
    }
  }"
}

Response: 200 OK
{
  "data": {
    "createUser": {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
  }
}`}</pre>
                                    </div>
                                </div>

                                {/* gRPC API */}
                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="grpc-api-type" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        4. gRPC API (Google Remote Procedure Call)
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        gRPC is a high-performance RPC framework that uses Protocol Buffers (protobuf) for serialization and HTTP/2 for transport.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Uses Protocol Buffers (binary format)</li>
                                        <li>HTTP/2 based for better performance</li>
                                        <li>Strongly typed with .proto files</li>
                                        <li>Supports streaming (client, server, bidirectional)</li>
                                        <li>Language-agnostic</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`gRPC API Example:

Protocol Buffer Definition (.proto):
syntax = "proto3";

service UserService {
  rpc GetUser (UserRequest) returns (UserResponse);
  rpc CreateUser (CreateUserRequest) returns (UserResponse);
}

message UserRequest {
  int32 id = 1;
}

message UserResponse {
  int32 id = 1;
  string name = 2;
  string email = 3;
}

message CreateUserRequest {
  string name = 1;
  string email = 2;
}

Request (Binary Protocol Buffer):
POST /UserService/GetUser HTTP/2
Content-Type: application/grpc
Authorization: Bearer token123

[Binary protobuf data]

Response: 200 OK
Content-Type: application/grpc

[Binary protobuf data containing user information]`}</pre>
                                    </div>
                                </div>

                                {/* WebSocket API */}
                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="websocket-api-type" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        5. WebSocket API
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        WebSocket provides full-duplex communication channels over a single TCP connection, enabling real-time data exchange.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Full-duplex communication</li>
                                        <li>Persistent connection</li>
                                        <li>Real-time bidirectional data flow</li>
                                        <li>Lower latency than HTTP polling</li>
                                        <li>Ideal for chat, gaming, live updates</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`WebSocket API Example:

Connection Handshake:
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13

Response: 101 Switching Protocols
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=

After Connection Established:
Client → Server:
{
  "type": "message",
  "content": "Hello, server!",
  "userId": 123
}

Server → Client:
{
  "type": "message",
  "content": "Hello, client!",
  "timestamp": "2024-01-15T10:30:00Z"
}

Server → Client (Broadcast):
{
  "type": "notification",
  "message": "User 456 joined the chat",
  "timestamp": "2024-01-15T10:31:00Z"
}`}</pre>
                                    </div>
                                </div>

                                {/* Webhook API */}
                                <div style={{ marginBottom: '25px' }}>
                                    <h4 id="webhook-api-type" style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        6. Webhook API
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Webhooks are HTTP callbacks that allow one system to notify another system about events in real-time, using HTTP POST requests.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Event-driven architecture</li>
                                        <li>Server-to-server communication</li>
                                        <li>HTTP POST requests</li>
                                        <li>Real-time notifications</li>
                                        <li>Commonly used for integrations</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#1e293b',
                                        padding: '20px',
                                        borderRadius: '12px',
                                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                        fontSize: '14px',
                                        border: '1px solid #334155',
                                        marginTop: '20px',
                                        textAlign: 'left',
                                        overflowX: 'auto',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        position: 'relative'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left', color: '#e2e8f0', lineHeight: '1.7' }}>{`Webhook API Example:

Setting up Webhook (Registration):
POST /api/webhooks/register
Headers:
  Content-Type: application/json
  Authorization: Bearer token123
Body:
{
  "url": "https://myapp.com/webhook",
  "events": ["user.created", "order.completed"],
  "secret": "webhook_secret_key"
}

Response: 201 Created
{
  "id": "webhook_123",
  "url": "https://myapp.com/webhook",
  "status": "active"
}

Webhook Notification (Event Triggered):
POST https://myapp.com/webhook
Headers:
  Content-Type: application/json
  X-Webhook-Signature: sha256=abc123...
  X-Webhook-Event: user.created
Body:
{
  "event": "user.created",
  "data": {
    "userId": 456,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "createdAt": "2024-01-15T10:30:00Z"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}

Response Expected: 200 OK`}</pre>
                                    </div>
                                </div>

                                {/* Comparison Table */}
                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#1e293b',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        API Types Comparison
                                    </h4>
                                    <div style={{
                                        backgroundColor: '#ffffff',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        overflowX: 'auto'
                                    }}>
                                        <table style={{
                                            width: '100%',
                                            borderCollapse: 'collapse',
                                            fontSize: '14px',
                                            textAlign: 'left'
                                        }}>
                                            <thead>
                                                <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                                    <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>API Type</th>
                                                    <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Protocol</th>
                                                    <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Data Format</th>
                                                    <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Use Case</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                    <td style={{ padding: '12px' }}><strong>REST</strong></td>
                                                    <td style={{ padding: '12px' }}>HTTP/HTTPS</td>
                                                    <td style={{ padding: '12px' }}>JSON, XML</td>
                                                    <td style={{ padding: '12px' }}>Web services, mobile apps, public APIs</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                    <td style={{ padding: '12px' }}><strong>SOAP</strong></td>
                                                    <td style={{ padding: '12px' }}>HTTP, SMTP, TCP</td>
                                                    <td style={{ padding: '12px' }}>XML only</td>
                                                    <td style={{ padding: '12px' }}>Enterprise systems, financial services, legacy systems</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                    <td style={{ padding: '12px' }}><strong>GraphQL</strong></td>
                                                    <td style={{ padding: '12px' }}>HTTP/HTTPS</td>
                                                    <td style={{ padding: '12px' }}>JSON</td>
                                                    <td style={{ padding: '12px' }}>Mobile apps, complex data requirements, flexible queries</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                    <td style={{ padding: '12px' }}><strong>gRPC</strong></td>
                                                    <td style={{ padding: '12px' }}>HTTP/2</td>
                                                    <td style={{ padding: '12px' }}>Protocol Buffers</td>
                                                    <td style={{ padding: '12px' }}>Microservices, high-performance systems, internal APIs</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                    <td style={{ padding: '12px' }}><strong>WebSocket</strong></td>
                                                    <td style={{ padding: '12px' }}>TCP (WebSocket protocol)</td>
                                                    <td style={{ padding: '12px' }}>JSON, Text, Binary</td>
                                                    <td style={{ padding: '12px' }}>Real-time chat, gaming, live updates, notifications</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                    <td style={{ padding: '12px' }}><strong>Webhook</strong></td>
                                                    <td style={{ padding: '12px' }}>HTTP/HTTPS</td>
                                                    <td style={{ padding: '12px' }}>JSON, XML</td>
                                                    <td style={{ padding: '12px' }}>Event notifications, integrations, automation</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Prerequisites for API Testing */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 id="prerequisites-api-testing" style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Prerequisites for API Testing
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    Before starting API testing, you should have knowledge and understanding of:
                                </p>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0',
                                    marginTop: '10px',
                                    marginBottom: '16px',
                                    overflowX: 'auto'
                                }}>
                                    <table style={{
                                        width: '100%',
                                        borderCollapse: 'collapse',
                                        fontSize: '14px',
                                        textAlign: 'left'
                                    }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Topic</th>
                                                <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>HTTP Protocol</td>
                                                <td style={{ padding: '12px' }}>HTTP methods (GET, POST, PUT, DELETE, PATCH), status codes, headers, request/response structure</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>REST API Concepts</td>
                                                <td style={{ padding: '12px' }}>REST principles, resources, endpoints, stateless communication</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>JSON/XML</td>
                                                <td style={{ padding: '12px' }}>Data formats used in API requests and responses</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>API Documentation</td>
                                                <td style={{ padding: '12px' }}>OpenAPI/Swagger, API Blueprint</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Authentication Methods</td>
                                                <td style={{ padding: '12px' }}>API keys, OAuth, JWT tokens, Basic Auth</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Testing Fundamentals</td>
                                                <td style={{ padding: '12px' }}>Test cases, assertions, test data</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Command Line</td>
                                                <td style={{ padding: '12px' }}>Newman, cURL, CLI-based testing</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Programming Basics</td>
                                                <td style={{ padding: '12px' }}>JavaScript, Python, Java, etc. for code-based tools</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Network Concepts</td>
                                                <td style={{ padding: '12px' }}>Client-server architecture, URLs, endpoints, ports</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>API Testing Tools</td>
                                                <td style={{ padding: '12px' }}>Postman, Insomnia, etc.</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>Version Control</td>
                                                <td style={{ padding: '12px' }}>Git for test scripts and collections</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                                <td style={{ padding: '12px', fontWeight: '600' }}>CI/CD Concepts</td>
                                                <td style={{ padding: '12px' }}>Continuous integration for automating API tests</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Industry Standard API User Story Sample Section */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '32px',
                    borderRadius: '16px',
                    marginBottom: '32px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                    <div
                        onClick={() => setIsUserStoryExpanded(!isUserStoryExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: isUserStoryExpanded ? '20px' : '0',
                            borderBottom: isUserStoryExpanded ? '3px solid #667eea' : 'none',
                            transition: 'all 0.3s ease',
                            marginBottom: isUserStoryExpanded ? '24px' : '0'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                    >
                        <h2 id="industry-standard-api-user-story" style={{
                            color: '#1e293b',
                            fontSize: '28px',
                            marginBottom: 0,
                            fontWeight: '700',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.3'
                        }}>
                            Industry Standard API User Story Sample
                        </h2>
                        <span style={{
                            fontSize: '28px',
                            color: '#667eea',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px',
                            backgroundColor: isUserStoryExpanded ? '#eef2ff' : '#f1f5f9'
                        }}>
                            {isUserStoryExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isUserStoryExpanded && (
                        <div style={{ marginTop: '24px', animation: 'fadeIn 0.3s ease' }}>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333333', marginBottom: '20px' }}>
                                Below is a single, copy-paste <strong>industry standard API user story template</strong> you can reuse for any endpoint. It is written to be <strong>testable</strong>, <strong>implementation-agnostic</strong>, and aligned with common Agile + API best practices.
                            </p>

                            <h3 id="api-user-story-template" style={{ color: '#00416A', fontSize: '22px', marginBottom: '12px', marginTop: '24px', fontWeight: 'bold' }}>
                                API User Story Template (Best Practice)
                            </h3>

                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '160px' }}>Field</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Value / Template</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Story ID</td><td style={{ padding: '12px' }}>API-___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Title</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>[Verb] [Resource] (Endpoint: [METHOD] /v1/[resource])</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Epic/Feature</td><td style={{ padding: '12px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Priority</td><td style={{ padding: '12px' }}>P0 / P1 / P2</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Story Points</td><td style={{ padding: '12px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Owner</td><td style={{ padding: '12px' }}>___</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginTop: '20px', marginBottom: '8px', fontWeight: '600' }}>User Story</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '120px' }}>Clause</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Template</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>As a</td><td style={{ padding: '12px' }}>[API consumer persona: internal service / web app / mobile app / partner]</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>I want to</td><td style={{ padding: '12px' }}>[action] via [endpoint]</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>So that</td><td style={{ padding: '12px' }}>[business value/outcome]</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginTop: '20px', marginBottom: '8px', fontWeight: '600' }}>Scope</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '140px' }}>Type</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Items</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>In Scope</td><td style={{ padding: '12px' }}>--- , ---</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Out of Scope</td><td style={{ padding: '12px' }}>--- , ---</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginTop: '20px', marginBottom: '8px', fontWeight: '600' }}>API Contract — Endpoint</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '16px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '180px' }}>Attribute</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Method</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>GET | POST | PUT | PATCH | DELETE</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Path</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>/v1/[resource]</code> or <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>/v1/[resource]/&#123;id&#125;</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Auth</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Bearer token | API key | mTLS</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Required Scopes/Roles</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>[...]</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Idempotency</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Yes/No</code> (If yes: <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Idempotency-Key</code> header required)</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginBottom: '8px', fontWeight: '600' }}>API Contract — Request</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '16px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '160px' }}>Part</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Headers</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Content-Type: application/json</code> (if body), <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Authorization: Bearer &lt;token&gt;</code> (if secured), <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Idempotency-Key: &lt;uuid&gt;</code> (if applicable)</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Path Params</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>&#123;id&#125;</code> format/validation rules</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Query Params</td><td style={{ padding: '12px' }}>filters / sort / pagination</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Body Schema (JSON)</td><td style={{ padding: '12px' }}>Field list: <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>name</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>type</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>required?</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>constraints</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>example</code>; example request payload</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginBottom: '8px', fontWeight: '600' }}>API Contract — Response</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '160px' }}>Part</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Success Status</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>200 | 201 | 204</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Response Schema (JSON)</td><td style={{ padding: '12px' }}>Field list + examples</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Headers</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Location</code> (201 create), <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>ETag</code> (caching/optimistic locking), <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>X-Request-Id</code> (trace)</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginTop: '20px', marginBottom: '8px', fontWeight: '600' }}>Acceptance Criteria (Gherkin-Style)</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '200px' }}>Scenario</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Given / When / Then</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '160px' }}>Expected</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Successful request</td><td style={{ padding: '12px' }}>Given valid auth; And valid payload; When client calls <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>[METHOD] /v1/[resource]...</code></td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>200/201/204</code>; response matches schema; resource persisted; audit has requestId</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Validation failure</td><td style={{ padding: '12px' }}>Given invalid/missing fields; When client calls endpoint</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>400 Bad Request</code>; standard error model with field-level details</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Unauthorized</td><td style={{ padding: '12px' }}>Given missing/invalid token; When client calls endpoint</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>401 Unauthorized</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Forbidden</td><td style={{ padding: '12px' }}>Given valid token but insufficient scope/role</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>403 Forbidden</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Not found</td><td style={{ padding: '12px' }}>Given resource <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>&#123;id&#125;</code> does not exist</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>404 Not Found</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Conflict / duplicate</td><td style={{ padding: '12px' }}>Given uniqueness constraint violated</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>409 Conflict</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Rate limited</td><td style={{ padding: '12px' }}>Given client exceeds rate limit</td><td style={{ padding: '12px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>429 Too Many Requests</code>; <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Retry-After</code> header</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginTop: '20px', marginBottom: '8px', fontWeight: '600' }}>Error Handling Standard</h4>
                            <p style={{ fontSize: '14px', color: '#333333', marginBottom: '8px' }}>All non-2xx responses must return:</p>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '120px' }}>Field</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '100px' }}>Type</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>code</code></td><td style={{ padding: '12px' }}>string</td><td style={{ padding: '12px' }}>Error code</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>message</code></td><td style={{ padding: '12px' }}>string</td><td style={{ padding: '12px' }}>Human-readable message</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>details</code></td><td style={{ padding: '12px' }}>array (optional)</td><td style={{ padding: '12px' }}>Array of &#123;field, issue&#125;</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>requestId</code></td><td style={{ padding: '12px' }}>string</td><td style={{ padding: '12px' }}>Request trace ID</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginTop: '20px', marginBottom: '8px', fontWeight: '600' }}>Non-Functional Requirements (NFRs)</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '160px' }}>Category</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Requirement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Performance</td><td style={{ padding: '12px' }}>P95 latency ≤ ___ ms (under ___ RPS)</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Reliability</td><td style={{ padding: '12px' }}>Availability ≥ ___%</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Security</td><td style={{ padding: '12px' }}>TLS, input validation, least privilege scopes</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Observability</td><td style={{ padding: '12px' }}>Structured logs, metrics, tracing with <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>requestId</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Compliance/Data</td><td style={{ padding: '12px' }}>PII rules, retention, masking</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginTop: '20px', marginBottom: '8px', fontWeight: '600' }}>Test Coverage (Definition of Done)</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '80px' }}>#</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Checklist Item</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px' }}>1</td><td style={{ padding: '12px' }}>Contract tests for schema and status codes</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px' }}>2</td><td style={{ padding: '12px' }}>Positive + negative API tests (auth, validation, not found, conflict)</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px' }}>3</td><td style={{ padding: '12px' }}>Idempotency tests (if applicable)</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px' }}>4</td><td style={{ padding: '12px' }}>Performance smoke test (basic)</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px' }}>5</td><td style={{ padding: '12px' }}>OpenAPI/Swagger updated and published</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px' }}>6</td><td style={{ padding: '12px' }}>Backward compatibility checked (versioning noted)</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', marginTop: '20px', marginBottom: '8px', fontWeight: '600' }}>Dependencies / Notes</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '0', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '200px' }}>Type</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Depends on</td><td style={{ padding: '12px' }}>___ (DB table, downstream service, auth provider)</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Feature flags (if any)</td><td style={{ padding: '12px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Migration needed (if any)</td><td style={{ padding: '12px' }}>___</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Manual Test Case Template Section */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '32px',
                    borderRadius: '16px',
                    marginBottom: '32px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                    <div
                        onClick={() => setIsManualTestCaseExpanded(!isManualTestCaseExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: isManualTestCaseExpanded ? '20px' : '0',
                            borderBottom: isManualTestCaseExpanded ? '3px solid #667eea' : 'none',
                            transition: 'all 0.3s ease',
                            marginBottom: isManualTestCaseExpanded ? '24px' : '0'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                    >
                        <h2 id="manual-test-case-template" style={{
                            color: '#1e293b',
                            fontSize: '28px',
                            marginBottom: 0,
                            fontWeight: '700',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.3'
                        }}>
                            Manual Test Case Template
                        </h2>
                        <span style={{
                            fontSize: '28px',
                            color: '#667eea',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px',
                            backgroundColor: isManualTestCaseExpanded ? '#eef2ff' : '#f1f5f9'
                        }}>
                            {isManualTestCaseExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isManualTestCaseExpanded && (
                        <div style={{ marginTop: '24px', animation: 'fadeIn 0.3s ease' }}>
                            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333333', marginBottom: '24px' }}>
                                Below is a <strong>standard, best-practice manual test case template</strong> in a <strong>granular, step-by-step tabular format</strong> that you can use directly for an API user story (example: <strong>POST /v1/customers – Create Customer</strong>). You can copy/paste this into <strong>Excel / Jira / TestRail / Zephyr</strong>.
                            </p>

                            <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '12px', marginTop: '24px', fontWeight: 'bold' }}>
                                TC: API-POST-CUSTOMERS-001 — Create Customer (Happy Path)
                            </h3>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '16px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '200px' }}>Field</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Test Case ID</td><td style={{ padding: '12px' }}>API-POST-CUSTOMERS-001</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Title</td><td style={{ padding: '12px' }}>Create Customer - Valid request returns 201 and customer object</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Requirement / Story ID</td><td style={{ padding: '12px' }}>API-___ (Create Customer)</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Endpoint</td><td style={{ padding: '12px' }}>POST <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>/v1/customers</code></td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Priority</td><td style={{ padding: '12px' }}>P0</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Type</td><td style={{ padding: '12px' }}>Manual API</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Preconditions</td><td style={{ padding: '12px' }}>API base URL available; Valid auth token with required scope; Test environment is up</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Test Data</td><td style={{ padding: '12px' }}>firstName=&quot;John&quot;, lastName=&quot;Doe&quot;, email=unique, phone=&quot;+17185550123&quot;</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Tools</td><td style={{ padding: '12px' }}>Postman / curl / Swagger UI</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Expected Result Summary</td><td style={{ padding: '12px' }}>Returns 201, body contains created resource, Location header set</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <h4 style={{ color: '#1e293b', fontSize: '16px', marginBottom: '8px', fontWeight: '600' }}>Step-by-step execution</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A', width: '70px' }}>Step #</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Action (Granular)</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Input / Test Data</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Expected Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>1</td><td style={{ padding: '10px' }}>Open Postman (or Swagger UI).</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>Tool opens successfully.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>2</td><td style={{ padding: '10px' }}>Create a new request.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>New request tab is created.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>3</td><td style={{ padding: '10px' }}>Set request method to <strong>POST</strong>.</td><td style={{ padding: '10px' }}>POST</td><td style={{ padding: '10px' }}>Method is set to POST.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>4</td><td style={{ padding: '10px' }}>Enter request URL.</td><td style={{ padding: '10px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>&#123;&#123;baseUrl&#125;&#125;/v1/customers</code></td><td style={{ padding: '10px' }}>URL is accepted (no formatting error).</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>5</td><td style={{ padding: '10px' }}>Add request header <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Content-Type</code>.</td><td style={{ padding: '10px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Content-Type: application/json</code></td><td style={{ padding: '10px' }}>Header appears correctly.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>6</td><td style={{ padding: '10px' }}>Add request header <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Authorization</code>.</td><td style={{ padding: '10px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Authorization: Bearer &#123;&#123;token&#125;&#125;</code></td><td style={{ padding: '10px' }}>Header appears; token not truncated.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>7</td><td style={{ padding: '10px' }}>Generate a unique email for this run.</td><td style={{ padding: '10px' }}>e.g. <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>john.doe+&lt;timestamp&gt;@example.com</code></td><td style={{ padding: '10px' }}>Email is unique; not used previously in env.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>8</td><td style={{ padding: '10px' }}>Prepare JSON body.</td><td style={{ padding: '10px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>&#123; &quot;firstName&quot;:&quot;John&quot;, &quot;lastName&quot;:&quot;Doe&quot;, &quot;email&quot;:&quot;&lt;unique&gt;&quot;, &quot;phone&quot;:&quot;+17185550123&quot; &#125;</code></td><td style={{ padding: '10px' }}>JSON is valid (no syntax errors).</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>9</td><td style={{ padding: '10px' }}>Click <strong>Send</strong>.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>Request is submitted.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>10</td><td style={{ padding: '10px' }}>Verify HTTP status code.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>Response status is <strong>201 Created</strong>.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>11</td><td style={{ padding: '10px' }}>Verify response headers include <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Location</code>.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Location</code> header exists and ends with <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>/v1/customers/&#123;id&#125;</code>.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>12</td><td style={{ padding: '10px' }}>Verify response body schema (required fields).</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>Body contains: <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>id</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>firstName</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>lastName</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>email</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>createdAt</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>updatedAt</code>.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>13</td><td style={{ padding: '10px' }}>Validate response field values.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>Returned firstName/lastName/email/phone match request; <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>id</code> is not null.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>14</td><td style={{ padding: '10px' }}>Copy created <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>id</code> from response.</td><td style={{ padding: '10px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>id</code></td><td style={{ padding: '10px' }}>ID is captured for later validation.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>15</td><td style={{ padding: '10px' }}>Execute follow-up GET to confirm persistence.</td><td style={{ padding: '10px' }}>GET <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>&#123;&#123;baseUrl&#125;&#125;/v1/customers/&#123;id&#125;</code></td><td style={{ padding: '10px' }}>Returns <strong>200</strong> and matches created customer.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>16</td><td style={{ padding: '10px' }}>Record evidence (screenshot/export).</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>Request/response saved as test evidence.</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '12px', marginTop: '28px', fontWeight: 'bold' }}>
                                Negative / Security / Validation Manual Test Cases (Same Story)
                            </h3>

                            <h4 style={{ color: '#1e293b', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>TC: API-POST-CUSTOMERS-002 — Missing Required Field (firstName)</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '20px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A', width: '70px' }}>Step #</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Action</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Input / Test Data</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Expected Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>1</td><td style={{ padding: '10px' }}>Set POST request to <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>/v1/customers</code> with headers.</td><td style={{ padding: '10px' }}>Same as happy path</td><td style={{ padding: '10px' }}>Request is ready.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>2</td><td style={{ padding: '10px' }}>Remove <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>firstName</code> from JSON body.</td><td style={{ padding: '10px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>&#123; &quot;lastName&quot;:&quot;Doe&quot;, &quot;email&quot;:&quot;&lt;unique&gt;&quot; &#125;</code></td><td style={{ padding: '10px' }}>JSON valid.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>3</td><td style={{ padding: '10px' }}>Send request.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>API returns <strong>400 Bad Request</strong>.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>4</td><td style={{ padding: '10px' }}>Verify error model.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>Error includes <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>code</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>message</code>, <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>requestId</code>, and <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>details</code> includes <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>field=firstName</code>.</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>TC: API-POST-CUSTOMERS-003 — Duplicate Email Returns 409</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '20px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A', width: '70px' }}>Step #</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Action</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Input / Test Data</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Expected Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>1</td><td style={{ padding: '10px' }}>Create a customer successfully (reuse TC-001).</td><td style={{ padding: '10px' }}>Email = <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>dup@example.com</code></td><td style={{ padding: '10px' }}>Customer created with <strong>201</strong>.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>2</td><td style={{ padding: '10px' }}>Send POST again with same email.</td><td style={{ padding: '10px' }}>Same email</td><td style={{ padding: '10px' }}>API returns <strong>409 Conflict</strong>.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>3</td><td style={{ padding: '10px' }}>Validate error model.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>code/message/requestId</code> present; message indicates duplicate/constraint.</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>TC: API-POST-CUSTOMERS-004 — Unauthorized (Missing Token)</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '20px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A', width: '70px' }}>Step #</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Action</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Input / Test Data</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Expected Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>1</td><td style={{ padding: '10px' }}>Prepare POST request without Authorization header.</td><td style={{ padding: '10px' }}>Remove <code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Authorization</code></td><td style={{ padding: '10px' }}>Request ready.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>2</td><td style={{ padding: '10px' }}>Send request.</td><td style={{ padding: '10px' }}>Valid body</td><td style={{ padding: '10px' }}>API returns <strong>401 Unauthorized</strong>.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>3</td><td style={{ padding: '10px' }}>Validate error model.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>Standard error schema returned.</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '16px', marginBottom: '8px', marginTop: '16px', fontWeight: '600' }}>TC: API-POST-CUSTOMERS-005 — Forbidden (Insufficient Scope)</h4>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '24px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A', width: '70px' }}>Step #</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Action</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Input / Test Data</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Expected Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>1</td><td style={{ padding: '10px' }}>Use a token that lacks required scope/role.</td><td style={{ padding: '10px' }}><code style={{ backgroundColor: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>Bearer &#123;&#123;token_no_scope&#125;&#125;</code></td><td style={{ padding: '10px' }}>Request ready.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>2</td><td style={{ padding: '10px' }}>Send request.</td><td style={{ padding: '10px' }}>Valid body</td><td style={{ padding: '10px' }}>API returns <strong>403 Forbidden</strong>.</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>3</td><td style={{ padding: '10px' }}>Validate error model.</td><td style={{ padding: '10px' }}>N/A</td><td style={{ padding: '10px' }}>Standard error schema returned.</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 style={{ color: '#00416A', fontSize: '20px', marginBottom: '12px', marginTop: '28px', fontWeight: 'bold' }}>
                                Reusable &quot;Blank&quot; Manual Test Case Table (Template Only)
                            </h3>
                            <p style={{ fontSize: '14px', color: '#333333', marginBottom: '12px' }}>Generic blank template to reuse for any endpoint:</p>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '16px', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A', width: '200px' }}>Field</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Test Case ID</td><td style={{ padding: '12px' }}>API-___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Title</td><td style={{ padding: '12px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Requirement / Story ID</td><td style={{ padding: '12px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Endpoint</td><td style={{ padding: '12px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Priority</td><td style={{ padding: '12px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Type</td><td style={{ padding: '12px' }}>Manual API</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Preconditions</td><td style={{ padding: '12px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Test Data</td><td style={{ padding: '12px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '12px', fontWeight: '600' }}>Tools</td><td style={{ padding: '12px' }}>Postman / curl / Swagger UI</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '12px', fontWeight: '600' }}>Expected Result Summary</td><td style={{ padding: '12px' }}>___</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0', marginBottom: '0', overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A', width: '70px' }}>Step #</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Action (Granular)</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Input / Test Data</th>
                                            <th style={{ padding: '10px', fontWeight: 'bold', color: '#00416A' }}>Expected Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>1</td><td style={{ padding: '10px' }}>___</td><td style={{ padding: '10px' }}>___</td><td style={{ padding: '10px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}><td style={{ padding: '10px' }}>2</td><td style={{ padding: '10px' }}>___</td><td style={{ padding: '10px' }}>___</td><td style={{ padding: '10px' }}>___</td></tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}><td style={{ padding: '10px' }}>3</td><td style={{ padding: '10px' }}>___</td><td style={{ padding: '10px' }}>___</td><td style={{ padding: '10px' }}>___</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* API Testing Getting Started Section */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '32px',
                    borderRadius: '16px',
                    marginBottom: '32px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                    <div
                        onClick={() => setIsGettingStartedExpanded(!isGettingStartedExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: isGettingStartedExpanded ? '15px' : '0',
                            borderBottom: isGettingStartedExpanded ? '2px solid #00416A' : 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            if (!isGettingStartedExpanded) {
                                e.currentTarget.style.backgroundColor = '#f0f7fa';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isGettingStartedExpanded) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <h2 id="api-testing-getting-started" style={{
                            ...leftAlignStyles.sectionHeading,
                            marginBottom: 0,
                            color: '#00416A'
                        }}>
                            API Testing Getting Started
                        </h2>
                        <span style={{
                            fontSize: '32px',
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease'
                        }}>
                            {isGettingStartedExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isGettingStartedExpanded && (
                        <div style={{ marginTop: '24px', animation: 'fadeIn 0.3s ease' }}>

                {/* What is RESTful API */}
                <div style={{ marginBottom: '30px' }}>
                    <h3 id="what-is-restful-api" style={{
                        color: '#00416A',
                        fontSize: '22px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        What is RESTful API?
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        textAlign: 'left',
                        marginBottom: '15px'
                    }}>
                        <strong>RESTful API</strong> (Representational State Transfer) is an architectural style for designing networked applications. A RESTful API uses HTTP requests to access and use data. The data can be used to GET, PUT, POST, and DELETE data types, which refers to reading, updating, creating, and deleting operations concerning resources.
                    </p>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        textAlign: 'left',
                        marginBottom: '15px'
                    }}>
                        RESTful APIs follow these key principles:
                    </p>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left',
                        marginBottom: '15px'
                    }}>
                        <li><strong>Stateless:</strong> Each request from client to server must contain all the information needed to understand the request</li>
                        <li><strong>Client-Server:</strong> Separation of concerns between client and server</li>
                        <li><strong>Uniform Interface:</strong> Consistent way of interacting with resources</li>
                        <li><strong>Resource-Based:</strong> Resources are identified by URLs</li>
                        <li><strong>Representation:</strong> Resources can have multiple representations (JSON, XML, etc.)</li>
                    </ul>
                </div>

                {/* REST HTTP Methods */}
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '22px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        REST HTTP Methods
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        textAlign: 'left',
                        marginBottom: '15px'
                    }}>
                        RESTful APIs use standard HTTP methods to perform operations on resources. Each method has a specific purpose and meaning:
                    </p>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '25px',
                        overflowX: 'auto'
                    }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '14px',
                            textAlign: 'left'
                        }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                    <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Method</th>
                                    <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Purpose</th>
                                    <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Idempotent</th>
                                    <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Safe</th>
                                    <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Request Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>GET</td>
                                    <td style={{ padding: '12px' }}>Retrieve data</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                    <td style={{ padding: '12px' }}>No</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>POST</td>
                                    <td style={{ padding: '12px' }}>Create new resource</td>
                                    <td style={{ padding: '12px' }}>No</td>
                                    <td style={{ padding: '12px' }}>No</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>PUT</td>
                                    <td style={{ padding: '12px' }}>Update/replace resource</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                    <td style={{ padding: '12px' }}>No</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>PATCH</td>
                                    <td style={{ padding: '12px' }}>Partial update</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                    <td style={{ padding: '12px' }}>No</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>DELETE</td>
                                    <td style={{ padding: '12px' }}>Remove resource</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                    <td style={{ padding: '12px' }}>No</td>
                                    <td style={{ padding: '12px' }}>No</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>OPTIONS</td>
                                    <td style={{ padding: '12px' }}>Get allowed methods</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                    <td style={{ padding: '12px' }}>No</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                    <td style={{ padding: '12px', fontWeight: '600' }}>HEAD</td>
                                    <td style={{ padding: '12px' }}>Get headers only</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                    <td style={{ padding: '12px' }}>Yes</td>
                                    <td style={{ padding: '12px' }}>No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* GET Method */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="get-method" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            1. GET - Retrieve Data
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Used to retrieve data from a server. GET requests should only retrieve data and should not have any side effects.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Idempotent (multiple identical requests return the same result)</li>
                            <li>Safe (does not modify server state)</li>
                            <li>Can be cached</li>
                            <li>No request body required</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`GET /api/users/1
GET /api/users?status=active&page=1
GET /api/products/123/reviews

Response: 200 OK
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}`}</pre>
                        </div>
                    </div>

                    {/* POST Method */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            2. POST - Create New Resource
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Used to create a new resource on the server. POST requests typically include a request body with the data to create.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Not idempotent (multiple requests create multiple resources)</li>
                            <li>Not safe (modifies server state)</li>
                            <li>Cannot be cached</li>
                            <li>Requires request body</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`POST /api/users
Headers:
  Content-Type: application/json
Body:
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "developer"
}

Response: 201 Created
{
  "id": 2,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "role": "developer",
  "createdAt": "2024-01-15T10:30:00Z"
}`}</pre>
                        </div>
                    </div>

                    {/* PUT Method */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="put-method" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            3. PUT - Update/Replace Resource
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Used to update or replace an entire resource. PUT requests replace the entire resource with the provided data.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Idempotent (multiple identical requests have the same effect)</li>
                            <li>Not safe (modifies server state)</li>
                            <li>Requires request body with complete resource data</li>
                            <li>Can create resource if it doesn't exist</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`PUT /api/users/2
Headers:
  Content-Type: application/json
Body:
{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "role": "senior developer"
}

Response: 200 OK
{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "role": "senior developer",
  "updatedAt": "2024-01-16T08:20:00Z"
}`}</pre>
                        </div>
                    </div>

                    {/* PATCH Method */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            4. PATCH - Partial Update
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Used to apply partial modifications to a resource. PATCH only updates the fields provided in the request body.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Idempotent (multiple identical requests have the same effect)</li>
                            <li>Not safe (modifies server state)</li>
                            <li>Requires request body with partial resource data</li>
                            <li>More efficient than PUT for partial updates</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`PATCH /api/users/2
Headers:
  Content-Type: application/json
Body:
{
  "email": "jane.newemail@example.com"
}

Response: 200 OK
{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane.newemail@example.com",
  "role": "senior developer",
  "updatedAt": "2024-01-16T09:15:00Z"
}`}</pre>
                        </div>
                    </div>

                    {/* DELETE Method */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="delete-method" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            5. DELETE - Remove Resource
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Used to delete a resource from the server. DELETE requests remove the specified resource.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Idempotent (multiple identical requests have the same effect)</li>
                            <li>Not safe (modifies server state)</li>
                            <li>No request body required</li>
                            <li>Returns 204 No Content or 200 OK on success</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`DELETE /api/users/2

Response: 204 No Content
(No response body)

OR

Response: 200 OK
{
  "message": "User deleted successfully"
}`}</pre>
                        </div>
                    </div>

                    {/* OPTIONS Method */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            6. OPTIONS - Get Allowed Methods
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Used to describe the communication options for the target resource. Often used for CORS preflight requests.
                        </p>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`OPTIONS /api/users

Response: 200 OK
Headers:
  Allow: GET, POST, PUT, PATCH, DELETE, OPTIONS
  Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE`}</pre>
                        </div>
                    </div>

                    {/* HEAD Method */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="head-method" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            7. HEAD - Get Headers Only
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Similar to GET but returns only the headers without the response body. Useful for checking resource existence or metadata.
                        </p>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`HEAD /api/users/1

Response: 200 OK
Headers:
  Content-Type: application/json
  Content-Length: 156
  Last-Modified: Mon, 15 Jan 2024 10:30:00 GMT
(No response body)`}</pre>
                        </div>
                    </div>
                </div>

                {/* Components Needed for RESTful API Testing */}
                <div style={{ marginBottom: '30px' }}>
                    <h3 id="components-needed-restful" style={{
                        color: '#00416A',
                        fontSize: '22px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Components Needed for RESTful API Testing
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        textAlign: 'left',
                        marginBottom: '15px'
                    }}>
                        To effectively test RESTful APIs, you need to understand and configure these essential components:
                    </p>

                    {/* Service Endpoint + Resource Endpoint + Parameters */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            1. Service Endpoint + Resource Endpoint + Arguments/Parameters
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            An API endpoint is the point of entry in a communication channel. It consists of:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li><strong>Service Endpoint (Base URL):</strong> The base URL of the API server (e.g., https://api.example.com)</li>
                            <li><strong>Resource Endpoint:</strong> The specific resource path (e.g., /api/users, /api/products)</li>
                            <li><strong>Arguments/Parameters:</strong> Additional data passed to identify or filter resources</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Complete Endpoint Structure:

Service Endpoint: https://api.example.com
Resource Endpoint: /api/users
Path Parameter: /123
Query Parameters: ?status=active&page=1

Full URL:
https://api.example.com/api/users/123?status=active&page=1

Breakdown:
- Protocol: https://
- Domain: api.example.com
- Resource Path: /api/users
- Path Parameter: /123 (identifies specific user)
- Query Parameters: ?status=active&page=1 (filters and pagination)`}</pre>
                        </div>
                    </div>

                    {/* Parameters - Query and Path */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="parameters-query-path" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            Parameters: Query Parameters vs Path Parameters
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            Parameters are used to pass additional information to API endpoints. There are two main types:
                        </p>

                        {/* Path Parameters */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                Path Parameters
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                Path parameters are part of the URL path and are used to identify a specific resource. They are required and appear in the URL structure.
                            </p>
                            <ul style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                paddingLeft: '20px',
                                textAlign: 'left',
                                marginBottom: '15px'
                            }}>
                                <li>Part of the URL path</li>
                                <li>Required for resource identification</li>
                                <li>Position matters (order in URL)</li>
                                <li>Example: /api/users/{'{userId}'}/posts/{'{postId}'}</li>
                            </ul>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Path Parameter Examples:

GET /api/users/123
Path Parameter: userId = 123

GET /api/users/123/posts/456
Path Parameters: userId = 123, postId = 456

GET /api/products/laptop/electronics
Path Parameters: category = laptop, subcategory = electronics

PUT /api/users/123
Path Parameter: userId = 123
Body: { "name": "Updated Name" }

DELETE /api/users/123
Path Parameter: userId = 123`}</pre>
                            </div>
                        </div>

                        {/* Query Parameters */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 id="query-parameters" style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                Query Parameters
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                Query parameters are appended to the URL after a question mark (?) and are used for filtering, sorting, pagination, and optional data. Multiple parameters are separated by ampersands (&).
                            </p>
                            <ul style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                paddingLeft: '20px',
                                textAlign: 'left',
                                marginBottom: '15px'
                            }}>
                                <li>Appended after ? in URL</li>
                                <li>Optional (usually)</li>
                                <li>Order doesn't matter</li>
                                <li>Used for filtering, sorting, pagination</li>
                                <li>Example: ?status=active&page=1&limit=10</li>
                            </ul>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Query Parameter Examples:

GET /api/users?status=active
Query Parameter: status = active

GET /api/users?status=active&role=admin&page=1&limit=10
Query Parameters:
  - status = active
  - role = admin
  - page = 1
  - limit = 10

GET /api/products?category=electronics&sort=price&order=asc
Query Parameters:
  - category = electronics
  - sort = price
  - order = asc

GET /api/search?q=test&type=user&limit=20
Query Parameters:
  - q = test (search query)
  - type = user
  - limit = 20

Combined Example:
GET /api/users/123/posts?status=published&sort=date&order=desc
Path Parameters: userId = 123
Query Parameters: status = published, sort = date, order = desc`}</pre>
                            </div>
                        </div>
                    </div>

                    {/* Authentication */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            2. Authentication (Auth)
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            Authentication is required to verify the identity of the client making the API request. Different APIs use different authentication methods:
                        </p>

                        {/* Basic Auth */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 id="basic-authentication" style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                Basic Authentication
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                Uses username and password encoded in Base64 format. Credentials are sent in the Authorization header.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Basic Auth Example:

GET /api/users
Headers:
  Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
  
(Username:password encoded in Base64)
Base64("username:password") = "dXNlcm5hbWU6cGFzc3dvcmQ="

cURL Example:
curl -u username:password https://api.example.com/api/users

Postman:
Type: Basic Auth
Username: username
Password: password`}</pre>
                            </div>
                        </div>

                        {/* Bearer Token / API Key */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 id="bearer-token-api-key" style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                Bearer Token / API Key
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                Uses a token or API key sent in the Authorization header with "Bearer" prefix. Most common method for modern APIs.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Bearer Token Example:

GET /api/users
Headers:
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

cURL Example:
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/api/users

Postman:
Type: Bearer Token
Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

API Key in Header:
GET /api/users
Headers:
  X-API-Key: your-api-key-here
  OR
  API-Key: your-api-key-here`}</pre>
                            </div>
                        </div>

                        {/* OAuth 2.0 */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                OAuth 2.0
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                OAuth 2.0 is an authorization framework that allows applications to obtain limited access to user accounts. Uses access tokens.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`OAuth 2.0 Example:

Step 1: Get Authorization Code
GET /oauth/authorize?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code

Step 2: Exchange Code for Access Token
POST /oauth/token
Headers:
  Content-Type: application/x-www-form-urlencoded
Body:
  grant_type=authorization_code
  &code=AUTHORIZATION_CODE
  &client_id=CLIENT_ID
  &client_secret=CLIENT_SECRET
  &redirect_uri=REDIRECT_URI

Response:
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "REFRESH_TOKEN"
}

Step 3: Use Access Token
GET /api/users
Headers:
  Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...`}</pre>
                            </div>
                        </div>

                        {/* JWT */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 id="jwt-token" style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                JWT (JSON Web Token)
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                JWT is a compact, URL-safe token format. It contains claims (user info, permissions) encoded as JSON and signed.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`JWT Example:

JWT Token Structure:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5g

Decoded:
Header: {"alg":"HS256","typ":"JWT"}
Payload: {"sub":"1234567890","name":"John Doe","iat":1516239022}
Signature: (HMAC SHA256)

Using JWT:
GET /api/users
Headers:
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Postman:
Type: Bearer Token
Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}</pre>
                            </div>
                        </div>

                        {/* Digest Auth */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                Digest Authentication
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                More secure than Basic Auth. Uses MD5 hash of credentials with a server-provided nonce.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Digest Auth Example:

Request 1: Client requests resource
GET /api/users

Response 1: Server challenges with nonce
401 Unauthorized
WWW-Authenticate: Digest realm="API Realm", nonce="abc123", algorithm=MD5

Request 2: Client responds with hash
GET /api/users
Authorization: Digest username="user", realm="API Realm", nonce="abc123", uri="/api/users", response="hash_value"

Postman:
Type: Digest Auth
Username: username
Password: password`}</pre>
                            </div>
                        </div>

                        {/* API Key in Query */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 id="api-key-query-parameter" style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                API Key in Query Parameter
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                Some APIs require the API key to be passed as a query parameter instead of a header.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`API Key in Query Parameter Example:

GET /api/users?api_key=your-api-key-here
GET /api/users?key=your-api-key-here
GET /api/users?apikey=your-api-key-here

cURL Example:
curl "https://api.example.com/api/users?api_key=your-api-key-here"

Postman:
Add query parameter:
  Key: api_key
  Value: your-api-key-here`}</pre>
                            </div>
                        </div>
                    </div>

                    {/* Request Body */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            3. Request Body
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            The request body contains data sent to the server, typically used with POST, PUT, and PATCH methods. Common formats include JSON, XML, form-data, and URL-encoded.
                        </p>

                        {/* JSON Body */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                JSON Request Body
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                Most common format for REST APIs. Used for structured data.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`JSON Request Body Example:

POST /api/users
Headers:
  Content-Type: application/json
Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "role": "developer",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  },
  "skills": ["JavaScript", "Python", "React"]
}

PUT /api/users/123
Headers:
  Content-Type: application/json
Body:
{
  "id": 123,
  "name": "John Smith",
  "email": "john.smith@example.com",
  "age": 31
}

PATCH /api/users/123
Headers:
  Content-Type: application/json
Body:
{
  "email": "newemail@example.com"
}`}</pre>
                            </div>
                        </div>

                        {/* XML Body */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 id="xml-request-body" style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                XML Request Body
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                Used in SOAP APIs and some REST APIs. More verbose than JSON.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`XML Request Body Example:

POST /api/users
Headers:
  Content-Type: application/xml
Body:
<?xml version="1.0" encoding="UTF-8"?>
<user>
  <name>John Doe</name>
  <email>john@example.com</email>
  <age>30</age>
  <role>developer</role>
  <address>
    <street>123 Main St</street>
    <city>New York</city>
    <zipCode>10001</zipCode>
  </address>
</user>`}</pre>
                            </div>
                        </div>

                        {/* Form Data */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                Form-Data / Multipart Form Data
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                Used for file uploads and form submissions. Can include both text fields and files.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Form-Data Request Body Example:

POST /api/users/upload
Headers:
  Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
Body:
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="name"

John Doe
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="email"

john@example.com
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="avatar"; filename="photo.jpg"
Content-Type: image/jpeg

[binary file data]
------WebKitFormBoundary7MA4YWxkTrZu0gW--

Postman:
Body → form-data
Key: name, Value: John Doe
Key: email, Value: john@example.com
Key: avatar, Type: File, Value: [Select File]`}</pre>
                            </div>
                        </div>

                        {/* URL Encoded */}
                        <div style={{ marginBottom: '20px' }}>
                            <h5 id="url-encoded-request-body" style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                URL-Encoded (x-www-form-urlencoded)
                            </h5>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '10px'
                            }}>
                                Used for simple form submissions. Data is encoded like query parameters.
                            </p>
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '15px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '14px',
                                border: '1px solid #e0e0e0',
                                marginTop: '15px',
                                textAlign: 'left',
                                overflowX: 'auto'
                            }}>
                                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`URL-Encoded Request Body Example:

POST /api/users
Headers:
  Content-Type: application/x-www-form-urlencoded
Body:
name=John+Doe&email=john%40example.com&age=30&role=developer

Decoded:
name=John Doe
email=john@example.com
age=30
role=developer

Postman:
Body → x-www-form-urlencoded
Key: name, Value: John Doe
Key: email, Value: john@example.com
Key: age, Value: 30
Key: role, Value: developer`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HTTP Status Codes */}
                <div style={{ marginBottom: '30px' }}>
                    <div
                        onClick={() => setIsStatusCodesExpanded(!isStatusCodesExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: isStatusCodesExpanded ? '15px' : '0',
                            borderBottom: isStatusCodesExpanded ? '2px solid #00416A' : 'none',
                            transition: 'all 0.3s ease',
                            marginBottom: '15px'
                        }}
                        onMouseEnter={(e) => {
                            if (!isStatusCodesExpanded) {
                                e.currentTarget.style.backgroundColor = '#f0f7fa';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isStatusCodesExpanded) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: 0,
                            fontWeight: 'bold',
                            textAlign: 'left'
                        }}>
                            HTTP Status Codes
                        </h3>
                        <span style={{
                            fontSize: '28px',
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease'
                        }}>
                            {isStatusCodesExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isStatusCodesExpanded && (
                        <div>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '15px'
                            }}>
                                HTTP status codes are three-digit numbers returned by the server to indicate the result of a request. Understanding these codes is essential for API testing as they tell you whether a request succeeded, failed, or needs further action.
                            </p>

                    {/* 2xx Success Codes */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="2xx-success-codes" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            2xx Success Codes
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            These codes indicate that the request was successfully received, understood, and accepted.
                        </p>
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '20px',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            overflowX: 'auto'
                        }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '14px',
                                textAlign: 'left'
                            }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Code</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Name</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>200</td>
                                        <td style={{ padding: '12px' }}>OK</td>
                                        <td style={{ padding: '12px' }}>Request succeeded. The response body contains the requested resource.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>201</td>
                                        <td style={{ padding: '12px' }}>Created</td>
                                        <td style={{ padding: '12px' }}>Request succeeded and a new resource was created. Typically used for POST requests.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>202</td>
                                        <td style={{ padding: '12px' }}>Accepted</td>
                                        <td style={{ padding: '12px' }}>Request accepted for processing, but processing has not been completed.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>204</td>
                                        <td style={{ padding: '12px' }}>No Content</td>
                                        <td style={{ padding: '12px' }}>Request succeeded but there is no content to return. Commonly used for DELETE requests.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 3xx Redirection Codes */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="3xx-redirection-codes" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            3xx Redirection Codes
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            These codes indicate that further action needs to be taken to complete the request.
                        </p>
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '20px',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            overflowX: 'auto'
                        }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '14px',
                                textAlign: 'left'
                            }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Code</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Name</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>301</td>
                                        <td style={{ padding: '12px' }}>Moved Permanently</td>
                                        <td style={{ padding: '12px' }}>Resource has been permanently moved to a new URL.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>302</td>
                                        <td style={{ padding: '12px' }}>Found</td>
                                        <td style={{ padding: '12px' }}>Resource temporarily moved to a different URL.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>304</td>
                                        <td style={{ padding: '12px' }}>Not Modified</td>
                                        <td style={{ padding: '12px' }}>Resource has not been modified since the last request. Used for caching.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 4xx Client Error Codes */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            4xx Client Error Codes
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            These codes indicate that the client made an error in the request. The request should not be repeated without modification.
                        </p>
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '20px',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            overflowX: 'auto'
                        }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '14px',
                                textAlign: 'left'
                            }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Code</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Name</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>400</td>
                                        <td style={{ padding: '12px' }}>Bad Request</td>
                                        <td style={{ padding: '12px' }}>Request is malformed or invalid. Check request syntax, headers, and body.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>401</td>
                                        <td style={{ padding: '12px' }}>Unauthorized</td>
                                        <td style={{ padding: '12px' }}>Authentication required or authentication credentials are invalid.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>403</td>
                                        <td style={{ padding: '12px' }}>Forbidden</td>
                                        <td style={{ padding: '12px' }}>Server understood the request but refuses to authorize it. User lacks permissions.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>404</td>
                                        <td style={{ padding: '12px' }}>Not Found</td>
                                        <td style={{ padding: '12px' }}>Requested resource does not exist on the server.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>405</td>
                                        <td style={{ padding: '12px' }}>Method Not Allowed</td>
                                        <td style={{ padding: '12px' }}>HTTP method used is not allowed for this endpoint (e.g., using POST on a GET-only endpoint).</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>409</td>
                                        <td style={{ padding: '12px' }}>Conflict</td>
                                        <td style={{ padding: '12px' }}>Request conflicts with current state of the server (e.g., duplicate resource creation).</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>422</td>
                                        <td style={{ padding: '12px' }}>Unprocessable Entity</td>
                                        <td style={{ padding: '12px' }}>Request is well-formed but contains semantic errors or validation failures.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>429</td>
                                        <td style={{ padding: '12px' }}>Too Many Requests</td>
                                        <td style={{ padding: '12px' }}>Client has sent too many requests in a given amount of time (rate limiting).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 5xx Server Error Codes */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="5xx-server-error-codes" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            5xx Server Error Codes
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            These codes indicate that the server encountered an error and was unable to fulfill the request.
                        </p>
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '20px',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            overflowX: 'auto'
                        }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '14px',
                                textAlign: 'left'
                            }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Code</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Name</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>500</td>
                                        <td style={{ padding: '12px' }}>Internal Server Error</td>
                                        <td style={{ padding: '12px' }}>Generic server error. Something went wrong on the server side.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>501</td>
                                        <td style={{ padding: '12px' }}>Not Implemented</td>
                                        <td style={{ padding: '12px' }}>Server does not support the functionality required to fulfill the request.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>502</td>
                                        <td style={{ padding: '12px' }}>Bad Gateway</td>
                                        <td style={{ padding: '12px' }}>Server acting as gateway received an invalid response from upstream server.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>503</td>
                                        <td style={{ padding: '12px' }}>Service Unavailable</td>
                                        <td style={{ padding: '12px' }}>Server is temporarily unavailable (overloaded or under maintenance).</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>504</td>
                                        <td style={{ padding: '12px' }}>Gateway Timeout</td>
                                        <td style={{ padding: '12px' }}>Server acting as gateway did not receive a timely response from upstream server.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Status Code Usage Examples */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="common-status-code-examples" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            Common Status Code Usage Examples
                        </h4>
                        <div style={{
                            backgroundColor: '#ffffff',
                            padding: '20px',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            overflowX: 'auto'
                        }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '14px',
                                textAlign: 'left'
                            }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Scenario</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Request / Condition</th>
                                        <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Expected Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f0fdf4' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Success</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>GET /api/users/1</td>
                                        <td style={{ padding: '12px' }}>200 OK</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f0fdf4' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Success</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>POST /api/users</td>
                                        <td style={{ padding: '12px' }}>201 Created</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f0fdf4' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Success</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>PUT /api/users/1</td>
                                        <td style={{ padding: '12px' }}>200 OK</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f0fdf4' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Success</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>DELETE /api/users/1</td>
                                        <td style={{ padding: '12px' }}>204 No Content</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Client Error</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>GET /api/users/999 (not found)</td>
                                        <td style={{ padding: '12px' }}>404 Not Found</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Client Error</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>POST /api/users (invalid JSON)</td>
                                        <td style={{ padding: '12px' }}>400 Bad Request</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Client Error</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>GET /api/users (no auth)</td>
                                        <td style={{ padding: '12px' }}>401 Unauthorized</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Client Error</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>DELETE /api/users/1 (no permission)</td>
                                        <td style={{ padding: '12px' }}>403 Forbidden</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Client Error</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>POST /api/users (duplicate email)</td>
                                        <td style={{ padding: '12px' }}>409 Conflict</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Client Error</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>POST /api/users (validation error)</td>
                                        <td style={{ padding: '12px' }}>422 Unprocessable Entity</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Client Error</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>GET /api/users (rate limit exceeded)</td>
                                        <td style={{ padding: '12px' }}>429 Too Many Requests</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#fef2f2' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Server Error</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>GET /api/users (server failure)</td>
                                        <td style={{ padding: '12px' }}>500 Internal Server Error</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#fef2f2' }}>
                                        <td style={{ padding: '12px', fontWeight: '600' }}>Server Error</td>
                                        <td style={{ padding: '12px', fontFamily: 'monospace', fontSize: '13px' }}>GET /api/users (overload/maintenance)</td>
                                        <td style={{ padding: '12px' }}>503 Service Unavailable</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '13px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <strong style={{ color: '#00416A' }}>Postman test examples:</strong>
                            <pre style={{ margin: '10px 0 0 0', whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`pm.test("Status code is 200", function () { pm.response.to.have.status(200); });
pm.test("Status code is 201 Created", function () { pm.response.to.have.status(201); });
pm.test("Status code is 404 Not Found", function () { pm.response.to.have.status(404); });`}</pre>
                        </div>
                    </div>
                        </div>
                    )}
                </div>

                {/* What to Verify in API Testing */}
                <div style={{ marginBottom: '30px' }}>
                    <div
                        onClick={() => setIsVerifyExpanded(!isVerifyExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: isVerifyExpanded ? '15px' : '0',
                            borderBottom: isVerifyExpanded ? '2px solid #00416A' : 'none',
                            transition: 'all 0.3s ease',
                            marginBottom: '15px'
                        }}
                        onMouseEnter={(e) => {
                            if (!isVerifyExpanded) {
                                e.currentTarget.style.backgroundColor = '#f0f7fa';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isVerifyExpanded) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <h3 id="what-to-verify-api-testing" style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: 0,
                            fontWeight: 'bold',
                            textAlign: 'left'
                        }}>
                            What to Verify in API Testing
                        </h3>
                        <span style={{
                            fontSize: '28px',
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease'
                        }}>
                            {isVerifyExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isVerifyExpanded && (
                        <div>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333333',
                                textAlign: 'left',
                                marginBottom: '15px'
                            }}>
                                When testing APIs, you need to verify various aspects to ensure the API works correctly. Here's a comprehensive list of what to check:
                            </p>
                            <div style={{
                                backgroundColor: '#ffffff',
                                padding: '20px',
                                borderRadius: '8px',
                                border: '1px solid #e0e0e0',
                                marginBottom: '25px',
                                overflowX: 'auto'
                            }}>
                                <table style={{
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    fontSize: '14px',
                                    textAlign: 'left'
                                }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #00416A' }}>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>#</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Verification Area</th>
                                            <th style={{ padding: '12px', fontWeight: 'bold', color: '#00416A' }}>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>1</td>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>HTTP Status Code</td>
                                            <td style={{ padding: '12px' }}>Correct status code for success (2xx), client errors (4xx), server errors (5xx)</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>2</td>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>Response Body</td>
                                            <td style={{ padding: '12px' }}>Structure, data types, values, format (JSON/XML)</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>3</td>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>Response Headers</td>
                                            <td style={{ padding: '12px' }}>Content-Type, caching, security headers</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>4</td>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>Response Time</td>
                                            <td style={{ padding: '12px' }}>Response within acceptable latency</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>5</td>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>Data Validation</td>
                                            <td style={{ padding: '12px' }}>Schema, required fields, data types, constraints</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>6</td>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>Authentication & Authorization</td>
                                            <td style={{ padding: '12px' }}>Auth required, token validation, permission checks</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>7</td>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>Error Handling</td>
                                            <td style={{ padding: '12px' }}>Appropriate error codes and messages for invalid inputs</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>8</td>
                                            <td style={{ padding: '12px', fontWeight: '600' }}>Business Logic</td>
                                            <td style={{ padding: '12px' }}>Correct outcomes for workflows and business rules</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                    {/* Status Code Verification */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="http-status-code-verification" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            1. HTTP Status Code Verification
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Verify that the API returns the correct HTTP status code for different scenarios.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li><strong>2xx Success:</strong> 200 OK, 201 Created, 204 No Content</li>
                            <li><strong>4xx Client Error:</strong> 400 Bad Request, 401 Unauthorized, 404 Not Found, 422 Unprocessable Entity</li>
                            <li><strong>5xx Server Error:</strong> 500 Internal Server Error, 503 Service Unavailable</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Status Code Verification Examples:

Success Cases:
GET /api/users/1 → 200 OK
POST /api/users → 201 Created
PUT /api/users/1 → 200 OK
DELETE /api/users/1 → 204 No Content

Error Cases:
GET /api/users/999 → 404 Not Found
POST /api/users (invalid data) → 400 Bad Request
GET /api/users (no auth) → 401 Unauthorized
POST /api/users (duplicate email) → 422 Unprocessable Entity
GET /api/users (server error) → 500 Internal Server Error

Test Assertions:
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});`}</pre>
                        </div>
                    </div>

                    {/* Response Body Verification */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="response-body-verification" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            2. Response Body Verification
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Verify the response body structure, data types, values, and format.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Response structure matches expected schema</li>
                            <li>All required fields are present</li>
                            <li>Data types are correct (string, number, boolean, array, object)</li>
                            <li>Values match expected data</li>
                            <li>No unexpected fields</li>
                            <li>Response format (JSON, XML) is correct</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Response Body Verification Examples:

Expected Response:
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "active": true,
  "createdAt": "2024-01-15T10:30:00Z"
}

Test Assertions:
pm.test("Response has correct structure", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('name');
    pm.expect(jsonData).to.have.property('email');
});

pm.test("Data types are correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.id).to.be.a('number');
    pm.expect(jsonData.name).to.be.a('string');
    pm.expect(jsonData.active).to.be.a('boolean');
});

pm.test("Values match expected", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.id).to.eql(1);
    pm.expect(jsonData.name).to.eql("John Doe");
    pm.expect(jsonData.email).to.eql("john@example.com");
});`}</pre>
                        </div>
                    </div>

                    {/* Response Headers Verification */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            3. Response Headers Verification
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Verify that response headers contain expected values.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Content-Type header matches response format</li>
                            <li>Authorization headers (if applicable)</li>
                            <li>CORS headers (Access-Control-Allow-Origin)</li>
                            <li>Cache-Control headers</li>
                            <li>Custom headers</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Response Headers Verification Examples:

Expected Headers:
Content-Type: application/json
Content-Length: 156
Cache-Control: no-cache
Access-Control-Allow-Origin: *

Test Assertions:
pm.test("Content-Type is application/json", function () {
    pm.response.to.have.header("Content-Type");
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});

pm.test("CORS header is present", function () {
    pm.expect(pm.response.headers.has("Access-Control-Allow-Origin")).to.be.true;
});

pm.test("Cache-Control header exists", function () {
    pm.response.to.have.header("Cache-Control");
});`}</pre>
                        </div>
                    </div>

                    {/* Response Time Verification */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="response-time-verification" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            4. Response Time Verification
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Verify that API responses are returned within acceptable time limits.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Response time is within SLA (e.g., &lt; 200ms for simple requests)</li>
                            <li>Response time is acceptable for the operation type</li>
                            <li>No timeout errors</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Response Time Verification Examples:

Test Assertions:
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Response time is acceptable", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

// More realistic threshold
pm.test("Response time is reasonable", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});`}</pre>
                        </div>
                    </div>

                    {/* Data Validation */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            5. Data Validation
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Verify that data validation rules are enforced correctly.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Required fields are validated</li>
                            <li>Data format validation (email, phone, date)</li>
                            <li>Data range validation (min/max values)</li>
                            <li>Data length validation (string length limits)</li>
                            <li>Invalid data returns appropriate error messages</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Data Validation Verification Examples:

Invalid Request:
POST /api/users
Body:
{
  "name": "",
  "email": "invalid-email",
  "age": -5
}

Expected Response: 400 Bad Request
{
  "error": "Validation failed",
  "details": [
    "Name is required",
    "Email format is invalid",
    "Age must be a positive number"
  ]
}

Test Assertions:
pm.test("Invalid data returns 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Error message contains validation details", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('error');
    pm.expect(jsonData).to.have.property('details');
    pm.expect(jsonData.details).to.be.an('array');
});`}</pre>
                        </div>
                    </div>

                    {/* Authentication & Authorization */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="authentication-authorization-verification" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            6. Authentication & Authorization Verification
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Verify that authentication and authorization work correctly.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Valid credentials allow access</li>
                            <li>Invalid credentials are rejected (401 Unauthorized)</li>
                            <li>Missing authentication returns 401</li>
                            <li>Expired tokens are rejected</li>
                            <li>User permissions are enforced correctly</li>
                            <li>Role-based access control works</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Authentication & Authorization Verification Examples:

Test Case 1: Valid Token
GET /api/users
Headers:
  Authorization: Bearer valid_token

Expected: 200 OK

Test Case 2: Invalid Token
GET /api/users
Headers:
  Authorization: Bearer invalid_token

Expected: 401 Unauthorized
{
  "error": "Invalid token"
}

Test Case 3: No Token
GET /api/users

Expected: 401 Unauthorized
{
  "error": "Authentication required"
}

Test Assertions:
pm.test("Valid token allows access", function () {
    pm.response.to.have.status(200);
});

pm.test("Invalid token returns 401", function () {
    pm.response.to.have.status(401);
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('error');
});`}</pre>
                        </div>
                    </div>

                    {/* Error Handling */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            7. Error Handling Verification
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Verify that error responses are handled correctly and provide useful information.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>Error messages are clear and descriptive</li>
                            <li>Error codes are appropriate</li>
                            <li>Error response structure is consistent</li>
                            <li>No sensitive information leaked in errors</li>
                            <li>Proper error handling for edge cases</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Error Handling Verification Examples:

404 Not Found:
GET /api/users/999
Response: 404 Not Found
{
  "error": "User not found",
  "message": "The requested user with ID 999 does not exist"
}

400 Bad Request:
POST /api/users
Body: { invalid json }
Response: 400 Bad Request
{
  "error": "Bad Request",
  "message": "Invalid JSON format"
}

500 Internal Server Error:
GET /api/users
Response: 500 Internal Server Error
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred"
}

Test Assertions:
pm.test("404 returns proper error structure", function () {
    pm.response.to.have.status(404);
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('error');
    pm.expect(jsonData).to.have.property('message');
});`}</pre>
                        </div>
                    </div>

                    {/* Business Logic Verification */}
                    <div style={{ marginBottom: '25px' }}>
                        <h4 id="business-logic-verification" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '12px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            8. Business Logic Verification
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '10px'
                        }}>
                            Verify that business rules and logic are implemented correctly.
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            <li>CRUD operations work correctly</li>
                            <li>Data relationships are maintained</li>
                            <li>Business rules are enforced</li>
                            <li>Calculations are accurate</li>
                            <li>State transitions are correct</li>
                        </ul>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #e0e0e0',
                            marginTop: '15px',
                            textAlign: 'left',
                            overflowX: 'auto'
                        }}>
                            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Business Logic Verification Examples:

Create User:
POST /api/users
Body: { "name": "John", "email": "john@example.com" }
Response: 201 Created
{ "id": 1, "name": "John", "email": "john@example.com" }

Verify User Created:
GET /api/users/1
Response: 200 OK
{ "id": 1, "name": "John", "email": "john@example.com" }

Update User:
PUT /api/users/1
Body: { "name": "John Doe" }
Response: 200 OK
{ "id": 1, "name": "John Doe", "email": "john@example.com" }

Delete User:
DELETE /api/users/1
Response: 204 No Content

Verify User Deleted:
GET /api/users/1
Response: 404 Not Found

Test Assertions:
pm.test("User can be created", function () {
    pm.response.to.have.status(201);
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('id');
});

pm.test("Created user can be retrieved", function () {
    pm.response.to.have.status(200);
    var jsonData = pm.response.json();
    pm.expect(jsonData.id).to.eql(1);
});`}</pre>
                        </div>
                    </div>
                        </div>
                    )}
                </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Introduction to Postman Section */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <div
                        onClick={() => setIsPostmanIntroExpanded(!isPostmanIntroExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: isPostmanIntroExpanded ? '15px' : '0',
                            borderBottom: isPostmanIntroExpanded ? '2px solid #00416A' : 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            if (!isPostmanIntroExpanded) {
                                e.currentTarget.style.backgroundColor = '#f0f7fa';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isPostmanIntroExpanded) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <h2 id="introduction-to-postman" style={{
                            ...leftAlignStyles.sectionHeading,
                            marginBottom: 0,
                            color: '#00416A'
                        }}>
                            Introduction to Postman
                        </h2>
                        <span style={{
                            fontSize: '32px',
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease'
                        }}>
                            {isPostmanIntroExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isPostmanIntroExpanded && (
                        <div style={{ marginTop: '25px' }}>
                <p style={leftAlignStyles.paragraph}>
                    Postman is a powerful API platform used by developers and QA engineers to design, test, and document APIs. It provides a user-friendly interface for making HTTP requests, organizing API collections, and automating API testing workflows.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What is Postman?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Postman is an API platform for building and testing APIs</li>
                    <li>Postman supports REST, SOAP, GraphQL, and other API protocols</li>
                    <li>Postman provides a user-friendly GUI for API testing</li>
                    <li>Postman enables team collaboration and API documentation</li>
                    <li>Postman includes Newman CLI for command-line testing and CI/CD integration</li>
                </ul>

                <h3 id="what-can-postman-do" style={leftAlignStyles.sectionHeadingWithMargin}>
                    What Can Postman Do?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>REST and SOAP API testing</li>
                    <li>Request/Response inspection and debugging</li>
                    <li>Collection management and organization</li>
                    <li>Environment variables for different configurations</li>
                    <li>Automated testing with test scripts</li>
                    <li>API documentation generation</li>
                    <li>Team collaboration and sharing</li>
                    <li>Newman CLI for CI/CD integration</li>
                    <li>Mock servers for API development</li>
                    <li>API monitoring and performance testing</li>
                </ul>

                {/* Installation Guides */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '30px',
                    marginBottom: '40px',
                    marginTop: '30px'
                }}>
                {/* Mac Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 id="postman-install-mac" style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Postman Install for Mac (including Newman)
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 id="mac-step-1-download" style={{
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
                        <h5 id="mac-step-2-install" style={{
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
                        <h5 id="mac-step-3-newman" style={{
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
                            <li>Ensure Node.js is installed (see Installation tab)</li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g newman</code></li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 id="mac-step-4-verify" style={{
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

                {/* Windows Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 id="postman-install-windows" style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Postman Install for Windows (including Newman)
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 id="windows-step-1-download" style={{
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
                        <h5 id="windows-step-2-install" style={{
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
                        <h5 id="windows-step-3-newman" style={{
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
                            <li>Ensure Node.js is installed (see Installation tab)</li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g newman</code></li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 id="windows-step-4-verify" style={{
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
                        </div>
                    )}
                </div>
            </div>

            {/* Getting Started Section */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <div
                        onClick={() => setIsFirstRequestExpanded(!isFirstRequestExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: isFirstRequestExpanded ? '15px' : '0',
                            borderBottom: isFirstRequestExpanded ? '2px solid #00416A' : 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            if (!isFirstRequestExpanded) {
                                e.currentTarget.style.backgroundColor = '#f0f7fa';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isFirstRequestExpanded) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <h2 style={{
                            ...leftAlignStyles.sectionHeading,
                            marginBottom: 0,
                            color: '#00416A'
                        }}>
                            Getting Started: Creating Your First Request
                        </h2>
                        <span style={{
                            fontSize: '32px',
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease'
                        }}>
                            {isFirstRequestExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isFirstRequestExpanded && (
                        <div style={{ marginTop: '25px' }}>
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
                        Step 1: Launch Postman and Create Request
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li>Launch Postman from Applications (Mac) or Start Menu (Windows)</li>
                        <li>Click <strong>"New"</strong> button → Select <strong>"HTTP Request"</strong></li>
                        <li>A new request tab will open with method dropdown and URL field</li>
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
                    <h3 id="step-2-understanding-interface" style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 2: Understanding the Interface
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><strong>Method:</strong> Dropdown to select HTTP method (GET, POST, PUT, DELETE, etc.)</li>
                        <li><strong>URL:</strong> Enter the API endpoint URL</li>
                        <li><strong>Params:</strong> Query parameters (for GET requests)</li>
                        <li><strong>Headers:</strong> HTTP headers (Authorization, Content-Type, etc.)</li>
                        <li><strong>Body:</strong> Request body (for POST, PUT, PATCH requests)</li>
                        <li><strong>Send:</strong> Button to execute the request</li>
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
                        Step 3: Create Collections and Environments
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><strong>Collections:</strong> Organize related requests (Click "New" → "Collection")</li>
                        <li><strong>Environments:</strong> Manage variables for different environments (Click gear icon → "Add")</li>
                        <li>Use variables like <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px' }}>{`{{baseUrl}}`}</code> in URLs</li>
                    </ul>
                </div>
                        </div>
                    )}
                </div>
            </div>

            {/* REST API Examples */}
            <div style={leftAlignStyles.mainContent}>
                <h2 id="rest-api-examples" style={leftAlignStyles.sectionHeading}>
                    REST API Examples
                </h2>
                
                {/* GET Request */}
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
                        GET Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Retrieve data from an API endpoint.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: GET
URL: https://jsonplaceholder.typicode.com/users/1

Headers:
  Accept: application/json

Response:
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz"
}`}</pre>
                    </div>
                </div>

                {/* POST Request */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 id="post-request-example" style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        POST Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create a new resource.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: POST
URL: https://jsonplaceholder.typicode.com/posts

Headers:
  Content-Type: application/json

Body (raw JSON):
{
  "title": "My Post",
  "body": "This is the content",
  "userId": 1
}

Response:
{
  "id": 101,
  "title": "My Post",
  "body": "This is the content",
  "userId": 1
}`}</pre>
                    </div>
                </div>

                {/* PUT Request */}
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
                        PUT Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Update an entire resource.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: PUT
URL: https://jsonplaceholder.typicode.com/posts/1

Headers:
  Content-Type: application/json

Body (raw JSON):
{
  "id": 1,
  "title": "Updated Title",
  "body": "Updated content",
  "userId": 1
}`}</pre>
                    </div>
                </div>

                {/* PATCH Request */}
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
                        PATCH Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Partially update a resource.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: PATCH
URL: https://jsonplaceholder.typicode.com/posts/1

Headers:
  Content-Type: application/json

Body (raw JSON):
{
  "title": "Partially Updated Title"
}`}</pre>
                    </div>
                </div>

                {/* DELETE Request */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 id="delete-request-example" style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        DELETE Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Delete a resource. <strong>Warning:</strong> This action is permanent.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: DELETE
URL: https://jsonplaceholder.typicode.com/posts/1

Headers:
  Accept: application/json

Response:
{}`}</pre>
                    </div>
                </div>
            </div>

            {/* SOAP API Example */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    SOAP API Example
                </h2>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 id="soap-request-example" style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        SOAP Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Testing SOAP APIs requires XML format and specific headers.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: POST
URL: http://www.dneonline.com/calculator.asmx

Headers:
  Content-Type: text/xml; charset=utf-8
  SOAPAction: http://tempuri.org/Add

Body (raw XML):
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Add xmlns="http://tempuri.org/">
      <intA>10</intA>
      <intB>20</intB>
    </Add>
  </soap:Body>
</soap:Envelope>

Alternative: Import WSDL
1. Click "Import" button
2. Select "WSDL" tab
3. Enter WSDL URL or upload file
4. Postman will generate requests automatically`}</pre>
                    </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                    justifyContent: 'center',
                    marginBottom: '40px',
                    marginTop: '30px'
                }}>
                <a 
                    href="https://www.postman.com/" 
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
                    Postman Official Website
                </a>
                <a 
                    href="https://learning.postman.com/docs/getting-started/introduction/" 
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
                    Postman Learning Center
                </a>
                <a 
                    href="https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/" 
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
                    Newman CLI Documentation
                </a>
                <a 
                    href="https://learning.postman.com/docs/writing-scripts/test-scripts/" 
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
                    Test Scripts Guide
                </a>
                </div>

            {/* Newman Integration */}
            <div style={leftAlignStyles.mainContent}>
                <h2 id="newman-integration" style={{
                    ...leftAlignStyles.sectionHeading,
                    color: '#00416A',
                    marginBottom: '20px'
                }}>
                    Newman Integration
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.8',
                    color: '#333333',
                    textAlign: 'left',
                    marginBottom: '24px'
                }}>
                    <strong>Newman</strong> is the command-line collection runner for Postman. It lets you run Postman collections from the terminal, integrate API tests into CI/CD pipelines, and generate reports without opening the Postman app.
                </p>

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
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Installing Newman
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Install Newman globally via npm (Node.js required):
                    </p>
                    <div style={{
                        backgroundColor: '#1e293b',
                        padding: '16px 20px',
                        borderRadius: '8px',
                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", Consolas, monospace',
                        fontSize: '14px',
                        color: '#e2e8f0',
                        overflowX: 'auto',
                        marginBottom: '20px'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Install Newman globally
npm install -g newman

# Verify installation
newman --version`}</pre>
                    </div>

                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Exporting a Collection from Postman
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        In Postman: Collection → ⋮ (three dots) → Export → choose Collection v2.1 → Save as JSON (e.g. <code style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>my-api-tests.json</code>).
                    </p>

                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Running a Collection with Newman
                    </h3>
                    <div style={{
                        backgroundColor: '#1e293b',
                        padding: '16px 20px',
                        borderRadius: '8px',
                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", Consolas, monospace',
                        fontSize: '14px',
                        color: '#e2e8f0',
                        overflowX: 'auto',
                        marginBottom: '20px'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# Basic run (collection file only)
newman run my-api-tests.json

# With environment variables
newman run my-api-tests.json -e environment.json

# With global variables
newman run my-api-tests.json -g globals.json

# Report options: CLI (default), JSON, HTML, JUnit
newman run my-api-tests.json --reporters cli,json --reporter-json-export report.json

# HTML report
newman run my-api-tests.json --reporters cli,htmlextra --reporter-htmlextra-export newman-report.html

# Fail the run on first test failure (useful for CI)
newman run my-api-tests.json --bail`}</pre>
                    </div>

                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Example: Full Newman Run with Report
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
                        Example command and typical CLI output:
                    </p>
                    <div style={{
                        backgroundColor: '#1e293b',
                        padding: '16px 20px',
                        borderRadius: '8px',
                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", Consolas, monospace',
                        fontSize: '13px',
                        color: '#e2e8f0',
                        overflowX: 'auto',
                        marginBottom: '20px',
                        lineHeight: '1.6'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`$ newman run User-API-Tests.json -e dev-environment.json --reporters cli,html --reporter-html-export newman-report.html

Newman

User-API-Tests

  GET Get User by ID
    ✓ Status code is 200
    ✓ Response has user id and name
  GET Get All Users
    ✓ Status code is 200
    ✓ Response is an array
  POST Create User
    ✓ Status code is 201
    ✓ Response contains created user id
  PUT Update User
    ✓ Status code is 200
  DELETE Delete User
    ✓ Status code is 204

  ┌─────────────────────────┬────────────────────┬───────────────────┐
  │                         │           executed │            failed │
  ├─────────────────────────┼────────────────────┼───────────────────┤
  │              iterations │                  1 │                 0 │
  ├─────────────────────────┼────────────────────┼───────────────────┤
  │                requests │                  5 │                 0 │
  ├─────────────────────────┼────────────────────┼───────────────────┤
  │            test-scripts │                 10 │                 0 │
  ├─────────────────────────┼────────────────────┼───────────────────┤
  │      prerequest-scripts │                  0 │                 0 │
  ├─────────────────────────┼────────────────────┼───────────────────┤
  │              assertions │                 10 │                 0 │
  └─────────────────────────┴────────────────────┴───────────────────┘`}</pre>
                    </div>

                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        CI/CD Integration Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '12px',
                        textAlign: 'left'
                    }}>
                        Run Newman in GitHub Actions, Jenkins, or any CI; use <code style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>--bail</code> so the job fails on the first test failure:
                    </p>
                    <div style={{
                        backgroundColor: '#1e293b',
                        padding: '16px 20px',
                        borderRadius: '8px',
                        fontFamily: '"SF Mono", Monaco, "Cascadia Code", Consolas, monospace',
                        fontSize: '13px',
                        color: '#e2e8f0',
                        overflowX: 'auto',
                        marginBottom: '15px',
                        lineHeight: '1.6'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`# GitHub Actions example (snippet)
- name: Run API tests with Newman
  run: |
    npm install -g newman
    newman run postman/collections/api-tests.json \\
      -e postman/environments/ci.json \\
      --reporters cli,junit \\
      --reporter-junit-export results.xml \\
      --bail`}</pre>
                    </div>
                    <p style={{
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#64748b',
                        textAlign: 'left',
                        marginBottom: '24px'
                    }}>
                        Store collection and environment JSON in the repo or fetch from Postman API. Use <code style={{ backgroundColor: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>newman run &lt;collection&gt; -e &lt;env&gt; --bail</code> so the pipeline fails when any assertion fails.
                    </p>

                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: '600',
                        textAlign: 'left'
                    }}>
                        Newman Resources
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '16px',
                        textAlign: 'left'
                    }}>
                        Official docs, npm package, reporters, and run-from-API options:
                    </p>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <a
                            href="https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 18px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#00416A',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Newman CLI docs (Postman)
                        </a>
                        <a
                            href="https://www.npmjs.com/package/newman"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 18px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#00416A',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Newman on npm
                        </a>
                        <a
                            href="https://github.com/postmanlabs/newman"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 18px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#00416A',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Newman (GitHub)
                        </a>
                        <a
                            href="https://www.npmjs.com/package/newman-reporter-htmlextra"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 18px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#00416A',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Newman HTML Extra reporter
                        </a>
                        <a
                            href="https://learning.postman.com/docs/developer/intro-api/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '10px 18px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#ffffff',
                                backgroundColor: '#00416A',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Postman API (run via API)
                        </a>
                    </div>
                </div>
            </div>

                {/* Additional Resources */}
                <div style={{
                    marginTop: '40px',
                    padding: '30px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '12px',
                    borderLeft: '4px solid #00416A'
                }}>
                    <h3 id="additional-resources" style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '25px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Additional Resources
                    </h3>

                    {/* Free API Endpoints Section */}
                    <div style={{ marginBottom: '30px' }}>
                        <h4 id="free-api-endpoints" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            Free API Endpoints for Testing
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            Use these free APIs to practice API testing without setting up your own backend:
                        </p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '15px',
                            justifyContent: 'flex-start'
                        }}>
                            <a 
                                href="https://jsonplaceholder.typicode.com/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSONPlaceholder
                            </a>
                            <a 
                                href="https://reqres.in/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                ReqRes
                            </a>
                            <a 
                                href="https://httpbin.org/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                HTTPBin
                            </a>
                            <a 
                                href="https://dummyjson.com/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                DummyJSON
                            </a>
                            <a 
                                href="https://fakestoreapi.com/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                FakeStore API
                            </a>
                            <a 
                                href="https://api.github.com/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                GitHub API
                            </a>
                            <a 
                                href="https://restcountries.com/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                REST Countries
                            </a>
                            <a 
                                href="https://dog.ceo/dog-api/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                Dog API
                            </a>
                        </div>
                    </div>

                    {/* JSON Validation Section */}
                    <div style={{ marginBottom: '30px' }}>
                        <h4 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            JSON Validation Tools
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            Validate and format JSON data to ensure proper syntax and structure:
                        </p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '15px',
                            justifyContent: 'flex-start'
                        }}>
                            <a 
                                href="https://jsonlint.com/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSONLint
                            </a>
                            <a 
                                href="https://jsonformatter.org/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSON Formatter
                            </a>
                            <a 
                                href="https://jsonformatter.curiousconcept.com/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSON Formatter & Validator
                            </a>
                            <a 
                                href="https://codebeautify.org/jsonvalidator" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                Code Beautify JSON Validator
                            </a>
                            <a 
                                href="https://jsoneditoronline.org/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSON Editor Online
                            </a>
                        </div>
                    </div>

                    {/* JSON Schema Validation Section */}
                    <div style={{ marginBottom: '30px' }}>
                        <h4 id="json-schema-validation-tools" style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: '600',
                            textAlign: 'left'
                        }}>
                            JSON Schema Validation Tools
                        </h4>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333333',
                            textAlign: 'left',
                            marginBottom: '15px'
                        }}>
                            Validate JSON data against JSON Schema to ensure it matches expected structure and constraints:
                        </p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '15px',
                            justifyContent: 'flex-start'
                        }}>
                            <a 
                                href="https://www.jsonschemavalidator.net/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSON Schema Validator
                            </a>
                            <a 
                                href="https://jsonschemalint.com/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSON Schema Lint
                            </a>
                            <a 
                                href="https://json-schema-validator.herokuapp.com/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSON Schema Validator (Heroku)
                            </a>
                            <a 
                                href="https://jsonschema.dev/" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSON Schema Validator (Dev)
                            </a>
                            <a 
                                href="https://json-schema.org/implementations" 
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
                                    borderRadius: '6px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
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
                                JSON Schema Validators List
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section style={{ marginTop: '40px' }}>
            </section>
        </div>
        </>
    )
}

export default ApiTest;
