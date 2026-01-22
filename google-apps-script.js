// Google Apps Script for GITS Scorecard
// Workbook: gits-scorecard
// Worksheet: studentsScore
// Sheet ID: 1W7y7pKzz44M60gWofhhQgRTolFQlsmMQINutxD_uAbA

const SHEET_NAME = 'studentsScore'; // Your worksheet name

/**
 * Set CORS headers for cross-origin requests
 */
function setCORSHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

/**
 * Handle OPTIONS requests (CORS preflight)
 */
function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(setCORSHeaders());
}

/**
 * Handle POST requests (save, delete operations)
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Sheet not found: ' + SHEET_NAME
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(setCORSHeaders());
    }
    
    const data = JSON.parse(e.postData.contents);
    
    if (data.action === 'save') {
      // Add new row with exam result
      const rowData = [
        data.data.examId || '',
        data.data.examName || '',
        data.data.examTitle || '',
        data.data.firstName || '',
        data.data.middleName || '',
        data.data.lastName || '',
        data.data.companyName || '',
        data.data.instructorName || '',
        data.data.score || 0,
        data.data.timeElapsed || 0,
        data.data.submittedAt || new Date().toISOString(),
        data.data.totalQuestions || 0
      ];
      
      sheet.appendRow(rowData);
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(setCORSHeaders());
    }
    
    if (data.action === 'delete') {
      // Delete row by ID (row number)
      if (data.rowId) {
        const rowNumber = parseInt(data.rowId) + 1; // +1 because Sheets is 1-indexed and row 1 is header
        if (rowNumber > 1 && rowNumber <= sheet.getLastRow()) {
          sheet.deleteRow(rowNumber);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Data deleted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(setCORSHeaders());
    }
    
    if (data.action === 'deleteAll') {
      // Delete all data rows (keep header row)
      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        sheet.deleteRows(2, lastRow - 1);
      }
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'All data deleted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(setCORSHeaders());
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Invalid action'
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(setCORSHeaders());
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(setCORSHeaders());
  }
}

/**
 * Handle GET requests (load all exam results)
 */
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Sheet not found: ' + SHEET_NAME
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(setCORSHeaders());
    }
    
    const data = sheet.getDataRange().getValues();
    
    // Skip header row (row 0)
    const results = [];
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[0]) { // Only add rows with Exam ID (first column)
        results.push({
          id: i, // Row number as ID (0-indexed, so row 2 = id 1)
          examId: row[0] || '',
          examName: row[1] || '',
          examTitle: row[2] || '',
          firstName: row[3] || '',
          middleName: row[4] || '',
          lastName: row[5] || '',
          companyName: row[6] || '',
          instructorName: row[7] || '',
          score: row[8] || 0,
          timeElapsed: row[9] || 0,
          submittedAt: row[10] || '',
          totalQuestions: row[11] || 0
        });
      }
    }
    
    // Sort by submitted date (newest first)
    results.sort((a, b) => {
      const dateA = new Date(a.submittedAt);
      const dateB = new Date(b.submittedAt);
      return dateB - dateA; // Descending order (newest first)
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      results: results
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(setCORSHeaders());
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(setCORSHeaders());
  }
}
