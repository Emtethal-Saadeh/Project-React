
import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Dashboard from './dashboard/Dashboard';
import MasterLayout from './layout/MasterLayout';
import Login from './login/Login';
import { useAppStore } from './context/userNameStore';
import Transactions from './transaction/Transaction';

const AppRoutes = () => {
  const { username } = useContext(useAppStore); 

  const PrivateRoute = () => {
    return (
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element={<Navigate to="/dashboard" />} /> 
        </Route>
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Outlet />}>
          {(username.length > 0) ? (
            <Route path="/*" element={<PrivateRoute />} />
          ) : (
            <>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
