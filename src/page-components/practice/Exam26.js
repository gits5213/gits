import React, { useState, useMemo } from 'react';
import Exam from './Exam';
import ExamRegistration from './ExamRegistration';
import { exam26Data } from '../../utilities/data/examData';

const Exam26 = (props) => {
    const examId = 26;

    const initialStudentInfo = useMemo(() => {
        if (typeof window === 'undefined') return null;
        try {
            return JSON.parse(localStorage.getItem(`studentInfo_${examId}`) || 'null');
        } catch {
            return null;
        }
    }, [examId]);

    const [studentInfo, setStudentInfo] = useState(initialStudentInfo);

    const handleRegistrationComplete = () => {
        if (typeof window !== 'undefined') {
            try {
                const storedInfo = JSON.parse(localStorage.getItem(`studentInfo_${examId}`) || 'null');
                setStudentInfo(storedInfo);
            } catch {
                setStudentInfo(null);
            }
        }
    };

    if (!studentInfo) {
        return <ExamRegistration examId={examId} onRegistrationComplete={handleRegistrationComplete} {...props} />;
    }

    return <Exam examData={exam26Data} {...props} />;
};

export default Exam26;

