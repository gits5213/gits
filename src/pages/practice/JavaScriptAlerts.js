import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class JavaScriptAlerts extends Component {
    showAlert = () => {
        alert('I am a JS Alert');
    }

    showConfirm = () => {
        const result = window.confirm('I am a JS Confirm');
        if (result) {
            alert('You clicked: Ok');
        } else {
            alert('You clicked: Cancel');
        }
    }

    showPrompt = () => {
        const result = window.prompt('I am a JS prompt');
        if (result) {
            alert(`You entered: ${result}`);
        } else {
            alert('You cancelled the prompt');
        }
    }

    render() {
        return (
            <main 
                id="javascript-alerts-main"
                data-testid="javascript-alerts-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="javascript-alerts-container"
                    data-testid="javascript-alerts-container"
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
                        id="javascript-alerts-title"
                        data-testid="javascript-alerts-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        JavaScript Alerts
                    </h1>
                    <p 
                        id="javascript-alerts-description"
                        data-testid="javascript-alerts-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        Click the buttons below to trigger different types of JavaScript alerts.
                    </p>
                    
                    <div 
                        id="javascript-alerts-buttons-container"
                        data-testid="javascript-alerts-buttons-container"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                            marginBottom: '30px'
                        }}
                    >
                        <button
                            id="javascript-alerts-alert-button"
                            data-testid="javascript-alerts-alert-button"
                            onClick={this.showAlert}
                            style={{
                                padding: '15px 30px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
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
                            Click for JS Alert
                        </button>

                        <button
                            id="javascript-alerts-confirm-button"
                            data-testid="javascript-alerts-confirm-button"
                            onClick={this.showConfirm}
                            style={{
                                padding: '15px 30px',
                                backgroundColor: '#28a745',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#218838';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#28a745';
                            }}
                        >
                            Click for JS Confirm
                        </button>

                        <button
                            id="javascript-alerts-prompt-button"
                            data-testid="javascript-alerts-prompt-button"
                            onClick={this.showPrompt}
                            style={{
                                padding: '15px 30px',
                                backgroundColor: '#ffc107',
                                color: '#333',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#e0a800';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#ffc107';
                            }}
                        >
                            Click for JS Prompt
                        </button>
                    </div>

                    <div 
                        id="javascript-alerts-note"
                        data-testid="javascript-alerts-note"
                        style={{
                            backgroundColor: '#fff3cd',
                            padding: '15px',
                            borderRadius: '6px',
                            marginBottom: '20px'
                        }}
                    >
                        <p 
                            id="javascript-alerts-note-text"
                            data-testid="javascript-alerts-note-text"
                            style={{ margin: 0, color: '#856404' }}
                        >
                            <strong>Note:</strong> These alerts are useful for testing JavaScript alert handling in automated tests.
                        </p>
                    </div>

                    <div 
                        id="javascript-alerts-back-link-container"
                        data-testid="javascript-alerts-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="javascript-alerts-back-link"
                            data-testid="javascript-alerts-back-link"
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
                <section 
                    id="javascript-alerts-footer-section"
                    data-testid="javascript-alerts-footer-section"
                    className='pt4'
                >
                    <Footer />
                </section>
            </main>
        );
    }
}

export default JavaScriptAlerts;
