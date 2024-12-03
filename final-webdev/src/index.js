import React from 'react';
import ReactDOM from 'react-dom/client';  // Update import for React 18
import App from './App';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render your App using the root object
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
