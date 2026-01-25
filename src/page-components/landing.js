import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getImageSrc } from '../utils/getImageSrc';
import { colors, shadows, spacing, borderRadius, transitions, typography } from '../utils/universityDesignSystem';
import Container from '../components/ui/Container'
import Grid from '../components/ui/Grid'
import Card from '../components/ui/Card'
import {cardDetails}from '../components/cardDetails';
import classromom from '../images/classroomClass.jpg';
import online from '../images/onlineClass.jpg';
import codingImage from '../images/codingImage.png';
import webDev from '../images/webDev.png';
import apiAutoTest from '../images/apiAutoTest.png';
import uiAutoTest from '../images/uiAutoTest.png';
import webAccessibility from '../images/webAccessibility.png';
import aboutPic from '../images/about-pic.png';
import courseOutline from '../images/CourseOutline.png';
import sdlcLogo from '../images/sdlcLogo.png';
import codingImage1 from '../images/codingImage1.png';
import '../styles/base.css';
import '../styles/landing.css';

class Landing extends Component {
    render(){

        // Explore section items (similar to Columbia's Explore section)
        const exploreItems = [
            {
                title: 'Courses',
                description: 'Comprehensive training programs in QA Engineering and Web Development',
                href: '/courses',
                image: codingImage
            },
            {
                title: 'Documentation',
                description: 'Learning resources and technical documentation',
                href: '/docs/agile',
                image: webDev
            },
            {
                title: 'API Resources',
                description: 'API testing guides and automation frameworks',
                href: '/apis',
                image: apiAutoTest
            },
            {
                title: 'Practice Labs',
                description: 'Hands-on exercises and real-world scenarios',
                href: '/practice',
                image: uiAutoTest
            },
            {
                title: 'Student Aid',
                description: 'Resources and support for students',
                href: '/aid',
                image: webAccessibility
            }
        ];

        // Most Visited items
        const mostVisited = [
            {
                title: 'Course Catalog',
                description: 'Browse all available training programs and courses',
                href: '/courses',
                image: getImageSrc(courseOutline)
            },
            {
                title: 'How It Works',
                description: 'Learn about our training methodology and process',
                href: '/how-it-works',
                image: getImageSrc(sdlcLogo)
            },
            {
                title: 'Contact Us',
                description: 'Get in touch with our team',
                href: 'https://gitsics.com/contact/',
                external: true,
                image: getImageSrc(online)
            },
            {
                title: 'Enroll Now',
                description: 'Start your journey in technology today',
                href: 'https://gitsics.com/enroll/',
                external: true,
                image: getImageSrc(codingImage1)
            }
        ];

        return(
            <main className='landing-body' style={{ marginTop: 0, paddingTop: 0 }}>
                {/* Hero Section - Columbia Style */}
                <section style={{
                    backgroundColor: '#003366',
                    color: '#ffffff',
                    padding: '80px 0 60px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <Container>
                        <div style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <h1 style={{
                                fontSize: '48px',
                                fontWeight: 700,
                                lineHeight: 1.1,
                                marginBottom: '24px',
                                color: '#ffffff',
                                letterSpacing: '-0.5px'
                            }}>
                                Excellence in Technology Education
                            </h1>
                            <p style={{
                                fontSize: '20px',
                                lineHeight: 1.6,
                                marginBottom: '40px',
                                color: 'rgba(255,255,255,0.95)',
                                maxWidth: '800px',
                                margin: '0 auto 40px'
                            }}>
                                Global I Tech Solutions prepares the next generation of software quality assurance professionals through comprehensive training grounded in industry best practices, hands-on experience, and a commitment to professional excellence. Located in the heart of New York City, we invite you to explore our programs and begin your journey in technology.
                            </p>
                            <div style={{
                                display: 'flex',
                                gap: '16px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <Link href="/courses" style={{ textDecoration: 'none' }}>
                                    <button 
                                        id="home-hero-explore-courses-btn"
                                        style={{
                                        backgroundColor: '#ffffff',
                                        color: '#003366',
                                        padding: '14px 32px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f5f5f5';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#ffffff';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                        Explore Courses
                                    </button>
                                </Link>
                                <a 
                                    href="https://gitsics.com/enroll/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <button 
                                        id="home-hero-enroll-now-btn"
                                        style={{
                                        backgroundColor: 'transparent',
                                        color: '#ffffff',
                                        padding: '14px 32px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        border: '2px solid #ffffff',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                        Enroll Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Explore Section - Columbia Style */}
                <section style={{
                    padding: '60px 0',
                    backgroundColor: '#ffffff'
                }}>
                    <Container>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: '#003366',
                            marginBottom: '40px',
                            textAlign: 'center',
                            letterSpacing: '-0.5px'
                        }}>
                            Explore
                        </h2>
                        <Grid cols={{ default: 2, md: 3 }} gap="24px">
                            {exploreItems.map((item, index) => {
                                // Special handling for Documentation and Student Aid images
                                const needsSpecialBg = item.title === 'Documentation' || item.title === 'Student Aid';
                                
                                return (
                                <Link key={index} href={item.href} style={{ textDecoration: 'none' }}>
                                    <Card 
                                        id={`home-explore-${item.title.toLowerCase().replace(/\s+/g, '-')}-card`}
                                        style={{
                                        padding: 0,
                                        overflow: 'hidden',
                                        borderRadius: '8px',
                                        border: '1px solid #e0e0e0',
                                        transition: 'all 0.3s',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                                    }}>
                                        <div style={{
                                            width: '100%',
                                            height: '220px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            backgroundColor: needsSpecialBg ? '#f8f9fa' : '#ffffff',
                                            minHeight: '220px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '16px',
                                            borderBottom: '1px solid #f0f0f0'
                                        }}>
                                            <Image 
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                style={{
                                                    objectFit: 'contain',
                                                    objectPosition: 'center'
                                                }}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                loading="lazy"
                                                quality={85}
                                                unoptimized
                                            />
                                        </div>
                                        <div style={{ padding: '20px' }}>
                                            <h3 style={{
                                                fontSize: '18px',
                                                fontWeight: 600,
                                                color: '#003366',
                                                marginBottom: '8px',
                                                margin: '0 0 8px 0'
                                            }}>
                                                {item.title}
                                            </h3>
                                            <p style={{
                                                fontSize: '14px',
                                                color: '#666666',
                                                margin: 0,
                                                lineHeight: 1.5
                                            }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </Card>
                                </Link>
                                );
                            })}
                        </Grid>
                    </Container>
                </section>

                {/* About Section - Columbia "Today and Beyond" Style */}
                <section style={{
                    padding: '80px 0',
                    backgroundColor: '#f8f9fa'
                }}>
                    <Container>
                        <div style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            textAlign: 'center'
                        }}>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: 700,
                                color: '#003366',
                                marginBottom: '24px',
                                letterSpacing: '-0.5px'
                            }}>
                                Global I Tech Solutions Today and Beyond
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: 1.7,
                                color: '#333333',
                                marginBottom: '32px'
                            }}>
                                Global I Tech Solutions prepares the next generation of technology professionals through comprehensive training programs that integrate cutting-edge industry methodologies, hands-on practical experience, and a steadfast commitment to professional excellence. Our curriculum encompasses the latest advancements in artificial intelligence and machine learning technologies, including integration with leading AI platforms such as OpenAI's GPT, Anthropic's Claude, Microsoft Copilot, and other state-of-the-art AI tools that are reshaping the technology landscape. Located in the heart of New York City, our institution is dedicated to delivering accessible, high-quality technology education that equips students with the skills and knowledge necessary to excel in an increasingly AI-driven industry. These foundational principles define our institutional identity and continue to guide our mission of fostering innovation, technical proficiency, and professional growth in the evolving field of technology.
                            </p>
                            <Link href="/about" style={{ textDecoration: 'none', display: 'inline-block' }}>
                                <button 
                                    id="home-about-learn-more-btn"
                                    style={{
                                    backgroundColor: '#003366',
                                    color: '#ffffff',
                                    padding: '14px 32px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#002244';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#003366';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}>
                                    Learn More About Us
                                </button>
                            </Link>
                        </div>
                    </Container>
                </section>

                {/* Most Visited Section - Columbia Style */}
                <section style={{
                    padding: '60px 0',
                    backgroundColor: '#ffffff'
                }}>
                    <Container>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: '#003366',
                            marginBottom: '40px',
                            letterSpacing: '-0.5px'
                        }}>
                            Most Visited
                        </h2>
                        <Grid cols={{ default: 2, md: 4 }} gap="24px">
                            {mostVisited.map((item, index) => {
                                const LinkComponent = item.external ? 'a' : Link;
                                const linkProps = item.external 
                                    ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                                    : { href: item.href };
                                
                                return (
                                    <LinkComponent key={index} {...linkProps} style={{ textDecoration: 'none' }}>
                                        <div 
                                            id={`home-most-visited-${item.title.toLowerCase().replace(/\s+/g, '-')}-card`}
                                            style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            border: '1px solid #e0e0e0',
                                            transition: 'all 0.3s',
                                            height: '100%'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}>
                                            <div style={{
                                                width: '100%',
                                                height: '170px',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                backgroundColor: '#ffffff',
                                                minHeight: '170px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '10px'
                                            }}>
                                                <Image 
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    style={{
                                                        objectFit: 'contain',
                                                        objectPosition: 'center'
                                                    }}
                                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                                    loading="lazy"
                                                    quality={85}
                                                    unoptimized
                                                />
                                            </div>
                                            <div style={{ padding: '16px' }}>
                                                <h3 style={{
                                                    fontSize: '16px',
                                                    fontWeight: 600,
                                                    color: '#003366',
                                                    marginBottom: '8px',
                                                    margin: '0 0 8px 0'
                                                }}>
                                                    {item.title}
                                                </h3>
                                                <p style={{
                                                    fontSize: '13px',
                                                    color: '#666666',
                                                    margin: 0,
                                                    lineHeight: 1.5
                                                }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </LinkComponent>
                                );
                            })}
                        </Grid>
                    </Container>
                </section>

                {/* Training Programs Section */}
                <section id="training-programs" style={{
                    padding: '60px 0',
                    backgroundColor: '#f8f9fa'
                }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <h2 style={{
                                fontSize: '32px',
                                fontWeight: 700,
                                color: '#003366',
                                marginBottom: '16px',
                                letterSpacing: '-0.5px'
                            }}>
                                Training Programs
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                color: '#666666',
                                margin: 0,
                                maxWidth: '700px',
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}>
                                Comprehensive training programs designed to launch your technology career
                            </p>
                        </div>
                        <Grid cols={{ default: 1, md: 3 }} gap="24px">
                            {/* SDET Roadmap Card - Featured First */}
                            <Card style={{
                                padding: '24px',
                                height: '100%',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                                e.currentTarget.style.borderColor = '#003366';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#e0e0e0';
                            }}>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'monospace',
                                    color: '#003366',
                                    marginBottom: '12px',
                                    margin: '0 0 12px 0',
                                    letterSpacing: '0.5px'
                                }}>
                                    🚀 Full Stack Software Engineer in Test (SDET)
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#666666',
                                    margin: '0 0 20px 0',
                                    lineHeight: 1.6,
                                    flex: 1
                                }}>
                                    Master Full Stack QA Engineering with Test Automation, CI/CD pipelines, Framework Design, and API & UI Testing. Learn programming (Java, Python, JavaScript), automation frameworks (Selenium, Playwright, Cypress), and AI-powered testing. Salary range: $95k-$200k+. High demand across fintech, healthcare, and tech industries.
                                </p>
                                <Link href="/courses/sdet-roadmap" style={{ textDecoration: 'none' }}>
                                    <button 
                                        id="home-training-sdet-roadmap-learn-more-btn"
                                        style={{
                                        width: '100%',
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: '#ffffff',
                                        backgroundColor: '#003366',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#002244';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#003366';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                        Learn More
                                    </button>
                                </Link>
                            </Card>
                            {cardDetails.slice(0, 6).map((card, index) => (
                                <Card key={index} style={{
                                    padding: '24px',
                                    height: '100%',
                                    border: '1px solid #e0e0e0',
                                    transition: 'all 0.3s',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                                    e.currentTarget.style.borderColor = '#003366';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e0e0e0';
                                }}>
                                    <h3 style={{
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        fontFamily: 'monospace',
                                        color: '#003366',
                                        marginBottom: '12px',
                                        margin: '0 0 12px 0',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {(() => {
                                            const professionalHeaders = {
                                                ' Frontend(UI) Manual Test': '🖥️ Frontend (UI) Manual Testing Program',
                                                'Backend(API) Manual Test': '📡 Backend (API) Manual Testing Program',
                                                'Frontend(UI) Automation Test': '🤖 Frontend (UI) Test Automation Program',
                                                'Backend(API) Automation Test': '⚙️ Backend (API) Test Automation Program',
                                                'Code4Kids': '👶 Code4Kids: Programming for Young Learners',
                                                'Web Development': '🌐 Full Stack Web Development Program'
                                            };
                                            return professionalHeaders[card.courseName] || card.courseName;
                                        })()}
                                    </h3>
                                    <p style={{
                                        fontSize: '15px',
                                        color: '#666666',
                                        margin: '0 0 20px 0',
                                        lineHeight: 1.6,
                                        flex: 1
                                    }}>
                                        {(() => {
                                            const courseInfo = {
                                                ' Frontend(UI) Manual Test': 'Master STLC, Test Cases, Bug Reporting with JIRA and SQL. Learn AI-assisted test design with GPT/Claude. ROI: 200-350% in first year. Prepares for Manual QA Tester and QA Analyst roles.',
                                                'Backend(API) Manual Test': 'Learn API testing with Postman, Xray, gRPC, and RESTful services. Master SQL for database testing. AI-enhanced test case generation. Essential for API QA and Backend Testing roles.',
                                                'Frontend(UI) Automation Test': 'Build automation frameworks with Selenium, Playwright, WebDriverIO, and Appium. Learn Java, JavaScript, Node.js. AI-powered test maintenance. ROI: 250-400%. Path to SDET and Automation Engineer roles.',
                                                'Backend(API) Automation Test': 'Master API automation with RestAssured, SuperTest, and Postman. Learn Java, JavaScript, Node.js. CI/CD integration and AI-enhanced debugging. High-demand specialization.',
                                                'Code4Kids': 'Empower young learners (grades 5-12) with HTML, CSS, JavaScript, React, and Node.js. Hands-on coding projects. Builds foundation for future tech careers. Early investment in coding skills.',
                                                'Web Development': 'Master modern web development with HTML5, CSS3, JavaScript, React, Next.js, Node.js, and TypeScript. AI-integrated development. ROI: 300-500%. Prepares for Frontend/Full-Stack Developer roles.'
                                            };
                                            return courseInfo[card.courseName] || card.techStack;
                                        })()}
                                    </p>
                                    <Link href="/courses" style={{ textDecoration: 'none' }}>
                                        <button 
                                            id={`home-training-${card.courseName.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}-learn-more-btn`}
                                            style={{
                                            width: '100%',
                                            padding: '12px 24px',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            color: '#ffffff',
                                            backgroundColor: '#003366',
                                            border: 'none',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#002244';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = '#003366';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}>
                                            Learn More
                                        </button>
                                    </Link>
                                </Card>
                            ))}
                            {/* Performance Test Engineer Card - Moved to Bottom with Button */}
                            <Card style={{
                                padding: '24px',
                                height: '100%',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                                e.currentTarget.style.borderColor = '#003366';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#e0e0e0';
                            }}>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'monospace',
                                    color: '#003366',
                                    marginBottom: '12px',
                                    margin: '0 0 12px 0',
                                    letterSpacing: '0.5px'
                                }}>
                                    ⚡ Performance Testing & Optimization Program
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#666666',
                                    margin: '0 0 20px 0',
                                    lineHeight: 1.6,
                                    flex: 1
                                }}>
                                    Master performance testing with Chrome DevTools Lighthouse, Apache JMeter, BlazeMeter, and Postman. Learn load testing, stress testing, spike testing, and performance monitoring. Identify and resolve bottlenecks in web applications, APIs, and mobile apps. Essential for Performance Test Engineer roles.
                                </p>
                                <Link href="/courses/performance" style={{ textDecoration: 'none' }}>
                                    <button 
                                        id="home-training-performance-learn-more-btn"
                                        style={{
                                        width: '100%',
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: '#ffffff',
                                        backgroundColor: '#003366',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#002244';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#003366';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                        Learn More
                                    </button>
                                </Link>
                            </Card>
                            {/* Accessibility Card - Moved to Bottom with Button */}
                            <Card style={{
                                padding: '24px',
                                height: '100%',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                                e.currentTarget.style.borderColor = '#003366';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#e0e0e0';
                            }}>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'monospace',
                                    color: '#003366',
                                    marginBottom: '12px',
                                    margin: '0 0 12px 0',
                                    letterSpacing: '0.5px'
                                }}>
                                    ♿ Web Accessibility & Section 508 Compliance Program
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#666666',
                                    margin: '0 0 20px 0',
                                    lineHeight: 1.6,
                                    flex: 1
                                }}>
                                    Learn to create accessible web applications compliant with Section 508 and WCAG standards. Master accessibility testing tools: AXE, WAVE, Pa11y, Screen Readers, and Lighthouse. Design for users with disabilities. High demand in government, healthcare, and enterprise sectors. Essential for Accessibility Specialist roles.
                                </p>
                                <Link href="/courses/accessibility" style={{ textDecoration: 'none' }}>
                                    <button 
                                        id="home-training-accessibility-learn-more-btn"
                                        style={{
                                        width: '100%',
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: '#ffffff',
                                        backgroundColor: '#003366',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#002244';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#003366';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                        Learn More
                                    </button>
                                </Link>
                            </Card>
                            {/* Security Testing / Pen Testing Card - Moved to Bottom with Button */}
                            <Card style={{
                                padding: '24px',
                                height: '100%',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                                e.currentTarget.style.borderColor = '#003366';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#e0e0e0';
                            }}>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    fontFamily: 'monospace',
                                    color: '#003366',
                                    marginBottom: '12px',
                                    margin: '0 0 12px 0',
                                    letterSpacing: '0.5px'
                                }}>
                                    🔒 Security Testing & Penetration Testing Program
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: '#666666',
                                    margin: '0 0 20px 0',
                                    lineHeight: 1.6,
                                    flex: 1
                                }}>
                                    Master security testing and penetration testing with OWASP ZAP, Burp Suite, Metasploit, Nmap, and Wireshark. Learn vulnerability assessment, penetration testing, security code review, and OWASP Top 10. Critical skills for Security Test Engineer and Penetration Tester roles in cybersecurity.
                                </p>
                                <Link href="/courses/security" style={{ textDecoration: 'none' }}>
                                    <button 
                                        id="home-training-security-learn-more-btn"
                                        style={{
                                        width: '100%',
                                        padding: '12px 24px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: '#ffffff',
                                        backgroundColor: '#003366',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#002244';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#003366';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                        Learn More
                                    </button>
                                </Link>
                            </Card>
                        </Grid>
                    </Container>
                </section>

                {/* Training Options Section */}
                <section style={{
                    padding: '60px 0',
                    backgroundColor: '#ffffff'
                }}>
                    <Container>
                        <Grid cols={{ default: 1, md: 2 }} gap="32px">
                            <div id='classroomClass' style={{
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    color: '#003366',
                                    marginBottom: '24px'
                                }}>
                                    In-Person Training
                                </h3>
                                <img 
                                    loading="lazy"
                                    alt='Classroom Training' 
                                    src={getImageSrc(classromom)}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>
                            <div id='onlineClass' style={{
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    color: '#003366',
                                    marginBottom: '24px'
                                }}>
                                    Online Training
                                </h3>
                                <img 
                                    loading="lazy"
                                    alt='Online Training' 
                                    src={getImageSrc(online)}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>
                        </Grid>
                    </Container>
                </section>
            </main>
        )
    } 
}
export default Landing;
