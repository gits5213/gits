import React, { useState } from 'react';
import link from '../../../utilities/links.json';
import { leftAlignStyles } from '../../../utils/globalStyles';

const ApiTest = () => {
    const [isApiTestingExpanded, setIsApiTestingExpanded] = useState(false);

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
                        API-Test
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        API Development and Testing Platform
                    </p>
                </div>
            </div>

            {/* API Testing Fundamentals Section - Collapsible */}
            <div style={leftAlignStyles.mainContent}>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <div
                        onClick={() => setIsApiTestingExpanded(!isApiTestingExpanded)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: isApiTestingExpanded ? '15px' : '0',
                            borderBottom: isApiTestingExpanded ? '2px solid #00416A' : 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            if (!isApiTestingExpanded) {
                                e.currentTarget.style.backgroundColor = '#f0f7fa';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isApiTestingExpanded) {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <h2 style={{
                            ...leftAlignStyles.sectionHeading,
                            marginBottom: 0,
                            color: '#00416A'
                        }}>
                            API Testing Fundamentals
                        </h2>
                        <span style={{
                            fontSize: '32px',
                            color: '#00416A',
                            fontWeight: 'bold',
                            marginLeft: '20px',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease'
                        }}>
                            {isApiTestingExpanded ? '−' : '+'}
                        </span>
                    </div>

                    {isApiTestingExpanded && (
                        <div style={{ marginTop: '25px' }}>
                            {/* What is API from a testing standpoint */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    What is API from a Testing Standpoint?
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    From a testing perspective, an <strong>API (Application Programming Interface)</strong> is a set of protocols, routines, and tools that allows different software applications to communicate with each other. APIs define how software components should interact, specifying the methods, data formats, and rules for exchanging information.
                                </p>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    In testing, APIs are tested to ensure:
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    paddingLeft: '20px',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    <li>Correct data exchange between systems</li>
                                    <li>Proper request/response handling</li>
                                    <li>Error handling and edge cases</li>
                                    <li>Performance and reliability</li>
                                    <li>Security and authentication</li>
                                    <li>Compliance with API specifications</li>
                                </ul>
                            </div>

                            {/* Purpose of API Testing */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    What is the Purpose of API Testing?
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    API testing serves several critical purposes in software development:
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    paddingLeft: '20px',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    <li><strong>Functional Validation:</strong> Verify that APIs perform their intended functions correctly</li>
                                    <li><strong>Integration Testing:</strong> Ensure different systems and services communicate properly</li>
                                    <li><strong>Data Integrity:</strong> Validate that data is correctly sent, received, and processed</li>
                                    <li><strong>Error Handling:</strong> Test how APIs handle invalid inputs, errors, and edge cases</li>
                                    <li><strong>Performance Testing:</strong> Assess response times, throughput, and scalability</li>
                                    <li><strong>Security Testing:</strong> Identify vulnerabilities, test authentication, and authorization</li>
                                    <li><strong>Contract Testing:</strong> Verify APIs meet their specifications and contracts</li>
                                    <li><strong>Regression Testing:</strong> Ensure new changes don't break existing functionality</li>
                                </ul>
                            </div>

                            {/* Why we need API Testing */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Why We Need API Testing
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    API testing is essential for several reasons:
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    paddingLeft: '20px',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    <li><strong>Early Detection of Issues:</strong> Catch bugs before they reach production, reducing costs and time</li>
                                    <li><strong>Faster Testing:</strong> API tests run faster than UI tests, enabling quicker feedback cycles</li>
                                    <li><strong>Independent of UI:</strong> Test backend logic without waiting for frontend development</li>
                                    <li><strong>Better Coverage:</strong> Test business logic, data validation, and integration points comprehensively</li>
                                    <li><strong>Cost-Effective:</strong> Identify and fix issues early in the development lifecycle</li>
                                    <li><strong>CI/CD Integration:</strong> Automate testing in continuous integration pipelines</li>
                                    <li><strong>Microservices Architecture:</strong> Essential for testing service-to-service communication</li>
                                    <li><strong>Third-Party Integration:</strong> Validate external API integrations work correctly</li>
                                    <li><strong>Documentation:</strong> API tests serve as living documentation of API behavior</li>
                                    <li><strong>Risk Mitigation:</strong> Reduce the risk of production failures and security breaches</li>
                                </ul>
                            </div>

                            {/* Types of API Testing */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Different Types of API Testing - Detailed Explanation
                                </h3>
                                
                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        1. Functional Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Validates that APIs perform their intended functions correctly according to specifications.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Testing all CRUD operations (Create, Read, Update, Delete)</li>
                                        <li>Validating request/response formats</li>
                                        <li>Testing business logic and workflows</li>
                                        <li>Verifying data transformations</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: Testing User Management API

GET /api/users/1
Expected: Returns user with id=1
Response: 200 OK
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}

POST /api/users
Body: {"name": "Jane Doe", "email": "jane@example.com"}
Expected: Creates new user, returns 201 Created
Response: 201 Created
{
  "id": 2,
  "name": "Jane Doe",
  "email": "jane@example.com"
}

PUT /api/users/2
Body: {"name": "Jane Smith", "email": "jane@example.com"}
Expected: Updates user, returns 200 OK

DELETE /api/users/2
Expected: Deletes user, returns 204 No Content`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        2. Integration Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Tests how APIs interact with other APIs, databases, and external services.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>End-to-end workflow testing</li>
                                        <li>Database integration validation</li>
                                        <li>Third-party API integration</li>
                                        <li>Service-to-service communication</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: E-commerce Order Processing Flow

Step 1: Create Order
POST /api/orders
Body: {"userId": 1, "items": [{"productId": 101, "quantity": 2}]}
Response: 201 Created
{
  "orderId": 1001,
  "status": "pending",
  "total": 199.98
}

Step 2: Payment Service Integration
POST /api/payments
Body: {"orderId": 1001, "amount": 199.98, "cardToken": "tok_123"}
Response: 200 OK
{
  "paymentId": "pay_456",
  "status": "succeeded"
}

Step 3: Inventory Service Update
PUT /api/inventory/products/101
Body: {"quantity": -2}
Response: 200 OK

Step 4: Shipping Service Integration
POST /api/shipping
Body: {"orderId": 1001, "address": "123 Main St"}
Response: 201 Created
{
  "trackingNumber": "TRK789",
  "estimatedDelivery": "2024-02-10"
}

Step 5: Verify Order Status Updated
GET /api/orders/1001
Expected: Order status changed to "confirmed"
Response: 200 OK
{
  "orderId": 1001,
  "status": "confirmed",
  "paymentId": "pay_456",
  "trackingNumber": "TRK789"
}`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        3. Load Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Evaluates API performance under expected load conditions.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Testing with normal expected traffic</li>
                                        <li>Response time validation</li>
                                        <li>Throughput measurement</li>
                                        <li>Resource utilization monitoring</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: Load Test Scenario

Test Configuration:
- Concurrent Users: 100
- Duration: 5 minutes
- Ramp-up: 30 seconds
- Target Endpoint: GET /api/products

Expected Results:
- Average Response Time: < 200ms
- 95th Percentile: < 500ms
- Throughput: > 500 requests/second
- Error Rate: < 0.1%

Actual Results:
- Average Response Time: 185ms ✓
- 95th Percentile: 420ms ✓
- Throughput: 520 requests/second ✓
- Error Rate: 0.05% ✓
- CPU Usage: 65%
- Memory Usage: 2.1GB

Test Script (JMeter/Postman):
1. Create 100 virtual users
2. Each user sends GET /api/products every 2 seconds
3. Monitor response times and error rates
4. Generate performance report`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        4. Stress Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Tests API behavior under extreme load conditions beyond normal capacity.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Finding breaking points</li>
                                        <li>Testing system recovery</li>
                                        <li>Identifying bottlenecks</li>
                                        <li>Validating error handling under stress</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: Stress Test Scenario

Test Configuration:
- Start with 50 concurrent users
- Gradually increase to 1000 users
- Target Endpoint: POST /api/orders
- Duration: Until system breaks

Test Results:
Users    Response Time    Error Rate    Status
50       180ms           0%            ✓ Normal
200      450ms           0.2%          ✓ Acceptable
500      1200ms          2.5%          ⚠ Degraded
800      3500ms          15%           ⚠ High Latency
1000     Timeout          45%          ✗ System Failure

Breaking Point: ~850 concurrent users
Bottleneck Identified: Database connection pool exhausted
Recovery Time: 2 minutes after load reduction

Expected Behavior:
- API should return 503 Service Unavailable
- Error messages should be clear
- System should recover gracefully
- No data corruption occurred`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        5. Security Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Identifies vulnerabilities and ensures APIs are secure against attacks.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Authentication and authorization testing</li>
                                        <li>SQL injection and XSS vulnerability testing</li>
                                        <li>Encryption and data protection validation</li>
                                        <li>Penetration testing</li>
                                        <li>Token and session management testing</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: Security Test Scenarios

1. Authentication Testing:
GET /api/users/1
Headers: (No Authorization header)
Expected: 401 Unauthorized
Actual: 401 Unauthorized ✓

GET /api/users/1
Headers: Authorization: Bearer invalid_token
Expected: 401 Unauthorized
Actual: 401 Unauthorized ✓

2. Authorization Testing:
GET /api/users/999 (Access other user's data)
Headers: Authorization: Bearer user_token_123
Expected: 403 Forbidden
Actual: 403 Forbidden ✓

3. SQL Injection Testing:
GET /api/users?id=1' OR '1'='1
Expected: 400 Bad Request (sanitized)
Actual: 400 Bad Request ✓

POST /api/login
Body: {"username": "admin'--", "password": "anything"}
Expected: Rejected, no SQL execution
Actual: 401 Unauthorized ✓

4. XSS Testing:
POST /api/comments
Body: {"text": "<script>alert('XSS')</script>"}
Expected: Input sanitized, script not executed
Actual: Comment saved with escaped HTML ✓

5. Token Expiration Testing:
GET /api/users/1
Headers: Authorization: Bearer expired_token
Expected: 401 Unauthorized with "Token expired"
Actual: 401 Unauthorized ✓`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        6. Validation Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Verifies the behavior, efficiency, and reliability of APIs.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Data validation (correctness, completeness)</li>
                                        <li>Response time validation</li>
                                        <li>Status code verification</li>
                                        <li>Schema validation</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: Validation Test Cases

1. Schema Validation:
POST /api/users
Body: {"name": "John", "email": "john@example.com", "age": 30}
Expected Schema:
{
  "id": number,
  "name": string,
  "email": string (valid email format),
  "age": number (18-120),
  "createdAt": string (ISO date)
}
Actual Response: Matches schema ✓

2. Data Completeness:
GET /api/users/1
Expected: All required fields present
Response:
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "createdAt": "2024-01-15T10:30:00Z"
}
Validation: All fields present ✓

3. Response Time Validation:
GET /api/users
Expected: Response time < 200ms
Actual: 185ms ✓

4. Status Code Verification:
GET /api/users/999 (non-existent)
Expected: 404 Not Found
Actual: 404 Not Found ✓

POST /api/users (invalid data)
Body: {"name": "", "email": "invalid-email"}
Expected: 400 Bad Request
Actual: 400 Bad Request ✓`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        7. Error Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Tests how APIs handle errors and edge cases.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Invalid input handling</li>
                                        <li>Error message validation</li>
                                        <li>HTTP status code verification</li>
                                        <li>Edge case testing (boundary values, null values)</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: Error Test Scenarios

1. Invalid Input - Missing Required Field:
POST /api/users
Body: {"name": "John"}
Expected: 400 Bad Request
Response: 400 Bad Request
{
  "error": "Validation failed",
  "message": "Email is required"
} ✓

2. Invalid Input - Wrong Data Type:
POST /api/users
Body: {"name": "John", "email": "john@example.com", "age": "thirty"}
Expected: 400 Bad Request
Response: 400 Bad Request
{
  "error": "Validation failed",
  "message": "Age must be a number"
} ✓

3. Boundary Value Testing:
POST /api/users
Body: {"name": "John", "email": "john@example.com", "age": 17}
Expected: 400 Bad Request (age < 18)
Response: 400 Bad Request ✓

Body: {"name": "John", "email": "john@example.com", "age": 121}
Expected: 400 Bad Request (age > 120)
Response: 400 Bad Request ✓

4. Null/Empty Values:
POST /api/users
Body: {"name": null, "email": "", "age": null}
Expected: 400 Bad Request
Response: 400 Bad Request ✓

5. Resource Not Found:
GET /api/users/99999
Expected: 404 Not Found
Response: 404 Not Found
{
  "error": "Not Found",
  "message": "User with id 99999 not found"
} ✓

6. Server Error Handling:
GET /api/users (when database is down)
Expected: 500 Internal Server Error
Response: 500 Internal Server Error
{
  "error": "Internal Server Error",
  "message": "Database connection failed"
} ✓`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        8. Contract Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Ensures APIs meet their contracts and specifications (e.g., OpenAPI, Swagger).
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Schema compliance validation</li>
                                        <li>Request/response format verification</li>
                                        <li>API contract validation</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: Contract Testing with OpenAPI/Swagger

OpenAPI Contract (swagger.yaml):
/api/users/{id}:
  get:
    parameters:
      - name: id
        type: integer
        required: true
    responses:
      200:
        schema:
          type: object
          properties:
            id: {type: integer}
            name: {type: string}
            email: {type: string}

Test Case 1: Valid Request
GET /api/users/1
Expected: Matches contract schema
Response: 200 OK
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
Contract Validation: ✓ Passes

Test Case 2: Invalid Parameter Type
GET /api/users/abc
Expected: 400 Bad Request (id must be integer)
Response: 400 Bad Request
Contract Validation: ✓ Passes

Test Case 3: Response Schema Mismatch
GET /api/users/1
Expected: Response matches contract
Actual Response:
{
  "id": "1",  // Should be integer, not string
  "name": "John Doe",
  "email": "john@example.com"
}
Contract Validation: ✗ Fails (id type mismatch)

Test Case 4: Missing Required Field
GET /api/users/1
Expected: All contract fields present
Actual Response:
{
  "id": 1,
  "name": "John Doe"
  // Missing "email" field
}
Contract Validation: ✗ Fails (missing required field)`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        9. Reliability Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Tests API stability and consistency over time.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Consistent response validation</li>
                                        <li>Uptime and availability testing</li>
                                        <li>Long-running transaction testing</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: Reliability Test Scenarios

1. Consistent Response Testing:
Test: GET /api/users/1 (100 iterations)
Expected: Same response every time
Results:
- Iteration 1-100: All returned identical data ✓
- Response time variance: < 5% ✓
- No intermittent failures ✓

2. Uptime/Availability Testing:
Test: Monitor GET /api/health every 1 minute for 24 hours
Expected: 99.9% uptime
Results:
- Total requests: 1,440
- Successful: 1,438
- Failed: 2 (planned maintenance)
- Uptime: 99.86% ✓

3. Long-Running Transaction Testing:
Test: POST /api/reports/generate
Body: {"type": "monthly", "dateRange": "2024-01-01 to 2024-01-31"}
Expected: Completes successfully, no timeout
Results:
- Request sent: 10:00 AM
- Processing time: 45 minutes
- Status: 202 Accepted (async processing)
- Final status check: 200 OK (completed) ✓
- No data corruption ✓

4. Repeated Request Consistency:
Test: GET /api/products?category=electronics (50 times)
Expected: Same results, no duplicates, no missing items
Results:
- All 50 requests returned identical product list ✓
- No duplicate products ✓
- No missing products ✓`}</pre>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '25px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        10. Fuzz Testing
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>
                                        Sends random, invalid, or unexpected data to APIs to find vulnerabilities.
                                    </p>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li>Random data injection</li>
                                        <li>Malformed request testing</li>
                                        <li>Unexpected data type testing</li>
                                    </ul>
                                    <div style={{
                                        backgroundColor: '#f8f9fa',
                                        padding: '15px',
                                        borderRadius: '6px',
                                        fontFamily: 'monospace',
                                        fontSize: '14px',
                                        border: '1px solid #e0e0e0',
                                        marginTop: '15px',
                                        textAlign: 'left',
                                        overflowX: 'auto'
                                    }}>
                                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Example: Fuzz Testing Scenarios

1. Random String Injection:
POST /api/users
Body: {"name": "!@#$%^&*()", "email": "random123", "age": "xyz"}
Expected: 400 Bad Request (proper validation)
Response: 400 Bad Request ✓
No system crash ✓

2. Extremely Long Input:
POST /api/users
Body: {"name": "A" * 10000, "email": "test@example.com", "age": 30}
Expected: 400 Bad Request (length validation)
Response: 400 Bad Request ✓
No buffer overflow ✓

3. Special Characters:
POST /api/users
Body: {"name": "<script>alert('XSS')</script>", "email": "test@example.com"}
Expected: Input sanitized or rejected
Response: 400 Bad Request or sanitized input ✓

4. Malformed JSON:
POST /api/users
Body: {"name": "John", "email": "john@example.com", "age": 30
Expected: 400 Bad Request (invalid JSON)
Response: 400 Bad Request ✓

5. Unexpected Data Types:
POST /api/users
Body: {"name": 12345, "email": ["array"], "age": {"object": "value"}}
Expected: 400 Bad Request (type validation)
Response: 400 Bad Request ✓

6. Unicode/Emoji Injection:
POST /api/users
Body: {"name": "John 😀🎉", "email": "test@example.com", "age": 30}
Expected: Handled gracefully
Response: 201 Created (if supported) or 400 Bad Request ✓

7. SQL Injection via Fuzzing:
POST /api/users
Body: {"name": "John'; DROP TABLE users;--", "email": "test@example.com"}
Expected: Rejected, no SQL execution
Response: 400 Bad Request ✓`}</pre>
                                    </div>
                                </div>
                            </div>

                            {/* API Testing Tools */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Tools for API Testing
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    There are numerous tools available for API testing, each with its own strengths:
                                </p>
                                
                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        GUI-Based Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>Postman:</strong> Popular REST client with GUI, collections, environments, and automation</li>
                                        <li><strong>Insomnia:</strong> Lightweight REST client with clean interface</li>
                                        <li><strong>SoapUI:</strong> Specialized tool for SOAP and REST API testing</li>
                                        <li><strong>REST Assured (with IDE):</strong> Java-based testing framework</li>
                                        <li><strong>HTTPie:</strong> Command-line HTTP client with user-friendly interface</li>
                                        <li><strong>Paw:</strong> Mac-native API testing tool</li>
                                        <li><strong>Bruno:</strong> Open-source API client with local-first approach</li>
                                    </ul>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        Code-Based/Programming Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>REST Assured (Java):</strong> Java DSL for REST API testing</li>
                                        <li><strong>Karate DSL:</strong> BDD-style API testing framework</li>
                                        <li><strong>SuperTest (Node.js):</strong> HTTP assertion library for Node.js</li>
                                        <li><strong>Requests (Python):</strong> Python library for HTTP requests</li>
                                        <li><strong>HttpClient (C#/.NET):</strong> .NET library for HTTP requests</li>
                                        <li><strong>Axios (JavaScript):</strong> Promise-based HTTP client</li>
                                        <li><strong>Playwright/WebDriver:</strong> Can be used for API testing alongside UI testing</li>
                                    </ul>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        Performance Testing Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>JMeter:</strong> Apache JMeter for load and performance testing</li>
                                        <li><strong>Gatling:</strong> High-performance load testing tool</li>
                                        <li><strong>K6:</strong> Modern load testing tool with JavaScript</li>
                                        <li><strong>Artillery:</strong> Load testing toolkit</li>
                                        <li><strong>Locust:</strong> Python-based load testing framework</li>
                                    </ul>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        Security Testing Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>OWASP ZAP:</strong> Security testing tool for finding vulnerabilities</li>
                                        <li><strong>Burp Suite:</strong> Web security testing platform</li>
                                        <li><strong>Postman (Security Testing):</strong> Built-in security testing features</li>
                                    </ul>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '20px',
                                        marginBottom: '12px',
                                        fontWeight: '600',
                                        textAlign: 'left'
                                    }}>
                                        Contract Testing Tools:
                                    </h4>
                                    <ul style={{
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        color: '#333333',
                                        paddingLeft: '20px',
                                        textAlign: 'left',
                                        marginBottom: '15px'
                                    }}>
                                        <li><strong>Pact:</strong> Contract testing framework</li>
                                        <li><strong>Dredd:</strong> API testing framework for API Blueprint and OpenAPI</li>
                                        <li><strong>Schemathesis:</strong> Property-based testing for OpenAPI and GraphQL</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Prerequisites for API Testing */}
                            <div style={{ marginBottom: '30px' }}>
                                <h3 style={{
                                    color: '#00416A',
                                    fontSize: '22px',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}>
                                    Prerequisites for API Testing
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    Before starting API testing, you should have knowledge and understanding of:
                                </p>
                                <ul style={{
                                    fontSize: '16px',
                                    lineHeight: '1.8',
                                    color: '#333333',
                                    paddingLeft: '20px',
                                    textAlign: 'left',
                                    marginBottom: '15px'
                                }}>
                                    <li><strong>HTTP Protocol:</strong> Understanding of HTTP methods (GET, POST, PUT, DELETE, PATCH), status codes, headers, and request/response structure</li>
                                    <li><strong>REST API Concepts:</strong> Understanding REST principles, resources, endpoints, and stateless communication</li>
                                    <li><strong>JSON/XML:</strong> Knowledge of data formats used in API requests and responses</li>
                                    <li><strong>API Documentation:</strong> Ability to read and understand API documentation (OpenAPI/Swagger, API Blueprint)</li>
                                    <li><strong>Authentication Methods:</strong> Understanding of API authentication (API keys, OAuth, JWT tokens, Basic Auth)</li>
                                    <li><strong>Testing Fundamentals:</strong> Basic understanding of testing concepts (test cases, assertions, test data)</li>
                                    <li><strong>Command Line:</strong> Basic command-line knowledge for tools like Newman, cURL, or CLI-based testing</li>
                                    <li><strong>Programming Basics (for code-based testing):</strong> Knowledge of at least one programming language (JavaScript, Python, Java, etc.) if using code-based tools</li>
                                    <li><strong>Network Concepts:</strong> Basic understanding of client-server architecture, URLs, endpoints, and ports</li>
                                    <li><strong>API Testing Tools:</strong> Familiarity with at least one API testing tool (Postman, Insomnia, etc.)</li>
                                    <li><strong>Version Control:</strong> Basic Git knowledge for managing test scripts and collections</li>
                                    <li><strong>CI/CD Concepts:</strong> Understanding of continuous integration for automating API tests</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Introduction to Postman
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Postman is a powerful API platform used by developers and QA engineers to design, test, and document APIs. It provides a user-friendly interface for making HTTP requests, organizing API collections, and automating API testing workflows.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What is Postman?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Postman is an API platform for building and testing APIs</li>
                    <li>Postman supports REST, SOAP, GraphQL, and other API protocols</li>
                    <li>Postman provides a user-friendly GUI for API testing</li>
                    <li>Postman enables team collaboration and API documentation</li>
                    <li>Postman includes Newman CLI for command-line testing and CI/CD integration</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What Can Postman Do?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>REST and SOAP API testing</li>
                    <li>Request/Response inspection and debugging</li>
                    <li>Collection management and organization</li>
                    <li>Environment variables for different configurations</li>
                    <li>Automated testing with test scripts</li>
                    <li>API documentation generation</li>
                    <li>Team collaboration and sharing</li>
                    <li>Newman CLI for CI/CD integration</li>
                    <li>Mock servers for API development</li>
                    <li>API monitoring and performance testing</li>
                </ul>
            </div>

            {/* Installation Guides */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {/* Mac Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Postman Install for Mac (including Newman)
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download Postman
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://www.postman.com/downloads/</a></li>
                            <li>Click <strong>"Download for Mac"</strong></li>
                            <li>The installer file will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Install Postman
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open the downloaded file</li>
                            <li>Drag <strong>Postman.app</strong> to your <strong>Applications</strong> folder</li>
                            <li>Launch Postman from Applications</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Install Newman (Command Line Tool)
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Terminal</li>
                            <li>Ensure Node.js is installed (see Installation tab)</li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g newman</code></li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Launch Postman application</li>
                            <li>Verify Newman: Open Terminal and type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>
                </div>

                {/* Windows Installation */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '24px',
                        marginBottom: '20px',
                        fontWeight: 'bold'
                    }}>
                        Postman Install for Windows (including Newman)
                    </h3>
                    
                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 1: Download Postman
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Navigate to <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>https://www.postman.com/downloads/</a></li>
                            <li>Click <strong>"Download for Windows"</strong></li>
                            <li>The installer file (.exe) will download</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 2: Install Postman
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Double-click the downloaded .exe file</li>
                            <li>Click <strong>"Yes"</strong> if prompted by User Account Control</li>
                            <li>Follow the installation wizard</li>
                            <li>Click <strong>"Install"</strong></li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 3: Install Newman (Command Line Tool)
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Open Command Prompt or PowerShell</li>
                            <li>Ensure Node.js is installed (see Installation tab)</li>
                            <li>Run: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>npm install -g newman</code></li>
                            <li>Verify: <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>

                    <div>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '18px',
                            marginBottom: '15px',
                            fontWeight: '600'
                        }}>
                            Step 4: Verify Installation
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Launch Postman application</li>
                            <li>Verify Newman: Open Command Prompt and type <code style={{ backgroundColor: '#f8f9fa', padding: '2px 6px', borderRadius: '4px', color: '#00416A' }}>newman --version</code></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Getting Started Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Getting Started: Creating Your First Request
                </h2>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 1: Launch Postman and Create Request
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li>Launch Postman from Applications (Mac) or Start Menu (Windows)</li>
                        <li>Click <strong>"New"</strong> button → Select <strong>"HTTP Request"</strong></li>
                        <li>A new request tab will open with method dropdown and URL field</li>
                    </ul>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 2: Understanding the Interface
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><strong>Method:</strong> Dropdown to select HTTP method (GET, POST, PUT, DELETE, etc.)</li>
                        <li><strong>URL:</strong> Enter the API endpoint URL</li>
                        <li><strong>Params:</strong> Query parameters (for GET requests)</li>
                        <li><strong>Headers:</strong> HTTP headers (Authorization, Content-Type, etc.)</li>
                        <li><strong>Body:</strong> Request body (for POST, PUT, PATCH requests)</li>
                        <li><strong>Send:</strong> Button to execute the request</li>
                    </ul>
                </div>

                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Step 3: Create Collections and Environments
                    </h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        paddingLeft: '20px',
                        textAlign: 'left'
                    }}>
                        <li><strong>Collections:</strong> Organize related requests (Click "New" → "Collection")</li>
                        <li><strong>Environments:</strong> Manage variables for different environments (Click gear icon → "Add")</li>
                        <li>Use variables like <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px' }}>{`{{baseUrl}}`}</code> in URLs</li>
                    </ul>
                </div>
            </div>

            {/* REST API Examples */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    REST API Examples
                </h2>
                
                {/* GET Request */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        GET Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Retrieve data from an API endpoint.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: GET
URL: https://jsonplaceholder.typicode.com/users/1

Headers:
  Accept: application/json

Response:
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz"
}`}</pre>
                    </div>
                </div>

                {/* POST Request */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        POST Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Create a new resource.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: POST
URL: https://jsonplaceholder.typicode.com/posts

Headers:
  Content-Type: application/json

Body (raw JSON):
{
  "title": "My Post",
  "body": "This is the content",
  "userId": 1
}

Response:
{
  "id": 101,
  "title": "My Post",
  "body": "This is the content",
  "userId": 1
}`}</pre>
                    </div>
                </div>

                {/* PUT Request */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        PUT Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Update an entire resource.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: PUT
URL: https://jsonplaceholder.typicode.com/posts/1

Headers:
  Content-Type: application/json

Body (raw JSON):
{
  "id": 1,
  "title": "Updated Title",
  "body": "Updated content",
  "userId": 1
}`}</pre>
                    </div>
                </div>

                {/* PATCH Request */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        PATCH Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Partially update a resource.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: PATCH
URL: https://jsonplaceholder.typicode.com/posts/1

Headers:
  Content-Type: application/json

Body (raw JSON):
{
  "title": "Partially Updated Title"
}`}</pre>
                    </div>
                </div>

                {/* DELETE Request */}
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        DELETE Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Delete a resource. <strong>Warning:</strong> This action is permanent.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: DELETE
URL: https://jsonplaceholder.typicode.com/posts/1

Headers:
  Accept: application/json

Response:
{}`}</pre>
                    </div>
                </div>
            </div>

            {/* SOAP API Example */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    SOAP API Example
                </h2>
                <div style={{
                    backgroundColor: '#ffffff',
                    padding: '25px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #00416A',
                    textAlign: 'left'
                }}>
                    <h3 style={{
                        color: '#00416A',
                        fontSize: '20px',
                        marginBottom: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        SOAP Request Example
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        Testing SOAP APIs requires XML format and specific headers.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        border: '1px solid #e0e0e0',
                        marginBottom: '15px',
                        textAlign: 'left',
                        overflowX: 'auto'
                    }}>
                        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', textAlign: 'left' }}>{`Method: POST
URL: http://www.dneonline.com/calculator.asmx

Headers:
  Content-Type: text/xml; charset=utf-8
  SOAPAction: http://tempuri.org/Add

Body (raw XML):
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Add xmlns="http://tempuri.org/">
      <intA>10</intA>
      <intB>20</intB>
    </Add>
  </soap:Body>
</soap:Envelope>

Alternative: Import WSDL
1. Click "Import" button
2. Select "WSDL" tab
3. Enter WSDL URL or upload file
4. Postman will generate requests automatically`}</pre>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                <a 
                    href="https://www.postman.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
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
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Postman Official Website
                </a>
                <a 
                    href="https://learning.postman.com/docs/getting-started/introduction/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
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
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Postman Learning Center
                </a>
                <a 
                    href="https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
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
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Newman CLI Documentation
                </a>
                <a 
                    href="https://learning.postman.com/docs/writing-scripts/test-scripts/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        fontSize: '16px',
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
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00416A';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                >
                    Test Scripts Guide
                </a>
            </div>

            <section style={{ marginTop: '40px' }}>
            </section>
        </div>
    )
}

export default ApiTest;
