import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Exam from './Exam';
import ExamRegistration from './ExamRegistration';
import { exam1Data } from '../../utilities/data/examData';

const Exam1 = (props) => {
    const examId = 1;
    const path = props.location.pathname;
    const studentInfo = JSON.parse(localStorage.getItem(`studentInfo_${examId}`) || 'null');

    useEffect(() => {
        // If no student info and not on registration path, redirect to registration
        if (!studentInfo && !path.includes('/register')) {
            props.history.replace(`/practice/quiz/exam-${examId}/register`);
        }
    }, [path, studentInfo, props.history, examId]);

    // If on registration path, show registration
    if (path.includes('/register')) {
        return <ExamRegistration examId={examId} {...props} />;
    }

    // If no student info, show loading (redirect will happen in useEffect)
    if (!studentInfo) {
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

    // Show exam
    return <Exam examData={exam1Data} {...props} />;
};

export default withRouter(Exam1);
