import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './AppRoutes';
import { MyProvider } from './context/userNameStore';
import 'react-toastify/dist/ReactToastify.css';


const rootElement = document.getElementById('root');
if (rootElement !== null) { 
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
