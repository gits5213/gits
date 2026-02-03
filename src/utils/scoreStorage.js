// Score Storage Service
// Handles saving and loading exam scores from both localStorage and Google Sheets
// Falls back to localStorage if Google Sheets is not configured

import { WEB_APP_URL, isGoogleSheetsConfigured } from './googleSheetsConfig';

// Save exam result to both localStorage and Google Sheets
// Returns immediately after saving to localStorage (non-blocking)
// Google Sheets save happens in the background
export const saveExamResult = async (examId, studentInfo, examResult) => {
  // Always save to localStorage first (synchronous, instant) - only in browser
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(`examResult_${examId}`, JSON.stringify(examResult));
    localStorage.setItem(`examTaken_${examId}`, 'true');
    localStorage.setItem(`studentInfo_${examId}`, JSON.stringify(studentInfo));
  }

  // Save to Google Sheets in the background (non-blocking)
  // Don't await - let it happen asynchronously so UI doesn't wait
  if (isGoogleSheetsConfigured()) {
    saveToGoogleSheets(examId, studentInfo, examResult).catch(error => {
      // Silently handle errors - localStorage already saved, so user experience isn't affected
      if (process.env.NODE_ENV === 'development') {
        console.warn('Background save to Google Sheets failed:', error.message);
      }
    });
  }
};

// Internal function to save to Google Sheets (non-blocking, fire-and-forget)
const saveToGoogleSheets = async (examId, studentInfo, examResult) => {
  const resultData = {
    examId,
    examName: examResult.examName || `Exam-${examId}`,
    examTitle: examResult.examTitle || '',
    firstName: studentInfo.firstName || '',
    middleName: studentInfo.middleName || '',
    lastName: studentInfo.lastName || '',
    companyName: studentInfo.companyName || '',
    instructorName: studentInfo.instructorName || '',
    score: examResult.score || 0,
    timeElapsed: examResult.timeElapsed || 0,
    submittedAt: examResult.submittedAt || new Date().toISOString(),
    totalQuestions: examResult.totalQuestions || 0
  };

  const questionSummary = (examResult.questionSummary != null && examResult.questionSummary !== '') ? String(examResult.questionSummary) : '';

  // Send to Google Apps Script: questionSummary first (long) then data (JSON) so summary is less likely truncated
  const formData = new URLSearchParams();
  formData.append('action', 'save');
  formData.append('questionSummary', questionSummary);
  formData.append('data', JSON.stringify(resultData));

  // Reduced timeout to 5 seconds for faster failure
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timeout after 5 seconds')), 5000);
  });

  // Race between fetch and timeout
  const response = await Promise.race([
    fetch(WEB_APP_URL, {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    }),
    timeoutPromise
  ]);

  const responseText = await response.text();

  if (response.ok) {
    try {
      const result = JSON.parse(responseText);
      if (result.success) {
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ Exam result saved to Google Sheets');
        }
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.warn('⚠️ Google Sheets returned error:', result.error);
        }
      }
    } catch (parseError) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('⚠️ Failed to parse Google Sheets response');
      }
    }
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ Google Sheets HTTP error:', response.status);
    }
  }
};

