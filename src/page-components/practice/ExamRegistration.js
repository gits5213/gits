import React, {Component} from 'react';
import '../../styles/base.css';

class ExamRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',
            companyName: '',
            instructorName: '',
            errors: {}
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errors: { ...this.state.errors, [e.target.name]: '' }
        });
    }

    validateForm = () => {
        const errors = {};
        if (!this.state.firstName.trim()) {
            errors.firstName = 'First name is required';
        }
        if (!this.state.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }
        if (!this.state.companyName.trim()) {
            errors.companyName = 'Company name is required';
        }
        if (!this.state.instructorName.trim()) {
            errors.instructorName = 'Instructor name is required';
        }
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validateForm();
        
        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
            return;
        }

        // Save student info to localStorage
        const studentInfo = {
            firstName: this.state.firstName.trim(),
            middleName: this.state.middleName.trim(),
            lastName: this.state.lastName.trim(),
            companyName: this.state.companyName.trim(),
            instructorName: this.state.instructorName.trim(),
            examId: this.props.examId
        };

        localStorage.setItem(`studentInfo_${this.props.examId}`, JSON.stringify(studentInfo));
        
        // Call callback if provided (for inline registration)
        if (this.props.onRegistrationComplete) {
            this.props.onRegistrationComplete();
        } else {
            // Fallback: navigate to exam using router adapter
            if (this.props.history) {
                this.props.history.push(`/practice/quiz/exam-${this.props.examId}`);
            } else {
                // If no router, reload the page to show exam
                window.location.reload();
            }
        }
    }

    render() {
        return (
            <div style={{
                maxWidth: '600px',
                margin: '40px auto',
                padding: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#00416A',
                    marginBottom: '10px',
                    textAlign: 'center'
                }}>
                    Student Registration
                </h2>
                <p style={{
                    fontSize: '16px',
                    color: '#666',
                    textAlign: 'center',
                    marginBottom: '30px'
                }}>
                    Please fill in your information before starting the exam
                </p>

                <form onSubmit={this.handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#333'
                        }}>
                            First Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '16px',
                                border: `2px solid ${this.state.errors.firstName ? '#ff6b6b' : '#e0e0e0'}`,
                                borderRadius: '6px',
                                boxSizing: 'border-box'
                            }}
                        />
                        {this.state.errors.firstName && (
                            <span style={{ color: '#ff6b6b', fontSize: '14px' }}>
                                {this.state.errors.firstName}
                            </span>
                        )}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#333'
                        }}>
                            Middle Name
                        </label>
                        <input
                            type="text"
                            name="middleName"
                            value={this.state.middleName}
                            onChange={this.handleChange}
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '16px',
                                border: '2px solid #e0e0e0',
                                borderRadius: '6px',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#333'
                        }}>
                            Last Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '16px',
                                border: `2px solid ${this.state.errors.lastName ? '#ff6b6b' : '#e0e0e0'}`,
                                borderRadius: '6px',
                                boxSizing: 'border-box'
                            }}
                        />
                        {this.state.errors.lastName && (
                            <span style={{ color: '#ff6b6b', fontSize: '14px' }}>
                                {this.state.errors.lastName}
                            </span>
                        )}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#333'
                        }}>
                            Company Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            value={this.state.companyName}
                            onChange={this.handleChange}
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '16px',
                                border: `2px solid ${this.state.errors.companyName ? '#ff6b6b' : '#e0e0e0'}`,
                                borderRadius: '6px',
                                boxSizing: 'border-box'
                            }}
                        />
                        {this.state.errors.companyName && (
                            <span style={{ color: '#ff6b6b', fontSize: '14px' }}>
                                {this.state.errors.companyName}
                            </span>
                        )}
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <label style={{
                            display: 'block',
                            marginBottom: '8px',
                            fontWeight: '600',
                            color: '#333'
                        }}>
                            Instructor Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            name="instructorName"
                            value={this.state.instructorName}
                            onChange={this.handleChange}
                            style={{
                                width: '100%',
                                padding: '12px',
                                fontSize: '16px',
                                border: `2px solid ${this.state.errors.instructorName ? '#ff6b6b' : '#e0e0e0'}`,
                                borderRadius: '6px',
                                boxSizing: 'border-box'
                            }}
                        />
                        {this.state.errors.instructorName && (
                            <span style={{ color: '#ff6b6b', fontSize: '14px' }}>
                                {this.state.errors.instructorName}
                            </span>
                        )}
                    </div>

                    <div style={{
                        padding: '20px',
                        backgroundColor: '#fff3cd',
                        borderRadius: '8px',
                        marginBottom: '30px',
                        borderLeft: '4px solid #ffc107'
                    }}>
                        <h3 style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#856404',
                            marginBottom: '10px'
                        }}>
                            ⚠️ Important: No Cheating Policy
                        </h3>
                        <p style={{
                            fontSize: '14px',
                            color: '#856404',
                            margin: 0,
                            lineHeight: '1.6'
                        }}>
                            This is a one-time exam. Cheating is strictly prohibited. 
                            Any form of academic dishonesty will result in immediate disqualification. 
                            Please complete this exam independently and honestly.
                        </p>
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '14px',
                            fontSize: '18px',
                            fontWeight: '600',
                            backgroundColor: '#00416A',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#003050';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#00416A';
                        }}
                    >
                        Start Exam
                    </button>
                </form>
            </div>
        );
    }
}

export default ExamRegistration;
