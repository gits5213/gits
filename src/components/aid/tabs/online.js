import React from 'react';
import { leftAlignStyles } from '../../../utils/globalStyles';

const Online = () => {
    return(
        <div style={leftAlignStyles.pageContainer}>
            {/* Hero Section */}
            <div style={{
                ...leftAlignStyles.heroSection,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={leftAlignStyles.heroTitle}>
                        Online Tools
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        Free and paid online resources and tools
                    </p>
                </div>
            </div>

            {/* Tools Section */}
            <div style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#00416A',
                    fontSize: '32px',
                    marginBottom: '30px',
                    fontWeight: 'bold',
                    textAlign: 'left'
                }}>
                    Online Tools & Resources
                </h2>

                {/* Table Container */}
                <div style={{
                    overflowX: 'auto',
                    marginBottom: '40px'
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }}>
                        <thead>
                            <tr style={{
                                backgroundColor: '#00416A',
                                color: '#ffffff'
                            }}>
                                <th style={{
                                    padding: '20px',
                                    textAlign: 'left',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid #005a8a'
                                }}>
                                    Category
                                </th>
                                <th style={{
                                    padding: '20px',
                                    textAlign: 'left',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid #005a8a'
                                }}>
                                    Tool/Service
                                </th>
                                <th style={{
                                    padding: '20px',
                                    textAlign: 'left',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid #005a8a'
                                }}>
                                    Pricing
                                </th>
                                <th style={{
                                    padding: '20px',
                                    textAlign: 'left',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid #005a8a'
                                }}>
                                    Link
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Free Section */}
                            <tr style={{
                                backgroundColor: '#f0f7fa',
                                fontWeight: 'bold'
                            }}>
                                <td colSpan="4" style={{
                                    padding: '15px 20px',
                                    fontSize: '20px',
                                    color: '#00416A',
                                    borderBottom: '2px solid #00416A'
                                }}>
                                    Free
                                </td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#ffffff',
                                borderBottom: '1px solid #e0e0e0',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                            }}>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    PDF Tools
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    We help with your PDF tasks
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Free & Paid
                                </td>
                                <td style={{
                                    padding: '20px',
                                    verticalAlign: 'middle'
                                }}>
                                    <a 
                                        href="https://www.sejda.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-block',
                                            padding: '10px 20px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: '#ffffff',
                                            backgroundColor: '#00416A',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#005a8a';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#00416A';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Visit Sejda
                                    </a>
                                </td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#ffffff',
                                borderBottom: '1px solid #e0e0e0',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                            }}>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Invoicing
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Free invoice templates
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Free
                                </td>
                                <td style={{
                                    padding: '20px',
                                    verticalAlign: 'middle'
                                }}>
                                    <a 
                                        href="https://www.getharvest.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-block',
                                            padding: '10px 20px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: '#ffffff',
                                            backgroundColor: '#00416A',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#005a8a';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#00416A';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Visit Harvest
                                    </a>
                                </td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#ffffff',
                                borderBottom: '1px solid #e0e0e0',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                            }}>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Invoicing
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Free Invoice Template
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Free
                                </td>
                                <td style={{
                                    padding: '20px',
                                    verticalAlign: 'middle'
                                }}>
                                    <a 
                                        href="https://invoice-generator.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-block',
                                            padding: '10px 20px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: '#ffffff',
                                            backgroundColor: '#00416A',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#005a8a';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#00416A';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Visit Invoice Generator
                                    </a>
                                </td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#ffffff',
                                borderBottom: '1px solid #e0e0e0',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                            }}>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Typing Tools
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Bangla type
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Free
                                </td>
                                <td style={{
                                    padding: '20px',
                                    verticalAlign: 'middle'
                                }}>
                                    <a 
                                        href="https://www.deshkeyboard.com/bangla-typing/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-block',
                                            padding: '10px 20px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: '#ffffff',
                                            backgroundColor: '#00416A',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#005a8a';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#00416A';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Visit Desh Bangla
                                    </a>
                                </td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#ffffff',
                                borderBottom: '1px solid #e0e0e0',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                            }}>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Speech Recognition
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Speech to Text (speechnotes)
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Free
                                </td>
                                <td style={{
                                    padding: '20px',
                                    verticalAlign: 'middle'
                                }}>
                                    <a 
                                        href="https://speechnotes.co/dictate/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-block',
                                            padding: '10px 20px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: '#ffffff',
                                            backgroundColor: '#00416A',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#005a8a';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#00416A';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Visit Speechnotes
                                    </a>
                                </td>
                            </tr>
                            <tr style={{
                                backgroundColor: '#ffffff',
                                borderBottom: '1px solid #e0e0e0',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                            }}>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Voice Typing
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Fast + free (good for quick typing) - Google Docs Voice Typing
                                </td>
                                <td style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#333',
                                    verticalAlign: 'middle'
                                }}>
                                    Free
                                </td>
                                <td style={{
                                    padding: '20px',
                                    verticalAlign: 'middle'
                                }}>
                                    <a 
                                        href="https://support.google.com/docs/answer/4492226?hl=en&utm_source=chatgpt.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-block',
                                            padding: '10px 20px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: '#ffffff',
                                            backgroundColor: '#00416A',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#005a8a';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#00416A';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Visit Google Docs
                                    </a>
                                </td>
                            </tr>
                            
                            {/* Paid Section Header */}
                            <tr style={{
                                backgroundColor: '#f0f7fa',
                                fontWeight: 'bold'
                            }}>
                                <td colSpan="4" style={{
                                    padding: '15px 20px',
                                    fontSize: '20px',
                                    color: '#00416A',
                                    borderTop: '2px solid #00416A',
                                    borderBottom: '2px solid #00416A'
                                }}>
                                    Paid
                                </td>
                            </tr>
                            {/* Placeholder for future paid tools */}
                            <tr style={{
                                backgroundColor: '#ffffff',
                                borderBottom: '1px solid #e0e0e0'
                            }}>
                                <td colSpan="4" style={{
                                    padding: '20px',
                                    fontSize: '16px',
                                    color: '#999',
                                    fontStyle: 'italic',
                                    textAlign: 'center'
                                }}>
                                    More paid tools coming soon...
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Online;
