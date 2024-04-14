import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './layout/Home/Home';
import Bank from './layout/Bank/Bank';
import NotFound from './layout/NotFound/NotFound';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Dashboard from './dashboard/Dashboard';
import MasterLayout from './layout/MasterLayout';
import Login from './login/Login';
import { MyProvider } from './MyContext';
import ProtectRouter from './ProtectRouter';



const AppRoutes = () => {
    const routers = createBrowserRouter([
        {
          path: "/",
          element: (
            <ProtectRouter>
              <MasterLayout />
            </ProtectRouter>
          ),
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "bank",
              element: <Bank />,
            },
            {
                path: "Dashboard",
                element: <Dashboard />,
            },
            
          ],
        },
        { path: "*", element: <NotFound /> },
        { path: '/login', element: <Login /> },
      ]);
      return (
        <MyProvider>
          <RouterProvider router={routers}></RouterProvider>
        </MyProvider>
      );
}

export default AppRoutes
