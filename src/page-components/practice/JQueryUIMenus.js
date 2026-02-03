import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class JQueryUIMenus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: null
        };
    }

    toggleMenu = (menu) => {
        this.setState(prevState => ({
            activeMenu: prevState.activeMenu === menu ? null : menu
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
                        JQuery UI Menus
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page demonstrates JQuery UI style menus with nested items.
                    </p>
                    
                    <div style={{
                        marginBottom: '30px',
                        backgroundColor: '#f0f8ff',
                        padding: '20px',
                        borderRadius: '6px',
                        border: '1px solid #00416A'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px'
                        }}>
                            <div
                                onClick={() => this.toggleMenu('enabled')}
                                style={{
                                    padding: '10px 15px',
                                    backgroundColor: this.state.activeMenu === 'enabled' ? '#00416A' : '#ffffff',
                                    color: this.state.activeMenu === 'enabled' ? '#ffffff' : '#333',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                    fontWeight: '500',
                                    border: '1px solid #ddd'
                                }}
                            >
                                Enabled
                            </div>
                            {this.state.activeMenu === 'enabled' && (
                                <div style={{ marginLeft: '20px' }}>
                                    <div style={{
                                        padding: '8px 15px',
                                        backgroundColor: '#e7f3ff',
                                        cursor: 'pointer',
                                        borderRadius: '4px',
                                        marginBottom: '5px'
                                    }}>
                                        Back to JQuery UI
                                    </div>
                                </div>
                            )}
                            
                            <div
                                onClick={() => this.toggleMenu('back')}
                                style={{
                                    padding: '10px 15px',
                                    backgroundColor: this.state.activeMenu === 'back' ? '#00416A' : '#ffffff',
                                    color: this.state.activeMenu === 'back' ? '#ffffff' : '#333',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                    fontWeight: '500',
                                    border: '1px solid #ddd'
                                }}
                            >
                                Back to JQuery UI
                            </div>
                            {this.state.activeMenu === 'back' && (
                                <div style={{ marginLeft: '20px' }}>
                                    <div style={{
                                        padding: '8px 15px',
                                        backgroundColor: '#e7f3ff',
                                        cursor: 'pointer',
                                        borderRadius: '4px',
                                        marginBottom: '5px'
                                    }}>
                                        Enabled
                                    </div>
                                </div>
                            )}
                            
                            <div style={{
                                padding: '10px 15px',
                                backgroundColor: '#f0f0f0',
                                color: '#999',
                                cursor: 'not-allowed',
                                borderRadius: '4px',
                                border: '1px solid #ddd'
                            }}>
                                Disabled
                            </div>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> This page demonstrates JQuery UI style menus for testing menu interactions.
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

export default JQueryUIMenus;
