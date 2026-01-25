// Route configuration for better maintainability and code splitting
import { lazy } from 'react';

// Lazy load all route components for code splitting
const Landing = lazy(() => import('../pages/landing'));
const Courses = lazy(() => import('../pages/courses'));
const Docs = lazy(() => import('../pages/docs'));
const APIS = lazy(() => import('../pages/apis'));
const AID = lazy(() => import('../pages/aid'));
const Practice = lazy(() => import('../pages/practice'));

// Practice sub-pages - lazy loaded
const ABTesting = lazy(() => import('../pages/practice/ABTesting'));
const AddRemoveElements = lazy(() => import('../pages/practice/AddRemoveElements'));
const BasicAuth = lazy(() => import('../pages/practice/BasicAuth'));
const BrokenImages = lazy(() => import('../pages/practice/BrokenImages'));
const ChallengingDOM = lazy(() => import('../pages/practice/ChallengingDOM'));
const Checkboxes = lazy(() => import('../pages/practice/Checkboxes'));
const ContextMenu = lazy(() => import('../pages/practice/ContextMenu'));
const DigestAuth = lazy(() => import('../pages/practice/DigestAuth'));
const DisappearingElements = lazy(() => import('../pages/practice/DisappearingElements'));
const DragAndDrop = lazy(() => import('../pages/practice/DragAndDrop'));
const Dropdown = lazy(() => import('../pages/practice/Dropdown'));
const DynamicContent = lazy(() => import('../pages/practice/DynamicContent'));
const DynamicControls = lazy(() => import('../pages/practice/DynamicControls'));
const DynamicLoading = lazy(() => import('../pages/practice/DynamicLoading'));
const EntryAd = lazy(() => import('../pages/practice/EntryAd'));
const ExitIntent = lazy(() => import('../pages/practice/ExitIntent'));
const FileDownload = lazy(() => import('../pages/practice/FileDownload'));
const FileUpload = lazy(() => import('../pages/practice/FileUpload'));
const FloatingMenu = lazy(() => import('../pages/practice/FloatingMenu'));
const ForgotPassword = lazy(() => import('../pages/practice/ForgotPassword'));
const FormAuthentication = lazy(() => import('../pages/practice/FormAuthentication'));
const Frames = lazy(() => import('../pages/practice/Frames'));
const Geolocation = lazy(() => import('../pages/practice/Geolocation'));
const HorizontalSlider = lazy(() => import('../pages/practice/HorizontalSlider'));
const Hovers = lazy(() => import('../pages/practice/Hovers'));
const InfiniteScroll = lazy(() => import('../pages/practice/InfiniteScroll'));
const Inputs = lazy(() => import('../pages/practice/Inputs'));
const JQueryUIMenus = lazy(() => import('../pages/practice/JQueryUIMenus'));
const JavaScriptAlerts = lazy(() => import('../pages/practice/JavaScriptAlerts'));
const JavaScriptError = lazy(() => import('../pages/practice/JavaScriptError'));
const KeyPresses = lazy(() => import('../pages/practice/KeyPresses'));
const LargeDeepDOM = lazy(() => import('../pages/practice/LargeDeepDOM'));
const MultipleWindows = lazy(() => import('../pages/practice/MultipleWindows'));
const NestedFrames = lazy(() => import('../pages/practice/NestedFrames'));
const NotificationMessages = lazy(() => import('../pages/practice/NotificationMessages'));
const RedirectLink = lazy(() => import('../pages/practice/RedirectLink'));
const RegistrationForm = lazy(() => import('../pages/practice/RegistrationForm'));
const E2EFlow = lazy(() => import('../pages/practice/E2EFlow'));
const SecureFileDownload = lazy(() => import('../pages/practice/SecureFileDownload'));
const ShadowDOM = lazy(() => import('../pages/practice/ShadowDOM'));
const ShiftingContent = lazy(() => import('../pages/practice/ShiftingContent'));
const SlowResources = lazy(() => import('../pages/practice/SlowResources'));
const SortableDataTables = lazy(() => import('../pages/practice/SortableDataTables'));
const StatusCodes = lazy(() => import('../pages/practice/StatusCodes'));
const Typos = lazy(() => import('../pages/practice/Typos'));
const WYSIWYGEditor = lazy(() => import('../pages/practice/WYSIWYGEditor'));

