#!/bin/bash
# Script to update exam components with optimized pattern

for i in {6..17}; do
  file="src/page-components/practice/Exam${i}.js"
  if [ -f "$file" ]; then
    # Extract examId and examData import
    examId=$(grep -o "const examId = [0-9]*;" "$file" | grep -o "[0-9]*")
    examData=$(grep -o "exam[0-9]*Data" "$file" | head -1)
    
    # Create optimized component code
    cat > /tmp/exam_component.js << EOF
const Exam${i} = (props) => {
    const examId = ${examId};
    
    // Check localStorage immediately - no need for useEffect delay
    const initialStudentInfo = useMemo(() => {
        if (typeof window === 'undefined') return null;
        try {
            return JSON.parse(localStorage.getItem(\`studentInfo_\${examId}\`) || 'null');
        } catch {
            return null;
        }
    }, [examId]);
    
    const [studentInfo, setStudentInfo] = useState(initialStudentInfo);

    // Handle registration completion
    const handleRegistrationComplete = () => {
        if (typeof window !== 'undefined') {
            try {
                const storedInfo = JSON.parse(localStorage.getItem(\`studentInfo_\${examId}\`) || 'null');
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
    return <Exam examData={${examData}} {...props} />;
};
EOF
    echo "Would update Exam${i}.js"
  fi
done
