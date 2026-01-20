import React, {Component} from 'react';
import Footer from '../../footer';
import { testCaseStyles } from '../../../utils/globalStyles';
import '../../../styles/base.css';

class TestCases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTestCase: null,
            definitionsExpanded: false,
            expandedSections: {
                // All sections default to collapsed (false)
            }
        };
    }

    toggleSection = (sectionId) => {
        this.setState(prevState => ({
            expandedSections: {
                ...prevState.expandedSections,
                [sectionId]: !prevState.expandedSections[sectionId]
            }
        }));
    }

    // Map section IDs to their position in PracticeExamples (matching the numbering)
    getSectionNumber = (sectionId) => {
        const sectionOrder = [
            'registration-form',      // 1
            'e2e-flow',               // 2
            'ab-testing',             // 3
            'add-remove-elements',    // 4
            'basic-auth',             // 5
            'broken-images',          // 6
            'challenging-dom',        // 7
            'checkboxes',             // 8
            'context-menu',           // 9
            'digest-auth',            // 10
            'disappearing-elements',  // 11
            'drag-and-drop',          // 12
            'dropdown',               // 13
            'dynamic-content',        // 14
            'dynamic-controls',       // 15
            'dynamic-loading',        // 16
            'entry-ad',               // 17
            'exit-intent',            // 18
            'file-download',          // 19
            'file-upload',            // 20
            'floating-menu',          // 21
            'forgot-password',        // 22
            'form-authentication',    // 23
            'frames',                 // 24
            'geolocation',            // 25
            'horizontal-slider',      // 26
            'hovers',                 // 27
            'infinite-scroll',        // 28
            'inputs',                 // 29
            'jquery-ui-menus',        // 30
            'javascript-alerts',      // 31
            'javascript-error',        // 32
            'key-presses',            // 33
            'large-deep-dom',         // 34
            'multiple-windows',       // 35
            'nested-frames',          // 36
            'notification-messages',  // 37
            'redirect-link',          // 38
            'secure-file-download',   // 39
            'shadow-dom',             // 40
            'shifting-content',       // 41
            'slow-resources',         // 42
            'sortable-data-tables',   // 43
            'status-codes',           // 44
            'typos',                  // 45
            'wysiwyg-editor'          // 46
        ];
        const index = sectionOrder.indexOf(sectionId);
        return index !== -1 ? index + 1 : null;
    }

    render() {
        // Organize test cases by sections
        const testCasesSections = {
            'registration-form': {
                id: 'registration-form',
                title: 'Registration Form Test Cases',
                description: 'Test cases for the Registration Form functionality, covering positive and negative scenarios for all form fields.',
                testCases: [
                    // ========== POSITIVE TEST CASE ==========
            {
                id: 'TC-001',
                title: 'Registration Form - Successful Registration with Valid Data',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Critical',
                testBasis: 'PRD v1.0, Registration Section; Story 01',
                requirementId: 'REQ-001',
                acceptanceCriteria: 'As a user, I want to register with valid information so that I can create an account successfully',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I fill in all required fields with valid data',
                    and: 'And I check the Terms and Conditions checkbox',
                    then: 'Then I should see a success page with my registration information displayed'
                },
                objective: 'Verify that a user can successfully register with valid information',
                preconditions: [
                    'User is not logged in',
                    'Registration form page is accessible',
                    'No existing account with the same email/username'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads successfully' },
                    { step: 2, action: 'Enter First Name', testData: 'John', expectedResult: 'First Name field accepts input' },
                    { step: 3, action: 'Enter Last Name', testData: 'Doe', expectedResult: 'Last Name field accepts input' },
                    { step: 4, action: 'Enter Email', testData: 'john.doe@example.com', expectedResult: 'Email field accepts valid email format' },
                    { step: 5, action: 'Enter Phone Number', testData: '1234567890', expectedResult: 'Phone field accepts numeric input' },
                    { step: 6, action: 'Enter Username', testData: 'johndoe123', expectedResult: 'Username field accepts input (min 5 chars)' },
                    { step: 7, action: 'Enter Password', testData: 'SecurePass123!', expectedResult: 'Password field accepts input (min 8 chars)' },
                    { step: 8, action: 'Enter Confirm Password', testData: 'SecurePass123!', expectedResult: 'Confirm Password matches Password' },
                    { step: 9, action: 'Select Gender', testData: 'Male', expectedResult: 'Gender dropdown accepts selection' },
                    { step: 10, action: 'Select Date of Birth', testData: '1990-01-15', expectedResult: 'Date picker accepts date selection' },
                    { step: 11, action: 'Select Country', testData: 'United States', expectedResult: 'Country dropdown accepts selection' },
                    { step: 12, action: 'Check Terms and Conditions checkbox', testData: 'Checked', expectedResult: 'Checkbox is selected' },
                    { step: 13, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form submits successfully and success page displays with user information' }
                ],
                postconditions: [
                    'User registration data is displayed on success page',
                    'User can register another account',
                    'Form can be reset for new registration'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A (Frontend only)'
                }
            },
            // ========== NEGATIVE TEST CASES - FOLLOWING FORM ORDER (TOP TO BOTTOM) ==========
            // Field 1: First Name (appears first in form)
            {
                id: 'TC-002',
                title: 'Registration Form - Validation Error for Empty First Name',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 02',
                requirementId: 'REQ-002',
                acceptanceCriteria: 'As a user, I want to see a validation error when First Name is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I fill all fields except First Name',
                    and: 'And I leave First Name field empty',
                    then: 'Then I should see a validation error "First name is required" below the First Name field'
                },
                objective: 'Verify that First Name field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page',
                    'All other fields are filled with valid data'
                ],
                testData: {
                    firstName: '',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except First Name', testData: 'See test data', expectedResult: 'All fields filled except First Name' },
                    { step: 3, action: 'Leave First Name field empty', testData: '', expectedResult: 'First Name field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "First name is required" displays below First Name field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Error message is visible',
                    'User can correct the error and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Field 2: Last Name (appears second in form)
            {
                id: 'TC-011',
                title: 'Registration Form - Validation Error for Empty Last Name',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 02',
                requirementId: 'REQ-002',
                acceptanceCriteria: 'As a user, I want to see a validation error when Last Name is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I fill all fields except Last Name',
                    and: 'And I leave Last Name field empty',
                    then: 'Then I should see a validation error "Last name is required" below the Last Name field'
                },
                objective: 'Verify that Last Name field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: '',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Last Name with valid data', testData: 'See test data', expectedResult: 'All fields filled except Last Name' },
                    { step: 3, action: 'Leave Last Name field empty', testData: '', expectedResult: 'Last Name field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Last name is required" displays below Last Name field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Error message is visible',
                    'User can correct the error and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-012',
                title: 'Registration Form - Validation Error for Last Name with Only Whitespace',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'Medium',
                severity: 'Minor',
                testBasis: 'PRD v1.0, Validation Rules; Story 02',
                requirementId: 'REQ-002',
                acceptanceCriteria: 'As a user, I want to see a validation error when Last Name contains only whitespace so that I know it must contain actual characters',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter only whitespace characters in Last Name field',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Last name is required" below the Last Name field'
                },
                objective: 'Verify that Last Name field shows validation error when only whitespace is entered',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: '   ',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Enter only whitespace in Last Name field', testData: '   ', expectedResult: 'Last Name field accepts whitespace input' },
                    { step: 3, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Last name is required" displays below Last Name field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Error message is visible',
                    'User can correct the error and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Field 3: Email (appears third in form)
            {
                id: 'TC-013',
                title: 'Registration Form - Validation Error for Empty Email',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 03',
                requirementId: 'REQ-003',
                acceptanceCriteria: 'As a user, I want to see a validation error when Email is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Email field empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Email is required" below the Email field'
                },
                objective: 'Verify that Email field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: '',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Email with valid data', testData: 'See test data', expectedResult: 'All fields filled except Email' },
                    { step: 3, action: 'Leave Email field empty', testData: '', expectedResult: 'Email field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Email is required" displays below Email field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Email validation error is visible',
                    'User can correct email and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-003',
                title: 'Registration Form - Validation Error for Invalid Email Format',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 03',
                requirementId: 'REQ-003',
                acceptanceCriteria: 'As a user, I want to see a validation error when email format is invalid so that I can enter a correct email address',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter an invalid email format',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Invalid email format" below the Email field'
                },
                objective: 'Verify that invalid email format triggers validation error',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'invalid-email',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all required fields with valid data', testData: 'See test data', expectedResult: 'All fields filled' },
                    { step: 3, action: 'Enter invalid email format', testData: 'invalid-email', expectedResult: 'Email field accepts input' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Invalid email format" displays below Email field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Email validation error is visible',
                    'User can correct email and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Field 4: Phone Number (appears fourth in form)
            {
                id: 'TC-016',
                title: 'Registration Form - Validation Error for Empty Phone Number',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 07',
                requirementId: 'REQ-007',
                acceptanceCriteria: 'As a user, I want to see a validation error when Phone Number is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Phone Number field empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Phone number is required" below the Phone Number field'
                },
                objective: 'Verify that Phone Number field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Phone Number with valid data', testData: 'See test data', expectedResult: 'All fields filled except Phone Number' },
                    { step: 3, action: 'Leave Phone Number field empty', testData: '', expectedResult: 'Phone Number field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Phone number is required" displays below Phone Number field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Phone validation error is visible',
                    'User can correct phone number and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-007',
                title: 'Registration Form - Validation Error for Invalid Phone Number',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 04',
                requirementId: 'REQ-004',
                acceptanceCriteria: 'As a user, I want to see a validation error when passwords do not match so that I can ensure password confirmation is correct',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter a password',
                    and: 'And I enter a different password in the Confirm Password field',
                    then: 'Then I should see a validation error "Passwords do not match" below the Confirm Password field'
                },
                objective: 'Verify that mismatched passwords trigger validation error',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'DifferentPass456!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all required fields', testData: 'See test data', expectedResult: 'All fields filled' },
                    { step: 3, action: 'Enter Password', testData: 'SecurePass123!', expectedResult: 'Password field accepts input' },
                    { step: 4, action: 'Enter different Confirm Password', testData: 'DifferentPass456!', expectedResult: 'Confirm Password field accepts input' },
                    { step: 5, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Passwords do not match" displays below Confirm Password field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Password mismatch error is visible',
                    'User can correct passwords and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Field 7: Confirm Password (appears seventh in form)
            {
                id: 'TC-021',
                title: 'Registration Form - Validation Error for Empty Confirm Password',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 04',
                requirementId: 'REQ-004',
                acceptanceCriteria: 'As a user, I want to see a validation error when Confirm Password is empty so that I can confirm my password',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter a password but leave Confirm Password empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Passwords do not match" below the Confirm Password field'
                },
                objective: 'Verify that empty Confirm Password triggers validation error',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: '',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Enter password', testData: 'SecurePass123!', expectedResult: 'Password field accepts input' },
                    { step: 3, action: 'Leave Confirm Password field empty', testData: '', expectedResult: 'Confirm Password field remains empty' },
                    { step: 4, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 5, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Passwords do not match" displays below Confirm Password field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Confirm Password validation error is visible',
                    'User can correct confirm password and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-004',
                title: 'Registration Form - Validation Error for Password Mismatch',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'Medium',
                severity: 'Minor',
                testBasis: 'PRD v1.0, Validation Rules; Story 07',
                requirementId: 'REQ-007',
                acceptanceCriteria: 'As a user, I want to see a validation error when phone number format is invalid so that I can enter a correct phone number',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter an invalid phone number (less than 10 digits)',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Invalid phone number" below the Phone Number field'
                },
                objective: 'Verify that invalid phone number format triggers validation error',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '12345',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all required fields', testData: 'See test data', expectedResult: 'All fields filled' },
                    { step: 3, action: 'Enter invalid phone number (less than 10 digits)', testData: '12345', expectedResult: 'Phone field accepts input' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Invalid phone number" displays below Phone Number field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Phone validation error is visible',
                    'User can correct phone number and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Field 8: Gender (appears eighth in form)
            {
                id: 'TC-024',
                title: 'Registration Form - Validation Error for Empty Gender',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 09',
                requirementId: 'REQ-009',
                acceptanceCriteria: 'As a user, I want to see a validation error when Gender is not selected so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Gender dropdown unselected',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Gender is required" below the Gender field'
                },
                objective: 'Verify that Gender field shows validation error when left unselected',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: '',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Gender with valid data', testData: 'See test data', expectedResult: 'All fields filled except Gender' },
                    { step: 3, action: 'Leave Gender dropdown unselected', testData: '', expectedResult: 'Gender remains unselected' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Gender is required" displays below Gender field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Gender validation error is visible',
                    'User can select gender and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Field 9: Date of Birth (appears ninth in form)
            {
                id: 'TC-022',
                title: 'Registration Form - Validation Error for Empty Date of Birth',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 09',
                requirementId: 'REQ-009',
                acceptanceCriteria: 'As a user, I want to see a validation error when Date of Birth is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Date of Birth field empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Date of birth is required" below the Date of Birth field'
                },
                objective: 'Verify that Date of Birth field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Date of Birth with valid data', testData: 'See test data', expectedResult: 'All fields filled except Date of Birth' },
                    { step: 3, action: 'Leave Date of Birth field empty', testData: '', expectedResult: 'Date of Birth field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Date of birth is required" displays below Date of Birth field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Date of Birth validation error is visible',
                    'User can select date and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-023',
                title: 'Registration Form - Validation Error for Future Date of Birth',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'Medium',
                severity: 'Minor',
                testBasis: 'PRD v1.0, Validation Rules; Story 09',
                requirementId: 'REQ-009',
                acceptanceCriteria: 'As a user, I want to see a validation error when Date of Birth is in the future so that I can enter a valid date',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I select a future date for Date of Birth',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error or the date picker should prevent future date selection'
                },
                objective: 'Verify that future date selection is handled appropriately',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '2030-12-31',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 3, action: 'Attempt to select a future date for Date of Birth', testData: '2030-12-31', expectedResult: 'Date picker may prevent selection or form shows validation error' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit or shows appropriate validation message' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Date validation is handled appropriately',
                    'User can select valid date and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Field 10: Country (appears tenth in form)
            {
                id: 'TC-025',
                title: 'Registration Form - Validation Error for Empty Country',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 09',
                requirementId: 'REQ-009',
                acceptanceCriteria: 'As a user, I want to see a validation error when Country is not selected so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Country dropdown unselected',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Country is required" below the Country field'
                },
                objective: 'Verify that Country field shows validation error when left unselected',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: '',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Country with valid data', testData: 'See test data', expectedResult: 'All fields filled except Country' },
                    { step: 3, action: 'Leave Country dropdown unselected', testData: '', expectedResult: 'Country remains unselected' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Country is required" displays below Country field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Country validation error is visible',
                    'User can select country and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Field 11: Terms and Conditions (appears last in form)
            {
                id: 'TC-008',
                title: 'Registration Form - Validation Error for Unchecked Terms and Conditions',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 08',
                requirementId: 'REQ-008',
                acceptanceCriteria: 'As a user, I want to see a validation error when Terms and Conditions are not accepted so that I understand I must agree to proceed',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I fill all required fields with valid data',
                    and: 'And I leave the Terms and Conditions checkbox unchecked',
                    then: 'Then I should see a validation error "You must accept the terms and conditions"'
                },
                objective: 'Verify that unchecked Terms and Conditions checkbox prevents form submission',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: false
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all required fields with valid data', testData: 'See test data', expectedResult: 'All fields filled' },
                    { step: 3, action: 'Leave Terms and Conditions checkbox unchecked', testData: 'Unchecked', expectedResult: 'Checkbox remains unchecked' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "You must accept the terms and conditions" displays' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Terms validation error is visible',
                    'User can check terms checkbox and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Combined Test Case: Multiple Fields Empty (edge case)
            {
                id: 'TC-009',
                title: 'Registration Form - Validation Error for Empty Required Dropdown Fields',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 09',
                requirementId: 'REQ-009',
                acceptanceCriteria: 'As a user, I want to see validation errors when Gender and Country are not selected so that I know these are required fields',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I fill all text fields with valid data',
                    and: 'And I leave Gender and Country dropdowns unselected',
                    then: 'Then I should see validation errors "Gender is required" and "Country is required" below respective fields'
                },
                objective: 'Verify that empty Gender and Country dropdowns trigger validation errors',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: '',
                    dateOfBirth: '1990-01-15',
                    country: '',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all text fields with valid data', testData: 'See test data', expectedResult: 'All text fields filled' },
                    { step: 3, action: 'Leave Gender dropdown as default (Select Gender)', testData: '', expectedResult: 'Gender remains unselected' },
                    { step: 4, action: 'Leave Country dropdown as default (Select Country)', testData: '', expectedResult: 'Country remains unselected' },
                    { step: 5, action: 'Check Terms and Conditions checkbox', testData: 'Checked', expectedResult: 'Checkbox is selected' },
                    { step: 6, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error messages "Gender is required" and "Country is required" display below respective fields' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Gender and Country validation errors are visible',
                    'User can select values and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            // Additional Edge Cases
            {
                id: 'TC-010',
                title: 'Registration Form - Validation Error for First Name with Only Whitespace',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'Medium',
                severity: 'Minor',
                testBasis: 'PRD v1.0, Validation Rules; Story 02',
                requirementId: 'REQ-002',
                acceptanceCriteria: 'As a user, I want to see a validation error when First Name contains only whitespace so that I know it must contain actual characters',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter only whitespace characters in First Name field',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "First name is required" below the First Name field'
                },
                objective: 'Verify that First Name field shows validation error when only whitespace is entered',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: '   ',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Enter only whitespace in First Name field', testData: '   ', expectedResult: 'First Name field accepts whitespace input' },
                    { step: 3, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "First name is required" displays below First Name field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Error message is visible',
                    'User can correct the error and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-011',
                title: 'Registration Form - Validation Error for Empty Last Name',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 02',
                requirementId: 'REQ-002',
                acceptanceCriteria: 'As a user, I want to see a validation error when Last Name is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I fill all fields except Last Name',
                    and: 'And I leave Last Name field empty',
                    then: 'Then I should see a validation error "Last name is required" below the Last Name field'
                },
                objective: 'Verify that Last Name field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: '',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Last Name with valid data', testData: 'See test data', expectedResult: 'All fields filled except Last Name' },
                    { step: 3, action: 'Leave Last Name field empty', testData: '', expectedResult: 'Last Name field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Last name is required" displays below Last Name field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Error message is visible',
                    'User can correct the error and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-012',
                title: 'Registration Form - Validation Error for Last Name with Only Whitespace',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'Medium',
                severity: 'Minor',
                testBasis: 'PRD v1.0, Validation Rules; Story 02',
                requirementId: 'REQ-002',
                acceptanceCriteria: 'As a user, I want to see a validation error when Last Name contains only whitespace so that I know it must contain actual characters',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter only whitespace characters in Last Name field',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Last name is required" below the Last Name field'
                },
                objective: 'Verify that Last Name field shows validation error when only whitespace is entered',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: '   ',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Enter only whitespace in Last Name field', testData: '   ', expectedResult: 'Last Name field accepts whitespace input' },
                    { step: 3, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Last name is required" displays below Last Name field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Error message is visible',
                    'User can correct the error and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-013',
                title: 'Registration Form - Validation Error for Empty Email',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 03',
                requirementId: 'REQ-003',
                acceptanceCriteria: 'As a user, I want to see a validation error when Email is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Email field empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Email is required" below the Email field'
                },
                objective: 'Verify that Email field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: '',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Email with valid data', testData: 'See test data', expectedResult: 'All fields filled except Email' },
                    { step: 3, action: 'Leave Email field empty', testData: '', expectedResult: 'Email field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Email is required" displays below Email field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Email validation error is visible',
                    'User can correct email and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-014',
                title: 'Registration Form - Validation Error for Email Missing @ Symbol',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 03',
                requirementId: 'REQ-003',
                acceptanceCriteria: 'As a user, I want to see a validation error when email is missing @ symbol so that I can enter a correct email address',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter an email without @ symbol',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Invalid email format" below the Email field'
                },
                objective: 'Verify that email without @ symbol triggers validation error',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'johndoeexample.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Enter email without @ symbol', testData: 'johndoeexample.com', expectedResult: 'Email field accepts input' },
                    { step: 3, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Invalid email format" displays below Email field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Email validation error is visible',
                    'User can correct email and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-015',
                title: 'Registration Form - Validation Error for Email Missing Domain',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 03',
                requirementId: 'REQ-003',
                acceptanceCriteria: 'As a user, I want to see a validation error when email is missing domain so that I can enter a correct email address',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter an email without domain',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Invalid email format" below the Email field'
                },
                objective: 'Verify that email without domain triggers validation error',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john@',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Enter email without domain', testData: 'john@', expectedResult: 'Email field accepts input' },
                    { step: 3, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Invalid email format" displays below Email field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Email validation error is visible',
                    'User can correct email and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-016',
                title: 'Registration Form - Validation Error for Empty Phone Number',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 07',
                requirementId: 'REQ-007',
                acceptanceCriteria: 'As a user, I want to see a validation error when Phone Number is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Phone Number field empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Phone number is required" below the Phone Number field'
                },
                objective: 'Verify that Phone Number field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Phone Number with valid data', testData: 'See test data', expectedResult: 'All fields filled except Phone Number' },
                    { step: 3, action: 'Leave Phone Number field empty', testData: '', expectedResult: 'Phone Number field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Phone number is required" displays below Phone Number field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Phone validation error is visible',
                    'User can correct phone number and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-017',
                title: 'Registration Form - Validation Error for Phone Number with Less Than 10 Digits',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'Medium',
                severity: 'Minor',
                testBasis: 'PRD v1.0, Validation Rules; Story 07',
                requirementId: 'REQ-007',
                acceptanceCriteria: 'As a user, I want to see a validation error when phone number has less than 10 digits so that I can enter a correct phone number',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter a phone number with less than 10 digits',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Invalid phone number" below the Phone Number field'
                },
                objective: 'Verify that phone number with less than 10 digits triggers validation error',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '12345',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Enter phone number with less than 10 digits', testData: '12345', expectedResult: 'Phone field accepts input' },
                    { step: 3, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Invalid phone number" displays below Phone Number field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Phone validation error is visible',
                    'User can correct phone number and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-018',
                title: 'Registration Form - Validation Error for Phone Number with Letters',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'Medium',
                severity: 'Minor',
                testBasis: 'PRD v1.0, Validation Rules; Story 07',
                requirementId: 'REQ-007',
                acceptanceCriteria: 'As a user, I want to see a validation error when phone number contains letters so that I can enter a correct phone number',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter a phone number containing letters',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Invalid phone number" below the Phone Number field'
                },
                objective: 'Verify that phone number containing letters triggers validation error',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '123456789a',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Enter phone number with letters', testData: '123456789a', expectedResult: 'Phone field accepts input' },
                    { step: 3, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Invalid phone number" displays below Phone Number field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Phone validation error is visible',
                    'User can correct phone number and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-019',
                title: 'Registration Form - Validation Error for Empty Username',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 06',
                requirementId: 'REQ-006',
                acceptanceCriteria: 'As a user, I want to see a validation error when Username is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Username field empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Username is required" below the Username field'
                },
                objective: 'Verify that Username field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: '',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Username with valid data', testData: 'See test data', expectedResult: 'All fields filled except Username' },
                    { step: 3, action: 'Leave Username field empty', testData: '', expectedResult: 'Username field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Username is required" displays below Username field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Username validation error is visible',
                    'User can correct username and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-020',
                title: 'Registration Form - Validation Error for Empty Password',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 05',
                requirementId: 'REQ-005',
                acceptanceCriteria: 'As a user, I want to see a validation error when Password is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Password field empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Password is required" below the Password field'
                },
                objective: 'Verify that Password field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: '',
                    confirmPassword: '',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Password with valid data', testData: 'See test data', expectedResult: 'All fields filled except Password' },
                    { step: 3, action: 'Leave Password field empty', testData: '', expectedResult: 'Password field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Password is required" displays below Password field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Password validation error is visible',
                    'User can correct password and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-021',
                title: 'Registration Form - Validation Error for Empty Confirm Password',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 04',
                requirementId: 'REQ-004',
                acceptanceCriteria: 'As a user, I want to see a validation error when Confirm Password is empty so that I can confirm my password',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I enter a password but leave Confirm Password empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Passwords do not match" below the Confirm Password field'
                },
                objective: 'Verify that empty Confirm Password triggers validation error',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: '',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Enter password', testData: 'SecurePass123!', expectedResult: 'Password field accepts input' },
                    { step: 3, action: 'Leave Confirm Password field empty', testData: '', expectedResult: 'Confirm Password field remains empty' },
                    { step: 4, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 5, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Passwords do not match" displays below Confirm Password field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Confirm Password validation error is visible',
                    'User can correct confirm password and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-022',
                title: 'Registration Form - Validation Error for Empty Date of Birth',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 09',
                requirementId: 'REQ-009',
                acceptanceCriteria: 'As a user, I want to see a validation error when Date of Birth is empty so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Date of Birth field empty',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Date of birth is required" below the Date of Birth field'
                },
                objective: 'Verify that Date of Birth field shows validation error when left empty',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Date of Birth with valid data', testData: 'See test data', expectedResult: 'All fields filled except Date of Birth' },
                    { step: 3, action: 'Leave Date of Birth field empty', testData: '', expectedResult: 'Date of Birth field remains empty' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Date of birth is required" displays below Date of Birth field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Date of Birth validation error is visible',
                    'User can select date and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-023',
                title: 'Registration Form - Validation Error for Future Date of Birth',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'Medium',
                severity: 'Minor',
                testBasis: 'PRD v1.0, Validation Rules; Story 09',
                requirementId: 'REQ-009',
                acceptanceCriteria: 'As a user, I want to see a validation error when Date of Birth is in the future so that I can enter a valid date',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I select a future date for Date of Birth',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error or the date picker should prevent future date selection'
                },
                objective: 'Verify that future date selection is handled appropriately',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '2030-12-31',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all other required fields with valid data', testData: 'See test data', expectedResult: 'All other fields filled correctly' },
                    { step: 3, action: 'Attempt to select a future date for Date of Birth', testData: '2030-12-31', expectedResult: 'Date picker may prevent selection or form shows validation error' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit or shows appropriate validation message' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Date validation is handled appropriately',
                    'User can select valid date and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-024',
                title: 'Registration Form - Validation Error for Empty Gender',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 09',
                requirementId: 'REQ-009',
                acceptanceCriteria: 'As a user, I want to see a validation error when Gender is not selected so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Gender dropdown unselected',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Gender is required" below the Gender field'
                },
                objective: 'Verify that Gender field shows validation error when left unselected',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: '',
                    dateOfBirth: '1990-01-15',
                    country: 'United States',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Gender with valid data', testData: 'See test data', expectedResult: 'All fields filled except Gender' },
                    { step: 3, action: 'Leave Gender dropdown unselected', testData: '', expectedResult: 'Gender remains unselected' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Gender is required" displays below Gender field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Gender validation error is visible',
                    'User can select gender and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
            },
            {
                id: 'TC-025',
                title: 'Registration Form - Validation Error for Empty Country',
                module: 'Registration Form',
                testLevel: 'System',
                testType: 'Functional',
                priority: 'High',
                severity: 'Major',
                testBasis: 'PRD v1.0, Validation Rules; Story 09',
                requirementId: 'REQ-009',
                acceptanceCriteria: 'As a user, I want to see a validation error when Country is not selected so that I know it is a required field',
                gherkinCriteria: {
                    given: 'Given I am on the Registration Form page',
                    when: 'When I leave Country dropdown unselected',
                    and: 'And I fill all other required fields with valid data',
                    then: 'Then I should see a validation error "Country is required" below the Country field'
                },
                objective: 'Verify that Country field shows validation error when left unselected',
                preconditions: [
                    'User is on Registration Form page'
                ],
                testData: {
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john.doe@example.com',
                    phone: '1234567890',
                    username: 'johndoe123',
                    password: 'SecurePass123!',
                    confirmPassword: 'SecurePass123!',
                    gender: 'Male',
                    dateOfBirth: '1990-01-15',
                    country: '',
                    terms: true
                },
                steps: [
                    { step: 1, action: 'Navigate to Registration Form page', testData: '/practice/registration-form', expectedResult: 'Registration form page loads' },
                    { step: 2, action: 'Fill all fields except Country with valid data', testData: 'See test data', expectedResult: 'All fields filled except Country' },
                    { step: 3, action: 'Leave Country dropdown unselected', testData: '', expectedResult: 'Country remains unselected' },
                    { step: 4, action: 'Click Register button', testData: 'N/A', expectedResult: 'Form does not submit; error message "Country is required" displays below Country field' }
                ],
                postconditions: [
                    'Form remains on registration page',
                    'Country validation error is visible',
                    'User can select country and resubmit'
                ],
                environment: {
                    appBuild: 'v1.0.0',
                    url: '/gits/practice/registration-form',
                    os: 'macOS/Windows/Linux',
                    browser: 'Chrome/Firefox/Safari latest',
                    database: 'N/A'
                }
                }
                ]
            },
            'e2e-flow': {
                id: 'e2e-flow',
                title: 'E2E Flow Test Cases',
                description: 'End-to-end test cases for the complete E-commerce flow including Login, Products, Cart, Checkout, and Order Confirmation.',
                testCases: [
                    // ========== POSITIVE TEST CASES ==========
                    {
                        id: 'TC-E2E-001',
                        title: 'E2E Flow - Complete Purchase Flow with Valid Data',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        testBasis: 'PRD v1.0, E2E Flow Section',
                        requirementId: 'REQ-E2E-001',
                        acceptanceCriteria: 'As a user, I want to complete a full purchase flow from login to order confirmation so that I can successfully buy products',
                        gherkinCriteria: {
                            given: 'Given I am on the E2E Flow login page',
                            when: 'When I login with valid credentials, browse products, add to cart, checkout, and place order',
                            and: 'And I fill all required checkout fields with valid data',
                            then: 'Then I should see order confirmation page with order number'
                        },
                        objective: 'Verify complete end-to-end purchase flow works successfully',
                        preconditions: [
                            'User is not logged in',
                            'E2E Flow page is accessible',
                            'Products are available in stock'
                        ],
                        testData: {
                            username: 'demo_user',
                            password: 'demo123',
                            productName: 'Frontend(UI) Manual Test',
                            name: 'John Doe',
                            email: 'john.doe@example.com',
                            address: '123 Main Street',
                            city: 'New York',
                            zipCode: '10001',
                            country: 'United States',
                            paymentMethod: 'credit-card',
                            cardNumber: '4111111111111111',
                            expiryDate: '12/25',
                            cvv: '123'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to E2E Flow page', testData: '/practice/e2e-flow', expectedResult: 'Login page displays' },
                            { step: 2, action: 'Enter username', testData: 'demo_user', expectedResult: 'Username field accepts input' },
                            { step: 3, action: 'Enter password', testData: 'demo123', expectedResult: 'Password field accepts input' },
                            { step: 4, action: 'Click Login button', testData: 'N/A', expectedResult: 'User is logged in and redirected to Products page' },
                            { step: 5, action: 'Verify Products page displays', testData: 'N/A', expectedResult: 'Products grid displays with all available products' },
                            { step: 6, action: 'Click on a product', testData: 'Frontend(UI) Manual Test', expectedResult: 'Product detail page displays' },
                            { step: 7, action: 'Click Add to Cart button', testData: 'N/A', expectedResult: 'Product is added to cart' },
                            { step: 8, action: 'Navigate to Cart', testData: 'Click Cart icon', expectedResult: 'Cart page displays with added product' },
                            { step: 9, action: 'Click Proceed to Checkout', testData: 'N/A', expectedResult: 'Checkout page displays' },
                            { step: 10, action: 'Fill Name field', testData: 'John Doe', expectedResult: 'Name field accepts input' },
                            { step: 11, action: 'Fill Email field', testData: 'john.doe@example.com', expectedResult: 'Email field accepts input' },
                            { step: 12, action: 'Fill Address field', testData: '123 Main Street', expectedResult: 'Address field accepts input' },
                            { step: 13, action: 'Fill City field', testData: 'New York', expectedResult: 'City field accepts input' },
                            { step: 14, action: 'Fill Zip Code field', testData: '10001', expectedResult: 'Zip Code field accepts input' },
                            { step: 15, action: 'Fill Country field', testData: 'United States', expectedResult: 'Country field accepts input' },
                            { step: 16, action: 'Select Payment Method', testData: 'Credit Card', expectedResult: 'Payment method is selected' },
                            { step: 17, action: 'Fill Card Number', testData: '4111111111111111', expectedResult: 'Card Number field accepts input' },
                            { step: 18, action: 'Fill Expiry Date', testData: '12/25', expectedResult: 'Expiry Date field accepts input' },
                            { step: 19, action: 'Fill CVV', testData: '123', expectedResult: 'CVV field accepts input' },
                            { step: 20, action: 'Click Place Order button', testData: 'N/A', expectedResult: 'Order confirmation page displays with order number' }
                        ],
                        postconditions: [
                            'Order is placed successfully',
                            'Order number is generated',
                            'Cart is cleared',
                            'User can logout or continue shopping'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-002',
                        title: 'E2E Flow - Login with Valid Credentials',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        testBasis: 'PRD v1.0, Login Section',
                        requirementId: 'REQ-E2E-002',
                        acceptanceCriteria: 'As a user, I want to login with valid credentials so that I can access the products page',
                        gherkinCriteria: {
                            given: 'Given I am on the E2E Flow login page',
                            when: 'When I enter valid username and password',
                            and: 'And I click Login button',
                            then: 'Then I should be redirected to Products page'
                        },
                        objective: 'Verify user can login successfully with valid credentials',
                        preconditions: [
                            'User is not logged in',
                            'E2E Flow page is accessible'
                        ],
                        testData: {
                            username: 'demo_user',
                            password: 'demo123'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to E2E Flow page', testData: '/practice/e2e-flow', expectedResult: 'Login page displays' },
                            { step: 2, action: 'Enter username', testData: 'demo_user', expectedResult: 'Username field accepts input' },
                            { step: 3, action: 'Enter password', testData: 'demo123', expectedResult: 'Password field accepts input' },
                            { step: 4, action: 'Click Login button', testData: 'N/A', expectedResult: 'User is logged in and redirected to Products page' },
                            { step: 5, action: 'Verify Products page displays', testData: 'N/A', expectedResult: 'Products grid displays with all available products' }
                        ],
                        postconditions: [
                            'User is logged in',
                            'Products page is accessible',
                            'User can browse products'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-003',
                        title: 'E2E Flow - View Products List',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Products Section',
                        requirementId: 'REQ-E2E-003',
                        acceptanceCriteria: 'As a logged-in user, I want to view all available products so that I can browse and select items',
                        gherkinCriteria: {
                            given: 'Given I am logged in',
                            when: 'When I navigate to Products page',
                            then: 'Then I should see all available products displayed in a grid'
                        },
                        objective: 'Verify products list displays correctly after login',
                        preconditions: [
                            'User is logged in',
                            'Products are available'
                        ],
                        testData: {
                            username: 'demo_user',
                            password: 'demo123'
                        },
                        steps: [
                            { step: 1, action: 'Login with valid credentials', testData: 'demo_user/demo123', expectedResult: 'User is logged in' },
                            { step: 2, action: 'Verify Products page displays', testData: 'N/A', expectedResult: 'Products page displays' },
                            { step: 3, action: 'Verify products grid is visible', testData: 'N/A', expectedResult: 'Products are displayed in grid layout' },
                            { step: 4, action: 'Verify product cards show name, price, and image', testData: 'N/A', expectedResult: 'Each product card displays name, price, and emoji/image' },
                            { step: 5, action: 'Verify all courses are listed first', testData: 'N/A', expectedResult: 'Course products appear before e-commerce products' }
                        ],
                        postconditions: [
                            'Products are displayed',
                            'User can click on products to view details'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-004',
                        title: 'E2E Flow - View Product Details',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Product Detail Section',
                        requirementId: 'REQ-E2E-004',
                        acceptanceCriteria: 'As a user, I want to view product details so that I can see full product information',
                        gherkinCriteria: {
                            given: 'Given I am on Products page',
                            when: 'When I click on a product',
                            then: 'Then I should see product detail page with full information'
                        },
                        objective: 'Verify product detail page displays correctly',
                        preconditions: [
                            'User is logged in',
                            'User is on Products page'
                        ],
                        testData: {
                            productName: 'Frontend(UI) Manual Test'
                        },
                        steps: [
                            { step: 1, action: 'Click on a product card', testData: 'Frontend(UI) Manual Test', expectedResult: 'Product detail page displays' },
                            { step: 2, action: 'Verify product name displays', testData: 'N/A', expectedResult: 'Product name is visible' },
                            { step: 3, action: 'Verify product price displays', testData: 'N/A', expectedResult: 'Product price is visible' },
                            { step: 4, action: 'Verify product description displays', testData: 'N/A', expectedResult: 'Product description is visible' },
                            { step: 5, action: 'Verify product image/emoji displays', testData: 'N/A', expectedResult: 'Product image/emoji is visible' },
                            { step: 6, action: 'Verify Add to Cart button is present', testData: 'N/A', expectedResult: 'Add to Cart button is visible' },
                            { step: 7, action: 'Verify Back to Products button is present', testData: 'N/A', expectedResult: 'Back button is visible' }
                        ],
                        postconditions: [
                            'Product details are displayed',
                            'User can add product to cart',
                            'User can navigate back to products'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-005',
                        title: 'E2E Flow - Add Product to Cart',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Cart Section',
                        requirementId: 'REQ-E2E-005',
                        acceptanceCriteria: 'As a user, I want to add products to cart so that I can purchase them',
                        gherkinCriteria: {
                            given: 'Given I am viewing a product detail',
                            when: 'When I click Add to Cart button',
                            then: 'Then the product should be added to cart and cart count should update'
                        },
                        objective: 'Verify product can be added to cart successfully',
                        preconditions: [
                            'User is logged in',
                            'User is on Product detail page',
                            'Product is in stock'
                        ],
                        testData: {
                            productName: 'Frontend(UI) Manual Test'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to product detail page', testData: 'Click on product', expectedResult: 'Product detail page displays' },
                            { step: 2, action: 'Click Add to Cart button', testData: 'N/A', expectedResult: 'Product is added to cart' },
                            { step: 3, action: 'Verify cart icon shows count', testData: 'N/A', expectedResult: 'Cart icon displays count of 1' },
                            { step: 4, action: 'Navigate to Cart page', testData: 'Click Cart icon', expectedResult: 'Cart page displays' },
                            { step: 5, action: 'Verify product appears in cart', testData: 'N/A', expectedResult: 'Product is listed in cart with quantity 1' }
                        ],
                        postconditions: [
                            'Product is in cart',
                            'Cart count is updated',
                            'User can proceed to checkout'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-006',
                        title: 'E2E Flow - Update Product Quantity in Cart',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Cart Section',
                        requirementId: 'REQ-E2E-006',
                        acceptanceCriteria: 'As a user, I want to update product quantity in cart so that I can adjust my order',
                        gherkinCriteria: {
                            given: 'Given I have products in cart',
                            when: 'When I increase or decrease quantity',
                            then: 'Then the cart total should update accordingly'
                        },
                        objective: 'Verify product quantity can be updated in cart',
                        preconditions: [
                            'User is logged in',
                            'User has products in cart'
                        ],
                        testData: {
                            productId: 7,
                            newQuantity: 3
                        },
                        steps: [
                            { step: 1, action: 'Navigate to Cart page', testData: 'Click Cart icon', expectedResult: 'Cart page displays' },
                            { step: 2, action: 'Verify current quantity', testData: 'N/A', expectedResult: 'Product quantity is displayed' },
                            { step: 3, action: 'Increase quantity', testData: 'Click + button or enter 3', expectedResult: 'Quantity updates to 3' },
                            { step: 4, action: 'Verify total price updates', testData: 'N/A', expectedResult: 'Total price reflects new quantity' },
                            { step: 5, action: 'Decrease quantity', testData: 'Click - button or enter 2', expectedResult: 'Quantity updates to 2' },
                            { step: 6, action: 'Verify total price updates again', testData: 'N/A', expectedResult: 'Total price reflects updated quantity' }
                        ],
                        postconditions: [
                            'Product quantity is updated',
                            'Cart total is recalculated',
                            'User can proceed to checkout'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-007',
                        title: 'E2E Flow - Remove Product from Cart',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Cart Section',
                        requirementId: 'REQ-E2E-007',
                        acceptanceCriteria: 'As a user, I want to remove products from cart so that I can manage my order',
                        gherkinCriteria: {
                            given: 'Given I have products in cart',
                            when: 'When I click Remove button',
                            then: 'Then the product should be removed from cart'
                        },
                        objective: 'Verify product can be removed from cart',
                        preconditions: [
                            'User is logged in',
                            'User has products in cart'
                        ],
                        testData: {
                            productId: 7
                        },
                        steps: [
                            { step: 1, action: 'Navigate to Cart page', testData: 'Click Cart icon', expectedResult: 'Cart page displays' },
                            { step: 2, action: 'Verify product is in cart', testData: 'N/A', expectedResult: 'Product is listed in cart' },
                            { step: 3, action: 'Click Remove button', testData: 'N/A', expectedResult: 'Product is removed from cart' },
                            { step: 4, action: 'Verify product no longer appears', testData: 'N/A', expectedResult: 'Product is removed from cart list' },
                            { step: 5, action: 'Verify cart total updates', testData: 'N/A', expectedResult: 'Cart total reflects removal' },
                            { step: 6, action: 'Verify cart count updates', testData: 'N/A', expectedResult: 'Cart icon count decreases' }
                        ],
                        postconditions: [
                            'Product is removed from cart',
                            'Cart total is updated',
                            'User can add more products'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-008',
                        title: 'E2E Flow - Checkout with Valid Payment Information',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        testBasis: 'PRD v1.0, Checkout Section',
                        requirementId: 'REQ-E2E-008',
                        acceptanceCriteria: 'As a user, I want to complete checkout with valid payment information so that I can place my order',
                        gherkinCriteria: {
                            given: 'Given I have products in cart',
                            when: 'When I fill all checkout fields with valid data',
                            and: 'And I click Place Order',
                            then: 'Then order should be placed successfully'
                        },
                        objective: 'Verify checkout process works with valid payment information',
                        preconditions: [
                            'User is logged in',
                            'User has products in cart'
                        ],
                        testData: {
                            name: 'John Doe',
                            email: 'john.doe@example.com',
                            address: '123 Main Street',
                            city: 'New York',
                            zipCode: '10001',
                            country: 'United States',
                            paymentMethod: 'credit-card',
                            cardNumber: '4111111111111111',
                            expiryDate: '12/25',
                            cvv: '123'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to Cart page', testData: 'Click Cart icon', expectedResult: 'Cart page displays' },
                            { step: 2, action: 'Click Proceed to Checkout', testData: 'N/A', expectedResult: 'Checkout page displays' },
                            { step: 3, action: 'Fill all required fields', testData: 'See test data', expectedResult: 'All fields are filled' },
                            { step: 4, action: 'Select payment method', testData: 'Credit Card', expectedResult: 'Payment method is selected' },
                            { step: 5, action: 'Fill payment details', testData: 'Card number, expiry, CVV', expectedResult: 'Payment fields are filled' },
                            { step: 6, action: 'Click Place Order button', testData: 'N/A', expectedResult: 'Order confirmation page displays with order number' }
                        ],
                        postconditions: [
                            'Order is placed',
                            'Order number is generated',
                            'Cart is cleared'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-009',
                        title: 'E2E Flow - Logout Functionality',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Logout Section',
                        requirementId: 'REQ-E2E-009',
                        acceptanceCriteria: 'As a logged-in user, I want to logout so that I can end my session',
                        gherkinCriteria: {
                            given: 'Given I am logged in',
                            when: 'When I click Logout button',
                            then: 'Then I should be logged out and redirected to login page'
                        },
                        objective: 'Verify logout functionality works correctly',
                        preconditions: [
                            'User is logged in'
                        ],
                        testData: {
                            username: 'demo_user'
                        },
                        steps: [
                            { step: 1, action: 'Verify user is logged in', testData: 'N/A', expectedResult: 'Products page or any page after login is displayed' },
                            { step: 2, action: 'Click Logout button', testData: 'N/A', expectedResult: 'User is logged out' },
                            { step: 3, action: 'Verify redirected to login page', testData: 'N/A', expectedResult: 'Login page displays' },
                            { step: 4, action: 'Verify cart is cleared', testData: 'N/A', expectedResult: 'Cart is empty' },
                            { step: 5, action: 'Verify user cannot access products without login', testData: 'Try to navigate to products', expectedResult: 'Login page is displayed' }
                        ],
                        postconditions: [
                            'User is logged out',
                            'Cart is cleared',
                            'Session is ended'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    // ========== NEGATIVE TEST CASES ==========
                    {
                        id: 'TC-E2E-010',
                        title: 'E2E Flow - Login with Invalid Username',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Login Section',
                        requirementId: 'REQ-E2E-010',
                        acceptanceCriteria: 'As a user, I want to see an error message when login fails so that I know my credentials are incorrect',
                        gherkinCriteria: {
                            given: 'Given I am on the login page',
                            when: 'When I enter invalid username with valid password',
                            and: 'And I click Login button',
                            then: 'Then I should see an error message and remain on login page'
                        },
                        objective: 'Verify login fails with invalid username',
                        preconditions: [
                            'User is not logged in',
                            'E2E Flow page is accessible'
                        ],
                        testData: {
                            username: 'invalid_user',
                            password: 'demo123'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to E2E Flow page', testData: '/practice/e2e-flow', expectedResult: 'Login page displays' },
                            { step: 2, action: 'Enter invalid username', testData: 'invalid_user', expectedResult: 'Username field accepts input' },
                            { step: 3, action: 'Enter valid password', testData: 'demo123', expectedResult: 'Password field accepts input' },
                            { step: 4, action: 'Click Login button', testData: 'N/A', expectedResult: 'Error alert displays: "Invalid username or password"' },
                            { step: 5, action: 'Verify user remains on login page', testData: 'N/A', expectedResult: 'Login page is still displayed' },
                            { step: 6, action: 'Verify user is not logged in', testData: 'N/A', expectedResult: 'Products page is not accessible' }
                        ],
                        postconditions: [
                            'User is not logged in',
                            'Login page is displayed',
                            'Error message is shown'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-011',
                        title: 'E2E Flow - Login with Invalid Password',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Login Section',
                        requirementId: 'REQ-E2E-011',
                        acceptanceCriteria: 'As a user, I want to see an error message when password is incorrect',
                        gherkinCriteria: {
                            given: 'Given I am on the login page',
                            when: 'When I enter valid username with invalid password',
                            and: 'And I click Login button',
                            then: 'Then I should see an error message'
                        },
                        objective: 'Verify login fails with invalid password',
                        preconditions: [
                            'User is not logged in',
                            'E2E Flow page is accessible'
                        ],
                        testData: {
                            username: 'demo_user',
                            password: 'wrongpassword'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to E2E Flow page', testData: '/practice/e2e-flow', expectedResult: 'Login page displays' },
                            { step: 2, action: 'Enter valid username', testData: 'demo_user', expectedResult: 'Username field accepts input' },
                            { step: 3, action: 'Enter invalid password', testData: 'wrongpassword', expectedResult: 'Password field accepts input' },
                            { step: 4, action: 'Click Login button', testData: 'N/A', expectedResult: 'Error alert displays: "Invalid username or password"' },
                            { step: 5, action: 'Verify user remains on login page', testData: 'N/A', expectedResult: 'Login page is still displayed' }
                        ],
                        postconditions: [
                            'User is not logged in',
                            'Error message is displayed'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-012',
                        title: 'E2E Flow - Login with Empty Username',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Login Section',
                        requirementId: 'REQ-E2E-012',
                        acceptanceCriteria: 'As a user, I want to see validation when username is empty',
                        gherkinCriteria: {
                            given: 'Given I am on the login page',
                            when: 'When I leave username empty and enter password',
                            and: 'And I try to submit',
                            then: 'Then form should not submit due to HTML5 validation'
                        },
                        objective: 'Verify login form validates required username field',
                        preconditions: [
                            'User is not logged in',
                            'E2E Flow page is accessible'
                        ],
                        testData: {
                            username: '',
                            password: 'demo123'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to E2E Flow page', testData: '/practice/e2e-flow', expectedResult: 'Login page displays' },
                            { step: 2, action: 'Leave username field empty', testData: '', expectedResult: 'Username field is empty' },
                            { step: 3, action: 'Enter password', testData: 'demo123', expectedResult: 'Password field accepts input' },
                            { step: 4, action: 'Click Login button', testData: 'N/A', expectedResult: 'Form does not submit; browser validation message appears' },
                            { step: 5, action: 'Verify user remains on login page', testData: 'N/A', expectedResult: 'Login page is still displayed' }
                        ],
                        postconditions: [
                            'Form validation prevents submission',
                            'User is not logged in'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-013',
                        title: 'E2E Flow - Login with Empty Password',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Login Section',
                        requirementId: 'REQ-E2E-013',
                        acceptanceCriteria: 'As a user, I want to see validation when password is empty',
                        gherkinCriteria: {
                            given: 'Given I am on the login page',
                            when: 'When I enter username but leave password empty',
                            and: 'And I try to submit',
                            then: 'Then form should not submit due to HTML5 validation'
                        },
                        objective: 'Verify login form validates required password field',
                        preconditions: [
                            'User is not logged in',
                            'E2E Flow page is accessible'
                        ],
                        testData: {
                            username: 'demo_user',
                            password: ''
                        },
                        steps: [
                            { step: 1, action: 'Navigate to E2E Flow page', testData: '/practice/e2e-flow', expectedResult: 'Login page displays' },
                            { step: 2, action: 'Enter username', testData: 'demo_user', expectedResult: 'Username field accepts input' },
                            { step: 3, action: 'Leave password field empty', testData: '', expectedResult: 'Password field is empty' },
                            { step: 4, action: 'Click Login button', testData: 'N/A', expectedResult: 'Form does not submit; browser validation message appears' },
                            { step: 5, action: 'Verify user remains on login page', testData: 'N/A', expectedResult: 'Login page is still displayed' }
                        ],
                        postconditions: [
                            'Form validation prevents submission',
                            'User is not logged in'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-014',
                        title: 'E2E Flow - Access Products Without Login',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Security',
                        priority: 'High',
                        severity: 'Critical',
                        testBasis: 'PRD v1.0, Security Section',
                        requirementId: 'REQ-E2E-014',
                        acceptanceCriteria: 'As a system, I want to prevent unauthorized access to products so that only logged-in users can view products',
                        gherkinCriteria: {
                            given: 'Given I am not logged in',
                            when: 'When I try to access products page directly',
                            then: 'Then I should be redirected to login page'
                        },
                        objective: 'Verify products page is protected and requires login',
                        preconditions: [
                            'User is not logged in',
                            'E2E Flow page is accessible'
                        ],
                        testData: {
                            directUrl: '/practice/e2e-flow#products'
                        },
                        steps: [
                            { step: 1, action: 'Navigate directly to products URL', testData: 'Modify URL or state', expectedResult: 'Login page displays instead of products' },
                            { step: 2, action: 'Verify products are not accessible', testData: 'N/A', expectedResult: 'Products page is not displayed' },
                            { step: 3, action: 'Verify login is required', testData: 'N/A', expectedResult: 'User must login to access products' }
                        ],
                        postconditions: [
                            'User is on login page',
                            'Products are not accessible without login'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-015',
                        title: 'E2E Flow - Checkout with Empty Name Field',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Checkout Section',
                        requirementId: 'REQ-E2E-015',
                        acceptanceCriteria: 'As a user, I want to see validation when required checkout fields are empty',
                        gherkinCriteria: {
                            given: 'Given I am on checkout page',
                            when: 'When I leave name field empty',
                            and: 'And I try to place order',
                            then: 'Then order should not be placed'
                        },
                        objective: 'Verify checkout validates required name field',
                        preconditions: [
                            'User is logged in',
                            'User has products in cart',
                            'User is on checkout page'
                        ],
                        testData: {
                            name: '',
                            email: 'john.doe@example.com',
                            address: '123 Main Street',
                            city: 'New York',
                            zipCode: '10001',
                            country: 'United States'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to checkout page', testData: 'From cart, click Proceed to Checkout', expectedResult: 'Checkout page displays' },
                            { step: 2, action: 'Leave name field empty', testData: '', expectedResult: 'Name field is empty' },
                            { step: 3, action: 'Fill all other required fields', testData: 'See test data', expectedResult: 'Other fields are filled' },
                            { step: 4, action: 'Click Place Order button', testData: 'N/A', expectedResult: 'Order is not placed; validation prevents submission' },
                            { step: 5, action: 'Verify user remains on checkout page', testData: 'N/A', expectedResult: 'Checkout page is still displayed' }
                        ],
                        postconditions: [
                            'Order is not placed',
                            'User remains on checkout page',
                            'Validation prevents submission'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-016',
                        title: 'E2E Flow - Checkout with Invalid Email Format',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Checkout Section',
                        requirementId: 'REQ-E2E-016',
                        acceptanceCriteria: 'As a user, I want to see validation when email format is invalid',
                        gherkinCriteria: {
                            given: 'Given I am on checkout page',
                            when: 'When I enter invalid email format',
                            and: 'And I try to place order',
                            then: 'Then order should not be placed'
                        },
                        objective: 'Verify checkout validates email format',
                        preconditions: [
                            'User is logged in',
                            'User has products in cart',
                            'User is on checkout page'
                        ],
                        testData: {
                            name: 'John Doe',
                            email: 'invalid-email',
                            address: '123 Main Street',
                            city: 'New York',
                            zipCode: '10001',
                            country: 'United States'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to checkout page', testData: 'From cart, click Proceed to Checkout', expectedResult: 'Checkout page displays' },
                            { step: 2, action: 'Enter invalid email format', testData: 'invalid-email', expectedResult: 'Email field accepts input' },
                            { step: 3, action: 'Fill all other required fields', testData: 'See test data', expectedResult: 'Other fields are filled' },
                            { step: 4, action: 'Click Place Order button', testData: 'N/A', expectedResult: 'Order is not placed; email validation prevents submission' },
                            { step: 5, action: 'Verify user remains on checkout page', testData: 'N/A', expectedResult: 'Checkout page is still displayed' }
                        ],
                        postconditions: [
                            'Order is not placed',
                            'Email validation prevents submission'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-017',
                        title: 'E2E Flow - Checkout with Empty Payment Card Number',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        testBasis: 'PRD v1.0, Checkout Section',
                        requirementId: 'REQ-E2E-017',
                        acceptanceCriteria: 'As a user, I want to see validation when payment card number is empty',
                        gherkinCriteria: {
                            given: 'Given I am on checkout page with credit card selected',
                            when: 'When I leave card number empty',
                            and: 'And I try to place order',
                            then: 'Then order should not be placed'
                        },
                        objective: 'Verify checkout validates payment card number when credit card is selected',
                        preconditions: [
                            'User is logged in',
                            'User has products in cart',
                            'User is on checkout page',
                            'Credit card payment method is selected'
                        ],
                        testData: {
                            name: 'John Doe',
                            email: 'john.doe@example.com',
                            address: '123 Main Street',
                            city: 'New York',
                            zipCode: '10001',
                            country: 'United States',
                            paymentMethod: 'credit-card',
                            cardNumber: '',
                            expiryDate: '12/25',
                            cvv: '123'
                        },
                        steps: [
                            { step: 1, action: 'Navigate to checkout page', testData: 'From cart, click Proceed to Checkout', expectedResult: 'Checkout page displays' },
                            { step: 2, action: 'Select Credit Card payment method', testData: 'credit-card', expectedResult: 'Credit card fields are displayed' },
                            { step: 3, action: 'Fill all shipping fields', testData: 'See test data', expectedResult: 'Shipping fields are filled' },
                            { step: 4, action: 'Leave card number empty', testData: '', expectedResult: 'Card number field is empty' },
                            { step: 5, action: 'Fill expiry date and CVV', testData: '12/25, 123', expectedResult: 'Other payment fields are filled' },
                            { step: 6, action: 'Click Place Order button', testData: 'N/A', expectedResult: 'Order is not placed; validation prevents submission' }
                        ],
                        postconditions: [
                            'Order is not placed',
                            'Validation prevents submission'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-018',
                        title: 'E2E Flow - Place Order with Empty Cart',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Cart Section',
                        requirementId: 'REQ-E2E-018',
                        acceptanceCriteria: 'As a system, I want to prevent order placement when cart is empty',
                        gherkinCriteria: {
                            given: 'Given I have an empty cart',
                            when: 'When I try to proceed to checkout',
                            then: 'Then checkout should not be accessible'
                        },
                        objective: 'Verify checkout is not accessible with empty cart',
                        preconditions: [
                            'User is logged in',
                            'Cart is empty'
                        ],
                        testData: {
                            cartItems: 0
                        },
                        steps: [
                            { step: 1, action: 'Verify cart is empty', testData: 'Check cart icon', expectedResult: 'Cart count shows 0' },
                            { step: 2, action: 'Navigate to Cart page', testData: 'Click Cart icon', expectedResult: 'Cart page displays' },
                            { step: 3, action: 'Verify Proceed to Checkout button is disabled or not visible', testData: 'N/A', expectedResult: 'Checkout button is not accessible' },
                            { step: 4, action: 'Verify empty cart message displays', testData: 'N/A', expectedResult: 'Message indicates cart is empty' }
                        ],
                        postconditions: [
                            'Checkout is not accessible',
                            'User must add products to cart first'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-019',
                        title: 'E2E Flow - Add Out of Stock Product to Cart',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        testBasis: 'PRD v1.0, Products Section',
                        requirementId: 'REQ-E2E-019',
                        acceptanceCriteria: 'As a user, I want to see indication when product is out of stock',
                        gherkinCriteria: {
                            given: 'Given I am viewing an out of stock product',
                            when: 'When I try to add it to cart',
                            then: 'Then I should see out of stock indication'
                        },
                        objective: 'Verify out of stock products are handled correctly',
                        preconditions: [
                            'User is logged in',
                            'Product with inStock: false exists'
                        ],
                        testData: {
                            productName: 'Mechanical Keyboard',
                            inStock: false
                        },
                        steps: [
                            { step: 1, action: 'Navigate to Products page', testData: 'N/A', expectedResult: 'Products page displays' },
                            { step: 2, action: 'Find out of stock product', testData: 'Mechanical Keyboard', expectedResult: 'Product is displayed' },
                            { step: 3, action: 'Verify out of stock indication', testData: 'N/A', expectedResult: 'Product shows out of stock status' },
                            { step: 4, action: 'Click on product', testData: 'N/A', expectedResult: 'Product detail page displays' },
                            { step: 5, action: 'Verify Add to Cart button is disabled or shows out of stock', testData: 'N/A', expectedResult: 'Add to Cart is not available for out of stock product' }
                        ],
                        postconditions: [
                            'Out of stock product cannot be added to cart',
                            'User is informed of stock status'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    },
                    {
                        id: 'TC-E2E-020',
                        title: 'E2E Flow - Set Product Quantity to Zero',
                        module: 'E2E Flow',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Minor',
                        testBasis: 'PRD v1.0, Cart Section',
                        requirementId: 'REQ-E2E-020',
                        acceptanceCriteria: 'As a user, I want product to be removed when quantity is set to zero',
                        gherkinCriteria: {
                            given: 'Given I have a product in cart',
                            when: 'When I set quantity to 0',
                            then: 'Then product should be removed from cart'
                        },
                        objective: 'Verify product is removed when quantity is set to zero',
                        preconditions: [
                            'User is logged in',
                            'User has product in cart'
                        ],
                        testData: {
                            productId: 7,
                            quantity: 0
                        },
                        steps: [
                            { step: 1, action: 'Navigate to Cart page', testData: 'Click Cart icon', expectedResult: 'Cart page displays' },
                            { step: 2, action: 'Set product quantity to 0', testData: 'Enter 0 or use decrease button', expectedResult: 'Quantity is set to 0' },
                            { step: 3, action: 'Verify product is removed from cart', testData: 'N/A', expectedResult: 'Product no longer appears in cart' },
                            { step: 4, action: 'Verify cart total updates', testData: 'N/A', expectedResult: 'Cart total reflects removal' }
                        ],
                        postconditions: [
                            'Product is removed from cart',
                            'Cart total is updated'
                        ],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/practice/e2e-flow',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A (Frontend only)'
                        }
                    }
                ]
            },
            'ab-testing': {
                id: 'ab-testing',
                title: 'A/B Testing Test Cases',
                description: 'Test cases for A/B Testing functionality, verifying variant display and user interaction.',
                testCases: [
                    {
                        id: 'TC-AB-001',
                        title: 'A/B Testing - Verify Page Loads with Variant A or B',
                        module: 'A/B Testing',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see either variant A or variant B when I navigate to the A/B Testing page so that I can test different versions',
                        gherkinCriteria: {
                            given: 'Given I am on the A/B Testing page',
                            when: 'When the page loads',
                            and: 'And I observe the content displayed',
                            then: 'Then I should see either variant A or variant B content displayed'
                        },
                        objective: 'Verify that A/B Testing page loads and displays one of the variants',
                        preconditions: ['User navigates to A/B Testing page'],
                        testData: { url: '/practice/ab-testing' },
                        steps: [
                            { step: 1, action: 'Navigate to A/B Testing page', testData: '/practice/ab-testing', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Observe the page content', testData: 'N/A', expectedResult: 'Either variant A or variant B content is displayed' }
                        ],
                        postconditions: ['Page displays one variant', 'User can interact with the displayed variant'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/ab-testing',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-AB-002',
                        title: 'A/B Testing - Verify Variant Content is Different',
                        module: 'A/B Testing',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a tester, I want to verify that variant A and variant B display different content so that I can confirm A/B testing is working',
                        gherkinCriteria: {
                            given: 'Given I access the A/B Testing page multiple times',
                            when: 'When I observe the content displayed',
                            and: 'And I compare different page loads',
                            then: 'Then I should see different variants with distinct content'
                        },
                        objective: 'Verify that A/B Testing displays different variants with distinct content',
                        preconditions: ['User can refresh or navigate to page multiple times'],
                        testData: { url: '/practice/ab-testing', refreshCount: 'Multiple' },
                        steps: [
                            { step: 1, action: 'Navigate to A/B Testing page', testData: '/practice/ab-testing', expectedResult: 'Page loads with variant A or B' },
                            { step: 2, action: 'Note the variant displayed', testData: 'Variant A or B', expectedResult: 'Variant identifier is visible' },
                            { step: 3, action: 'Refresh page multiple times', testData: '3-5 refreshes', expectedResult: 'Different variants may be displayed on different loads' }
                        ],
                        postconditions: ['Variants are distinguishable', 'Content differs between variants'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/ab-testing',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'add-remove-elements': {
                id: 'add-remove-elements',
                title: 'Add/Remove Elements Test Cases',
                description: 'Test cases for Add/Remove Elements functionality, verifying dynamic element addition and removal.',
                testCases: [
                    {
                        id: 'TC-ARE-001',
                        title: 'Add/Remove Elements - Successfully Add Element',
                        module: 'Add/Remove Elements',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to add elements by clicking the Add Element button so that new elements appear on the page',
                        gherkinCriteria: {
                            given: 'Given I am on the Add/Remove Elements page',
                            when: 'When I click the Add Element button',
                            and: 'And I observe the page',
                            then: 'Then a new Delete button should appear on the page'
                        },
                        objective: 'Verify that clicking Add Element button successfully adds a new Delete button',
                        preconditions: ['User is on Add/Remove Elements page', 'Page is loaded'],
                        testData: { buttonText: 'Add Element', expectedButton: 'Delete' },
                        steps: [
                            { step: 1, action: 'Navigate to Add/Remove Elements page', testData: '/practice/add-remove-elements', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Click Add Element button', testData: 'N/A', expectedResult: 'New Delete button appears on the page' },
                            { step: 3, action: 'Verify Delete button is visible', testData: 'N/A', expectedResult: 'Delete button is displayed' }
                        ],
                        postconditions: ['New Delete button is added', 'User can interact with Delete button'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/add-remove-elements',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-ARE-002',
                        title: 'Add/Remove Elements - Successfully Remove Element',
                        module: 'Add/Remove Elements',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to remove elements by clicking the Delete button so that elements are removed from the page',
                        gherkinCriteria: {
                            given: 'Given I have added an element on the Add/Remove Elements page',
                            when: 'When I click the Delete button',
                            and: 'And I observe the page',
                            then: 'Then the Delete button should be removed from the page'
                        },
                        objective: 'Verify that clicking Delete button successfully removes the element',
                        preconditions: ['User has added at least one element', 'Delete button is visible'],
                        testData: { deleteButtonText: 'Delete' },
                        steps: [
                            { step: 1, action: 'Navigate to Add/Remove Elements page', testData: '/practice/add-remove-elements', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Click Add Element button', testData: 'N/A', expectedResult: 'Delete button appears' },
                            { step: 3, action: 'Click Delete button', testData: 'N/A', expectedResult: 'Delete button is removed from the page' },
                            { step: 4, action: 'Verify element is removed', testData: 'N/A', expectedResult: 'Delete button no longer exists on the page' }
                        ],
                        postconditions: ['Element is removed', 'Page updates correctly'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/add-remove-elements',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-ARE-003',
                        title: 'Add/Remove Elements - Add Multiple Elements',
                        module: 'Add/Remove Elements',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to add multiple elements by clicking Add Element multiple times so that multiple Delete buttons appear',
                        gherkinCriteria: {
                            given: 'Given I am on the Add/Remove Elements page',
                            when: 'When I click Add Element button multiple times',
                            and: 'And I observe the page',
                            then: 'Then multiple Delete buttons should appear on the page'
                        },
                        objective: 'Verify that multiple elements can be added successfully',
                        preconditions: ['User is on Add/Remove Elements page'],
                        testData: { clickCount: '5 times' },
                        steps: [
                            { step: 1, action: 'Navigate to Add/Remove Elements page', testData: '/practice/add-remove-elements', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Click Add Element button 5 times', testData: '5 clicks', expectedResult: '5 Delete buttons appear on the page' },
                            { step: 3, action: 'Verify all Delete buttons are visible', testData: 'N/A', expectedResult: 'All 5 Delete buttons are displayed' }
                        ],
                        postconditions: ['Multiple elements are added', 'All Delete buttons are functional'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/add-remove-elements',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-ARE-004',
                        title: 'Add/Remove Elements - Remove Specific Element from Multiple',
                        module: 'Add/Remove Elements',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to remove a specific element when multiple elements exist so that only the clicked element is removed',
                        gherkinCriteria: {
                            given: 'Given I have added multiple elements on the Add/Remove Elements page',
                            when: 'When I click a specific Delete button',
                            and: 'And I observe the page',
                            then: 'Then only that specific Delete button should be removed'
                        },
                        objective: 'Verify that clicking a specific Delete button removes only that element',
                        preconditions: ['Multiple elements are added', 'At least 3 Delete buttons exist'],
                        testData: { totalElements: '3', elementToRemove: 'Second Delete button' },
                        steps: [
                            { step: 1, action: 'Navigate to Add/Remove Elements page', testData: '/practice/add-remove-elements', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Click Add Element button 3 times', testData: '3 clicks', expectedResult: '3 Delete buttons appear' },
                            { step: 3, action: 'Click the second Delete button', testData: 'N/A', expectedResult: 'Only the second Delete button is removed' },
                            { step: 4, action: 'Verify remaining Delete buttons', testData: 'N/A', expectedResult: '2 Delete buttons remain on the page' }
                        ],
                        postconditions: ['Specific element is removed', 'Other elements remain'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/add-remove-elements',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'basic-auth': {
                id: 'basic-auth',
                title: 'Basic Auth Test Cases',
                description: 'Test cases for Basic Authentication functionality, verifying authentication with valid and invalid credentials.',
                testCases: [
                    {
                        id: 'TC-BA-001',
                        title: 'Basic Auth - Successful Authentication with Valid Credentials',
                        module: 'Basic Auth',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to authenticate with valid credentials so that I can access the protected content',
                        gherkinCriteria: {
                            given: 'Given I am attempting to access Basic Auth page',
                            when: 'When I enter valid username and password (admin/admin)',
                            and: 'And I submit the credentials',
                            then: 'Then I should be granted access to the protected content'
                        },
                        objective: 'Verify that valid credentials grant access to protected content',
                        preconditions: ['User navigates to Basic Auth page', 'Authentication dialog appears'],
                        testData: { username: 'admin', password: 'admin' },
                        steps: [
                            { step: 1, action: 'Navigate to Basic Auth page', testData: '/practice/basic-auth', expectedResult: 'Authentication dialog appears' },
                            { step: 2, action: 'Enter username', testData: 'admin', expectedResult: 'Username is entered' },
                            { step: 3, action: 'Enter password', testData: 'admin', expectedResult: 'Password is entered' },
                            { step: 4, action: 'Click OK or Submit', testData: 'N/A', expectedResult: 'User is authenticated and protected content is displayed' }
                        ],
                        postconditions: ['User is authenticated', 'Protected content is accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/basic-auth',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-BA-002',
                        title: 'Basic Auth - Authentication Failure with Invalid Username',
                        module: 'Basic Auth',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see an authentication error when I enter an invalid username so that I know my credentials are incorrect',
                        gherkinCriteria: {
                            given: 'Given I am attempting to access Basic Auth page',
                            when: 'When I enter invalid username and valid password',
                            and: 'And I submit the credentials',
                            then: 'Then I should see an authentication error and access should be denied'
                        },
                        objective: 'Verify that invalid username is rejected',
                        preconditions: ['User navigates to Basic Auth page', 'Authentication dialog appears'],
                        testData: { username: 'invalid', password: 'admin' },
                        steps: [
                            { step: 1, action: 'Navigate to Basic Auth page', testData: '/practice/basic-auth', expectedResult: 'Authentication dialog appears' },
                            { step: 2, action: 'Enter invalid username', testData: 'invalid', expectedResult: 'Username is entered' },
                            { step: 3, action: 'Enter valid password', testData: 'admin', expectedResult: 'Password is entered' },
                            { step: 4, action: 'Click OK or Submit', testData: 'N/A', expectedResult: 'Authentication fails and error is displayed' }
                        ],
                        postconditions: ['Authentication fails', 'Access is denied', 'Error message is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/basic-auth',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-BA-003',
                        title: 'Basic Auth - Authentication Failure with Invalid Password',
                        module: 'Basic Auth',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see an authentication error when I enter an invalid password so that I know my credentials are incorrect',
                        gherkinCriteria: {
                            given: 'Given I am attempting to access Basic Auth page',
                            when: 'When I enter valid username and invalid password',
                            and: 'And I submit the credentials',
                            then: 'Then I should see an authentication error and access should be denied'
                        },
                        objective: 'Verify that invalid password is rejected',
                        preconditions: ['User navigates to Basic Auth page', 'Authentication dialog appears'],
                        testData: { username: 'admin', password: 'wrongpassword' },
                        steps: [
                            { step: 1, action: 'Navigate to Basic Auth page', testData: '/practice/basic-auth', expectedResult: 'Authentication dialog appears' },
                            { step: 2, action: 'Enter valid username', testData: 'admin', expectedResult: 'Username is entered' },
                            { step: 3, action: 'Enter invalid password', testData: 'wrongpassword', expectedResult: 'Password is entered' },
                            { step: 4, action: 'Click OK or Submit', testData: 'N/A', expectedResult: 'Authentication fails and error is displayed' }
                        ],
                        postconditions: ['Authentication fails', 'Access is denied', 'Error message is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/basic-auth',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-BA-004',
                        title: 'Basic Auth - Authentication Failure with Empty Credentials',
                        module: 'Basic Auth',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Minor',
                        acceptanceCriteria: 'As a user, I want to see an authentication error when I leave credentials empty so that I know credentials are required',
                        gherkinCriteria: {
                            given: 'Given I am attempting to access Basic Auth page',
                            when: 'When I leave username and password empty',
                            and: 'And I attempt to submit',
                            then: 'Then I should see an authentication error'
                        },
                        objective: 'Verify that empty credentials are rejected',
                        preconditions: ['User navigates to Basic Auth page', 'Authentication dialog appears'],
                        testData: { username: '', password: '' },
                        steps: [
                            { step: 1, action: 'Navigate to Basic Auth page', testData: '/practice/basic-auth', expectedResult: 'Authentication dialog appears' },
                            { step: 2, action: 'Leave username empty', testData: '', expectedResult: 'Username field is empty' },
                            { step: 3, action: 'Leave password empty', testData: '', expectedResult: 'Password field is empty' },
                            { step: 4, action: 'Click OK or Submit', testData: 'N/A', expectedResult: 'Authentication fails and error is displayed' }
                        ],
                        postconditions: ['Authentication fails', 'Access is denied'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/basic-auth',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'broken-images': {
                id: 'broken-images',
                title: 'Broken Images Test Cases',
                description: 'Test cases for Broken Images page, verifying image loading and error handling.',
                testCases: [
                    {
                        id: 'TC-BI-001',
                        title: 'Broken Images - Verify Page Loads',
                        module: 'Broken Images',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see the Broken Images page load so that I can view the images',
                        gherkinCriteria: {
                            given: 'Given I navigate to Broken Images page',
                            when: 'When the page loads',
                            and: 'And I observe the content',
                            then: 'Then the page should display with images'
                        },
                        objective: 'Verify that Broken Images page loads successfully',
                        preconditions: ['User navigates to Broken Images page'],
                        testData: { url: '/practice/broken-images' },
                        steps: [
                            { step: 1, action: 'Navigate to Broken Images page', testData: '/practice/broken-images', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Verify page content is displayed', testData: 'N/A', expectedResult: 'Page content and images are visible' }
                        ],
                        postconditions: ['Page is loaded', 'Images are displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/broken-images',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-BI-002',
                        title: 'Broken Images - Verify Broken Images Display Error',
                        module: 'Broken Images',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a tester, I want to verify that broken images display error indicators so that I can identify image loading issues',
                        gherkinCriteria: {
                            given: 'Given I am on the Broken Images page',
                            when: 'When I observe the images',
                            and: 'And some images fail to load',
                            then: 'Then broken images should display error indicators or alt text'
                        },
                        objective: 'Verify that broken images are properly identified',
                        preconditions: ['User is on Broken Images page', 'Page contains broken image links'],
                        testData: { brokenImageCount: '2' },
                        steps: [
                            { step: 1, action: 'Navigate to Broken Images page', testData: '/practice/broken-images', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Inspect images on the page', testData: 'N/A', expectedResult: 'Images are displayed' },
                            { step: 3, action: 'Check browser console for image errors', testData: 'N/A', expectedResult: 'Error messages for broken images are logged' },
                            { step: 4, action: 'Verify broken image indicators', testData: 'N/A', expectedResult: 'Broken images show error indicators or alt text' }
                        ],
                        postconditions: ['Broken images are identified', 'Error indicators are visible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/broken-images',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'checkboxes': {
                id: 'checkboxes',
                title: 'Checkboxes Test Cases',
                description: 'Test cases for Checkboxes functionality, verifying checkbox selection and deselection.',
                testCases: [
                    {
                        id: 'TC-CHK-001',
                        title: 'Checkboxes - Select Single Checkbox',
                        module: 'Checkboxes',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to select a checkbox so that I can mark an option',
                        gherkinCriteria: {
                            given: 'Given I am on the Checkboxes page',
                            when: 'When I click on a checkbox',
                            and: 'And I observe the checkbox state',
                            then: 'Then the checkbox should be selected'
                        },
                        objective: 'Verify that clicking a checkbox selects it',
                        preconditions: ['User is on Checkboxes page', 'Checkboxes are visible'],
                        testData: { checkboxIndex: 'First checkbox' },
                        steps: [
                            { step: 1, action: 'Navigate to Checkboxes page', testData: '/practice/checkboxes', expectedResult: 'Page loads with checkboxes visible' },
                            { step: 2, action: 'Click on first checkbox', testData: 'N/A', expectedResult: 'Checkbox is selected (checked)' },
                            { step: 3, action: 'Verify checkbox is checked', testData: 'N/A', expectedResult: 'Checkbox shows checked state' }
                        ],
                        postconditions: ['Checkbox is selected', 'State is persisted'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/checkboxes',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-CHK-002',
                        title: 'Checkboxes - Deselect Checkbox',
                        module: 'Checkboxes',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to deselect a checkbox so that I can unmark an option',
                        gherkinCriteria: {
                            given: 'Given I have selected a checkbox on the Checkboxes page',
                            when: 'When I click on the selected checkbox',
                            and: 'And I observe the checkbox state',
                            then: 'Then the checkbox should be deselected'
                        },
                        objective: 'Verify that clicking a selected checkbox deselects it',
                        preconditions: ['User is on Checkboxes page', 'A checkbox is already selected'],
                        testData: { checkboxIndex: 'First checkbox' },
                        steps: [
                            { step: 1, action: 'Navigate to Checkboxes page', testData: '/practice/checkboxes', expectedResult: 'Page loads' },
                            { step: 2, action: 'Select first checkbox', testData: 'N/A', expectedResult: 'Checkbox is selected' },
                            { step: 3, action: 'Click on the selected checkbox again', testData: 'N/A', expectedResult: 'Checkbox is deselected (unchecked)' },
                            { step: 4, action: 'Verify checkbox is unchecked', testData: 'N/A', expectedResult: 'Checkbox shows unchecked state' }
                        ],
                        postconditions: ['Checkbox is deselected', 'State is updated'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/checkboxes',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-CHK-003',
                        title: 'Checkboxes - Select Multiple Checkboxes',
                        module: 'Checkboxes',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to select multiple checkboxes so that I can mark multiple options',
                        gherkinCriteria: {
                            given: 'Given I am on the Checkboxes page',
                            when: 'When I click on multiple checkboxes',
                            and: 'And I observe all checkboxes',
                            then: 'Then all clicked checkboxes should be selected'
                        },
                        objective: 'Verify that multiple checkboxes can be selected simultaneously',
                        preconditions: ['User is on Checkboxes page', 'Multiple checkboxes are available'],
                        testData: { checkboxCount: '3' },
                        steps: [
                            { step: 1, action: 'Navigate to Checkboxes page', testData: '/practice/checkboxes', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click on first checkbox', testData: 'N/A', expectedResult: 'First checkbox is selected' },
                            { step: 3, action: 'Click on second checkbox', testData: 'N/A', expectedResult: 'Second checkbox is selected' },
                            { step: 4, action: 'Click on third checkbox', testData: 'N/A', expectedResult: 'Third checkbox is selected' },
                            { step: 5, action: 'Verify all checkboxes are selected', testData: 'N/A', expectedResult: 'All three checkboxes show checked state' }
                        ],
                        postconditions: ['Multiple checkboxes are selected', 'All states are independent'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/checkboxes',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'dropdown': {
                id: 'dropdown',
                title: 'Dropdown Test Cases',
                description: 'Test cases for Dropdown functionality, verifying option selection and display.',
                testCases: [
                    {
                        id: 'TC-DD-001',
                        title: 'Dropdown - Select Option from Dropdown',
                        module: 'Dropdown',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to select an option from the dropdown so that I can choose a value',
                        gherkinCriteria: {
                            given: 'Given I am on the Dropdown page',
                            when: 'When I click on the dropdown',
                            and: 'And I select an option',
                            then: 'Then the selected option should be displayed'
                        },
                        objective: 'Verify that selecting an option from dropdown works correctly',
                        preconditions: ['User is on Dropdown page', 'Dropdown is visible'],
                        testData: { option: 'Option 1' },
                        steps: [
                            { step: 1, action: 'Navigate to Dropdown page', testData: '/practice/dropdown', expectedResult: 'Page loads with dropdown visible' },
                            { step: 2, action: 'Click on dropdown', testData: 'N/A', expectedResult: 'Dropdown opens showing options' },
                            { step: 3, action: 'Select an option', testData: 'Option 1', expectedResult: 'Option is selected and displayed' },
                            { step: 4, action: 'Verify selected option', testData: 'N/A', expectedResult: 'Selected option is shown in dropdown' }
                        ],
                        postconditions: ['Option is selected', 'Dropdown shows selected value'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/dropdown',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-DD-002',
                        title: 'Dropdown - Change Selected Option',
                        module: 'Dropdown',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to change the selected option so that I can update my choice',
                        gherkinCriteria: {
                            given: 'Given I have selected an option from the dropdown',
                            when: 'When I select a different option',
                            and: 'And I observe the dropdown',
                            then: 'Then the new option should be displayed'
                        },
                        objective: 'Verify that changing dropdown selection works correctly',
                        preconditions: ['User is on Dropdown page', 'An option is already selected'],
                        testData: { firstOption: 'Option 1', secondOption: 'Option 2' },
                        steps: [
                            { step: 1, action: 'Navigate to Dropdown page', testData: '/practice/dropdown', expectedResult: 'Page loads' },
                            { step: 2, action: 'Select first option', testData: 'Option 1', expectedResult: 'Option 1 is selected' },
                            { step: 3, action: 'Click on dropdown again', testData: 'N/A', expectedResult: 'Dropdown opens' },
                            { step: 4, action: 'Select different option', testData: 'Option 2', expectedResult: 'Option 2 is selected' },
                            { step: 5, action: 'Verify new option is displayed', testData: 'N/A', expectedResult: 'Option 2 is shown in dropdown' }
                        ],
                        postconditions: ['Selection is updated', 'New option is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/dropdown',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'file-upload': {
                id: 'file-upload',
                title: 'File Upload Test Cases',
                description: 'Test cases for File Upload functionality, verifying file selection and upload process.',
                testCases: [
                    {
                        id: 'TC-FU-001',
                        title: 'File Upload - Successfully Upload Valid File',
                        module: 'File Upload',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to upload a file so that I can submit it to the system',
                        gherkinCriteria: {
                            given: 'Given I am on the File Upload page',
                            when: 'When I select a valid file',
                            and: 'And I click upload button',
                            then: 'Then the file should be uploaded successfully'
                        },
                        objective: 'Verify that valid file upload works correctly',
                        preconditions: ['User is on File Upload page', 'Valid file is available'],
                        testData: { fileName: 'test-file.txt', fileType: 'text/plain' },
                        steps: [
                            { step: 1, action: 'Navigate to File Upload page', testData: '/practice/file-upload', expectedResult: 'Page loads with file upload button visible' },
                            { step: 2, action: 'Click Choose File button', testData: 'N/A', expectedResult: 'File selection dialog opens' },
                            { step: 3, action: 'Select a file', testData: 'test-file.txt', expectedResult: 'File is selected' },
                            { step: 4, action: 'Click Upload button', testData: 'N/A', expectedResult: 'File is uploaded successfully' },
                            { step: 5, action: 'Verify upload success message', testData: 'N/A', expectedResult: 'Success message is displayed' }
                        ],
                        postconditions: ['File is uploaded', 'Success message is shown'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/file-upload',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-FU-002',
                        title: 'File Upload - Verify File Selection Without Upload',
                        module: 'File Upload',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see the selected file name before uploading so that I can confirm my selection',
                        gherkinCriteria: {
                            given: 'Given I am on the File Upload page',
                            when: 'When I select a file',
                            and: 'And I observe the file input',
                            then: 'Then the selected file name should be displayed'
                        },
                        objective: 'Verify that selected file name is displayed',
                        preconditions: ['User is on File Upload page'],
                        testData: { fileName: 'test-file.txt' },
                        steps: [
                            { step: 1, action: 'Navigate to File Upload page', testData: '/practice/file-upload', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click Choose File button', testData: 'N/A', expectedResult: 'File selection dialog opens' },
                            { step: 3, action: 'Select a file', testData: 'test-file.txt', expectedResult: 'File is selected' },
                            { step: 4, action: 'Verify file name is displayed', testData: 'N/A', expectedResult: 'Selected file name is shown next to Choose File button' }
                        ],
                        postconditions: ['File is selected', 'File name is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/file-upload',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'form-authentication': {
                id: 'form-authentication',
                title: 'Form Authentication Test Cases',
                description: 'Test cases for Form Authentication functionality, verifying login with valid and invalid credentials.',
                testCases: [
                    {
                        id: 'TC-FA-001',
                        title: 'Form Authentication - Successful Login with Valid Credentials',
                        module: 'Form Authentication',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to login with valid credentials so that I can access the secure area',
                        gherkinCriteria: {
                            given: 'Given I am on the Form Authentication page',
                            when: 'When I enter valid username and password',
                            and: 'And I click login button',
                            then: 'Then I should be redirected to the secure area'
                        },
                        objective: 'Verify that valid credentials grant access',
                        preconditions: ['User is on Form Authentication page', 'Valid credentials are available'],
                        testData: { username: 'tomsmith', password: 'SuperSecretPassword!' },
                        steps: [
                            { step: 1, action: 'Navigate to Form Authentication page', testData: '/practice/form-authentication', expectedResult: 'Login form is displayed' },
                            { step: 2, action: 'Enter username', testData: 'tomsmith', expectedResult: 'Username is entered' },
                            { step: 3, action: 'Enter password', testData: 'SuperSecretPassword!', expectedResult: 'Password is entered' },
                            { step: 4, action: 'Click Login button', testData: 'N/A', expectedResult: 'User is redirected to secure area' },
                            { step: 5, action: 'Verify secure area is displayed', testData: 'N/A', expectedResult: 'Secure area page is shown' }
                        ],
                        postconditions: ['User is logged in', 'Secure area is accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/form-authentication',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-FA-002',
                        title: 'Form Authentication - Login Failure with Invalid Username',
                        module: 'Form Authentication',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see an error message when I enter invalid username so that I know my credentials are incorrect',
                        gherkinCriteria: {
                            given: 'Given I am on the Form Authentication page',
                            when: 'When I enter invalid username and valid password',
                            and: 'And I click login button',
                            then: 'Then I should see an error message and remain on login page'
                        },
                        objective: 'Verify that invalid username is rejected',
                        preconditions: ['User is on Form Authentication page'],
                        testData: { username: 'invaliduser', password: 'SuperSecretPassword!' },
                        steps: [
                            { step: 1, action: 'Navigate to Form Authentication page', testData: '/practice/form-authentication', expectedResult: 'Login form is displayed' },
                            { step: 2, action: 'Enter invalid username', testData: 'invaliduser', expectedResult: 'Username is entered' },
                            { step: 3, action: 'Enter valid password', testData: 'SuperSecretPassword!', expectedResult: 'Password is entered' },
                            { step: 4, action: 'Click Login button', testData: 'N/A', expectedResult: 'Error message is displayed' },
                            { step: 5, action: 'Verify error message', testData: 'N/A', expectedResult: 'Error message indicates invalid username' }
                        ],
                        postconditions: ['Login fails', 'Error message is displayed', 'User remains on login page'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/form-authentication',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-FA-003',
                        title: 'Form Authentication - Login Failure with Invalid Password',
                        module: 'Form Authentication',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see an error message when I enter invalid password so that I know my credentials are incorrect',
                        gherkinCriteria: {
                            given: 'Given I am on the Form Authentication page',
                            when: 'When I enter valid username and invalid password',
                            and: 'And I click login button',
                            then: 'Then I should see an error message and remain on login page'
                        },
                        objective: 'Verify that invalid password is rejected',
                        preconditions: ['User is on Form Authentication page'],
                        testData: { username: 'tomsmith', password: 'wrongpassword' },
                        steps: [
                            { step: 1, action: 'Navigate to Form Authentication page', testData: '/practice/form-authentication', expectedResult: 'Login form is displayed' },
                            { step: 2, action: 'Enter valid username', testData: 'tomsmith', expectedResult: 'Username is entered' },
                            { step: 3, action: 'Enter invalid password', testData: 'wrongpassword', expectedResult: 'Password is entered' },
                            { step: 4, action: 'Click Login button', testData: 'N/A', expectedResult: 'Error message is displayed' },
                            { step: 5, action: 'Verify error message', testData: 'N/A', expectedResult: 'Error message indicates invalid password' }
                        ],
                        postconditions: ['Login fails', 'Error message is displayed', 'User remains on login page'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/form-authentication',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'javascript-alerts': {
                id: 'javascript-alerts',
                title: 'JavaScript Alerts Test Cases',
                description: 'Test cases for JavaScript Alerts functionality, verifying alert display and interaction.',
                testCases: [
                    {
                        id: 'TC-JA-001',
                        title: 'JavaScript Alerts - Display Alert Dialog',
                        module: 'JavaScript Alerts',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to trigger an alert dialog so that I can see alert messages',
                        gherkinCriteria: {
                            given: 'Given I am on the JavaScript Alerts page',
                            when: 'When I click the button to trigger an alert',
                            and: 'And the alert dialog appears',
                            then: 'Then I should see the alert message displayed'
                        },
                        objective: 'Verify that clicking alert button displays alert dialog',
                        preconditions: ['User is on JavaScript Alerts page'],
                        testData: { buttonText: 'Click for JS Alert' },
                        steps: [
                            { step: 1, action: 'Navigate to JavaScript Alerts page', testData: '/practice/javascript-alerts', expectedResult: 'Page loads with alert buttons visible' },
                            { step: 2, action: 'Click "Click for JS Alert" button', testData: 'N/A', expectedResult: 'Alert dialog appears with message' },
                            { step: 3, action: 'Verify alert message', testData: 'N/A', expectedResult: 'Alert message "I am a JS Alert" is displayed' },
                            { step: 4, action: 'Click OK on alert', testData: 'N/A', expectedResult: 'Alert is dismissed' }
                        ],
                        postconditions: ['Alert is displayed', 'Alert can be dismissed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/javascript-alerts',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-JA-002',
                        title: 'JavaScript Alerts - Display Confirm Dialog',
                        module: 'JavaScript Alerts',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to trigger a confirm dialog so that I can confirm or cancel an action',
                        gherkinCriteria: {
                            given: 'Given I am on the JavaScript Alerts page',
                            when: 'When I click the button to trigger a confirm',
                            and: 'And the confirm dialog appears',
                            then: 'Then I should see the confirm message with OK and Cancel options'
                        },
                        objective: 'Verify that confirm dialog works correctly',
                        preconditions: ['User is on JavaScript Alerts page'],
                        testData: { buttonText: 'Click for JS Confirm' },
                        steps: [
                            { step: 1, action: 'Navigate to JavaScript Alerts page', testData: '/practice/javascript-alerts', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click "Click for JS Confirm" button', testData: 'N/A', expectedResult: 'Confirm dialog appears' },
                            { step: 3, action: 'Verify confirm message', testData: 'N/A', expectedResult: 'Confirm message "I am a JS Confirm" is displayed' },
                            { step: 4, action: 'Click OK on confirm', testData: 'N/A', expectedResult: 'Confirm returns true and result is displayed' }
                        ],
                        postconditions: ['Confirm dialog is displayed', 'Result is shown'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/javascript-alerts',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-JA-003',
                        title: 'JavaScript Alerts - Display Prompt Dialog',
                        module: 'JavaScript Alerts',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to trigger a prompt dialog so that I can enter text input',
                        gherkinCriteria: {
                            given: 'Given I am on the JavaScript Alerts page',
                            when: 'When I click the button to trigger a prompt',
                            and: 'And I enter text in the prompt',
                            then: 'Then the entered text should be displayed'
                        },
                        objective: 'Verify that prompt dialog accepts input',
                        preconditions: ['User is on JavaScript Alerts page'],
                        testData: { buttonText: 'Click for JS Prompt', inputText: 'Test Input' },
                        steps: [
                            { step: 1, action: 'Navigate to JavaScript Alerts page', testData: '/practice/javascript-alerts', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click "Click for JS Prompt" button', testData: 'N/A', expectedResult: 'Prompt dialog appears' },
                            { step: 3, action: 'Enter text in prompt', testData: 'Test Input', expectedResult: 'Text is entered' },
                            { step: 4, action: 'Click OK on prompt', testData: 'N/A', expectedResult: 'Entered text is displayed on page' }
                        ],
                        postconditions: ['Prompt is displayed', 'Input text is shown'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/javascript-alerts',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'key-presses': {
                id: 'key-presses',
                title: 'Key Presses Test Cases',
                description: 'Test cases for Key Presses functionality, verifying keyboard input detection and display.',
                testCases: [
                    {
                        id: 'TC-KP-001',
                        title: 'Key Presses - Verify Key Press Detection',
                        module: 'Key Presses',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see which key I pressed so that I can verify keyboard input is detected',
                        gherkinCriteria: {
                            given: 'Given I am on the Key Presses page',
                            when: 'When I press a key',
                            and: 'And I observe the result',
                            then: 'Then the pressed key should be displayed'
                        },
                        objective: 'Verify that key press is detected and displayed',
                        preconditions: ['User is on Key Presses page', 'Input field is focused'],
                        testData: { key: 'A' },
                        steps: [
                            { step: 1, action: 'Navigate to Key Presses page', testData: '/practice/key-presses', expectedResult: 'Page loads with input field visible' },
                            { step: 2, action: 'Click on input field to focus', testData: 'N/A', expectedResult: 'Input field is focused' },
                            { step: 3, action: 'Press a key', testData: 'A', expectedResult: 'Pressed key is detected and displayed' },
                            { step: 4, action: 'Verify key is displayed', testData: 'N/A', expectedResult: 'Key "A" is shown in result area' }
                        ],
                        postconditions: ['Key press is detected', 'Result is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/key-presses',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-KP-002',
                        title: 'Key Presses - Verify Special Key Detection',
                        module: 'Key Presses',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see special keys detected so that I can verify all key types work',
                        gherkinCriteria: {
                            given: 'Given I am on the Key Presses page',
                            when: 'When I press a special key (e.g., Enter, Space, Tab)',
                            and: 'And I observe the result',
                            then: 'Then the special key should be displayed'
                        },
                        objective: 'Verify that special keys are detected correctly',
                        preconditions: ['User is on Key Presses page', 'Input field is focused'],
                        testData: { key: 'ENTER' },
                        steps: [
                            { step: 1, action: 'Navigate to Key Presses page', testData: '/practice/key-presses', expectedResult: 'Page loads' },
                            { step: 2, action: 'Focus on input field', testData: 'N/A', expectedResult: 'Input field is focused' },
                            { step: 3, action: 'Press Enter key', testData: 'ENTER', expectedResult: 'Enter key is detected' },
                            { step: 4, action: 'Verify special key is displayed', testData: 'N/A', expectedResult: 'Enter key is shown in result' }
                        ],
                        postconditions: ['Special key is detected', 'Result is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/key-presses',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'hovers': {
                id: 'hovers',
                title: 'Hovers Test Cases',
                description: 'Test cases for Hovers functionality, verifying hover effects and content display.',
                testCases: [
                    {
                        id: 'TC-HOV-001',
                        title: 'Hovers - Verify Hover Effect on Element',
                        module: 'Hovers',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see hover effects when I hover over elements so that I can see additional information',
                        gherkinCriteria: {
                            given: 'Given I am on the Hovers page',
                            when: 'When I hover over an element',
                            and: 'And I observe the element',
                            then: 'Then hover effect should be displayed'
                        },
                        objective: 'Verify that hovering over elements triggers hover effects',
                        preconditions: ['User is on Hovers page', 'Elements with hover effects are visible'],
                        testData: { elementIndex: 'First image' },
                        steps: [
                            { step: 1, action: 'Navigate to Hovers page', testData: '/practice/hovers', expectedResult: 'Page loads with hoverable elements visible' },
                            { step: 2, action: 'Hover over first image', testData: 'N/A', expectedResult: 'Hover effect is triggered' },
                            { step: 3, action: 'Verify additional content appears', testData: 'N/A', expectedResult: 'Additional information or effect is displayed' }
                        ],
                        postconditions: ['Hover effect is displayed', 'Content is visible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/hovers',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-HOV-002',
                        title: 'Hovers - Verify Hover Effect Disappears on Mouse Leave',
                        module: 'Hovers',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want hover effects to disappear when I move my mouse away so that the UI returns to normal state',
                        gherkinCriteria: {
                            given: 'Given I have hovered over an element on the Hovers page',
                            when: 'When I move my mouse away from the element',
                            and: 'And I observe the element',
                            then: 'Then the hover effect should disappear'
                        },
                        objective: 'Verify that hover effects disappear when mouse leaves element',
                        preconditions: ['User is on Hovers page', 'Hover effect is active'],
                        testData: { elementIndex: 'First image' },
                        steps: [
                            { step: 1, action: 'Navigate to Hovers page', testData: '/practice/hovers', expectedResult: 'Page loads' },
                            { step: 2, action: 'Hover over first image', testData: 'N/A', expectedResult: 'Hover effect appears' },
                            { step: 3, action: 'Move mouse away from element', testData: 'N/A', expectedResult: 'Hover effect disappears' },
                            { step: 4, action: 'Verify element returns to normal state', testData: 'N/A', expectedResult: 'Element shows default appearance' }
                        ],
                        postconditions: ['Hover effect is removed', 'Element returns to normal'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/hovers',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'inputs': {
                id: 'inputs',
                title: 'Inputs Test Cases',
                description: 'Test cases for Inputs functionality, verifying text input and number input handling.',
                testCases: [
                    {
                        id: 'TC-INP-001',
                        title: 'Inputs - Enter Text in Number Input Field',
                        module: 'Inputs',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to enter numbers in the number input field so that I can input numeric values',
                        gherkinCriteria: {
                            given: 'Given I am on the Inputs page',
                            when: 'When I enter a number in the number input field',
                            and: 'And I observe the input',
                            then: 'Then the number should be accepted and displayed'
                        },
                        objective: 'Verify that number input accepts numeric values',
                        preconditions: ['User is on Inputs page', 'Number input field is visible'],
                        testData: { inputValue: '123' },
                        steps: [
                            { step: 1, action: 'Navigate to Inputs page', testData: '/practice/inputs', expectedResult: 'Page loads with input field visible' },
                            { step: 2, action: 'Click on number input field', testData: 'N/A', expectedResult: 'Input field is focused' },
                            { step: 3, action: 'Enter a number', testData: '123', expectedResult: 'Number is entered and displayed' },
                            { step: 4, action: 'Verify number is displayed', testData: 'N/A', expectedResult: 'Value "123" is shown in input field' }
                        ],
                        postconditions: ['Number is entered', 'Value is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/inputs',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-INP-002',
                        title: 'Inputs - Verify Non-Numeric Input is Rejected',
                        module: 'Inputs',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want non-numeric input to be rejected in number field so that only valid numbers are accepted',
                        gherkinCriteria: {
                            given: 'Given I am on the Inputs page',
                            when: 'When I enter non-numeric characters in the number input field',
                            and: 'And I observe the input',
                            then: 'Then non-numeric input should be rejected or not displayed'
                        },
                        objective: 'Verify that number input rejects non-numeric characters',
                        preconditions: ['User is on Inputs page', 'Number input field is visible'],
                        testData: { inputValue: 'abc' },
                        steps: [
                            { step: 1, action: 'Navigate to Inputs page', testData: '/practice/inputs', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click on number input field', testData: 'N/A', expectedResult: 'Input field is focused' },
                            { step: 3, action: 'Enter non-numeric characters', testData: 'abc', expectedResult: 'Non-numeric input is rejected or not accepted' },
                            { step: 4, action: 'Verify input is rejected', testData: 'N/A', expectedResult: 'Field remains empty or shows validation error' }
                        ],
                        postconditions: ['Non-numeric input is rejected', 'Field maintains numeric format'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/inputs',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'drag-and-drop': {
                id: 'drag-and-drop',
                title: 'Drag and Drop Test Cases',
                description: 'Test cases for Drag and Drop functionality, verifying element dragging and dropping.',
                testCases: [
                    {
                        id: 'TC-DND-001',
                        title: 'Drag and Drop - Successfully Drag Element',
                        module: 'Drag and Drop',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to drag an element so that I can move it to a different location',
                        gherkinCriteria: {
                            given: 'Given I am on the Drag and Drop page',
                            when: 'When I drag an element',
                            and: 'And I drop it in the target area',
                            then: 'Then the element should be moved to the target location'
                        },
                        objective: 'Verify that drag and drop functionality works correctly',
                        preconditions: ['User is on Drag and Drop page', 'Draggable elements are visible'],
                        testData: { sourceElement: 'Element A', targetArea: 'Drop zone' },
                        steps: [
                            { step: 1, action: 'Navigate to Drag and Drop page', testData: '/practice/drag-and-drop', expectedResult: 'Page loads with draggable elements visible' },
                            { step: 2, action: 'Click and hold on source element', testData: 'Element A', expectedResult: 'Element is selected for dragging' },
                            { step: 3, action: 'Drag element to target area', testData: 'Drop zone', expectedResult: 'Element is dragged' },
                            { step: 4, action: 'Release mouse button to drop', testData: 'N/A', expectedResult: 'Element is dropped in target area' },
                            { step: 5, action: 'Verify element is moved', testData: 'N/A', expectedResult: 'Element appears in target location' }
                        ],
                        postconditions: ['Element is moved', 'Position is updated'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/drag-and-drop',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-DND-002',
                        title: 'Drag and Drop - Verify Drag Without Drop',
                        module: 'Drag and Drop',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to cancel dragging by releasing outside drop zone so that element returns to original position',
                        gherkinCriteria: {
                            given: 'Given I have started dragging an element',
                            when: 'When I release the mouse outside the drop zone',
                            and: 'And I observe the element',
                            then: 'Then the element should return to its original position'
                        },
                        objective: 'Verify that canceling drag returns element to original position',
                        preconditions: ['User is on Drag and Drop page', 'Element is being dragged'],
                        testData: { sourceElement: 'Element A' },
                        steps: [
                            { step: 1, action: 'Navigate to Drag and Drop page', testData: '/practice/drag-and-drop', expectedResult: 'Page loads' },
                            { step: 2, action: 'Start dragging element', testData: 'Element A', expectedResult: 'Element is being dragged' },
                            { step: 3, action: 'Move element outside drop zone', testData: 'N/A', expectedResult: 'Element follows mouse' },
                            { step: 4, action: 'Release mouse outside drop zone', testData: 'N/A', expectedResult: 'Element returns to original position' }
                        ],
                        postconditions: ['Element returns to original position', 'No changes are made'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/drag-and-drop',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'dynamic-content': {
                id: 'dynamic-content',
                title: 'Dynamic Content Test Cases',
                description: 'Test cases for Dynamic Content functionality, verifying content that changes on page load.',
                testCases: [
                    {
                        id: 'TC-DC-001',
                        title: 'Dynamic Content - Verify Content Loads',
                        module: 'Dynamic Content',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see dynamic content when the page loads so that I can view the content',
                        gherkinCriteria: {
                            given: 'Given I navigate to Dynamic Content page',
                            when: 'When the page loads',
                            and: 'And I observe the content',
                            then: 'Then dynamic content should be displayed'
                        },
                        objective: 'Verify that dynamic content is loaded and displayed',
                        preconditions: ['User navigates to Dynamic Content page'],
                        testData: { url: '/practice/dynamic-content' },
                        steps: [
                            { step: 1, action: 'Navigate to Dynamic Content page', testData: '/practice/dynamic-content', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Wait for content to load', testData: '2-3 seconds', expectedResult: 'Dynamic content appears' },
                            { step: 3, action: 'Verify content is displayed', testData: 'N/A', expectedResult: 'Dynamic content is visible on page' }
                        ],
                        postconditions: ['Content is loaded', 'Page displays dynamic elements'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/dynamic-content',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-DC-002',
                        title: 'Dynamic Content - Verify Content Changes on Refresh',
                        module: 'Dynamic Content',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see different content when I refresh the page so that I can verify content is dynamic',
                        gherkinCriteria: {
                            given: 'Given I have viewed the Dynamic Content page',
                            when: 'When I refresh the page',
                            and: 'And I observe the content',
                            then: 'Then the content should be different from previous load'
                        },
                        objective: 'Verify that content changes on page refresh',
                        preconditions: ['User is on Dynamic Content page', 'Content has been displayed'],
                        testData: { refreshCount: 'Multiple refreshes' },
                        steps: [
                            { step: 1, action: 'Navigate to Dynamic Content page', testData: '/practice/dynamic-content', expectedResult: 'Page loads with content' },
                            { step: 2, action: 'Note the current content', testData: 'N/A', expectedResult: 'Content is noted' },
                            { step: 3, action: 'Refresh the page', testData: 'F5 or Ctrl+R', expectedResult: 'Page reloads' },
                            { step: 4, action: 'Compare new content with previous', testData: 'N/A', expectedResult: 'Content is different from previous load' }
                        ],
                        postconditions: ['Content changes', 'Dynamic behavior is verified'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/dynamic-content',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'dynamic-loading': {
                id: 'dynamic-loading',
                title: 'Dynamic Loading Test Cases',
                description: 'Test cases for Dynamic Loading functionality, verifying content that loads after page load.',
                testCases: [
                    {
                        id: 'TC-DL-001',
                        title: 'Dynamic Loading - Verify Content Loads After Click',
                        module: 'Dynamic Loading',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to trigger content loading by clicking a button so that I can view dynamically loaded content',
                        gherkinCriteria: {
                            given: 'Given I am on the Dynamic Loading page',
                            when: 'When I click the button to load content',
                            and: 'And I wait for loading to complete',
                            then: 'Then the dynamically loaded content should be displayed'
                        },
                        objective: 'Verify that clicking button triggers dynamic content loading',
                        preconditions: ['User is on Dynamic Loading page', 'Load button is visible'],
                        testData: { buttonText: 'Start' },
                        steps: [
                            { step: 1, action: 'Navigate to Dynamic Loading page', testData: '/practice/dynamic-loading', expectedResult: 'Page loads with button visible' },
                            { step: 2, action: 'Click Start button', testData: 'N/A', expectedResult: 'Loading indicator appears' },
                            { step: 3, action: 'Wait for loading to complete', testData: '2-5 seconds', expectedResult: 'Loading completes' },
                            { step: 4, action: 'Verify content is displayed', testData: 'N/A', expectedResult: 'Dynamically loaded content is visible' }
                        ],
                        postconditions: ['Content is loaded', 'Loading indicator disappears'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/dynamic-loading',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-DL-002',
                        title: 'Dynamic Loading - Verify Loading Indicator Appears',
                        module: 'Dynamic Loading',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see a loading indicator while content loads so that I know the system is processing',
                        gherkinCriteria: {
                            given: 'Given I am on the Dynamic Loading page',
                            when: 'When I click the load button',
                            and: 'And content is loading',
                            then: 'Then a loading indicator should be displayed'
                        },
                        objective: 'Verify that loading indicator appears during content loading',
                        preconditions: ['User is on Dynamic Loading page'],
                        testData: { buttonText: 'Start' },
                        steps: [
                            { step: 1, action: 'Navigate to Dynamic Loading page', testData: '/practice/dynamic-loading', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click Start button', testData: 'N/A', expectedResult: 'Loading indicator appears immediately' },
                            { step: 3, action: 'Verify loading indicator is visible', testData: 'N/A', expectedResult: 'Loading spinner or message is displayed' }
                        ],
                        postconditions: ['Loading indicator is shown', 'User feedback is provided'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/dynamic-loading',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'file-download': {
                id: 'file-download',
                title: 'File Download Test Cases',
                description: 'Test cases for File Download functionality, verifying file download initiation and completion.',
                testCases: [
                    {
                        id: 'TC-FD-001',
                        title: 'File Download - Successfully Download File',
                        module: 'File Download',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to download a file by clicking a link so that I can save the file to my device',
                        gherkinCriteria: {
                            given: 'Given I am on the File Download page',
                            when: 'When I click on a file download link',
                            and: 'And the download completes',
                            then: 'Then the file should be downloaded to my device'
                        },
                        objective: 'Verify that clicking download link successfully downloads the file',
                        preconditions: ['User is on File Download page', 'Download links are visible'],
                        testData: { fileName: 'some-file.txt' },
                        steps: [
                            { step: 1, action: 'Navigate to File Download page', testData: '/practice/file-download', expectedResult: 'Page loads with download links visible' },
                            { step: 2, action: 'Click on a file download link', testData: 'some-file.txt', expectedResult: 'Download starts' },
                            { step: 3, action: 'Verify download dialog appears', testData: 'N/A', expectedResult: 'Browser download dialog is shown' },
                            { step: 4, action: 'Confirm download', testData: 'N/A', expectedResult: 'File is downloaded to default download location' }
                        ],
                        postconditions: ['File is downloaded', 'File is accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/file-download',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-FD-002',
                        title: 'File Download - Verify Multiple Files Can Be Downloaded',
                        module: 'File Download',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to download multiple files so that I can get all required files',
                        gherkinCriteria: {
                            given: 'Given I am on the File Download page',
                            when: 'When I click on multiple download links',
                            and: 'And downloads complete',
                            then: 'Then all files should be downloaded successfully'
                        },
                        objective: 'Verify that multiple files can be downloaded',
                        preconditions: ['User is on File Download page', 'Multiple download links are available'],
                        testData: { fileCount: '3 files' },
                        steps: [
                            { step: 1, action: 'Navigate to File Download page', testData: '/practice/file-download', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click on first download link', testData: 'File 1', expectedResult: 'First file download starts' },
                            { step: 3, action: 'Click on second download link', testData: 'File 2', expectedResult: 'Second file download starts' },
                            { step: 4, action: 'Click on third download link', testData: 'File 3', expectedResult: 'Third file download starts' },
                            { step: 5, action: 'Verify all downloads complete', testData: 'N/A', expectedResult: 'All three files are downloaded' }
                        ],
                        postconditions: ['Multiple files are downloaded', 'All downloads complete'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/file-download',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'forgot-password': {
                id: 'forgot-password',
                title: 'Forgot Password Test Cases',
                description: 'Test cases for Forgot Password functionality, verifying password reset process.',
                testCases: [
                    {
                        id: 'TC-FP-001',
                        title: 'Forgot Password - Submit Valid Email',
                        module: 'Forgot Password',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to submit my email for password reset so that I can receive reset instructions',
                        gherkinCriteria: {
                            given: 'Given I am on the Forgot Password page',
                            when: 'When I enter a valid email address',
                            and: 'And I click submit',
                            then: 'Then I should see a confirmation message'
                        },
                        objective: 'Verify that submitting valid email triggers password reset process',
                        preconditions: ['User is on Forgot Password page', 'Email input field is visible'],
                        testData: { email: 'user@example.com' },
                        steps: [
                            { step: 1, action: 'Navigate to Forgot Password page', testData: '/practice/forgot-password', expectedResult: 'Page loads with email input visible' },
                            { step: 2, action: 'Enter email address', testData: 'user@example.com', expectedResult: 'Email is entered' },
                            { step: 3, action: 'Click Retrieve password button', testData: 'N/A', expectedResult: 'Form is submitted' },
                            { step: 4, action: 'Verify confirmation message', testData: 'N/A', expectedResult: 'Confirmation message is displayed' }
                        ],
                        postconditions: ['Email is submitted', 'Confirmation is shown'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/forgot-password',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-FP-002',
                        title: 'Forgot Password - Submit Invalid Email',
                        module: 'Forgot Password',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see an error when I enter invalid email so that I can correct my input',
                        gherkinCriteria: {
                            given: 'Given I am on the Forgot Password page',
                            when: 'When I enter an invalid email address',
                            and: 'And I click submit',
                            then: 'Then I should see a validation error'
                        },
                        objective: 'Verify that invalid email is rejected',
                        preconditions: ['User is on Forgot Password page'],
                        testData: { email: 'invalid-email' },
                        steps: [
                            { step: 1, action: 'Navigate to Forgot Password page', testData: '/practice/forgot-password', expectedResult: 'Page loads' },
                            { step: 2, action: 'Enter invalid email', testData: 'invalid-email', expectedResult: 'Email is entered' },
                            { step: 3, action: 'Click Retrieve password button', testData: 'N/A', expectedResult: 'Validation error is displayed' },
                            { step: 4, action: 'Verify error message', testData: 'N/A', expectedResult: 'Error message indicates invalid email format' }
                        ],
                        postconditions: ['Error is displayed', 'Form is not submitted'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/forgot-password',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'horizontal-slider': {
                id: 'horizontal-slider',
                title: 'Horizontal Slider Test Cases',
                description: 'Test cases for Horizontal Slider functionality, verifying slider movement and value selection.',
                testCases: [
                    {
                        id: 'TC-HS-001',
                        title: 'Horizontal Slider - Move Slider to Right',
                        module: 'Horizontal Slider',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to move the slider to the right so that I can increase the value',
                        gherkinCriteria: {
                            given: 'Given I am on the Horizontal Slider page',
                            when: 'When I drag the slider to the right',
                            and: 'And I observe the value',
                            then: 'Then the value should increase'
                        },
                        objective: 'Verify that moving slider right increases the value',
                        preconditions: ['User is on Horizontal Slider page', 'Slider is visible'],
                        testData: { direction: 'Right', targetValue: '5' },
                        steps: [
                            { step: 1, action: 'Navigate to Horizontal Slider page', testData: '/practice/horizontal-slider', expectedResult: 'Page loads with slider visible' },
                            { step: 2, action: 'Note current slider value', testData: 'N/A', expectedResult: 'Current value is noted' },
                            { step: 3, action: 'Drag slider to the right', testData: 'N/A', expectedResult: 'Slider moves right' },
                            { step: 4, action: 'Verify value increases', testData: 'N/A', expectedResult: 'Slider value increases' }
                        ],
                        postconditions: ['Slider value is updated', 'New value is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/horizontal-slider',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-HS-002',
                        title: 'Horizontal Slider - Move Slider to Left',
                        module: 'Horizontal Slider',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to move the slider to the left so that I can decrease the value',
                        gherkinCriteria: {
                            given: 'Given I am on the Horizontal Slider page',
                            when: 'When I drag the slider to the left',
                            and: 'And I observe the value',
                            then: 'Then the value should decrease'
                        },
                        objective: 'Verify that moving slider left decreases the value',
                        preconditions: ['User is on Horizontal Slider page', 'Slider is at a value greater than minimum'],
                        testData: { direction: 'Left', targetValue: '0' },
                        steps: [
                            { step: 1, action: 'Navigate to Horizontal Slider page', testData: '/practice/horizontal-slider', expectedResult: 'Page loads' },
                            { step: 2, action: 'Note current slider value', testData: 'N/A', expectedResult: 'Current value is noted' },
                            { step: 3, action: 'Drag slider to the left', testData: 'N/A', expectedResult: 'Slider moves left' },
                            { step: 4, action: 'Verify value decreases', testData: 'N/A', expectedResult: 'Slider value decreases' }
                        ],
                        postconditions: ['Slider value is updated', 'New value is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/horizontal-slider',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-HS-003',
                        title: 'Horizontal Slider - Set Specific Value',
                        module: 'Horizontal Slider',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to set the slider to a specific value so that I can select an exact value',
                        gherkinCriteria: {
                            given: 'Given I am on the Horizontal Slider page',
                            when: 'When I move the slider to a specific position',
                            and: 'And I observe the value',
                            then: 'Then the slider should display the target value'
                        },
                        objective: 'Verify that slider can be set to a specific value',
                        preconditions: ['User is on Horizontal Slider page'],
                        testData: { targetValue: '3.5' },
                        steps: [
                            { step: 1, action: 'Navigate to Horizontal Slider page', testData: '/practice/horizontal-slider', expectedResult: 'Page loads' },
                            { step: 2, action: 'Move slider to target value', testData: '3.5', expectedResult: 'Slider is positioned' },
                            { step: 3, action: 'Verify slider shows target value', testData: 'N/A', expectedResult: 'Value "3.5" is displayed' }
                        ],
                        postconditions: ['Slider is set to target value', 'Value is accurate'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/horizontal-slider',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'infinite-scroll': {
                id: 'infinite-scroll',
                title: 'Infinite Scroll Test Cases',
                description: 'Test cases for Infinite Scroll functionality, verifying content loads as user scrolls.',
                testCases: [
                    {
                        id: 'TC-IS-001',
                        title: 'Infinite Scroll - Load More Content on Scroll',
                        module: 'Infinite Scroll',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want more content to load when I scroll down so that I can view additional content',
                        gherkinCriteria: {
                            given: 'Given I am on the Infinite Scroll page',
                            when: 'When I scroll down to the bottom',
                            and: 'And I wait for loading',
                            then: 'Then additional content should be loaded and displayed'
                        },
                        objective: 'Verify that scrolling triggers loading of additional content',
                        preconditions: ['User is on Infinite Scroll page', 'Initial content is displayed'],
                        testData: { scrollAction: 'Scroll to bottom' },
                        steps: [
                            { step: 1, action: 'Navigate to Infinite Scroll page', testData: '/practice/infinite-scroll', expectedResult: 'Page loads with initial content' },
                            { step: 2, action: 'Scroll down to bottom of page', testData: 'N/A', expectedResult: 'Page reaches bottom' },
                            { step: 3, action: 'Wait for content to load', testData: '2-3 seconds', expectedResult: 'Additional content loads' },
                            { step: 4, action: 'Verify new content is displayed', testData: 'N/A', expectedResult: 'New content appears below existing content' }
                        ],
                        postconditions: ['Additional content is loaded', 'Page is scrollable further'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/infinite-scroll',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-IS-002',
                        title: 'Infinite Scroll - Verify Multiple Scroll Loads',
                        module: 'Infinite Scroll',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want content to load multiple times as I scroll so that I can access all available content',
                        gherkinCriteria: {
                            given: 'Given I have scrolled and loaded content once',
                            when: 'When I scroll down again',
                            and: 'And I wait for loading',
                            then: 'Then more content should be loaded again'
                        },
                        objective: 'Verify that infinite scroll works for multiple scrolls',
                        preconditions: ['User is on Infinite Scroll page', 'Content has been loaded once'],
                        testData: { scrollCount: '3 times' },
                        steps: [
                            { step: 1, action: 'Navigate to Infinite Scroll page', testData: '/practice/infinite-scroll', expectedResult: 'Page loads' },
                            { step: 2, action: 'Scroll down first time', testData: 'N/A', expectedResult: 'First batch of content loads' },
                            { step: 3, action: 'Scroll down second time', testData: 'N/A', expectedResult: 'Second batch of content loads' },
                            { step: 4, action: 'Scroll down third time', testData: 'N/A', expectedResult: 'Third batch of content loads' },
                            { step: 5, action: 'Verify all content is displayed', testData: 'N/A', expectedResult: 'All loaded content is visible' }
                        ],
                        postconditions: ['Multiple content loads occur', 'All content is accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/infinite-scroll',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'notification-messages': {
                id: 'notification-messages',
                title: 'Notification Messages Test Cases',
                description: 'Test cases for Notification Messages functionality, verifying notification display and types.',
                testCases: [
                    {
                        id: 'TC-NM-001',
                        title: 'Notification Messages - Display Success Notification',
                        module: 'Notification Messages',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see success notifications so that I know actions completed successfully',
                        gherkinCriteria: {
                            given: 'Given I am on the Notification Messages page',
                            when: 'When I click to load notifications',
                            and: 'And a success notification appears',
                            then: 'Then I should see a success message displayed'
                        },
                        objective: 'Verify that success notifications are displayed correctly',
                        preconditions: ['User is on Notification Messages page', 'Load link is visible'],
                        testData: { notificationType: 'Success' },
                        steps: [
                            { step: 1, action: 'Navigate to Notification Messages page', testData: '/practice/notification-messages', expectedResult: 'Page loads with load link visible' },
                            { step: 2, action: 'Click "Click here" link', testData: 'N/A', expectedResult: 'Notification appears' },
                            { step: 3, action: 'Verify notification type', testData: 'N/A', expectedResult: 'Success notification is displayed' },
                            { step: 4, action: 'Verify notification message', testData: 'N/A', expectedResult: 'Success message text is visible' }
                        ],
                        postconditions: ['Notification is displayed', 'Message is readable'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/notification-messages',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-NM-002',
                        title: 'Notification Messages - Display Error Notification',
                        module: 'Notification Messages',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see error notifications so that I know when actions fail',
                        gherkinCriteria: {
                            given: 'Given I am on the Notification Messages page',
                            when: 'When I click to load notifications',
                            and: 'And an error notification appears',
                            then: 'Then I should see an error message displayed'
                        },
                        objective: 'Verify that error notifications are displayed correctly',
                        preconditions: ['User is on Notification Messages page'],
                        testData: { notificationType: 'Error' },
                        steps: [
                            { step: 1, action: 'Navigate to Notification Messages page', testData: '/practice/notification-messages', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click "Click here" link multiple times', testData: 'N/A', expectedResult: 'Different notifications appear' },
                            { step: 3, action: 'Wait for error notification', testData: 'N/A', expectedResult: 'Error notification appears' },
                            { step: 4, action: 'Verify error notification', testData: 'N/A', expectedResult: 'Error message is displayed with error styling' }
                        ],
                        postconditions: ['Error notification is displayed', 'Message indicates error'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/notification-messages',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-NM-003',
                        title: 'Notification Messages - Verify Notification Auto-Dismiss',
                        module: 'Notification Messages',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Minor',
                        acceptanceCriteria: 'As a user, I want notifications to disappear automatically so that they do not clutter the screen',
                        gherkinCriteria: {
                            given: 'Given a notification is displayed',
                            when: 'When I wait for the timeout period',
                            and: 'And I observe the notification',
                            then: 'Then the notification should disappear automatically'
                        },
                        objective: 'Verify that notifications auto-dismiss after timeout',
                        preconditions: ['User is on Notification Messages page', 'Notification is displayed'],
                        testData: { timeout: '5 seconds' },
                        steps: [
                            { step: 1, action: 'Navigate to Notification Messages page', testData: '/practice/notification-messages', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click "Click here" to show notification', testData: 'N/A', expectedResult: 'Notification appears' },
                            { step: 3, action: 'Wait for timeout period', testData: '5 seconds', expectedResult: 'Timeout period elapses' },
                            { step: 4, action: 'Verify notification disappears', testData: 'N/A', expectedResult: 'Notification is removed from page' }
                        ],
                        postconditions: ['Notification is dismissed', 'Page returns to normal'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/notification-messages',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'status-codes': {
                id: 'status-codes',
                title: 'Status Codes Test Cases',
                description: 'Test cases for Status Codes functionality, verifying HTTP status code responses.',
                testCases: [
                    {
                        id: 'TC-SC-001',
                        title: 'Status Codes - Verify 200 Status Code',
                        module: 'Status Codes',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see a 200 status code response so that I know the request was successful',
                        gherkinCriteria: {
                            given: 'Given I am on the Status Codes page',
                            when: 'When I click on 200 status code link',
                            and: 'And the page loads',
                            then: 'Then I should see a 200 OK status code'
                        },
                        objective: 'Verify that 200 status code is returned correctly',
                        preconditions: ['User is on Status Codes page', 'Status code links are visible'],
                        testData: { statusCode: '200' },
                        steps: [
                            { step: 1, action: 'Navigate to Status Codes page', testData: '/practice/status-codes', expectedResult: 'Page loads with status code links visible' },
                            { step: 2, action: 'Click on "200" link', testData: 'N/A', expectedResult: 'Page navigates or displays status' },
                            { step: 3, action: 'Verify 200 status code', testData: 'N/A', expectedResult: '200 OK status code is displayed or returned' }
                        ],
                        postconditions: ['200 status is returned', 'Success is indicated'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/status-codes',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-SC-002',
                        title: 'Status Codes - Verify 404 Status Code',
                        module: 'Status Codes',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see a 404 status code response so that I know the resource was not found',
                        gherkinCriteria: {
                            given: 'Given I am on the Status Codes page',
                            when: 'When I click on 404 status code link',
                            and: 'And the response is received',
                            then: 'Then I should see a 404 Not Found status code'
                        },
                        objective: 'Verify that 404 status code is returned correctly',
                        preconditions: ['User is on Status Codes page'],
                        testData: { statusCode: '404' },
                        steps: [
                            { step: 1, action: 'Navigate to Status Codes page', testData: '/practice/status-codes', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click on "404" link', testData: 'N/A', expectedResult: '404 response is returned' },
                            { step: 3, action: 'Verify 404 status code', testData: 'N/A', expectedResult: '404 Not Found status code is displayed' }
                        ],
                        postconditions: ['404 status is returned', 'Not found is indicated'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/status-codes',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-SC-003',
                        title: 'Status Codes - Verify 500 Status Code',
                        module: 'Status Codes',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see a 500 status code response so that I know there was a server error',
                        gherkinCriteria: {
                            given: 'Given I am on the Status Codes page',
                            when: 'When I click on 500 status code link',
                            and: 'And the response is received',
                            then: 'Then I should see a 500 Internal Server Error status code'
                        },
                        objective: 'Verify that 500 status code is returned correctly',
                        preconditions: ['User is on Status Codes page'],
                        testData: { statusCode: '500' },
                        steps: [
                            { step: 1, action: 'Navigate to Status Codes page', testData: '/practice/status-codes', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click on "500" link', testData: 'N/A', expectedResult: '500 response is returned' },
                            { step: 3, action: 'Verify 500 status code', testData: 'N/A', expectedResult: '500 Internal Server Error status code is displayed' }
                        ],
                        postconditions: ['500 status is returned', 'Server error is indicated'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/status-codes',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'challenging-dom': {
                id: 'challenging-dom',
                title: 'Challenging DOM Test Cases',
                description: 'Test cases for Challenging DOM functionality, verifying complex DOM interactions and element selection.',
                testCases: [
                    {
                        id: 'TC-CDOM-001',
                        title: 'Challenging DOM - Verify Page Loads with Complex Elements',
                        module: 'Challenging DOM',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see the Challenging DOM page load so that I can interact with complex elements',
                        gherkinCriteria: {
                            given: 'Given I navigate to Challenging DOM page',
                            when: 'When the page loads',
                            and: 'And I observe the elements',
                            then: 'Then complex DOM elements should be displayed'
                        },
                        objective: 'Verify that Challenging DOM page loads with all complex elements',
                        preconditions: ['User navigates to Challenging DOM page'],
                        testData: { url: '/practice/challenging-dom' },
                        steps: [
                            { step: 1, action: 'Navigate to Challenging DOM page', testData: '/practice/challenging-dom', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Verify complex elements are displayed', testData: 'N/A', expectedResult: 'All DOM elements are visible and rendered correctly' }
                        ],
                        postconditions: ['Page is loaded', 'Elements are accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/challenging-dom',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-CDOM-002',
                        title: 'Challenging DOM - Click Button and Verify Action',
                        module: 'Challenging DOM',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to click buttons on the Challenging DOM page so that I can verify interactions work',
                        gherkinCriteria: {
                            given: 'Given I am on the Challenging DOM page',
                            when: 'When I click on a button',
                            and: 'And I observe the result',
                            then: 'Then the button action should execute'
                        },
                        objective: 'Verify that button clicks work correctly on Challenging DOM page',
                        preconditions: ['User is on Challenging DOM page', 'Buttons are visible'],
                        testData: { buttonType: 'Any button' },
                        steps: [
                            { step: 1, action: 'Navigate to Challenging DOM page', testData: '/practice/challenging-dom', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click on a button', testData: 'N/A', expectedResult: 'Button click is registered' },
                            { step: 3, action: 'Verify button action executes', testData: 'N/A', expectedResult: 'Expected action occurs or page updates' }
                        ],
                        postconditions: ['Button action is executed', 'Page responds correctly'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/challenging-dom',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'disappearing-elements': {
                id: 'disappearing-elements',
                title: 'Disappearing Elements Test Cases',
                description: 'Test cases for Disappearing Elements functionality, verifying elements that appear and disappear dynamically.',
                testCases: [
                    {
                        id: 'TC-DE-001',
                        title: 'Disappearing Elements - Verify Element Appears',
                        module: 'Disappearing Elements',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see elements appear on the page so that I can interact with them',
                        gherkinCriteria: {
                            given: 'Given I am on the Disappearing Elements page',
                            when: 'When the page loads',
                            and: 'And I observe the elements',
                            then: 'Then elements should be displayed'
                        },
                        objective: 'Verify that elements are displayed on page load',
                        preconditions: ['User navigates to Disappearing Elements page'],
                        testData: { url: '/practice/disappearing-elements' },
                        steps: [
                            { step: 1, action: 'Navigate to Disappearing Elements page', testData: '/practice/disappearing-elements', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Verify elements are visible', testData: 'N/A', expectedResult: 'Elements are displayed on the page' }
                        ],
                        postconditions: ['Elements are visible', 'Page is functional'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/disappearing-elements',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-DE-002',
                        title: 'Disappearing Elements - Verify Element Disappears on Refresh',
                        module: 'Disappearing Elements',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see elements disappear when I refresh so that I can verify dynamic behavior',
                        gherkinCriteria: {
                            given: 'Given I have viewed elements on the Disappearing Elements page',
                            when: 'When I refresh the page',
                            and: 'And I observe the elements',
                            then: 'Then some elements may disappear'
                        },
                        objective: 'Verify that elements can disappear on page refresh',
                        preconditions: ['User is on Disappearing Elements page', 'Elements are visible'],
                        testData: { refreshAction: 'Page refresh' },
                        steps: [
                            { step: 1, action: 'Navigate to Disappearing Elements page', testData: '/practice/disappearing-elements', expectedResult: 'Page loads' },
                            { step: 2, action: 'Note visible elements', testData: 'N/A', expectedResult: 'Elements are noted' },
                            { step: 3, action: 'Refresh the page', testData: 'F5 or Ctrl+R', expectedResult: 'Page reloads' },
                            { step: 4, action: 'Compare elements after refresh', testData: 'N/A', expectedResult: 'Some elements may be missing or different' }
                        ],
                        postconditions: ['Elements may disappear', 'Dynamic behavior is verified'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/disappearing-elements',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'dynamic-controls': {
                id: 'dynamic-controls',
                title: 'Dynamic Controls Test Cases',
                description: 'Test cases for Dynamic Controls functionality, verifying controls that appear dynamically.',
                testCases: [
                    {
                        id: 'TC-DCTRL-001',
                        title: 'Dynamic Controls - Enable Control After Click',
                        module: 'Dynamic Controls',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to enable controls by clicking a button so that I can interact with them',
                        gherkinCriteria: {
                            given: 'Given I am on the Dynamic Controls page',
                            when: 'When I click the enable button',
                            and: 'And I observe the control',
                            then: 'Then the control should become enabled'
                        },
                        objective: 'Verify that clicking enable button enables the control',
                        preconditions: ['User is on Dynamic Controls page', 'Enable button is visible'],
                        testData: { buttonText: 'Enable' },
                        steps: [
                            { step: 1, action: 'Navigate to Dynamic Controls page', testData: '/practice/dynamic-controls', expectedResult: 'Page loads with enable button visible' },
                            { step: 2, action: 'Verify control is disabled', testData: 'N/A', expectedResult: 'Control is disabled initially' },
                            { step: 3, action: 'Click Enable button', testData: 'N/A', expectedResult: 'Control becomes enabled' },
                            { step: 4, action: 'Verify control is enabled', testData: 'N/A', expectedResult: 'Control can be interacted with' }
                        ],
                        postconditions: ['Control is enabled', 'User can interact'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/dynamic-controls',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-DCTRL-002',
                        title: 'Dynamic Controls - Remove Control After Click',
                        module: 'Dynamic Controls',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to remove controls by clicking a button so that controls disappear',
                        gherkinCriteria: {
                            given: 'Given I am on the Dynamic Controls page',
                            when: 'When I click the remove button',
                            and: 'And I observe the page',
                            then: 'Then the control should be removed'
                        },
                        objective: 'Verify that clicking remove button removes the control',
                        preconditions: ['User is on Dynamic Controls page', 'Remove button is visible'],
                        testData: { buttonText: 'Remove' },
                        steps: [
                            { step: 1, action: 'Navigate to Dynamic Controls page', testData: '/practice/dynamic-controls', expectedResult: 'Page loads' },
                            { step: 2, action: 'Verify control is visible', testData: 'N/A', expectedResult: 'Control is displayed' },
                            { step: 3, action: 'Click Remove button', testData: 'N/A', expectedResult: 'Control is removed from page' },
                            { step: 4, action: 'Verify control is gone', testData: 'N/A', expectedResult: 'Control no longer exists on page' }
                        ],
                        postconditions: ['Control is removed', 'Page updates correctly'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/dynamic-controls',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'entry-ad': {
                id: 'entry-ad',
                title: 'Entry Ad Test Cases',
                description: 'Test cases for Entry Ad functionality, verifying modal ad display and dismissal.',
                testCases: [
                    {
                        id: 'TC-EA-001',
                        title: 'Entry Ad - Verify Modal Ad Appears on Page Load',
                        module: 'Entry Ad',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see an entry ad when I first visit the page so that I can view promotional content',
                        gherkinCriteria: {
                            given: 'Given I navigate to Entry Ad page',
                            when: 'When the page loads',
                            and: 'And I observe the page',
                            then: 'Then an entry ad modal should appear'
                        },
                        objective: 'Verify that entry ad modal appears on page load',
                        preconditions: ['User navigates to Entry Ad page for first time'],
                        testData: { url: '/practice/entry-ad' },
                        steps: [
                            { step: 1, action: 'Navigate to Entry Ad page', testData: '/practice/entry-ad', expectedResult: 'Page loads and modal ad appears' },
                            { step: 2, action: 'Verify modal ad is displayed', testData: 'N/A', expectedResult: 'Entry ad modal is visible' },
                            { step: 3, action: 'Verify ad content is visible', testData: 'N/A', expectedResult: 'Ad content and close button are displayed' }
                        ],
                        postconditions: ['Modal ad is displayed', 'User can interact with ad'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/entry-ad',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-EA-002',
                        title: 'Entry Ad - Close Modal Ad',
                        module: 'Entry Ad',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to close the entry ad so that I can access the page content',
                        gherkinCriteria: {
                            given: 'Given the entry ad modal is displayed',
                            when: 'When I click the close button',
                            and: 'And I observe the page',
                            then: 'Then the modal should close and page content should be visible'
                        },
                        objective: 'Verify that clicking close button dismisses the modal',
                        preconditions: ['User is on Entry Ad page', 'Modal ad is displayed'],
                        testData: { closeButton: 'Close' },
                        steps: [
                            { step: 1, action: 'Navigate to Entry Ad page', testData: '/practice/entry-ad', expectedResult: 'Modal ad appears' },
                            { step: 2, action: 'Click close button', testData: 'N/A', expectedResult: 'Modal ad closes' },
                            { step: 3, action: 'Verify modal is dismissed', testData: 'N/A', expectedResult: 'Modal is no longer visible' },
                            { step: 4, action: 'Verify page content is accessible', testData: 'N/A', expectedResult: 'Page content is visible and accessible' }
                        ],
                        postconditions: ['Modal is closed', 'Page content is accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/entry-ad',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'floating-menu': {
                id: 'floating-menu',
                title: 'Floating Menu Test Cases',
                description: 'Test cases for Floating Menu functionality, verifying floating menu visibility and interaction.',
                testCases: [
                    {
                        id: 'TC-FM-001',
                        title: 'Floating Menu - Verify Menu is Visible on Scroll',
                        module: 'Floating Menu',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see the floating menu when I scroll so that I can access navigation',
                        gherkinCriteria: {
                            given: 'Given I am on the Floating Menu page',
                            when: 'When I scroll down the page',
                            and: 'And I observe the menu',
                            then: 'Then the floating menu should remain visible'
                        },
                        objective: 'Verify that floating menu stays visible during scroll',
                        preconditions: ['User is on Floating Menu page', 'Page is scrollable'],
                        testData: { scrollAction: 'Scroll down' },
                        steps: [
                            { step: 1, action: 'Navigate to Floating Menu page', testData: '/practice/floating-menu', expectedResult: 'Page loads with floating menu visible' },
                            { step: 2, action: 'Scroll down the page', testData: 'N/A', expectedResult: 'Page scrolls' },
                            { step: 3, action: 'Verify floating menu remains visible', testData: 'N/A', expectedResult: 'Floating menu stays visible during scroll' }
                        ],
                        postconditions: ['Menu remains visible', 'Navigation is accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/floating-menu',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-FM-002',
                        title: 'Floating Menu - Click Menu Link',
                        module: 'Floating Menu',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to click links in the floating menu so that I can navigate',
                        gherkinCriteria: {
                            given: 'Given I am on the Floating Menu page',
                            when: 'When I click a link in the floating menu',
                            and: 'And the navigation occurs',
                            then: 'Then I should be navigated to the target section'
                        },
                        objective: 'Verify that floating menu links work correctly',
                        preconditions: ['User is on Floating Menu page', 'Floating menu is visible'],
                        testData: { menuLink: 'Any menu link' },
                        steps: [
                            { step: 1, action: 'Navigate to Floating Menu page', testData: '/practice/floating-menu', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click on a menu link', testData: 'N/A', expectedResult: 'Navigation occurs' },
                            { step: 3, action: 'Verify navigation works', testData: 'N/A', expectedResult: 'Page scrolls to target section or navigates' }
                        ],
                        postconditions: ['Navigation occurs', 'Target section is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/floating-menu',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'redirect-link': {
                id: 'redirect-link',
                title: 'Redirect Link Test Cases',
                description: 'Test cases for Redirect Link functionality, verifying link redirection behavior.',
                testCases: [
                    {
                        id: 'TC-RL-001',
                        title: 'Redirect Link - Click Redirect Link',
                        module: 'Redirect Link',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to click a redirect link so that I am redirected to the target page',
                        gherkinCriteria: {
                            given: 'Given I am on the Redirect Link page',
                            when: 'When I click the redirect link',
                            and: 'And the redirect occurs',
                            then: 'Then I should be redirected to the target page'
                        },
                        objective: 'Verify that clicking redirect link performs redirection',
                        preconditions: ['User is on Redirect Link page', 'Redirect link is visible'],
                        testData: { linkText: 'here' },
                        steps: [
                            { step: 1, action: 'Navigate to Redirect Link page', testData: '/practice/redirect-link', expectedResult: 'Page loads with redirect link visible' },
                            { step: 2, action: 'Click on redirect link', testData: 'N/A', expectedResult: 'Redirect occurs' },
                            { step: 3, action: 'Verify redirection', testData: 'N/A', expectedResult: 'User is redirected to target page' }
                        ],
                        postconditions: ['Redirect occurs', 'Target page is loaded'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/redirect-link',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-RL-002',
                        title: 'Redirect Link - Verify Redirect Delay',
                        module: 'Redirect Link',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Minor',
                        acceptanceCriteria: 'As a user, I want to see a delay before redirect so that I know redirection is happening',
                        gherkinCriteria: {
                            given: 'Given I have clicked the redirect link',
                            when: 'When I observe the page',
                            and: 'And the redirect is processing',
                            then: 'Then there should be a brief delay before redirect'
                        },
                        objective: 'Verify that redirect has appropriate delay',
                        preconditions: ['User is on Redirect Link page'],
                        testData: { delay: '2-3 seconds' },
                        steps: [
                            { step: 1, action: 'Navigate to Redirect Link page', testData: '/practice/redirect-link', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click redirect link', testData: 'N/A', expectedResult: 'Redirect process starts' },
                            { step: 3, action: 'Observe redirect delay', testData: 'N/A', expectedResult: 'Brief delay occurs before redirect' }
                        ],
                        postconditions: ['Delay is observed', 'Redirect completes'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/redirect-link',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'sortable-data-tables': {
                id: 'sortable-data-tables',
                title: 'Sortable Data Tables Test Cases',
                description: 'Test cases for Sortable Data Tables functionality, verifying table sorting capabilities.',
                testCases: [
                    {
                        id: 'TC-SDT-001',
                        title: 'Sortable Data Tables - Sort Column Ascending',
                        module: 'Sortable Data Tables',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to sort a table column in ascending order so that I can organize data',
                        gherkinCriteria: {
                            given: 'Given I am on the Sortable Data Tables page',
                            when: 'When I click on a column header',
                            and: 'And the table sorts',
                            then: 'Then the column should be sorted in ascending order'
                        },
                        objective: 'Verify that clicking column header sorts data ascending',
                        preconditions: ['User is on Sortable Data Tables page', 'Table is displayed'],
                        testData: { column: 'Last Name' },
                        steps: [
                            { step: 1, action: 'Navigate to Sortable Data Tables page', testData: '/practice/sortable-data-tables', expectedResult: 'Page loads with table visible' },
                            { step: 2, action: 'Click on column header', testData: 'Last Name', expectedResult: 'Column is sorted ascending' },
                            { step: 3, action: 'Verify data is sorted', testData: 'N/A', expectedResult: 'Rows are sorted in ascending order' }
                        ],
                        postconditions: ['Data is sorted', 'Sort order is correct'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/sortable-data-tables',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-SDT-002',
                        title: 'Sortable Data Tables - Sort Column Descending',
                        module: 'Sortable Data Tables',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to sort a table column in descending order so that I can reverse the sort',
                        gherkinCriteria: {
                            given: 'Given I have sorted a column ascending',
                            when: 'When I click the column header again',
                            and: 'And the table sorts',
                            then: 'Then the column should be sorted in descending order'
                        },
                        objective: 'Verify that clicking column header again sorts descending',
                        preconditions: ['User is on Sortable Data Tables page', 'Column is sorted ascending'],
                        testData: { column: 'Last Name' },
                        steps: [
                            { step: 1, action: 'Navigate to Sortable Data Tables page', testData: '/practice/sortable-data-tables', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click column header to sort ascending', testData: 'Last Name', expectedResult: 'Column sorts ascending' },
                            { step: 3, action: 'Click column header again', testData: 'Last Name', expectedResult: 'Column sorts descending' },
                            { step: 4, action: 'Verify data is sorted descending', testData: 'N/A', expectedResult: 'Rows are sorted in descending order' }
                        ],
                        postconditions: ['Data is sorted descending', 'Sort order is reversed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/sortable-data-tables',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-SDT-003',
                        title: 'Sortable Data Tables - Sort Multiple Columns',
                        module: 'Sortable Data Tables',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to sort different columns so that I can organize data by different criteria',
                        gherkinCriteria: {
                            given: 'Given I am on the Sortable Data Tables page',
                            when: 'When I click on different column headers',
                            and: 'And I observe the table',
                            then: 'Then each column should sort independently'
                        },
                        objective: 'Verify that multiple columns can be sorted',
                        preconditions: ['User is on Sortable Data Tables page'],
                        testData: { columns: ['Last Name', 'First Name', 'Email'] },
                        steps: [
                            { step: 1, action: 'Navigate to Sortable Data Tables page', testData: '/practice/sortable-data-tables', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click on Last Name column', testData: 'N/A', expectedResult: 'Last Name column sorts' },
                            { step: 3, action: 'Click on First Name column', testData: 'N/A', expectedResult: 'First Name column sorts' },
                            { step: 4, action: 'Click on Email column', testData: 'N/A', expectedResult: 'Email column sorts' },
                            { step: 5, action: 'Verify all columns can be sorted', testData: 'N/A', expectedResult: 'Each column sorts independently' }
                        ],
                        postconditions: ['Multiple columns are sortable', 'Sorting works for all columns'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/sortable-data-tables',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'typos': {
                id: 'typos',
                title: 'Typos Test Cases',
                description: 'Test cases for Typos page, verifying typo detection and content accuracy.',
                testCases: [
                    {
                        id: 'TC-TYP-001',
                        title: 'Typos - Verify Page Loads',
                        module: 'Typos',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see the Typos page load so that I can view the content',
                        gherkinCriteria: {
                            given: 'Given I navigate to Typos page',
                            when: 'When the page loads',
                            and: 'And I observe the content',
                            then: 'Then the page content should be displayed'
                        },
                        objective: 'Verify that Typos page loads successfully',
                        preconditions: ['User navigates to Typos page'],
                        testData: { url: '/practice/typos' },
                        steps: [
                            { step: 1, action: 'Navigate to Typos page', testData: '/practice/typos', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Verify content is displayed', testData: 'N/A', expectedResult: 'Page content is visible' }
                        ],
                        postconditions: ['Page is loaded', 'Content is accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/typos',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-TYP-002',
                        title: 'Typos - Verify Typo Detection',
                        module: 'Typos',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Minor',
                        acceptanceCriteria: 'As a tester, I want to identify typos in the content so that I can verify content accuracy',
                        gherkinCriteria: {
                            given: 'Given I am on the Typos page',
                            when: 'When I read the content',
                            and: 'And I check for spelling errors',
                            then: 'Then I should be able to identify any typos present'
                        },
                        objective: 'Verify that typos can be identified in the content',
                        preconditions: ['User is on Typos page', 'Content is displayed'],
                        testData: { contentReview: 'Read all text' },
                        steps: [
                            { step: 1, action: 'Navigate to Typos page', testData: '/practice/typos', expectedResult: 'Page loads' },
                            { step: 2, action: 'Read through the content', testData: 'N/A', expectedResult: 'Content is read' },
                            { step: 3, action: 'Identify any typos', testData: 'N/A', expectedResult: 'Typos are identified if present' },
                            { step: 4, action: 'Document findings', testData: 'N/A', expectedResult: 'Typos are documented' }
                        ],
                        postconditions: ['Typos are identified', 'Findings are documented'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/typos',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'context-menu': {
                id: 'context-menu',
                title: 'Context Menu Test Cases',
                description: 'Test cases for Context Menu functionality, verifying right-click context menu display.',
                testCases: [
                    {
                        id: 'TC-CM-001',
                        title: 'Context Menu - Right-Click to Display Menu',
                        module: 'Context Menu',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to right-click to see a context menu so that I can access context options',
                        gherkinCriteria: {
                            given: 'Given I am on the Context Menu page',
                            when: 'When I right-click on the context menu area',
                            and: 'And I observe the menu',
                            then: 'Then a context menu should appear'
                        },
                        objective: 'Verify that right-click displays context menu',
                        preconditions: ['User is on Context Menu page', 'Context menu area is visible'],
                        testData: { action: 'Right-click' },
                        steps: [
                            { step: 1, action: 'Navigate to Context Menu page', testData: '/practice/context-menu', expectedResult: 'Page loads with context menu area visible' },
                            { step: 2, action: 'Right-click on context menu area', testData: 'N/A', expectedResult: 'Context menu appears' },
                            { step: 3, action: 'Verify menu is displayed', testData: 'N/A', expectedResult: 'Context menu options are visible' }
                        ],
                        postconditions: ['Context menu is displayed', 'Menu options are accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/context-menu',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-CM-002',
                        title: 'Context Menu - Verify JavaScript Alert on Menu Click',
                        module: 'Context Menu',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see an alert when I click a context menu option so that I know the action was triggered',
                        gherkinCriteria: {
                            given: 'Given the context menu is displayed',
                            when: 'When I click on a menu option',
                            and: 'And an alert appears',
                            then: 'Then I should see a JavaScript alert'
                        },
                        objective: 'Verify that clicking context menu option triggers alert',
                        preconditions: ['User is on Context Menu page', 'Context menu is displayed'],
                        testData: { menuOption: 'Any option' },
                        steps: [
                            { step: 1, action: 'Navigate to Context Menu page', testData: '/practice/context-menu', expectedResult: 'Page loads' },
                            { step: 2, action: 'Right-click to show context menu', testData: 'N/A', expectedResult: 'Menu appears' },
                            { step: 3, action: 'Click on a menu option', testData: 'N/A', expectedResult: 'JavaScript alert appears' },
                            { step: 4, action: 'Verify alert message', testData: 'N/A', expectedResult: 'Alert displays expected message' }
                        ],
                        postconditions: ['Alert is displayed', 'Action is triggered'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/context-menu',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'digest-auth': {
                id: 'digest-auth',
                title: 'Digest Authentication Test Cases',
                description: 'Test cases for Digest Authentication functionality, verifying authentication with digest credentials.',
                testCases: [
                    {
                        id: 'TC-DA-001',
                        title: 'Digest Auth - Successful Authentication with Valid Credentials',
                        module: 'Digest Authentication',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to authenticate with valid digest credentials so that I can access protected content',
                        gherkinCriteria: {
                            given: 'Given I am attempting to access Digest Auth page',
                            when: 'When I enter valid username and password (admin/admin)',
                            and: 'And I submit the credentials',
                            then: 'Then I should be granted access to the protected content'
                        },
                        objective: 'Verify that valid digest credentials grant access',
                        preconditions: ['User navigates to Digest Auth page', 'Authentication dialog appears'],
                        testData: { username: 'admin', password: 'admin' },
                        steps: [
                            { step: 1, action: 'Navigate to Digest Auth page', testData: '/practice/digest-auth', expectedResult: 'Authentication dialog appears' },
                            { step: 2, action: 'Enter username', testData: 'admin', expectedResult: 'Username is entered' },
                            { step: 3, action: 'Enter password', testData: 'admin', expectedResult: 'Password is entered' },
                            { step: 4, action: 'Click OK or Submit', testData: 'N/A', expectedResult: 'User is authenticated and protected content is displayed' }
                        ],
                        postconditions: ['User is authenticated', 'Protected content is accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/digest-auth',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-DA-002',
                        title: 'Digest Auth - Authentication Failure with Invalid Credentials',
                        module: 'Digest Authentication',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see an authentication error when I enter invalid credentials so that I know my credentials are incorrect',
                        gherkinCriteria: {
                            given: 'Given I am attempting to access Digest Auth page',
                            when: 'When I enter invalid username or password',
                            and: 'And I submit the credentials',
                            then: 'Then I should see an authentication error and access should be denied'
                        },
                        objective: 'Verify that invalid digest credentials are rejected',
                        preconditions: ['User navigates to Digest Auth page', 'Authentication dialog appears'],
                        testData: { username: 'invalid', password: 'wrong' },
                        steps: [
                            { step: 1, action: 'Navigate to Digest Auth page', testData: '/practice/digest-auth', expectedResult: 'Authentication dialog appears' },
                            { step: 2, action: 'Enter invalid username', testData: 'invalid', expectedResult: 'Username is entered' },
                            { step: 3, action: 'Enter invalid password', testData: 'wrong', expectedResult: 'Password is entered' },
                            { step: 4, action: 'Click OK or Submit', testData: 'N/A', expectedResult: 'Authentication fails and error is displayed' }
                        ],
                        postconditions: ['Authentication fails', 'Access is denied'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/digest-auth',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'exit-intent': {
                id: 'exit-intent',
                title: 'Exit Intent Test Cases',
                description: 'Test cases for Exit Intent functionality, verifying modal display when mouse leaves viewport.',
                testCases: [
                    {
                        id: 'TC-EI-001',
                        title: 'Exit Intent - Trigger Modal on Mouse Leave',
                        module: 'Exit Intent',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see a modal when I move my mouse to leave the page so that I can see exit intent content',
                        gherkinCriteria: {
                            given: 'Given I am on the Exit Intent page',
                            when: 'When I move my mouse cursor to the top of the browser window',
                            and: 'And I move it outside the viewport',
                            then: 'Then an exit intent modal should appear'
                        },
                        objective: 'Verify that moving mouse to top triggers exit intent modal',
                        preconditions: ['User is on Exit Intent page', 'Page is loaded'],
                        testData: { mouseAction: 'Move to top edge' },
                        steps: [
                            { step: 1, action: 'Navigate to Exit Intent page', testData: '/practice/exit-intent', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Move mouse cursor to top of browser window', testData: 'N/A', expectedResult: 'Mouse reaches top edge' },
                            { step: 3, action: 'Move mouse outside viewport', testData: 'N/A', expectedResult: 'Exit intent modal appears' },
                            { step: 4, action: 'Verify modal is displayed', testData: 'N/A', expectedResult: 'Exit intent modal is visible' }
                        ],
                        postconditions: ['Modal is displayed', 'Exit intent is triggered'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/exit-intent',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-EI-002',
                        title: 'Exit Intent - Close Modal',
                        module: 'Exit Intent',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to close the exit intent modal so that I can return to the page',
                        gherkinCriteria: {
                            given: 'Given the exit intent modal is displayed',
                            when: 'When I click the close button',
                            and: 'And I observe the page',
                            then: 'Then the modal should close'
                        },
                        objective: 'Verify that clicking close button dismisses modal',
                        preconditions: ['User is on Exit Intent page', 'Exit intent modal is displayed'],
                        testData: { closeButton: 'Close' },
                        steps: [
                            { step: 1, action: 'Navigate to Exit Intent page', testData: '/practice/exit-intent', expectedResult: 'Page loads' },
                            { step: 2, action: 'Trigger exit intent modal', testData: 'Move mouse to top', expectedResult: 'Modal appears' },
                            { step: 3, action: 'Click close button', testData: 'N/A', expectedResult: 'Modal closes' },
                            { step: 4, action: 'Verify modal is dismissed', testData: 'N/A', expectedResult: 'Modal is no longer visible' }
                        ],
                        postconditions: ['Modal is closed', 'Page is accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/exit-intent',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'frames': {
                id: 'frames',
                title: 'Frames Test Cases',
                description: 'Test cases for Frames functionality, verifying iframe content and interaction.',
                testCases: [
                    {
                        id: 'TC-FR-001',
                        title: 'Frames - Verify Frame Content Loads',
                        module: 'Frames',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see frame content load so that I can view the content',
                        gherkinCriteria: {
                            given: 'Given I am on the Frames page',
                            when: 'When the page loads',
                            and: 'And I observe the frames',
                            then: 'Then frame content should be displayed'
                        },
                        objective: 'Verify that frames load and display content',
                        preconditions: ['User navigates to Frames page'],
                        testData: { url: '/practice/frames' },
                        steps: [
                            { step: 1, action: 'Navigate to Frames page', testData: '/practice/frames', expectedResult: 'Page loads with frames visible' },
                            { step: 2, action: 'Verify frame content is loaded', testData: 'N/A', expectedResult: 'Frame content is displayed' },
                            { step: 3, action: 'Verify frame is accessible', testData: 'N/A', expectedResult: 'Frame content is readable' }
                        ],
                        postconditions: ['Frames are loaded', 'Content is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/frames',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-FR-002',
                        title: 'Frames - Interact with Frame Content',
                        module: 'Frames',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to interact with frame content so that I can use frame functionality',
                        gherkinCriteria: {
                            given: 'Given I am on the Frames page',
                            when: 'When I interact with elements inside the frame',
                            and: 'And I observe the response',
                            then: 'Then frame interactions should work correctly'
                        },
                        objective: 'Verify that interactions within frames work',
                        preconditions: ['User is on Frames page', 'Frame content is loaded'],
                        testData: { interaction: 'Click links or buttons in frame' },
                        steps: [
                            { step: 1, action: 'Navigate to Frames page', testData: '/practice/frames', expectedResult: 'Page loads' },
                            { step: 2, action: 'Switch to frame context', testData: 'N/A', expectedResult: 'Frame is focused' },
                            { step: 3, action: 'Interact with frame elements', testData: 'Click links/buttons', expectedResult: 'Frame responds to interactions' }
                        ],
                        postconditions: ['Frame interactions work', 'Content updates correctly'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/frames',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'geolocation': {
                id: 'geolocation',
                title: 'Geolocation Test Cases',
                description: 'Test cases for Geolocation functionality, verifying location detection and permission handling.',
                testCases: [
                    {
                        id: 'TC-GEO-001',
                        title: 'Geolocation - Request Location Permission',
                        module: 'Geolocation',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to be asked for location permission so that the app can access my location',
                        gherkinCriteria: {
                            given: 'Given I am on the Geolocation page',
                            when: 'When I click the button to get location',
                            and: 'And the browser prompts for permission',
                            then: 'Then I should see a location permission dialog'
                        },
                        objective: 'Verify that location permission is requested',
                        preconditions: ['User is on Geolocation page', 'Location button is visible'],
                        testData: { buttonText: 'Where am I?' },
                        steps: [
                            { step: 1, action: 'Navigate to Geolocation page', testData: '/practice/geolocation', expectedResult: 'Page loads with location button visible' },
                            { step: 2, action: 'Click location button', testData: 'N/A', expectedResult: 'Browser permission dialog appears' },
                            { step: 3, action: 'Verify permission dialog', testData: 'N/A', expectedResult: 'Location permission request is displayed' }
                        ],
                        postconditions: ['Permission is requested', 'User can grant or deny'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/geolocation',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-GEO-002',
                        title: 'Geolocation - Display Location After Permission Grant',
                        module: 'Geolocation',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see my location displayed after granting permission so that I know where I am',
                        gherkinCriteria: {
                            given: 'Given I have granted location permission',
                            when: 'When the location is retrieved',
                            and: 'And I observe the page',
                            then: 'Then my location coordinates should be displayed'
                        },
                        objective: 'Verify that location is displayed after permission grant',
                        preconditions: ['User is on Geolocation page', 'Permission is granted'],
                        testData: { permission: 'Allow' },
                        steps: [
                            { step: 1, action: 'Navigate to Geolocation page', testData: '/practice/geolocation', expectedResult: 'Page loads' },
                            { step: 2, action: 'Click location button', testData: 'N/A', expectedResult: 'Permission dialog appears' },
                            { step: 3, action: 'Grant location permission', testData: 'Allow', expectedResult: 'Permission is granted' },
                            { step: 4, action: 'Verify location is displayed', testData: 'N/A', expectedResult: 'Location coordinates are shown on page' }
                        ],
                        postconditions: ['Location is displayed', 'Coordinates are shown'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/geolocation',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'jquery-ui-menus': {
                id: 'jquery-ui-menus',
                title: 'JQuery UI Menus Test Cases',
                description: 'Test cases for JQuery UI Menus functionality, verifying menu navigation and submenu access.',
                testCases: [
                    {
                        id: 'TC-JQM-001',
                        title: 'JQuery UI Menus - Expand Menu Item',
                        module: 'JQuery UI Menus',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to expand menu items so that I can see submenu options',
                        gherkinCriteria: {
                            given: 'Given I am on the JQuery UI Menus page',
                            when: 'When I hover over or click a menu item',
                            and: 'And I observe the menu',
                            then: 'Then submenu should expand'
                        },
                        objective: 'Verify that menu items expand to show submenus',
                        preconditions: ['User is on JQuery UI Menus page', 'Menu is visible'],
                        testData: { menuItem: 'Enabled' },
                        steps: [
                            { step: 1, action: 'Navigate to JQuery UI Menus page', testData: '/practice/jquery-ui-menus', expectedResult: 'Page loads with menu visible' },
                            { step: 2, action: 'Hover over or click menu item', testData: 'Enabled', expectedResult: 'Submenu expands' },
                            { step: 3, action: 'Verify submenu is displayed', testData: 'N/A', expectedResult: 'Submenu options are visible' }
                        ],
                        postconditions: ['Submenu is expanded', 'Options are accessible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/jquery-ui-menus',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-JQM-002',
                        title: 'JQuery UI Menus - Navigate to Submenu Item',
                        module: 'JQuery UI Menus',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to click submenu items so that I can navigate to options',
                        gherkinCriteria: {
                            given: 'Given a submenu is expanded',
                            when: 'When I click on a submenu item',
                            and: 'And the action occurs',
                            then: 'Then the submenu item should be selected or navigate'
                        },
                        objective: 'Verify that clicking submenu items works correctly',
                        preconditions: ['User is on JQuery UI Menus page', 'Submenu is expanded'],
                        testData: { submenuItem: 'Back to JQuery UI' },
                        steps: [
                            { step: 1, action: 'Navigate to JQuery UI Menus page', testData: '/practice/jquery-ui-menus', expectedResult: 'Page loads' },
                            { step: 2, action: 'Expand menu item', testData: 'Enabled', expectedResult: 'Submenu appears' },
                            { step: 3, action: 'Click on submenu item', testData: 'Back to JQuery UI', expectedResult: 'Submenu item is clicked' },
                            { step: 4, action: 'Verify action occurs', testData: 'N/A', expectedResult: 'Navigation or action is triggered' }
                        ],
                        postconditions: ['Submenu item is selected', 'Action is executed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/jquery-ui-menus',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'javascript-error': {
                id: 'javascript-error',
                title: 'JavaScript Error Test Cases',
                description: 'Test cases for JavaScript Error functionality, verifying error detection and handling.',
                testCases: [
                    {
                        id: 'TC-JSE-001',
                        title: 'JavaScript Error - Verify Error is Logged',
                        module: 'JavaScript Error',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a tester, I want to detect JavaScript errors so that I can identify issues',
                        gherkinCriteria: {
                            given: 'Given I am on the JavaScript Error page',
                            when: 'When the page loads',
                            and: 'And I check the console',
                            then: 'Then JavaScript errors should be logged'
                        },
                        objective: 'Verify that JavaScript errors are detected and logged',
                        preconditions: ['User navigates to JavaScript Error page', 'Browser console is open'],
                        testData: { url: '/practice/javascript-error' },
                        steps: [
                            { step: 1, action: 'Open browser console', testData: 'F12 or DevTools', expectedResult: 'Console is open' },
                            { step: 2, action: 'Navigate to JavaScript Error page', testData: '/practice/javascript-error', expectedResult: 'Page loads' },
                            { step: 3, action: 'Check console for errors', testData: 'N/A', expectedResult: 'JavaScript error is logged in console' },
                            { step: 4, action: 'Verify error details', testData: 'N/A', expectedResult: 'Error message and stack trace are visible' }
                        ],
                        postconditions: ['Error is logged', 'Error details are available'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/javascript-error',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-JSE-002',
                        title: 'JavaScript Error - Verify Page Still Functions',
                        module: 'JavaScript Error',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want the page to function despite errors so that I can still use the page',
                        gherkinCriteria: {
                            given: 'Given a JavaScript error has occurred',
                            when: 'When I interact with the page',
                            and: 'And I observe functionality',
                            then: 'Then the page should still be functional'
                        },
                        objective: 'Verify that page remains functional despite errors',
                        preconditions: ['User is on JavaScript Error page', 'Error has occurred'],
                        testData: { interaction: 'Click buttons or links' },
                        steps: [
                            { step: 1, action: 'Navigate to JavaScript Error page', testData: '/practice/javascript-error', expectedResult: 'Page loads' },
                            { step: 2, action: 'Attempt to interact with page elements', testData: 'Click buttons/links', expectedResult: 'Page responds to interactions' },
                            { step: 3, action: 'Verify page functionality', testData: 'N/A', expectedResult: 'Page functions correctly despite error' }
                        ],
                        postconditions: ['Page is functional', 'Interactions work'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/javascript-error',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'large-deep-dom': {
                id: 'large-deep-dom',
                title: 'Large & Deep DOM Test Cases',
                description: 'Test cases for Large & Deep DOM functionality, verifying page performance with complex DOM structure.',
                testCases: [
                    {
                        id: 'TC-LDD-001',
                        title: 'Large & Deep DOM - Verify Page Loads',
                        module: 'Large & Deep DOM',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see the Large & Deep DOM page load so that I can view the content',
                        gherkinCriteria: {
                            given: 'Given I navigate to Large & Deep DOM page',
                            when: 'When the page loads',
                            and: 'And I observe the content',
                            then: 'Then the page should display with all DOM elements'
                        },
                        objective: 'Verify that Large & Deep DOM page loads successfully',
                        preconditions: ['User navigates to Large & Deep DOM page'],
                        testData: { url: '/practice/large-deep-dom' },
                        steps: [
                            { step: 1, action: 'Navigate to Large & Deep DOM page', testData: '/practice/large-deep-dom', expectedResult: 'Page loads successfully' },
                            { step: 2, action: 'Verify page content is displayed', testData: 'N/A', expectedResult: 'All DOM elements are rendered' },
                            { step: 3, action: 'Verify page is scrollable', testData: 'N/A', expectedResult: 'Page can be scrolled to view all content' }
                        ],
                        postconditions: ['Page is loaded', 'All elements are rendered'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/large-deep-dom',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-LDD-002',
                        title: 'Large & Deep DOM - Verify Element Selection',
                        module: 'Large & Deep DOM',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a tester, I want to select elements in the deep DOM so that I can verify element accessibility',
                        gherkinCriteria: {
                            given: 'Given I am on the Large & Deep DOM page',
                            when: 'When I try to select nested elements',
                            and: 'And I observe the selection',
                            then: 'Then elements should be selectable'
                        },
                        objective: 'Verify that elements in deep DOM structure are selectable',
                        preconditions: ['User is on Large & Deep DOM page', 'Deep nested elements exist'],
                        testData: { elementSelector: 'Deep nested element' },
                        steps: [
                            { step: 1, action: 'Navigate to Large & Deep DOM page', testData: '/practice/large-deep-dom', expectedResult: 'Page loads' },
                            { step: 2, action: 'Scroll to find deep nested elements', testData: 'N/A', expectedResult: 'Deep elements are visible' },
                            { step: 3, action: 'Attempt to select nested element', testData: 'N/A', expectedResult: 'Element is selectable' },
                            { step: 4, action: 'Verify element can be interacted with', testData: 'N/A', expectedResult: 'Element responds to interactions' }
                        ],
                        postconditions: ['Elements are selectable', 'Interactions work'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/large-deep-dom',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'multiple-windows': {
                id: 'multiple-windows',
                title: 'Multiple Windows Test Cases',
                description: 'Test cases for Multiple Windows functionality, verifying new window opening and navigation.',
                testCases: [
                    {
                        id: 'TC-MW-001',
                        title: 'Multiple Windows - Open New Window',
                        module: 'Multiple Windows',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to click a link to open a new window so that I can view content in a separate window',
                        gherkinCriteria: {
                            given: 'Given I am on the Multiple Windows page',
                            when: 'When I click the link to open new window',
                            and: 'And a new window opens',
                            then: 'Then the new window should display the target content'
                        },
                        objective: 'Verify that clicking link opens new window',
                        preconditions: ['User is on Multiple Windows page', 'Link is visible'],
                        testData: { linkText: 'Click Here' },
                        steps: [
                            { step: 1, action: 'Navigate to Multiple Windows page', testData: '/practice/multiple-windows', expectedResult: 'Page loads with link visible' },
                            { step: 2, action: 'Click "Click Here" link', testData: 'N/A', expectedResult: 'New window opens' },
                            { step: 3, action: 'Switch to new window', testData: 'N/A', expectedResult: 'New window is focused' },
                            { step: 4, action: 'Verify new window content', testData: 'N/A', expectedResult: 'New window displays expected content' }
                        ],
                        postconditions: ['New window is opened', 'Content is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/multiple-windows',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-MW-002',
                        title: 'Multiple Windows - Verify Window Content',
                        module: 'Multiple Windows',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see correct content in the new window so that I can verify navigation',
                        gherkinCriteria: {
                            given: 'Given a new window has been opened',
                            when: 'When I observe the window content',
                            and: 'And I check the page',
                            then: 'Then the content should match the expected page'
                        },
                        objective: 'Verify that new window displays correct content',
                        preconditions: ['User is on Multiple Windows page', 'New window is opened'],
                        testData: { expectedContent: 'New Window' },
                        steps: [
                            { step: 1, action: 'Navigate to Multiple Windows page', testData: '/practice/multiple-windows', expectedResult: 'Page loads' },
                            { step: 2, action: 'Open new window', testData: 'Click link', expectedResult: 'New window opens' },
                            { step: 3, action: 'Verify window title', testData: 'N/A', expectedResult: 'Window title matches expected' },
                            { step: 4, action: 'Verify window content', testData: 'N/A', expectedResult: 'Content matches expected page' }
                        ],
                        postconditions: ['Content is correct', 'Window is functional'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/multiple-windows',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'nested-frames': {
                id: 'nested-frames',
                title: 'Nested Frames Test Cases',
                description: 'Test cases for Nested Frames functionality, verifying nested iframe content and navigation.',
                testCases: [
                    {
                        id: 'TC-NF-001',
                        title: 'Nested Frames - Verify Nested Frame Content',
                        module: 'Nested Frames',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see nested frame content so that I can view all frame levels',
                        gherkinCriteria: {
                            given: 'Given I am on the Nested Frames page',
                            when: 'When the page loads',
                            and: 'And I observe the frames',
                            then: 'Then nested frame content should be displayed'
                        },
                        objective: 'Verify that nested frames load and display content',
                        preconditions: ['User navigates to Nested Frames page'],
                        testData: { url: '/practice/nested-frames' },
                        steps: [
                            { step: 1, action: 'Navigate to Nested Frames page', testData: '/practice/nested-frames', expectedResult: 'Page loads with frames visible' },
                            { step: 2, action: 'Verify outer frame is loaded', testData: 'N/A', expectedResult: 'Outer frame content is displayed' },
                            { step: 3, action: 'Verify inner frame is loaded', testData: 'N/A', expectedResult: 'Inner nested frame content is displayed' }
                        ],
                        postconditions: ['Frames are loaded', 'Nested content is visible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/nested-frames',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-NF-002',
                        title: 'Nested Frames - Navigate Through Frame Levels',
                        module: 'Nested Frames',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a tester, I want to navigate through nested frame levels so that I can access all frame content',
                        gherkinCriteria: {
                            given: 'Given I am on the Nested Frames page',
                            when: 'When I switch between frame contexts',
                            and: 'And I access nested frames',
                            then: 'Then I should be able to access all frame levels'
                        },
                        objective: 'Verify that navigation through nested frames works',
                        preconditions: ['User is on Nested Frames page', 'Frames are loaded'],
                        testData: { frameLevel: 'Outer and inner' },
                        steps: [
                            { step: 1, action: 'Navigate to Nested Frames page', testData: '/practice/nested-frames', expectedResult: 'Page loads' },
                            { step: 2, action: 'Switch to outer frame context', testData: 'N/A', expectedResult: 'Outer frame is accessible' },
                            { step: 3, action: 'Switch to inner frame context', testData: 'N/A', expectedResult: 'Inner frame is accessible' },
                            { step: 4, action: 'Verify content in each frame', testData: 'N/A', expectedResult: 'Content is accessible at all levels' }
                        ],
                        postconditions: ['All frames are accessible', 'Navigation works'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/nested-frames',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'secure-file-download': {
                id: 'secure-file-download',
                title: 'Secure File Download Test Cases',
                description: 'Test cases for Secure File Download functionality, verifying authenticated file downloads.',
                testCases: [
                    {
                        id: 'TC-SFD-001',
                        title: 'Secure File Download - Download File with Authentication',
                        module: 'Secure File Download',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to download a secure file so that I can access protected content',
                        gherkinCriteria: {
                            given: 'Given I am on the Secure File Download page',
                            when: 'When I authenticate and click download link',
                            and: 'And the download completes',
                            then: 'Then the secure file should be downloaded'
                        },
                        objective: 'Verify that secure file download works with authentication',
                        preconditions: ['User is on Secure File Download page', 'Authentication is required'],
                        testData: { username: 'admin', password: 'admin', fileName: 'secure-file.txt' },
                        steps: [
                            { step: 1, action: 'Navigate to Secure File Download page', testData: '/practice/secure-file-download', expectedResult: 'Page loads' },
                            { step: 2, action: 'Authenticate if required', testData: 'admin/admin', expectedResult: 'Authentication succeeds' },
                            { step: 3, action: 'Click on secure file download link', testData: 'secure-file.txt', expectedResult: 'Download starts' },
                            { step: 4, action: 'Verify file is downloaded', testData: 'N/A', expectedResult: 'Secure file is downloaded successfully' }
                        ],
                        postconditions: ['File is downloaded', 'Download is secure'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/secure-file-download',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-SFD-002',
                        title: 'Secure File Download - Verify Authentication Required',
                        module: 'Secure File Download',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want authentication to be required so that files are protected',
                        gherkinCriteria: {
                            given: 'Given I am attempting to download a secure file',
                            when: 'When I try to download without authentication',
                            and: 'And I observe the response',
                            then: 'Then download should be blocked or authentication required'
                        },
                        objective: 'Verify that authentication is required for secure downloads',
                        preconditions: ['User navigates to Secure File Download page'],
                        testData: { authentication: 'None' },
                        steps: [
                            { step: 1, action: 'Navigate to Secure File Download page', testData: '/practice/secure-file-download', expectedResult: 'Page loads' },
                            { step: 2, action: 'Attempt to download without authentication', testData: 'N/A', expectedResult: 'Authentication is requested or download is blocked' },
                            { step: 3, action: 'Verify authentication requirement', testData: 'N/A', expectedResult: 'Authentication dialog appears or error is shown' }
                        ],
                        postconditions: ['Authentication is required', 'Download is protected'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/secure-file-download',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'shadow-dom': {
                id: 'shadow-dom',
                title: 'Shadow DOM Test Cases',
                description: 'Test cases for Shadow DOM functionality, verifying shadow DOM element access and interaction.',
                testCases: [
                    {
                        id: 'TC-SD-001',
                        title: 'Shadow DOM - Verify Shadow DOM Elements',
                        module: 'Shadow DOM',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a tester, I want to access shadow DOM elements so that I can verify shadow DOM functionality',
                        gherkinCriteria: {
                            given: 'Given I am on the Shadow DOM page',
                            when: 'When I inspect the page elements',
                            and: 'And I access shadow DOM',
                            then: 'Then shadow DOM elements should be accessible'
                        },
                        objective: 'Verify that shadow DOM elements can be accessed',
                        preconditions: ['User is on Shadow DOM page', 'Shadow DOM elements exist'],
                        testData: { url: '/practice/shadow-dom' },
                        steps: [
                            { step: 1, action: 'Navigate to Shadow DOM page', testData: '/practice/shadow-dom', expectedResult: 'Page loads' },
                            { step: 2, action: 'Open browser DevTools', testData: 'F12', expectedResult: 'DevTools opens' },
                            { step: 3, action: 'Inspect shadow DOM elements', testData: 'N/A', expectedResult: 'Shadow DOM structure is visible' },
                            { step: 4, action: 'Verify shadow DOM content', testData: 'N/A', expectedResult: 'Shadow DOM elements are accessible' }
                        ],
                        postconditions: ['Shadow DOM is accessible', 'Elements are visible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/shadow-dom',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-SD-002',
                        title: 'Shadow DOM - Interact with Shadow DOM Elements',
                        module: 'Shadow DOM',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to interact with shadow DOM elements so that I can use shadow DOM functionality',
                        gherkinCriteria: {
                            given: 'Given I am on the Shadow DOM page',
                            when: 'When I interact with shadow DOM elements',
                            and: 'And I observe the response',
                            then: 'Then shadow DOM interactions should work'
                        },
                        objective: 'Verify that interactions with shadow DOM elements work',
                        preconditions: ['User is on Shadow DOM page', 'Shadow DOM elements are accessible'],
                        testData: { interaction: 'Click buttons in shadow DOM' },
                        steps: [
                            { step: 1, action: 'Navigate to Shadow DOM page', testData: '/practice/shadow-dom', expectedResult: 'Page loads' },
                            { step: 2, action: 'Access shadow DOM elements', testData: 'N/A', expectedResult: 'Shadow DOM is accessible' },
                            { step: 3, action: 'Interact with shadow DOM elements', testData: 'Click buttons', expectedResult: 'Interactions work' },
                            { step: 4, action: 'Verify responses', testData: 'N/A', expectedResult: 'Shadow DOM responds to interactions' }
                        ],
                        postconditions: ['Interactions work', 'Shadow DOM functions correctly'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/shadow-dom',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'shifting-content': {
                id: 'shifting-content',
                title: 'Shifting Content Test Cases',
                description: 'Test cases for Shifting Content functionality, verifying content that shifts or moves dynamically.',
                testCases: [
                    {
                        id: 'TC-SC-001',
                        title: 'Shifting Content - Verify Content Shifts',
                        module: 'Shifting Content',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to see content shift so that I can verify dynamic behavior',
                        gherkinCriteria: {
                            given: 'Given I am on the Shifting Content page',
                            when: 'When the page loads or refreshes',
                            and: 'And I observe the content',
                            then: 'Then content should shift or move'
                        },
                        objective: 'Verify that content shifts dynamically',
                        preconditions: ['User navigates to Shifting Content page'],
                        testData: { url: '/practice/shifting-content' },
                        steps: [
                            { step: 1, action: 'Navigate to Shifting Content page', testData: '/practice/shifting-content', expectedResult: 'Page loads' },
                            { step: 2, action: 'Observe content position', testData: 'N/A', expectedResult: 'Initial content position is noted' },
                            { step: 3, action: 'Refresh page or wait', testData: 'N/A', expectedResult: 'Content shifts position' },
                            { step: 4, action: 'Verify content has shifted', testData: 'N/A', expectedResult: 'Content position has changed' }
                        ],
                        postconditions: ['Content shifts', 'Dynamic behavior is verified'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/shifting-content',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-SC-002',
                        title: 'Shifting Content - Verify Content Accessibility After Shift',
                        module: 'Shifting Content',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want content to remain accessible after shifting so that I can still interact with it',
                        gherkinCriteria: {
                            given: 'Given content has shifted',
                            when: 'When I try to interact with content',
                            and: 'And I observe functionality',
                            then: 'Then content should still be accessible and functional'
                        },
                        objective: 'Verify that content remains accessible after shifting',
                        preconditions: ['User is on Shifting Content page', 'Content has shifted'],
                        testData: { interaction: 'Click links or buttons' },
                        steps: [
                            { step: 1, action: 'Navigate to Shifting Content page', testData: '/practice/shifting-content', expectedResult: 'Page loads' },
                            { step: 2, action: 'Wait for content to shift', testData: 'N/A', expectedResult: 'Content shifts' },
                            { step: 3, action: 'Attempt to interact with shifted content', testData: 'Click elements', expectedResult: 'Content is still accessible' },
                            { step: 4, action: 'Verify interactions work', testData: 'N/A', expectedResult: 'All interactions function correctly' }
                        ],
                        postconditions: ['Content is accessible', 'Functionality is maintained'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/shifting-content',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'slow-resources': {
                id: 'slow-resources',
                title: 'Slow Resources Test Cases',
                description: 'Test cases for Slow Resources functionality, verifying page behavior with slow-loading resources.',
                testCases: [
                    {
                        id: 'TC-SR-001',
                        title: 'Slow Resources - Verify Page Loads Despite Slow Resources',
                        module: 'Slow Resources',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want the page to load even with slow resources so that I can access content',
                        gherkinCriteria: {
                            given: 'Given I am on the Slow Resources page',
                            when: 'When the page loads with slow resources',
                            and: 'And I wait for loading',
                            then: 'Then the page should eventually load completely'
                        },
                        objective: 'Verify that page loads despite slow resources',
                        preconditions: ['User navigates to Slow Resources page', 'Slow resources are present'],
                        testData: { url: '/practice/slow-resources', waitTime: '10-15 seconds' },
                        steps: [
                            { step: 1, action: 'Navigate to Slow Resources page', testData: '/practice/slow-resources', expectedResult: 'Page starts loading' },
                            { step: 2, action: 'Wait for slow resources to load', testData: '10-15 seconds', expectedResult: 'Resources load slowly' },
                            { step: 3, action: 'Verify page eventually loads', testData: 'N/A', expectedResult: 'Page loads completely' },
                            { step: 4, action: 'Verify all content is displayed', testData: 'N/A', expectedResult: 'All content is visible' }
                        ],
                        postconditions: ['Page loads completely', 'All resources are loaded'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/slow-resources',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-SR-002',
                        title: 'Slow Resources - Verify Loading Indicators',
                        module: 'Slow Resources',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to see loading indicators so that I know resources are loading',
                        gherkinCriteria: {
                            given: 'Given I am on the Slow Resources page',
                            when: 'When resources are loading slowly',
                            and: 'And I observe the page',
                            then: 'Then loading indicators should be visible'
                        },
                        objective: 'Verify that loading indicators appear during slow loading',
                        preconditions: ['User is on Slow Resources page', 'Resources are loading'],
                        testData: { loadingTime: 'Slow' },
                        steps: [
                            { step: 1, action: 'Navigate to Slow Resources page', testData: '/practice/slow-resources', expectedResult: 'Page starts loading' },
                            { step: 2, action: 'Observe loading behavior', testData: 'N/A', expectedResult: 'Loading indicators appear' },
                            { step: 3, action: 'Verify loading feedback', testData: 'N/A', expectedResult: 'User sees loading progress or indicators' }
                        ],
                        postconditions: ['Loading indicators are shown', 'User feedback is provided'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/slow-resources',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            },
            'wysiwyg-editor': {
                id: 'wysiwyg-editor',
                title: 'WYSIWYG Editor Test Cases',
                description: 'Test cases for WYSIWYG Editor functionality, verifying rich text editing capabilities.',
                testCases: [
                    {
                        id: 'TC-WE-001',
                        title: 'WYSIWYG Editor - Enter Text in Editor',
                        module: 'WYSIWYG Editor',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Critical',
                        acceptanceCriteria: 'As a user, I want to enter text in the WYSIWYG editor so that I can create content',
                        gherkinCriteria: {
                            given: 'Given I am on the WYSIWYG Editor page',
                            when: 'When I click in the editor and type text',
                            and: 'And I observe the editor',
                            then: 'Then the text should appear in the editor'
                        },
                        objective: 'Verify that text can be entered in WYSIWYG editor',
                        preconditions: ['User is on WYSIWYG Editor page', 'Editor is visible'],
                        testData: { text: 'Test content' },
                        steps: [
                            { step: 1, action: 'Navigate to WYSIWYG Editor page', testData: '/practice/wysiwyg-editor', expectedResult: 'Page loads with editor visible' },
                            { step: 2, action: 'Click in editor area', testData: 'N/A', expectedResult: 'Editor is focused' },
                            { step: 3, action: 'Type text in editor', testData: 'Test content', expectedResult: 'Text appears in editor' },
                            { step: 4, action: 'Verify text is displayed', testData: 'N/A', expectedResult: 'Text is visible in editor' }
                        ],
                        postconditions: ['Text is entered', 'Content is displayed'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/wysiwyg-editor',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-WE-002',
                        title: 'WYSIWYG Editor - Format Text',
                        module: 'WYSIWYG Editor',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'High',
                        severity: 'Major',
                        acceptanceCriteria: 'As a user, I want to format text using editor tools so that I can style my content',
                        gherkinCriteria: {
                            given: 'Given I have entered text in the WYSIWYG editor',
                            when: 'When I select text and apply formatting',
                            and: 'And I observe the text',
                            then: 'Then the text should be formatted'
                        },
                        objective: 'Verify that text formatting works in WYSIWYG editor',
                        preconditions: ['User is on WYSIWYG Editor page', 'Text is entered'],
                        testData: { format: 'Bold', text: 'Selected text' },
                        steps: [
                            { step: 1, action: 'Navigate to WYSIWYG Editor page', testData: '/practice/wysiwyg-editor', expectedResult: 'Page loads' },
                            { step: 2, action: 'Enter text in editor', testData: 'Test content', expectedResult: 'Text is entered' },
                            { step: 3, action: 'Select text', testData: 'N/A', expectedResult: 'Text is selected' },
                            { step: 4, action: 'Apply formatting (e.g., Bold)', testData: 'Bold button', expectedResult: 'Text is formatted' },
                            { step: 5, action: 'Verify formatting is applied', testData: 'N/A', expectedResult: 'Text appears bold or formatted' }
                        ],
                        postconditions: ['Text is formatted', 'Formatting is visible'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/wysiwyg-editor',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    },
                    {
                        id: 'TC-WE-003',
                        title: 'WYSIWYG Editor - Clear Editor Content',
                        module: 'WYSIWYG Editor',
                        testLevel: 'System',
                        testType: 'Functional',
                        priority: 'Medium',
                        severity: 'Minor',
                        acceptanceCriteria: 'As a user, I want to clear editor content so that I can start fresh',
                        gherkinCriteria: {
                            given: 'Given I have content in the WYSIWYG editor',
                            when: 'When I select all and delete or use clear function',
                            and: 'And I observe the editor',
                            then: 'Then the editor should be cleared'
                        },
                        objective: 'Verify that editor content can be cleared',
                        preconditions: ['User is on WYSIWYG Editor page', 'Editor has content'],
                        testData: { action: 'Select all and delete' },
                        steps: [
                            { step: 1, action: 'Navigate to WYSIWYG Editor page', testData: '/practice/wysiwyg-editor', expectedResult: 'Page loads' },
                            { step: 2, action: 'Enter content in editor', testData: 'Test content', expectedResult: 'Content is entered' },
                            { step: 3, action: 'Select all content', testData: 'Ctrl+A or Cmd+A', expectedResult: 'All content is selected' },
                            { step: 4, action: 'Delete selected content', testData: 'Delete key', expectedResult: 'Editor is cleared' },
                            { step: 5, action: 'Verify editor is empty', testData: 'N/A', expectedResult: 'Editor contains no content' }
                        ],
                        postconditions: ['Editor is cleared', 'Ready for new content'],
                        environment: {
                            appBuild: 'v1.0.0',
                            url: 'http://localhost:3000/gits/practice/wysiwyg-editor',
                            os: 'macOS/Windows/Linux',
                            browser: 'Chrome/Firefox/Safari latest',
                            database: 'N/A'
                        }
                    }
                ]
            }
        };

        return (
            <main style={{
                ...testCaseStyles.mainContainer,
                background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
            }}>
                <div style={testCaseStyles.contentContainer}>
                    {/* Modern Header Section */}
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '50px',
                        position: 'relative'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.2)',
                            position: 'relative',
                            overflow: 'hidden',
                            marginBottom: '30px'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-50%',
                                right: '-50%',
                                width: '200%',
                                height: '200%',
                                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                backgroundSize: '30px 30px',
                                opacity: 0.3
                            }}></div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h1 style={{
                                    fontSize: '42px',
                                    color: '#ffffff',
                                    marginBottom: '15px',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                }}>
                                    Practice Examples - Test Cases
                                </h1>
                                <p style={{
                                    fontSize: '20px',
                                    color: 'rgba(255,255,255,0.95)',
                                    margin: 0,
                                    textAlign: 'center',
                                    fontWeight: '400'
                                }}>
                                    <a 
                                        href="https://istqb.org/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{
                                            color: '#ffffff',
                                            textDecoration: 'underline',
                                            fontWeight: '600',
                                            textUnderlineOffset: '3px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.opacity = '0.9';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.opacity = '1';
                                        }}
                                    >
                                        ISTQB
                                    </a>
                                    {' '}-aligned Manual Test Cases for Registration Form
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Test Type Definitions and UX Examples - Collapsible */}
                    <div style={{
                        backgroundColor: '#e7f3ff',
                        border: '2px solid #00416A',
                        borderRadius: '8px',
                        marginBottom: '30px',
                        overflow: 'hidden',
                        textAlign: 'left'
                    }}>
                        <div
                            onClick={() => this.setState({ definitionsExpanded: !this.state.definitionsExpanded })}
                            aria-label={this.state.definitionsExpanded ? 'Collapse definitions' : 'Expand definitions'}
                            aria-expanded={this.state.definitionsExpanded}
                            style={{
                                padding: '20px',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: this.state.definitionsExpanded ? '#d1e7ff' : '#e7f3ff',
                                transition: 'background-color 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#d1e7ff';
                            }}
                            onMouseLeave={(e) => {
                                if (!this.state.definitionsExpanded) {
                                    e.currentTarget.style.backgroundColor = '#e7f3ff';
                                }
                            }}
                        >
                            <h3 style={{
                                color: '#00416A',
                                fontSize: '20px',
                                margin: 0,
                                fontWeight: '600',
                                textAlign: 'left'
                            }}>
                                Test Type Definitions
                            </h3>
                            <span style={{
                                fontSize: '24px',
                                color: '#00416A',
                                fontWeight: 'bold',
                                transition: 'transform 0.3s ease',
                                transform: this.state.definitionsExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                                ▼
                            </span>
                        </div>
                        {this.state.definitionsExpanded && (
                            <div style={{
                                padding: '20px',
                                borderTop: '2px solid #00416A',
                                animation: 'fadeIn 0.3s ease'
                            }}>
                                {/* Test Type Definitions */}
                                <div style={{ marginBottom: '40px' }}>
                                    <h4 style={{
                                        color: '#00416A',
                                        fontSize: '18px',
                                        marginBottom: '15px',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        borderBottom: '2px solid #00416A',
                                        paddingBottom: '10px'
                                    }}>
                                        Test Type Definitions
                                    </h4>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                        gap: '20px',
                                        fontSize: '14px',
                                        lineHeight: '1.8',
                                        color: '#333'
                                    }}>
                                        <div>
                                            <h5 style={{
                                                color: '#00416A',
                                                fontSize: '16px',
                                                marginBottom: '8px',
                                                fontWeight: '600',
                                                textAlign: 'left'
                                            }}>
                                                Functional Testing
                                            </h5>
                                            <p style={{ margin: 0, textAlign: 'left' }}>
                                                <strong>Functional Testing</strong> verifies that the software application functions correctly according to its specifications and requirements. It focuses on testing the behavior of the system by validating that each function works as expected, including input validation, output correctness, and business logic implementation. Functional tests ensure that the application meets the functional requirements and performs the intended operations correctly.
                                            </p>
                                            <div style={{
                                                marginTop: '10px',
                                                padding: '10px',
                                                backgroundColor: '#f0f8ff',
                                                borderRadius: '4px',
                                                borderLeft: '3px solid #00416A'
                                            }}>
                                                <p style={{ margin: '5px 0', fontSize: '13px', textAlign: 'left' }}>
                                                    <strong>Example:</strong> Test the Registration Form's email validation functionality by: (1) Entering a valid email format (e.g., "user@example.com") and verifying it's accepted, (2) Entering an invalid email format (e.g., "invalid-email") and verifying an error message "Invalid email format" is displayed, (3) Leaving the email field empty and verifying an error message "Email is required" is displayed. This validates that the email field function works according to the requirements.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 style={{
                                                color: '#00416A',
                                                fontSize: '16px',
                                                marginBottom: '8px',
                                                fontWeight: '600',
                                                textAlign: 'left'
                                            }}>
                                                Integration Testing
                                            </h5>
                                            <p style={{ margin: 0, textAlign: 'left' }}>
                                                <strong>Integration Testing</strong> verifies that different modules, components, or subsystems of a software application work together correctly when combined. It focuses on testing the interfaces and interactions between integrated components to ensure they communicate properly, exchange data correctly, and function as a unified system. Integration tests help identify issues that occur when components are integrated together.
                                            </p>
                                            <div style={{
                                                marginTop: '10px',
                                                padding: '10px',
                                                backgroundColor: '#f0f8ff',
                                                borderRadius: '4px',
                                                borderLeft: '3px solid #00416A'
                                            }}>
                                                <p style={{ margin: '5px 0', fontSize: '13px', textAlign: 'left' }}>
                                                    <strong>Example:</strong> Test the integration between form validation and form submission in the Registration Form by: (1) Filling all form fields with valid data and clicking Register, (2) Verifying that validation passes for all fields, (3) Verifying that form data is correctly collected and passed to the success page component, (4) Verifying that the success page displays all submitted information correctly. This ensures that the form validation module, form submission module, and success page component work together seamlessly.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 style={{
                                                color: '#00416A',
                                                fontSize: '16px',
                                                marginBottom: '8px',
                                                fontWeight: '600',
                                                textAlign: 'left'
                                            }}>
                                                Smoke Testing
                                            </h5>
                                            <p style={{ margin: 0, textAlign: 'left' }}>
                                                <strong>Smoke Testing</strong> is a preliminary test that verifies the basic functionality of critical features to ensure the build is stable enough for further testing. It is performed after a new build is deployed to check if the most important functions work correctly. Smoke tests are quick, broad, and shallow - they don't go into deep detail but ensure the application doesn't "smoke" (have critical failures) before more comprehensive testing begins.
                                            </p>
                                            <div style={{
                                                marginTop: '10px',
                                                padding: '10px',
                                                backgroundColor: '#f0f8ff',
                                                borderRadius: '4px',
                                                borderLeft: '3px solid #00416A'
                                            }}>
                                                <p style={{ margin: '5px 0', fontSize: '13px', textAlign: 'left' }}>
                                                    <strong>Example:</strong> After deploying a new build of the Registration Form, perform smoke testing by verifying: (1) The registration page loads successfully, (2) User can navigate to the form, (3) Form fields are visible and accessible, (4) Submit button is clickable. If all these basic checks pass, the build is considered stable for detailed testing.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 style={{
                                                color: '#00416A',
                                                fontSize: '16px',
                                                marginBottom: '8px',
                                                fontWeight: '600',
                                                textAlign: 'left'
                                            }}>
                                                Sanity Testing
                                            </h5>
                                            <p style={{ margin: 0, textAlign: 'left' }}>
                                                <strong>Sanity Testing</strong> is a narrow and deep testing approach that focuses on verifying specific functionality or a small set of changes after a build or bug fix. It is more focused than smoke testing and ensures that the specific changes made are working correctly and haven't broken existing functionality. Sanity tests are usually unscripted and performed by testers who have good knowledge of the application.
                                            </p>
                                            <div style={{
                                                marginTop: '10px',
                                                padding: '10px',
                                                backgroundColor: '#f0f8ff',
                                                borderRadius: '4px',
                                                borderLeft: '3px solid #00416A'
                                            }}>
                                                <p style={{ margin: '5px 0', fontSize: '13px', textAlign: 'left' }}>
                                                    <strong>Example:</strong> After fixing a bug in email validation, perform sanity testing by: (1) Testing the specific email validation fix with various email formats (valid and invalid), (2) Verifying that the fix works correctly, (3) Checking that other form fields still work as expected. This ensures the bug fix is correct and hasn't introduced new issues.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 style={{
                                                color: '#00416A',
                                                fontSize: '16px',
                                                marginBottom: '8px',
                                                fontWeight: '600',
                                                textAlign: 'left'
                                            }}>
                                                Regression Testing
                                            </h5>
                                            <p style={{ margin: 0, textAlign: 'left' }}>
                                                <strong>Regression Testing</strong> is performed to ensure that previously developed and tested software still works correctly after changes, enhancements, or bug fixes. It verifies that new changes haven't broken existing functionality. Regression tests are typically a subset of previously executed test cases that are re-run to ensure that existing features continue to work as expected after modifications.
                                            </p>
                                            <div style={{
                                                marginTop: '10px',
                                                padding: '10px',
                                                backgroundColor: '#f0f8ff',
                                                borderRadius: '4px',
                                                borderLeft: '3px solid #00416A'
                                            }}>
                                                <p style={{ margin: '5px 0', fontSize: '13px', textAlign: 'left' }}>
                                                    <strong>Example:</strong> After adding a new "Phone Number" field to the Registration Form, perform regression testing by re-running existing test cases: (1) Verify successful registration still works with all original fields, (2) Verify all existing validation rules still function correctly, (3) Verify error messages for original fields still display properly. This ensures the new feature didn't break existing functionality.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 style={{
                                                color: '#00416A',
                                                fontSize: '16px',
                                                marginBottom: '8px',
                                                fontWeight: '600',
                                                textAlign: 'left'
                                            }}>
                                                Testing Pyramid
                                            </h5>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '15px',
                                                marginBottom: '10px'
                                            }}>
                                                {/* E2E / System Tests - Top (Smallest) */}
                                                <div style={{
                                                    width: '80px',
                                                    height: '30px',
                                                    backgroundColor: '#dc3545',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#ffffff',
                                                    fontWeight: '600',
                                                    fontSize: '10px',
                                                    borderRadius: '3px',
                                                    marginBottom: '3px',
                                                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                                                }}>
                                                    E2E (10%)
                                                </div>
                                                
                                                {/* Integration Tests - Middle */}
                                                <div style={{
                                                    width: '140px',
                                                    height: '30px',
                                                    backgroundColor: '#ffc107',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#333',
                                                    fontWeight: '600',
                                                    fontSize: '10px',
                                                    borderRadius: '3px',
                                                    marginBottom: '3px',
                                                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                                                }}>
                                                    Integration (20%)
                                                </div>
                                                
                                                {/* Unit Tests - Bottom (Largest) */}
                                                <div style={{
                                                    width: '200px',
                                                    height: '30px',
                                                    backgroundColor: '#28a745',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#ffffff',
                                                    fontWeight: '600',
                                                    fontSize: '10px',
                                                    borderRadius: '3px',
                                                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                                                }}>
                                                    Unit Tests (70%)
                                                </div>
                                            </div>
                                            <p style={{ 
                                                margin: '10px 0 0 0', 
                                                fontSize: '12px', 
                                                textAlign: 'left',
                                                color: '#333',
                                                lineHeight: '1.6'
                                            }}>
                                                Visual representation of test distribution: More unit tests at the base, fewer integration tests in the middle, and minimal E2E tests at the top.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Test Cases List - Organized by Sections */}
                    <div style={testCaseStyles.testCasesList}>
                        {Object.values(testCasesSections).map((section, index) => {
                            const isFirst = index === 0;
                            const isLast = index === Object.values(testCasesSections).length - 1;
                            return (
                            <div key={section.id} style={{ marginBottom: '0' }}>
                                {/* Section Header */}
                                <div
                                    onClick={() => this.toggleSection(section.id)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={this.state.expandedSections[section.id] ? `Collapse ${section.title}` : `Expand ${section.title}`}
                                    aria-expanded={this.state.expandedSections[section.id]}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            this.toggleSection(section.id);
                                        }
                                    }}
                                    style={{
                                        backgroundColor: '#e7f3ff',
                                        borderLeft: '2px solid #00416A',
                                        borderRight: '2px solid #00416A',
                                        borderTop: isFirst ? '2px solid #00416A' : 'none',
                                        borderBottom: 'none',
                                        borderRadius: isFirst ? '8px 8px 0 0' : '0',
                                        padding: '20px',
                                        marginBottom: '0',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#d1e7ff';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!this.state.expandedSections[section.id]) {
                                            e.currentTarget.style.backgroundColor = '#e7f3ff';
                                        }
                                    }}
                                >
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                                            {this.getSectionNumber(section.id) && (
                                                <span style={{
                                                    color: '#00416A',
                                                    fontWeight: 'bold',
                                                    fontSize: '24px',
                                                    minWidth: '35px',
                                                    flexShrink: 0,
                                                    lineHeight: '1.2'
                                                }}>
                                                    {this.getSectionNumber(section.id)}.
                                                </span>
                                            )}
                                            <h2 style={{
                                                color: '#00416A',
                                                fontSize: '24px',
                                                margin: 0,
                                                fontWeight: '600',
                                                textAlign: 'left',
                                                flex: 1
                                            }}>
                                                {section.title}
                                            </h2>
                                        </div>
                                        <p style={{
                                            color: '#666',
                                            fontSize: '14px',
                                            margin: 0,
                                            textAlign: 'left',
                                            paddingLeft: this.getSectionNumber(section.id) ? '45px' : '0'
                                        }}>
                                            {section.description} ({section.testCases.length} test cases)
                                        </p>
                                    </div>
                                    <span 
                                        aria-hidden="true"
                                        style={{
                                            fontSize: '24px',
                                            color: '#00416A',
                                            fontWeight: 'bold',
                                            transition: 'transform 0.3s ease',
                                            transform: this.state.expandedSections[section.id] ? 'rotate(180deg)' : 'rotate(0deg)'
                                        }}
                                    >
                                        ▼
                                    </span>
                                </div>

                                {/* Section Test Cases */}
                                {this.state.expandedSections[section.id] && (
                                    <div style={{
                                        borderLeft: '2px solid #00416A',
                                        borderRight: '2px solid #00416A',
                                        borderBottom: isLast ? '2px solid #00416A' : 'none',
                                        borderRadius: isLast ? '0 0 8px 8px' : '0',
                                        padding: '0 20px 20px 20px',
                                        backgroundColor: '#ffffff'
                                    }}>
                                        {section.testCases.map((testCase) => (
                            <div
                                key={testCase.id}
                                style={testCaseStyles.testCaseCard}
                                role="button"
                                tabIndex={0}
                                aria-label={this.state.selectedTestCase === testCase.id ? `Collapse ${testCase.title}` : `Expand ${testCase.title}`}
                                aria-expanded={this.state.selectedTestCase === testCase.id}
                                onClick={() => this.setState({ selectedTestCase: this.state.selectedTestCase === testCase.id ? null : testCase.id })}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        this.setState({ selectedTestCase: this.state.selectedTestCase === testCase.id ? null : testCase.id });
                                    }
                                }}
                                onMouseEnter={(e) => {
                                    if (this.state.selectedTestCase !== testCase.id) {
                                        Object.assign(e.currentTarget.style, testCaseStyles.testCaseCardHover);
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (this.state.selectedTestCase !== testCase.id) {
                                        e.currentTarget.style.borderColor = testCaseStyles.testCaseCard.borderColor;
                                        e.currentTarget.style.boxShadow = testCaseStyles.testCaseCard.boxShadow;
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.background = testCaseStyles.testCaseCard.backgroundColor;
                                    }
                                }}
                            >
                                <div style={testCaseStyles.testCaseHeader}>
                                    <div style={testCaseStyles.testCaseHeaderContent}>
                                        <div style={testCaseStyles.badgeContainer}>
                                            <span style={testCaseStyles.badgeId}>
                                                {testCase.id}
                                            </span>
                                            <span style={testCaseStyles.badgePriority(testCase.priority)}>
                                                {testCase.priority}
                                            </span>
                                            <span style={testCaseStyles.badgeType}>
                                                {testCase.testType}
                                            </span>
                                        </div>
                                        <h3 style={testCaseStyles.testCaseTitle}>
                                            {testCase.title}
                                        </h3>
                                        <p style={testCaseStyles.testCaseMeta}>
                                            <strong>Module:</strong> {testCase.module} | <strong>Test Level:</strong> {testCase.testLevel}
                                        </p>
                                    </div>
                                    <span 
                                        aria-hidden="true"
                                        style={testCaseStyles.expandIcon(this.state.selectedTestCase === testCase.id)}
                                    >
                                        ▼
                                    </span>
                                </div>

                                {this.state.selectedTestCase === testCase.id && (
                                    <div style={testCaseStyles.expandedContent}>
                                        {/* Test Case Details */}
                                        <div style={testCaseStyles.detailsGrid}>
                                            <div>
                                                <h4 style={testCaseStyles.acceptanceCriteriaTitle}>Story Acceptance Criteria</h4>
                                                <div style={testCaseStyles.acceptanceCriteriaSection}>
                                                    <p style={testCaseStyles.userStoryBox}>
                                                        <strong>User Story:</strong> {testCase.acceptanceCriteria}
                                                    </p>
                                                    {testCase.gherkinCriteria && (
                                                        <div style={testCaseStyles.gherkinBox}>
                                                            <p style={testCaseStyles.gherkinLine}><strong>Given</strong> {testCase.gherkinCriteria.given.replace('Given ', '')}</p>
                                                            <p style={testCaseStyles.gherkinLine}><strong>When</strong> {testCase.gherkinCriteria.when.replace('When ', '')}</p>
                                                            <p style={testCaseStyles.gherkinLine}><strong>And</strong> {testCase.gherkinCriteria.and.replace('And ', '')}</p>
                                                            <p style={testCaseStyles.gherkinLine}><strong>Then</strong> {testCase.gherkinCriteria.then.replace('Then ', '')}</p>
                                                        </div>
                                                    )}
                                                    <p style={testCaseStyles.severityText}><strong>Severity:</strong> {testCase.severity}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 style={testCaseStyles.objectiveTitle}>Test Objective</h4>
                                                <p style={testCaseStyles.objectiveText}>{testCase.objective}</p>
                                            </div>
                                        </div>

                                        {/* Preconditions */}
                                        <div style={testCaseStyles.preconditionsSection}>
                                            <h4 style={testCaseStyles.preconditionsTitle}>Preconditions</h4>
                                            <ul style={testCaseStyles.preconditionsList}>
                                                {testCase.preconditions.map((precondition, idx) => (
                                                    <li key={idx} style={testCaseStyles.preconditionsItem}>{precondition}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Test Data */}
                                        <div style={testCaseStyles.testDataSection}>
                                            <h4 style={testCaseStyles.testDataTitle}>Test Data</h4>
                                            <div style={testCaseStyles.testDataGrid}>
                                                {Object.entries(testCase.testData).map(([key, value]) => (
                                                    <div key={key} style={testCaseStyles.testDataItem}>
                                                        <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {String(value)}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Test Steps */}
                                        <div style={testCaseStyles.testStepsSection}>
                                            <h4 style={testCaseStyles.testStepsTitle}>Test Steps</h4>
                                            <div style={{ overflowX: 'auto' }}>
                                                <table style={testCaseStyles.testStepsTable}>
                                                    <thead>
                                                        <tr style={testCaseStyles.testStepsTableHeader}>
                                                            <th style={testCaseStyles.testStepsTableHeaderCell}>Step #</th>
                                                            <th style={testCaseStyles.testStepsTableHeaderCell}>Action</th>
                                                            <th style={testCaseStyles.testStepsTableHeaderCell}>Test Data</th>
                                                            <th style={testCaseStyles.testStepsTableHeaderCell}>Expected Result</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {testCase.steps.map((step, idx) => (
                                                            <tr key={idx} style={testCaseStyles.testStepsTableRow(idx)}>
                                                                <td style={testCaseStyles.testStepsTableCellBold}>{step.step}</td>
                                                                <td style={testCaseStyles.testStepsTableCell}>{step.action}</td>
                                                                <td style={testCaseStyles.testStepsTableCellItalic}>{step.testData}</td>
                                                                <td style={testCaseStyles.testStepsTableCell}>{step.expectedResult}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Postconditions */}
                                        <div style={testCaseStyles.postconditionsSection}>
                                            <h4 style={testCaseStyles.postconditionsTitle}>Postconditions</h4>
                                            <ul style={testCaseStyles.postconditionsList}>
                                                {testCase.postconditions.map((postcondition, idx) => (
                                                    <li key={idx} style={testCaseStyles.postconditionsItem}>{postcondition}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Environment */}
                                        <div style={testCaseStyles.environmentSection}>
                                            <h4 style={testCaseStyles.environmentTitle}>Environment</h4>
                                            <div style={testCaseStyles.environmentGrid}>
                                                {Object.entries(testCase.environment).map(([key, value]) => (
                                                    <div key={key} style={testCaseStyles.environmentItem}>
                                                        <strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {String(value)}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            );
                        })}
                    </div>
                </div>

                <section className='pt4'>
                    <Footer />
                </section>
            </main>
        );
    }
}

export default TestCases;