// Load exam results from Google Sheets and localStorage
// Optimized: Fast fallback to localStorage if Google Sheets is slow
export const loadExamResults = async () => {
  const results = [];
  
  // Try to load from Google Sheets if configured (with timeout for fast fallback)
  if (isGoogleSheetsConfigured()) {
    try {
      // Create timeout promise (3 seconds max wait)
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Load timeout')), 3000);
      });

      // Race between fetch and timeout
      const response = await Promise.race([
        fetch(`${WEB_APP_URL}?action=load`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }),
        timeoutPromise
      ]);

      if (response.ok) {
        const data = await response.json();
        if (data.success && Array.isArray(data.results)) {
          console.log(`✅ Loaded ${data.results.length} results from Google Sheets`);
          return data.results.map(result => ({
            ...result,
            source: 'googlesheets'
          }));
        }
      }
    } catch (error) {
      // Silently fall back to localStorage - don't log errors to avoid console spam
      // localStorage is fast and always available
    }
  }

  // Fallback to localStorage
  const examDataMap = await import('../utilities/data/examData');
  const { exam1Data, exam2Data, exam3Data, exam4Data, exam5Data, exam6Data, exam7Data, exam8Data, exam9Data, exam10Data, exam11Data, exam12Data, exam13Data, exam14Data, exam15Data, exam16Data, exam17Data } = examDataMap;
  
  const examDataMapObj = {
    1: exam1Data, 2: exam2Data, 3: exam3Data, 4: exam4Data, 5: exam5Data,
    6: exam6Data, 7: exam7Data, 8: exam8Data, 9: exam9Data, 10: exam10Data,
    11: exam11Data, 12: exam12Data, 13: exam13Data, 14: exam14Data,
    15: exam15Data, 16: exam16Data, 17: exam17Data
  };

  // Only access localStorage in browser environment
  if (typeof window === 'undefined' || !window.localStorage) {
    return [];
  }

  for (let examId = 1; examId <= 17; examId++) {
    const examTaken = localStorage.getItem(`examTaken_${examId}`);
    const studentInfoStr = localStorage.getItem(`studentInfo_${examId}`);
    const examResultStr = localStorage.getItem(`examResult_${examId}`);
    
    if (examTaken === 'true' && studentInfoStr && examResultStr) {
      try {
        const studentInfo = JSON.parse(studentInfoStr);
        const examResult = JSON.parse(examResultStr);
        const examData = examDataMapObj[examId];
        
        if (examData) {
          results.push({
            examId,
            examName: examData.examName,
            examTitle: examData.title,
            firstName: studentInfo.firstName || '',
            middleName: studentInfo.middleName || '',
            lastName: studentInfo.lastName || '',
            companyName: studentInfo.companyName || '',
            instructorName: studentInfo.instructorName || '',
            score: examResult.score || 0,
            timeElapsed: examResult.timeElapsed || 0,
            submittedAt: examResult.submittedAt || new Date().toISOString(),
            totalQuestions: examData.questions.length,
            source: 'localStorage'
          });
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(`Error parsing data for exam ${examId}:`, error);
        }
      }
    }
  }
  
  // Sort by submitted date (newest first)
  results.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`Loaded ${results.length} results from localStorage`);
  }
  return results;
};

// Delete exam result (from both localStorage and Google Sheets)
export const deleteExamResult = async (examId, sheetRowId = null) => {
  // Delete from localStorage (only in browser)
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem(`examTaken_${examId}`);
    localStorage.removeItem(`studentInfo_${examId}`);
    localStorage.removeItem(`examResult_${examId}`);
  }

  // Delete from Google Sheets if configured and rowId provided
  if (sheetRowId && isGoogleSheetsConfigured()) {
    try {
      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'delete',
          rowId: sheetRowId
        })
      });

      if (response.ok) {
        console.log('Deleted from Google Sheets');
      }
    } catch (error) {
      console.error('Error deleting from Google Sheets:', error);
    }
  }
};

// Delete all exam results
export const deleteAllExamResults = async () => {
  // Delete all from localStorage (only in browser)
  if (typeof window !== 'undefined' && window.localStorage) {
    for (let examId = 1; examId <= 17; examId++) {
      localStorage.removeItem(`examTaken_${examId}`);
      localStorage.removeItem(`studentInfo_${examId}`);
      localStorage.removeItem(`examResult_${examId}`);
    }
  }

  // Delete all from Google Sheets if configured
  if (isGoogleSheetsConfigured()) {
    try {
      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'deleteAll'
        })
      });

      if (response.ok) {
        if (process.env.NODE_ENV === 'development') {
          console.log('Deleted all from Google Sheets');
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error deleting all from Google Sheets:', error);
      }
    }
  }
};
