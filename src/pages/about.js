import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HeaderText from '../components/header';
import GoogleAd from '../components/GoogleAd';
import aboutPic from '../images/about-pic.png';
import Footer from '../components/footer';

class About extends Component {
    render(){
        return(
            <div className='page-tab-body'>
                <HeaderText />
                
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
                        About Us
                    </h1>
                    <p style={{ 
                        fontSize: '20px', 
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        In-person & Online Interactive & Innovative Training Center for Code4Kids | WebDevelopment | Full Stack Quality Assurance Courses
                    </p>
                </div>

                {/* Main Content Container */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    {/* Who We Are Section */}
                    <section style={{
                        marginBottom: '60px',
                        textAlign: 'center'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '36px',
                            marginBottom: '30px',
                            fontWeight: 'bold'
                        }}>
                            WHO WE ARE
                        </h2>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            textAlign: 'left'
                        }}>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#333',
                                marginBottom: '20px'
                            }}>
                                We are the leaders in providing quality training's of Code4Kids (5th Grade to 12th Grade) Web|UI|Frontend Development and Full Stack SQA Courses Training to Corporate and Individuals. This is the best In-person and Online training center at Hollis, Queens-NY.
                            </p>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#333'
                            }}>
                                Our main intention is to let our students learn through the Interactive process, practice and provide as much as detailed information as possible. Our training's are divided in three modules - Code4Kids program, Web|UI|Frontend Development program and Full Stack Quality Assurance Program.
                            </p>
                        </div>
                    </section>

                    {/* Instructor Section */}
                    <section style={{
                        marginBottom: '60px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '40px',
                        alignItems: 'flex-start'
                    }}>
                        {/* Image */}
                        <div style={{
                            flex: '0 0 300px',
                            textAlign: 'center'
                        }}>
                            <img 
                                src={aboutPic} 
                                alt='Md Shahnewaz Zaman' 
                                style={{
                                    width: '100%',
                                    maxWidth: '300px',
                                    borderRadius: '50%',
                                    border: '5px solid #00416A',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                }}
                            />
                        </div>

                        {/* Bio Content */}
                        <div style={{
                            flex: '1',
                            minWidth: '300px'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '32px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Md Shahnewaz Zaman (Shanto)
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                color: '#666',
                                marginBottom: '20px',
                                fontWeight: '500'
                            }}>
                                Tech Lead of Software Development at Global iTech Solutions (GITS)
                            </p>
                            
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '30px'
                            }}>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333',
                                    marginBottom: '20px'
                                }}>
                                    I've got 16+ years of diverse industry experience. Practicing Software Development principles, methodologies, mentoring and leading full-stack testing efforts and hands-on coding, leading with the ability to collaborate with software development in all phases of the SDLC and STLC, including planning, coding, testing, troubleshooting, deploying, and ongoing full-stack code maintenance and delivering right product on time.
                                </p>

                                {/* Certifications */}
                                <div style={{ marginBottom: '20px' }}>
                                    <h3 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '15px',
                                        fontWeight: 'bold'
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
                                            AWS (Amazon Web Services)
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
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '15px',
                                        fontWeight: 'bold'
                                    }}>
                                        Expertise:
                                    </h3>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333'
                                    }}>
                                        Expert in automation across tech stacks (HTML, CSS, Javascript, Java, C#.Net, Python, Selenium, Protractor, CypressIO, PlayWright, WebDriverIO, Appium, API's, Subject7, Katalon Studio, Tricentis Tosca, ACCELQ, Postman, Jmeter, JMeter, Gatling, JUnit, TestNG, Maven, SVN, Git, GitHub, CI Server Jenkins, Quality Center (ALM), JIRA, SQL, and Language-based: JAVA, JavaScript, HTML, CSS, XML, JQuery, JAVA Servlet, JSP) and different types of application (Web, Middleware, APIs and Mobile apps).
                                    </p>
                                </div>
                            </div>

                            {/* Role Description */}
                            <div style={{
                                backgroundColor: '#e8f4f8',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '30px'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold'
                                }}>
                                    Current Role
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333',
                                    marginBottom: '15px'
                                }}>
                                    In my current role, as Software Dev Architect Engineer, I am responsible to build, design, implement and maintain the automation framework and integrate it with CI/CD pipeline. I am also responsible for bringing in the best industry practices for Software Quality Assurance SMEs practices, coding standards, extensible framework design, and low maintenance automation solutions.
                                </p>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333'
                                }}>
                                    I enabled product owners and Agile teams to adopt Best practices & process in their projects and establish Software Quality Assurance first approach. I take immense pride in cultivating a culture of individual & company growth and actively mentor my team to maximize their potential.
                                </p>
                            </div>

                            {/* Founder & Training */}
                            <div style={{
                                backgroundColor: '#f8f9fa',
                                padding: '30px',
                                borderRadius: '8px',
                                marginBottom: '30px'
                            }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '20px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold'
                                }}>
                                    Founder & Mentor
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333',
                                    marginBottom: '15px'
                                }}>
                                    I am also the Founder of Global iTech Solutions Inc. Over the years I have trained hundreds of Quality Assurance Engineers to make a successful transition to Dev and Automation Engineer.
                                </p>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333'
                                }}>
                                    I am actively involved in mentoring, Training, and Coaching, entry-level professionals and fresher to make a successful career in Tech Engineering industry.
                                </p>
                            </div>

                            {/* Personal Note */}
                            <div style={{
                                backgroundColor: '#fff',
                                padding: '30px',
                                borderRadius: '8px',
                                border: '2px solid #00416A',
                                textAlign: 'center'
                            }}>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333',
                                    fontStyle: 'italic'
                                }}>
                                    I live in Hollis, Queens-NY, with my wife and lovely son & daughter. Please connect me through the social media below.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Global iTech Solutions Section */}
                    <section style={{
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
                                    Global iTech Solutions (GITS) is a specialist firm providing end-to-end software testing and quality assurance services. With over 15 years of "software testing excellence," GITS delivers precise, on-time, and budget-friendly testing solutions for web and mobile applications. 
                                    <a href="https://gitsics.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: 'bold', textDecoration: 'underline', marginLeft: '5px' }}>gitsics.com</a>
                                </p>
                            </div>

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
                                    GITS's service offerings go beyond standard QA — they include advanced testing capabilities such as penetration testing (security testing), network/web application security audits, and comprehensive test automation. Their expertise spans both functional and security aspects, making them a strong partner for businesses seeking high quality and robust software releases.
                                </p>
                            </div>

                            <div style={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                padding: '30px',
                                borderRadius: '8px'
                            }}>
                                <p style={{
                                    fontSize: '18px',
                                    lineHeight: '1.8'
                                }}>
                                    As a comparatively small but focused company (reported ~10–50 employees), GITS offers specialized QA, automation, and resourcing services — which makes them nimble, personal, and ideal for organizations that want flexible, high-touch partnership rather than large-scale outsourcing.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section style={{
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}>
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '40px',
                            borderRadius: '8px',
                            border: '2px solid #00416A'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '28px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}>
                                Ready to Get Started?
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                color: '#666',
                                marginBottom: '30px'
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
                                    to="/courses"
                                    style={{
                                        display: 'inline-block',
                                        padding: '15px 30px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        backgroundColor: '#00416A',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid #00416A'
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
                                    View Courses
                                </Link>
                                <Link 
                                    to="/how-it-works"
                                    style={{
                                        display: 'inline-block',
                                        padding: '15px 30px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: '#00416A',
                                        backgroundColor: '#ffffff',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid #00416A'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#f0f0f0';
                                        e.target.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#ffffff';
                                        e.target.style.transform = 'translateY(0)';
                                    }}
                                >
                                    How It Works
                                </Link>
                                <Link 
                                    to="/contact"
                                    style={{
                                        display: 'inline-block',
                                        padding: '15px 30px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        color: '#ffffff',
                                        backgroundColor: '#00416A',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid #00416A'
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
                                    Contact Us
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
}
export default About;
