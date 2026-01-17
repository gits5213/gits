import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../components/footer';
import '../../styles/base.css';

class ShadowDOM extends Component {
    componentDidMount() {
        // Create a shadow DOM element
        const host = document.getElementById('shadow-host');
        if (host && host.attachShadow) {
            const shadow = host.attachShadow({ mode: 'open' });
            shadow.innerHTML = `
                <style>
                    .shadow-content {
                        padding: 20px;
                        background: #f0f8ff;
                        border: 2px solid #00416A;
                        border-radius: 6px;
                        color: #333;
                    }
                    .shadow-title {
                        color: #00416A;
                        font-size: 20px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                </style>
                <div class="shadow-content">
                    <div class="shadow-title">Shadow DOM Content</div>
                    <p>This content is inside a Shadow DOM. Shadow DOM provides encapsulation for DOM and CSS.</p>
                    <button id="shadow-button" style="padding: 10px 20px; background: #00416A; color: white; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">
                        Click Me
                    </button>
                </div>
            `;
            
            shadow.getElementById('shadow-button').addEventListener('click', () => {
                alert('Button inside Shadow DOM clicked!');
            });
        }
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
                        Shadow DOM
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page demonstrates Shadow DOM, which provides encapsulation for DOM and CSS.
                    </p>
                    
                    <div
                        id="shadow-host"
                        style={{
                            marginBottom: '30px'
                        }}
                    ></div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> Shadow DOM elements require special handling in automated tests.
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
                    <Footer />
                </section>
            </main>
        );
    }
}

export default ShadowDOM;
