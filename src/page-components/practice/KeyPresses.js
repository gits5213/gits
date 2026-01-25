import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class KeyPresses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastKey: null
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (e) => {
        this.setState({ lastKey: e.key });
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
                        Key Presses
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Press any key on your keyboard. The key you pressed will be displayed below.
                    </p>
                    
                    <div style={{
                        marginBottom: '30px',
                        padding: '40px',
                        backgroundColor: '#f0f8ff',
                        borderRadius: '6px',
                        border: '2px solid #00416A',
                        textAlign: 'center'
                    }}>
                        <input
                            type="text"
                            placeholder="Click here and press any key..."
                            onKeyDown={(e) => this.setState({ lastKey: e.key })}
                            style={{
                                width: '100%',
                                padding: '15px',
                                border: '2px solid #00416A',
                                borderRadius: '6px',
                                fontSize: '18px',
                                textAlign: 'center',
                                boxSizing: 'border-box'
                            }}
                            autoFocus
                        />
                    </div>

                    {this.state.lastKey && (
                        <div style={{
                            backgroundColor: '#d1ecf1',
                            padding: '20px',
                            borderRadius: '6px',
                            marginBottom: '20px',
                            border: '1px solid #00416A',
                            textAlign: 'center'
                        }}>
                            <p style={{
                                margin: 0,
                                color: '#0c5460',
                                fontSize: '24px',
                                fontWeight: 'bold'
                            }}>
                                You entered: {this.state.lastKey}
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
                            <strong>Note:</strong> This page is useful for testing keyboard event handling in automated tests.
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

export default KeyPresses;
