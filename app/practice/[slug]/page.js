// Server component wrapper for generateStaticParams
import PracticePageClient from './PracticePageClient'

// Generate static params for static export (must be in server component)
export function generateStaticParams() {
  return [
    // Tab routes
    { slug: 'examples' },
    { slug: 'testcases' },
    { slug: 'quiz' },
    { slug: 'scorecard' },
    // Practice sub-pages
    { slug: 'ab-testing' },
    { slug: 'add-remove-elements' },
    { slug: 'basic-auth' },
    { slug: 'broken-images' },
    { slug: 'challenging-dom' },
    { slug: 'checkboxes' },
    { slug: 'context-menu' },
    { slug: 'digest-auth' },
    { slug: 'disappearing-elements' },
    { slug: 'drag-and-drop' },
    { slug: 'dropdown' },
    { slug: 'dynamic-content' },
    { slug: 'dynamic-controls' },
    { slug: 'dynamic-loading' },
    { slug: 'entry-ad' },
    { slug: 'exit-intent' },
    { slug: 'file-download' },
    { slug: 'file-upload' },
    { slug: 'floating-menu' },
    { slug: 'forgot-password' },
    { slug: 'form-authentication' },
    { slug: 'frames' },
    { slug: 'geolocation' },
    { slug: 'horizontal-slider' },
    { slug: 'hovers' },
    { slug: 'infinite-scroll' },
    { slug: 'inputs' },
    { slug: 'jquery-ui-menus' },
    { slug: 'javascript-alerts' },
    { slug: 'javascript-error' },
    { slug: 'key-presses' },
    { slug: 'large-deep-dom' },
    { slug: 'multiple-windows' },
    { slug: 'nested-frames' },
    { slug: 'notification-messages' },
    { slug: 'redirect-link' },
    { slug: 'registration-form' },
    { slug: 'e2e-flow' },
    { slug: 'secure-file-download' },
    { slug: 'shadow-dom' },
    { slug: 'shifting-content' },
    { slug: 'slow-resources' },
    { slug: 'sortable-data-tables' },
    { slug: 'status-codes' },
    { slug: 'typos' },
    { slug: 'wysiwyg-editor' },
    { slug: 'api-examples' },
    { slug: 'performance-examples' },
    { slug: 'appium-ios-emulator' },
    { slug: 'appium-android-emulator' },
    { slug: 'appium-ios-device' },
    { slug: 'appium-android-device' },
  ]
}

export default function PracticeSlugPage() {
  return <PracticePageClient />
}
