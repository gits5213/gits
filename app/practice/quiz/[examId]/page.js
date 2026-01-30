// Server component wrapper for generateStaticParams
import ExamPageClient from './ExamPageClient'

// Generate static params for static export (must be in server component)
export function generateStaticParams() {
  return [
    { examId: 'exam-1' },
    { examId: 'exam-2' },
    { examId: 'exam-3' },
    { examId: 'exam-4' },
    { examId: 'exam-5' },
    { examId: 'exam-6' },
    { examId: 'exam-7' },
    { examId: 'exam-8' },
    { examId: 'exam-9' },
    { examId: 'exam-10' },
    { examId: 'exam-11' },
    { examId: 'exam-12' },
    { examId: 'exam-13' },
    { examId: 'exam-14' },
    { examId: 'exam-15' },
    { examId: 'exam-16' },
    { examId: 'exam-17' },
    { examId: 'exam-18' },
    { examId: 'exam-19' },
    { examId: 'exam-20' },
    { examId: 'exam-21' },
    { examId: 'exam-22' },
    { examId: 'exam-23' },
  ]
}

export default function ExamPage() {
  return <ExamPageClient />
}
