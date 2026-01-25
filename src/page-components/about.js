import React, {Component} from 'react';
import Link from 'next/link';
import aboutPic from '../images/about-pic.png';
import link from '../utilities/links.json';
import { getImageSrc } from '../utils/getImageSrc';
import { PageHeader, Section, Container, Card } from '../components/ui';
import { colors, spacing, typography, shadows, borderRadius, buttonStyles, transitions } from '../utils/universityDesignSystem';
import { hoverHandlers } from '../utils/globalStyles';
import '../styles/base.css';
import '../styles/about.css';

class About extends Component {
    render(){
        return(
            <div className='page-tab-body' style={{ width: '100%', margin: 0, padding: 0 }}>                
                {/* Hero Section */}
                <PageHeader
                    title="About Us"
                    subtitle="In-person & Online Interactive & Innovative Training Center for Code4Kids | WebDevelopment | Full Stack Quality Assurance Courses"
                    variant="hero"
                />

                {/* Main Content Container */}
                <Container size="medium">
                    {/* Who We Are Section */}
                    <Section variant="large" style={{ textAlign: 'center' }}>
                        <h2 style={{
                            color: colors.primary,
                            fontSize: typography.fontSize['3xl'],
                            marginBottom: spacing[5],
                            fontWeight: typography.fontWeight.bold
                        }}>
                            WHO WE ARE
                        </h2>
                        <Card variant="elevated" style={{ textAlign: 'left' }}>
                            <p style={{
                                fontSize: typography.fontSize.lg,
                                lineHeight: typography.lineHeight.relaxed,
                                color: colors.textPrimary,
                                marginBottom: spacing[5]
                            }}>
                                Global I Tech Solutions is a leading provider of technology education, offering comprehensive training programs in Code4Kids (grades 5-12), Web and Frontend Development, and Full Stack Quality Assurance Engineering. We serve both corporate clients and individual learners through our state-of-the-art training facility located in Hollis, Queens, New York, with both in-person and online delivery options.
                            </p>
                            <p style={{
                                fontSize: typography.fontSize.lg,
                                lineHeight: typography.lineHeight.relaxed,
                                color: colors.textPrimary
                            }}>
                                Our educational approach emphasizes interactive learning, hands-on practice, and comprehensive curriculum delivery. Our training programs are organized into three specialized tracks: the Code4Kids program for young learners, the Web and Frontend Development program for software engineering, and the Full Stack Quality Assurance Engineering program for comprehensive testing expertise.
                            </p>
                        </Card>
                    </Section>

                    {/* Instructor Section */}
                    <Section variant="large" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: spacing[10],
                        alignItems: 'flex-start'
                    }}>
                        {/* Image */}
                        <div style={{
                            flex: '0 0 300px',
                            textAlign: 'center'
                        }}>
                            <img 
                                src={getImageSrc(aboutPic)} 
                                alt='Md Shahnewaz Zaman' 
                                style={{
                                    width: '100%',
                                    maxWidth: '300px',
                                    borderRadius: '50%',
                                    border: `5px solid ${colors.primary}`,
                                    boxShadow: shadows.md
                                }}
                            />
                        </div>

