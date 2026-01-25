/**
 * Exam Reset Utility Functions
 * Use these functions to reset exam attempts programmatically
 */

/**
 * Reset a specific exam
 * @param {number} examId - The exam ID (1, 2, or 3)
 * @returns {boolean} - True if reset was successful
 */
export const resetExam = (examId) => {
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem(`examTaken_${examId}`);
            localStorage.removeItem(`examResult_${examId}`);
            localStorage.removeItem(`examAttempts_${examId}`);
            localStorage.removeItem(`allExamResults_${examId}`);
        }
        return true;
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error resetting exam:', error);
        }
        return false;
    }
};

/**
 * Reset all exams
 * @returns {boolean} - True if reset was successful
 */
export const resetAllExams = () => {
    try {
        [1, 2, 3].forEach(examId => {
            resetExam(examId);
        });
        return true;
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error resetting all exams:', error);
        }
        return false;
    }
};

/**
 * Reset exam for a specific student by name
 * @param {string} studentName - The student's name to search for
 * @returns {Array} - Array of exam IDs that were reset
 */
export const resetExamForStudent = (studentName) => {
    const resetExams = [];
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            [1, 2, 3].forEach(examId => {
                const studentInfo = JSON.parse(localStorage.getItem(`studentInfo_${examId}`) || 'null');
                if (studentInfo) {
                    const fullName = `${studentInfo.firstName} ${studentInfo.middleName || ''} ${studentInfo.lastName}`.trim();
                    if (fullName.toLowerCase().includes(studentName.toLowerCase())) {
                        resetExam(examId);
                        resetExams.push(examId);
                    }
                }
            });
        }
        return resetExams;
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error resetting exam for student:', error);
        }
        return resetExams;
    }
};

/**
 * Check if an exam has been taken
 * @param {number} examId - The exam ID
 * @returns {boolean} - True if exam has been taken
 */
export const isExamTaken = (examId) => {
    if (typeof window === 'undefined' || !window.localStorage) {
        return false;
    }
    return localStorage.getItem(`examTaken_${examId}`) === 'true';
};