// Exam components - lazy loaded
const Exam1 = lazy(() => import('../pages/practice/Exam1'));
const Exam2 = lazy(() => import('../pages/practice/Exam2'));
const Exam3 = lazy(() => import('../pages/practice/Exam3'));
const Exam4 = lazy(() => import('../pages/practice/Exam4'));
const Exam5 = lazy(() => import('../pages/practice/Exam5'));
const Exam6 = lazy(() => import('../pages/practice/Exam6'));
const Exam7 = lazy(() => import('../pages/practice/Exam7'));
const Exam8 = lazy(() => import('../pages/practice/Exam8'));
const Exam9 = lazy(() => import('../pages/practice/Exam9'));
const Exam10 = lazy(() => import('../pages/practice/Exam10'));
const Exam11 = lazy(() => import('../pages/practice/Exam11'));
const Exam12 = lazy(() => import('../pages/practice/Exam12'));
const Exam13 = lazy(() => import('../pages/practice/Exam13'));
const Exam14 = lazy(() => import('../pages/practice/Exam14'));
const Exam15 = lazy(() => import('../pages/practice/Exam15'));
const Exam16 = lazy(() => import('../pages/practice/Exam16'));
const Exam17 = lazy(() => import('../pages/practice/Exam17'));

// Static pages - lazy loaded
const About = lazy(() => import('../pages/about'));
const Contact = lazy(() => import('../pages/contact'));
const HowItWorks = lazy(() => import('../pages/howItWorks'));
const TermsOfUse = lazy(() => import('../pages/termsOfUse'));
const PrivacyPolicy = lazy(() => import('../pages/privacyPolicy'));
const CopyrightNotice = lazy(() => import('../pages/copyrightNotice'));
const WebsiteDisclaimer = lazy(() => import('../pages/websiteDisclaimer'));

// Playwright sub-pages - lazy loaded
const NamingConventions = lazy(() => import('../pages/playwright/NamingConventions'));
const PRReviewChecklist = lazy(() => import('../pages/playwright/PRReviewChecklist'));
const TestTypeTaxonomy = lazy(() => import('../pages/playwright/TestTypeTaxonomy'));
const AutomationStandards = lazy(() => import('../pages/playwright/AutomationStandards'));

