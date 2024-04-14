import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './AppRoutes';

const rootElement = document.getElementById('root');
if (rootElement !== null) { // Explicit null check
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
}

reportWebVitals();
