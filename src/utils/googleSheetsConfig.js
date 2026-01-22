// Google Sheets Configuration
// Google Apps Script Web App URL (deployed as web app)
export const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyWwjMoy8qKnaYxbRUYOvaaUJqXG50q7dY98SWGaSr1AH99-pMle-RxfMZYsTfMQqRn8w/exec";


// Check if Google Sheets is configured
export const isGoogleSheetsConfigured = () => {
  return WEB_APP_URL !== "YOUR_WEB_APP_URL" && WEB_APP_URL.startsWith("http");
};