// Route configuration array for easier maintenance
export const routes = [
  // Landing
  { path: '/', exact: true, component: Landing },
  
  // Courses
  { path: '/courses', exact: true, component: Courses },
  { path: '/courses/code4kids', component: Courses },
  { path: '/courses/webdevelopment', component: Courses },
  { path: '/courses/automation', component: Courses },
  { path: '/courses/manual', component: Courses },
  { path: '/courses/accessibility', component: Courses },
  { path: '/courses/sdet-roadmap', component: Courses },
  { path: '/courses/automation/selenium-webdriver', component: Courses },
  { path: '/courses/selenium-webdriver', component: Courses },
  
  // Docs
  { path: '/docs', exact: true, component: Docs },
  { path: '/docs/agile', component: Docs },
  { path: '/docs/scrum', component: Docs },
  { path: '/docs/network', component: Docs },
  { path: '/docs/sql', component: Docs },
  { path: '/docs/manual', component: Docs },
  { path: '/docs/linux', component: Docs },
  { path: '/docs/git', component: Docs },
  { path: '/docs/html', component: Docs },
  { path: '/docs/css', component: Docs },
  { path: '/docs/java', component: Docs },
  { path: '/docs/python', component: Docs },
  { path: '/docs/javascript', component: Docs },
  { path: '/docs/typescript', component: Docs },
  { path: '/docs/reactjs', component: Docs },
  { path: '/docs/nextjs', component: Docs },
  { path: '/docs/links', component: Docs },
  
  // APIs
  { path: '/apis', exact: true, component: APIS },
  { path: '/apis/selenium', component: APIS },
  // Playwright sub-pages (must come before /apis/playwright)
  { path: '/apis/playwright/naming-conventions', component: NamingConventions },
  { path: '/apis/playwright/pr-review-checklist', component: PRReviewChecklist },
  { path: '/apis/playwright/test-type-taxonomy', component: TestTypeTaxonomy },
  { path: '/apis/playwright/automation-standards', component: AutomationStandards },
  { path: '/apis/playwright', component: APIS },
  { path: '/apis/cypressio', component: APIS },
  { path: '/apis/protractor', component: APIS },
  { path: '/apis/restassured', component: APIS },
  { path: '/apis/readyapi', component: APIS },
  { path: '/apis/performance', component: APIS },
  { path: '/apis/architecture', component: APIS },
  { path: '/apis/appium', component: APIS },
  { path: '/apis/webdriverio', component: APIS },
  { path: '/apis/supertest', component: APIS },
  { path: '/apis/frisby', component: APIS },
  
  // AID
  { path: '/aid', exact: true, component: AID },
  { path: '/aid/window', component: AID },
  { path: '/aid/mac', component: AID },
  { path: '/aid/basic', component: AID },
  { path: '/aid/gk', component: AID },
  { path: '/aid/help', component: AID },
  { path: '/aid/frontend', component: AID },
  { path: '/aid/codesnippet', component: AID },
  
  // Practice
  { path: '/practice', exact: true, component: Practice },
  { path: '/practice/examples', component: Practice },
  { path: '/practice/testcases', component: Practice },
  { path: '/practice/quiz', exact: true, component: Practice },
  { path: '/practice/scorecard', component: Practice },
  
  // Exams
  { path: '/practice/quiz/exam-1', component: Exam1 },
  { path: '/practice/quiz/exam-1/register', component: Exam1 },
  { path: '/practice/quiz/exam-2', component: Exam2 },
  { path: '/practice/quiz/exam-2/register', component: Exam2 },
  { path: '/practice/quiz/exam-3', component: Exam3 },
  { path: '/practice/quiz/exam-3/register', component: Exam3 },
  { path: '/practice/quiz/exam-4', component: Exam4 },
  { path: '/practice/quiz/exam-4/register', component: Exam4 },
  { path: '/practice/quiz/exam-5', component: Exam5 },
  { path: '/practice/quiz/exam-5/register', component: Exam5 },
  { path: '/practice/quiz/exam-6', component: Exam6 },
  { path: '/practice/quiz/exam-6/register', component: Exam6 },
  { path: '/practice/quiz/exam-7', component: Exam7 },
  { path: '/practice/quiz/exam-7/register', component: Exam7 },
  { path: '/practice/quiz/exam-8', component: Exam8 },
  { path: '/practice/quiz/exam-8/register', component: Exam8 },
  { path: '/practice/quiz/exam-9', component: Exam9 },
  { path: '/practice/quiz/exam-9/register', component: Exam9 },
  { path: '/practice/quiz/exam-10', component: Exam10 },
  { path: '/practice/quiz/exam-10/register', component: Exam10 },
  { path: '/practice/quiz/exam-11', component: Exam11 },
  { path: '/practice/quiz/exam-11/register', component: Exam11 },
  { path: '/practice/quiz/exam-12', component: Exam12 },
  { path: '/practice/quiz/exam-12/register', component: Exam12 },
  { path: '/practice/quiz/exam-13', component: Exam13 },
  { path: '/practice/quiz/exam-13/register', component: Exam13 },
  { path: '/practice/quiz/exam-14', component: Exam14 },
  { path: '/practice/quiz/exam-14/register', component: Exam14 },
  { path: '/practice/quiz/exam-15', component: Exam15 },
  { path: '/practice/quiz/exam-15/register', component: Exam15 },
  { path: '/practice/quiz/exam-16', component: Exam16 },
  { path: '/practice/quiz/exam-16/register', component: Exam16 },
  { path: '/practice/quiz/exam-17', component: Exam17 },
  { path: '/practice/quiz/exam-17/register', component: Exam17 },
  
  // Practice sub-pages
  { path: '/practice/ab-testing', component: ABTesting },
  { path: '/practice/add-remove-elements', component: AddRemoveElements },
  { path: '/practice/basic-auth', component: BasicAuth },
  { path: '/practice/broken-images', component: BrokenImages },
  { path: '/practice/challenging-dom', component: ChallengingDOM },
  { path: '/practice/checkboxes', component: Checkboxes },
  { path: '/practice/context-menu', component: ContextMenu },
  { path: '/practice/digest-auth', component: DigestAuth },
  { path: '/practice/disappearing-elements', component: DisappearingElements },
  { path: '/practice/drag-and-drop', component: DragAndDrop },
  { path: '/practice/dropdown', component: Dropdown },
  { path: '/practice/dynamic-content', component: DynamicContent },
  { path: '/practice/dynamic-controls', component: DynamicControls },
  { path: '/practice/dynamic-loading', component: DynamicLoading },
  { path: '/practice/entry-ad', component: EntryAd },
  { path: '/practice/exit-intent', component: ExitIntent },
  { path: '/practice/file-download', component: FileDownload },
  { path: '/practice/file-upload', component: FileUpload },
  { path: '/practice/floating-menu', component: FloatingMenu },
  { path: '/practice/forgot-password', component: ForgotPassword },
  { path: '/practice/form-authentication', component: FormAuthentication },
  { path: '/practice/frames', component: Frames },
  { path: '/practice/geolocation', component: Geolocation },
  { path: '/practice/horizontal-slider', component: HorizontalSlider },
  { path: '/practice/hovers', component: Hovers },
  { path: '/practice/infinite-scroll', component: InfiniteScroll },
  { path: '/practice/inputs', component: Inputs },
  { path: '/practice/jquery-ui-menus', component: JQueryUIMenus },
  { path: '/practice/javascript-alerts', component: JavaScriptAlerts },
  { path: '/practice/javascript-error', component: JavaScriptError },
  { path: '/practice/key-presses', component: KeyPresses },
  { path: '/practice/large-deep-dom', component: LargeDeepDOM },
  { path: '/practice/multiple-windows', component: MultipleWindows },
  { path: '/practice/nested-frames', component: NestedFrames },
  { path: '/practice/notification-messages', component: NotificationMessages },
  { path: '/practice/redirect-link', component: RedirectLink },
  { path: '/practice/registration-form', component: RegistrationForm },
  { path: '/practice/e2e-flow', component: E2EFlow },
  { path: '/practice/secure-file-download', component: SecureFileDownload },
  { path: '/practice/shadow-dom', component: ShadowDOM },
  { path: '/practice/shifting-content', component: ShiftingContent },
  { path: '/practice/slow-resources', component: SlowResources },
  { path: '/practice/sortable-data-tables', component: SortableDataTables },
  { path: '/practice/status-codes', component: StatusCodes },
  { path: '/practice/typos', component: Typos },
  { path: '/practice/wysiwyg-editor', component: WYSIWYGEditor },
  
  // Static pages
  { path: '/about', exact: true, component: About },
  { path: '/contact', exact: true, component: Contact },
  { path: '/how-it-works', exact: true, component: HowItWorks },
  { path: '/terms-of-use', exact: true, component: TermsOfUse },
  { path: '/privacy-policy', exact: true, component: PrivacyPolicy },
  { path: '/copyright-notice', exact: true, component: CopyrightNotice },
  { path: '/website-disclaimer', exact: true, component: WebsiteDisclaimer },
];
