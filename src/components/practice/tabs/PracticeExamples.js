import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../../styles/base.css';

class PracticeExamples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            examples: [
                { name: 'Registration Form', path: '/practice/registration-form' },
                { name: 'E2E Flow', path: '/practice/e2e-flow' },
                { name: 'A/B Testing', path: '/practice/ab-testing' },
                { name: 'Add/Remove Elements', path: '/practice/add-remove-elements' },
                { name: 'Basic Auth (user and pass: admin)', path: '/practice/basic-auth' },
                { name: 'Broken Images', path: '/practice/broken-images' },
                { name: 'Challenging DOM', path: '/practice/challenging-dom' },
                { name: 'Checkboxes', path: '/practice/checkboxes' },
                { name: 'Context Menu', path: '/practice/context-menu' },
                { name: 'Digest Authentication (user and pass: admin)', path: '/practice/digest-auth' },
                { name: 'Disappearing Elements', path: '/practice/disappearing-elements' },
                { name: 'Drag and Drop', path: '/practice/drag-and-drop' },
                { name: 'Dropdown', path: '/practice/dropdown' },
                { name: 'Dynamic Content', path: '/practice/dynamic-content' },
                { name: 'Dynamic Controls', path: '/practice/dynamic-controls' },
                { name: 'Dynamic Loading', path: '/practice/dynamic-loading' },
                { name: 'Entry Ad', path: '/practice/entry-ad' },
                { name: 'Exit Intent', path: '/practice/exit-intent' },
                { name: 'File Download', path: '/practice/file-download' },
                { name: 'File Upload', path: '/practice/file-upload' },
                { name: 'Floating Menu', path: '/practice/floating-menu' },
                { name: 'Forgot Password', path: '/practice/forgot-password' },
                { name: 'Form Authentication', path: '/practice/form-authentication' },
                { name: 'Frames', path: '/practice/frames' },
                { name: 'Geolocation', path: '/practice/geolocation' },
                { name: 'Horizontal Slider', path: '/practice/horizontal-slider' },
                { name: 'Hovers', path: '/practice/hovers' },
                { name: 'Infinite Scroll', path: '/practice/infinite-scroll' },
                { name: 'Inputs', path: '/practice/inputs' },
                { name: 'JQuery UI Menus', path: '/practice/jquery-ui-menus' },
                { name: 'JavaScript Alerts', path: '/practice/javascript-alerts' },
                { name: 'JavaScript onload event error', path: '/practice/javascript-error' },
                { name: 'Key Presses', path: '/practice/key-presses' },
                { name: 'Large & Deep DOM', path: '/practice/large-deep-dom' },
                { name: 'Multiple Windows', path: '/practice/multiple-windows' },
                { name: 'Nested Frames', path: '/practice/nested-frames' },
                { name: 'Notification Messages', path: '/practice/notification-messages' },
                { name: 'Redirect Link', path: '/practice/redirect-link' },
                { name: 'Secure File Download', path: '/practice/secure-file-download' },
                { name: 'Shadow DOM', path: '/practice/shadow-dom' },
                { name: 'Shifting Content', path: '/practice/shifting-content' },
                { name: 'Slow Resources', path: '/practice/slow-resources' },
                { name: 'Sortable Data Tables', path: '/practice/sortable-data-tables' },
                { name: 'Status Codes', path: '/practice/status-codes' },
                { name: 'Typos', path: '/practice/typos' },
                { name: 'WYSIWYG Editor', path: '/practice/wysiwyg-editor' }
            ]
        };
    }

    // Helper function to create unique ID from example name
    createExampleId = (name, index) => {
        const sanitized = name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        return `practice-example-link-${sanitized}-${index}`;
    };

    // Helper function to create unique test ID from example name
    createExampleTestId = (name, index) => {
        const sanitized = name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        return `practice-example-link-${sanitized}-${index}`;
    };

    render() {
        return (
            <main 
                id="practice-examples-main"
                data-testid="practice-examples-main"
                style={{
                    minHeight: '100vh',
                    background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
                }}
            >
                {/* Main Content Container */}
                <div 
                    id="practice-examples-container"
                    data-testid="practice-examples-container"
                    style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '40px 20px'
                    }}
                >
                    {/* Modern Header Section */}
                    <div 
                        id="practice-examples-header"
                        data-testid="practice-examples-header"
                        style={{
                            textAlign: 'center',
                            marginBottom: '50px',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.2)',
                            position: 'relative',
                            overflow: 'hidden',
                            marginBottom: '30px'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-50%',
                                right: '-50%',
                                width: '200%',
                                height: '200%',
                                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                backgroundSize: '30px 30px',
                                opacity: 0.3
                            }}></div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h1 
                                    id="practice-examples-title"
                                    data-testid="practice-examples-title"
                                    style={{
                                        fontSize: '42px',
                                        color: '#ffffff',
                                        marginBottom: '15px',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    Welcome to GITS Practice Center
                                </h1>
                                <p 
                                    id="practice-examples-subtitle"
                                    data-testid="practice-examples-subtitle"
                                    style={{
                                        fontSize: '20px',
                                        color: 'rgba(255,255,255,0.95)',
                                        margin: 0,
                                        textAlign: 'center',
                                        fontWeight: '400'
                                    }}
                                >
                                    Explore our comprehensive collection of practice examples
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modern Examples Grid */}
                    <div 
                        id="practice-examples-grid"
                        data-testid="practice-examples-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '24px',
                            marginBottom: '40px'
                        }}
                    >
                        {this.state.examples.map((example, index) => (
                            <Link
                                key={index}
                                id={this.createExampleId(example.name, index)}
                                data-testid={this.createExampleTestId(example.name, index)}
                                to={example.path}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '24px',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '16px',
                                    textDecoration: 'none',
                                    color: '#333',
                                    border: '2px solid #e9ecef',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#667eea';
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(102, 126, 234, 0.25)';
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e9ecef';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                                    e.currentTarget.style.background = '#ffffff';
                                }}
                            >
                                {/* Number Badge */}
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    fontSize: '18px',
                                    flexShrink: 0,
                                    boxShadow: '0 4px 8px rgba(102, 126, 234, 0.3)'
                                }}>
                                    {index + 1}
                                </div>
                                
                                {/* Content */}
                                <div 
                                    id={`practice-example-content-${index}`}
                                    data-testid={`practice-example-content-${index}`}
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        lineHeight: '1.6',
                                        flex: 1,
                                        color: '#333'
                                    }}
                                >
                                    {example.name}
                                </div>
                                
                                {/* Arrow Icon */}
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: '#f0f4ff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.3s ease'
                                }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 18L15 12L9 6" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Modern Footer Note */}
                    <div 
                        id="practice-examples-footer-note"
                        data-testid="practice-examples-footer-note"
                        style={{
                            textAlign: 'center',
                            padding: '24px',
                            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                            borderRadius: '16px',
                            border: '1px solid #e9ecef',
                            marginTop: '40px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }}
                    >
                        <p 
                            id="practice-examples-footer-text"
                            data-testid="practice-examples-footer-text"
                            style={{
                                fontSize: '14px',
                                color: '#666',
                                margin: 0,
                                fontWeight: '500'
                            }}
                        >
                            Powered by Elemental Selenium
                        </p>
                    </div>
                </div>

                <section 
                    id="practice-examples-footer-section"
                    data-testid="practice-examples-footer-section"
                    className='pt4'
                >
                    </section>
            </main>
        );
    }
}

export default PracticeExamples;
