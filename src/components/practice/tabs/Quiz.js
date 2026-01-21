import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer';
import '../../../styles/base.css';

class Quiz extends Component {
    render() {
        const exams = [
            { 
                id: 1, 
                name: 'Exam-1', 
                title: 'Basic Manual Testing',
                description: '10 questions covering fundamental manual testing concepts',
                path: '/practice/quiz/exam-1'
            },
            { 
                id: 2, 
                name: 'Exam-2', 
                title: 'Automation Testing (General)',
                description: '10 questions covering general automation testing principles',
                path: '/practice/quiz/exam-2'
            },
            { 
                id: 3, 
                name: 'Exam-3', 
                title: 'Playwright-Specific',
                description: '10 questions covering Playwright testing framework',
                path: '/practice/quiz/exam-3'
            },
            { 
                id: 4, 
                name: 'Exam-4', 
                title: 'Playwright Advanced - 1',
                description: '20 questions covering Playwright naming conventions, execution commands, and locators',
                path: '/practice/quiz/exam-4'
            },
            { 
                id: 5, 
                name: 'Exam-5', 
                title: 'Playwright Advanced - 2',
                description: '20 questions covering locator best practices, strict mode, filtering, and execution controls',
                path: '/practice/quiz/exam-5'
            },
            { 
                id: 6, 
                name: 'Exam-6', 
                title: 'Playwright Advanced - 3',
                description: '20 questions covering fixtures, hooks, assertions, auth reuse, network mocking, debugging, and execution',
                path: '/practice/quiz/exam-6'
            },
            { 
                id: 7, 
                name: 'Exam-7', 
                title: 'Playwright Advanced - 4',
                description: '20 questions covering configuration file settings and best practices for troubleshooting flaky tests',
                path: '/practice/quiz/exam-7'
            },
            { 
                id: 8, 
                name: 'Exam-8', 
                title: 'Playwright TypeScript & package.json',
                description: '20 questions covering package.json structure, scripts, dependencies, and TypeScript setup for Playwright projects',
                path: '/practice/quiz/exam-8'
            },
            { 
                id: 9, 
                name: 'Exam-9', 
                title: 'Playwright TypeScript Fundamentals',
                description: '20 questions covering TypeScript basics, types, interfaces, async/await, and best practices for Playwright',
                path: '/practice/quiz/exam-9'
            },
            { 
                id: 10, 
                name: 'Exam-10', 
                title: 'Git Fundamentals',
                description: '10 questions covering essential Git commands: clone, status, add, commit, push, pull, branches, and merge conflicts',
                path: '/practice/quiz/exam-10'
            },
            { 
                id: 11, 
                name: 'Exam-11', 
                title: 'Linux/Unix Command Line Fundamentals',
                description: '20 questions covering essential terminal commands: navigation, file operations, process management, disk usage, and permissions',
                path: '/practice/quiz/exam-11'
            },
            { 
                id: 12, 
                name: 'Exam-12', 
                title: 'HTML Fundamentals',
                description: '20 questions covering HTML basics: tags, attributes, forms, lists, semantic elements, and accessibility',
                path: '/practice/quiz/exam-12'
            },
            { 
                id: 13, 
                name: 'Exam-13', 
                title: 'CSS Fundamentals',
                description: '20 questions covering CSS basics: selectors, properties, box model, positioning, specificity, and layout',
                path: '/practice/quiz/exam-13'
            },
            { 
                id: 14, 
                name: 'Exam-14', 
                title: 'Agile & Scrum Fundamentals',
                description: '20 questions covering Agile/Scrum practices: sprints, QA role, backlog, acceptance criteria, shift-left, and collaboration',
                path: '/practice/quiz/exam-14'
            },
            { 
                id: 15, 
                name: 'Exam-15', 
                title: 'BDD (Behavior-Driven Development)',
                description: '20 questions covering BDD concepts: Gherkin syntax, Cucumber, feature files, step definitions, Scenario Outline, and best practices',
                path: '/practice/quiz/exam-15'
            },
            { 
                id: 16, 
                name: 'Exam-16', 
                title: 'JavaScript Fundamentals for Playwright',
                description: '20 questions covering JavaScript essentials: async/await, Promises, destructuring, arrays, loops, optional chaining, and best practices',
                path: '/practice/quiz/exam-16'
            },
            { 
                id: 17, 
                name: 'Exam-17', 
                title: 'Requirements, Test Cases & Bug Management',
                description: '50 questions covering requirements, acceptance criteria, test planning, bug reporting, defect management, and RTM (Requirements Traceability Matrix)',
                path: '/practice/quiz/exam-17'
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
                            marginTop: '20px'
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
                                    transition: 'all 0.3s ease'
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
                                        lineHeight: '1.5'
                                    }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modern Exam Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px',
                    marginTop: '40px'
                }}>
                    {exams.map((exam) => (
                        <div
                            key={exam.id}
                            style={{
                                backgroundColor: '#ffffff',
                                border: '2px solid #e9ecef',
                                borderRadius: '16px',
                                padding: '32px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 16px 32px rgba(102, 126, 234, 0.2)';
                                e.currentTarget.style.borderColor = '#667eea';
                                e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = '#e9ecef';
                                e.currentTarget.style.background = '#ffffff';
                            }}
                        >
                            {/* Exam Badge */}
                            <div style={{
                                display: 'inline-block',
                                padding: '6px 16px',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: '#ffffff',
                                borderRadius: '20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                marginBottom: '16px',
                                boxShadow: '0 4px 8px rgba(102, 126, 234, 0.3)'
                            }}>
                                {exam.name}
                            </div>
                            
                            <div style={{
                                fontSize: '22px',
                                fontWeight: 'bold',
                                color: '#333',
                                marginBottom: '12px',
                                lineHeight: '1.3'
                            }}>
                                {exam.title}
                            </div>
                            <p style={{
                                fontSize: '15px',
                                color: '#666',
                                marginBottom: '24px',
                                lineHeight: '1.6'
                            }}>
                                {exam.description}
                            </p>
                            <Link
                                to={exam.path}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    padding: '14px 24px',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    borderRadius: '10px',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    width: '100%',
                                    boxSizing: 'border-box',
                                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                                }}
                            >
                                <span>Start Exam</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Quiz;
