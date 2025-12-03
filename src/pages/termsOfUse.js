import React, {Component} from 'react';
import HeaderText from '../components/header';
import Footer from '../components/footer';

class TermsOfUse extends Component {
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
                        Terms of Use
                    </h1>
                    <p style={{ 
                        fontSize: '20px', 
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Global I Tech Solutions Inc.
                    </p>
                    <p style={{ 
                        fontSize: '16px', 
                        marginTop: '10px',
                        opacity: '0.9'
                    }}>
                        Effective Date: 01/01/2017
                    </p>
                </div>

                {/* Main Content Container */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px 60px'
                }}>
                    {/* Introduction */}
                    <section style={{
                        marginBottom: '40px',
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            margin: 0
                        }}>
                            Welcome to the Global I Tech Solutions Inc. ("GITSICS", "we", "our", "us") website. By accessing or using our website, training services, staffing services, learning materials, and any other digital or in-person offerings provided by Global I Tech Solutions Inc., you agree to comply with and be bound by the following Terms of Use.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px',
                            fontWeight: '500'
                        }}>
                            If you do not agree with these terms, please discontinue use of our services immediately.
                        </p>
                    </section>

                    {/* Section 1: Company Information */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            1. Company Information
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Global I Tech Solutions Inc. is a New York State registered corporation providing <strong>IT Training, Consulting, and Staffing Services</strong>. Our services include, but are not limited to:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Software QA & Automation Training</li>
                            <li style={{ marginBottom: '10px' }}>SDET / Full-Stack QA Training</li>
                            <li style={{ marginBottom: '10px' }}>Corporate Training Programs</li>
                            <li style={{ marginBottom: '10px' }}>Career Development Coaching</li>
                            <li style={{ marginBottom: '10px' }}>IT Staffing & Placement Services</li>
                            <li style={{ marginBottom: '10px' }}>AI-Driven QA and Automation Framework Development</li>
                            <li style={{ marginBottom: '10px' }}>Consulting Services for Software Quality Engineering</li>
                        </ul>
                    </section>

                    {/* Section 2: Acceptance of Terms */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            2. Acceptance of Terms
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            By using our website, enrolling in training, or engaging in staffing/consulting services, you acknowledge that you are at least 18 years old and legally able to enter into this agreement. These Terms of Use apply to all visitors, clients, trainees, and partners.
                        </p>
                    </section>

                    {/* Section 3: Use of Website & Services */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            3. Use of Website & Services
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            You agree to use the website and services for lawful purposes only. You must not:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Misuse, hack, or attempt unauthorized access to any part of the website.</li>
                            <li style={{ marginBottom: '10px' }}>Copy, reproduce, or distribute training materials without written permission.</li>
                            <li style={{ marginBottom: '10px' }}>Use GITSICS content for commercial purposes without authorization.</li>
                            <li style={{ marginBottom: '10px' }}>Engage in any activity that disrupts the performance of our platform or services.</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px',
                            fontStyle: 'italic'
                        }}>
                            GITSICS reserves the right to suspend or terminate access for violation of these terms.
                        </p>
                    </section>

                    {/* Section 4: Training Materials & Intellectual Property */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            4. Training Materials & Intellectual Property
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            All training videos, lectures, documents, frameworks, automation code templates, slides, branding assets, and digital resources are the <strong>exclusive intellectual property of Global I Tech Solutions Inc.</strong>
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            You are granted a <strong>limited, non-transferable, non-exclusive license</strong> to use these materials for personal education only.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            You may <strong>not</strong>:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Share paid course content publicly or privately</li>
                            <li style={{ marginBottom: '10px' }}>Record training sessions without permission</li>
                            <li style={{ marginBottom: '10px' }}>Sell, distribute, or republish GITSICS materials</li>
                            <li style={{ marginBottom: '10px' }}>Claim ownership of any training or automation framework templates</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px',
                            fontStyle: 'italic'
                        }}>
                            Violation of IP rights may result in legal action.
                        </p>
                    </section>

                    {/* Section 5: Staffing & Consulting Services */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            5. Staffing & Consulting Services
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            GITSICS provides IT staffing and consultation services based on availability and client requirements. We do not guarantee job placement.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Clients engaging staffing services agree to:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Provide accurate job descriptions and requirements</li>
                            <li style={{ marginBottom: '10px' }}>Comply with applicable employment laws</li>
                            <li style={{ marginBottom: '10px' }}>Abide by the terms of any staffing contract executed between both parties</li>
                        </ul>
                    </section>

                    {/* Section 6: Payments, Refunds & Enrollment */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            6. Payments, Refunds & Enrollment
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Payment terms for training, consulting, and staffing services will be displayed during checkout or on the invoice.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Unless stated otherwise in a specific program agreement:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>All training fees are <strong>non-refundable</strong> once course materials or live sessions have been accessed</li>
                            <li style={{ marginBottom: '10px' }}>Refund requests are evaluated on a case-by-case basis</li>
                            <li style={{ marginBottom: '10px' }}>Installment plans must be paid on schedule</li>
                            <li style={{ marginBottom: '10px' }}>Failure to pay may result in removal from course access</li>
                        </ul>
                    </section>

                    {/* Section 7: AI-Based Tools & Automation Frameworks */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            7. AI-Based Tools & Automation Frameworks
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Some of our training programs and consulting services may include the use of AI tools for:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Test generation</li>
                            <li style={{ marginBottom: '10px' }}>Code review</li>
                            <li style={{ marginBottom: '10px' }}>Automation development</li>
                            <li style={{ marginBottom: '10px' }}>Predictive analytics</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px'
                        }}>
                            You understand and agree that AI tools may provide suggestions but do not replace human judgment.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px',
                            fontStyle: 'italic'
                        }}>
                            GITSICS is not responsible for outcomes resulting from misuse of AI-generated code or recommendations.
                        </p>
                    </section>

                    {/* Section 8: Third-Party Services & Tools */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            8. Third-Party Services & Tools
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We may use third-party platforms such as Zoom, Google Meet, LMS systems, project management boards, or code repositories.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Your use of these tools is subject to their individual terms and privacy policies.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px',
                            fontStyle: 'italic'
                        }}>
                            GITSICS is not responsible for downtime, data loss, or performance issues of third-party tools.
                        </p>
                    </section>

                    {/* Section 9: Privacy & Data Handling */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            9. Privacy & Data Handling
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We may collect personal information during enrollment, including your name, email, phone number, and professional details.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We use this information only for:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Communication</li>
                            <li style={{ marginBottom: '10px' }}>Enrollment processing</li>
                            <li style={{ marginBottom: '10px' }}>Career placement support</li>
                            <li style={{ marginBottom: '10px' }}>Regulatory compliance (New York State business laws)</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px'
                        }}>
                            We do not sell personal information to third parties.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px'
                        }}>
                            See our <strong>Privacy Policy</strong> for full details (I can write this for you as well).
                        </p>
                    </section>

                    {/* Section 10: Limitation of Liability */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            10. Limitation of Liability
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            To the fullest extent permitted by New York State law, Global I Tech Solutions Inc. is <strong>not liable</strong> for:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Loss of data</li>
                            <li style={{ marginBottom: '10px' }}>Job placement outcomes</li>
                            <li style={{ marginBottom: '10px' }}>Business interruption</li>
                            <li style={{ marginBottom: '10px' }}>Errors in third-party systems</li>
                            <li style={{ marginBottom: '10px' }}>Damages resulting from use of training materials or consulting deliverables</li>
                            <li style={{ marginBottom: '10px' }}>Any indirect, incidental, or consequential damages</li>
                        </ul>
                    </section>

                    {/* Section 11: No Guarantee of Employment */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            11. No Guarantee of Employment
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            While we provide hands-on training, mentorship, and staffing support, we do not guarantee employment or interview selection.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px'
                        }}>
                            Career outcomes depend on individual skills, effort, and market conditions.
                        </p>
                    </section>

                    {/* Section 12: Updates to Terms */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            12. Updates to Terms
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            GITSICS may update these Terms of Use at any time.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Changes become effective immediately once posted.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px'
                        }}>
                            It is your responsibility to review these terms periodically.
                        </p>
                    </section>

                    {/* Section 13: Governing Law */}
                    <section style={{
                        marginBottom: '40px'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            13. Governing Law
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            These Terms of Use are governed by the <strong>laws of the State of New York</strong>, including all rules applicable to corporations and service providers in the technology and training industry.
                        </p>
                    </section>

                    {/* Section 14: Contact Information */}
                    <section style={{
                        marginBottom: '40px',
                        backgroundColor: '#f8f9fa',
                        padding: '30px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            14. Contact Information
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            For questions or concerns regarding these terms, please contact:
                        </p>
                        <div style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                                Global I Tech Solutions Inc.
                            </p>
                            <p style={{ marginBottom: '10px' }}>
                                Email: <a href="mailto:mdzaman.gits@gmail.com" style={{ color: '#00416A', textDecoration: 'none' }}>mdzaman.gits@gmail.com</a>
                            </p>
                            <p style={{ marginBottom: '10px' }}>
                                Phone: <a href="tel:+19175616554" style={{ color: '#00416A', textDecoration: 'none' }}>+1(917)561-6554</a>
                            </p>
                            <p style={{ marginBottom: '10px' }}>
                                Website: <a href="https://gitsics.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'none' }}>https://gitsics.com</a>
                            </p>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        );
    }
}

export default TermsOfUse;

