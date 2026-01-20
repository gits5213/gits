import React, {Component} from 'react';
import jsPDF from 'jspdf';

class Certificate extends Component {
    componentDidMount() {
        // Certificate is displayed on screen
        // PDF download is available via button click
    }

    formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''}, ${minutes} minute${minutes !== 1 ? 's' : ''}`;
        }
        if (minutes > 0) {
            return `${minutes} minute${minutes !== 1 ? 's' : ''}, ${secs} second${secs !== 1 ? 's' : ''}`;
        }
        return `${secs} second${secs !== 1 ? 's' : ''}`;
    }

    generatePDF = () => {
        try {
            const { studentInfo, examData, score, timeElapsed } = this.props;
            // Handle both default export and named export
            const PDF = jsPDF.default || jsPDF;
            const doc = new PDF('landscape', 'pt', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();

            // Helper function to split long text into multiple lines
            const splitTextToFit = (text, maxWidth, fontSize) => {
                doc.setFontSize(fontSize);
                const words = text.split(' ');
                const lines = [];
                let currentLine = '';
                
                for (let i = 0; i < words.length; i++) {
                    const testLine = currentLine + (currentLine ? ' ' : '') + words[i];
                    const testWidth = doc.getTextWidth(testLine);
                    if (testWidth > maxWidth && currentLine) {
                        lines.push(currentLine);
                        currentLine = words[i];
                    } else {
                        currentLine = testLine;
                    }
                }
                if (currentLine) {
                    lines.push(currentLine);
                }
                return lines;
            };

            // Background color
            doc.setFillColor(245, 245, 250);
            doc.rect(0, 0, pageWidth, pageHeight, 'F');

            // Border
            doc.setDrawColor(0, 65, 106);
            doc.setLineWidth(10);
            doc.rect(50, 50, pageWidth - 100, pageHeight - 100);

            // Decorative border
            doc.setDrawColor(255, 224, 0);
            doc.setLineWidth(3);
            doc.rect(70, 70, pageWidth - 140, pageHeight - 140);

            let yPos = 120;

            // Title
            doc.setFontSize(42);
            doc.setTextColor(0, 65, 106);
            doc.setFont('helvetica', 'bold');
            doc.text('CERTIFICATE OF COMPLETION', pageWidth / 2, yPos, { align: 'center' });
            yPos += 50;

            // Subtitle
            doc.setFontSize(18);
            doc.setTextColor(100, 100, 100);
            doc.setFont('helvetica', 'normal');
            doc.text('This is to certify that', pageWidth / 2, yPos, { align: 'center' });
            yPos += 40;

            // Student Name (with wrapping)
            const fullName = `${studentInfo.firstName} ${studentInfo.middleName ? studentInfo.middleName + ' ' : ''}${studentInfo.lastName}`;
            doc.setFontSize(32);
            doc.setTextColor(0, 65, 106);
            doc.setFont('helvetica', 'bold');
            const nameLines = splitTextToFit(fullName, pageWidth - 200, 32);
            nameLines.forEach((line, index) => {
                doc.text(line, pageWidth / 2, yPos + (index * 35), { align: 'center' });
            });
            yPos += (nameLines.length * 35) + 20;

            // Exam details
            doc.setFontSize(16);
            doc.setTextColor(100, 100, 100);
            doc.setFont('helvetica', 'normal');
            doc.text('has successfully completed', pageWidth / 2, yPos, { align: 'center' });
            yPos += 35;

            // Exam name and title (with wrapping)
            const examText = `${examData.examName}: ${examData.title}`;
            doc.setFontSize(22);
            doc.setTextColor(0, 65, 106);
            doc.setFont('helvetica', 'bold');
            const examLines = splitTextToFit(examText, pageWidth - 200, 22);
            examLines.forEach((line, index) => {
                doc.text(line, pageWidth / 2, yPos + (index * 28), { align: 'center' });
            });
            yPos += (examLines.length * 28) + 25;

            // Score and details
            doc.setFontSize(16);
            doc.setTextColor(100, 100, 100);
            doc.setFont('helvetica', 'normal');
            doc.text(`with a perfect score of ${score}%`, pageWidth / 2, yPos, { align: 'center' });
            yPos += 30;
            doc.text(`Exam Duration: ${this.formatTime(timeElapsed)}`, pageWidth / 2, yPos, { align: 'center' });
            yPos += 35;

            // Company and Instructor (with wrapping)
            doc.setFontSize(14);
            const companyText = `Company: ${studentInfo.companyName}`;
            const companyLines = splitTextToFit(companyText, pageWidth - 200, 14);
            companyLines.forEach((line, index) => {
                doc.text(line, pageWidth / 2, yPos + (index * 20), { align: 'center' });
            });
            yPos += (companyLines.length * 20) + 15;

            const instructorText = `Instructor: ${studentInfo.instructorName}`;
            const instructorLines = splitTextToFit(instructorText, pageWidth - 200, 14);
            instructorLines.forEach((line, index) => {
                doc.text(line, pageWidth / 2, yPos + (index * 20), { align: 'center' });
            });
            yPos += (instructorLines.length * 20) + 20;

            // Date
            const date = new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            doc.text(`Date: ${date}`, pageWidth / 2, yPos, { align: 'center' });
            yPos += 40;

            // Signature line
            doc.setDrawColor(0, 65, 106);
            doc.setLineWidth(1);
            const signatureY = pageHeight - 80;
            doc.line(pageWidth / 2 - 150, signatureY, pageWidth / 2 + 150, signatureY);
            doc.setFontSize(12);
            doc.setTextColor(100, 100, 100);
            doc.text('Instructor Signature', pageWidth / 2, signatureY + 15, { align: 'center' });

            // Save PDF
            const fileName = `Certificate_${examData.examName}_${fullName.replace(/\s+/g, '_')}.pdf`;
            doc.save(fileName);
        } catch (error) {
            console.error('PDF generation failed:', error);
            alert('PDF generation failed. Please try again or contact support.');
        }
    }

    render() {
        const { studentInfo, examData, score, timeElapsed } = this.props;
        const fullName = `${studentInfo.firstName} ${studentInfo.middleName ? studentInfo.middleName + ' ' : ''}${studentInfo.lastName}`;
        const date = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        return (
            <div style={{
                maxWidth: '1000px',
                margin: '40px auto',
                padding: '40px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                border: '10px solid #00416A',
                position: 'relative'
            }}>
                {/* Decorative border */}
                <div style={{
                    position: 'absolute',
                    top: '60px',
                    left: '60px',
                    right: '60px',
                    bottom: '60px',
                    border: '3px solid #FFE000',
                    borderRadius: '8px',
                    pointerEvents: 'none'
                }}></div>

                <div style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    backgroundColor: '#f5f5fa',
                    borderRadius: '8px',
                    marginBottom: '30px'
                }}>
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#00416A',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        Certificate of Completion
                    </h1>
                    
                    <p style={{
                        fontSize: '20px',
                        color: '#666',
                        marginBottom: '30px'
                    }}>
                        This is to certify that
                    </p>

                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        color: '#00416A',
                        marginBottom: '30px',
                        borderBottom: '3px solid #FFE000',
                        paddingBottom: '20px',
                        display: 'inline-block',
                        paddingLeft: '40px',
                        paddingRight: '40px'
                    }}>
                        {fullName}
                    </h2>

                    <p style={{
                        fontSize: '18px',
                        color: '#666',
                        marginBottom: '15px'
                    }}>
                        has successfully completed
                    </p>

                    <h3 style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        color: '#00416A',
                        marginBottom: '20px'
                    }}>
                        {examData.examName}: {examData.title}
                    </h3>

                    <p style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#28a745',
                        marginBottom: '10px'
                    }}>
                        with a perfect score of {score}%
                    </p>

                    <p style={{
                        fontSize: '16px',
                        color: '#666',
                        marginBottom: '10px'
                    }}>
                        Exam Duration: {this.formatTime(timeElapsed)}
                    </p>

                    <p style={{
                        fontSize: '16px',
                        color: '#666',
                        marginBottom: '10px'
                    }}>
                        Company: {studentInfo.companyName}
                    </p>

                    <p style={{
                        fontSize: '16px',
                        color: '#666',
                        marginBottom: '20px'
                    }}>
                        Instructor: {studentInfo.instructorName}
                    </p>

                    <p style={{
                        fontSize: '16px',
                        color: '#666',
                        marginTop: '40px'
                    }}>
                        Date: {date}
                    </p>
                </div>

                <div style={{
                    textAlign: 'center',
                    marginTop: '40px',
                    paddingTop: '30px',
                    borderTop: '2px solid #e0e0e0'
                }}>
                    <div style={{
                        display: 'inline-block',
                        width: '300px',
                        borderTop: '2px solid #00416A',
                        marginBottom: '10px'
                    }}></div>
                    <p style={{
                        fontSize: '14px',
                        color: '#666',
                        margin: 0
                    }}>
                        Instructor Signature
                    </p>
                </div>

                <div style={{
                    textAlign: 'center',
                    marginTop: '30px'
                }}>
                    <button
                        onClick={this.generatePDF}
                        style={{
                            padding: '14px 28px',
                            fontSize: '18px',
                            fontWeight: '600',
                            backgroundColor: '#00416A',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            marginRight: '10px'
                        }}
                    >
                        Download Certificate (PDF)
                    </button>
                    <button
                        onClick={() => window.location.href = '/practice/quiz'}
                        style={{
                            padding: '14px 28px',
                            fontSize: '18px',
                            fontWeight: '600',
                            backgroundColor: '#6c757d',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer'
                        }}
                    >
                        Back to Quiz Page
                    </button>
                    <div style={{
                        fontSize: '12px',
                        color: '#666',
                        marginTop: '10px'
                    }}>
                    </div>
                </div>

                <div style={{
                    marginTop: '30px',
                    padding: '20px',
                    backgroundColor: '#d4edda',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontSize: '16px',
                        color: '#155724',
                        margin: 0,
                        fontWeight: '600'
                    }}>
                        🎉 Congratulations! Your certificate is displayed above.
                    </p>
                </div>
            </div>
        );
    }
}

export default Certificate;
