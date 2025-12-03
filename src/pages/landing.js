import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HeaderText from '../components/header';
import landingImage from '../images/sdlcLogo.png'
import CardList from '../components/cardList';
import {cardDetails}from '../components/cardDetails';
import Footer from '../components/footer';
import classromom from '../images/classroomClass.jpg';
import online from '../images/onlineClass.jpg';
import landingPageData from '../utilities/data/landingPage.json';

const ZOOM_MEET = 'https://us06web.zoom.us/j/9803798160';

class Landing extends Component {
    render(){
        return(
            <main className='landing-body'> 
                <HeaderText />
                
                {/* Hero Section */}
                <div style={{
                    background: 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)',
                    color: '#ffffff',
                    padding: '80px 20px',
                    textAlign: 'center',
                    marginBottom: '40px'
                }}>
                    <h1 style={{ 
                        fontSize: '56px', 
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        lineHeight: '1.2'
                    }}>
                        Nothing to Lose By Learning New Skills!
                    </h1>
                    <h2 style={{
                        fontSize: '32px',
                        marginBottom: '30px',
                        fontWeight: '400',
                        opacity: '0.95'
                    }}>
                        Give us 2 Days Will Give You The World!
                    </h2>
                    <a 
                        href={ZOOM_MEET} 
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
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f0f0f0';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#ffffff';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                        }}
                    >
                        {landingPageData.zoomMeeting}
                    </a>
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
