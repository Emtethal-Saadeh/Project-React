import React from 'react';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import LeftAside from '../dashboard/components/aside/left/LeftAside ';
import '../assets/styles/dashboard.scss';
import '../assets/styles/Layout.scss';

const MasterLayout = () => {
  return (
    <div className="d-flex h-100">
      <LeftAside />

      <main className="flex-grow-1 overflow-auto ">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default MasterLayout;
