import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class NotificationMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        // Simulate notification messages appearing
        setTimeout(() => {
            this.setState({
                messages: [
                    { id: 1, text: 'Action successful', type: 'success' },
                    { id: 2, text: 'Action unsuccesful, please try again', type: 'error' }
                ]
            });
        }, 500);
    }

    closeMessage = (id) => {
        this.setState(prevState => ({
            messages: prevState.messages.filter(msg => msg.id !== id)
        }));
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
                        Notification Messages
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page demonstrates notification messages that appear and can be dismissed.
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        marginBottom: '30px'
                    }}>
                        {this.state.messages.map((message) => (
                            <div
                                key={message.id}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '15px 20px',
                                    backgroundColor: message.type === 'success' ? '#d1ecf1' : '#f8d7da',
                                    color: message.type === 'success' ? '#0c5460' : '#721c24',
                                    borderRadius: '6px',
                                    border: `1px solid ${message.type === 'success' ? '#00416A' : '#dc3545'}`
                                }}
                            >
                                <span style={{ fontWeight: '500' }}>
                                    {message.text}
                                </span>
                                <button
                                    onClick={() => this.closeMessage(message.id)}
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                        color: 'inherit',
                                        padding: '0 10px'
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    {this.state.messages.length === 0 && (
                        <div style={{
                            backgroundColor: '#fff3cd',
                            padding: '15px',
                            borderRadius: '6px',
                            marginBottom: '20px'
                        }}>
                            <p style={{ margin: 0, color: '#856404' }}>
                                All messages have been dismissed.
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
                    <Footer />
                </section>
            </main>
        );
    }
}

export default NotificationMessages;
