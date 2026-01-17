import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../footer';
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
                    backgroundColor: '#f8f9fa'
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
                    {/* Header Section */}
                    <div 
                        id="practice-examples-header"
                        data-testid="practice-examples-header"
                        style={{
                            textAlign: 'left',
                            marginBottom: '50px'
                        }}
                    >
                        <h1 
                            id="practice-examples-title"
                            data-testid="practice-examples-title"
                            style={{
                                fontSize: '48px',
                                color: '#00416A',
                                marginBottom: '15px',
                                fontWeight: 'bold',
                                textAlign: 'left'
                            }}
                        >
                            Welcome to the-Global I Tech Solutions Inc. (GITS) Practice center.
                        </h1>
                        <p 
                            id="practice-examples-subtitle"
                            data-testid="practice-examples-subtitle"
                            style={{
                                fontSize: '20px',
                                color: '#666',
                                margin: 0,
                                textAlign: 'left'
                            }}
                        >
                            Available Examples
                        </p>
                    </div>

                    {/* Examples Grid */}
                    <div 
                        id="practice-examples-grid"
                        data-testid="practice-examples-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '20px',
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
                                    display: 'block',
                                    padding: '20px',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    color: '#00416A',
                                    border: '2px solid #e0e0e0',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#00416A';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,65,106,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e0e0e0';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                                }}
                            >
                                <div 
                                    id={`practice-example-content-${index}`}
                                    data-testid={`practice-example-content-${index}`}
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        lineHeight: '1.5',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '10px'
                                    }}
                                >
                                    <span 
                                        style={{
                                            color: '#00416A',
                                            fontWeight: 'bold',
                                            fontSize: '18px',
                                            minWidth: '30px',
                                            flexShrink: 0
                                        }}
                                    >
                                        {index + 1}.
                                    </span>
                                    <span style={{ flex: 1 }}>
                                        {example.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div 
                        id="practice-examples-footer-note"
                        data-testid="practice-examples-footer-note"
                        style={{
                            textAlign: 'left',
                            padding: '30px',
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            border: '1px solid #e0e0e0',
                            marginTop: '40px'
                        }}
                    >
                        <p 
                            id="practice-examples-footer-text"
                            data-testid="practice-examples-footer-text"
                            style={{
                                fontSize: '14px',
                                color: '#666',
                                textAlign: 'left',
                                margin: 0
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
                    <Footer />
                </section>
            </main>
        );
    }
}

export default PracticeExamples;
