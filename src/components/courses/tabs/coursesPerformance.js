import React from 'react';
import link from '../../../utilities/links.json';

const coursesPerformance = () => {
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
                    Performance Test Engineer Course Outline
                </h1>
                <p style={{
                    fontSize: '20px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Master performance testing tools and methodologies to ensure optimal application performance
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
                            Performance Testing Program
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
                                Our comprehensive Performance Testing & Optimization program is designed to equip you with the skills needed to identify, analyze, and resolve performance bottlenecks in web applications, APIs, and mobile applications. Whether you're a QA professional, developer, or DevOps engineer, this course covers industry-leading performance testing tools and methodologies used by top technology companies.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                You'll master powerful performance testing tools including <strong style={{ color: '#00416A' }}>Chrome DevTools Lighthouse</strong>, <strong style={{ color: '#00416A' }}>Apache JMeter</strong>, <strong style={{ color: '#00416A' }}>BlazeMeter</strong>, and <strong style={{ color: '#00416A' }}>Postman</strong> for comprehensive performance analysis. Our curriculum also integrates cutting-edge AI technologies including <strong style={{ color: '#00416A' }}>OpenAI GPT, Anthropic Claude, and Microsoft Copilot</strong> for AI-assisted performance analysis, intelligent bottleneck identification, and automated performance optimization recommendations.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our hands-on, project-based approach ensures you gain practical experience in load testing, stress testing, spike testing, performance monitoring, and optimization. You'll complete portfolio-ready projects that demonstrate your mastery of performance testing tools, methodologies, and AI-enhanced analysis capabilities.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Join our Performance Testing & Optimization program and become an expert in ensuring optimal application performance! Our comprehensive curriculum prepares you for roles as Performance Test Engineer, Performance Analyst, DevOps Performance Specialist, and AI-Enhanced Performance Engineer.
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
                            Return on Investment (ROI) for Performance Testing
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
                                Performance testing is critical for modern applications as user expectations for speed and responsiveness continue to rise. With the increasing complexity of web applications, APIs, and mobile apps, skilled performance engineers are essential for organizations seeking to deliver optimal user experiences and maintain competitive advantages.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our comprehensive Performance Testing & Optimization program prepares you for immediate entry into specialized roles with practical, hands-on experience in performance testing, bottleneck identification, and optimization. Graduates typically see a <strong style={{ color: '#00416A' }}>250-400% return on investment</strong> within the first year, with performance test engineers earning competitive salaries and having clear pathways to senior roles in performance engineering and DevOps.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Whether you're looking to specialize in performance testing, transition from general QA or development, or enhance your skills with performance expertise, this program provides the foundation for long-term success in the rapidly growing field of performance engineering and optimization.
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
                            Performance Testing & Optimization Program Curriculum
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
                                        }}>Performance Fundamentals</div>
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
                                        }}>Lighthouse & JMeter</div>
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
                                        }}>BlazeMeter & Cloud</div>
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
                                        }}>API Performance Testing</div>
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
                                        }}>Best Practices & Strategy</div>
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
                                        }}>Advanced Topics & Capstone</div>
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
                                            }}>AI-Assisted Performance Analysis</div>
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
                                            }}>AI-Powered Bottleneck Detection</div>
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
                                            }}>AI Test Strategy & Optimization</div>
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
                                            }}>AI-Enhanced Performance Solutions</div>
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
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Performance testers earn $60K-85K, with clear paths to senior roles</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💼 Career Foundation</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Essential foundation for advancing to performance lead and DevOps roles</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🚀 Career Growth</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Fast-track to Performance Engineer, DevOps Specialist, or Performance Architect positions</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🌐 High Demand</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Performance skills are essential and in constant demand across all tech industries</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💡 AI Specialization</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Become an AI-enhanced performance specialist with cutting-edge optimization skills</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📈 Long-term ROI</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Potential lifetime earnings of $2.5M-5M+ in performance careers, with pathways to $120K+ roles</div>
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
                                        <strong style={{ color: '#00416A' }}>Progressive Learning:</strong> Build from performance fundamentals to advanced optimization and strategy, with AI integration throughout the entire curriculum
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 1: Performance Testing Fundamentals */}
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
                                Module 1: Performance Testing Fundamentals & Core Concepts
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Introduction to Performance Testing:</strong> Performance testing principles, objectives, importance, performance vs. functional testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Testing Types:</strong> Load testing, stress testing, spike testing, volume testing, endurance testing, scalability testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Metrics:</strong> Response time, throughput, resource utilization, error rates, concurrent users
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Core Web Vitals:</strong> LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift), FCP (First Contentful Paint), TTI (Time to Interactive)
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Analyze performance requirements, create performance test plans, understand performance testing lifecycle
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Assisted Learning:</strong> Using GPT, Copilot, and Claude for performance test planning, metric analysis, and performance strategy development
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
                                        Understand performance testing fundamentals and principles
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Master Core Web Vitals and performance metrics
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create comprehensive performance test plans and strategies
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use AI tools to enhance performance test planning and analysis
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
                                        <strong>AI Performance Planning:</strong> Using GPT, Claude, and Copilot to generate performance test plans and strategies
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Metric Analysis:</strong> Leveraging AI to analyze performance metrics and identify optimization opportunities
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
                                        <strong>Junior Performance Tester:</strong> Entry-level positions ($60-75K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Performance Test Planning:</strong> Create test plans for clients ($1,500-3,500 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 2: Chrome DevTools Lighthouse & Apache JMeter */}
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
                                Module 2: Chrome DevTools Lighthouse & Apache JMeter
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Chrome DevTools Lighthouse:</strong> Performance auditing, Core Web Vitals, performance budgets, Lighthouse CI integration, performance optimization
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Apache JMeter Fundamentals:</strong> Installation, configuration, test plan creation, thread groups, samplers, listeners
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Load Testing with JMeter:</strong> Creating and executing load tests for web applications and APIs, test scenarios, HTTP requests, SOAP/REST API testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Stress & Distributed Testing:</strong> Identifying system breaking points, capacity limits, master-slave configuration for large-scale testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Conduct performance audits using Lighthouse, create and execute load tests with JMeter
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Performance Analysis:</strong> Using AI to analyze Lighthouse reports, optimize JMeter test scenarios, and generate performance insights
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
                                        Master Chrome DevTools Lighthouse for performance auditing
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create and execute comprehensive load tests using Apache JMeter
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Generate performance reports and analyze results effectively
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI to enhance performance analysis and optimization
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
                                        <strong>AI Lighthouse Analysis:</strong> Generate performance insights from Lighthouse reports using GPT, Claude, and Copilot
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Test Scenario Optimization:</strong> Use AI to optimize JMeter test scenarios and test data
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
                                        <strong>Performance Tester:</strong> Work as performance tester ($65-85K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Performance Auditing:</strong> Provide performance audits ($2,000-5,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 3: BlazeMeter & Cloud Performance Testing */}
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
                                Module 3: BlazeMeter & Cloud Performance Testing
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>BlazeMeter Platform:</strong> Cloud-based performance testing platform, JMeter integration, uploading and running scripts
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Scalability Testing:</strong> Running tests with thousands of virtual users, distributed load generation
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Real-time Monitoring:</strong> Live test monitoring, performance metrics, real-time dashboards
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Advanced Reporting:</strong> Comprehensive performance reports, analytics, trend analysis
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>CI/CD Integration:</strong> Integrating BlazeMeter with Jenkins, GitLab, GitHub Actions, and other CI/CD tools
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Execute cloud-based performance tests, analyze results, integrate with CI/CD pipelines
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Powered Bottleneck Detection:</strong> Using AI to analyze BlazeMeter reports, identify bottlenecks, and suggest optimizations
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
                                        Master cloud-based performance testing with BlazeMeter
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Execute scalable performance tests with thousands of virtual users
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Integrate performance testing into CI/CD pipelines
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use AI to enhance bottleneck detection and optimization recommendations
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
                                        <strong>AI Bottleneck Analysis:</strong> Use AI to analyze performance reports and identify bottlenecks
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Optimization Suggestions:</strong> Generate optimization recommendations using GPT, Claude, and Copilot
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
                                        <strong>Performance Analyst:</strong> Work as performance analyst ($70-90K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Cloud Performance Testing:</strong> Provide cloud testing services ($2,500-6,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 4: API Performance Testing with Postman */}
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
                                Module 4: API Performance Testing with Postman
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>API Performance Testing:</strong> Using Postman for API load and performance testing, collection runner, multiple request execution
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Newman CLI:</strong> Command-line execution for automated performance testing, CI/CD integration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Monitoring:</strong> Tracking API response times, throughput, error rates, performance trends
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Scripts & Assertions:</strong> Writing performance test scripts, assertions, pre-request scripts
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Postman Monitoring:</strong> Continuous performance tracking, scheduled monitoring, alerting
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Create comprehensive API performance test suites, execute and monitor API performance
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Test Strategy:</strong> Using AI to develop comprehensive API performance test strategies and optimize test scenarios
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
                                        Perform comprehensive API performance testing using Postman
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Automate API performance testing with Newman CLI and CI/CD integration
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Monitor and track API performance metrics effectively
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI for intelligent API performance test optimization
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
                                        <strong>AI API Test Strategy:</strong> Develop comprehensive API performance test strategies using AI tools
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Response Analysis:</strong> Use AI to analyze and optimize API response times
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
                                        <strong>API Performance Engineer:</strong> Specialize in API performance testing ($70-95K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>API Performance Consulting:</strong> Provide API performance services ($3,000-7,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 5: Performance Testing Best Practices & Strategy */}
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
                                Module 5: Performance Testing Best Practices & Strategy
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Testing Strategy:</strong> Planning and designing comprehensive performance test strategies, test approach, resource planning
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Test Types & Scenarios:</strong> Load testing, stress testing, spike testing, volume testing, endurance testing, capacity planning
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Metrics & KPIs:</strong> Response time, throughput, resource utilization, error rates, SLA compliance
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Bottleneck Identification:</strong> Identifying and resolving performance bottlenecks, root cause analysis
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Tuning:</strong> Optimizing application performance based on test results, code optimization, infrastructure optimization
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Develop comprehensive performance testing strategies, execute end-to-end performance tests
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Test Documentation:</strong> Using AI to generate performance test documentation, create reports, and analyze performance trends
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
                                        Develop comprehensive performance testing strategies
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Identify and resolve performance bottlenecks effectively
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Optimize application performance based on test results
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Generate comprehensive performance test reports using AI-enhanced tools
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
                                        <strong>AI Test Documentation:</strong> Generate performance test documentation and reports using AI
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Metrics Analysis:</strong> Use AI to analyze performance metrics and generate insights
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
                                        <strong>Performance Test Lead:</strong> Work as performance test lead ($85-110K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Performance Consulting:</strong> Provide performance consulting ($50-100/hour)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 6: Advanced Performance Topics & Capstone */}
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
                                Module 6: Advanced Performance Topics & Capstone Project
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Advanced Performance Patterns:</strong> Microservices performance, distributed systems, cloud-native performance, container performance
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance in DevOps:</strong> Performance testing in CI/CD, continuous performance monitoring, shift-left performance testing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Architecture:</strong> Building performance into system architecture, performance design patterns, scalability patterns
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Strategy:</strong> Building performance testing into development workflows, team training, performance culture
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Capstone Project:</strong> Complete end-to-end performance project: strategy, execution, analysis, optimization, and reporting
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Enhanced Solutions:</strong> Using AI to develop performance strategies, optimize implementations, and create comprehensive performance solutions
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
                                        Implement advanced performance patterns and DevOps integration
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Develop comprehensive performance strategies and workflows
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Complete end-to-end performance projects demonstrating mastery
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Leverage AI for intelligent performance solutions and optimization
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
                                        <strong>AI Performance Strategy:</strong> Develop comprehensive performance strategies using AI tools
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Solution Optimization:</strong> Use AI to optimize performance implementations and solutions
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
                                        <strong>Performance Engineer:</strong> Work as performance engineer ($90-120K annually)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Senior Performance Specialist:</strong> Advance to senior roles ($100-140K annually)
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
                                    Performance Fundamentals
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Performance Testing Types
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Core Web Vitals & Metrics
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Performance Test Planning
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Bottleneck Identification
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
                                    Tools & Technologies
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Chrome DevTools Lighthouse
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Apache JMeter
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        BlazeMeter & Cloud Testing
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Postman Performance Testing
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
                                    Advanced Topics
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Performance Strategy & Best Practices
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        CI/CD Integration
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Performance Optimization
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        AI-Enhanced Performance Testing
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
                            Ready to Start Your Performance Testing Journey?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            marginBottom: '30px',
                            opacity: '0.9'
                        }}>
                            Join our comprehensive Performance Testing & Optimization program and master the tools and techniques used by industry leaders to ensure optimal application performance.
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
        </div> 
    );
}

export default coursesPerformance;
