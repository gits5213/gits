import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HeaderText from '../components/header';
import landingImage from '../images/sdlcLogo.png'
import CardList from '../components/cardList';
import {cardDetails}from '../components/cardDetails';
import Footer from '../components/footer';
import classromom from '../images/classroomClass.jpg';
import online from '../images/onlineClass.jpg';

class Landing extends Component {
    render(){
        return(
            <main className='landing-body'> 
                    <HeaderText />
                
                {/* Hero Section */}
                <div style={{
                    background: 'linear-gradient(135deg, #00416A 0%, #005a8a 50%, #006ba8 100%)',
                    color: '#ffffff',
                    padding: '100px 20px',
                    marginBottom: '60px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative Background Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-10%',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-30%',
                        left: '-5%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none'
                    }}></div>

                    <div style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        {/* 2-Column Layout */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '40px',
                            alignItems: 'center'
                        }}>
                            {/* Left Column */}
                            <div style={{
                                textAlign: 'left'
                            }}>
                                <div style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '40px',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                    transition: 'transform 0.3s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                                >
                                    <h1 style={{ 
                                        fontSize: 'clamp(32px, 4vw, 48px)', 
                                        marginBottom: '20px',
                                        fontWeight: '800',
                                        lineHeight: '1.2',
                                        letterSpacing: '-0.02em',
                                        textShadow: '0 2px 20px rgba(0,0,0,0.2)'
                                    }}>
                                        No Experience? No Problem.
                                    </h1>
                                    <p style={{
                                        fontSize: 'clamp(18px, 2vw, 24px)',
                                        margin: 0,
                                        fontWeight: '400',
                                        lineHeight: '1.6',
                                        opacity: '0.95'
                                    }}>
                                        Our QA Engineering Training Turns Absolute Beginners into Job-Ready Professionals.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div style={{
                                textAlign: 'left'
                            }}>
                                <div style={{
                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '40px',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,255,255,0.25)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                    transition: 'transform 0.3s ease',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    gap: '24px'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                                >
                                    <h2 style={{
                                        fontSize: 'clamp(28px, 3.5vw, 42px)',
                                        margin: 0,
                                        fontWeight: '700',
                                        lineHeight: '1.3',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        Rise with New Skills.
                                    </h2>
                                    <p style={{
                                        fontSize: 'clamp(18px, 2vw, 24px)',
                                        margin: 0,
                                        fontWeight: '400',
                                        lineHeight: '1.6',
                                        opacity: '0.95'
                                    }}>
                                        QA Engineering is Your Path to Stability, Growth, and Financial Freedom.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Container */}
                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    {/* Landing Image Section */}
                    <section style={{
                        marginBottom: '60px',
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            width: '100%',
                            maxWidth: '100%',
                            overflow: 'hidden'
                        }}>
                            <img 
                                alt='SDLC Logo' 
                                src={landingImage}
                                style={{
                                    width: '100%',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                    display: 'block',
                                    margin: '0 auto',
                                    objectFit: 'contain'
                                }}
                            />
                </div>
                    </section>

                    {/* Training Programs Section */}
                    <section style={{
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '40px'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '42px',
                                marginBottom: '15px',
                                fontWeight: 'bold'
                            }}>
                                Training Programs
                            </h2>
                            <p style={{
                                fontSize: '20px',
                                color: '#666',
                                margin: 0
                            }}>
                                Own your future by learning new skills!
                            </p>
                    </div>
                        <CardList cardDetails={cardDetails} />
                </section>

                    {/* Who We Are Section */}
                    <section style={{
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '50px 40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '36px',
                                marginBottom: '20px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                        WHO WE ARE
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                color: '#666',
                                textAlign: 'center',
                                marginBottom: '40px',
                                maxWidth: '800px',
                                margin: '0 auto 40px'
                            }}>
                                Code4Kids and Full Stack Quality Assurance Engineering and Web Developer Training Center.
                        </p>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '30px',
                                marginBottom: '40px'
                            }}>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    padding: '30px',
                                    borderRadius: '8px',
                                    border: '2px solid #00416A',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}>
                                    <h3 style={{
                                        color: '#00416A',
                                        fontSize: '24px',
                                        marginBottom: '20px',
                                        fontWeight: 'bold'
                                    }}>
                                        Our Programs
                                    </h3>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        lineHeight: '2'
                                    }}>
                                        <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            Code4Kids (To Become a Software Engineer)
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            Full Stack SQAE - Web and API Manual
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative', marginBottom: '10px' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            Full Stack SQAE - Web and API Automation
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            Frontend Web Developer (Software Engineer)
                                        </li>
                                    </ul>
                            </div>

                                <div style={{
                                    backgroundColor: '#ffffff',
                                    padding: '30px',
                                    borderRadius: '8px',
                                    border: '2px solid #00416A',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}>
                                    <h3 style={{
                                        color: '#00416A',
                                        fontSize: '24px',
                                        marginBottom: '20px',
                                        fontWeight: 'bold'
                                    }}>
                                        About Our Training
                                    </h3>
                                    <p style={{
                                        fontSize: '16px',
                                        color: '#333',
                                        lineHeight: '1.8',
                                        margin: 0
                                    }}>
                                        We are the leaders in providing quality Training's of Web Development, Full Stack Quality Assurance Engineering and Code4Kids to Corporate and Individuals. This is the best In-person and Online training center at Queens, Hollis-NY. Our main intention is to let our students learn through practice and provide as much detailed information as possible. Our training's are divided in three modules - <strong style={{ color: '#00416A' }}>Full Stack SQA Engineering Program - Frontend Web Development Program - Code4Kids Program</strong>.
                                </p>
                                </div>

                                <div style={{
                                    backgroundColor: '#ffffff',
                                    padding: '30px',
                                    borderRadius: '8px',
                                    border: '2px solid #00416A',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}>
                                    <h3 style={{
                                        color: '#00416A',
                                        fontSize: '24px',
                                        marginBottom: '20px',
                                        fontWeight: 'bold'
                                    }}>
                                        Training Options
                                    </h3>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '15px'
                                    }}>
                                        <a 
                                            href='#classroomClass'
                                            style={{
                                                display: 'block',
                                                padding: '12px 20px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                color: '#ffffff',
                                                backgroundColor: '#00416A',
                                                textDecoration: 'none',
                                                borderRadius: '6px',
                                                textAlign: 'center',
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
                                            In-Person Training
                                        </a>
                                        <a 
                                            href='#onlineClass'
                                            style={{
                                                display: 'block',
                                                padding: '12px 20px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                color: '#ffffff',
                                                backgroundColor: '#00416A',
                                                textDecoration: 'none',
                                                borderRadius: '6px',
                                                textAlign: 'center',
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
                                            Online Training
                                        </a>
                                        <div style={{
                                            padding: '12px 20px',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: '#ffffff',
                                            backgroundColor: '#00416A',
                                            borderRadius: '6px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
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
                                            Corporate Training
                                        </div>
                                        <div style={{
                                            padding: '12px 20px',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            color: '#ffffff',
                                            backgroundColor: '#00416A',
                                            borderRadius: '6px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
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
                                            Project Support
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Training Images Section */}
                    <section style={{
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                            gap: '30px'
                        }}>
                            <div 
                                id='classroomClass'
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                }}
                            >
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '28px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}>
                                    In-Person Training
                                </h3>
                                <img 
                                    alt='Classroom Training' 
                                    src={classromom}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                    }}
                                />
                            </div>
                            <div 
                                id='onlineClass'
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                }}
                            >
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '28px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}>
                                    Online Training
                                </h3>
                                <img 
                                    alt='Online Training' 
                                    src={online}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                    }}
                                />
                            </div>
                    </div>
                </section>
                </div>

                <section className='pt4'>
                    <Footer />
                </section>
            </main>
        )
    } 
}
export default Landing;
