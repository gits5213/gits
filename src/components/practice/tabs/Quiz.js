import React, {Component} from 'react';
import Link from 'next/link';
// eslint-disable-next-line no-unused-vars
import '../../../styles/base.css';

class Quiz extends Component {
    render() {
        // Exams sorted numerically by ID (1-23)
        const exams = [
            { 
                id: 1, 
                name: 'Exam-1', 
                title: 'Software Testing Fundamentals: Manual Testing',
                description: '10 questions covering fundamental manual testing concepts',
                path: '/practice/quiz/exam-1'
            },
            { 
                id: 2, 
                name: 'Exam-2', 
                title: 'Test Automation Principles & Practices',
                description: '10 questions covering general automation testing principles',
                path: '/practice/quiz/exam-2'
            },
            { 
                id: 3, 
                name: 'Exam-3', 
                title: 'Playwright Testing Framework Fundamentals',
                description: '10 questions covering Playwright testing framework',
                path: '/practice/quiz/exam-3'
            },
            { 
                id: 4, 
                name: 'Exam-4', 
                title: 'Playwright Advanced: Naming Conventions, Execution & Locators',
                description: '20 questions covering Playwright naming conventions, execution commands, and locators',
                path: '/practice/quiz/exam-4'
            },
            { 
                id: 5, 
                name: 'Exam-5', 
                title: 'Playwright Advanced: Locator Strategies & Execution Controls',
                description: '20 questions covering locator best practices, strict mode, filtering, and execution controls',
                path: '/practice/quiz/exam-5'
            },
            { 
                id: 6, 
                name: 'Exam-6', 
                title: 'Playwright Advanced: Fixtures, Hooks & Test Architecture',
                description: '20 questions covering fixtures, hooks, assertions, auth reuse, network mocking, debugging, and execution',
                path: '/practice/quiz/exam-6'
            },
            { 
                id: 7, 
                name: 'Exam-7', 
                title: 'Playwright Advanced: Configuration & Test Stability',
                description: '20 questions covering configuration file settings and best practices for troubleshooting flaky tests',
                path: '/practice/quiz/exam-7'
            },
            { 
                id: 8, 
                name: 'Exam-8', 
                title: 'Playwright Project Setup: TypeScript & Dependencies',
                description: '20 questions covering package.json structure, scripts, dependencies, and TypeScript setup for Playwright projects',
                path: '/practice/quiz/exam-8'
            },
            { 
                id: 9, 
                name: 'Exam-9', 
                title: 'TypeScript Fundamentals for Playwright Testing',
                description: '20 questions covering TypeScript basics, types, interfaces, async/await, and best practices for Playwright',
                path: '/practice/quiz/exam-9'
            },
            { 
                id: 10, 
                name: 'Exam-10', 
                title: 'Version Control with Git: Essential Commands',
                description: '10 questions covering essential Git commands: clone, status, add, commit, push, pull, branches, and merge conflicts',
                path: '/practice/quiz/exam-10'
            },
            { 
                id: 11, 
                name: 'Exam-11', 
                title: 'Linux/Unix Terminal & Command Line Operations',
                description: '20 questions covering essential terminal commands: navigation, file operations, process management, disk usage, and permissions',
                path: '/practice/quiz/exam-11'
            },
            { 
                id: 12, 
                name: 'Exam-12', 
                title: 'Web Development: HTML Fundamentals',
                description: '20 questions covering HTML basics: tags, attributes, forms, lists, semantic elements, and accessibility',
                path: '/practice/quiz/exam-12'
            },
            { 
                id: 13, 
                name: 'Exam-13', 
                title: 'Web Development: CSS Fundamentals',
                description: '20 questions covering CSS basics: selectors, properties, box model, positioning, specificity, and layout',
                path: '/practice/quiz/exam-13'
            },
            { 
                id: 14, 
                name: 'Exam-14', 
                title: 'Agile & Scrum Methodology for QA Professionals',
                description: '20 questions covering Agile/Scrum practices: sprints, QA role, backlog, acceptance criteria, shift-left, and collaboration',
                path: '/practice/quiz/exam-14'
            },
            { 
                id: 15, 
                name: 'Exam-15', 
                title: 'Behavior-Driven Development (BDD) with Cucumber',
                description: '20 questions covering BDD concepts: Gherkin syntax, Cucumber, feature files, step definitions, Scenario Outline, and best practices',
                path: '/practice/quiz/exam-15'
            },
            { 
                id: 16, 
                name: 'Exam-16', 
                title: 'JavaScript Essentials for Test Automation',
                description: '20 questions covering JavaScript essentials: async/await, Promises, destructuring, arrays, loops, optional chaining, and best practices',
                path: '/practice/quiz/exam-16'
            },
            { 
                id: 17, 
                name: 'Exam-17', 
                title: 'Requirements Analysis, Test Case Design & Bug Management',
                description: '50 questions covering requirements, acceptance criteria, test planning, bug reporting, defect management, and RTM (Requirements Traceability Matrix)',
                path: '/practice/quiz/exam-17'
            },
            { 
                id: 18, 
                name: 'Exam-18', 
                title: 'BDD, Cucumber & Playwright Integration',
                description: '20 questions covering BDD concepts, Cucumber Gherkin syntax, Playwright commands, step definitions, hooks, World objects, and integration best practices',
                path: '/practice/quiz/exam-18'
            },
            { 
                id: 19, 
                name: 'Exam-19', 
                title: 'Postman, REST API & HTTP Methods',
                description: '20 questions covering Postman tool usage, REST API concepts, HTTP methods (GET, POST, PUT, PATCH, DELETE), status codes, headers, authentication, and API testing best practices',
                path: '/practice/quiz/exam-19'
            },
            { 
                id: 20, 
                name: 'Exam-20', 
                title: 'Performance Testing with JMeter',
                description: '20 questions covering JMeter fundamentals, performance testing concepts (load, stress, spike, endurance), JMeter components (Thread Groups, Samplers, Listeners, Timers), commands, assertions, and results analysis',
                path: '/practice/quiz/exam-20'
            },
            { 
                id: 21, 
                name: 'Exam-21', 
                title: 'Appium Test Automation with Windows',
                description: '20 questions covering Appium Windows automation, WinAppDriver setup, Windows application testing, capabilities, locator strategies, UI Automation framework, element identification, and desktop application automation',
                path: '/practice/quiz/exam-21'
            },
            { 
                id: 22, 
                name: 'Exam-22', 
                title: 'SQL Fundamentals',
                description: '20 questions covering SQL basics, SELECT statements, WHERE and HAVING clauses, JOINs (INNER, LEFT, RIGHT), aggregate functions (COUNT, SUM, AVG, MAX), GROUP BY, ORDER BY, INSERT, UPDATE, DELETE, constraints (PRIMARY KEY, FOREIGN KEY), and SQL operators',
                path: '/practice/quiz/exam-22'
            },
            { 
                id: 23, 
                name: 'Exam-23', 
                title: 'Git & Linux Fundamentals',
                description: '20 questions covering Git commands (clone, add, commit, push, pull, branch, merge, status, log, diff) and Linux commands (ls, cd, pwd, mkdir, rm, grep, chmod, ps, kill, du, df)',
                path: '/practice/quiz/exam-23'
            }
        ];

        return (
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '40px 20px',
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
            }}>
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
                                fontWeight: 'bold',
                                color: '#ffffff',
                                marginBottom: '15px',
                                textAlign: 'center',
                                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}>
                                Quiz Exams
                            </h1>
                            <p style={{
                                fontSize: '20px',
                                color: 'rgba(255,255,255,0.95)',
                                textAlign: 'center',
                                margin: 0,
                                fontWeight: '400'
                            }}>
                                Select an exam to begin your assessment journey
                            </p>
                        </div>
                    </div>
                </div>

                {/* Important Instructions Section - Modern Design */}
                <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '16px',
                    padding: '30px',
                    marginBottom: '40px',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative background pattern */}
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
                    
                    <div style={{
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '20px',
                            gap: '12px'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#ffffff',
                                margin: 0,
                                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}>
                                Important Instructions
                            </h3>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '16px',
                            marginTop: '20px',
                            textAlign: 'left'
                        }}>
                            {[
                                { icon: '🔒', text: 'Each exam can only be taken once' },
                                { icon: '⏱️', text: 'You must complete the exam in one session' },
                                { icon: '💾', text: 'Your progress will be saved automatically' },
                                { icon: '🏆', text: 'You will receive a certificate if you score 100%' },
                                { icon: '🚫', text: 'Cheating is strictly prohibited' }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 16px',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    borderRadius: '10px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    transition: 'all 0.3s ease',
                                    textAlign: 'left'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                                >
                                    <span style={{
                                        fontSize: '20px',
                                        lineHeight: '1'
                                    }}>{item.icon}</span>
                                    <span style={{
                                        color: '#ffffff',
                                        fontSize: '15px',
                                        fontWeight: '500',
                                        lineHeight: '1.5',
                                        textAlign: 'left'
                                    }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Exam Table */}
                <div style={{
                    marginTop: '40px',
                    overflowX: 'auto',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    border: '1px solid #e9ecef'
                }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        minWidth: '800px'
                    }}>
                        <thead>
                            <tr style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: '#ffffff'
                            }}>
                                <th style={{
                                    padding: '18px 20px',
                                    textAlign: 'left',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    borderBottom: '2px solid rgba(255,255,255,0.2)'
                                }}>
                                    #
                                </th>
                                <th style={{
                                    padding: '18px 20px',
                                    textAlign: 'left',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    borderBottom: '2px solid rgba(255,255,255,0.2)'
                                }}>
                                    Exam Name
                                </th>
                                <th style={{
                                    padding: '18px 20px',
                                    textAlign: 'left',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    borderBottom: '2px solid rgba(255,255,255,0.2)'
                                }}>
                                    Title
                                </th>
                                <th style={{
                                    padding: '18px 20px',
                                    textAlign: 'left',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    borderBottom: '2px solid rgba(255,255,255,0.2)'
                                }}>
                                    Description
                                </th>
                                <th style={{
                                    padding: '18px 20px',
                                    textAlign: 'left',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    borderBottom: '2px solid rgba(255,255,255,0.2)'
                                }}>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {exams.map((exam, index) => (
                                <tr
                                    key={exam.id}
                                    style={{
                                        backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                                        borderBottom: '1px solid #e9ecef',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#e3f2fd';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f8f9fa';
                                    }}
                                >
                                    <td style={{
                                        padding: '18px 20px',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#333',
                                        borderRight: '1px solid #e9ecef',
                                        textAlign: 'left'
                                    }}>
                                        {index + 1}
                                    </td>
                                    <td style={{
                                        padding: '18px 20px',
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        color: '#667eea'
                                    }}>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '4px 12px',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            color: '#ffffff',
                                            borderRadius: '12px',
                                            fontSize: '13px',
                                            fontWeight: '600'
                                        }}>
                                            {exam.name}
                                        </span>
                                    </td>
                                    <td style={{
                                        padding: '18px 20px',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#333',
                                        borderRight: '1px solid #e9ecef',
                                        textAlign: 'left'
                                    }}>
                                        {exam.title}
                                    </td>
                                    <td style={{
                                        padding: '18px 20px',
                                        fontSize: '15px',
                                        color: '#666',
                                        lineHeight: '1.5',
                                        borderRight: '1px solid #e9ecef',
                                        maxWidth: '500px',
                                        textAlign: 'left'
                                    }}>
                                        {exam.description}
                                    </td>
                                    <td style={{
                                        padding: '18px 20px',
                                        textAlign: 'left'
                                    }}>
                                        <Link
                                            href={typeof exam.path === 'string' ? exam.path : (exam.path?.pathname || exam.path?.href || '/practice/quiz')}
                                            prefetch={true}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                gap: '6px',
                                                padding: '10px 20px',
                                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                color: '#ffffff',
                                                textDecoration: 'none',
                                                borderRadius: '8px',
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                                            }}
                                        >
                                            <span>Start</span>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
        );
    }
}

export default Quiz;
