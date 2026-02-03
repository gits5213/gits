import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class SlowResources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            content: null
        };
    }

    componentDidMount() {
        // Simulate slow loading
        setTimeout(() => {
            this.setState({
                loading: false,
                content: 'This content took a while to load. This is useful for testing timeout handling in automated tests.'
            });
        }, 5000);
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
                        Slow Resources
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page simulates slow-loading resources. Please wait...
                    </p>
                    
                    {this.state.loading ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '40px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '6px',
                            marginBottom: '20px'
                        }}>
                            <div style={{
                                display: 'inline-block',
                                width: '40px',
                                height: '40px',
                                border: '4px solid #00416A',
                                borderTopColor: 'transparent',
                                borderRadius: '50%',
                                animation: 'spin 1s linear infinite',
                                marginBottom: '15px'
                            }}></div>
                            <p style={{
                                color: '#00416A',
                                fontWeight: '600',
                                fontSize: '18px'
                            }}>
                                Loading slow resource...
                            </p>
                        </div>
                    ) : (
                        <div style={{
                            backgroundColor: '#d1ecf1',
                            padding: '20px',
                            borderRadius: '6px',
                            marginBottom: '20px',
                            border: '1px solid #00416A'
                        }}>
                            <p style={{
                                margin: 0,
                                color: '#0c5460',
                                fontSize: '16px',
                                lineHeight: '1.6'
                            }}>
                                {this.state.content}
                            </p>
                        </div>
                    )}

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> This page is useful for testing timeout and wait strategies in automated tests.
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

export default SlowResources;
