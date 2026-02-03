import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class DynamicControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxEnabled: true,
            inputEnabled: true,
            loading: false
        };
    }

    toggleCheckbox = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState(prevState => ({
                checkboxEnabled: !prevState.checkboxEnabled,
                loading: false
            }));
        }, 2000);
    }

    toggleInput = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState(prevState => ({
                inputEnabled: !prevState.inputEnabled,
                loading: false
            }));
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
                        Dynamic Controls
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This example demonstrates dynamic controls that can be enabled or disabled.
                    </p>
                    
                    <div style={{
                        marginBottom: '30px',
                        padding: '20px',
                        backgroundColor: '#f0f8ff',
                        borderRadius: '6px',
                        border: '1px solid #00416A'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            marginBottom: '20px'
                        }}>
                            <input
                                type="checkbox"
                                disabled={!this.state.checkboxEnabled}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    cursor: this.state.checkboxEnabled ? 'pointer' : 'not-allowed'
                                }}
                            />
                            <span style={{ color: '#333', fontSize: '16px' }}>
                                A checkbox
                            </span>
                        </div>
                        <button
                            onClick={this.toggleCheckbox}
                            disabled={this.state.loading}
                            style={{
                                backgroundColor: this.state.loading ? '#ccc' : '#00416A',
                                color: '#ffffff',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: this.state.loading ? 'not-allowed' : 'pointer',
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                        >
                            {this.state.loading ? 'Loading...' : (this.state.checkboxEnabled ? 'Remove' : 'Add')}
                        </button>
                    </div>

                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff3cd',
                        borderRadius: '6px',
                        border: '1px solid #ffc107'
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            <input
                                type="text"
                                placeholder="It's enabled!"
                                disabled={!this.state.inputEnabled}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '2px solid #ffc107',
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    backgroundColor: this.state.inputEnabled ? '#ffffff' : '#f0f0f0',
                                    cursor: this.state.inputEnabled ? 'text' : 'not-allowed',
                                    marginBottom: '15px'
                                }}
                            />
                        </div>
                        <button
                            onClick={this.toggleInput}
                            disabled={this.state.loading}
                            style={{
                                backgroundColor: this.state.loading ? '#ccc' : '#ffc107',
                                color: '#333',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: this.state.loading ? 'not-allowed' : 'pointer',
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                        >
                            {this.state.loading ? 'Loading...' : (this.state.inputEnabled ? 'Disable' : 'Enable')}
                        </button>
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

export default DynamicControls;
