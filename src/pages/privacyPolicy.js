import React, {Component} from 'react';
import HeaderText from '../components/header';
import Footer from '../components/footer';
import '../styles/base.css';
import '../styles/legalPages.css';

class PrivacyPolicy extends Component {
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
                        Privacy Policy
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
                            Global I Tech Solutions Inc. ("GITSICS," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website, enroll in training programs, participate in coaching sessions, or use our consulting and staffing services.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px',
                            fontWeight: '500'
                        }}>
                            By using our website or engaging with our services, you consent to the practices described in this Privacy Policy.
                        </p>
                    </section>

                    {/* Section 1: Information We Collect */}
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
                            1. Information We Collect
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            We may collect the following types of information:
                        </p>

                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: '15px',
                            marginTop: '25px',
                            fontWeight: '600'
                        }}>
                            a. Personal Information Provided by You
                        </h3>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Full name</li>
                            <li style={{ marginBottom: '10px' }}>Email address</li>
                            <li style={{ marginBottom: '10px' }}>Phone number</li>
                            <li style={{ marginBottom: '10px' }}>Mailing address (optional)</li>
                            <li style={{ marginBottom: '10px' }}>Payment and billing information</li>
                            <li style={{ marginBottom: '10px' }}>Employment background and resume details (for staffing or career support)</li>
                            <li style={{ marginBottom: '10px' }}>Training enrollment information</li>
                            <li style={{ marginBottom: '10px' }}>Social media or messaging contact information when voluntarily provided</li>
                        </ul>

                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: '15px',
                            marginTop: '25px',
                            fontWeight: '600'
                        }}>
                            b. Automatically Collected Information
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            When using our website, our system may automatically collect:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>IP address</li>
                            <li style={{ marginBottom: '10px' }}>Browser type and device information</li>
                            <li style={{ marginBottom: '10px' }}>Pages visited on our site</li>
                            <li style={{ marginBottom: '10px' }}>Date/time of your visit</li>
                            <li style={{ marginBottom: '10px' }}>Cookies and tracking pixels for analytics</li>
                        </ul>

                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: '15px',
                            marginTop: '25px',
                            fontWeight: '600'
                        }}>
                            c. Information From Third-Party Tools
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            If you use third-party platforms integrated with our services (Zoom, Google Meet, LMS systems, GitHub, payment processors), they may share limited information with us according to their privacy policies.
                        </p>
                    </section>

                    {/* Section 2: How We Use Your Information */}
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
                            2. How We Use Your Information
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We use your information for:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Enrolling you in training programs</li>
                            <li style={{ marginBottom: '10px' }}>Providing access to course materials and learning platforms</li>
                            <li style={{ marginBottom: '10px' }}>Delivering IT consulting, QA, or automation services</li>
                            <li style={{ marginBottom: '10px' }}>Providing staffing assistance and career coaching</li>
                            <li style={{ marginBottom: '10px' }}>Processing payments and invoices</li>
                            <li style={{ marginBottom: '10px' }}>Communicating updates, schedules, or service announcements</li>
                            <li style={{ marginBottom: '10px' }}>Improving our website, content, and training experience</li>
                            <li style={{ marginBottom: '10px' }}>Maintaining legal and regulatory compliance</li>
                            <li style={{ marginBottom: '10px' }}>Sending marketing or promotional content (only if you opt-in)</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '20px',
                            fontWeight: '600'
                        }}>
                            We <strong>do not sell or rent your personal information</strong> to third parties.
                        </p>
                    </section>

                    {/* Section 3: How We Share Information */}
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
                            3. How We Share Information
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            We may share your information only with:
                        </p>

                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: '15px',
                            marginTop: '25px',
                            fontWeight: '600'
                        }}>
                            a. Service Providers
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Trusted third parties who help us operate:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Payment processors</li>
                            <li style={{ marginBottom: '10px' }}>Learning management systems (LMS)</li>
                            <li style={{ marginBottom: '10px' }}>Cloud platforms</li>
                            <li style={{ marginBottom: '10px' }}>Communication tools (email, video conferencing)</li>
                            <li style={{ marginBottom: '10px' }}>Background screening tools for staffing (only with your consent)</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px',
                            fontStyle: 'italic'
                        }}>
                            Each provider is required to safeguard your data.
                        </p>

                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: '15px',
                            marginTop: '25px',
                            fontWeight: '600'
                        }}>
                            b. Legal Compliance
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We may disclose personal information if required by:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>New York State law</li>
                            <li style={{ marginBottom: '10px' }}>Federal regulations</li>
                            <li style={{ marginBottom: '10px' }}>Court orders or subpoenas</li>
                            <li style={{ marginBottom: '10px' }}>Preventing fraud or unauthorized access</li>
                        </ul>

                        <h3 style={{
                            color: '#00416A',
                            fontSize: '22px',
                            marginBottom: '15px',
                            marginTop: '25px',
                            fontWeight: '600'
                        }}>
                            c. Potential Employers (Staffing Purposes)
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            If you voluntarily submit your resume or request job placement assistance, we may share relevant information with employers <strong>only with your permission</strong>.
                        </p>
                    </section>

                    {/* Section 4: Data Security */}
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
                            4. Data Security
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We use industry-standard security measures to protect your personal data, including:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Encrypted storage</li>
                            <li style={{ marginBottom: '10px' }}>Secure payment gateways</li>
                            <li style={{ marginBottom: '10px' }}>Multi-factor authentication on sensitive systems</li>
                            <li style={{ marginBottom: '10px' }}>Controlled access to training platforms</li>
                            <li style={{ marginBottom: '10px' }}>Regular security reviews</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '20px',
                            fontStyle: 'italic'
                        }}>
                            However, no online system is 100% secure, and we cannot guarantee absolute protection.
                        </p>
                    </section>

                    {/* Section 5: Cookies and Tracking Technologies */}
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
                            5. Cookies and Tracking Technologies
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We use cookies to:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Improve website performance</li>
                            <li style={{ marginBottom: '10px' }}>Analyze visitor behavior</li>
                            <li style={{ marginBottom: '10px' }}>Personalize user experience</li>
                            <li style={{ marginBottom: '10px' }}>Support marketing and remarketing campaigns</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '20px'
                        }}>
                            You may disable cookies in your browser settings, but some features may not work properly.
                        </p>
                    </section>

                    {/* Section 6: Data Retention */}
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
                            6. Data Retention
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We retain your personal information only as long as necessary for:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Training access</li>
                            <li style={{ marginBottom: '10px' }}>Legal compliance</li>
                            <li style={{ marginBottom: '10px' }}>Financial recordkeeping</li>
                            <li style={{ marginBottom: '10px' }}>Staffing or consulting services</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '20px'
                        }}>
                            Upon request, you may ask for your data to be deleted (see Section 10).
                        </p>
                    </section>

                    {/* Section 7: Children's Privacy */}
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
                            7. Children's Privacy
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Our services are not intended for individuals under <strong>18 years of age</strong>.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            We do not knowingly collect information from minors.
                        </p>
                    </section>

                    {/* Section 8: Links to Third-Party Websites */}
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
                            8. Links to Third-Party Websites
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Our website may contain external links.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We are not responsible for the privacy practices of third-party platforms.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            Please review their policies before providing personal information.
                        </p>
                    </section>

                    {/* Section 9: Marketing Communications */}
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
                            9. Marketing Communications
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            If you opt into newsletters or updates:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>We may send training alerts, job opportunities, and service announcements</li>
                            <li style={{ marginBottom: '10px' }}>You can unsubscribe at any time using the link in the email</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '20px'
                        }}>
                            We do not send spam or sell subscriber lists.
                        </p>
                    </section>

                    {/* Section 10: Your Rights */}
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
                            10. Your Rights (Under New York State & General Privacy Standards)
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            You have the right to:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Access your personal data</li>
                            <li style={{ marginBottom: '10px' }}>Request corrections</li>
                            <li style={{ marginBottom: '10px' }}>Request deletion</li>
                            <li style={{ marginBottom: '10px' }}>Opt out of marketing</li>
                            <li style={{ marginBottom: '10px' }}>Withdraw consent</li>
                            <li style={{ marginBottom: '10px' }}>Request a copy of your stored data</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '20px'
                        }}>
                            To make a request, contact us at:
                        </p>
                        <div style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px'
                        }}>
                            <p style={{ marginBottom: '10px' }}>
                                Email: <a href="mailto:mdzaman.gits@gmail.com" style={{ color: '#00416A', textDecoration: 'none' }}>mdzaman.gits@gmail.com</a>
                            </p>
                            <p style={{ marginBottom: '10px' }}>
                                Phone: <a href="tel:+19175616554" style={{ color: '#00416A', textDecoration: 'none' }}>+1(917)561-6554</a>
                            </p>
                        </div>
                    </section>

                    {/* Section 11: Data Transfer */}
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
                            11. Data Transfer
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            If we transfer data outside the United States (e.g., cloud services), we ensure compliance with applicable privacy regulations to protect your information.
                        </p>
                    </section>

                    {/* Section 12: Updates to This Privacy Policy */}
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
                            12. Updates to This Privacy Policy
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We may update this Privacy Policy periodically.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Changes become effective immediately once posted on this page.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            Continued use of the website after changes indicates acceptance.
                        </p>
                    </section>

                    {/* Section 13: Contact Us */}
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
                            13. Contact Us
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            If you have questions regarding this Privacy Policy or want to exercise your data rights, contact:
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

export default PrivacyPolicy;

