# Google Sheets Setup Guide for Public Score Storage

This guide will help you configure Google Sheets to enable public score storage across different systems and browsers.

## Why Google Sheets?

Google Sheets provides a simple, free solution for storing quiz scores publicly. It's easier to set up than Firebase and doesn't require complex authentication.

## Step 1: Create a Google Sheet

1. Go to https://sheets.google.com/
2. Click "Blank" to create a new spreadsheet
3. Name it "GITS Exam Results" (or any name you prefer)
4. **Make it publicly viewable:**
   - Click "Share" button (top right)
   - Click "Change to anyone with the link"
   - Set permission to "Viewer" (or "Editor" if you want to allow edits)
   - Click "Done"
5. Copy the Sheet ID from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the `SHEET_ID_HERE` part

## Step 2: Set Up the Sheet Structure

1. In row 1, add these headers:
   ```
   Exam ID | Exam Name | Exam Title | First Name | Middle Name | Last Name | Company Name | Instructor Name | Score | Time Elapsed | Submitted At | Total Questions
   ```

2. Format row 1 as bold/header style (optional)

## Step 3: Create Google Apps Script Web App

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code
3. Paste this code:

```javascript
// Google Apps Script Web App for Exam Results
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    if (data.action === 'save') {
      // Add new row
      const rowData = [
        data.data.examId,
        data.data.examName,
        data.data.examTitle,
        data.data.firstName,
        data.data.middleName,
        data.data.lastName,
        data.data.companyName,
        data.data.instructorName,
        data.data.score,
        data.data.timeElapsed,
        data.data.submittedAt,
        data.data.totalQuestions
      ];
      sheet.appendRow(rowData);
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    if (data.action === 'delete') {
      // Delete row by ID (assuming row number is the ID)
      if (data.rowId) {
        sheet.deleteRow(parseInt(data.rowId) + 1); // +1 because Sheets is 1-indexed and row 1 is header
      }
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Data deleted successfully'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    if (data.action === 'deleteAll') {
      // Delete all data rows (keep header)
      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        sheet.deleteRows(2, lastRow - 1);
      }
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'All data deleted successfully'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Invalid action'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    
    // Skip header row
    const headers = data[0];
    const results = [];
    
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[0]) { // Only add rows with Exam ID
        results.push({
          id: i, // Row number as ID
          examId: row[0],
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
      return dateB - dateA;
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      results: results
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon) and name your project "Exam Results Handler"
5. Click **Deploy** → **New deployment**
6. Click the gear icon ⚙️ next to "Select type" → **Web app**
7. Set:
   - **Description**: "Exam Results API"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (important for public access)
8. Click **Deploy**
9. **Copy the Web App URL** - you'll need this!

## Step 4: Update Your Code

1. Open `src/utils/googleSheetsConfig.js`
2. Replace the placeholder values:

```javascript
export const GOOGLE_SHEET_ID = "your-actual-sheet-id-here";
export const WEB_APP_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
```

## Step 5: Test

1. Restart your development server: `npm start`
2. Complete a quiz/exam
3. Check your Google Sheet - you should see the data appear
4. Navigate to Scorecard - scores should load from Google Sheets
5. Test on a different device/browser - scores should appear publicly

## Troubleshooting

### Data not saving
- Check browser console for errors
- Verify Web App URL is correct
- Make sure Apps Script deployment has "Anyone" access
- Check Apps Script execution logs (View → Executions)

### Data not loading
- Verify Sheet is publicly viewable
- Check Web App URL is accessible
- Verify Apps Script `doGet` function is working
- Check browser console for fetch errors

### Permission errors
- Make sure Sheet sharing is set to "Anyone with the link"
- Verify Apps Script deployment has "Anyone" access
- Check Apps Script execution permissions

## Advantages of Google Sheets

- ✅ Free and easy to set up
- ✅ No complex authentication needed
- ✅ Easy to view/edit data directly
- ✅ Can export to CSV/Excel
- ✅ Public access without Firebase complexity

## Security Note

Since the Sheet is publicly accessible, anyone with the link can view the data. This is fine for public scorecards, but if you need private data, consider:
- Using Firebase with authentication
- Adding password protection
- Using a backend API with authentication
