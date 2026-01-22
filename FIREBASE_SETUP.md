# Firebase Setup Guide for Public Score Storage

This guide will help you configure Firebase Firestore to enable public score storage across different systems and browsers.

## Why Firebase?

Currently, quiz scores are stored in `localStorage`, which is browser-specific and only available on the same device/browser. By implementing Firebase Firestore, scores will be stored in the cloud and accessible from any device or browser.

## Step 1: Create a Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project" or select an existing project
3. Follow the setup wizard:
   - Enter a project name (e.g., "gits-university")
   - Enable/disable Google Analytics (optional)
   - Click "Create project"

## Step 2: Enable Firestore Database

1. In your Firebase project dashboard, click on "Firestore Database" in the left menu
2. Click "Create database"
3. Choose "Start in test mode" (for development) or "Start in production mode" (for production)
4. Select a location for your database (choose the closest to your users)
5. Click "Enable"

## Step 3: Configure Firestore Security Rules

1. Go to "Firestore Database" → "Rules" tab
2. Replace the default rules with the following to allow public read/write:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /examResults/{document=**} {
      // Allow anyone to read exam results (public scorecard)
      allow read: if true;
      // Allow anyone to create exam results (students submitting quizzes)
      allow create: if true;
      // Only allow deletion by admins (you can restrict this later)
      allow delete: if true;
    }
  }
}
```

**Note:** For production, you may want to add authentication and restrict write access. For now, this allows public access.

3. Click "Publish"

## Step 4: Get Your Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. If you don't have a web app yet, click "</>" (Web) icon to add one
5. Register your app with a nickname (e.g., "GITS University")
6. Copy the Firebase configuration object (it looks like this):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 5: Update Firebase Configuration in Your Code

1. Open `src/utils/firebaseConfig.js`
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_ACTUAL_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_ACTUAL_MESSAGING_SENDER_ID",
  appId: "YOUR_ACTUAL_APP_ID"
};
```

## Step 6: Install Firebase Package

Run this command in your project directory:

```bash
npm install firebase
```

## Step 7: Test the Integration

1. Start your development server: `npm start`
2. Complete a quiz/exam
3. Navigate to the Scorecard page
4. Your score should now appear and be visible from any device/browser

## How It Works

- **When a student completes a quiz:**
  - Score is saved to both localStorage (for backward compatibility) and Firebase
  - If Firebase is not configured, it falls back to localStorage only

- **When viewing the Scorecard:**
  - Results are loaded from Firebase first (if configured)
  - Falls back to localStorage if Firebase is not available
  - Results from Firebase are visible to everyone, regardless of device/browser

## Troubleshooting

### Scores not appearing on different devices
- Verify Firebase configuration is correct in `firebaseConfig.js`
- Check browser console for Firebase errors
- Ensure Firestore security rules allow read access
- Verify the Firebase project has Firestore enabled

### Firebase initialization errors
- Check that `firebase` package is installed: `npm list firebase`
- Verify all config values are correct (no placeholder values)
- Check browser console for specific error messages

### Still seeing localStorage-only behavior
- Clear browser cache and reload
- Check browser console - you should see "Firebase initialized successfully"
- Verify `isFirebaseConfigured()` returns `true` in `firebaseConfig.js`

## Security Considerations

The current setup allows public read/write access. For production, consider:

1. **Adding authentication** - Require users to sign in before submitting quizzes
2. **Restricting write access** - Only allow authenticated users to create results
3. **Rate limiting** - Prevent spam submissions
4. **Data validation** - Validate data before saving to Firestore

## Cost

Firebase Firestore has a generous free tier:
- **Free tier includes:**
  - 50K reads/day
  - 20K writes/day
  - 20K deletes/day
  - 1 GB storage

For most educational sites, this should be sufficient. Monitor usage in Firebase Console.

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify Firebase configuration
3. Check Firestore security rules
4. Review Firebase Console for any service issues
