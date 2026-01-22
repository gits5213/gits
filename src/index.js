import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './components/ErrorBoundary';
import {BrowserRouter} from 'react-router-dom';

// Lazy load heavy dependencies - only load when needed
// react-mdl is only used in 3 components, so we'll load it conditionally
// For now, keeping it global but can be optimized further if needed
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// Tachyons - utility CSS framework, keep global for utility classes
import 'tachyons';

// Note: CSS is automatically loaded by React's build process
// No need to manually preload - React handles asset loading correctly

// Suppress console errors for React Router routes and browser extensions in production
if (process.env.NODE_ENV === 'production') {
  // Override console.error to filter out expected errors
  const originalError = console.error;
  console.error = function(...args) {
    const message = args.join(' ');
    
    // Suppress 404 errors for React Router routes (expected on GitHub Pages)
    if (message.includes('404') && 
        (message.includes('/practice/') || message.includes('Not Found')) &&
        !message.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json)$/i)) {
      return; // Suppress route 404 errors
    }
    
    // Suppress browser extension errors
    if (message.includes('listener indicated an asynchronous response') ||
        message.includes('message channel closed') ||
        message.includes('runtime.lastError')) {
      return; // Suppress extension errors
    }
    
    // Log other errors normally
    originalError.apply(console, args);
  };
  
  // Suppress unhandled promise rejections for extension errors
  window.addEventListener('unhandledrejection', function(event) {
    const message = event.reason && event.reason.toString();
    if (message && (
      message.includes('listener indicated an asynchronous response') ||
      message.includes('message channel closed') ||
      message.includes('runtime.lastError')
    )) {
      event.preventDefault(); // Suppress the error
    }
  });
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
