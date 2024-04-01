import React from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bank from './layout/Bank/Bank';
import MasterLayout from './layout/Home/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />} />
          <Route path="/bank" element={<Bank />} />
        </Routes>
      </BrowserRouter>
      <Dashboard />
      
    </>
  );
}

export default App;
