import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Certificate from '../../components/quiz/Certificate';
import Footer from '../../components/footer';
import { resetExam } from '../../utilities/examReset';
import { saveExamResult } from '../../utils/scoreStorage';
import '../../styles/base.css';

class Exam extends Component {
    constructor(props) {
        super(props);
        this.examData = props.examData;
        // Get examId from examData or from URL params
        this.examId = this.examData ? this.examData.examId : parseInt(props.match?.params?.examId || '0');
        
        // Check if exam was already taken
        const examTaken = localStorage.getItem(`examTaken_${this.examId}`);
        const studentInfo = JSON.parse(localStorage.getItem(`studentInfo_${this.examId}`) || 'null');
        
        this.state = {
            currentQuestion: 0,
            answers: {},
            startTime: null,
            endTime: null,
            timeElapsed: 0,
            isSubmitted: false,
            score: null,
            examTaken: examTaken === 'true',
            studentInfo: studentInfo,
            showCertificate: false,
            attemptNumber: examTaken === 'true' ? 1 : 1 // For one-attempt system, always 1
        };
    }

    componentDidMount() {
        // Check for reset parameter in URL (for admin reset)
        const urlParams = new URLSearchParams(window.location.search);
        const resetParam = urlParams.get('reset');
        if (resetParam === 'true' || resetParam === '1') {
            resetExam(this.examId);
            // Remove reset parameter and reload
            window.history.replaceState({}, '', window.location.pathname);
            window.location.reload();
            return;
        }

        // Check if exam was already taken
        if (this.state.examTaken) {
            const examResult = JSON.parse(localStorage.getItem(`examResult_${this.examId}`) || '{}');
            this.setState({
                isSubmitted: true,
                score: examResult.score,
                answers: examResult.answers,
                timeElapsed: examResult.timeElapsed,
                showCertificate: examResult.score === 100
            });
            return;
        }

        // Start timer
        this.setState({ startTime: Date.now() });
        this.timerInterval = setInterval(() => {
            if (this.state.startTime && !this.state.isSubmitted) {
                const elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
                this.setState({ timeElapsed: elapsed });
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }

    handleAnswerSelect = (questionId, answerIndex) => {
        this.setState({
            answers: {
                ...this.state.answers,
                [questionId]: answerIndex
            }
        });
    }

    handleNext = () => {
        if (this.state.currentQuestion < this.examData.questions.length - 1) {
            this.setState({ currentQuestion: this.state.currentQuestion + 1 });
        }
    }

    handlePrevious = () => {
        if (this.state.currentQuestion > 0) {
            this.setState({ currentQuestion: this.state.currentQuestion - 1 });
        }
    }

    handleResetExam = () => {
        if (window.confirm('Are you sure you want to reset this exam? This will clear all attempt data and allow you to retake it.')) {
            // Clear exam data using reset utility
            resetExam(this.examId);
            
            // Clear existing timer
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
            }
            
            const newStartTime = Date.now();
            
            // Reset state to allow retaking
            this.setState({
                examTaken: false,
                isSubmitted: false,
                score: null,
                answers: {},
                currentQuestion: 0,
                startTime: newStartTime,
                endTime: null,
                timeElapsed: 0,
                showCertificate: false,
                attemptNumber: 1
            }, () => {
                // Restart timer after state is updated
                this.timerInterval = setInterval(() => {
                    if (this.state.startTime && !this.state.isSubmitted) {
                        const elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
                        this.setState({ timeElapsed: elapsed });
                    }
                }, 1000);
            });
        }
    }

    handleSubmit = async () => {
        if (window.confirm('Are you sure you want to submit the exam? You cannot retake it.')) {
            const endTime = Date.now();
            const timeElapsed = Math.floor((endTime - this.state.startTime) / 1000);
            
            // Calculate score
            let correctAnswers = 0;
            this.examData.questions.forEach(question => {
                if (this.state.answers[question.id] === question.correctAnswer) {
                    correctAnswers++;
                }
            });
            
            const score = Math.round((correctAnswers / this.examData.questions.length) * 100);
            
            // Save exam result (to both localStorage and Firebase if configured)
            const examResult = {
                score,
                answers: this.state.answers,
                timeElapsed,
                submittedAt: new Date().toISOString(),
                examName: this.examData.examName,
                examTitle: this.examData.title,
                totalQuestions: this.examData.questions.length
            };
            
            // Save using the storage service (non-blocking - returns immediately)
            // localStorage is saved synchronously, Google Sheets happens in background
            saveExamResult(this.examId, this.state.studentInfo, examResult);
            
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
            }
            
            this.setState({
                isSubmitted: true,
                score,
                endTime,
                timeElapsed,
                showCertificate: score === 100
            });
        }
    }

    formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }

