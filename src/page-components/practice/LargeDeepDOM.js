import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class LargeDeepDOM extends Component {
    render() {
        const generateRows = () => {
            const rows = [];
            for (let i = 1; i <= 50; i++) {
                rows.push(
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#f8f9fa' : '#ffffff' }}>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Row {i}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Column 2</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Column 3</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Column 4</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Column 5</td>
                    </tr>
                );
            }
            return rows;
        };

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
                        Large & Deep DOM
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        This page contains a large number of DOM elements, making it useful for testing performance and element location strategies.
                    </p>
                    
                    <div style={{
                        marginBottom: '30px',
                        padding: '20px',
                        backgroundColor: '#f0f8ff',
                        borderRadius: '6px',
                        border: '1px solid #00416A'
                    }}>
                        <h2 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px'
                        }}>
                            Nested Elements
                        </h2>
                        {Array.from({ length: 10 }, (_, i) => (
                            <div key={i} style={{ marginLeft: `${i * 20}px`, marginBottom: '10px', padding: '10px', backgroundColor: '#e7f3ff', borderRadius: '4px' }}>
                                <div style={{ marginLeft: '20px', padding: '10px', backgroundColor: '#d1ecf1', borderRadius: '4px' }}>
                                    <div style={{ marginLeft: '20px', padding: '10px', backgroundColor: '#bee5eb', borderRadius: '4px' }}>
                                        Nested level {i + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        overflowX: 'auto',
                        marginBottom: '30px'
                    }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse'
                        }}>
                            <thead>
                                <tr style={{ backgroundColor: '#00416A', color: '#ffffff' }}>
                                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Column 1</th>
                                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Column 2</th>
                                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Column 3</th>
                                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Column 4</th>
                                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Column 5</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generateRows()}
                            </tbody>
                        </table>
                    </div>

                    <div style={{
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#856404' }}>
                            <strong>Note:</strong> This page contains many DOM elements, which is useful for testing element location performance.
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

export default LargeDeepDOM;
