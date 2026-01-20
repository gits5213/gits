import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
            }
        ];

        return (
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '40px 20px'
            }}>
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#00416A',
                    marginBottom: '10px',
                    textAlign: 'center'
                }}>
                    Quiz Exams
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: '#666',
                    textAlign: 'center',
                    marginBottom: '40px'
                }}>
                    Select an exam to begin. Each exam can only be taken once.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '40px'
                }}>
                    {exams.map((exam) => (
                        <div
                            key={exam.id}
                            style={{
                                backgroundColor: '#ffffff',
                                border: '2px solid #e0e0e0',
                                borderRadius: '12px',
                                padding: '30px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
                                e.currentTarget.style.borderColor = '#00416A';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = '#e0e0e0';
                            }}
                        >
                            <div style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#00416A',
                                marginBottom: '10px'
                            }}>
                                {exam.name}
                            </div>
                            <div style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#333',
                                marginBottom: '10px'
                            }}>
                                {exam.title}
                            </div>
                            <p style={{
                                fontSize: '14px',
                                color: '#666',
                                marginBottom: '20px',
                                lineHeight: '1.6'
                            }}>
                                {exam.description}
                            </p>
                            <Link
                                to={exam.path}
                                style={{
                                    display: 'inline-block',
                                    padding: '12px 24px',
                                    backgroundColor: '#00416A',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    borderRadius: '6px',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    textAlign: 'center',
                                    width: '100%',
                                    boxSizing: 'border-box'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#003050';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#00416A';
                                }}
                            >
                                Start Exam
                            </Link>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '50px',
                    padding: '20px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    borderLeft: '4px solid #00416A'
                }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#00416A',
                        marginBottom: '10px'
                    }}>
                        Important Instructions:
                    </h3>
                    <ul style={{
                        margin: 0,
                        paddingLeft: '20px',
                        color: '#333',
                        lineHeight: '1.8'
                    }}>
                        <li>Each exam can only be taken once</li>
                        <li>You must complete the exam in one session</li>
                        <li>Your progress will be saved automatically</li>
                        <li>You will receive a certificate if you score 100%</li>
                        <li>Cheating is strictly prohibited</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Quiz;
