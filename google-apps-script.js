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
    
    // IMPORTANT: For URL-encoded form data, ALWAYS read from e.parameter
    // NEVER parse e.postData.contents for form data - it contains raw form string like "action=sav..."
    let data;
    
    // Debug logging to see what we're receiving
    const debugInfo = {
      hasParameter: !!e.parameter,
      hasPostData: !!e.postData,
      postDataType: e.postData ? e.postData.type : null,
      parameterKeys: e.parameter ? Object.keys(e.parameter) : [],
      parameterAction: e.parameter ? e.parameter.action : null,
      parameterData: e.parameter && e.parameter.data ? e.parameter.data.substring(0, 100) : null,
      postDataContents: e.postData ? e.postData.contents.substring(0, 100) : null
    };
    
    // Check e.parameter first (this is where URL-encoded form data goes)
    // Google Apps Script automatically parses application/x-www-form-urlencoded into e.parameter
    if (e.parameter && e.parameter.action) {
      const action = e.parameter.action;
      const dataStr = e.parameter.data;
      
      if (action === 'save' && dataStr) {
        try {
          // Parse the JSON string from the data parameter
          data = {
            action: 'save',
            data: JSON.parse(dataStr)
          };
        } catch (parseError) {
          return ContentService.createTextOutput(JSON.stringify({
            success: false,
            error: 'Invalid JSON in data parameter: ' + parseError.toString(),
            receivedData: dataStr ? dataStr.substring(0, 200) : 'null',
            debug: debugInfo
          }))
          .setMimeType(ContentService.MimeType.JSON);
        }
      } else if (action === 'delete') {
        data = { 
          action: 'delete',
          rowId: e.parameter.rowId
        };
      } else if (action === 'deleteAll') {
        data = { action: 'deleteAll' };
      } else {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          error: 'Invalid action or missing data. Action: ' + (action || 'null') + ', Data: ' + (dataStr ? 'present' : 'missing'),
          debug: debugInfo
        }))
        .setMimeType(ContentService.MimeType.JSON);
      }
    } else if (e.postData && e.postData.contents) {
      // Fallback: manually parse URL-encoded form data from postData.contents
      // This handles cases where e.parameter is not populated automatically
      const formData = e.postData.contents;
      const params = {};
      
      // Parse the form data string (e.g., "action=save&data={...}")
      const pairs = formData.split('&');
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        if (pair.length === 2) {
          params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
      }
      
      const action = params.action;
      const dataStr = params.data;
      
      if (action === 'save' && dataStr) {
        try {
          data = {
            action: 'save',
            data: JSON.parse(dataStr)
          };
        } catch (parseError) {
          return ContentService.createTextOutput(JSON.stringify({
            success: false,
            error: 'Invalid JSON in parsed form data: ' + parseError.toString(),
            receivedData: dataStr ? dataStr.substring(0, 200) : 'null',
            debug: debugInfo
          }))
          .setMimeType(ContentService.MimeType.JSON);
        }
      } else if (action === 'delete') {
        data = { 
          action: 'delete',
          rowId: params.rowId
        };
      } else if (action === 'deleteAll') {
        data = { action: 'deleteAll' };
      } else {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          error: 'Invalid action in parsed form data. Action: ' + (action || 'null') + ', Data: ' + (dataStr ? 'present' : 'missing'),
          debug: debugInfo
        }))
        .setMimeType(ContentService.MimeType.JSON);
      }
    } else {
      // No parameters found and no postData
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'No parameters found. Make sure you are sending URL-encoded form data.',
        debug: debugInfo
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Process the action
    if (data.action === 'save' && data.data) {
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
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}
