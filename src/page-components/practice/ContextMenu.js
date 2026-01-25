import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class ContextMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Right-click in the box below to see the context menu'
        };
    }

    handleContextMenu = (e) => {
        e.preventDefault();
        this.setState({ message: 'You triggered a context menu event!' });
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
                        Context Menu
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Right-click in the box below. One of the menu items will perform a JavaScript alert.
                    </p>
                    
                    <div
                        id="hot-spot"
                        onContextMenu={this.handleContextMenu}
                        style={{
                            width: '100%',
                            height: '300px',
                            backgroundColor: '#f0f8ff',
                            border: '3px dashed #00416A',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            color: '#00416A',
                            fontWeight: '600',
                            cursor: 'context-menu',
                            marginBottom: '20px'
                        }}
                    >
                        Right-click here
                    </div>

                    <div style={{
                        backgroundColor: '#d1ecf1',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#0c5460' }}>
                            {this.state.message}
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

export default ContextMenu;
