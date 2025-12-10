import React from 'react';
import link from '../../../utilities/links.json';
import GoogleAd from '../../../components/GoogleAd';
import courseOutline from '../../../images/webDevProgram.png';
import Footer from '../../../components/footer';

const coursesWebDev = () => {
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
                                Our comprehensive Web Development program is designed to equip you with the skills needed to build modern, responsive websites and web applications. Whether you're a beginner or looking to enhance your existing skills, this course covers everything from front-end fundamentals to advanced web technologies.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                You'll learn industry-standard technologies including HTML5, CSS3, JavaScript, React, and more. Our hands-on approach ensures you gain practical experience building real-world projects that you can showcase in your portfolio.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: '#333'
                            }}>
                                Join our Web Development program and take the first step towards a rewarding career in web development!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Program Outline Image Section */}
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
                            Web Development Program Outline
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
                                src={courseOutline} 
                                alt="Web Development Program Outline - Full Course Structure"
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
                                        JavaScript Fundamentals
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
                                        React.js
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
                            Sign Up Now
                        </a>
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
export default coursesWebDev;
