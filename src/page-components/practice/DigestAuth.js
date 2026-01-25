import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class DigestAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isAuthenticated: false,
            error: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            this.setState({ isAuthenticated: true, error: '' });
        } else {
            this.setState({ error: 'Invalid credentials. Use admin/admin', isAuthenticated: false });
        }
    }

    render() {
        if (this.state.isAuthenticated) {
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
                            color: '#28a745',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}>
                            ✓ Congratulations! You've logged in successfully!
                        </h1>
                        <p style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}>
                            You have successfully authenticated using Digest Authentication.
                        </p>
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

        return (
            <main style={{
                minHeight: '100vh',
                backgroundColor: '#f8f9fa',
                padding: '40px 20px'
            }}>
                <div style={{
                    maxWidth: '600px',
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
                        Digest Authentication
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Enter your credentials to login. Use <strong>admin</strong> / <strong>admin</strong>
                    </p>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: '#333',
                                fontWeight: '600'
                            }}>
                                Username:
                            </label>
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #ddd',
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    boxSizing: 'border-box'
                                }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: '#333',
                                fontWeight: '600'
                            }}>
                                Password:
                            </label>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #ddd',
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    boxSizing: 'border-box'
                                }}
                                required
                            />
                        </div>
                        {this.state.error && (
                            <div style={{
                                backgroundColor: '#f8d7da',
                                color: '#721c24',
                                padding: '12px',
                                borderRadius: '6px',
                                marginBottom: '20px'
                            }}>
                                {this.state.error}
                            </div>
                        )}
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                padding: '12px 24px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                            }}
                        >
                            Login
                        </button>
                    </form>

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

export default DigestAuth;
