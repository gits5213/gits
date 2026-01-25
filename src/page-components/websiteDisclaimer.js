import React, {Component} from 'react';
import '../styles/base.css';
import '../styles/legalPages.css';

class WebsiteDisclaimer extends Component {
    render(){
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
                        Website Disclaimer
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
                            The information provided on this website ("Site") by <strong>Global I Tech Solutions Inc. ("GITSICS," "we," "our," or "us")</strong> is for <strong>general informational, educational, and training purposes only</strong>. By using this website, you agree to the terms outlined below.
                        </p>
                    </section>

                    {/* Section 1: No Professional or Legal Advice */}
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
                            1. No Professional or Legal Advice
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            All content—including articles, videos, training materials, tutorials, automation samples, and consulting information—is provided <em>as-is</em> and should <strong>not</strong> be interpreted as professional legal, financial, or business advice.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            fontWeight: '500'
                        }}>
                            You should always consult a qualified professional before making decisions based on any information obtained from this website.
                        </p>
                    </section>

                    {/* Section 2: No Employment Guarantee */}
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
                            2. No Employment Guarantee
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            While we offer training, guidance, mentorship, and staffing assistance, <strong>Global I Tech Solutions Inc. does not guarantee job placement, interview selection, or employment outcomes</strong>.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            Career success depends on individual effort, skills, market conditions, and employer requirements.
                        </p>
                    </section>

                    {/* Section 3: Accuracy of Information */}
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
                            3. Accuracy of Information
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We strive to keep content accurate and up-to-date; however:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>We make <strong>no warranties</strong> regarding completeness, reliability, or accuracy.</li>
                            <li style={{ marginBottom: '10px' }}>Information may change without notice.</li>
                            <li style={{ marginBottom: '10px' }}>Technical tutorials, frameworks, and tools may evolve over time.</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '20px',
                            fontWeight: '500'
                        }}>
                            You use the information at your own risk.
                        </p>
                    </section>

                    {/* Section 4: External Links Disclaimer */}
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
                            4. External Links Disclaimer
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Our website may contain links to third-party websites, tools, or platforms (e.g., Zoom, LMS portals, GitHub, training resources).
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We do not endorse, control, or guarantee the accuracy, security, or privacy practices of any third-party websites.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            You are responsible for reviewing the terms and policies of those external services.
                        </p>
                    </section>

                    {/* Section 5: Training Content & AI Tools */}
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
                            5. Training Content & AI Tools
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Some training programs may include the use of AI-driven tools, automation frameworks, or code generation systems.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            These tools may produce suggestions or outputs that require human review.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            fontWeight: '500'
                        }}>
                            GITSICS is <strong>not responsible</strong> for errors, misuse, unintended consequences, or system behavior resulting from AI-generated material.
                        </p>
                    </section>

                    {/* Section 6: Limitation of Liability */}
                    <section style={{
                        marginBottom: '40px',
                        backgroundColor: '#fff5f5',
                        padding: '30px',
                        borderRadius: '8px',
                        border: '2px solid #ff6b6b'
                    }}>
                        <h2 style={{
                            color: '#c92a2a',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #ff6b6b',
                            paddingBottom: '10px'
                        }}>
                            6. Limitation of Liability
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            To the fullest extent permitted by New York State law, <strong>GITSICS is not liable</strong> for any direct, indirect, incidental, consequential, or special damages, including but not limited to:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Loss of data</li>
                            <li style={{ marginBottom: '10px' }}>Loss of income or opportunity</li>
                            <li style={{ marginBottom: '10px' }}>Business interruption</li>
                            <li style={{ marginBottom: '10px' }}>Errors in training content or automation code</li>
                            <li style={{ marginBottom: '10px' }}>Website downtime or technical failures</li>
                            <li style={{ marginBottom: '10px' }}>Issues arising from external platforms or tools</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '20px',
                            fontWeight: '500'
                        }}>
                            Your use of this website is entirely at your own risk.
                        </p>
                    </section>

                    {/* Section 7: No Warranties */}
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
                            7. No Warranties
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            GITSICS provides this website <strong>"as is"</strong> without warranties of any kind, express or implied, including but not limited to:
                        </p>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '10px' }}>Fitness for a particular purpose</li>
                            <li style={{ marginBottom: '10px' }}>Non-infringement</li>
                            <li style={{ marginBottom: '10px' }}>Accuracy or reliability</li>
                            <li style={{ marginBottom: '10px' }}>Continuous availability</li>
                        </ul>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '20px'
                        }}>
                            We do not guarantee error-free operation or uninterrupted access.
                        </p>
                    </section>

                    {/* Section 8: Intellectual Property Notice */}
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
                            8. Intellectual Property Notice
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            All materials on this website—including text, images, course content, code samples, frameworks, videos, logos, and downloads—are the property of Global I Tech Solutions Inc. and protected under copyright laws.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            fontWeight: '500'
                        }}>
                            Unauthorized copying or distribution is strictly prohibited.
                        </p>
                    </section>

                    {/* Section 9: Changes to This Disclaimer */}
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
                            9. Changes to This Disclaimer
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            We may update this disclaimer at any time without prior notice.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                            Your continued use of the website signifies acceptance of any updated terms.
                        </p>
                    </section>

                    {/* Section 10: Contact Information */}
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
                            10. Contact Information
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            For questions regarding this website disclaimer, please contact:
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
                                Email: <a href="mailto:mdzaman.gits@gmail.com" style={{ color: '#00416A', textDecoration: 'none', fontWeight: '500' }}>mdzaman.gits@gmail.com</a>
                            </p>
                            <p style={{ marginBottom: '10px' }}>
                                Phone: <a href="tel:+19175616554" style={{ color: '#00416A', textDecoration: 'none', fontWeight: '500' }}>+1(917)561-6554</a>
                            </p>
                            <p style={{ marginBottom: '10px' }}>
                                Website: <a href="https://gitsics.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'none', fontWeight: '500' }}>https://gitsics.com</a>
                            </p>
                        </div>
                    </section>
                </div>

                </div>
        );
    }
}

export default WebsiteDisclaimer;

