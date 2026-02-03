import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class ChallengingDOM extends Component {
    render() {
        return (
            <main style={{
                minHeight: '100vh',
                backgroundColor: '#f8f9fa',
                padding: '40px 20px'
            }}>
                <div style={{
                    maxWidth: '1000px',
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
                        Challenging DOM
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        The hardest part of writing automated tests is locating the right element. This page contains elements that are difficult to locate.
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        marginBottom: '30px',
                        flexWrap: 'wrap'
                    }}>
                        <button style={{
                            backgroundColor: '#00416A',
                            color: '#ffffff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer'
                        }}>
                            foo
                        </button>
                        <button style={{
                            backgroundColor: '#28a745',
                            color: '#ffffff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer'
                        }}>
                            bar
                        </button>
                        <button style={{
                            backgroundColor: '#dc3545',
                            color: '#ffffff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer'
                        }}>
                            baz
                        </button>
                    </div>

                    <div style={{
                        backgroundColor: '#f0f8ff',
                        padding: '20px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#333' }}>
                            <strong>Lorem Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '20px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#333' }}>
                            <strong>Dolor Sit:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: '#d1ecf1',
                        padding: '20px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#333' }}>
                            <strong>Amet:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>

                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        marginTop: '30px'
                    }}>
                        <thead>
                            <tr style={{ backgroundColor: '#00416A', color: '#ffffff' }}>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Lorem</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Ipsum</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Dolor</th>
                                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Sit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Iuvaret</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Apeirian</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Adipisci</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Definiebas</td>
                            </tr>
                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Consequuntur</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Mnesarchum</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Constitute</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Nostrum</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Phaedrum</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Placerat</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Ponderum</td>
                                <td style={{ padding: '12px', border: '1px solid #ddd' }}>Viderer</td>
                            </tr>
                        </tbody>
                    </table>

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

export default ChallengingDOM;
