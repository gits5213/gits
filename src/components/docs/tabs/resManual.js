import React, { useState } from 'react';
import link from '../../../utilities/links.json';
import ManualLogo from '../../../images/tabs/manualLogo.png';
import DefectBugError from '../../../images/tabs/defectBugError.png';
import BugLifeCycle from '../../../images/tabs/bugLifeCycle.png';
import TestPyramid from '../../../images/tabs/testPyramid.png';
import TestPyramid1 from '../../../images/tabs/testPyramid1.png';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const resManual = () => {
    const [isUsernameUserStoryExpanded, setIsUsernameUserStoryExpanded] = useState(false);
    const [isUsernameBDDExpanded, setIsUsernameBDDExpanded] = useState(false);
    const [isUsernameTestCasesExpanded, setIsUsernameTestCasesExpanded] = useState(false);
    const [isUsernameBDDTestCasesExpanded, setIsUsernameBDDTestCasesExpanded] = useState(false);
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
                        Software Manual Testing
                    </h1>
                    <p style={leftAlignStyles.heroSubtitle}>
                        Comprehensive Guide to Manual Testing Practices and Methodologies
                    </p>
                        </div>
                <div style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <img 
                        src={getImageSrc(ManualLogo)} 
                        alt='Manual Testing Logo'
                        style={{
                            maxWidth: '300px',
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            filter: 'brightness(1.1)'
                        }}
                    />
                        </div>
                    </div>

            {/* Main Content */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Introduction to Manual Testing
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Manual testing is the process of manually testing software for defects. It requires a tester to play the role of an end user whereby they use most of the application's features to ensure correct behavior.
                </p>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    What is Manual Testing?
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li>Manual Testing is a type of Software Testing where Testers manually execute test cases without using any automation tools</li>
                    <li>Manual Testing is the most primitive of all testing types and helps find bugs in the software system</li>
                    <li>Any new application must be manually tested before its testing can be automated</li>
                    <li>Manual Testing requires more effort but is necessary to check automation feasibility</li>
                    <li>Manual Testing does not require knowledge of any testing tool</li>
                </ul>

                <h3 style={leftAlignStyles.sectionHeadingWithMargin}>
                    Types of Manual Testing
                </h3>
                <ul style={leftAlignStyles.list}>
                    <li><strong>Web/UI/Frontend Manual Test:</strong> Testing the user interface and frontend functionality</li>
                    <li><strong>API/Backend Manual Test:</strong> Testing backend services and API endpoints</li>
                </ul>
            </div>

            {/* Testing Pyramid Section */}
                    <div style={{
                        display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
                    }}>
                        <div style={{
                            backgroundColor: '#ffffff',
                    padding: '30px',
                            borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <h3 style={{
                                color: '#00416A',
                        fontSize: '24px',
                                marginBottom: '20px',
                        fontWeight: 'bold'
                            }}>
                                Testing Pyramid
                            </h3>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '35px',
                                    backgroundColor: '#dc3545',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    fontWeight: '600',
                            fontSize: '12px',
                                    borderRadius: '4px',
                                    marginBottom: '4px',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                                }}>
                                    E2E (10%)
                                </div>
                                <div style={{
                                    width: '140px',
                                    height: '35px',
                                    backgroundColor: '#ffc107',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#333',
                                    fontWeight: '600',
                            fontSize: '12px',
                                    borderRadius: '4px',
                                    marginBottom: '4px',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                                }}>
                                    Integration (20%)
                                </div>
                                <div style={{
                                    width: '200px',
                                    height: '35px',
                                    backgroundColor: '#28a745',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    fontWeight: '600',
                            fontSize: '12px',
                                    borderRadius: '4px',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                                }}>
                                    Unit Tests (70%)
                                </div>
                            </div>
                        </div>

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
                                Test Distribution
                            </h3>
                            <div style={{
                        padding: '15px',
                                backgroundColor: '#f0f8ff',
                                borderRadius: '6px',
                        borderLeft: '4px solid #28a745',
                        marginBottom: '15px'
                            }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                                    Unit Tests (70%)
                                </p>
                        <p style={{ margin: '5px 0', fontSize: '13px', color: '#333', lineHeight: '1.6' }}>
                                    Fast, isolated tests for individual components/functions.
                                </p>
                            </div>
                            <div style={{
                        padding: '15px',
                                backgroundColor: '#fff9e6',
                                borderRadius: '6px',
                        borderLeft: '4px solid #ffc107',
                        marginBottom: '15px'
                            }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                                    Integration Tests (20%)
                                </p>
                        <p style={{ margin: '5px 0', fontSize: '13px', color: '#333', lineHeight: '1.6' }}>
                                    Tests for interactions between components/modules.
                                </p>
                            </div>
                            <div style={{
                        padding: '15px',
                                backgroundColor: '#ffe6e6',
                                borderRadius: '6px',
                                borderLeft: '4px solid #dc3545'
                            }}>
                        <p style={{ margin: '5px 0', fontWeight: '600', color: '#00416A', fontSize: '14px' }}>
                                    E2E / System Tests (10%)
                                </p>
                        <p style={{ margin: '5px 0', fontSize: '13px', color: '#333', lineHeight: '1.6' }}>
                                    End-to-end tests covering full user workflows.
                                </p>
                        </div>
                    </div>
                </div>

            {/* What is Software Testing Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    What is Software Testing?
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    Testing is the process consisting of all lifecycle activities, both static and dynamic, concerned with planning, preparation and evaluation of software products and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects.
                </p>
            </div>

            {/* Bugs and Defects Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Understanding Bugs, Defects, and Failures
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
                        What is a "bug"?
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        A bug is an error, flaw, mistake, failure, or fault in a computer code (program) that prevents it from behaving as intended (e.g., producing an incorrect result). When the expected results (according to the required documents) don't match with the actual results (while testing), then it is considered a bug.
                    </p>
                </div>

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
                        What is Errors, Defects, and Failures?
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        A person can make an error (mistake), which can lead to the introduction of a defect (fault or bug) in the software code or in some other related work product. An error that leads to the introduction of a defect in one work product can trigger an error that leads to the introduction of a defect in a related work product.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '20px 0',
                        width: '100%'
                    }}>
                        <img 
                            id='bugPicid' 
                            alt='Errors, Defects, and Failures' 
                            src={getImageSrc(DefectBugError)} 
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        If a defect in the code is executed, this may cause a failure, but not necessarily in all circumstances. For example, some defects require very specific inputs or preconditions to trigger a failure, which may occur rarely or never.
                    </p>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        marginTop: '20px',
                        borderLeft: '4px solid #00416A'
                    }}>
                        <p style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#00416A', textAlign: 'left' }}>
                            Common Causes of Errors:
                        </p>
                        <ul style={{
                            marginTop: '10px',
                            paddingLeft: '20px',
                            textAlign: 'left',
                            fontSize: '15px',
                            lineHeight: '1.8',
                            color: '#333'
                        }}>
                        <li>Time pressure</li>
                        <li>Human fallibility</li>
                        <li>Inexperienced or insufficiently skilled project participants</li>
                            <li>Miscommunication between project participants</li>
                            <li>Complexity of the code, design, architecture, or technologies used</li>
                            <li>Misunderstandings about intra-system and inter-system interfaces</li>
                            <li>New, unfamiliar technologies</li>
                    </ul>
                </div>
                </div>

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
                        Bug Life Cycle
                    </h3>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '20px 0',
                        width: '100%'
                    }}>
                        <img 
                            id='bugLifeCycleId' 
                            src={getImageSrc(BugLifeCycle)} 
                            alt='Bug Life Cycle' 
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* SDLC and STLC Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
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
                        Software Development Life Cycle (SDLC)
                    </h3>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        The systems (or software) development life cycle (SDLC) is a conceptual model used in project management that describes the stages involved in an information system development project, from an initial feasibility study through maintenance of the completed application.
                    </p>
                    <h5 style={{
                        color: '#00416A',
                        fontSize: '18px',
                        marginBottom: '15px',
                        fontWeight: '600'
                    }}>
                        SDLC Stages:
                    </h5>
                    <ol style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                        <li>Requirement phase</li>
                        <li>Design phase</li>
                        <li>Coding phase</li>
                        <li>Testing phase</li>
                        <li>Release phase</li>
                        <li>Maintenance</li>
                    </ol>
                </div>

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
                        Software Testing Life Cycle (STLC)
                </h3>
                    <p style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        The testing of software has its own life cycle. It starts with study and analyzing the requirements.
                    </p>
                    <h5 style={{
                        color: '#00416A',
                        fontSize: '18px',
                        marginBottom: '15px',
                        fontWeight: '600'
                    }}>
                        STLC Stages:
                    </h5>
                    <ol style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                        color: '#333',
                        paddingLeft: '20px'
                    }}>
                    <li>Requirement Study</li>
                    <li>Test Planning</li>
                    <li>Writing Test Cases</li>
                    <li>Review the Test Cases</li>
                    <li>Executing the Test Cases</li>
                    <li>Bug logging and tracking</li>
                    <li>Bug Re-test</li>
                    <li>Close or Reopen bugs</li>
                    <li>Result and Report</li>
                </ol>
                </div>
            </div>

            {/* Test Plan and Strategy Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Test Planning and Strategy
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
                        What is a Test Plan?
                    </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        A Test Plan defines and provides a layout of how and what to test. The Test Plan is a document describing the scope, approach, resources, and schedule of intended testing activities. It identifies test items, the features to be tested, the testing tasks and who will do each task (roles and responsibilities) and any risks and its solutions.
                    </p>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        textAlign: 'left'
                    }}>
                    A Test Plan includes Heading, Revision History, Table of Contents, Introduction, Scope, Approach, Overview, different types of testing that will be carried out, what software and hardware will be required, issues, risks, assumptions and signs off section.
                </p>
                </div>

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
                    What is Test Strategy?
                </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        A test strategy is an outline that describes the testing portion of the software development cycle. It is created to inform project managers, testers, and developers about some key issues of the testing process.
                    </p>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        textAlign: 'left'
                    }}>
                        The test strategy includes introduction, scope, resource and schedule for test activities, acceptance criteria, test environment, test tools, test priorities, test planning, executing a test pass and types of test to be performed, Roles and Responsibilities, Test Status Collections and Reporting, Test Records Maintenance, Test Summary.
                    </p>
                </div>
            </div>

            {/* Test Cases Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Test Cases and Documentation
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
                        What is a Test Case?
                </h3>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: '#333333',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                    A Test Case is a document that describes step by step process how to test the application. A Test Case includes Test Case ID, Steps Description, Expected Output, Actual Output, Pass/Fail, Remarks. 
                </p>
                </div>

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
                        Test Case Writing Tools
                </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '15px',
                        marginTop: '15px'
                    }}>
                        {['MS Excel', 'Confluence', 'HP Quality Center', 'Zephyr', 'Adaptavist', 'TestRail', 'qTest', 'Xray', 'TestCaseLab', 'TestMonitor', 'Testpad', 'ReQtest', 'XQual', 'Test Collab', 'PractiTest'].map((tool, index) => (
                            <div key={index} style={{
                                backgroundColor: '#f8f9fa',
                                padding: '12px',
                                borderRadius: '6px',
                                textAlign: 'center',
                                fontSize: '14px',
                                color: '#333'
                            }}>
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testing Types Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Types of Testing
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '30px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '25px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #28a745',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Functional Testing
                </h3>
                        <p style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Testing the application against business requirements. Functional testing is done using the functional specifications provided by the client or by using the design specifications like use cases provided by the design team.
                        </p>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '16px',
                            marginBottom: '10px',
                            fontWeight: '600'
                        }}>
                            Includes:
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                    <li>Unit Testing</li>
                            <li>Integration Testing</li>
                            <li>Smoke Testing</li>
                    <li>Regression Testing</li>
                            <li>Sanity Testing</li>
                            <li>User Acceptance Testing</li>
                    <li>System Testing</li>
                            <li>Black Box and White Box Testing</li>
                        </ul>
                    </div>

                    <div style={{
                        backgroundColor: '#ffffff',
                        padding: '25px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #ffc107',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{
                            color: '#00416A',
                            fontSize: '20px',
                            marginBottom: '15px',
                            fontWeight: 'bold'
                        }}>
                            Non-Functional Testing
                </h3>
                        <p style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            marginBottom: '15px'
                        }}>
                            Testing the application against clients and performance requirement. Non-Functioning testing is done based on the requirements and test scenarios defined by the client.
                        </p>
                        <h5 style={{
                            color: '#00416A',
                            fontSize: '16px',
                            marginBottom: '10px',
                            fontWeight: '600'
                        }}>
                            Includes:
                        </h5>
                        <ul style={{
                            fontSize: '14px',
                            lineHeight: '1.8',
                            color: '#333',
                            paddingLeft: '20px'
                        }}>
                            <li>Performance Testing</li>
                            <li>Load Testing</li>
                            <li>Stress Testing</li>
                            <li>Security Testing</li>
                            <li>Usability Testing</li>
                            <li>Compatibility Testing</li>
                            <li>Reliability Testing</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Test Pyramid Images */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    The Practical Test Pyramid
                </h2>
                <p style={leftAlignStyles.paragraph}>
                    If you want to get serious about automated tests for your software there is one key concept you should know about: <a href='https://martinfowler.com/articles/practical-test-pyramid.html' target="_blank" rel="noopener noreferrer" style={{ color: '#00416A', textDecoration: 'underline' }}>the test pyramid</a>.
                </p>
                <p style={leftAlignStyles.paragraph}>
                    Mike Cohn's original test pyramid consists of three layers that your test suite should consist of (bottom to top):
                </p>
                <ul style={leftAlignStyles.list}>
                    <li>Unit Tests</li>
                    <li>Service(API) Tests</li>
                    <li>User Interface(UI) Tests</li>
                </ul>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '30px',
                    marginBottom: '30px'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img 
                            id='testPyramid-1' 
                            src={getImageSrc(TestPyramid)} 
                            alt='Test Pyramid' 
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}
                        />
                </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img 
                            id='testPyramid-2' 
                            src={getImageSrc(TestPyramid1)} 
                            alt='Test Pyramid' 
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Key Concepts Section */}
            <div style={leftAlignStyles.mainContent}>
                <h2 style={leftAlignStyles.sectionHeading}>
                    Key Testing Concepts
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    {[
                        { title: 'Smoke Testing', desc: 'Initial set of tests to check whether major functionalities are working or not and to check major breakdowns in the application.' },
                        { title: 'Regression Testing', desc: 'Repeated testing to ensure newly added functionality does not break the application. Also done after developers fix bugs.' },
                        { title: 'Sanity Testing', desc: 'Done after thorough regression testing to ensure defect fixes or changes do not break core functionality.' },
                        { title: 'System Testing', desc: 'Testing based on overall requirements specification covering all combined parts of a system.' },
                        { title: 'Black Box Testing', desc: 'Testing method where the application is viewed as a black box and internal behavior is ignored. Testing occurs based on external specifications.' },
                        { title: 'White Box Testing', desc: 'Testing where tester looks into the code and performs testing.' },
                        { title: 'Load Testing', desc: 'Test to check user response time of number of users using any one scenario of the same application at the same time.' },
                        { title: 'Performance Testing', desc: 'Test to check user response time for multiple scenarios of the same application at the same time.' },
                        { title: 'Stress Testing', desc: 'Testing application against heavy load such as complex numerical values, large number of inputs, large number of queries.' }
                    ].map((concept, index) => (
                        <div key={index} style={{
                            backgroundColor: '#ffffff',
                            padding: '20px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #00416A',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}>
                            <h4 style={{
                                color: '#00416A',
                                fontSize: '18px',
                                marginBottom: '10px',
                                fontWeight: 'bold'
                            }}>
                                {concept.title}
                            </h4>
                            <p style={{
                                fontSize: '14px',
                                lineHeight: '1.6',
                                color: '#333',
                                margin: 0
                            }}>
                                {concept.desc}
                            </p>
                        </div>
                    ))}
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
                    href={link.TypesOfSoftwareTesting} 
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
                    Different Types Of Software Testing
                </a>
                <a 
                    href="https://www.mountaingoatsoftware.com/agile" 
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
                    SCRUM and User Stories
                </a>
            </div>

            {/* Collapsible: Standard ui-traditional-based-focused user stories for a username input field */}
            <div style={{
                ...leftAlignStyles.mainContent,
                marginTop: '32px',
                marginBottom: '40px',
                backgroundColor: '#ffffff',
                padding: '0',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                overflow: 'hidden'
            }}>
                <div
                    onClick={() => setIsUsernameUserStoryExpanded(!isUsernameUserStoryExpanded)}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 24px',
                        backgroundColor: isUsernameUserStoryExpanded ? 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)' : '#f8f9fa',
                        background: isUsernameUserStoryExpanded ? 'linear-gradient(135deg, #00416A 0%, #005a8a 100%)' : '#f8f9fa',
                        color: isUsernameUserStoryExpanded ? '#ffffff' : '#00416A',
                        borderBottom: isUsernameUserStoryExpanded ? 'none' : '1px solid #e9ecef',
                        transition: 'all 0.2s ease'
                    }}
                >
                    <h3 style={{
                        margin: 0,
                        fontSize: '20px',
                        fontWeight: '600'
                    }}>
                        Standard ui-traditional-based-focused user stories for a username input field
                    </h3>
                    <span style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transform: isUsernameUserStoryExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                    }}>
                        ▼
                    </span>
                </div>
                {isUsernameUserStoryExpanded && (
                    <div style={{
                        padding: '28px 24px 32px',
                        borderTop: '1px solid #e9ecef'
                    }}>
                        <p style={{ ...leftAlignStyles.paragraph, marginBottom: '20px' }}>
                            Here are a few <strong>standard UI-focused user stories</strong> for a <strong>Username input field</strong>, written in a typical Agile format (with clear acceptance criteria).
                        </p>
                        <p style={{
                            ...leftAlignStyles.paragraph,
                            marginBottom: '20px',
                            padding: '12px 16px',
                            backgroundColor: '#f0f9ff',
                            borderLeft: '4px solid #00416A',
                            borderRadius: '4px',
                            fontStyle: 'italic'
                        }}>
                            <strong>Note:</strong> This story is a <strong>template</strong> and follows a <strong>traditional-based user story</strong> format (As a / I want / So that). Adapt the acceptance criteria to your product and team conventions.
                        </p>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '18px', color: '#00416A' }}>
                            User Story: Enter a Username
                        </h4>
                        <p style={{ ...leftAlignStyles.paragraph, marginBottom: '16px' }}>
                            <strong>As a</strong> user creating an account<br />
                            <strong>I want</strong> a username input field that clearly tells me what's allowed and validates my entry<br />
                            <strong>So that</strong> I can choose a valid username and continue registration without confusion
                        </p>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '16px', color: '#333' }}>
                            Acceptance Criteria (UI/UX)
                        </h4>

                        <div style={{ marginBottom: '20px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px', color: '#00416A' }}>1. Field visibility & label</strong>
                            <ul style={leftAlignStyles.list}>
                                <li>Username field is visible on the form.</li>
                                <li>Label is “Username” (not placeholder-only).</li>
                                <li>Placeholder example is shown (e.g., <code style={{ background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>e.g., mdzaman123</code>).</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px', color: '#00416A' }}>2. Required indicator</strong>
                            <ul style={leftAlignStyles.list}>
                                <li>If required, show an asterisk <code>*</code> or “Required”.</li>
                                <li>If left empty and user attempts submit, show an inline error: “Username is required.”</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px', color: '#00416A' }}>3. Allowed format help text</strong>
                            <ul style={leftAlignStyles.list}>
                                <li>Display helper text near the field (or on focus), e.g.: “3–20 characters. Letters, numbers, underscore. No spaces.”</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px', color: '#00416A' }}>4. Validation behavior</strong>
                            <ul style={leftAlignStyles.list}>
                                <li>Validate on blur (when user leaves the field) and on submit.</li>
                                <li>If invalid, show inline error and highlight field (red border + error text).</li>
                                <li>Error message is specific:</li>
                            </ul>
                            <ul style={{ ...leftAlignStyles.list, marginLeft: '24px', marginTop: '8px' }}>
                                <li>Too short: “Username must be at least 3 characters.”</li>
                                <li>Too long: “Username can't exceed 20 characters.”</li>
                                <li>Invalid characters: “Only letters, numbers, and underscores are allowed.”</li>
                                <li>Spaces: “Spaces are not allowed.”</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px', color: '#00416A' }}>5. Real-time feedback (optional but common)</strong>
                            <ul style={leftAlignStyles.list}>
                                <li>While typing, show a subtle “Looks good” state once valid (optional).</li>
                                <li>Do not show error while user is actively typing until blur/submit (to reduce noise).</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <strong style={{ display: 'block', marginBottom: '8px', color: '#00416A' }}>6. Accessibility</strong>
                            <ul style={leftAlignStyles.list}>
                                <li>Field has programmatic label association.</li>
                                <li>Error message is announced by screen readers (aria-live or equivalent).</li>
                                <li>Field supports keyboard navigation and focus states.</li>
                                <li>Color is not the only indicator (icon/text included).</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '0' }}>
                            <strong style={{ display: 'block', marginBottom: '8px', color: '#00416A' }}>7. Security / input handling</strong>
                            <ul style={leftAlignStyles.list}>
                                <li>Input is trimmed for leading/trailing spaces.</li>
                                <li>Prevent pasting invalid characters only if product requires it; otherwise allow paste but validate.</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            {/* Collapsible: Standard ui-bdd-focused user stories for a username input field */}
            <div style={{
                ...leftAlignStyles.mainContent,
                marginTop: '24px',
                marginBottom: '40px',
                backgroundColor: '#ffffff',
                padding: '0',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                overflow: 'hidden'
            }}>
                <div
                    onClick={() => setIsUsernameBDDExpanded(!isUsernameBDDExpanded)}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 24px',
                        backgroundColor: isUsernameBDDExpanded ? 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)' : '#f0fdfa',
                        background: isUsernameBDDExpanded ? 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)' : '#f0fdfa',
                        color: isUsernameBDDExpanded ? '#ffffff' : '#0f766e',
                        borderBottom: isUsernameBDDExpanded ? 'none' : '1px solid #ccfbf1',
                        transition: 'all 0.2s ease'
                    }}
                >
                    <h3 style={{
                        margin: 0,
                        fontSize: '20px',
                        fontWeight: '600'
                    }}>
                        Standard ui-bdd-focused user stories for a username input field
                    </h3>
                    <span style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transform: isUsernameBDDExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                    }}>
                        ▼
                    </span>
                </div>
                {isUsernameBDDExpanded && (
                    <div style={{
                        padding: '28px 24px 32px',
                        borderTop: '1px solid #e9ecef'
                    }}>
                        <p style={{ ...leftAlignStyles.paragraph, marginBottom: '20px' }}>
                            Below are the same Username input requirements expressed as <strong>BDD (Behavior-Driven Development)</strong> scenarios in Gherkin format (<strong>Given / When / Then</strong>). Use these for executable specifications and automation.
                        </p>
                        <p style={{
                            ...leftAlignStyles.paragraph,
                            marginBottom: '20px',
                            padding: '12px 16px',
                            backgroundColor: '#f0fdfa',
                            borderLeft: '4px solid #0d9488',
                            borderRadius: '4px',
                            fontStyle: 'italic'
                        }}>
                            <strong>Note:</strong> This is a <strong>template</strong> in <strong>BDD/Gherkin</strong> style. Adapt the feature and scenario text to your product and tooling (e.g., Cucumber, SpecFlow).
                        </p>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '18px', color: '#0f766e' }}>
                            Feature: Username input on registration
                        </h4>
                        <p style={{ ...leftAlignStyles.paragraph, marginBottom: '16px', fontStyle: 'italic', color: '#555' }}>
                            In order to register with a valid username<br />
                            As a user creating an account<br />
                            I want the form to show and validate the username field clearly
                        </p>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '16px', color: '#333' }}>
                            Scenarios (Gherkin)
                        </h4>

                        <div style={{
                            marginBottom: '20px',
                            padding: '16px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.7'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Scenario: Username field is visible and labeled</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488' }}>Given</span> I am on the registration form<br />
                                <span style={{ color: '#0d9488' }}>When</span> I view the form<br />
                                <span style={{ color: '#0d9488' }}>Then</span> I see a field labeled "Username"<br />
                                <span style={{ color: '#0d9488' }}>And</span> a placeholder is shown (e.g., "e.g., mdzaman123")
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '20px',
                            padding: '16px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.7'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Scenario: Required username shows error on submit when empty</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488' }}>Given</span> I am on the registration form<br />
                                <span style={{ color: '#0d9488' }}>And</span> the Username field is required (e.g., asterisk shown)<br />
                                <span style={{ color: '#0d9488' }}>When</span> I leave Username empty and submit the form<br />
                                <span style={{ color: '#0d9488' }}>Then</span> I see an inline error "Username is required."<br />
                                <span style={{ color: '#0d9488' }}>And</span> the Username field is highlighted (e.g., red border)
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '20px',
                            padding: '16px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.7'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Scenario: Username too short shows validation error</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488' }}>Given</span> I am on the registration form<br />
                                <span style={{ color: '#0d9488' }}>When</span> I enter "ab" in the Username field and blur or submit<br />
                                <span style={{ color: '#0d9488' }}>Then</span> I see an error "Username must be at least 3 characters."
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '20px',
                            padding: '16px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.7'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Scenario: Username too long shows validation error</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488' }}>Given</span> I am on the registration form<br />
                                <span style={{ color: '#0d9488' }}>When</span> I enter more than 20 characters in the Username field and blur or submit<br />
                                <span style={{ color: '#0d9488' }}>Then</span> I see an error "Username can't exceed 20 characters."
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '20px',
                            padding: '16px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.7'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Scenario: Username with invalid characters shows error</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488' }}>Given</span> I am on the registration form<br />
                                <span style={{ color: '#0d9488' }}>When</span> I enter "user@name" or "user name" and blur or submit<br />
                                <span style={{ color: '#0d9488' }}>Then</span> I see an error such as "Only letters, numbers, and underscores are allowed." or "Spaces are not allowed."
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '0',
                            padding: '16px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.7'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Scenario: Valid username is accepted</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488' }}>Given</span> I am on the registration form<br />
                                <span style={{ color: '#0d9488' }}>When</span> I enter "mdzaman123" in the Username field and blur or submit<br />
                                <span style={{ color: '#0d9488' }}>Then</span> no validation error is shown for Username<br />
                                <span style={{ color: '#0d9488' }}>And</span> I can proceed (or see a positive indicator if implemented)
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Collapsible: Standard ui-traditional-based-focused manual test cases for a username input field */}
            <div style={{
                ...leftAlignStyles.mainContent,
                marginTop: '24px',
                marginBottom: '40px',
                backgroundColor: '#ffffff',
                padding: '0',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                overflow: 'hidden'
            }}>
                <div
                    onClick={() => setIsUsernameTestCasesExpanded(!isUsernameTestCasesExpanded)}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 24px',
                        backgroundColor: isUsernameTestCasesExpanded ? 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)' : '#f5f3ff',
                        background: isUsernameTestCasesExpanded ? 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)' : '#f5f3ff',
                        color: isUsernameTestCasesExpanded ? '#ffffff' : '#5b21b6',
                        borderBottom: isUsernameTestCasesExpanded ? 'none' : '1px solid #ede9fe',
                        transition: 'all 0.2s ease'
                    }}
                >
                    <h3 style={{
                        margin: 0,
                        fontSize: '20px',
                        fontWeight: '600'
                    }}>
                        Standard ui-traditional-based-focused manual test cases for a username input field
                    </h3>
                    <span style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transform: isUsernameTestCasesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                    }}>
                        ▼
                    </span>
                </div>
                {isUsernameTestCasesExpanded && (
                    <div style={{
                        padding: '28px 24px 32px',
                        borderTop: '1px solid #e9ecef'
                    }}>
                        <p style={{ ...leftAlignStyles.paragraph, marginBottom: '20px' }}>
                            Below are <strong>traditional-style manual test cases</strong> for the Username input field, written as <strong>baby steps</strong> (one clear action per step) so any tester can follow them step by step.
                        </p>
                        <p style={{
                            ...leftAlignStyles.paragraph,
                            marginBottom: '24px',
                            padding: '12px 16px',
                            backgroundColor: '#f5f3ff',
                            borderLeft: '4px solid #7c3aed',
                            borderRadius: '4px',
                            fontStyle: 'italic'
                        }}>
                            <strong>Note:</strong> This is a <strong>template</strong>. Adapt test case IDs, steps, and expected results to your product and naming conventions.
                        </p>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '18px', color: '#5b21b6' }}>
                            TC-UN-001: Username field is visible and labeled
                        </h4>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f5f3ff' }}>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0', width: '60px' }}>Step</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Action (baby step)</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Expected Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>1</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Open the registration page.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Registration form is displayed.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>2</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Locate the Username field on the form.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>A Username input field is visible.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>3</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Check the label next to or above the field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Label text is "Username" (not placeholder-only).</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>4</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Check the placeholder inside the field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Placeholder shows an example (e.g., "e.g., mdzaman123").</td></tr>
                            </tbody>
                        </table>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '18px', color: '#5b21b6' }}>
                            TC-UN-002: Required indicator and error when Username is empty on submit
                        </h4>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f5f3ff' }}>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0', width: '60px' }}>Step</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Action (baby step)</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Expected Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>1</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Open the registration page.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Form is displayed.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>2</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Check if the Username field shows a required indicator (e.g., asterisk * or "Required").</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Required indicator is visible.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>3</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Leave the Username field empty.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Field remains empty.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>4</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Click the Submit (or Register) button.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Form does not submit successfully.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>5</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Check the message near the Username field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Inline error "Username is required." is displayed; field may have red border.</td></tr>
                            </tbody>
                        </table>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '18px', color: '#5b21b6' }}>
                            TC-UN-003: Username too short shows validation error
                        </h4>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f5f3ff' }}>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0', width: '60px' }}>Step</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Action (baby step)</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Expected Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>1</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Open the registration page.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Form is displayed.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>2</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Click in the Username field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Field receives focus.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>3</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Type "ab" (two characters).</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Text "ab" appears in the field.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>4</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Click outside the field (blur) or click Submit.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Validation runs.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>5</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Check the error message near the Username field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Error "Username must be at least 3 characters." is shown; field may have red border.</td></tr>
                            </tbody>
                        </table>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '18px', color: '#5b21b6' }}>
                            TC-UN-004: Username too long shows validation error
                        </h4>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f5f3ff' }}>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0', width: '60px' }}>Step</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Action (baby step)</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Expected Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>1</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Open the registration page.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Form is displayed.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>2</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Click in the Username field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Field receives focus.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>3</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Enter more than 20 characters (e.g., "abcdefghijklmnopqrstuvwxyz").</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Text appears in the field (or is truncated per product).</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>4</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Click outside the field (blur) or click Submit.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Validation runs.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>5</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Check the error message near the Username field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Error "Username can't exceed 20 characters." is shown; field may have red border.</td></tr>
                            </tbody>
                        </table>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '18px', color: '#5b21b6' }}>
                            TC-UN-005: Username with invalid characters (e.g., spaces) shows error
                        </h4>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f5f3ff' }}>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0', width: '60px' }}>Step</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Action (baby step)</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Expected Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>1</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Open the registration page.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Form is displayed.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>2</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Click in the Username field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Field receives focus.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>3</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Type "user name" (with a space) or "user@name".</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Text appears in the field.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>4</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Click outside the field (blur) or click Submit.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Validation runs.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>5</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Check the error message near the Username field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Error such as "Spaces are not allowed." or "Only letters, numbers, and underscores are allowed." is shown.</td></tr>
                            </tbody>
                        </table>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '18px', color: '#5b21b6' }}>
                            TC-UN-006: Valid username is accepted (happy path)
                        </h4>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginBottom: '0', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f5f3ff' }}>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0', width: '60px' }}>Step</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Action (baby step)</th>
                                    <th style={{ padding: '10px 12px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Expected Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>1</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Open the registration page.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Form is displayed.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>2</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Click in the Username field.</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Field receives focus.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>3</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Type "mdzaman123" (3–20 chars, letters and numbers).</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Text appears in the field.</td></tr>
                                <tr style={{ backgroundColor: '#fafafa' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>4</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Click outside the field (blur).</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>No validation error is shown; optional "Looks good" may appear.</td></tr>
                                <tr style={{ backgroundColor: '#fff' }}><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0', fontWeight: '600' }}>5</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Fill other required fields and click Submit (if testing full form).</td><td style={{ padding: '10px 12px', border: '1px solid #e2e8f0' }}>Username is accepted; form can proceed without Username error.</td></tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Collapsible: Standard ui-bdd-focused manual test cases for a username input field */}
            <div style={{
                ...leftAlignStyles.mainContent,
                marginTop: '24px',
                marginBottom: '40px',
                backgroundColor: '#ffffff',
                padding: '0',
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                overflow: 'hidden'
            }}>
                <div
                    onClick={() => setIsUsernameBDDTestCasesExpanded(!isUsernameBDDTestCasesExpanded)}
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 24px',
                        backgroundColor: isUsernameBDDTestCasesExpanded ? 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)' : '#ecfdf5',
                        background: isUsernameBDDTestCasesExpanded ? 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)' : '#ecfdf5',
                        color: isUsernameBDDTestCasesExpanded ? '#ffffff' : '#047857',
                        borderBottom: isUsernameBDDTestCasesExpanded ? 'none' : '1px solid #a7f3d0',
                        transition: 'all 0.2s ease'
                    }}
                >
                    <h3 style={{
                        margin: 0,
                        fontSize: '20px',
                        fontWeight: '600'
                    }}>
                        Standard ui-bdd-focused manual test cases for a username input field
                    </h3>
                    <span style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transform: isUsernameBDDTestCasesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                    }}>
                        ▼
                    </span>
                </div>
                {isUsernameBDDTestCasesExpanded && (
                    <div style={{
                        padding: '28px 24px 32px',
                        borderTop: '1px solid #e9ecef'
                    }}>
                        <p style={{ ...leftAlignStyles.paragraph, marginBottom: '20px' }}>
                            Below are <strong>manual test cases</strong> for the Username input field written in <strong>BDD (Gherkin) format</strong>. Each scenario uses <strong>Given / When / Then</strong> so testers (or automation) can execute and verify step by step. These are manual test cases expressed in BDD style.
                        </p>
                        <p style={{
                            ...leftAlignStyles.paragraph,
                            marginBottom: '24px',
                            padding: '12px 16px',
                            backgroundColor: '#ecfdf5',
                            borderLeft: '4px solid #0d9488',
                            borderRadius: '4px',
                            fontStyle: 'italic'
                        }}>
                            <strong>Note:</strong> This is a <strong>template</strong>. Use these scenarios for manual execution or adapt for Cucumber/SpecFlow. Each step is a single action or verification.
                        </p>

                        <h4 style={{ ...leftAlignStyles.sectionHeadingWithMargin, fontSize: '16px', color: '#047857' }}>
                            Feature: Username input – manual test cases (BDD format)
                        </h4>

                        <div style={{
                            marginBottom: '24px',
                            padding: '16px 20px',
                            backgroundColor: '#f0fdfa',
                            borderRadius: '8px',
                            border: '1px solid #99f6e4',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.8'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Manual TC-BDD-UN-001: Username field is visible and labeled</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Given</span> I am on the registration page<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>When</span> I look at the form<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Then</span> I see a Username input field<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> the field has a label "Username"<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> a placeholder is shown (e.g., "e.g., mdzaman123")
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '24px',
                            padding: '16px 20px',
                            backgroundColor: '#f0fdfa',
                            borderRadius: '8px',
                            border: '1px solid #99f6e4',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.8'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Manual TC-BDD-UN-002: Required username shows error when empty on submit</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Given</span> I am on the registration page<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> the Username field shows a required indicator (e.g., *)<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>When</span> I leave the Username field empty<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> I click the Submit (or Register) button<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Then</span> the form does not submit successfully<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> I see an inline error "Username is required." near the Username field<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> the Username field is highlighted (e.g., red border)
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '24px',
                            padding: '16px 20px',
                            backgroundColor: '#f0fdfa',
                            borderRadius: '8px',
                            border: '1px solid #99f6e4',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.8'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Manual TC-BDD-UN-003: Username too short shows validation error</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Given</span> I am on the registration page<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>When</span> I enter "ab" in the Username field<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> I click outside the field (blur) or click Submit<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Then</span> I see an inline error "Username must be at least 3 characters."<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> the Username field is highlighted (e.g., red border)
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '24px',
                            padding: '16px 20px',
                            backgroundColor: '#f0fdfa',
                            borderRadius: '8px',
                            border: '1px solid #99f6e4',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.8'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Manual TC-BDD-UN-004: Username too long shows validation error</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Given</span> I am on the registration page<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>When</span> I enter more than 20 characters in the Username field<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> I click outside the field (blur) or click Submit<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Then</span> I see an inline error "Username can't exceed 20 characters."<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> the Username field is highlighted (e.g., red border)
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '24px',
                            padding: '16px 20px',
                            backgroundColor: '#f0fdfa',
                            borderRadius: '8px',
                            border: '1px solid #99f6e4',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.8'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Manual TC-BDD-UN-005: Username with invalid characters shows error</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Given</span> I am on the registration page<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>When</span> I enter "user name" (with space) or "user@name" in the Username field<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> I click outside the field (blur) or click Submit<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Then</span> I see an inline error such as "Spaces are not allowed." or "Only letters, numbers, and underscores are allowed."<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> the Username field is highlighted (e.g., red border)
                            </div>
                        </div>

                        <div style={{
                            marginBottom: '0',
                            padding: '16px 20px',
                            backgroundColor: '#f0fdfa',
                            borderRadius: '8px',
                            border: '1px solid #99f6e4',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            lineHeight: '1.8'
                        }}>
                            <strong style={{ display: 'block', marginBottom: '10px', color: '#0f766e' }}>Manual TC-BDD-UN-006: Valid username is accepted (happy path)</strong>
                            <div style={{ marginLeft: '8px' }}>
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Given</span> I am on the registration page<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>When</span> I enter "mdzaman123" in the Username field (3–20 chars, letters/numbers)<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> I click outside the field (blur)<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>Then</span> no validation error is shown for the Username field<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> I may see a positive indicator (e.g., "Looks good") if implemented<br />
                                <span style={{ color: '#0d9488', fontWeight: '600' }}>And</span> when I submit the form (with other required fields filled), the Username is accepted and the form proceeds
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}

export default resManual;
