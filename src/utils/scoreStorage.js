// Score Storage Service
// Handles saving and loading exam scores from both localStorage and Firebase
// Falls back to localStorage if Firebase is not configured

import firebaseConfig, { isFirebaseConfigured } from './firebaseConfig';

let firestore = null;
let firebaseInitialized = false;
let firebaseApp = null;

// Initialize Firebase if configured
const initializeFirebase = async () => {
  if (firebaseInitialized) return firebaseInitialized;
  
  try {
    if (!isFirebaseConfigured()) {
      firebaseInitialized = false;
      return false;
    }

    // Check if Firebase package is available
    // Use dynamic import with error handling
    let firebase, getFirestore;
    try {
      const firebaseAppModule = await import('firebase/app');
      const firestoreModule = await import('firebase/firestore');
      firebase = firebaseAppModule.default || firebaseAppModule;
      getFirestore = firestoreModule.getFirestore;
      
      if (!getFirestore) {
        throw new Error('Firebase Firestore not available');
      }
    } catch (importError) {
      console.warn('Firebase package not installed. Install with: npm install firebase', importError);
      firebaseInitialized = false;
      return false;
    }
    
    if (!firebase.apps || firebase.apps.length === 0) {
      firebaseApp = firebase.initializeApp(firebaseConfig);
    } else {
      firebaseApp = firebase.apps[0];
    }
    
    firestore = getFirestore(firebaseApp);
    firebaseInitialized = true;
    console.log('Firebase initialized successfully');
    return true;
  } catch (error) {
    console.warn('Firebase not available, using localStorage only:', error.message || error);
    firebaseInitialized = false;
    return false;
  }
};

// Save exam result to both localStorage and Firebase
export const saveExamResult = async (examId, studentInfo, examResult) => {
  // Always save to localStorage for backward compatibility
  localStorage.setItem(`examResult_${examId}`, JSON.stringify(examResult));
  localStorage.setItem(`examTaken_${examId}`, 'true');
  localStorage.setItem(`studentInfo_${examId}`, JSON.stringify(studentInfo));

  // Try to save to Firebase if configured
  try {
    const initialized = await initializeFirebase();
    if (initialized && firestore) {
      let serverTimestamp, collection, addDoc;
      try {
        const firestoreModule = await import('firebase/firestore');
        serverTimestamp = firestoreModule.serverTimestamp;
        collection = firestoreModule.collection;
        addDoc = firestoreModule.addDoc;
      } catch (importError) {
        console.warn('Firebase Firestore module not available');
        return; // Exit early if Firebase modules can't be imported
      }
      
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
        totalQuestions: examResult.totalQuestions || 0,
        createdAt: serverTimestamp()
      };

      await addDoc(collection(firestore, 'examResults'), resultData);
      console.log('Exam result saved to Firebase');
    }
  } catch (error) {
    console.error('Error saving to Firebase (using localStorage only):', error);
    // Continue with localStorage only - don't throw error
  }
};

