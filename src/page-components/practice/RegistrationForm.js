import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/base.css';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            confirmPassword: '',
            gender: '',
            dateOfBirth: '',
            country: '',
            terms: false,
            errors: {},
            submitted: false
        };
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value,
            errors: {}
        });
    }

    validate = () => {
        const errors = {};
        const { firstName, lastName, email, phone, username, password, confirmPassword, gender, dateOfBirth, country, terms } = this.state;

        if (!firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = 'Invalid email format';
        }

        if (!phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
            errors.phone = 'Invalid phone number';
        }

        if (!username.trim()) {
            errors.username = 'Username is required';
        } else if (username.length < 5) {
            errors.username = 'Username must be at least 5 characters';
        }

        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (!gender) {
            errors.gender = 'Gender is required';
        }

        if (!dateOfBirth) {
            errors.dateOfBirth = 'Date of birth is required';
        }

        if (!country) {
            errors.country = 'Country is required';
        }

        if (!terms) {
            errors.terms = 'You must accept the terms and conditions';
        }

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            this.setState({ submitted: true, errors: {} });
        } else {
            this.setState({ errors });
        }
    }

    render() {
        if (this.state.submitted) {
            return (
                <main 
                    id="registration-form-success-main"
                    data-testid="registration-form-success-main"
                    style={{
                        minHeight: '100vh',
                        backgroundColor: '#f8f9fa',
                        padding: '40px 20px'
                    }}
                >
                    <div 
                        id="registration-form-success-container"
                        data-testid="registration-form-success-container"
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
                            id="registration-form-success-title"
                            data-testid="registration-form-success-title"
                            style={{
                                color: '#28a745',
                                fontSize: '32px',
                                marginBottom: '20px',
                                fontWeight: 'bold'
                            }}
                        >
                            ✓ Registration Successful!
                        </h1>
                        <div 
                            id="registration-form-success-details"
                            data-testid="registration-form-success-details"
                            style={{
                                backgroundColor: '#d1ecf1',
                                padding: '20px',
                                borderRadius: '6px',
                                marginBottom: '20px',
                                border: '1px solid #00416A'
                            }}
                        >
                            <p 
                                id="registration-form-success-firstname"
                                data-testid="registration-form-success-firstname"
                                style={{ margin: '10px 0', color: '#0c5460' }}
                            >
                                <strong>First Name:</strong> {this.state.firstName}
                            </p>
                            <p 
                                id="registration-form-success-lastname"
                                data-testid="registration-form-success-lastname"
                                style={{ margin: '10px 0', color: '#0c5460' }}
                            >
                                <strong>Last Name:</strong> {this.state.lastName}
                            </p>
                            <p 
                                id="registration-form-success-email"
                                data-testid="registration-form-success-email"
                                style={{ margin: '10px 0', color: '#0c5460' }}
                            >
                                <strong>Email:</strong> {this.state.email}
                            </p>
                            <p 
                                id="registration-form-success-phone"
                                data-testid="registration-form-success-phone"
                                style={{ margin: '10px 0', color: '#0c5460' }}
                            >
                                <strong>Phone:</strong> {this.state.phone}
                            </p>
                            <p 
                                id="registration-form-success-username"
                                data-testid="registration-form-success-username"
                                style={{ margin: '10px 0', color: '#0c5460' }}
                            >
                                <strong>Username:</strong> {this.state.username}
                            </p>
                            <p 
                                id="registration-form-success-gender"
                                data-testid="registration-form-success-gender"
                                style={{ margin: '10px 0', color: '#0c5460' }}
                            >
                                <strong>Gender:</strong> {this.state.gender}
                            </p>
                            <p 
                                id="registration-form-success-dateofbirth"
                                data-testid="registration-form-success-dateofbirth"
                                style={{ margin: '10px 0', color: '#0c5460' }}
                            >
                                <strong>Date of Birth:</strong> {this.state.dateOfBirth}
                            </p>
                            <p 
                                id="registration-form-success-country"
                                data-testid="registration-form-success-country"
                                style={{ margin: '10px 0', color: '#0c5460' }}
                            >
                                <strong>Country:</strong> {this.state.country}
                            </p>
                        </div>
                        <button
                            id="registration-form-register-another-button"
                            data-testid="registration-form-register-another-button"
                            onClick={() => this.setState({ submitted: false, firstName: '', lastName: '', email: '', phone: '', username: '', password: '', confirmPassword: '', gender: '', dateOfBirth: '', country: '', terms: false })}
                            style={{
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                marginRight: '10px'
                            }}
                        >
                            Register Another
                        </button>
                        <div 
                            id="registration-form-success-back-link-container"
                            data-testid="registration-form-success-back-link-container"
                            style={{
                                marginTop: '30px',
                                paddingTop: '20px',
                                borderTop: '1px solid #e0e0e0'
                            }}
                        >
                            <Link 
                                id="registration-form-success-back-link"
                                data-testid="registration-form-success-back-link"
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
                        id="registration-form-success-footer-section"
                        data-testid="registration-form-success-footer-section"
                        className='pt4'
                    >
                        </section>
                </main>
            );
        }

        return (
            <main 
                id="registration-form-main"
                data-testid="registration-form-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div 
                    id="registration-form-container"
                    data-testid="registration-form-container"
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
                        id="registration-form-title"
                        data-testid="registration-form-title"
                        style={{
                            color: '#00416A',
                            fontSize: '32px',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Registration Form
                    </h1>
                    <p 
                        id="registration-form-description"
                        data-testid="registration-form-description"
                        style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '30px',
                            lineHeight: '1.6'
                        }}
                    >
                        Fill out the form below to create a new account. All fields are required.
                    </p>
                    
                    <form 
                        id="registration-form"
                        data-testid="registration-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px',
                            marginBottom: '20px'
                        }}>
                            <div>
                                <label 
                                    id="registration-form-firstname-label"
                                    data-testid="registration-form-firstname-label"
                                    htmlFor="registration-form-firstname-input"
                                    style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#333',
                                        fontWeight: '600'
                                    }}
                                >
                                    First Name <span style={{ color: '#dc3545' }}>*</span>
                                </label>
                                <input
                                    id="registration-form-firstname-input"
                                    data-testid="registration-form-firstname-input"
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: `1px solid ${this.state.errors.firstName ? '#dc3545' : '#ddd'}`,
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                                {this.state.errors.firstName && (
                                    <p 
                                        id="registration-form-firstname-error"
                                        data-testid="registration-form-firstname-error"
                                        style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                    >
                                        {this.state.errors.firstName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label 
                                    id="registration-form-lastname-label"
                                    data-testid="registration-form-lastname-label"
                                    htmlFor="registration-form-lastname-input"
                                    style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#333',
                                        fontWeight: '600'
                                    }}
                                >
                                    Last Name <span style={{ color: '#dc3545' }}>*</span>
                                </label>
                                <input
                                    id="registration-form-lastname-input"
                                    data-testid="registration-form-lastname-input"
                                    type="text"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: `1px solid ${this.state.errors.lastName ? '#dc3545' : '#ddd'}`,
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                                {this.state.errors.lastName && (
                                    <p 
                                        id="registration-form-lastname-error"
                                        data-testid="registration-form-lastname-error"
                                        style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                    >
                                        {this.state.errors.lastName}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label 
                                id="registration-form-email-label"
                                data-testid="registration-form-email-label"
                                htmlFor="registration-form-email-input"
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    color: '#333',
                                    fontWeight: '600'
                                }}
                            >
                                Email <span style={{ color: '#dc3545' }}>*</span>
                            </label>
                            <input
                                id="registration-form-email-input"
                                data-testid="registration-form-email-input"
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: `1px solid ${this.state.errors.email ? '#dc3545' : '#ddd'}`,
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    boxSizing: 'border-box'
                                }}
                            />
                            {this.state.errors.email && (
                                <p 
                                    id="registration-form-email-error"
                                    data-testid="registration-form-email-error"
                                    style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                >
                                    {this.state.errors.email}
                                </p>
                            )}
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label 
                                id="registration-form-phone-label"
                                data-testid="registration-form-phone-label"
                                htmlFor="registration-form-phone-input"
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    color: '#333',
                                    fontWeight: '600'
                                }}
                            >
                                Phone Number <span style={{ color: '#dc3545' }}>*</span>
                            </label>
                            <input
                                id="registration-form-phone-input"
                                data-testid="registration-form-phone-input"
                                type="tel"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                placeholder="1234567890"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: `1px solid ${this.state.errors.phone ? '#dc3545' : '#ddd'}`,
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    boxSizing: 'border-box'
                                }}
                            />
                            {this.state.errors.phone && (
                                <p 
                                    id="registration-form-phone-error"
                                    data-testid="registration-form-phone-error"
                                    style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                >
                                    {this.state.errors.phone}
                                </p>
                            )}
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label 
                                id="registration-form-username-label"
                                data-testid="registration-form-username-label"
                                htmlFor="registration-form-username-input"
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    color: '#333',
                                    fontWeight: '600'
                                }}
                            >
                                Username <span style={{ color: '#dc3545' }}>*</span>
                            </label>
                            <input
                                id="registration-form-username-input"
                                data-testid="registration-form-username-input"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: `1px solid ${this.state.errors.username ? '#dc3545' : '#ddd'}`,
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    boxSizing: 'border-box'
                                }}
                            />
                            {this.state.errors.username && (
                                <p 
                                    id="registration-form-username-error"
                                    data-testid="registration-form-username-error"
                                    style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                >
                                    {this.state.errors.username}
                                </p>
                            )}
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px',
                            marginBottom: '20px'
                        }}>
                            <div>
                                <label 
                                    id="registration-form-password-label"
                                    data-testid="registration-form-password-label"
                                    htmlFor="registration-form-password-input"
                                    style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#333',
                                        fontWeight: '600'
                                    }}
                                >
                                    Password <span style={{ color: '#dc3545' }}>*</span>
                                </label>
                                <input
                                    id="registration-form-password-input"
                                    data-testid="registration-form-password-input"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: `1px solid ${this.state.errors.password ? '#dc3545' : '#ddd'}`,
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                                {this.state.errors.password && (
                                    <p 
                                        id="registration-form-password-error"
                                        data-testid="registration-form-password-error"
                                        style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                    >
                                        {this.state.errors.password}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label 
                                    id="registration-form-confirmpassword-label"
                                    data-testid="registration-form-confirmpassword-label"
                                    htmlFor="registration-form-confirmpassword-input"
                                    style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#333',
                                        fontWeight: '600'
                                    }}
                                >
                                    Confirm Password <span style={{ color: '#dc3545' }}>*</span>
                                </label>
                                <input
                                    id="registration-form-confirmpassword-input"
                                    data-testid="registration-form-confirmpassword-input"
                                    type="password"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: `1px solid ${this.state.errors.confirmPassword ? '#dc3545' : '#ddd'}`,
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                                {this.state.errors.confirmPassword && (
                                    <p 
                                        id="registration-form-confirmpassword-error"
                                        data-testid="registration-form-confirmpassword-error"
                                        style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                    >
                                        {this.state.errors.confirmPassword}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px',
                            marginBottom: '20px'
                        }}>
                            <div>
                                <label 
                                    id="registration-form-gender-label"
                                    data-testid="registration-form-gender-label"
                                    htmlFor="registration-form-gender-select"
                                    style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#333',
                                        fontWeight: '600'
                                    }}
                                >
                                    Gender <span style={{ color: '#dc3545' }}>*</span>
                                </label>
                                <select
                                    id="registration-form-gender-select"
                                    data-testid="registration-form-gender-select"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: `1px solid ${this.state.errors.gender ? '#dc3545' : '#ddd'}`,
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male" data-testid="registration-form-gender-option-male">Male</option>
                                    <option value="female" data-testid="registration-form-gender-option-female">Female</option>
                                    <option value="other" data-testid="registration-form-gender-option-other">Other</option>
                                </select>
                                {this.state.errors.gender && (
                                    <p 
                                        id="registration-form-gender-error"
                                        data-testid="registration-form-gender-error"
                                        style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                    >
                                        {this.state.errors.gender}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label 
                                    id="registration-form-dateofbirth-label"
                                    data-testid="registration-form-dateofbirth-label"
                                    htmlFor="registration-form-dateofbirth-input"
                                    style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#333',
                                        fontWeight: '600'
                                    }}
                                >
                                    Date of Birth <span style={{ color: '#dc3545' }}>*</span>
                                </label>
                                <input
                                    id="registration-form-dateofbirth-input"
                                    data-testid="registration-form-dateofbirth-input"
                                    type="date"
                                    name="dateOfBirth"
                                    value={this.state.dateOfBirth}
                                    onChange={this.handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        border: `1px solid ${this.state.errors.dateOfBirth ? '#dc3545' : '#ddd'}`,
                                        borderRadius: '6px',
                                        fontSize: '16px',
                                        boxSizing: 'border-box'
                                    }}
                                />
                                {this.state.errors.dateOfBirth && (
                                    <p 
                                        id="registration-form-dateofbirth-error"
                                        data-testid="registration-form-dateofbirth-error"
                                        style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                    >
                                        {this.state.errors.dateOfBirth}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label 
                                id="registration-form-country-label"
                                data-testid="registration-form-country-label"
                                htmlFor="registration-form-country-select"
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    color: '#333',
                                    fontWeight: '600'
                                }}
                            >
                                Country <span style={{ color: '#dc3545' }}>*</span>
                            </label>
                            <select
                                id="registration-form-country-select"
                                data-testid="registration-form-country-select"
                                name="country"
                                value={this.state.country}
                                onChange={this.handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: `1px solid ${this.state.errors.country ? '#dc3545' : '#ddd'}`,
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    boxSizing: 'border-box'
                                }}
                            >
                                <option value="">Select Country</option>
                                <option value="usa" data-testid="registration-form-country-option-usa">United States</option>
                                <option value="canada" data-testid="registration-form-country-option-canada">Canada</option>
                                <option value="uk" data-testid="registration-form-country-option-uk">United Kingdom</option>
                                <option value="australia" data-testid="registration-form-country-option-australia">Australia</option>
                                <option value="india" data-testid="registration-form-country-option-india">India</option>
                                <option value="germany" data-testid="registration-form-country-option-germany">Germany</option>
                                <option value="france" data-testid="registration-form-country-option-france">France</option>
                                <option value="japan" data-testid="registration-form-country-option-japan">Japan</option>
                                <option value="other" data-testid="registration-form-country-option-other">Other</option>
                            </select>
                            {this.state.errors.country && (
                                <p 
                                    id="registration-form-country-error"
                                    data-testid="registration-form-country-error"
                                    style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                >
                                    {this.state.errors.country}
                                </p>
                            )}
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label 
                                id="registration-form-terms-label"
                                data-testid="registration-form-terms-label"
                                htmlFor="registration-form-terms-checkbox"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                <input
                                    id="registration-form-terms-checkbox"
                                    data-testid="registration-form-terms-checkbox"
                                    type="checkbox"
                                    name="terms"
                                    checked={this.state.terms}
                                    onChange={this.handleChange}
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        cursor: 'pointer'
                                    }}
                                />
                                <span style={{ color: '#333' }}>
                                    I agree to the <a 
                                        id="registration-form-terms-link"
                                        data-testid="registration-form-terms-link"
                                        href="#terms" 
                                        style={{ color: '#00416A' }}
                                    >Terms and Conditions</a> <span style={{ color: '#dc3545' }}>*</span>
                                </span>
                            </label>
                            {this.state.errors.terms && (
                                <p 
                                    id="registration-form-terms-error"
                                    data-testid="registration-form-terms-error"
                                    style={{ color: '#dc3545', fontSize: '14px', margin: '5px 0 0 0' }}
                                >
                                    {this.state.errors.terms}
                                </p>
                            )}
                        </div>

                        <button
                            id="registration-form-submit-button"
                            data-testid="registration-form-submit-button"
                            type="submit"
                            style={{
                                width: '100%',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                padding: '12px 24px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#005a8a';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#00416A';
                            }}
                        >
                            Register
                        </button>
                    </form>

                    <div 
                        id="registration-form-back-link-container"
                        data-testid="registration-form-back-link-container"
                        style={{
                            marginTop: '30px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link 
                            id="registration-form-back-link"
                            data-testid="registration-form-back-link"
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

export default RegistrationForm;
