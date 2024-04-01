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



const AppRoutes = () => {
    const routers = createBrowserRouter([
        {
          path: "/",
          element: (
              <MasterLayout />
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
      ]);
      return (
          <RouterProvider router={routers}></RouterProvider>
      );
}

export default AppRoutes
