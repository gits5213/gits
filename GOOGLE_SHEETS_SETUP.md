# Google Sheets Setup Guide for GITS Scorecard

This guide will help you configure Google Sheets to enable public score storage across different systems and browsers.

## Why Google Sheets?

Google Sheets provides a simple, free solution for storing quiz scores publicly. It's easier to set up than Firebase and doesn't require complex authentication.

**Advantages:**
- ✅ Free and easy to set up
- ✅ No complex authentication needed
- ✅ Easy to view/edit data directly
- ✅ Can export to CSV/Excel
- ✅ Public access without Firebase complexity

## Your Sheet Information

- **Workbook Name**: gits-scorecard
- **Worksheet Name**: studentsScore
- **Sheet ID**: 1W7y7pKzz44M60gWofhhQgRTolFQlsmMQINutxD_uAbA
- **Email**: mdzaman.gits@gmail.com
- **Sheet URL**: https://docs.google.com/spreadsheets/d/1W7y7pKzz44M60gWofhhQgRTolFQlsmMQINutxD_uAbA/edit

## Step 1: Prepare Your Google Sheet

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1W7y7pKzz44M60gWofhhQgRTolFQlsmMQINutxD_uAbA/edit

2. Make sure the worksheet **"studentsScore"** exists (if not, create it)

3. Set up the header row (Row 1) with these columns:
   ```
   Exam ID | Exam Name | Exam Title | First Name | Middle Name | Last Name | Company Name | Instructor Name | Score | Time Elapsed | Submitted At | Total Questions
   ```

4. Format row 1 as bold/header style (optional)

5. **Make the sheet publicly viewable:**
   - Click **"Share"** button (top right)
   - Click **"Change to anyone with the link"**
   - Set permission to **"Viewer"** (or "Editor" if you want to allow edits)
   - Click **"Done"**

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**

2. Delete any default code in the editor

3. Copy the entire code from `google-apps-script.js` file in this repository and paste it into the Apps Script editor

4. Click **Save** (💾 icon) and name your project: **"GITS Scorecard API"**

5. Click **Deploy** → **New deployment**

6. Click the gear icon ⚙️ next to "Select type" → **Web app**

7. Configure the deployment:
   - **Description**: "GITS Exam Results API"
   - **Execute as**: **"Me"** (mdzaman.gits@gmail.com)
   - **Who has access**: **"Anyone"** ⚠️ (This is important for public access!)

8. Click **Deploy**

9. **Authorize the script:**
   - Click **"Authorize access"**
   - Sign in with mdzaman.gits@gmail.com
   - Click **"Advanced"** → **"Go to GITS Scorecard API (unsafe)"**
   - Click **"Allow"**

10. **Copy the Web App URL** - It looks like:
    ```
    https://script.google.com/macros/s/AKfycby.../exec
    ```
    ⚠️ **Save this URL - you'll need it in the next step!**

## Step 3: Update Your Code

1. Open `src/utils/googleSheetsConfig.js` in your project

2. Replace `YOUR_WEB_APP_URL` with your actual Web App URL:

```javascript
export const WEB_APP_URL = "https://script.google.com/macros/s/YOUR_ACTUAL_URL_HERE/exec";
```

3. Save the file

## Step 4: Test

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Complete a quiz/exam in your app

3. Check your Google Sheet - you should see the data appear in the "studentsScore" worksheet

4. Navigate to the Scorecard page - scores should load from Google Sheets

5. Test on a different device/browser - scores should appear publicly!

## Quick Test

After deploying, test your Web App URL directly in browser:
```
https://script.google.com/macros/s/YOUR_URL/exec?action=load
```

You should see JSON data with exam results (or empty array if no data yet).

## Troubleshooting

### Data not saving
- Check browser console (F12) for errors
- Verify Web App URL is correct in `googleSheetsConfig.js`
- Make sure Apps Script deployment has "Anyone" access
- Check Apps Script execution logs: **View** → **Executions**

### Data not loading
- Verify Sheet is publicly viewable (Share settings)
- Check Web App URL is accessible (try opening it in browser)
- Verify Apps Script `doGet` function is working
- Check browser console for fetch errors

### Permission errors
- Make sure Sheet sharing is set to "Anyone with the link"
- Verify Apps Script deployment has "Anyone" access
- Check Apps Script execution permissions
- Make sure you authorized the script with your Google account

### Sheet not found error
- Verify worksheet name is exactly "studentsScore" (case-sensitive)
- Check that the worksheet exists in your Google Sheet
- Verify the Sheet ID in `google-apps-script.js` matches your actual Sheet ID

## Security Note

Since the Sheet and Web App are publicly accessible, anyone with the link can:
- View all exam results
- Add new exam results

This is fine for a public scorecard. If you need private data later, you can:
- Add authentication to the Apps Script
- Use Firebase with authentication
- Create a backend API with authentication

## File Structure

- `google-apps-script.js` - The Apps Script code to deploy
- `src/utils/googleSheetsConfig.js` - Configuration file with Web App URL
- This file - Setup instructions
