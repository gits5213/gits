import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            submitted: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email) {
            this.setState({ submitted: true });
        }
    }

    render() {
        if (this.state.submitted) {
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
                            color: '#28a745',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}>
                            ✓ Email Sent!
                        </h1>
                        <p style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}>
                            Your e-mail's been sent! A password reset link has been sent to {this.state.email}
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
                                ← Back to UI Practice Examples
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
                        Forgot Password
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Enter your e-mail address and you'll receive a link to reset your password.
                    </p>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: '#333',
                                fontWeight: '600'
                            }}>
                                E-mail:
                            </label>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
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
                            Retrieve password
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

export default ForgotPassword;
