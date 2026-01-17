import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from './components/ErrorBoundary';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename='/gits'>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
