import React, { useState, useMemo } from 'react';
import Exam from './Exam';
import ExamRegistration from './ExamRegistration';
import { exam23Data } from '../../utilities/data/examData';

const Exam23 = (props) => {
    const examId = 23;
    
    // Check localStorage immediately - no need for useEffect delay
    const initialStudentInfo = useMemo(() => {
        if (typeof window === 'undefined') return null;
        try {
            return JSON.parse(localStorage.getItem(`studentInfo_${examId}`) || 'null');
        } catch {
            return null;
        }
    }, [examId]);
    
    const [studentInfo, setStudentInfo] = useState(initialStudentInfo);

    // Handle registration completion
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

    // If no student info, show registration form
    if (!studentInfo) {
        return <ExamRegistration examId={examId} onRegistrationComplete={handleRegistrationComplete} {...props} />;
    }

    // Show exam
    return <Exam examData={exam23Data} {...props} />;
};

export default Exam23;
