import React from 'react';
import { Link } from 'react-router-dom';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import sdetRoadmapImage from '../../../images/QAEngineerRM.png';
import Footer from '../../../components/footer';

const SdetRoadmap = () => {
    return(
        <div className='page-tab-body'>
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
                    SDET ROADMAP
                </h1>
                <p style={{
                    fontSize: '20px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Your complete guide to becoming a Full Stack Software Engineer in Test (SDET) / QA Engineer
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
                            SDET Career Path
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
                                <strong style={{ color: '#00416A' }}>Becoming a Full-Stack Software Engineer in Test (SDET)</strong> opens the door to one of the most in-demand and future-proof careers in tech. As a Full-Stack SDET, you master both frontend and backend testing, automation frameworks, API validation, CI/CD pipelines, cloud technologies, and now AI-powered testing. This unique combination makes you a critical engineer who ensures software quality from end to end—far beyond traditional QA roles.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                <strong style={{ color: '#00416A' }}>Job opportunities for Full-Stack SDETs are booming</strong> across industries like fintech, healthcare, government, aerospace, e-commerce, AI startups, cybersecurity, and more. Companies are now prioritizing engineers who can write automation code, design scalable frameworks, integrate AI-driven test generation, and collaborate closely with developers. Because of this high demand, Full-Stack SDETs consistently enjoy strong job security and faster career growth than manual testers.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                <strong style={{ color: '#00416A' }}>Salary ranges are highly competitive</strong>, typically starting from <strong style={{ color: '#00416A' }}>$95k–$120k</strong> for entry to mid-level and reaching <strong style={{ color: '#00416A' }}>$140k–$200k+</strong> for senior and lead SDET roles—especially for engineers skilled in Playwright, Python/TypeScript, cloud (AWS), DevOps, and AI-assisted automation. With AI transforming the testing landscape, Full-Stack SDETs who leverage AI tools for intelligent test generation, self-healing scripts, and smart validation become even more valuable—making this career one of the most rewarding paths in today's technology market.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Roadmap Image Section */}
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
                            SDET Roadmap - Full Stack Software Engineer in Test
                        </h2>
                        <div style={{ 
                            overflow: 'auto', 
                            padding: '20px 0', 
                            width: '100%',
                            margin: '20px 0',
                            textAlign: 'center',
                            backgroundColor: '#ffffff',
                            borderRadius: '8px'
                        }}>
                            <img 
                                src={sdetRoadmapImage} 
                                alt="SDET Roadmap - FullStack Software Engineer in Test (SDET) / QA Engineer"
                                style={{ 
                                    width: '100%', 
                                    height: 'auto',
                                    display: 'block',
                                    margin: '0 auto',
                                    maxWidth: '100%',
                                    minWidth: '100%',
                                    borderRadius: '8px'
                                }}
                            />
                        </div>
                    </div>
                </section>

                {/* Key Learning Areas Section */}
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
                            Key Learning Areas
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
                                    Foundation Skills
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Manual Testing Fundamentals
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Test Design & Execution
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Bug Tracking & Reporting
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        SDLC & STLC Understanding
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
                                    Programming & Automation
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: '1.8'
                                }}>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Programming Languages (Java, Python, JavaScript)
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Automation Frameworks (Selenium, Playwright, Cypress)
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        API Testing & Tools
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Mobile Testing (Appium)
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
                                        CI/CD Integration
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Performance & Security Testing
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Test Architecture & Design Patterns
                                    </li>
                                    <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                        Cloud & DevOps Practices
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
                            Ready to Start Your SDET Journey?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            marginBottom: '30px',
                            opacity: '0.9'
                        }}>
                            Follow this comprehensive roadmap and enroll in our courses to master all the skills needed to become a successful SDET.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '20px',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <a 
                                href={link.SQA_SIGN_UP}
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
                                Sign Up for SQA Course
                            </a>
                            <Link 
                                to="/courses"
                                style={{
                                    display: 'inline-block',
                                    padding: '15px 40px',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: '#ffffff',
                                    backgroundColor: 'transparent',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid #ffffff'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                Explore All Courses
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <GoogleAd slot="1541085932" classNames="page-right-side" />
            </div>
            <section className='pt4'>
                <Footer />
            </section>
        </div> 
    );
}
export default SdetRoadmap;
