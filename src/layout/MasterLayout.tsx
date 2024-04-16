import React from 'react'
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import LeftAside from '../dashboard/components/aside/left/LeftAside ';
import '../assets/styles/dashboard.scss';

const MasterLayout = () => {
    return (
        <div className='bgc'>
          <LeftAside />
        <main>
        <Outlet />
        </main>
          <Footer />
        </div>
      );
}

export default MasterLayout
