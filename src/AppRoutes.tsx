
import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Dashboard from './dashboard/Dashboard';
import MasterLayout from './layout/MasterLayout';
import Login from './login/Login';
import { useAppStore } from './context/userNameStore';
import Transactions from './transaction/Transactions';
import NewTransaction from './transaction/NewTransaction';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TransactionForm from './transaction/TransactionForm';
import { type Transaction } from './context/Type';



const AppRoutes = () => {
  const { username } = useContext(useAppStore); 

  const PrivateRoute = () => {
    return (
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="transaction/new" element={<NewTransaction/>} />
          <Route path="transactions/:id" element={<TransactionForm onSaveButtonClicked={function (updatedTransaction: Transaction): void {
            throw new Error('Function not implemented.');
          } }/>} /> 
          <Route path="*" element={<Navigate to="/dashboard" />} /> 
        </Route>
      </Routes>
    );
  };

  return (
    <BrowserRouter>
    <ToastContainer />
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
