import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            uploadedFile: null
        };
    }

    handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            this.setState({ selectedFile: file });
        }
    }

    handleUpload = () => {
        if (this.state.selectedFile) {
            // Simulate file upload
            setTimeout(() => {
                this.setState({
                    uploadedFile: this.state.selectedFile.name,
                    selectedFile: null
                });
            }, 1000);
        }
    }

    render() {
        return (
            <main 
                id="file-upload-main"
                data-testid="file-upload-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="file-upload-container"
                    data-testid="file-upload-container"
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        backgroundColor: '#ffffff',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    <h1 
                        id="file-upload-title"
                        data-testid="file-upload-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        File Upload
                    </h1>
                    <p 
                        id="file-upload-description"
                        data-testid="file-upload-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        Choose a file to upload from your computer.
                    </p>
                    
                    <div 
                        id="file-upload-area"
                        data-testid="file-upload-area"
                        style={{
                            marginBottom: '30px',
                            padding: '30px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '6px',
                            border: '2px dashed #00416A'
                        }}
                    >
                        <input
                            id="file-upload-input"
                            data-testid="file-upload-input"
                            type="file"
                            onChange={this.handleFileChange}
                            style={{
                                display: 'none'
                            }}
                        />
                        <label
                            id="file-upload-label"
                            data-testid="file-upload-label"
                            htmlFor="file-upload-input"
                            style={{
                                display: 'block',
                                padding: '15px 20px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                borderRadius: '6px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                marginBottom: '15px'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                            }}
                        >
                            Choose File
                        </label>
                        
                        {this.state.selectedFile && (
                            <div 
                                id="file-upload-selected-info"
                                data-testid="file-upload-selected-info"
                                style={{
                                    marginTop: '15px',
                                    padding: '15px',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '6px',
                                    border: '1px solid #00416A'
                                }}
                            >
                                <p 
                                    id="file-upload-selected-name"
                                    data-testid="file-upload-selected-name"
                                    style={{ margin: 0, color: '#333' }}
                                >
                                    <strong>Selected:</strong> {this.state.selectedFile.name}
                                </p>
                                <p 
                                    id="file-upload-selected-size"
                                    data-testid="file-upload-selected-size"
                                    style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}
                                >
                                    Size: {(this.state.selectedFile.size / 1024).toFixed(2)} KB
                                </p>
                            </div>
                        )}

                        {this.state.selectedFile && (
                            <button
                                id="file-upload-submit-button"
                                data-testid="file-upload-submit-button"
                                onClick={this.handleUpload}
                                style={{
                                    width: '100%',
                                    marginTop: '15px',
                                    padding: '12px',
                                    backgroundColor: '#28a745',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#218838';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#28a745';
                                }}
                            >
                                Upload File
                            </button>
                        )}
                    </div>

                    {this.state.uploadedFile && (
                        <div 
                            id="file-upload-success"
                            data-testid="file-upload-success"
                            style={{
                                backgroundColor: '#d1ecf1',
                                padding: '20px',
                                borderRadius: '6px',
                                marginBottom: '20px',
                                border: '1px solid #00416A'
                            }}
                        >
                            <p 
                                id="file-upload-success-message"
                                data-testid="file-upload-success-message"
                                style={{ margin: 0, color: '#0c5460', fontSize: '16px' }}
                            >
                                <strong>✓ File uploaded successfully!</strong>
                            </p>
                            <p 
                                id="file-upload-success-filename"
                                data-testid="file-upload-success-filename"
                                style={{ margin: '10px 0 0 0', color: '#0c5460' }}
                            >
                                File name: {this.state.uploadedFile}
                            </p>
                        </div>
                    )}

                    <div 
                        id="file-upload-back-link-container"
                        data-testid="file-upload-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="file-upload-back-link"
                            data-testid="file-upload-back-link"
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
                <section 
                    id="file-upload-footer-section"
                    data-testid="file-upload-footer-section"
                    className='pt4'
                >
                    </section>
            </main>
        );
    }
}

export default FileUpload;