                        {/* Bio Content */}
                        <div style={{
                            flex: '1',
                            minWidth: '300px'
                        }}>
                            <h2 style={{
                                color: colors.primary,
                                fontSize: '32px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Md Shahnewaz Zaman (Shanto)
                            </h2>
                            <p style={{
                                fontSize: typography.fontSize.lg,
                                color: colors.textSecondary,
                                marginBottom: spacing[2],
                                fontWeight: typography.fontWeight.medium
                            }}>
                                Tech Lead of Software Development at Global iTech Solutions (GITS)
                            </p>
                            <div style={{ marginBottom: spacing[5] }}>
                                <a 
                                    href="https://www.linkedin.com/in/zamanmd/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: `${spacing[2]} ${spacing[5]}`,
                                        backgroundColor: colors.linkedin,
                                        color: colors.white,
                                        textDecoration: 'none',
                                        borderRadius: borderRadius.md,
                                        fontSize: typography.fontSize.base,
                                        fontWeight: typography.fontWeight.medium,
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = colors.linkedinDark;
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = colors.linkedin;
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <svg 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor" 
                                        style={{ marginRight: '8px' }}
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                            </div>
                            
                            <Card variant="base" style={{ marginBottom: spacing[8] }}>
                                <p style={{
                                    fontSize: typography.fontSize.base,
                                    lineHeight: typography.lineHeight.relaxed,
                                    color: colors.textPrimary,
                                    marginBottom: spacing[5]
                                }}>
                                    With over 16 years of diverse industry experience, I bring extensive expertise in software development principles, methodologies, and best practices. My professional background encompasses mentoring and leading full-stack testing initiatives, hands-on software development, and collaborative engagement across all phases of the Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC). This includes strategic planning, code development, comprehensive testing, troubleshooting, deployment, and ongoing maintenance of full-stack applications, consistently delivering high-quality products within established timelines.
                                </p>

                                {/* Certifications */}
                                <div style={{ marginBottom: spacing[5] }}>
                                    <h3 style={{
                                        color: colors.primary,
                                        fontSize: typography.fontSize.xl,
                                        marginBottom: spacing[4],
                                        fontWeight: typography.fontWeight.bold
                                    }}>
                                        Certifications:
                                    </h3>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0,
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                        gap: '10px'
                                    }}>
                                        <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            SAFe (Scaled Agile Framework)
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            ASTQB - CTFL & CTAL-TAE, CT-AI
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            CSM (Certified Scrum Master)
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            AWS (AWS Solutions architect)
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            Security+
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            TOSCA (Test Automation Tool)
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            DHS (Department of Homeland Security)
                                        </li>
                                        <li style={{ paddingLeft: '20px', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#00416A', fontWeight: 'bold' }}>•</span>
                                            ACCELQ (Test Automation / Continuous Testing Tool)
                                        </li>
                                    </ul>
                </div>

                                {/* Tech Stack */}
                    <div>
                                    <h3 style={{
                                        color: colors.primary,
                                        fontSize: '20px',
                                        marginBottom: '15px',
                                        fontWeight: 'bold'
                                    }}>
                                        Expertise:
                                    </h3>
                                    <p style={{
                                        fontSize: typography.fontSize.base,
                                        lineHeight: typography.lineHeight.relaxed,
                                        color: colors.textPrimary
                                    }}>
                                        Expertise encompasses comprehensive automation testing across diverse technology ecosystems, including programming languages (Java, JavaScript, TypeScript, Python, C#.NET), web technologies (HTML5, CSS3, XML, jQuery, React, Node.js), and enterprise automation frameworks (Selenium WebDriver, Playwright, Cypress, WebDriverIO, Protractor, Appium). Additional proficiency includes API testing tools (Postman, REST Assured, SuperTest, Frisby), performance testing platforms (JMeter, Gatling, K6), enterprise test automation solutions (Tricentis Tosca, Katalon Studio, ACCELQ, Subject7), test management and CI/CD tools (JIRA, Quality Center/ALM, Jenkins, GitHub Actions, Azure DevOps), build and version control systems (Maven, Gradle, Git, SVN), and testing frameworks (JUnit, TestNG, Jest, Mocha). This expertise extends across multiple application domains including web applications, middleware services, RESTful and GraphQL APIs, and native mobile applications for iOS and Android platforms.
                                    </p>
                                </div>
                            </Card>

                            {/* Role Description */}
                            <Card variant="outlined" style={{
                                backgroundColor: colors.gray50,
                                marginBottom: spacing[8]
                            }}>
                                <h3 style={{
                                    color: colors.primary,
                                    fontSize: typography.fontSize.xl,
                                    marginBottom: spacing[4],
                                    fontWeight: typography.fontWeight.bold
                                }}>
                                    Current Role
                                </h3>
                                <p style={{
                                    fontSize: typography.fontSize.base,
                                    lineHeight: typography.lineHeight.relaxed,
                                    color: colors.textPrimary,
                                    marginBottom: spacing[4]
                                }}>
                                    In my current role as Software Development Engineer in Test (SDET) Architect, I am responsible for architecting, designing, implementing, and maintaining enterprise-level automation frameworks with seamless integration into continuous integration and continuous deployment (CI/CD) pipelines. My responsibilities include establishing and promoting industry best practices for Software Quality Assurance, developing comprehensive coding standards, designing extensible and scalable framework architectures, and delivering low-maintenance automation solutions that enhance organizational efficiency and quality outcomes.
                                </p>
                                <p style={{
                                    fontSize: typography.fontSize.base,
                                    lineHeight: typography.lineHeight.relaxed,
                                    color: colors.textPrimary,
                                    marginBottom: spacing[4]
                                }}>
                                    I facilitate the adoption of best practices and standardized processes among product owners and Agile development teams, establishing a quality-first approach to software development. Through strategic leadership and mentorship, I foster a culture of professional development and organizational excellence, actively guiding team members to achieve their highest potential and contribute to both individual career advancement and company-wide success.
                                </p>
                                <p style={{
                                    fontSize: typography.fontSize.base,
                                    lineHeight: typography.lineHeight.relaxed,
                                    color: colors.textPrimary
                                }}>
                                    In addition to my architectural responsibilities, I serve as a technology educator and trainer, delivering comprehensive training programs in software quality assurance, test automation, and full-stack development. Through structured curriculum development and hands-on instruction, I prepare students and professionals for successful careers in technology, combining industry expertise with pedagogical excellence to bridge the gap between theoretical knowledge and practical application.
                                </p>
                            </Card>

                            {/* Founder & Training */}
                            <Card variant="base" style={{ marginBottom: spacing[8] }}>
                                <h3 style={{
                                    color: colors.primary,
                                    fontSize: typography.fontSize.xl,
                                    marginBottom: spacing[4],
                                    fontWeight: typography.fontWeight.bold
                                }}>
                                    Founder & Educator
                                </h3>
                                <p style={{
                                    fontSize: typography.fontSize.base,
                                    lineHeight: typography.lineHeight.relaxed,
                                    color: colors.textPrimary,
                                    marginBottom: spacing[4]
                                }}>
                                    As the Founder of Global I Tech Solutions Inc., I have established an educational institution dedicated to advancing technology education and professional development. Through comprehensive training programs, I have successfully guided hundreds of Quality Assurance Engineers in their transition to Software Development and Test Automation Engineering roles, enabling career advancement and professional growth within the technology sector.
                                </p>
                                <p style={{
                                    fontSize: typography.fontSize.base,
                                    lineHeight: typography.lineHeight.relaxed,
                                    color: colors.textPrimary
                                }}>
                                    I am actively engaged in mentoring, training, and coaching initiatives, working closely with entry-level professionals and recent graduates to facilitate their successful entry into the technology engineering industry. Through personalized guidance, structured learning pathways, and industry-aligned curriculum, I support emerging professionals in developing the technical competencies, professional skills, and industry knowledge necessary for long-term career success in software engineering and quality assurance.
                                </p>
                            </Card>

                            {/* Personal Note */}
                            <div style={{
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '8px',
                                border: '2px solid #00416A',
                                textAlign: 'center',
                                marginBottom: '30px'
                            }}>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333',
                                    fontStyle: 'italic',
                                    marginBottom: '20px'
                                }}>
                                    I live in Hollis, Queens-NY, with my wife and lovely son & daughter. Please connect me through the social media below.
                                </p>
                                
                                {/* Social Links */}
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '15px',
                                    justifyContent: 'center',
                                    marginTop: '20px'
                                }}>
                                    <a 
                                        href={link.FACEBOOK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '10px 20px',
                                            backgroundColor: '#1877f2',
                                            color: '#ffffff',
                                            textDecoration: 'none',
                                            borderRadius: '6px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#1565c0';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#1877f2';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                        Facebook
                                    </a>
                                    <a 
                                        href={link.GITHUB}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: `${spacing[2]} ${spacing[5]}`,
                                            backgroundColor: colors.github,
                                            color: colors.white,
                                            textDecoration: 'none',
                                            borderRadius: borderRadius.md,
                                            fontSize: typography.fontSize.base,
                                            fontWeight: typography.fontWeight.medium,
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = colors.githubDark;
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = colors.github;
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        GitHub
                                    </a>
                                    <a 
                                        href={link.INSTRAGRAM}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '10px 20px',
                                            backgroundColor: '#e4405f',
                                            color: '#ffffff',
                                            textDecoration: 'none',
                                            borderRadius: '6px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#c13584';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#e4405f';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        Instagram
                                    </a>
                                    <a 
                                        href={link.YOUTUBE}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '10px 20px',
                                            backgroundColor: colors.youtube,
                                            color: '#ffffff',
                                            textDecoration: 'none',
                                            borderRadius: '6px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = colors.secondaryDark;
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = colors.youtube;
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                        YouTube
                                    </a>
                                    <a 
                                        href={link.SLACK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '10px 20px',
                                            backgroundColor: '#4a154b',
                                            color: '#ffffff',
                                            textDecoration: 'none',
                                            borderRadius: '6px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#350d36';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#4a154b';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 18.956 0a2.528 2.528 0 0 1 2.523 2.522v2.52H18.956zM18.956 6.313a2.528 2.528 0 0 1 2.523 2.521 2.528 2.528 0 0 1-2.523 2.521h-2.52V8.834a2.528 2.528 0 0 1 2.52-2.521zM15.165 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 20.207 8.834a2.528 2.528 0 0 1-2.521 2.523h-2.521V8.834zM15.165 18.956a2.528 2.528 0 0 1-2.521 2.523 2.528 2.528 0 0 1-2.521-2.523v-2.52h2.521a2.528 2.528 0 0 1 2.521 2.52v2.52zM13.644 15.165a2.528 2.528 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 16.165 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
                                        </svg>
                                        Slack
                                    </a>
                                    <a 
                                        href="https://www.linkedin.com/in/zamanmd/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            padding: '10px 20px',
                                            backgroundColor: colors.linkedin,
                                            color: '#ffffff',
                                            textDecoration: 'none',
                                            borderRadius: '6px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#005885';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = colors.linkedin;
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Global iTech Solutions Section */}
                    <Section variant="large">
                        <div style={{
                            backgroundColor: '#00416A',
                            color: '#ffffff',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}>
                            <h2 style={{
                                fontSize: '32px',
                                marginBottom: '30px',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                Global iTech Solutions (GITS)
                            </h2>
                            <h3 style={{
                                fontSize: '24px',
                                marginBottom: '20px',
                                textAlign: 'center',
                                opacity: '0.9'
                            }}>
                                Quality-First Software Testing & Security Partner
                            </h3>
                            
                            <div style={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '20px'
                            }}>
                                <p style={{
                                    fontSize: '18px',
                                    lineHeight: '1.8',
                                    marginBottom: '20px'
                                }}>
                                    Global I Tech Solutions (GITS) is a specialized technology education and quality assurance services organization, providing comprehensive end-to-end software testing and quality assurance solutions. With over 15 years of industry experience and a commitment to excellence in software testing, GITS delivers precise, timely, and cost-effective testing solutions for web and mobile applications across diverse technology platforms. Learn more at <a href="https://gitsics.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: 'bold', textDecoration: 'underline' }}>gitsics.com</a>.
                                </p>
                            </div>

                            <div style={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '20px'
                            }}>
                                <p style={{
                                    fontSize: typography.fontSize.lg,
                                    lineHeight: typography.lineHeight.relaxed,
                                    color: colors.textPrimary,
                                    marginBottom: spacing[5]
                                }}>
                                    GITS's service offerings go beyond standard QA — they include advanced testing capabilities such as penetration testing (security testing), network/web application security audits, and comprehensive test automation. Their expertise spans both functional and security aspects, making them a strong partner for businesses seeking high quality and robust software releases.
                                </p>
                            </div>

                            <div style={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                padding: '30px',
                                borderRadius: '8px'
                            }}>
                                <p style={{
                                    fontSize: typography.fontSize.lg,
                                    lineHeight: typography.lineHeight.relaxed,
                                    color: colors.textPrimary
                                }}>
                                    As a focused, specialized organization, Global I Tech Solutions offers tailored quality assurance, test automation, and technical resourcing services. Our organizational structure enables agile responsiveness, personalized client engagement, and flexible partnership models, making us an ideal choice for organizations seeking dedicated, high-touch collaboration rather than large-scale outsourcing arrangements.
                                </p>
                    </div>
                        </div>
                    </Section>

                    {/* Call to Action */}
                    <Section variant="large" style={{ textAlign: 'center' }}>
                        <Card variant="outlined" style={{
                            border: `2px solid ${colors.primary}`
                        }}>
                            <h2 style={{
                                color: colors.primary,
                                fontSize: typography.fontSize['3xl'],
                                marginBottom: spacing[5],
                                fontWeight: typography.fontWeight.bold
                            }}>
                                Ready to Get Started?
                            </h2>
                            <p style={{
                                fontSize: typography.fontSize.lg,
                                color: colors.textSecondary,
                                marginBottom: spacing[8],
                                lineHeight: typography.lineHeight.relaxed
                            }}>
                                Explore our courses, learn about our services, or get in touch with us.
                            </p>
                            <div style={{
                                display: 'flex',
                                gap: '20px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}>
                                <Link 
                                    href="/courses"
                                    style={{
                                        backgroundColor: colors.secondary,
                                        color: colors.white,
                                        padding: '15px 30px',
                                        fontSize: '18px',
                                        fontWeight: typography.fontWeight.semibold,
                                        borderRadius: borderRadius.md,
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        transition: transitions.base,
                                        border: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.secondaryDark;
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.secondary;
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    View Courses
                                </Link>
                                <Link 
                                    href="/how-it-works"
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: colors.primary,
                                        padding: '15px 30px',
                                        fontSize: '18px',
                                        fontWeight: typography.fontWeight.semibold,
                                        borderRadius: borderRadius.md,
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        border: `2px solid ${colors.primary}`,
                                        transition: transitions.base
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.primary;
                                        e.currentTarget.style.color = colors.white;
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.color = colors.primary;
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    How It Works
                                </Link>
                                <a 
                                    href="https://gitsics.com/contact/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        backgroundColor: colors.secondary,
                                        color: colors.white,
                                        padding: '15px 30px',
                                        fontSize: '18px',
                                        fontWeight: typography.fontWeight.semibold,
                                        borderRadius: borderRadius.md,
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        transition: transitions.base,
                                        border: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.secondaryDark;
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.secondary;
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Contact Us
                                </a>
                            </div>
                        </Card>
                    </Section>
                </Container>
            </div> 
        );
    }
}
export default About;