// Load exam results from Firebase and localStorage
export const loadExamResults = async () => {
  const results = [];
  
  // First, try to load from Firebase if configured
  try {
    const initialized = await initializeFirebase();
    if (initialized && firestore) {
      let collection, query, orderBy, getDocs;
      try {
        const firestoreModule = await import('firebase/firestore');
        collection = firestoreModule.collection;
        query = firestoreModule.query;
        orderBy = firestoreModule.orderBy;
        getDocs = firestoreModule.getDocs;
      } catch (importError) {
        console.warn('Firebase Firestore module not available');
        // Fall through to localStorage
      }
      
      if (collection && query && orderBy && getDocs) {
        const q = query(collection(firestore, 'examResults'), orderBy('submittedAt', 'desc'));
        const snapshot = await getDocs(q);
        
        snapshot.forEach(doc => {
          const data = doc.data();
          results.push({
            id: doc.id,
            examId: data.examId,
            examName: data.examName,
            examTitle: data.examTitle,
            firstName: data.firstName || '',
            middleName: data.middleName || '',
            lastName: data.lastName || '',
            companyName: data.companyName || '',
            instructorName: data.instructorName || '',
            score: data.score || 0,
            timeElapsed: data.timeElapsed || 0,
            submittedAt: data.submittedAt || new Date().toISOString(),
            totalQuestions: data.totalQuestions || 0,
            source: 'firebase'
          });
        });
        
        console.log(`Loaded ${results.length} results from Firebase`);
        return results;
      }
    }
  } catch (error) {
    console.warn('Error loading from Firebase, falling back to localStorage:', error);
  }

  // Fallback to localStorage
  // This code matches the existing Scorecard logic
  const examDataMap = await import('../utilities/data/examData');
  const { exam1Data, exam2Data, exam3Data, exam4Data, exam5Data, exam6Data, exam7Data, exam8Data, exam9Data, exam10Data, exam11Data, exam12Data, exam13Data, exam14Data, exam15Data, exam16Data, exam17Data } = examDataMap;
  
  const examDataMapObj = {
    1: exam1Data, 2: exam2Data, 3: exam3Data, 4: exam4Data, 5: exam5Data,
    6: exam6Data, 7: exam7Data, 8: exam8Data, 9: exam9Data, 10: exam10Data,
    11: exam11Data, 12: exam12Data, 13: exam13Data, 14: exam14Data,
    15: exam15Data, 16: exam16Data, 17: exam17Data
  };

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
        console.error(`Error parsing data for exam ${examId}:`, error);
      }
    }
  }
  
  // Sort by submitted date (newest first)
  results.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
  
  console.log(`Loaded ${results.length} results from localStorage`);
  return results;
};

// Delete exam result (from both localStorage and Firebase)
export const deleteExamResult = async (examId, firebaseDocId = null) => {
  // Delete from localStorage
  localStorage.removeItem(`examTaken_${examId}`);
  localStorage.removeItem(`studentInfo_${examId}`);
  localStorage.removeItem(`examResult_${examId}`);

  // Delete from Firebase if docId provided
  if (firebaseDocId) {
    try {
      const initialized = await initializeFirebase();
      if (initialized && firestore) {
        let collection, doc, deleteDoc;
        try {
          const firestoreModule = await import('firebase/firestore');
          collection = firestoreModule.collection;
          doc = firestoreModule.doc;
          deleteDoc = firestoreModule.deleteDoc;
        } catch (importError) {
          console.warn('Firebase Firestore module not available');
          return; // Exit early
        }
        
        if (collection && doc && deleteDoc) {
          await deleteDoc(doc(collection(firestore, 'examResults'), firebaseDocId));
          console.log('Deleted from Firebase');
        }
      }
    } catch (error) {
      console.error('Error deleting from Firebase:', error);
    }
  }
};

// Delete all exam results
export const deleteAllExamResults = async () => {
  // Delete all from localStorage
  for (let examId = 1; examId <= 17; examId++) {
    localStorage.removeItem(`examTaken_${examId}`);
    localStorage.removeItem(`studentInfo_${examId}`);
    localStorage.removeItem(`examResult_${examId}`);
  }

  // Delete all from Firebase
  try {
    const initialized = await initializeFirebase();
    if (initialized && firestore) {
      let collection, getDocs, writeBatch;
      try {
        const firestoreModule = await import('firebase/firestore');
        collection = firestoreModule.collection;
        getDocs = firestoreModule.getDocs;
        writeBatch = firestoreModule.writeBatch;
      } catch (importError) {
        console.warn('Firebase Firestore module not available');
        return; // Exit early
      }
      
      if (collection && getDocs && writeBatch) {
        const snapshot = await getDocs(collection(firestore, 'examResults'));
        const batch = writeBatch(firestore);
        snapshot.forEach(docSnapshot => {
          batch.delete(docSnapshot.ref);
        });
        await batch.commit();
        console.log('Deleted all from Firebase');
      }
    }
  } catch (error) {
    console.error('Error deleting all from Firebase:', error);
  }
};
