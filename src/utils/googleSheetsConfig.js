// Google Sheets Configuration
// Google Apps Script Web App URL (deployed as web app)
export const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxJVakLln4qGc83EcvfS3ggytHK80wMtJCAvCYZLJN9YcYggaNDF6Cry3V6ZcrqLmYAcg/exec";

// Check if Google Sheets is configured
export const isGoogleSheetsConfigured = () => {
  return WEB_APP_URL !== "YOUR_WEB_APP_URL" && WEB_APP_URL.startsWith("http");
};
