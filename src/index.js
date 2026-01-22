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
