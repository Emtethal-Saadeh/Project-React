import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './AppRoutes';
import { MyProvider } from './context/userNameStore';

const rootElement = document.getElementById('root');
if (rootElement !== null) { // Explicit null check
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MyProvider>
    <AppRoutes />
  </MyProvider>
    </React.StrictMode>
  );
}

reportWebVitals();
