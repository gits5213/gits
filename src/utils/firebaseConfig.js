// Firebase Configuration
// Firebase is configured and ready to use for public score storage

// IMPORTANT: These are public keys and safe to expose in client-side code
const firebaseConfig = {
  apiKey: "AIzaSyBkmynxOFZL9RoiS2AhQeHS36n-_O-m8ro",
  authDomain: "gitsuniversity.firebaseapp.com",
  projectId: "gitsuniversity",
  storageBucket: "gitsuniversity.firebasestorage.app",
  messagingSenderId: "577052183919",
  appId: "1:577052183919:web:5f7fc3c2a32caa2d08ac9a",
  measurementId: "G-BE0KXJG788" // Optional: for Analytics
};

// Check if Firebase is configured
export const isFirebaseConfigured = () => {
  return firebaseConfig.apiKey !== "YOUR_API_KEY" && 
         firebaseConfig.projectId !== "YOUR_PROJECT_ID";
};

export default firebaseConfig;
