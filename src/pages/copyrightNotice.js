import React, {Component} from 'react';
import HeaderText from '../components/header';
import Footer from '../components/footer';
import '../styles/base.css';
import '../styles/legalPages.css';

class CopyrightNotice extends Component {
    render(){
        const currentYear = new Date().getFullYear();
        
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
                        Copyright Notice
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
                        © {currentYear} All Rights Reserved
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
                            All content provided by <strong>Global I Tech Solutions Inc. ("GITSICS")</strong>—including but not limited to text, graphics, logos, icons, images, videos, training materials, course slides, automation frameworks, code samples, documentation, downloadable files, website content, and digital assets—is the exclusive property of <strong>Global I Tech Solutions Inc.</strong> and is protected under <strong>United States copyright law</strong>, <strong>New York State law</strong>, and applicable international copyright treaties.
                        </p>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginTop: '15px',
                            fontWeight: '500'
                        }}>
                            Except where written permission is explicitly granted, <strong>no part of this website or training materials may be copied, reproduced, modified, distributed, transmitted, displayed, or stored in any form</strong>, whether digital or physical, without prior written consent from Global I Tech Solutions Inc.
                        </p>
                    </section>

                    {/* What You May Not Do */}
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
                            You May Not:
                        </h2>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '12px' }}>Share or distribute course content publicly or privately</li>
                            <li style={{ marginBottom: '12px' }}>Record or redistribute live training sessions</li>
                            <li style={{ marginBottom: '12px' }}>Sell or republish any GITSICS materials</li>
                            <li style={{ marginBottom: '12px' }}>Use our frameworks, templates, or code samples for commercial resale</li>
                            <li style={{ marginBottom: '12px' }}>Claim ownership or authorship of any GITSICS intellectual property</li>
                        </ul>
                    </section>

                    {/* What You May Do */}
                    <section style={{
                        marginBottom: '40px',
                        backgroundColor: '#f0f9ff',
                        padding: '30px',
                        borderRadius: '8px',
                        border: '2px solid #00416A'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '10px'
                        }}>
                            You May:
                        </h2>
                        <ul style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '30px',
                            marginTop: '15px'
                        }}>
                            <li style={{ marginBottom: '12px' }}>Use training materials strictly for your own personal learning</li>
                            <li style={{ marginBottom: '12px' }}>Reference GITSICS content with proper attribution (non-commercial use only)</li>
                        </ul>
                    </section>

                    {/* Legal Notice */}
                    <section style={{
                        marginBottom: '40px',
                        backgroundColor: '#fff9e6',
                        padding: '30px',
                        borderRadius: '8px',
                        border: '2px solid #f59f00'
                    }}>
                        <h2 style={{
                            color: '#d97706',
                            fontSize: '28px',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            borderBottom: '2px solid #f59f00',
                            paddingBottom: '10px'
                        }}>
                            Legal Consequences
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            fontWeight: '500'
                        }}>
                            Any unauthorized use of copyrighted materials may result in legal action, including claims for damages, attorney's fees, and injunctive relief.
                        </p>
                    </section>

                    {/* Contact Information */}
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
                            Contact Information
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '20px'
                        }}>
                            For copyright permissions, licensing inquiries, or partnership requests, please contact:
                        </p>
                        <div style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
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

                <Footer />
            </div>
        );
    }
}

export default CopyrightNotice;

