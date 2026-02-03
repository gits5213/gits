import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class DynamicContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [
                { id: 1, text: 'This content will change each time the page is loaded.' },
                { id: 2, text: 'Dynamic content is useful for testing how your application handles content that changes.' }
            ]
        };
    }

    componentDidMount() {
        // Simulate dynamic content loading
        const dynamicTexts = [
            'This content will change each time the page is loaded.',
            'Dynamic content is useful for testing how your application handles content that changes.',
            'The content may vary based on server-side rendering or API responses.',
            'Automated tests need to handle dynamic content gracefully.',
            'Consider using stable selectors that don\'t depend on changing text.'
        ];
        
        const shuffled = dynamicTexts.sort(() => 0.5 - Math.random());
        this.setState({
            content: shuffled.slice(0, 2).map((text, idx) => ({ id: idx + 1, text }))
        });
    }

    render() {
        return (
            <main style={{
                minHeight: '100vh',
                backgroundColor: '#f8f9fa',
                padding: '40px 20px'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    backgroundColor: '#ffffff',
                    padding: '40px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h1 style={{
                        color: '#00416A',
                        fontSize: '32px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Dynamic Content
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page demonstrates dynamic content that changes on each page load.
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        marginBottom: '30px'
                    }}>
                        {this.state.content.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    backgroundColor: '#f0f8ff',
                                    padding: '20px',
                                    borderRadius: '6px',
                                    border: '1px solid #00416A'
                                }}
                            >
                                <p style={{
                                    margin: 0,
                                    color: '#333',
                                    fontSize: '16px',
                                    lineHeight: '1.6'
                                }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> The content above changes each time you reload the page. This is useful for testing dynamic content handling.
                        </p>
                    </div>

                    <div style={{
                        marginTop: '30px',
                        paddingTop: '20px',
                        borderTop: '1px solid #e0e0e0'
                    }}>
                        <Link 
                            to="/practice"
                            style={{
                                color: '#00416A',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}
                        >
                            ← Back to UI Practice Examples
                        </Link>
                    </div>
                </div>
                <section className='pt4'>
                    </section>
            </main>
        );
    }
}

export default DynamicContent;
