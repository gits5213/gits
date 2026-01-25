import React from 'react';
import link from '../../../utilities/links.json';
import courseOutline from '../../../images/webDevProgram.png';
import { getImageSrc } from '../../../utils/getImageSrc';
const coursesWebDev = () => {
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
                    Web Development Course Outline
                </h1>
                <p style={{
                    fontSize: '20px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Master modern web development technologies and build professional websites
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
                            Web Development Program
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
                                Our comprehensive Web Development program is designed to equip you with the skills needed to build modern, responsive websites and full-stack web applications. Whether you're a beginner or looking to enhance your existing skills, this course covers everything from front-end fundamentals (HTML5, CSS3, Bootstrap) to advanced full-stack development with React, Next.js, Node.js, and TypeScript.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                You'll master industry-standard technologies including <strong style={{ color: '#00416A' }}>HTML5, CSS3, Bootstrap</strong> for responsive design, <strong style={{ color: '#00416A' }}>JavaScript and TypeScript</strong> for type-safe programming, <strong style={{ color: '#00416A' }}>React.js and Next.js</strong> for modern frontend development, and <strong style={{ color: '#00416A' }}>Node.js and Express.js</strong> for backend services. Our curriculum also integrates cutting-edge AI technologies including <strong style={{ color: '#00416A' }}>OpenAI GPT, Anthropic Claude, and Microsoft Copilot</strong> throughout the learning journey, preparing you for the future of AI-powered web development.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our hands-on, project-based approach ensures you gain practical experience building real-world applications—from responsive landing pages and interactive web apps to full-stack applications with AI integration. You'll complete portfolio-ready projects that demonstrate your mastery of modern web development technologies and AI capabilities.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Join our Web Development program and take the first step towards a rewarding career in web development, with skills that are in high demand across the technology industry. Our comprehensive curriculum prepares you for roles as Frontend Developer, Full-Stack Developer, React/Next.js Specialist, and AI-Enhanced Web Developer.
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
                            Return on Investment (ROI) for Web Development
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
                                Web development is one of the most in-demand and lucrative career paths in technology. With the rapid growth of digital businesses and the increasing need for web applications, skilled web developers are highly sought after across all industries.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                Our comprehensive Web Development program prepares you for immediate entry into the job market with practical, hands-on experience building real-world applications. Graduates typically see a <strong style={{ color: '#00416A' }}>300-500% return on investment</strong> within the first year of employment.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Whether you're looking to start a new career, advance in your current role, or launch your own web development business, this program provides the foundation for long-term success in the technology industry.
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
                            Web Development Program Curriculum
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
                                        }}>HTML5, CSS3 & Bootstrap</div>
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
                                        }}>JavaScript, TypeScript & DOM</div>
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
                                        }}>React.js & Next.js</div>
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
                                        }}>Node.js & Backend</div>
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
                                        }}>Full-Stack Development</div>
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
                                        }}>Advanced & Deployment</div>
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
                                            }}>AI-Assisted Coding with GPT/Copilot</div>
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
                                            }}>AI-Powered React Components</div>
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
                                            }}>AI APIs & ML Integration</div>
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
                                            }}>AI/ML Deployment & Optimization</div>
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
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Entry-level web developers earn $50K-80K, with senior roles reaching $120K-180K+</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💼 Freelance Opportunities</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Build websites and web apps for clients ($500-5,000+ per project)</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🚀 Career Growth</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Fast-track to senior developer, tech lead, or startup founder roles</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🌐 Remote Work</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Work from anywhere with high demand for remote web developers</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>💡 Entrepreneurial Path</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Launch SaaS products, web services, or digital agencies</div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            padding: '15px',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📈 Long-term ROI</div>
                                            <div style={{ fontSize: '14px', opacity: '0.9' }}>Potential lifetime earnings of $2M-5M+ in web development careers</div>
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
                                        <strong style={{ color: '#00416A' }}>Progressive Learning:</strong> Build from fundamentals to advanced full-stack development, with AI integration throughout the entire curriculum
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 1: HTML5 & CSS3 Fundamentals */}
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
                                Module 1: HTML5 & CSS3 Fundamentals
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>HTML5 Essentials:</strong> Semantic HTML, forms, multimedia elements, accessibility best practices
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>CSS3 Styling:</strong> Selectors, box model, flexbox, grid layout, animations, transitions
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Responsive Design:</strong> Media queries, mobile-first approach, responsive images, viewport optimization
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>CSS Preprocessors:</strong> SASS/SCSS, variables, mixins, nesting, modular architecture
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Bootstrap Framework:</strong> Grid system, components, utilities, responsive design with Bootstrap 5, customization, theming
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Build responsive landing pages, portfolio websites, multi-page sites using Bootstrap
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Assisted Learning:</strong> Using GPT, Copilot, and Claude for HTML/CSS code generation, debugging, and optimization suggestions
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
                                        Create semantic, accessible HTML5 documents following best practices
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Design responsive, mobile-first websites using modern CSS3 techniques and Bootstrap framework
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Build professional, production-ready static websites with Bootstrap components and utilities
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Use AI coding assistants effectively for HTML/CSS development
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
                                        <strong>AI Code Generation:</strong> Using GPT, Copilot, and Claude to generate HTML/CSS code and templates
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Design Assistance:</strong> Leveraging AI for layout suggestions, color schemes, and responsive design patterns
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
                                        <strong>Website Development:</strong> Build websites for businesses ($500-2,000 per site)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Landing Pages:</strong> Create high-converting landing pages ($300-1,500 per page)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Email Templates:</strong> Design HTML email templates ($100-300 per template)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Freelance Web Design:</strong> Offer web design services ($40-100/hour)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 2: JavaScript & DOM Manipulation */}
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
                                Module 2: JavaScript & DOM Manipulation
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>JavaScript Fundamentals:</strong> Variables, data types, operators, control flow, functions
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>DOM Manipulation:</strong> Selecting elements, modifying content, event handling, dynamic updates
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>ES6+ Features:</strong> Arrow functions, destructuring, spread operator, async/await, modules
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>TypeScript Fundamentals:</strong> Types, interfaces, classes, generics, type inference, type safety, TypeScript with DOM manipulation
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>APIs & Fetch:</strong> Working with REST APIs, JSON data, async operations, error handling, TypeScript API integration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Interactive web applications, dynamic content sites, API-integrated apps using JavaScript and TypeScript
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Integration:</strong> Building AI-powered features using OpenAI, Anthropic APIs, creating intelligent web interfaces
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
                                        Write clean, modern JavaScript code using ES6+ features
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create interactive, dynamic web experiences with DOM manipulation
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Integrate external APIs and handle asynchronous operations
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Write type-safe code using TypeScript for better code quality and maintainability
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Build AI-powered web applications using GPT, Claude, and other AI APIs with TypeScript
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
                                        <strong>AI Web Applications:</strong> Building interactive web apps with GPT, Claude, and Copilot integration
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Chatbots:</strong> Creating intelligent chatbots and virtual assistants for websites
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI-Powered Features:</strong> Implementing AI-driven search, content generation, and personalization
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
                                        <strong>Interactive Web Apps:</strong> Build custom web applications ($1,000-5,000 per app)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Frontend Development:</strong> Work as junior frontend developer ($50-80/hour)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>AI Integration Projects:</strong> Add AI features to websites ($500-2,000 per project)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Browser Extensions:</strong> Create and sell Chrome/Firefox extensions ($200-1,000 per extension)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 3: React.js & Modern Frameworks */}
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
                                Module 3: React.js & Modern Frameworks
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>React Fundamentals:</strong> Components, JSX, props, state, hooks (useState, useEffect, useContext)
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>React with TypeScript:</strong> TypeScript in React, typed components, props interfaces, hooks with types, type-safe state management
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>State Management:</strong> Context API, Redux, state patterns, data flow, TypeScript with Redux
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Routing:</strong> React Router, navigation, protected routes, dynamic routing, TypeScript routing
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Advanced React:</strong> Custom hooks, performance optimization, testing, error boundaries, TypeScript best practices
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Next.js Framework:</strong> Server-side rendering (SSR), static site generation (SSG), API routes, file-based routing, image optimization, deployment with Vercel, Next.js with TypeScript
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Single-page applications, e-commerce sites, dashboard applications, Next.js production apps
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI-Powered React:</strong> Building AI-enhanced React components, integrating GPT/Claude APIs, creating intelligent UIs
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
                                        Build scalable React applications using modern patterns and best practices
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Implement efficient state management and data flow in React apps with type safety
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create production-ready React applications with routing and optimization using TypeScript
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Build scalable Next.js applications with SSR, SSG, and optimized performance using TypeScript
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Integrate AI capabilities into React and Next.js applications for enhanced user experiences with TypeScript
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
                                        <strong>AI React Components:</strong> Building intelligent React components powered by GPT, Claude, and Copilot
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI-Powered UIs:</strong> Creating smart interfaces with AI-driven content, recommendations, and interactions
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI State Management:</strong> Integrating AI responses into React state and context
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI in Next.js:</strong> Implementing AI features in Next.js with server-side AI processing and API routes
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
                                        <strong>React Applications:</strong> Build modern web applications ($2,000-10,000 per app)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Next.js Applications:</strong> Build production-ready Next.js apps ($3,000-15,000 per app)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>React/Next.js Developer:</strong> Work as React/Next.js developer ($70-140/hour)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Component Libraries:</strong> Create and sell React/Next.js component libraries ($500-3,000 per library)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>AI-Enhanced Apps:</strong> Build AI-powered React/Next.js applications ($3,000-20,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 4: Node.js & Backend Development */}
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
                                Module 4: Node.js & Backend Development
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Node.js Fundamentals:</strong> Server-side JavaScript, NPM, modules, file system operations
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>TypeScript with Node.js:</strong> TypeScript backend development, type-safe Node.js applications, TypeScript configuration
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Express.js:</strong> RESTful APIs, routing, middleware, error handling, authentication, Express with TypeScript
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Database Integration:</strong> MongoDB, SQL databases, ORMs, data modeling
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Authentication & Security:</strong> JWT, OAuth, password hashing, security best practices
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> RESTful APIs, authentication systems, database-driven applications
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Backend Integration:</strong> Building AI-powered APIs, integrating GPT/Claude for backend services, ML model deployment
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
                                        Build scalable backend APIs using Node.js and Express.js
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Integrate databases and implement secure authentication systems
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create production-ready backend services with proper error handling
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Develop AI-powered backend services integrating GPT, Claude, and ML models
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
                                        <strong>AI-Powered APIs:</strong> Building backend services that leverage GPT, Claude, and other AI models
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>ML Model Integration:</strong> Deploying and integrating machine learning models in Node.js applications
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
                                        <strong>Backend Development:</strong> Build APIs and backend services ($3,000-15,000 per project)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Full-Stack Developer:</strong> Work as full-stack developer ($70-150/hour)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>AI Backend Services:</strong> Build AI-powered backend systems ($5,000-25,000 per project)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 5: Full-Stack Development */}
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
                                Module 5: Full-Stack Development
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Full-Stack Architecture:</strong> Connecting frontend and backend, API integration, data flow
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Real-Time Features:</strong> WebSockets, Socket.io, real-time updates, live data
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Testing & Quality:</strong> Unit testing, integration testing, E2E testing, code quality tools
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Version Control:</strong> Git, GitHub, collaboration workflows, CI/CD basics
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Projects:</strong> Complete full-stack applications, e-commerce platforms, social media apps
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI Full-Stack Integration:</strong> Building complete AI-powered applications with GPT, Claude, and ML models integrated across frontend and backend
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
                                        Build complete full-stack web applications from frontend to backend
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Implement real-time features and handle complex data flows
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Write comprehensive tests and maintain code quality standards
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Create AI-powered full-stack applications with seamless AI integration
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
                                        <strong>AI Full-Stack Apps:</strong> Building complete applications with AI features across frontend and backend
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Architecture:</strong> Designing scalable AI integration patterns for full-stack applications
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
                                        <strong>Full-Stack Applications:</strong> Build complete web applications ($5,000-50,000+ per project)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Full-Stack Developer:</strong> Work as senior full-stack developer ($80-180/hour)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Tech Startup Founder:</strong> Launch your own SaaS or web service startup
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Module 6: Advanced Topics & Deployment */}
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
                                Module 6: Advanced Topics & Deployment
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Deployment:</strong> Cloud platforms (AWS, Vercel, Netlify), CI/CD pipelines, Docker basics, Next.js production deployment
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Performance Optimization:</strong> Code splitting, lazy loading, caching strategies, monitoring
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Advanced Patterns:</strong> Microservices concepts, serverless architecture, GraphQL
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>Capstone Project:</strong> Build and deploy a complete, production-ready web application
                                </li>
                                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>•</span>
                                    <strong>AI/ML Deployment:</strong> Deploying AI models, optimizing AI-powered applications, production AI systems
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
                                        Deploy web applications to production with proper CI/CD pipelines
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Optimize applications for performance, scalability, and user experience
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Complete a capstone project demonstrating full-stack development mastery
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A' }}>✓</span>
                                        Deploy and optimize AI-powered applications in production environments
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
                                        <strong>AI Model Deployment:</strong> Deploying GPT, Claude, and ML models in production environments
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#0066cc' }}>🤖</span>
                                        <strong>AI Optimization:</strong> Optimizing AI-powered applications for performance and cost efficiency
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
                                        <strong>DevOps & Deployment:</strong> Specialize in deployment and DevOps ($80-150/hour)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>Technical Lead:</strong> Advance to technical lead or architect roles ($100-200/hour)
                                    </li>
                                    <li style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#ff9800' }}>💰</span>
                                        <strong>AI Solutions Architect:</strong> Design and deploy AI-powered web solutions ($120-250/hour)
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
                                    Front-End Fundamentals
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        HTML5 & Semantic Markup
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        CSS3 & Responsive Design
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        JavaScript & TypeScript
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        DOM Manipulation
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
                                    Modern Frameworks
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        React.js & Next.js
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Component-Based Architecture
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        State Management
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        API Integration
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
                                    Best Practices
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Version Control (Git)
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Code Quality & Testing
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Performance Optimization
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Deployment Strategies
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
                            Ready to Start Your Web Development Journey?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            marginBottom: '30px',
                            opacity: '0.9'
                        }}>
                            Join our comprehensive Web Development program and build the skills you need for a successful career.
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
export default coursesWebDev;
