import React, {Component} from 'react';
import { loadExamResults, deleteExamResult, deleteAllExamResults } from '../../../utils/scoreStorage';
import { exam1Data, exam2Data, exam3Data, exam4Data, exam5Data, exam6Data, exam7Data, exam8Data, exam9Data, exam10Data, exam11Data, exam12Data, exam13Data, exam14Data, exam15Data, exam16Data, exam17Data } from '../../../utilities/data/examData';

class Scorecard extends Component {
    constructor(props) {
        super(props);
        this.examDataMap = {
            1: exam1Data,
            2: exam2Data,
            3: exam3Data,
            4: exam4Data,
            5: exam5Data,
            6: exam6Data,
            7: exam7Data,
            8: exam8Data,
            9: exam9Data,
            10: exam10Data,
            11: exam11Data,
            12: exam12Data,
            13: exam13Data,
            14: exam14Data,
            15: exam15Data,
            16: exam16Data,
            17: exam17Data
        };
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        this.loadResults();
        // Reload results when window gains focus (user switches back to tab)
        window.addEventListener('focus', this.handleWindowFocus);
        // Reload results when page becomes visible (user switches back to tab)
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    componentWillUnmount() {
        // Clean up event listeners
        window.removeEventListener('focus', this.handleWindowFocus);
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    }

    componentDidUpdate(prevProps) {
        // Reload results when navigating to the scorecard page
        // This ensures the latest quiz results are always displayed
        if (prevProps.location && this.props.location && 
            prevProps.location.pathname !== this.props.location.pathname) {
            this.loadResults();
        }
    }

    handleWindowFocus = () => {
        // Reload results when user switches back to this tab/window
        // This ensures fresh data after completing a quiz in another tab
        this.loadResults();
    }

    handleVisibilityChange = () => {
        // Reload results when page becomes visible
        // This ensures fresh data when user switches back to the browser tab
        if (!document.hidden) {
            this.loadResults();
        }
    }

    loadResults = async () => {
        try {
            // Load results from Firebase (if configured) or localStorage
            const results = await loadExamResults();
            if (process.env.NODE_ENV === 'development') {
                console.log(`Scorecard: Loaded ${results.length} exam result(s)`);
            }
            this.setState({ results });
        } catch (error) {
            if (process.env.NODE_ENV === 'development') {
                console.error('Error loading exam results:', error);
            }
            this.setState({ results: [] });
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

    formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    downloadCSV = () => {
        const { results } = this.state;
        
        if (results.length === 0) {
            alert('No results to download');
            return;
        }
        
        // CSV Headers
        const headers = [
            'Exam ID',
            'Exam Name',
            'Exam Title',
            'First Name',
            'Middle Name',
            'Last Name',
            'Full Name',
            'Company Name',
            'Instructor Name',
            'Score (%)',
            'Time Taken',
            'Total Questions',
            'Submitted At'
        ];
        
        // CSV Rows
        const rows = results.map(result => {
            const fullName = `${result.firstName} ${result.middleName || ''} ${result.lastName}`.trim();
            return [
                result.examId,
                result.examName,
                `"${result.examTitle}"`,
                result.firstName,
                result.middleName,
                result.lastName,
                `"${fullName}"`,
                `"${result.companyName}"`,
                result.instructorName,
                result.score,
                this.formatTime(result.timeElapsed),
                result.totalQuestions,
                this.formatDate(result.submittedAt)
            ];
        });
        
        // Combine headers and rows
        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');
        
        // Create blob and download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', `exam_results_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    deleteResult = async (result) => {
        if (window.confirm('Are you sure you want to delete this exam result? This action cannot be undone.')) {
            try {
                // result.id is the Google Sheets row ID if it came from Google Sheets
                await deleteExamResult(result.examId, result.id || null);
                this.loadResults();
            } catch (error) {
                console.error('Error deleting exam result:', error);
                alert('Error deleting exam result. Please try again.');
            }
        }
    }

    handleDeleteAll = async () => {
        if (window.confirm('Are you sure you want to delete ALL exam results? This action cannot be undone.')) {
            try {
                await deleteAllExamResults();
                this.loadResults();
            } catch (error) {
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error deleting all exam results:', error);
                }
                alert('Error deleting exam results. Please try again.');
            }
        }
    }

    render() {
        const { results } = this.state;

        return (
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '40px 20px',
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
            }}>
                {/* Header Section */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    position: 'relative'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '20px',
                        padding: '40px',
                        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.2)',
                        marginBottom: '30px'
                    }}>
                        <h1 style={{
                            fontSize: '42px',
                            fontWeight: 'bold',
                            color: '#ffffff',
                            marginBottom: '15px',
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}>
                            📊 Exam Scorecard
                        </h1>
                        <p style={{
                            fontSize: '20px',
                            color: 'rgba(255,255,255,0.95)',
                            margin: 0
                        }}>
                            View and manage all exam results
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    marginBottom: '30px',
                    flexWrap: 'wrap'
                }}>
                    <button
                        onClick={this.downloadCSV}
                        disabled={results.length === 0}
                        style={{
                            padding: '14px 28px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff',
                            background: results.length === 0 
                                ? '#ccc' 
                                : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                            border: 'none',
                            borderRadius: '12px',
                            cursor: results.length === 0 ? 'not-allowed' : 'pointer',
                            boxShadow: results.length === 0 
                                ? 'none' 
                                : '0 4px 12px rgba(40, 167, 69, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            if (results.length > 0) {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 16px rgba(40, 167, 69, 0.4)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (results.length > 0) {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(40, 167, 69, 0.3)';
                            }
                        }}
                    >
                        📥 Download CSV
                    </button>
                    <button
                        onClick={this.handleDeleteAll}
                        disabled={results.length === 0}
                        style={{
                            padding: '14px 28px',
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#ffffff',
                            background: results.length === 0 
                                ? '#ccc' 
                                : 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                            border: 'none',
                            borderRadius: '12px',
                            cursor: results.length === 0 ? 'not-allowed' : 'pointer',
                            boxShadow: results.length === 0 
                                ? 'none' 
                                : '0 4px 12px rgba(220, 53, 69, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            if (results.length > 0) {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 16px rgba(220, 53, 69, 0.4)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (results.length > 0) {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 53, 69, 0.3)';
                            }
                        }}
                    >
                        🗑️ Delete All Results
                    </button>
                </div>

                {/* Results Count */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#495057'
                }}>
                    Total Results: <span style={{ color: '#667eea' }}>{results.length}</span>
                </div>

                {/* Results Table */}
                {results.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '60px 20px',
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                    }}>
                        <div style={{
                            fontSize: '64px',
                            marginBottom: '20px'
                        }}>📋</div>
                        <h3 style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#495057',
                            marginBottom: '10px'
                        }}>
                            No Results Found
                        </h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#6c757d'
                        }}>
                            Exam results will appear here once students complete their exams.
                        </p>
                    </div>
                ) : (
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        overflowX: 'auto'
                    }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            minWidth: '1200px'
                        }}>
                            <thead>
                                <tr style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: '#ffffff'
                                }}>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Exam ID</th>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Exam Name</th>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Student Name</th>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Company</th>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Instructor</th>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Score</th>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Time</th>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Questions</th>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'left',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Submitted</th>
                                    <th style={{
                                        padding: '16px',
                                        textAlign: 'center',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        borderBottom: '2px solid rgba(255,255,255,0.2)'
                                    }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => {
                                    const fullName = `${result.firstName} ${result.middleName || ''} ${result.lastName}`.trim();
                                    const scoreColor = result.score === 100 
                                        ? '#28a745' 
                                        : result.score >= 70 
                                        ? '#ffc107' 
                                        : '#dc3545';
                                    
                                    return (
                                        <tr 
                                            key={`${result.examId}-${index}`}
                                            style={{
                                                borderBottom: '1px solid #e9ecef',
                                                transition: 'background-color 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = '#f8f9fa';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = '#ffffff';
                                            }}
                                        >
                                            <td style={{ padding: '16px', fontSize: '14px', color: '#495057' }}>
                                                {result.examId}
                                            </td>
                                            <td style={{ padding: '16px', fontSize: '14px', color: '#495057', fontWeight: '600' }}>
                                                {result.examName}
                                            </td>
                                            <td style={{ padding: '16px', fontSize: '14px', color: '#495057' }}>
                                                {fullName}
                                            </td>
                                            <td style={{ padding: '16px', fontSize: '14px', color: '#495057' }}>
                                                {result.companyName}
                                            </td>
                                            <td style={{ padding: '16px', fontSize: '14px', color: '#495057' }}>
                                                {result.instructorName}
                                            </td>
                                            <td style={{ 
                                                padding: '16px', 
                                                fontSize: '14px', 
                                                fontWeight: 'bold',
                                                color: scoreColor,
                                                textAlign: 'center'
                                            }}>
                                                {result.score}%
                                            </td>
                                            <td style={{ padding: '16px', fontSize: '14px', color: '#495057', textAlign: 'center' }}>
                                                {this.formatTime(result.timeElapsed)}
                                            </td>
                                            <td style={{ padding: '16px', fontSize: '14px', color: '#495057', textAlign: 'center' }}>
                                                {result.totalQuestions}
                                            </td>
                                            <td style={{ padding: '16px', fontSize: '14px', color: '#6c757d' }}>
                                                {this.formatDate(result.submittedAt)}
                                            </td>
                                            <td style={{ padding: '16px', textAlign: 'center' }}>
                                                <button
                                                    onClick={() => this.deleteResult(result)}
                                                    style={{
                                                        padding: '8px 16px',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        color: '#ffffff',
                                                        background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1.05)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1)';
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                </div>
        );
    }
}

export default Scorecard;
