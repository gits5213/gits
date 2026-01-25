import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class DynamicLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            content: null
        };
    }

    loadContent = () => {
        this.setState({ loading: true, content: null });
        
        setTimeout(() => {
            this.setState({
                loading: false,
                content: {
                    title: 'Hello World!',
                    message: 'This content was loaded dynamically after clicking the button.'
                }
            });
        }, 2000);
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
                        Dynamic Loading
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This example demonstrates content that loads dynamically after a user action.
                    </p>
                    
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '30px'
                    }}>
                        <button
                            onClick={this.loadContent}
                            disabled={this.state.loading}
                            style={{
                                backgroundColor: this.state.loading ? '#ccc' : '#00416A',
                                color: '#ffffff',
                                padding: '12px 24px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: this.state.loading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {this.state.loading ? 'Loading...' : 'Start'}
                        </button>
                    </div>

                    {this.state.loading && (
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
                                animation: 'spin 1s linear infinite'
                            }}></div>
                            <p style={{ marginTop: '15px', color: '#00416A', fontWeight: '600' }}>
                                Loading...
                            </p>
                        </div>
                    )}

                    {this.state.content && !this.state.loading && (
                        <div style={{
                            backgroundColor: '#d1ecf1',
                            padding: '30px',
                            borderRadius: '6px',
                            border: '1px solid #00416A',
                            marginBottom: '20px'
                        }}>
                            <h2 style={{
                                color: '#00416A',
                                fontSize: '24px',
                                marginBottom: '15px'
                            }}>
                                {this.state.content.title}
                            </h2>
                            <p style={{
                                color: '#333',
                                fontSize: '16px',
                                margin: 0,
                                lineHeight: '1.6'
                            }}>
                                {this.state.content.message}
                            </p>
                        </div>
                    )}

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
                            ← Back to Practice Examples
                        </Link>
                    </div>
                </div>
                <section className='pt4'>
                    </section>
            </main>
        );
    }
}

export default DynamicLoading;
