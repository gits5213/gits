import React, {Component} from 'react';
import HeaderText from '../components/header';
import { Grid, Cell} from 'react-mdl';
import GoogleAd from '../components/GoogleAd';
import Footer from '../components/footer';
import emailjs from '@emailjs/browser';

const WHATSAPP_NUMBER = '+1(917)561-6554';
const WHATSAPP_LINK = `https://wa.me/+19175616554`;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            submitting: false,
            submitStatus: null,
            submitMessage: ''
        };
        this.formRef = React.createRef();
    }

    componentDidMount() {
        // EmailJS Configuration
        // To enable direct email sending, you need to:
        // 1. Sign up at https://www.emailjs.com/
        // 2. Get your Public Key, Service ID, and Template ID
        // 3. Replace the placeholders below with your actual values
        // See EMAILJS_SETUP.md for detailed instructions
        
        const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key
        const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
        const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
        
        // Store in component for use in handleSubmit
        this.emailjsConfig = {
            isConfigured: EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" && 
                         EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" && 
                         EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID",
            publicKey: EMAILJS_PUBLIC_KEY,
            serviceId: EMAILJS_SERVICE_ID,
            templateId: EMAILJS_TEMPLATE_ID
        };
        
        if (this.emailjsConfig.isConfigured) {
            emailjs.init(this.emailjsConfig.publicKey);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = this.state;

        this.setState({ submitting: true, submitStatus: null, submitMessage: '' });

        // Check if EmailJS is configured
        if (this.emailjsConfig && this.emailjsConfig.isConfigured) {
            // EmailJS template parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'mdzaman.gits@gmail.com',
                reply_to: email
            };

            try {
                // Send email using EmailJS
                await emailjs.send(
                    this.emailjsConfig.serviceId,
                    this.emailjsConfig.templateId,
                    templateParams
                );

                // Success - email sent directly
                this.setState({
                    submitting: false,
                    submitStatus: 'success',
                    submitMessage: `Thank you, ${name}! Your message has been sent successfully to mdzaman.gits@gmail.com. We will respond to you within 24 hours. For urgent inquiries, please contact us via WhatsApp at ${WHATSAPP_NUMBER}.`,
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                return; // Exit early on success
            } catch (error) {
                console.error('EmailJS error:', error);
                // Fall through to mailto fallback
            }
        }

        // Fallback to mailto (either EmailJS not configured or EmailJS failed)
        const mailtoLink = `mailto:mdzaman.gits@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        this.setState({
            submitting: false,
            submitStatus: 'success',
            submitMessage: `Thank you, ${name}! Your email client will open automatically. Please click "Send" in your email client to complete sending your message to mdzaman.gits@gmail.com. We will respond to you within 24 hours. For urgent inquiries, please contact us via WhatsApp at ${WHATSAPP_NUMBER}.`,
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        // Open email client
        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 1000);
    }
    
    render(){
        const { name, email, subject, message, submitting, submitStatus, submitMessage } = this.state;
        
        return(
            <div className='page-tab-body'>
                <Grid className='page-tab-grid'>
                    <Cell className='page-tab-first-col' col={12}>
                        <div className='contact-'>
                            <HeaderText />
                            <div className='contact-section-1'>
                                <div className='tc pt4' style={{ marginBottom: '40px' }}>
                                    <h1 style={{ fontSize: '2.5em', marginBottom: '15px', color: '#00416A' }}>Get In Touch</h1>
                                    <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                                        Have a question or need assistance? We're here to help! Fill out the form below or reach out to us directly. 
                                        Our team typically responds within 24 hours.
                                    </p>
                                </div>

                                {/* Contact Information Cards */}
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    flexWrap: 'wrap', 
                                    gap: '20px', 
                                    marginBottom: '40px',
                                    maxWidth: '800px',
                                    margin: '0 auto 40px'
                                }}>
                                    <div style={{
                                        flex: '1',
                                        minWidth: '250px',
                                        padding: '25px',
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        <div style={{ fontSize: '32px', marginBottom: '10px' }}>📧</div>
                                        <h3 style={{ marginBottom: '10px', color: '#00416A' }}>Email Us</h3>
                                        <a 
                                            href="mailto:mdzaman.gits@gmail.com"
                                            style={{ 
                                                color: '#00416A', 
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                wordBreak: 'break-word'
                                            }}
                                        >
                                            mdzaman.gits@gmail.com
                                        </a>
                                    </div>

                                    <div style={{
                                        flex: '1',
                                        minWidth: '250px',
                                        padding: '25px',
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        <div style={{ fontSize: '32px', marginBottom: '10px' }}>💬</div>
                                        <h3 style={{ marginBottom: '10px', color: '#00416A' }}>WhatsApp</h3>
                                        <a 
                                            href={WHATSAPP_LINK} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ 
                                                color: '#25D366', 
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {WHATSAPP_NUMBER}
                                        </a>
                                        <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                                            Click to chat on WhatsApp
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div style={{ maxWidth: '700px', margin: '0 auto', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                                    <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#00416A' }}>Send Us a Message</h2>
                                    <form ref={this.formRef} onSubmit={this.handleSubmit} style={{ textAlign: 'left' }}>
                                        <div style={{ marginBottom: '15px' }}>
                                            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                                                Name <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={name}
                                                onChange={this.handleChange}
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '10px',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '4px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                        </div>

                                        <div style={{ marginBottom: '15px' }}>
                                            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                                                Email <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={this.handleChange}
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '10px',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '4px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                        </div>

                                        <div style={{ marginBottom: '15px' }}>
                                            <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                                                Subject <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={subject}
                                                onChange={this.handleChange}
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '10px',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '4px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                        </div>

                                        <div style={{ marginBottom: '15px' }}>
                                            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                                                Message <span style={{ color: 'red' }}>*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={message}
                                                onChange={this.handleChange}
                                                required
                                                rows="6"
                                                style={{
                                                    width: '100%',
                                                    padding: '10px',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '4px',
                                                    fontSize: '16px',
                                                    fontFamily: 'inherit',
                                                    resize: 'vertical'
                                                }}
                                            />
                                        </div>

                                        {submitMessage && (
                                            <div style={{
                                                padding: '15px 20px',
                                                marginBottom: '20px',
                                                borderRadius: '6px',
                                                backgroundColor: submitStatus === 'success' ? '#d4edda' : '#f8d7da',
                                                color: submitStatus === 'success' ? '#155724' : '#721c24',
                                                border: `2px solid ${submitStatus === 'success' ? '#28a745' : '#dc3545'}`,
                                                fontSize: '16px',
                                                lineHeight: '1.6',
                                                fontWeight: submitStatus === 'success' ? '500' : 'normal',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                            }}>
                                                <strong style={{ display: 'block', marginBottom: '8px', fontSize: '18px' }}>
                                                    {submitStatus === 'success' ? '✓ Message Prepared Successfully!' : '⚠ Error'}
                                                </strong>
                                                {submitMessage}
                                            </div>
                                        )}

                                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                style={{
                                                    padding: '12px 30px',
                                                    fontSize: '16px',
                                                    backgroundColor: submitting ? '#ccc' : '#00416A',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: submitting ? 'not-allowed' : 'pointer',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {submitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </Cell>
            </Grid>
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
export default Contact;
