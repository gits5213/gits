# Reset Exam Attempts

## ⚠️ About Console Warnings

If you see these messages in the console:
- "Could not establish connection" 
- "A listener indicated an asynchronous response"
- "Don't paste code into the DevTools Console"

**These are harmless browser extension warnings** - they're not errors in the quiz code. You can safely ignore them.

## Quick Reset Script for Exam-1

**Step 1:** Open browser console (F12 → Console tab)

**Step 2:** Type `allow pasting` and press Enter (if you see the warning)

**Step 3:** Copy and paste this script:

```javascript
// Reset Exam-1 - Complete reset
console.log('🗑️  Clearing Exam-1...');

// Clear all Exam-1 related data
localStorage.removeItem('examTaken_1');
localStorage.removeItem('examResult_1');
localStorage.removeItem('examAttempts_1');
localStorage.removeItem('allExamResults_1');

// Optional: Also clear student info (uncomment if needed)
// localStorage.removeItem('studentInfo_1');

// Verify
const examTaken = localStorage.getItem('examTaken_1');
const examResult = localStorage.getItem('examResult_1');
const attempts = JSON.parse(localStorage.getItem('examAttempts_1') || '[]');

console.log('Verification:');
console.log('  examTaken_1:', examTaken, examTaken === null ? '✅' : '❌');
console.log('  examResult_1:', examResult, examResult === null ? '✅' : '❌');
console.log('  examAttempts_1:', attempts.length, attempts.length === 0 ? '✅' : '❌');

if (examTaken === null && examResult === null && attempts.length === 0) {
    console.log('✅ SUCCESS! Exam-1 reset complete.');
    console.log('🔄 Reloading page in 1 second...');
    setTimeout(() => window.location.reload(true), 1000);
} else {
    console.log('❌ Some data still exists. Trying nuclear option...');
    localStorage.clear();
    setTimeout(() => window.location.reload(true), 1000);
}
```

## Reset All Exams

```javascript
// Reset all exams
[1, 2, 3].forEach(examId => {
    localStorage.removeItem(`examAttempts_${examId}`);
    localStorage.removeItem(`examResult_${examId}`);
    localStorage.removeItem(`allExamResults_${examId}`);
    console.log(`Exam ${examId} cleared`);
});

console.log('✅ All exams cleared! Refresh the page.');
```

## Reset for Specific Student (e.g., "MD S Zaman")

```javascript
// Reset for "MD S Zaman"
const targetName = "MD S Zaman";

console.log(`🔍 Searching for: ${targetName}`);

[1, 2, 3].forEach(examId => {
    const studentInfo = JSON.parse(localStorage.getItem(`studentInfo_${examId}`) || 'null');
    if (studentInfo) {
        const fullName = `${studentInfo.firstName} ${studentInfo.middleName || ''} ${studentInfo.lastName}`.trim();
        if (fullName.toLowerCase().includes(targetName.toLowerCase())) {
            console.log(`✓ Found: "${fullName}" in Exam ${examId}`);
            
            // Clear all exam data
            localStorage.removeItem(`examTaken_${examId}`);
            localStorage.removeItem(`examResult_${examId}`);
            localStorage.removeItem(`examAttempts_${examId}`);
            localStorage.removeItem(`allExamResults_${examId}`);
            
            console.log(`  → Cleared Exam ${examId} attempts`);
        }
    }
});

console.log('✅ Done! Refresh the page.');
```

## Method 4: Programmatic Reset (For Developers)

If you need to reset exams programmatically in your code:

```javascript
import { resetExam, resetExamForStudent, resetAllExams } from '../../utilities/examReset';

// Reset Exam-1
resetExam(1);

// Reset for specific student
resetExamForStudent("MD S Zaman");

// Reset all exams
resetAllExams();
```

The utility functions are available in: `src/utilities/examReset.js`

## Quick Reference

| Method | How to Use | Best For |
|--------|------------|----------|
| **URL Parameter** | Add `?reset=true` to exam URL | Quick one-time reset |
| **Reset Button** | Click button on results page | Resetting after viewing results |
| **Console Script** | Run script in browser console | When URL/button not accessible |
| **Programmatic** | Import and call function | Developers/automation |

## Steps for Console Method:

1. Open browser console (F12)
2. Go to Console tab
3. Paste the script
4. Press Enter
5. Refresh the page (F5 or Ctrl+R)

## Example: Reset Exam-1 for "MD S Zaman"

**Using URL Method (Recommended - Works After Deployment):**

**Development:**
1. Navigate to: `http://localhost:3000/gits/practice/quiz/exam-1?reset=true`
2. Page will automatically reset and reload

**Production (After Deployment):**
1. Navigate to: `https://yourdomain.com/practice/quiz/exam-1?reset=true`
2. Page will automatically reset and reload

**Important:** 
- ✅ Works for **ANY student** - whoever accesses the URL gets their exam reset
- ✅ Works **after deployment** - just use your production domain
- ⚠️ Each student needs to access the URL from **their own browser** (localStorage is browser-specific)
- ⚠️ If "MD S Zaman" is on a different computer/browser, they need to visit the URL from their device

**Using Console:**
```javascript
// Reset Exam-1
localStorage.removeItem('examTaken_1');
localStorage.removeItem('examResult_1');
console.log('✅ Exam-1 reset! Refresh the page.');
```

## Production Deployment Notes

✅ **The URL reset method (`?reset=true`) works the same way after deployment.**

**How it works:**
- Each student's browser has its own localStorage
- When **any student** visits `exam-1?reset=true`, it clears **their browser's** exam data
- Other students' data in their browsers is not affected
- The reset is per-browser, per-student
- ✅ **Works for any student** - no special permissions needed

**After Deployment:**
- Simply replace `localhost:3000/gits` with your production domain
- Example: `https://yourdomain.com/practice/quiz/exam-1?reset=true`
- The functionality is identical - it's built into the codebase

**Security Consideration:**
- ⚠️ Anyone who knows the URL pattern can reset exams in their own browser
- ⚠️ Since localStorage is browser-specific, students can only reset their own data
- ✅ This is safe because each student's data is isolated to their browser
- 💡 If you want to restrict reset access, consider adding authentication or a secret key parameter
