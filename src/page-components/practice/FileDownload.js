import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class FileDownload extends Component {
    createDownloadFile = (filename, content) => {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    handleDownload = (filename) => {
        const content = `This is a sample ${filename} file.\nCreated for testing file download functionality.\nTimestamp: ${new Date().toISOString()}`;
        this.createDownloadFile(filename, content);
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
                        File Download
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                    }}>
                        Click on the links below to download sample files.
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        marginBottom: '30px'
                    }}>
                        <button
                            onClick={() => this.handleDownload('sample.txt')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '15px 20px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textAlign: 'left'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                                e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                                e.target.style.transform = 'translateX(0)';
                            }}
                        >
                            <span>📥</span>
                            <span>Download sample.txt</span>
                        </button>

                        <button
                            onClick={() => this.handleDownload('test-file.txt')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '15px 20px',
                                backgroundColor: '#28a745',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textAlign: 'left'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#218838';
                                e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#28a745';
                                e.target.style.transform = 'translateX(0)';
                            }}
                        >
                            <span>📥</span>
                            <span>Download test-file.txt</span>
                        </button>
                    </div>

                    <div style={{
                        backgroundColor: '#d1ecf1',
                        padding: '15px',
                        borderRadius: '6px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ margin: 0, color: '#0c5460' }}>
                            <strong>Note:</strong> Files will be downloaded to your default download location.
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

export default FileDownload;
