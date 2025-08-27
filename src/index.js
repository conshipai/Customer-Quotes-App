import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check if running inside shell
const isInShell = window.location.pathname.includes('/app/');

if (isInShell) {
  // Running inside shell - App will receive shellContext as prop
  window.renderCustomerQuotePortal = (shellContext) => {
    root.render(
      <React.StrictMode>
        <App shellContext={shellContext} />
      </React.StrictMode>
    );
  };
} else {
  // Standalone mode
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
