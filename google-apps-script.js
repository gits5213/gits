// Google Apps Script for GITS Scorecard
// Workbook: gits-scorecard
// Worksheet: studentsScore
// Sheet ID: 1W7y7pKzz44M60gWofhhQgRTolFQlsmMQINutxD_uAbA

const SHEET_ID = '1W7y7pKzz44M60gWofhhQgRTolFQlsmMQINutxD_uAbA';
const SHEET_NAME = 'studentsScore'; // Your worksheet name

/**
 * Get the spreadsheet by ID
 */
function getSpreadsheet() {
  return SpreadsheetApp.openById(SHEET_ID);
}

/**
 * Handle OPTIONS requests (CORS preflight)
 * Google Apps Script automatically handles CORS for web apps deployed with "Anyone" access
 */
function doOptions() {
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Parse URL-encoded form body (action, data, questionSummary).
 * Use raw postData.contents so questionSummary is not truncated by e.parameter.
 */
function parseFormBody(contents) {
  const params = {};
  if (!contents || typeof contents !== 'string') return params;
  const pairs = contents.split('&');
  for (let i = 0; i < pairs.length; i++) {
    const eqIdx = pairs[i].indexOf('=');
    if (eqIdx !== -1) {
      try {
        const key = decodeURIComponent(pairs[i].substring(0, eqIdx).replace(/\+/g, ' '));
        const val = decodeURIComponent(pairs[i].substring(eqIdx + 1).replace(/\+/g, ' '));
        params[key] = val;
      } catch (err) {
        // skip malformed pair
      }
    }
  }
  return params;
}

/**
 * Handle POST requests (save, delete operations)
 */
function doPost(e) {
  try {
    const spreadsheet = getSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Sheet not found: ' + SHEET_NAME
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    let data;
    var params = {};
    
    // Prefer parsing raw POST body so questionSummary is never truncated (e.parameter can drop long values)
    if (e.postData && e.postData.contents) {
      params = parseFormBody(e.postData.contents);
    }
    // If no postData or params empty, fall back to e.parameter
    if (!params || !params.action) {
      if (e.parameter) {
        params.action = e.parameter.action;
        params.data = e.parameter.data;
        params.questionSummary = (e.parameter.questionSummary != null) ? String(e.parameter.questionSummary) : '';
        params.rowId = e.parameter.rowId;
      }
    }
    
    const action = params.action;
    const dataStr = params.data;
    
    if (action === 'save' && dataStr) {
      try {
        data = {
          action: 'save',
          data: JSON.parse(dataStr),
          questionSummaryParam: (params.questionSummary != null && params.questionSummary !== '') ? String(params.questionSummary) : (params.questionSummary || '')
        };
      } catch (parseError) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          error: 'Invalid JSON in data parameter: ' + parseError.toString(),
          receivedData: dataStr ? dataStr.substring(0, 200) : 'null'
        }))
        .setMimeType(ContentService.MimeType.JSON);
      }
    } else if (action === 'delete') {
      data = { action: 'delete', rowId: params.rowId };
    } else if (action === 'deleteAll') {
      data = { action: 'deleteAll' };
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid action or missing data. Action: ' + (action || 'null') + ', Data: ' + (dataStr ? 'present' : 'missing')
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (!data) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'No parameters found. Send URL-encoded form: action, data (JSON), questionSummary.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Process the action
    if (data.action === 'save' && data.data) {
      // questionSummary from separate form param (avoids truncation of long JSON); fallback to data.data for older clients
      const questionSummaryCell = (data.questionSummaryParam != null && data.questionSummaryParam !== '') ? String(data.questionSummaryParam) : (data.data.questionSummary || '');
      // Add new row with exam result (column 13 = Question Summary for gits-scorecard)
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
        data.data.totalQuestions || 0,
        questionSummaryCell
      ];
      
      // Append the row
      const rowBefore = sheet.getLastRow();
      sheet.appendRow(rowData);
      const rowAfter = sheet.getLastRow();
      
      // Verify it was added
      if (rowAfter > rowBefore) {
        return ContentService.createTextOutput(JSON.stringify({
          success: true,
          message: 'Data saved successfully',
          rowNumber: rowAfter
        }))
        .setMimeType(ContentService.MimeType.JSON);
      } else {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          error: 'Row was not added. Row before: ' + rowBefore + ', Row after: ' + rowAfter
        }))
        .setMimeType(ContentService.MimeType.JSON);
      }
    } else if (data.action === 'delete') {
      // Delete row by ID (row number)
      const rowId = data.rowId;
      if (rowId) {
        const rowNumber = parseInt(rowId) + 1; // +1 because Sheets is 1-indexed and row 1 is header
        if (rowNumber > 1 && rowNumber <= sheet.getLastRow()) {
          sheet.deleteRow(rowNumber);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Data deleted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
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
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Invalid action: ' + (data ? data.action : 'null')
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString(),
      stack: error.stack
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (load all exam results)
 */
function doGet(e) {
  try {
    const spreadsheet = getSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Sheet not found: ' + SHEET_NAME
      }))
      .setMimeType(ContentService.MimeType.JSON);
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
          totalQuestions: row[11] || 0,
          questionSummary: (row[12] !== undefined && row[12] !== null && row[12] !== '') ? row[12] : ''
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
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}
