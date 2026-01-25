import React, { useState, useMemo } from 'react';
import Exam from './Exam';
import ExamRegistration from './ExamRegistration';
import { exam4Data } from '../../utilities/data/examData';

const Exam4 = (props) => {
    const examId = 4;
    
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
    return <Exam examData={exam4Data} {...props} />;
};

export default Exam4;
