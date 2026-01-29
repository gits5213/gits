import React from 'react';
import link from '../../../utilities/links.json';
import ManualLogo from '../../../images/tabs/manualLogo.png';
import DefectBugError from '../../../images/tabs/defectBugError.png';
import BugLifeCycle from '../../../images/tabs/bugLifeCycle.png';
import TestPyramid from '../../../images/tabs/testPyramid.png';
import TestPyramid1 from '../../../images/tabs/testPyramid1.png';
import { getImageSrc } from '../../../utils/getImageSrc';
import { leftAlignStyles } from '../../../utils/globalStyles';

const resManual = () => {
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

            <section style={{ marginTop: '40px' }}>
                </section>
        </div>
    )
}

export default resManual;
