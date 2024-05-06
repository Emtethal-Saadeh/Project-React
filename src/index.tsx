import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './AppRoutes';
import { MyProvider } from './context/app-store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-bootstrap';

const rootElement = document.getElementById('root');
if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ToastContainer />
      <MyProvider>
        <AppRoutes />
      </MyProvider>
    </React.StrictMode>
  );
}

reportWebVitals();
