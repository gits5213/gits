import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/base.css';

class E2EFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 'login', // login, products, product-detail, cart, checkout, confirmation
            isLoggedIn: false,
            loggedInUser: null,
            loginData: {
                username: '',
                password: ''
            },
            selectedProduct: null,
            cart: [],
            checkoutData: {
                name: '',
                email: '',
                address: '',
                city: '',
                zipCode: '',
                country: '',
                paymentMethod: 'credit-card',
                cardNumber: '',
                expiryDate: '',
                cvv: ''
            },
            orderNumber: null
        };
    }

    // Dummy user credentials for login
    dummyUsers = [
        { username: 'demo_user', password: 'demo123', name: 'Demo User' },
        { username: 'test_user', password: 'test123', name: 'Test User' },
        { username: 'admin', password: 'admin123', name: 'Admin User' }
    ];

    products = [
        {
            id: 7,
            name: 'Frontend(UI) Manual Test',
            price: 10000.00,
            image: '🧪',
            description: 'Comprehensive manual testing course covering SDLC, STLC, Test Cases, Test Case Management, SQL, and JIRA.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 8,
            name: 'Backend(API) Manual Test',
            price: 10000.00,
            image: '🔌',
            description: 'Learn API manual testing with Xray, POSTMAN, gRPC, HTTP Client, RESTful APIs, and SQL.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 9,
            name: 'Frontend(UI) Automation Test',
            price: 10000.00,
            image: '🤖',
            description: 'Master UI automation testing with Selenium, Protractor, Appium, WebDriverIO, Java, Javascript, and NodeJS.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 10,
            name: 'Backend(API) Automation Test',
            price: 10000.00,
            image: '⚙️',
            description: 'Automate API testing using Java, Javascript, NodeJS, RestAssured, and SuperTest.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 11,
            name: 'Code4Kids',
            price: 10000.00,
            image: '👨‍👩‍👧‍👦',
            description: 'Empower the next generation with coding skills. Learn HTML, CSS, Javascript, NodeJS, and ReactJS.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 12,
            name: 'Web Development',
            price: 10000.00,
            image: '🌐',
            description: 'Comprehensive web development course covering HTML, CSS, Javascript, NodeJS, and ReactJS.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 13,
            name: 'CypressIO UI, API & Middleware Test',
            price: 10000.00,
            image: '🔷',
            description: 'Master CypressIO for UI, API, and Middleware testing with JS, Data-Driven, Keyword-Driven, POM Concept, and Github Actions.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 14,
            name: 'Playwright UI, API & Middleware Test',
            price: 10000.00,
            image: '🎭',
            description: 'Learn Playwright for comprehensive UI, API, and Middleware testing with JS, Data-Driven, Keyword-Driven, POM Concept, and Github Actions.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 15,
            name: 'Web Accessibility Test',
            price: 10000.00,
            image: '♿',
            description: 'Master web accessibility testing with AXE, Pa11y, WAVE, Screen Readers, Color Contrast Checkers, aXe Coconut, Lighthouse, and Accessibility Insights.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 16,
            name: 'SDET Roadmap',
            price: 10000.00,
            image: '🗺️',
            description: 'Complete guide to becoming a Full Stack Software Engineer in Test (SDET) / QA Engineer with comprehensive roadmap and career path.',
            category: 'Courses',
            inStock: true
        },
        {
            id: 1,
            name: 'Wireless Headphones',
            price: 79.99,
            image: '🎧',
            description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
            category: 'Electronics',
            inStock: true
        },
        {
            id: 2,
            name: 'Smart Watch',
            price: 249.99,
            image: '⌚',
            description: 'Feature-rich smartwatch with fitness tracking, heart rate monitor, and GPS.',
            category: 'Electronics',
            inStock: true
        },
        {
            id: 3,
            name: 'Laptop Stand',
            price: 39.99,
            image: '💻',
            description: 'Ergonomic aluminum laptop stand with adjustable height and ventilation.',
            category: 'Accessories',
            inStock: true
        },
        {
            id: 4,
            name: 'Wireless Mouse',
            price: 29.99,
            image: '🖱️',
            description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
            category: 'Accessories',
            inStock: true
        },
        {
            id: 5,
            name: 'USB-C Hub',
            price: 49.99,
            image: '🔌',
            description: 'Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.',
            category: 'Accessories',
            inStock: true
        },
        {
            id: 6,
            name: 'Mechanical Keyboard',
            price: 129.99,
            image: '⌨️',
            description: 'RGB mechanical keyboard with Cherry MX switches and customizable keys.',
            category: 'Accessories',
            inStock: false
        }
    ];

    handleLoginChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            loginData: {
                ...this.state.loginData,
                [name]: value
            }
        });
    };

    handleLogin = (e) => {
        e.preventDefault();
        const { username, password } = this.state.loginData;
        const user = this.dummyUsers.find(u => u.username === username && u.password === password);
        
        if (user) {
            this.setState({
                isLoggedIn: true,
                loggedInUser: user,
                currentStep: 'products',
                loginData: {
                    username: '',
                    password: ''
                }
            });
        } else {
            alert('Invalid username or password. Try: demo_user/demo123, test_user/test123, or admin/admin123');
        }
    };

    handleLogout = () => {
        this.setState({
            isLoggedIn: false,
            loggedInUser: null,
            currentStep: 'login',
            cart: [],
            selectedProduct: null,
            checkoutData: {
                name: '',
                email: '',
                address: '',
                city: '',
                zipCode: '',
                country: '',
                paymentMethod: 'credit-card',
                cardNumber: '',
                expiryDate: '',
                cvv: ''
            },
            orderNumber: null
        });
    };

    viewProduct = (product) => {
        this.setState({
            selectedProduct: product,
            currentStep: 'product-detail'
        });
    };

    addToCart = (product) => {
        const existingItem = this.state.cart.find(item => item.id === product.id);
        if (existingItem) {
            this.setState({
                cart: this.state.cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            });
        } else {
            this.setState({
                cart: [...this.state.cart, { ...product, quantity: 1 }]
            });
        }
    };

    removeFromCart = (productId) => {
        this.setState({
            cart: this.state.cart.filter(item => item.id !== productId)
        });
    };

    updateCartQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            this.removeFromCart(productId);
        } else {
            this.setState({
                cart: this.state.cart.map(item =>
                    item.id === productId
                        ? { ...item, quantity }
                        : item
                )
            });
        }
    };

    calculateTotal = () => {
        return this.state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    proceedToCheckout = () => {
        this.setState({ currentStep: 'checkout' });
    };

    handleCheckoutChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            checkoutData: {
                ...this.state.checkoutData,
                [name]: value
            }
        });
    };

    validateCheckout = () => {
        const { checkoutData } = this.state;
        return (
            checkoutData.name.trim() &&
            checkoutData.email.trim() &&
            checkoutData.address.trim() &&
            checkoutData.city.trim() &&
            checkoutData.zipCode.trim() &&
            checkoutData.country.trim() &&
            (checkoutData.paymentMethod === 'credit-card' 
                ? (checkoutData.cardNumber.trim() && checkoutData.expiryDate.trim() && checkoutData.cvv.trim())
                : true)
        );
    };

    placeOrder = () => {
        if (this.validateCheckout()) {
            const orderNumber = 'ORD-' + Date.now();
            this.setState({
                orderNumber,
                currentStep: 'confirmation',
                cart: []
            });
        }
    };

    render() {
        const { currentStep, selectedProduct, cart, checkoutData, orderNumber } = this.state;

        return (
            <main
                id="e2e-flow-main"
                data-testid="e2e-flow-main"
                style={{
                    minHeight: '100vh',
                    backgroundColor: '#f8f9fa',
                    padding: '40px 20px'
                }}
            >
                <div
                    id="e2e-flow-container"
                    data-testid="e2e-flow-container"
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        backgroundColor: '#ffffff',
                        padding: '40px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    {/* Header */}
                    <div
                        id="e2e-flow-header"
                        data-testid="e2e-flow-header"
                        style={{
                            marginBottom: '30px',
                            borderBottom: '2px solid #00416A',
                            paddingBottom: '20px',
                            position: 'relative'
                        }}
                    >
                        <h1
                            id="e2e-flow-title"
                            data-testid="e2e-flow-title"
                            style={{
                                color: '#00416A',
                                fontSize: '32px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}
                        >
                            E-Commerce End-to-End Flow
                        </h1>
                        <p
                            id="e2e-flow-description"
                            data-testid="e2e-flow-description"
                            style={{
                                fontSize: '18px',
                                color: '#666',
                                marginBottom: '20px'
                            }}
                        >
                            Complete e-commerce shopping experience from product browsing to order confirmation
                        </p>

                        {/* User Info / Logout */}
                        {this.state.isLoggedIn && (
                            <div
                                id="e2e-flow-user-info"
                                data-testid="e2e-flow-user-info"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '20px',
                                    padding: '10px 15px',
                                    backgroundColor: '#e7f3ff',
                                    borderRadius: '6px'
                                }}
                            >
                                <span
                                    id="e2e-flow-user-status"
                                    data-testid="e2e-flow-user-status"
                                    style={{
                                        color: '#00416A',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}
                                >
                                    ✓ Logged in as: {this.state.loggedInUser?.name || 'User'}
                                </span>
                                <button
                                    id="e2e-flow-logout-button"
                                    data-testid="e2e-flow-logout-button"
                                    onClick={this.handleLogout}
                                    style={{
                                        padding: '6px 12px',
                                        backgroundColor: '#dc3545',
                                        color: '#ffffff',
                                        border: 'none',
                                        borderRadius: '4px',
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        fontWeight: '600'
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        )}

                        {/* Navigation Steps */}
                        <div
                            id="e2e-flow-steps"
                            data-testid="e2e-flow-steps"
                            style={{
                                display: 'flex',
                                gap: '10px',
                                flexWrap: 'wrap',
                                marginTop: '20px'
                            }}
                        >
                            {['login', 'products', 'product-detail', 'cart', 'checkout', 'confirmation'].map((step, index) => (
                                <div
                                    key={step}
                                    id={`e2e-flow-step-${step}`}
                                    data-testid={`e2e-flow-step-${step}`}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                        backgroundColor: currentStep === step ? '#00416A' : '#e0e0e0',
                                        color: currentStep === step ? '#ffffff' : '#666',
                                        fontSize: '14px',
                                        fontWeight: currentStep === step ? '600' : '400',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onClick={() => {
                                        if (step === 'login' || (step === 'products' && this.state.isLoggedIn) || (step === 'cart' && cart.length > 0) || step === 'confirmation') {
                                            this.setState({ currentStep: step, selectedProduct: null });
                                        }
                                    }}
                                >
                                    {index + 1}. {step.charAt(0).toUpperCase() + step.slice(1).replace('-', ' ')}
                                </div>
                            ))}
                        </div>

                        {/* Cart Icon */}
                        {cart.length > 0 && (
                            <div
                                id="e2e-flow-cart-badge"
                                data-testid="e2e-flow-cart-badge"
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    backgroundColor: '#dc3545',
                                    color: '#ffffff',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                                onClick={() => this.setState({ currentStep: 'cart' })}
                            >
                                {cart.reduce((sum, item) => sum + item.quantity, 0)}
                            </div>
                        )}
                    </div>

                    {/* Login */}
                    {currentStep === 'login' && (
                        <div
                            id="e2e-flow-login"
                            data-testid="e2e-flow-login"
                            style={{
                                maxWidth: '500px',
                                margin: '0 auto'
                            }}
                        >
                            <h2
                                id="e2e-flow-login-title"
                                data-testid="e2e-flow-login-title"
                                style={{
                                    color: '#00416A',
                                    fontSize: '28px',
                                    marginBottom: '10px',
                                    textAlign: 'center'
                                }}
                            >
                                Welcome to E-Commerce Store
                            </h2>
                            <p
                                id="e2e-flow-login-subtitle"
                                data-testid="e2e-flow-login-subtitle"
                                style={{
                                    color: '#666',
                                    fontSize: '16px',
                                    marginBottom: '30px',
                                    textAlign: 'center'
                                }}
                            >
                                Please login to continue shopping
                            </p>
                            <form
                                id="e2e-flow-login-form"
                                data-testid="e2e-flow-login-form"
                                onSubmit={this.handleLogin}
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '30px',
                                    borderRadius: '8px',
                                    border: '1px solid #e0e0e0'
                                }}
                            >
                                <div style={{ marginBottom: '20px' }}>
                                    <label
                                        id="e2e-flow-login-username-label"
                                        data-testid="e2e-flow-login-username-label"
                                        htmlFor="e2e-flow-login-username-input"
                                        style={{
                                            display: 'block',
                                            marginBottom: '8px',
                                            color: '#333',
                                            fontWeight: '600',
                                            fontSize: '14px'
                                        }}
                                    >
                                        Username
                                    </label>
                                    <input
                                        id="e2e-flow-login-username-input"
                                        data-testid="e2e-flow-login-username-input"
                                        type="text"
                                        name="username"
                                        value={this.state.loginData.username}
                                        onChange={this.handleLoginChange}
                                        placeholder="Enter username"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '6px',
                                            fontSize: '16px',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom: '25px' }}>
                                    <label
                                        id="e2e-flow-login-password-label"
                                        data-testid="e2e-flow-login-password-label"
                                        htmlFor="e2e-flow-login-password-input"
                                        style={{
                                            display: 'block',
                                            marginBottom: '8px',
                                            color: '#333',
                                            fontWeight: '600',
                                            fontSize: '14px'
                                        }}
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="e2e-flow-login-password-input"
                                        data-testid="e2e-flow-login-password-input"
                                        type="password"
                                        name="password"
                                        value={this.state.loginData.password}
                                        onChange={this.handleLoginChange}
                                        placeholder="Enter password"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            border: '1px solid #ddd',
                                            borderRadius: '6px',
                                            fontSize: '16px',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                </div>
                                <button
                                    id="e2e-flow-login-submit-button"
                                    data-testid="e2e-flow-login-submit-button"
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        padding: '15px',
                                        backgroundColor: '#00416A',
                                        color: '#ffffff',
                                        border: 'none',
                                        borderRadius: '6px',
                                        fontSize: '18px',
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
                                    Login
                                </button>
                                <div
                                    id="e2e-flow-login-demo-info"
                                    data-testid="e2e-flow-login-demo-info"
                                    style={{
                                        marginTop: '20px',
                                        padding: '15px',
                                        backgroundColor: '#fff3cd',
                                        borderRadius: '6px',
                                        border: '1px solid #ffc107'
                                    }}
                                >
                                    <p
                                        id="e2e-flow-login-demo-info-title"
                                        data-testid="e2e-flow-login-demo-info-title"
                                        style={{
                                            margin: '0 0 10px 0',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: '#856404'
                                        }}
                                    >
                                        Demo Credentials:
                                    </p>
                                    <ul
                                        id="e2e-flow-login-demo-credentials"
                                        data-testid="e2e-flow-login-demo-credentials"
                                        style={{
                                            margin: 0,
                                            paddingLeft: '20px',
                                            fontSize: '13px',
                                            color: '#856404',
                                            lineHeight: '1.8'
                                        }}
                                    >
                                        <li>Username: <strong>demo_user</strong> / Password: <strong>demo123</strong></li>
                                        <li>Username: <strong>test_user</strong> / Password: <strong>test123</strong></li>
                                        <li>Username: <strong>admin</strong> / Password: <strong>admin123</strong></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Products List */}
                    {currentStep === 'products' && this.state.isLoggedIn && (
                        <div
                            id="e2e-flow-products"
                            data-testid="e2e-flow-products"
                        >
                            <h2
                                id="e2e-flow-products-title"
                                data-testid="e2e-flow-products-title"
                                style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '20px'
                                }}
                            >
                                Browse Products
                            </h2>
                            <div
                                id="e2e-flow-products-grid"
                                data-testid="e2e-flow-products-grid"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                                    gap: '20px'
                                }}
                            >
                                {this.products.map(product => (
                                    <div
                                        key={product.id}
                                        id={`e2e-flow-product-${product.id}`}
                                        data-testid={`e2e-flow-product-${product.id}`}
                                        style={{
                                            border: '2px solid #e0e0e0',
                                            borderRadius: '8px',
                                            padding: '20px',
                                            backgroundColor: '#ffffff',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = '#00416A';
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,65,106,0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '#e0e0e0';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                        onClick={() => this.viewProduct(product)}
                                    >
                                        <div
                                            id={`e2e-flow-product-${product.id}-image`}
                                            data-testid={`e2e-flow-product-${product.id}-image`}
                                            style={{
                                                fontSize: '64px',
                                                textAlign: 'center',
                                                marginBottom: '15px'
                                            }}
                                        >
                                            {product.image}
                                        </div>
                                        <h3
                                            id={`e2e-flow-product-${product.id}-name`}
                                            data-testid={`e2e-flow-product-${product.id}-name`}
                                            style={{
                                                color: '#00416A',
                                                fontSize: '18px',
                                                marginBottom: '10px',
                                                fontWeight: '600'
                                            }}
                                        >
                                            {product.name}
                                        </h3>
                                        <p
                                            id={`e2e-flow-product-${product.id}-price`}
                                            data-testid={`e2e-flow-product-${product.id}-price`}
                                            style={{
                                                color: '#28a745',
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                marginBottom: '10px'
                                            }}
                                        >
                                            ${product.price.toFixed(2)}
                                        </p>
                                        <p
                                            id={`e2e-flow-product-${product.id}-category`}
                                            data-testid={`e2e-flow-product-${product.id}-category`}
                                            style={{
                                                color: '#666',
                                                fontSize: '14px',
                                                marginBottom: '10px'
                                            }}
                                        >
                                            {product.category}
                                        </p>
                                        {!product.inStock && (
                                            <span
                                                id={`e2e-flow-product-${product.id}-out-of-stock`}
                                                data-testid={`e2e-flow-product-${product.id}-out-of-stock`}
                                                style={{
                                                    display: 'inline-block',
                                                    padding: '4px 8px',
                                                    backgroundColor: '#dc3545',
                                                    color: '#ffffff',
                                                    borderRadius: '4px',
                                                    fontSize: '12px',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                Out of Stock
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Product Detail */}
                    {currentStep === 'product-detail' && selectedProduct && this.state.isLoggedIn && (
                        <div
                            id="e2e-flow-product-detail"
                            data-testid="e2e-flow-product-detail"
                        >
                            <button
                                id="e2e-flow-back-to-products"
                                data-testid="e2e-flow-back-to-products"
                                onClick={() => this.setState({ currentStep: 'products', selectedProduct: null })}
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#6c757d',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    marginBottom: '20px',
                                    fontSize: '16px'
                                }}
                            >
                                ← Back to Products
                            </button>
                            <div
                                id="e2e-flow-product-detail-content"
                                data-testid="e2e-flow-product-detail-content"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '40px'
                                }}
                            >
                                <div>
                                    <div
                                        id="e2e-flow-product-detail-image"
                                        data-testid="e2e-flow-product-detail-image"
                                        style={{
                                            fontSize: '200px',
                                            textAlign: 'center',
                                            padding: '40px',
                                            backgroundColor: '#f8f9fa',
                                            borderRadius: '8px',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        {selectedProduct.image}
                                    </div>
                                </div>
                                <div>
                                    <h2
                                        id="e2e-flow-product-detail-name"
                                        data-testid="e2e-flow-product-detail-name"
                                        style={{
                                            color: '#00416A',
                                            fontSize: '32px',
                                            marginBottom: '15px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {selectedProduct.name}
                                    </h2>
                                    <p
                                        id="e2e-flow-product-detail-price"
                                        data-testid="e2e-flow-product-detail-price"
                                        style={{
                                            color: '#28a745',
                                            fontSize: '28px',
                                            fontWeight: 'bold',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        ${selectedProduct.price.toFixed(2)}
                                    </p>
                                    <p
                                        id="e2e-flow-product-detail-description"
                                        data-testid="e2e-flow-product-detail-description"
                                        style={{
                                            color: '#666',
                                            fontSize: '16px',
                                            lineHeight: '1.6',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        {selectedProduct.description}
                                    </p>
                                    <p
                                        id="e2e-flow-product-detail-category"
                                        data-testid="e2e-flow-product-detail-category"
                                        style={{
                                            color: '#666',
                                            fontSize: '14px',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        <strong>Category:</strong> {selectedProduct.category}
                                    </p>
                                    {selectedProduct.inStock ? (
                                        <button
                                            id="e2e-flow-product-detail-add-to-cart"
                                            data-testid="e2e-flow-product-detail-add-to-cart"
                                            onClick={() => {
                                                this.addToCart(selectedProduct);
                                                alert('Product added to cart!');
                                            }}
                                            style={{
                                                padding: '15px 30px',
                                                backgroundColor: '#00416A',
                                                color: '#ffffff',
                                                border: 'none',
                                                borderRadius: '6px',
                                                fontSize: '18px',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                width: '100%',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = '#005a8a';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = '#00416A';
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    ) : (
                                        <button
                                            id="e2e-flow-product-detail-out-of-stock-button"
                                            data-testid="e2e-flow-product-detail-out-of-stock-button"
                                            disabled
                                            style={{
                                                padding: '15px 30px',
                                                backgroundColor: '#6c757d',
                                                color: '#ffffff',
                                                border: 'none',
                                                borderRadius: '6px',
                                                fontSize: '18px',
                                                fontWeight: '600',
                                                cursor: 'not-allowed',
                                                width: '100%',
                                                opacity: 0.6
                                            }}
                                        >
                                            Out of Stock
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Shopping Cart */}
                    {currentStep === 'cart' && this.state.isLoggedIn && (
                        <div
                            id="e2e-flow-cart"
                            data-testid="e2e-flow-cart"
                        >
                            <h2
                                id="e2e-flow-cart-title"
                                data-testid="e2e-flow-cart-title"
                                style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '20px'
                                }}
                            >
                                Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                            </h2>
                            {cart.length === 0 ? (
                                <div
                                    id="e2e-flow-cart-empty"
                                    data-testid="e2e-flow-cart-empty"
                                    style={{
                                        textAlign: 'center',
                                        padding: '60px 20px',
                                        color: '#666'
                                    }}
                                >
                                    <p
                                        id="e2e-flow-cart-empty-message"
                                        data-testid="e2e-flow-cart-empty-message"
                                        style={{ fontSize: '18px', marginBottom: '20px' }}
                                    >
                                        Your cart is empty
                                    </p>
                                    <button
                                        id="e2e-flow-cart-browse-products"
                                        data-testid="e2e-flow-cart-browse-products"
                                        onClick={() => this.setState({ currentStep: 'products' })}
                                        style={{
                                            padding: '12px 24px',
                                            backgroundColor: '#00416A',
                                            color: '#ffffff',
                                            border: 'none',
                                            borderRadius: '6px',
                                            fontSize: '16px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Browse Products
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div
                                        id="e2e-flow-cart-items"
                                        data-testid="e2e-flow-cart-items"
                                        style={{
                                            marginBottom: '30px'
                                        }}
                                    >
                                        {cart.map(item => (
                                            <div
                                                key={item.id}
                                                id={`e2e-flow-cart-item-${item.id}`}
                                                data-testid={`e2e-flow-cart-item-${item.id}`}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '20px',
                                                    padding: '20px',
                                                    border: '1px solid #e0e0e0',
                                                    borderRadius: '8px',
                                                    marginBottom: '15px'
                                                }}
                                            >
                                                <div
                                                    id={`e2e-flow-cart-item-${item.id}-image`}
                                                    data-testid={`e2e-flow-cart-item-${item.id}-image`}
                                                    style={{
                                                        fontSize: '48px'
                                                    }}
                                                >
                                                    {item.image}
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <h3
                                                        id={`e2e-flow-cart-item-${item.id}-name`}
                                                        data-testid={`e2e-flow-cart-item-${item.id}-name`}
                                                        style={{
                                                            color: '#00416A',
                                                            fontSize: '18px',
                                                            marginBottom: '5px',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        {item.name}
                                                    </h3>
                                                    <p
                                                        id={`e2e-flow-cart-item-${item.id}-price`}
                                                        data-testid={`e2e-flow-cart-item-${item.id}-price`}
                                                        style={{
                                                            color: '#28a745',
                                                            fontSize: '16px',
                                                            fontWeight: 'bold'
                                                        }}
                                                    >
                                                        ${item.price.toFixed(2)}
                                                    </p>
                                                </div>
                                                <div
                                                    id={`e2e-flow-cart-item-${item.id}-quantity`}
                                                    data-testid={`e2e-flow-cart-item-${item.id}-quantity`}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                >
                                                    <button
                                                        id={`e2e-flow-cart-item-${item.id}-decrease`}
                                                        data-testid={`e2e-flow-cart-item-${item.id}-decrease`}
                                                        onClick={() => this.updateCartQuantity(item.id, item.quantity - 1)}
                                                        style={{
                                                            padding: '5px 10px',
                                                            backgroundColor: '#dc3545',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '4px',
                                                            cursor: 'pointer',
                                                            fontSize: '16px'
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                    <span
                                                        id={`e2e-flow-cart-item-${item.id}-quantity-value`}
                                                        data-testid={`e2e-flow-cart-item-${item.id}-quantity-value`}
                                                        style={{
                                                            fontSize: '18px',
                                                            fontWeight: '600',
                                                            minWidth: '30px',
                                                            textAlign: 'center'
                                                        }}
                                                    >
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        id={`e2e-flow-cart-item-${item.id}-increase`}
                                                        data-testid={`e2e-flow-cart-item-${item.id}-increase`}
                                                        onClick={() => this.updateCartQuantity(item.id, item.quantity + 1)}
                                                        style={{
                                                            padding: '5px 10px',
                                                            backgroundColor: '#28a745',
                                                            color: '#ffffff',
                                                            border: 'none',
                                                            borderRadius: '4px',
                                                            cursor: 'pointer',
                                                            fontSize: '16px'
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <div
                                                    id={`e2e-flow-cart-item-${item.id}-total`}
                                                    data-testid={`e2e-flow-cart-item-${item.id}-total`}
                                                    style={{
                                                        fontSize: '18px',
                                                        fontWeight: 'bold',
                                                        color: '#00416A',
                                                        minWidth: '80px',
                                                        textAlign: 'right'
                                                    }}
                                                >
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                                <button
                                                    id={`e2e-flow-cart-item-${item.id}-remove`}
                                                    data-testid={`e2e-flow-cart-item-${item.id}-remove`}
                                                    onClick={() => this.removeFromCart(item.id)}
                                                    style={{
                                                        padding: '8px 12px',
                                                        backgroundColor: '#dc3545',
                                                        color: '#ffffff',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer',
                                                        fontSize: '14px'
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        id="e2e-flow-cart-summary"
                                        data-testid="e2e-flow-cart-summary"
                                        style={{
                                            borderTop: '2px solid #00416A',
                                            paddingTop: '20px'
                                        }}
                                    >
                                        <div
                                            id="e2e-flow-cart-total"
                                            data-testid="e2e-flow-cart-total"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginBottom: '20px'
                                            }}
                                        >
                                            <span
                                                id="e2e-flow-cart-total-label"
                                                data-testid="e2e-flow-cart-total-label"
                                                style={{ fontSize: '24px', fontWeight: 'bold', color: '#00416A' }}
                                            >
                                                Total:
                                            </span>
                                            <span
                                                id="e2e-flow-cart-total-value"
                                                data-testid="e2e-flow-cart-total-value"
                                                style={{ fontSize: '28px', fontWeight: 'bold', color: '#28a745' }}
                                            >
                                                ${this.calculateTotal().toFixed(2)}
                                            </span>
                                        </div>
                                        <button
                                            id="e2e-flow-cart-checkout"
                                            data-testid="e2e-flow-cart-checkout"
                                            onClick={this.proceedToCheckout}
                                            style={{
                                                width: '100%',
                                                padding: '15px',
                                                backgroundColor: '#00416A',
                                                color: '#ffffff',
                                                border: 'none',
                                                borderRadius: '6px',
                                                fontSize: '18px',
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
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* Checkout */}
                    {currentStep === 'checkout' && this.state.isLoggedIn && (
                        <div
                            id="e2e-flow-checkout"
                            data-testid="e2e-flow-checkout"
                        >
                            <h2
                                id="e2e-flow-checkout-title"
                                data-testid="e2e-flow-checkout-title"
                                style={{
                                    color: '#00416A',
                                    fontSize: '24px',
                                    marginBottom: '30px'
                                }}
                            >
                                Checkout
                            </h2>
                            <div
                                id="e2e-flow-checkout-content"
                                data-testid="e2e-flow-checkout-content"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '2fr 1fr',
                                    gap: '40px'
                                }}
                            >
                                <div>
                                    <h3
                                        id="e2e-flow-checkout-shipping-title"
                                        data-testid="e2e-flow-checkout-shipping-title"
                                        style={{
                                            color: '#00416A',
                                            fontSize: '20px',
                                            marginBottom: '20px',
                                            paddingBottom: '10px',
                                            borderBottom: '1px solid #e0e0e0'
                                        }}
                                    >
                                        Shipping Information
                                    </h3>
                                    <div
                                        id="e2e-flow-checkout-shipping-form"
                                        data-testid="e2e-flow-checkout-shipping-form"
                                        style={{
                                            display: 'grid',
                                            gap: '15px'
                                        }}
                                    >
                                        <input
                                            id="e2e-flow-checkout-name"
                                            data-testid="e2e-flow-checkout-name"
                                            type="text"
                                            name="name"
                                            placeholder="Full Name *"
                                            value={checkoutData.name}
                                            onChange={this.handleCheckoutChange}
                                            style={{
                                                padding: '12px',
                                                border: '1px solid #ddd',
                                                borderRadius: '6px',
                                                fontSize: '16px'
                                            }}
                                        />
                                        <input
                                            id="e2e-flow-checkout-email"
                                            data-testid="e2e-flow-checkout-email"
                                            type="email"
                                            name="email"
                                            placeholder="Email Address *"
                                            value={checkoutData.email}
                                            onChange={this.handleCheckoutChange}
                                            style={{
                                                padding: '12px',
                                                border: '1px solid #ddd',
                                                borderRadius: '6px',
                                                fontSize: '16px'
                                            }}
                                        />
                                        <input
                                            id="e2e-flow-checkout-address"
                                            data-testid="e2e-flow-checkout-address"
                                            type="text"
                                            name="address"
                                            placeholder="Street Address *"
                                            value={checkoutData.address}
                                            onChange={this.handleCheckoutChange}
                                            style={{
                                                padding: '12px',
                                                border: '1px solid #ddd',
                                                borderRadius: '6px',
                                                fontSize: '16px'
                                            }}
                                        />
                                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px' }}>
                                            <input
                                                id="e2e-flow-checkout-city"
                                                data-testid="e2e-flow-checkout-city"
                                                type="text"
                                                name="city"
                                                placeholder="City *"
                                                value={checkoutData.city}
                                                onChange={this.handleCheckoutChange}
                                                style={{
                                                    padding: '12px',
                                                    border: '1px solid #ddd',
                                                    borderRadius: '6px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                            <input
                                                id="e2e-flow-checkout-zipcode"
                                                data-testid="e2e-flow-checkout-zipcode"
                                                type="text"
                                                name="zipCode"
                                                placeholder="ZIP Code *"
                                                value={checkoutData.zipCode}
                                                onChange={this.handleCheckoutChange}
                                                style={{
                                                    padding: '12px',
                                                    border: '1px solid #ddd',
                                                    borderRadius: '6px',
                                                    fontSize: '16px'
                                                }}
                                            />
                                        </div>
                                        <select
                                            id="e2e-flow-checkout-country"
                                            data-testid="e2e-flow-checkout-country"
                                            name="country"
                                            value={checkoutData.country}
                                            onChange={this.handleCheckoutChange}
                                            style={{
                                                padding: '12px',
                                                border: '1px solid #ddd',
                                                borderRadius: '6px',
                                                fontSize: '16px'
                                            }}
                                        >
                                            <option value="" data-testid="e2e-flow-checkout-country-option-empty">Select Country *</option>
                                            <option value="usa" data-testid="e2e-flow-checkout-country-option-usa">United States</option>
                                            <option value="canada" data-testid="e2e-flow-checkout-country-option-canada">Canada</option>
                                            <option value="uk" data-testid="e2e-flow-checkout-country-option-uk">United Kingdom</option>
                                            <option value="australia" data-testid="e2e-flow-checkout-country-option-australia">Australia</option>
                                            <option value="india" data-testid="e2e-flow-checkout-country-option-india">India</option>
                                        </select>
                                    </div>

                                    <h3
                                        id="e2e-flow-checkout-payment-title"
                                        data-testid="e2e-flow-checkout-payment-title"
                                        style={{
                                            color: '#00416A',
                                            fontSize: '20px',
                                            marginTop: '30px',
                                            marginBottom: '20px',
                                            paddingBottom: '10px',
                                            borderBottom: '1px solid #e0e0e0'
                                        }}
                                    >
                                        Payment Method
                                    </h3>
                                    <div
                                        id="e2e-flow-checkout-payment-methods"
                                        data-testid="e2e-flow-checkout-payment-methods"
                                        style={{
                                            marginBottom: '20px'
                                        }}
                                    >
                                        <label
                                            id="e2e-flow-checkout-payment-credit-card-label"
                                            data-testid="e2e-flow-checkout-payment-credit-card-label"
                                            htmlFor="e2e-flow-checkout-payment-credit-card-radio"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                marginBottom: '15px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <input
                                                id="e2e-flow-checkout-payment-credit-card-radio"
                                                data-testid="e2e-flow-checkout-payment-credit-card-radio"
                                                type="radio"
                                                name="paymentMethod"
                                                value="credit-card"
                                                checked={checkoutData.paymentMethod === 'credit-card'}
                                                onChange={this.handleCheckoutChange}
                                            />
                                            <span
                                                id="e2e-flow-checkout-payment-credit-card-text"
                                                data-testid="e2e-flow-checkout-payment-credit-card-text"
                                            >
                                                Credit Card
                                            </span>
                                        </label>
                                        <label
                                            id="e2e-flow-checkout-payment-paypal-label"
                                            data-testid="e2e-flow-checkout-payment-paypal-label"
                                            htmlFor="e2e-flow-checkout-payment-paypal-radio"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <input
                                                id="e2e-flow-checkout-payment-paypal-radio"
                                                data-testid="e2e-flow-checkout-payment-paypal-radio"
                                                type="radio"
                                                name="paymentMethod"
                                                value="paypal"
                                                checked={checkoutData.paymentMethod === 'paypal'}
                                                onChange={this.handleCheckoutChange}
                                            />
                                            <span
                                                id="e2e-flow-checkout-payment-paypal-text"
                                                data-testid="e2e-flow-checkout-payment-paypal-text"
                                            >
                                                PayPal
                                            </span>
                                        </label>
                                    </div>

                                    {checkoutData.paymentMethod === 'credit-card' && (
                                        <div
                                            id="e2e-flow-checkout-card-details"
                                            data-testid="e2e-flow-checkout-card-details"
                                            style={{
                                                display: 'grid',
                                                gap: '15px'
                                            }}
                                        >
                                            <div>
                                                <input
                                                    id="e2e-flow-checkout-card-number"
                                                    data-testid="e2e-flow-checkout-card-number"
                                                    type="text"
                                                    name="cardNumber"
                                                    placeholder="Card Number *"
                                                    value={checkoutData.cardNumber}
                                                    onChange={this.handleCheckoutChange}
                                                    maxLength="16"
                                                    style={{
                                                        width: '100%',
                                                        padding: '12px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '6px',
                                                        fontSize: '16px',
                                                        boxSizing: 'border-box'
                                                    }}
                                                />
                                                <div
                                                    id="e2e-flow-checkout-dummy-cards"
                                                    data-testid="e2e-flow-checkout-dummy-cards"
                                                    style={{
                                                        marginTop: '10px',
                                                        padding: '12px',
                                                        backgroundColor: '#e7f3ff',
                                                        borderRadius: '6px',
                                                        border: '1px solid #00416A',
                                                        fontSize: '13px'
                                                    }}
                                                >
                                                    <p
                                                        id="e2e-flow-checkout-dummy-cards-title"
                                                        data-testid="e2e-flow-checkout-dummy-cards-title"
                                                        style={{
                                                            margin: '0 0 8px 0',
                                                            fontWeight: '600',
                                                            color: '#00416A',
                                                            fontSize: '14px'
                                                        }}
                                                    >
                                                        💳 Test Card Numbers (Click to use):
                                                    </p>
                                                    <div
                                                        id="e2e-flow-checkout-dummy-cards-list"
                                                        data-testid="e2e-flow-checkout-dummy-cards-list"
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '6px'
                                                        }}
                                                    >
                                                        <button
                                                            type="button"
                                                            id="e2e-flow-checkout-dummy-card-visa"
                                                            data-testid="e2e-flow-checkout-dummy-card-visa"
                                                            onClick={() => {
                                                                this.setState({
                                                                    checkoutData: {
                                                                        ...this.state.checkoutData,
                                                                        cardNumber: '4111111111111111',
                                                                        expiryDate: '12/25',
                                                                        cvv: '123'
                                                                    }
                                                                });
                                                            }}
                                                            style={{
                                                                padding: '8px 12px',
                                                                backgroundColor: '#ffffff',
                                                                border: '1px solid #00416A',
                                                                borderRadius: '4px',
                                                                cursor: 'pointer',
                                                                fontSize: '12px',
                                                                textAlign: 'left',
                                                                color: '#00416A',
                                                                transition: 'all 0.2s ease'
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.backgroundColor = '#f0f8ff';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.backgroundColor = '#ffffff';
                                                            }}
                                                        >
                                                            <strong>Visa:</strong> 4111 1111 1111 1111 (Exp: 12/25, CVV: 123)
                                                        </button>
                                                        <button
                                                            type="button"
                                                            id="e2e-flow-checkout-dummy-card-mastercard"
                                                            data-testid="e2e-flow-checkout-dummy-card-mastercard"
                                                            onClick={() => {
                                                                this.setState({
                                                                    checkoutData: {
                                                                        ...this.state.checkoutData,
                                                                        cardNumber: '5555555555554444',
                                                                        expiryDate: '12/25',
                                                                        cvv: '123'
                                                                    }
                                                                });
                                                            }}
                                                            style={{
                                                                padding: '8px 12px',
                                                                backgroundColor: '#ffffff',
                                                                border: '1px solid #00416A',
                                                                borderRadius: '4px',
                                                                cursor: 'pointer',
                                                                fontSize: '12px',
                                                                textAlign: 'left',
                                                                color: '#00416A',
                                                                transition: 'all 0.2s ease'
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.backgroundColor = '#f0f8ff';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.backgroundColor = '#ffffff';
                                                            }}
                                                        >
                                                            <strong>Mastercard:</strong> 5555 5555 5555 4444 (Exp: 12/25, CVV: 123)
                                                        </button>
                                                        <button
                                                            type="button"
                                                            id="e2e-flow-checkout-dummy-card-amex"
                                                            data-testid="e2e-flow-checkout-dummy-card-amex"
                                                            onClick={() => {
                                                                this.setState({
                                                                    checkoutData: {
                                                                        ...this.state.checkoutData,
                                                                        cardNumber: '378282246310005',
                                                                        expiryDate: '12/25',
                                                                        cvv: '1234'
                                                                    }
                                                                });
                                                            }}
                                                            style={{
                                                                padding: '8px 12px',
                                                                backgroundColor: '#ffffff',
                                                                border: '1px solid #00416A',
                                                                borderRadius: '4px',
                                                                cursor: 'pointer',
                                                                fontSize: '12px',
                                                                textAlign: 'left',
                                                                color: '#00416A',
                                                                transition: 'all 0.2s ease'
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.backgroundColor = '#f0f8ff';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.backgroundColor = '#ffffff';
                                                            }}
                                                        >
                                                            <strong>American Express:</strong> 3782 822463 10005 (Exp: 12/25, CVV: 1234)
                                                        </button>
                                                        <button
                                                            type="button"
                                                            id="e2e-flow-checkout-dummy-card-discover"
                                                            data-testid="e2e-flow-checkout-dummy-card-discover"
                                                            onClick={() => {
                                                                this.setState({
                                                                    checkoutData: {
                                                                        ...this.state.checkoutData,
                                                                        cardNumber: '6011111111111117',
                                                                        expiryDate: '12/25',
                                                                        cvv: '123'
                                                                    }
                                                                });
                                                            }}
                                                            style={{
                                                                padding: '8px 12px',
                                                                backgroundColor: '#ffffff',
                                                                border: '1px solid #00416A',
                                                                borderRadius: '4px',
                                                                cursor: 'pointer',
                                                                fontSize: '12px',
                                                                textAlign: 'left',
                                                                color: '#00416A',
                                                                transition: 'all 0.2s ease'
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.target.style.backgroundColor = '#f0f8ff';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.target.style.backgroundColor = '#ffffff';
                                                            }}
                                                        >
                                                            <strong>Discover:</strong> 6011 1111 1111 1117 (Exp: 12/25, CVV: 123)
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px' }}>
                                                <input
                                                    id="e2e-flow-checkout-expiry"
                                                    data-testid="e2e-flow-checkout-expiry"
                                                    type="text"
                                                    name="expiryDate"
                                                    placeholder="MM/YY *"
                                                    value={checkoutData.expiryDate}
                                                    onChange={this.handleCheckoutChange}
                                                    maxLength="5"
                                                    style={{
                                                        padding: '12px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '6px',
                                                        fontSize: '16px',
                                                        boxSizing: 'border-box'
                                                    }}
                                                />
                                                <input
                                                    id="e2e-flow-checkout-cvv"
                                                    data-testid="e2e-flow-checkout-cvv"
                                                    type="text"
                                                    name="cvv"
                                                    placeholder="CVV *"
                                                    value={checkoutData.cvv}
                                                    onChange={this.handleCheckoutChange}
                                                    maxLength="4"
                                                    style={{
                                                        padding: '12px',
                                                        border: '1px solid #ddd',
                                                        borderRadius: '6px',
                                                        fontSize: '16px',
                                                        boxSizing: 'border-box'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div
                                        id="e2e-flow-checkout-order-summary"
                                        data-testid="e2e-flow-checkout-order-summary"
                                        style={{
                                            backgroundColor: '#f8f9fa',
                                            padding: '20px',
                                            borderRadius: '8px',
                                            border: '1px solid #e0e0e0'
                                        }}
                                    >
                                        <h3
                                            id="e2e-flow-checkout-order-summary-title"
                                            data-testid="e2e-flow-checkout-order-summary-title"
                                            style={{
                                                color: '#00416A',
                                                fontSize: '18px',
                                                marginBottom: '20px'
                                            }}
                                        >
                                            Order Summary
                                        </h3>
                                        {cart.map(item => (
                                            <div
                                                key={item.id}
                                                id={`e2e-flow-checkout-order-item-${item.id}`}
                                                data-testid={`e2e-flow-checkout-order-item-${item.id}`}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    marginBottom: '10px',
                                                    fontSize: '14px'
                                                }}
                                            >
                                                <span
                                                    id={`e2e-flow-checkout-order-item-${item.id}-name`}
                                                    data-testid={`e2e-flow-checkout-order-item-${item.id}-name`}
                                                >
                                                    {item.name} x{item.quantity}
                                                </span>
                                                <span
                                                    id={`e2e-flow-checkout-order-item-${item.id}-price`}
                                                    data-testid={`e2e-flow-checkout-order-item-${item.id}-price`}
                                                >
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                        <div
                                            id="e2e-flow-checkout-order-total"
                                            data-testid="e2e-flow-checkout-order-total"
                                            style={{
                                                borderTop: '2px solid #00416A',
                                                paddingTop: '15px',
                                                marginTop: '15px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                color: '#00416A'
                                            }}
                                        >
                                            <span
                                                id="e2e-flow-checkout-order-total-label"
                                                data-testid="e2e-flow-checkout-order-total-label"
                                            >
                                                Total:
                                            </span>
                                            <span
                                                id="e2e-flow-checkout-order-total-value"
                                                data-testid="e2e-flow-checkout-order-total-value"
                                            >
                                                ${this.calculateTotal().toFixed(2)}
                                            </span>
                                        </div>
                                        <button
                                            id="e2e-flow-checkout-place-order"
                                            data-testid="e2e-flow-checkout-place-order"
                                            onClick={this.placeOrder}
                                            disabled={!this.validateCheckout()}
                                            style={{
                                                width: '100%',
                                                padding: '15px',
                                                backgroundColor: this.validateCheckout() ? '#28a745' : '#6c757d',
                                                color: '#ffffff',
                                                border: 'none',
                                                borderRadius: '6px',
                                                fontSize: '18px',
                                                fontWeight: '600',
                                                cursor: this.validateCheckout() ? 'pointer' : 'not-allowed',
                                                marginTop: '20px',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (this.validateCheckout()) {
                                                    e.target.style.backgroundColor = '#218838';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (this.validateCheckout()) {
                                                    e.target.style.backgroundColor = '#28a745';
                                                }
                                            }}
                                        >
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Order Confirmation */}
                    {currentStep === 'confirmation' && (
                        <div
                            id="e2e-flow-confirmation"
                            data-testid="e2e-flow-confirmation"
                            style={{
                                textAlign: 'center',
                                padding: '60px 20px'
                            }}
                        >
                            <div
                                id="e2e-flow-confirmation-icon"
                                data-testid="e2e-flow-confirmation-icon"
                                style={{
                                    fontSize: '80px',
                                    marginBottom: '20px'
                                }}
                            >
                                ✅
                            </div>
                            <h2
                                id="e2e-flow-confirmation-title"
                                data-testid="e2e-flow-confirmation-title"
                                style={{
                                    color: '#28a745',
                                    fontSize: '32px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Order Confirmed!
                            </h2>
                            <p
                                id="e2e-flow-confirmation-message"
                                data-testid="e2e-flow-confirmation-message"
                                style={{
                                    fontSize: '18px',
                                    color: '#666',
                                    marginBottom: '30px'
                                }}
                            >
                                Thank you for your purchase. Your order has been placed successfully.
                            </p>
                            <div
                                id="e2e-flow-confirmation-order-number"
                                data-testid="e2e-flow-confirmation-order-number"
                                style={{
                                    backgroundColor: '#f8f9fa',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    marginBottom: '30px',
                                    display: 'inline-block'
                                }}
                            >
                                <p
                                    id="e2e-flow-confirmation-order-number-text"
                                    data-testid="e2e-flow-confirmation-order-number-text"
                                    style={{ margin: 0, fontSize: '16px', color: '#666' }}
                                >
                                    <strong
                                        id="e2e-flow-confirmation-order-number-label"
                                        data-testid="e2e-flow-confirmation-order-number-label"
                                    >
                                        Order Number:
                                    </strong>{' '}
                                    <span
                                        id="e2e-flow-confirmation-order-number-value"
                                        data-testid="e2e-flow-confirmation-order-number-value"
                                    >
                                        {orderNumber}
                                    </span>
                                </p>
                            </div>
                            <button
                                id="e2e-flow-confirmation-continue-shopping"
                                data-testid="e2e-flow-confirmation-continue-shopping"
                                onClick={() => {
                                    this.setState({
                                        currentStep: 'products',
                                        selectedProduct: null,
                                        checkoutData: {
                                            name: '',
                                            email: '',
                                            address: '',
                                            city: '',
                                            zipCode: '',
                                            country: '',
                                            paymentMethod: 'credit-card',
                                            cardNumber: '',
                                            expiryDate: '',
                                            cvv: ''
                                        },
                                        orderNumber: null
                                    });
                                }}
                                style={{
                                    padding: '15px 30px',
                                    backgroundColor: '#00416A',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontSize: '18px',
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
                                Continue Shopping
                            </button>
                        </div>
                    )}

                    {/* Back Link */}
                    <div
                        id="e2e-flow-back-link-container"
                        data-testid="e2e-flow-back-link-container"
                        style={{
                            marginTop: '40px',
                            paddingTop: '20px',
                            borderTop: '1px solid #e0e0e0'
                        }}
                    >
                        <Link
                            id="e2e-flow-back-link"
                            data-testid="e2e-flow-back-link"
                            to="/practice"
                            style={{
                                color: '#00416A',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '16px'
                            }}
                        >
                            ← Back to UI Practice Examples
                        </Link>
                    </div>
                </div>
                <section
                    id="e2e-flow-footer-section"
                    data-testid="e2e-flow-footer-section"
                    className='pt4'
                >
                    </section>
            </main>
        );
    }
}

export default E2EFlow;