    render() {
        const { studentInfo } = this.state;
        
        // This should not happen as wrapper components handle registration
        if (!studentInfo || !this.examData) {
            return (
                <div style={{
                    maxWidth: '900px',
                    margin: '40px auto',
                    padding: '40px',
                    textAlign: 'center'
                }}>
                    <p>Loading...</p>
                </div>
            );
        }

        if (this.state.showCertificate && this.state.isSubmitted) {
            return (
                <>
                    <Certificate
                        studentInfo={studentInfo}
                        examData={this.examData}
                        score={this.state.score}
                        timeElapsed={this.state.timeElapsed}
                    />
                    <Footer />
                </>
            );
        }

        if (this.state.isSubmitted) {
            const currentQuestion = this.examData.questions[this.state.currentQuestion];
            const userAnswer = this.state.answers[currentQuestion.id];
            const isCorrect = userAnswer === currentQuestion.correctAnswer;
            
            return (
                <>
                <div style={{
                    maxWidth: '900px',
                    margin: '40px auto',
                    padding: '40px',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '40px',
                        padding: '30px',
                        backgroundColor: this.state.score === 100 ? '#d4edda' : '#f8d7da',
                        borderRadius: '8px',
                        border: `2px solid ${this.state.score === 100 ? '#28a745' : '#dc3545'}`
                    }}>
                        <h1 style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            color: this.state.score === 100 ? '#155724' : '#721c24',
                            marginBottom: '15px'
                        }}>
                            {this.examData.examName}: {this.examData.title}
                        </h1>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: this.state.score === 100 ? '#155724' : '#721c24',
                            marginBottom: '10px'
                        }}>
                            {this.state.score === 100 ? '🎉 Perfect Score! 🎉' : 'Exam Completed'}
                        </h2>
                        {studentInfo && (
                            <p style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: this.state.score === 100 ? '#155724' : '#721c24',
                                marginBottom: '10px'
                            }}>
                                Student Name: {studentInfo.firstName} {studentInfo.middleName || ''} {studentInfo.lastName}
                            </p>
                        )}
                        <p style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: this.state.score === 100 ? '#155724' : '#721c24',
                            marginBottom: '10px'
                        }}>
                            Attempt Number: {this.state.attemptNumber}
                        </p>
                        <p style={{
                            fontSize: '24px',
                            fontWeight: '600',
                            color: this.state.score === 100 ? '#155724' : '#721c24',
                            marginBottom: '10px'
                        }}>
                            Your Score: {this.state.score}%
                        </p>
                        <p style={{
                            fontSize: '16px',
                            color: this.state.score === 100 ? '#155724' : '#721c24'
                        }}>
                            Time Taken: {this.formatTime(this.state.timeElapsed)}
                        </p>
                        {this.state.score === 100 && (
                            <p style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#155724',
                                marginTop: '20px'
                            }}>
                                Congratulations! You have earned a certificate!
                            </p>
                        )}
                    </div>

                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#00416A',
                        marginBottom: '20px'
                    }}>
                        Review Your Answers
                    </h3>

                    <div style={{ marginBottom: '30px' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '20px',
                            padding: '15px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px'
                        }}>
                            <span style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#333'
                            }}>
                                Question {this.state.currentQuestion + 1} of {this.examData.questions.length}
                            </span>
                            <div style={{
                                display: 'flex',
                                gap: '10px'
                            }}>
                                <button
                                    onClick={this.handlePrevious}
                                    disabled={this.state.currentQuestion === 0}
                                    style={{
                                        padding: '8px 16px',
                                        fontSize: '14px',
                                        backgroundColor: this.state.currentQuestion === 0 ? '#ccc' : '#00416A',
                                        color: '#ffffff',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: this.state.currentQuestion === 0 ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={this.handleNext}
                                    disabled={this.state.currentQuestion === this.examData.questions.length - 1}
                                    style={{
                                        padding: '8px 16px',
                                        fontSize: '14px',
                                        backgroundColor: this.state.currentQuestion === this.examData.questions.length - 1 ? '#ccc' : '#00416A',
                                        color: '#ffffff',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: this.state.currentQuestion === this.examData.questions.length - 1 ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        <div style={{
                            padding: '25px',
                            border: `2px solid ${isCorrect ? '#28a745' : '#dc3545'}`,
                            borderRadius: '8px',
                            backgroundColor: isCorrect ? '#d4edda' : '#f8d7da',
                            marginBottom: '20px'
                        }}>
                            <h4 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#333',
                                marginBottom: '15px'
                            }}>
                                {currentQuestion.question}
                            </h4>
                            {currentQuestion.options.map((option, index) => {
                                let optionStyle = {
                                    padding: '12px',
                                    marginBottom: '10px',
                                    borderRadius: '6px',
                                    border: '2px solid #e0e0e0',
                                    backgroundColor: '#ffffff',
                                    cursor: 'default'
                                };

                                if (index === currentQuestion.correctAnswer) {
                                    optionStyle = {
                                        ...optionStyle,
                                        border: '2px solid #28a745',
                                        backgroundColor: '#d4edda'
                                    };
                                } else if (index === userAnswer && index !== currentQuestion.correctAnswer) {
                                    optionStyle = {
                                        ...optionStyle,
                                        border: '2px solid #dc3545',
                                        backgroundColor: '#f8d7da'
                                    };
                                }

                                return (
                                    <div key={index} style={optionStyle}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            {index === currentQuestion.correctAnswer && (
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>✓ Correct Answer</span>
                                            )}
                                            {index === userAnswer && index !== currentQuestion.correctAnswer && (
                                                <span style={{ color: '#dc3545', fontWeight: 'bold' }}>✗ Your Answer (Incorrect)</span>
                                            )}
                                            {index === userAnswer && index === currentQuestion.correctAnswer && (
                                                <span style={{ color: '#28a745', fontWeight: 'bold' }}>✓ Your Answer (Correct)</span>
                                            )}
                                        </div>
                                        <div style={{ marginTop: '5px', color: '#333' }}>
                                            {String.fromCharCode(65 + index)}. {option}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <button
                            onClick={this.handleResetExam}
                            style={{
                                padding: '12px 24px',
                                fontSize: '16px',
                                backgroundColor: '#dc3545',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontWeight: '600'
                            }}
                        >
                            Reset Exam
                        </button>
                        <button
                            onClick={() => this.props.history.push('/practice/quiz')}
                            style={{
                                padding: '12px 24px',
                                fontSize: '16px',
                                backgroundColor: '#00416A',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontWeight: '600'
                            }}
                        >
                            Back to Quiz Page
                        </button>
                    </div>
                </div>
                <Footer />
                </>
            );
        }

        const currentQuestion = this.examData.questions[this.state.currentQuestion];
        const selectedAnswer = this.state.answers[currentQuestion.id];

        return (
            <>
            <div style={{
                maxWidth: '900px',
                margin: '40px auto',
                padding: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px',
                    padding: '20px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <div>
                        <h2 style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#00416A',
                            margin: 0
                        }}>
                            {this.examData.examName}: {this.examData.title}
                        </h2>
                        <p style={{
                            fontSize: '14px',
                            color: '#666',
                            margin: '5px 0 0 0'
                        }}>
                            Student: {studentInfo.firstName} {studentInfo.middleName} {studentInfo.lastName}
                        </p>
                    </div>
                    <div style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#00416A'
                    }}>
                        ⏱️ {this.formatTime(this.state.timeElapsed)}
                    </div>
                </div>

                <div style={{
                    marginBottom: '30px',
                    padding: '15px',
                    backgroundColor: '#fff3cd',
                    borderRadius: '8px',
                    borderLeft: '4px solid #ffc107'
                }}>
                    <p style={{
                        fontSize: '14px',
                        color: '#856404',
                        margin: 0,
                        fontWeight: '600'
                    }}>
                        ⚠️ Remember: This is a one-time exam. No cheating allowed.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <span style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#333'
                    }}>
                        Question {this.state.currentQuestion + 1} of {this.examData.questions.length}
                    </span>
                    <div style={{
                        display: 'flex',
                        gap: '5px',
                        flexWrap: 'wrap'
                    }}>
                        {this.examData.questions.map((q, index) => {
                            const isAnswered = this.state.answers[q.id] !== undefined;
                            const isCurrent = index === this.state.currentQuestion;
                            return (
                                <div
                                    key={q.id}
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        backgroundColor: isCurrent ? '#00416A' : isAnswered ? '#28a745' : '#e0e0e0',
                                        color: isCurrent || isAnswered ? '#ffffff' : '#666',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        border: isCurrent ? '2px solid #00416A' : '2px solid transparent'
                                    }}
                                    onClick={() => this.setState({ currentQuestion: index })}
                                >
                                    {index + 1}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div style={{
                    padding: '25px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    marginBottom: '30px'
                }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '20px'
                    }}>
                        {currentQuestion.question}
                    </h3>
                    {currentQuestion.options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => this.handleAnswerSelect(currentQuestion.id, index)}
                            style={{
                                padding: '15px',
                                marginBottom: '10px',
                                borderRadius: '6px',
                                border: `2px solid ${selectedAnswer === index ? '#00416A' : '#e0e0e0'}`,
                                backgroundColor: selectedAnswer === index ? '#e3f2fd' : '#ffffff',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                if (selectedAnswer !== index) {
                                    e.currentTarget.style.borderColor = '#00416A';
                                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedAnswer !== index) {
                                    e.currentTarget.style.borderColor = '#e0e0e0';
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                }
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    border: `2px solid ${selectedAnswer === index ? '#00416A' : '#ccc'}`,
                                    backgroundColor: selectedAnswer === index ? '#00416A' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>
                                    {selectedAnswer === index && '✓'}
                                </div>
                                <span style={{
                                    fontSize: '16px',
                                    color: '#333'
                                }}>
                                    {String.fromCharCode(65 + index)}. {option}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <button
                        onClick={this.handlePrevious}
                        disabled={this.state.currentQuestion === 0}
                        style={{
                            padding: '12px 24px',
                            fontSize: '16px',
                            backgroundColor: this.state.currentQuestion === 0 ? '#ccc' : '#6c757d',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: this.state.currentQuestion === 0 ? 'not-allowed' : 'pointer',
                            fontWeight: '600'
                        }}
                    >
                        Previous
                    </button>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {this.state.currentQuestion === this.examData.questions.length - 1 ? (
                            <button
                                onClick={this.handleSubmit}
                                style={{
                                    padding: '12px 24px',
                                    fontSize: '16px',
                                    backgroundColor: '#28a745',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: '600'
                                }}
                            >
                                Submit Exam
                            </button>
                        ) : (
                            <button
                                onClick={this.handleNext}
                                style={{
                                    padding: '12px 24px',
                                    fontSize: '16px',
                                    backgroundColor: '#00416A',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: '600'
                                }}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default withRouter(Exam);
