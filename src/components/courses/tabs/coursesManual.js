import React from 'react';
import link from '../../../utilities/links.json';
import courseOutline from '../../../images/CourseOutline.png';
import { getImageSrc } from '../../../utils/getImageSrc';
const coursesManual = () => {
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
                    Manual Testing Course Outline
                </h1>
                <p style={{
                    fontSize: '20px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Master the fundamentals of manual testing and build a strong foundation in QA
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
                            Manual Testing Program
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
                                Our comprehensive Manual Testing program is designed to equip you with the essential skills and knowledge needed to excel in software quality assurance. Whether you're a beginner or looking to strengthen your testing fundamentals, this course covers all aspects of manual testing methodologies, modern tools, and cutting-edge AI integration for intelligent test design and execution.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                You'll master <strong style={{ color: '#00416A' }}>Software Testing Life Cycle (STLC)</strong>, test case design and execution, bug life cycle and defect management, and work effectively with industry-standard tools including <strong style={{ color: '#00416A' }}>JIRA, TestRail, Postman</strong> for API testing, and <strong style={{ color: '#00416A' }}>SQL</strong> for database testing. Our curriculum also integrates cutting-edge AI technologies including <strong style={{ color: '#00416A' }}>OpenAI GPT, Anthropic Claude, and Microsoft Copilot</strong> for AI-assisted test case generation, intelligent bug analysis, and automated test documentation.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our hands-on, project-based approach ensures you gain practical experience testing real-world applications across different platforms—from web and mobile applications to APIs and databases. You'll complete portfolio-ready projects that demonstrate your mastery of manual testing methodologies, tools, and AI-enhanced testing capabilities.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Join our Manual Testing program and start your journey towards becoming a skilled QA professional! Our comprehensive curriculum prepares you for roles as Manual QA Tester, QA Analyst, Test Engineer, and AI-Enhanced QA Specialist.
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
                            Return on Investment (ROI) for Manual Testing
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
                                Manual testing remains the foundation of quality assurance and is essential for understanding software behavior, user experience, and business requirements. While automation testing is growing, manual testing skills are still in high demand, especially for exploratory testing, usability testing, and complex business logic validation.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our comprehensive Manual Testing program prepares you for immediate entry into QA roles with practical, hands-on experience in industry-standard tools and methodologies. Graduates typically see a <strong style={{ color: '#00416A' }}>200-350% return on investment</strong> within the first year, with manual QA testers earning competitive salaries and having clear pathways to automation and senior QA roles.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Whether you're looking to start a career in QA, transition from another field, or enhance your testing skills with AI integration, this program provides the foundation for long-term success in the quality assurance industry.
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
                            Manual Testing Program Curriculum
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
                                        }}>Testing Fundamentals</div>
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
                                        }}>Test Design & Execution</div>
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
                                        }}>Bug Life Cycle & Defects</div>
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
                                        }}>Testing Types & Techniques</div>
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
                                        }}>Tools & Test Management</div>
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
                                        }}>API & Advanced Topics</div>
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
                                            }}>AI-Assisted Test Case Generation</div>
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
                                            }}>AI-Powered Bug Analysis</div>
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
                                            }}>AI Test Strategy & Documentation</div>
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
                                            }}>AI-Enhanced API Testing</div>
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
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💰 Entry-Level Opportunities</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Manual QA testers earn $45K-70K, with clear paths to senior roles</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💼 Career Foundation</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Essential foundation for advancing to automation, SDET, and QA lead roles</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🚀 Career Growth</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Fast-track to QA Analyst, Test Lead, or QA Manager positions</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🌐 High Demand</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Manual testing skills are essential and in constant demand across all industries</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💡 AI Specialization</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Become an AI-enhanced QA specialist with cutting-edge testing skills</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📈 Long-term ROI</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Potential lifetime earnings of $2M-4M+ in QA careers, with pathways to $100K+ roles</div>
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
                                        <strong style={{ color: '#00416A' }}>Progressive Learning:</strong> Build from testing fundamentals to advanced manual testing techniques, with AI integration throughout the entire curriculum
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 1: Testing Fundamentals & STLC */}
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
                                Module 1: Testing Fundamentals & Software Testing Life Cycle (STLC)
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Introduction to Software Testing:</strong> Testing principles, objectives, importance, testing vs. debugging
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Software Development Life Cycle (SDLC):</strong> Waterfall, Agile, DevOps, testing in different methodologies
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Software Testing Life Cycle (STLC):</strong> Requirement analysis, test planning, test case development, test execution, defect reporting, test closure
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Testing Levels:</strong> Unit testing, integration testing, system testing, acceptance testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Analyze requirements, create test plans, understand STLC phases
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Assisted Learning:</strong> Using GPT, Copilot, and Claude for test planning, requirement analysis, and STLC documentation
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
                                        Understand software testing fundamentals and principles
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Master the Software Testing Life Cycle (STLC) phases
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create comprehensive test plans and test strategies
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use AI tools to enhance test planning and documentation
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
                                        <strong>AI Test Planning:</strong> Using GPT, Claude, and Copilot to generate test plans and strategies
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Requirement Analysis:</strong> Leveraging AI to analyze requirements and identify test scenarios
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
                                        <strong>Junior QA Tester:</strong> Entry-level positions ($45-60K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Test Planning Services:</strong> Create test plans for clients ($500-2,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 2: Test Design & Execution */}
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
                                Module 2: Test Case Design & Execution
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Case Design Techniques:</strong> Equivalence partitioning, boundary value analysis, decision tables, state transition
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Case Writing:</strong> Test case format, test data preparation, positive and negative test cases
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Execution:</strong> Test execution process, test results documentation, pass/fail criteria
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Traceability Matrix:</strong> Requirements traceability, test coverage analysis
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Design and execute comprehensive test cases for real applications
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Test Case Generation:</strong> Using AI to generate test cases, optimize test coverage, and create test data
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
                                        Design comprehensive test cases using various design techniques
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Execute test cases systematically and document results accurately
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create traceability matrices and analyze test coverage
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI to generate and optimize test cases efficiently
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
                                        <strong>AI Test Case Generation:</strong> Generate test cases using GPT, Claude, and Copilot
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Test Data Creation:</strong> Use AI to generate test data and test scenarios
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
                                        <strong>QA Tester:</strong> Work as manual QA tester ($50-70K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Test Case Design:</strong> Create test cases for clients ($1,000-3,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 3: Bug Life Cycle & Defect Management */}
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
                                Module 3: Bug Life Cycle & Defect Management
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Defect/Bug Fundamentals:</strong> What is a defect, defect vs. error vs. failure, defect categories
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Bug Life Cycle:</strong> New, assigned, open, fixed, retest, verified, closed, rejected, deferred
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Bug Reporting:</strong> Bug report format, severity vs. priority, bug tracking best practices
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Defect Management:</strong> Defect triage, defect metrics, defect analysis and reporting
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Identify, report, and track bugs through complete life cycle
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Powered Bug Analysis:</strong> Using AI to analyze bugs, suggest severity/priority, and generate bug reports
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
                                        Understand bug life cycle and defect management processes
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Write clear, detailed, and effective bug reports
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Track and manage defects through complete life cycle
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use AI to enhance bug analysis and reporting efficiency
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
                                        <strong>AI Bug Analysis:</strong> Use AI to analyze bugs, suggest severity and priority levels
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Bug Report Generation:</strong> Generate comprehensive bug reports using GPT, Claude, and Copilot
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
                                        <strong>QA Analyst:</strong> Work as QA analyst ($55-75K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Bug Triage Specialist:</strong> Specialize in defect management ($60-80K annually)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 4: Testing Types & Techniques */}
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
                                Module 4: Testing Types & Techniques
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Functional Testing:</strong> Unit, integration, system, acceptance testing, smoke, sanity, regression
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Non-Functional Testing:</strong> Performance, usability, security, compatibility, accessibility testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Black Box Testing:</strong> Equivalence partitioning, boundary value analysis, decision tables, state transition
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>White Box Testing:</strong> Code coverage, statement coverage, branch coverage, path coverage
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Exploratory Testing:</strong> Session-based testing, charter-based testing, ad-hoc testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Apply different testing types and techniques to real applications
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Test Strategy:</strong> Using AI to develop comprehensive test strategies, identify test types, and optimize test coverage
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
                                        Understand and apply various testing types and techniques
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Perform functional and non-functional testing effectively
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Apply black box and white box testing techniques
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI to develop comprehensive test strategies
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
                                        <strong>AI Test Strategy:</strong> Develop comprehensive test strategies using AI tools
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Test Coverage Analysis:</strong> Use AI to analyze and optimize test coverage
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
                                        <strong>Test Engineer:</strong> Work as test engineer ($60-85K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Testing Consultant:</strong> Provide testing consulting ($40-70/hour)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 5: Tools & Test Management */}
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
                                Module 5: Test Management Tools & Practices
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>JIRA:</strong> Project setup, issue tracking, test case management, defect tracking, dashboards, reports
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>TestRail:</strong> Test case management, test execution, test reporting, test metrics
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Agile & Scrum:</strong> Sprint planning, daily standups, sprint review, retrospective, testing in Agile
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>SQL for Testing:</strong> Database testing basics, SQL queries for data validation, data integrity testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Metrics & Reporting:</strong> Test coverage, defect density, test execution metrics, status reporting
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Manage test cases and defects using JIRA and TestRail
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Test Documentation:</strong> Using AI to generate test documentation, create test reports, and analyze test metrics
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
                                        Master JIRA and TestRail for test and defect management
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Work effectively in Agile/Scrum environments
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use SQL for database testing and data validation
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Generate test metrics and reports using AI-enhanced tools
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
                                        <strong>AI Test Documentation:</strong> Generate test documentation and reports using AI
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Metrics Analysis:</strong> Use AI to analyze test metrics and generate insights
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
                                        <strong>QA Analyst:</strong> Work as QA analyst with tool expertise ($60-85K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Test Lead:</strong> Advance to test lead role ($75-100K annually)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 6: API Manual Testing & Advanced Topics */}
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
                                Module 6: API Manual Testing & Advanced Topics
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Testing Fundamentals:</strong> REST API concepts, HTTP methods, status codes, request/response
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Postman for API Testing:</strong> API requests, collections, environments, test scripts, assertions
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Test Scenarios:</strong> Positive and negative testing, boundary testing, error handling, authentication
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Database Testing:</strong> SQL queries, data validation, data integrity, performance testing basics
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Capstone Project:</strong> Complete end-to-end manual testing project with all learned concepts
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Enhanced API Testing:</strong> Using AI to generate API test scenarios, validate responses, and optimize API testing strategies
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
                                        Perform comprehensive API testing using Postman
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Execute database testing and data validation using SQL
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Complete end-to-end manual testing projects demonstrating mastery
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI for intelligent API testing and test optimization
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
                                        <strong>AI API Test Generation:</strong> Generate API test scenarios using GPT, Claude, and Copilot
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
                                        <strong>API Test Engineer:</strong> Specialize in API testing ($65-90K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Senior QA Analyst:</strong> Advance to senior QA roles ($75-100K annually)
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
                                    Testing Fundamentals
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Software Testing Life Cycle (STLC)
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Test Planning & Strategy
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Test Case Design & Execution
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Bug Life Cycle & Reporting
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
                                    Testing Types & Techniques
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Functional & Non-Functional Testing
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Black Box & White Box Testing
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Regression & Smoke Testing
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Integration & System Testing
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
                                    Tools & Practices
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Test Management Tools (JIRA, TestRail)
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Defect Tracking & Management
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Agile & Scrum Methodologies
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        API Testing with Postman
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        AI-Enhanced Testing
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
                            Ready to Start Your QA Career?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            marginBottom: '30px',
                            opacity: '0.9'
                        }}>
                            Join our comprehensive Manual Testing program and build the foundation you need for a successful QA career.
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
export default coursesManual;
