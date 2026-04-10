import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Reset global des styles navigateur
const globalStyle = document.createElement('style');
globalStyle.innerHTML = `
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    background-color: #0f1117;
  }

  body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  /* Scrollbar personnalisée pour le thème dark */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1d27;
  }

  ::-webkit-scrollbar-thumb {
    background: #2a2f45;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4f8ef7;
  }

  /* Smooth focus visible */
  :focus-visible {
    outline: 2px solid #4f8ef7;
    outline-offset: 2px;
  }

  code {
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.875em;
    background: rgba(79, 142, 247, 0.1);
    color: #7aaeff;
    padding: 1px 5px;
    border-radius: 4px;
  }
`;
document.head.appendChild(globalStyle);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);