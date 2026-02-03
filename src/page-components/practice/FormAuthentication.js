import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class FormAuthentication extends Component {
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
        if (this.state.username === 'tomsmith' && this.state.password === 'SuperSecretPassword!') {
            this.setState({ isAuthenticated: true, error: '' });
        } else {
            this.setState({ error: 'Your username is invalid!', isAuthenticated: false });
        }
    }

    render() {
        if (this.state.isAuthenticated) {
            return (
                <main 
                    id="form-authentication-success-main"
                    data-testid="form-authentication-success-main"
                    style={{
                        minHeight: '100vh',
                        backgroundColor: '#f8f9fa',
                        padding: '40px 20px'
                    }}
                >
                    <div 
                        id="form-authentication-success-container"
                        data-testid="form-authentication-success-container"
                        style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            backgroundColor: '#ffffff',
                            padding: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h1 
                            id="form-authentication-success-title"
                            data-testid="form-authentication-success-title"
                            style={{
                                color: '#28a745',
                                fontSize: '32px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}
                        >
                            ✓ Secure Area
                        </h1>
                        <p 
                            id="form-authentication-success-message"
                            data-testid="form-authentication-success-message"
                            style={{
                                fontSize: '18px',
                                color: '#666',
                                marginBottom: '15px',
                                lineHeight: '1.6'
                            }}
                        >
                            Welcome to the secure area. When you are done, click logout below.
                        </p>
                        <div 
                            id="form-authentication-success-info"
                            data-testid="form-authentication-success-info"
                            style={{
                                backgroundColor: '#d1ecf1',
                                padding: '15px',
                                borderRadius: '6px',
                                marginBottom: '20px',
                                border: '1px solid #00416A'
                            }}
                        >
                            <p 
                                id="form-authentication-success-text"
                                data-testid="form-authentication-success-text"
                                style={{ margin: 0, color: '#0c5460' }}
                            >
                                <strong>Login successful!</strong> You are now authenticated.
                            </p>
                        </div>
                        <button
                            id="form-authentication-logout-button"
                            data-testid="form-authentication-logout-button"
                            onClick={() => this.setState({ isAuthenticated: false, username: '', password: '' })}
                            style={{
                                backgroundColor: '#dc3545',
                                color: '#ffffff',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                marginRight: '10px'
                            }}
                        >
                            Logout
                        </button>
                        <div 
                            id="form-authentication-success-back-link-container"
                            data-testid="form-authentication-success-back-link-container"
                            style={{
                                marginTop: '30px',
                                paddingTop: '20px',
                                borderTop: '1px solid #e0e0e0'
                            }}
                        >
                            <Link 
                                id="form-authentication-success-back-link"
                                data-testid="form-authentication-success-back-link"
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
                    <section 
                        id="form-authentication-success-footer-section"
                        data-testid="form-authentication-success-footer-section"
                        className='pt4'
                    >
                        </section>
                </main>
            );
        }

        return (
            <main 
                id="form-authentication-main"
                data-testid="form-authentication-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="form-authentication-container"
                    data-testid="form-authentication-container"
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        backgroundColor: '#ffffff',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    <h1 
                        id="form-authentication-title"
                        data-testid="form-authentication-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Login Page
                    </h1>
                    <p 
                        id="form-authentication-description"
                        data-testid="form-authentication-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        This is a login page. Use <strong>tomsmith</strong> / <strong>SuperSecretPassword!</strong>
                    </p>
                    
                    <form 
                        id="form-authentication-form"
                        data-testid="form-authentication-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div style={{ marginBottom: '20px' }}>
                            <label 
                                id="form-authentication-username-label"
                                data-testid="form-authentication-username-label"
                                htmlFor="form-authentication-username-input"
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    color: '#333',
                                    fontWeight: '600'
                                }}
                            >
                                Username:
                            </label>
                            <input
                                id="form-authentication-username-input"
                                data-testid="form-authentication-username-input"
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
                            <label 
                                id="form-authentication-password-label"
                                data-testid="form-authentication-password-label"
                                htmlFor="form-authentication-password-input"
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    color: '#333',
                                    fontWeight: '600'
                                }}
                            >
                                Password:
                            </label>
                            <input
                                id="form-authentication-password-input"
                                data-testid="form-authentication-password-input"
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
                            <div 
                                id="form-authentication-error"
                                data-testid="form-authentication-error"
                                style={{
                                    backgroundColor: '#f8d7da',
                                    color: '#721c24',
                                    padding: '12px',
                                    borderRadius: '6px',
                                    marginBottom: '20px'
                                }}
                            >
                                {this.state.error}
                            </div>
                        )}
                        <button
                            id="form-authentication-submit-button"
                            data-testid="form-authentication-submit-button"
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

                    <div 
                        id="form-authentication-back-link-container"
                        data-testid="form-authentication-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="form-authentication-back-link"
                            data-testid="form-authentication-back-link"
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
                <section 
                    id="form-authentication-footer-section"
                    data-testid="form-authentication-footer-section"
                    className='pt4'
                >
                    </section>
            </main>
        );
    }
}

export default FormAuthentication;
