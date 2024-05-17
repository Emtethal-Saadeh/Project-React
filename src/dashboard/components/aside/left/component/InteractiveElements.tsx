/* eslint-disable prettier/prettier */
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link from react-router-dom
import '../../../../../assets/styles/dashboard.scss';
import { useAppStore } from '../../../../../context/app-store';

const buttonsData = [
  { icon: 'fa fa-bar-chart', text: 'Dashboard', route: '/dashboard' },
  { icon: 'fa fa-exchange', text: 'Transactions', route: '/transactions' },
  { icon: 'fa fa-tags', text: 'Category', route: '/category' },
  { icon: 'fa fa-cogs', text: 'Settings', route: '/settings' },
  { icon: 'fa fa-sign-out-alt', text: 'Logout', route: '/login' }
];

const InteractiveElements = () => {
  const { setusername ,setrole} = useAppStore(); 

  const handleLogout = () => {
    setusername('');
    setrole('');

    
  };

  return (
    <div className="">
      {buttonsData.map((button, index) => (
         <NavLink
         key={index}
         to={button.route}
         className={({ isActive }) => (isActive ? 'active' : 'inactive')}
         onClick={button.text === 'Logout' ? handleLogout : undefined} 
       >
          <div className="menu-item ">
            <i className={button.icon + ' w-30px icon'}></i>

            <div className="label ms-2 text-secondary text-decoration-none d-none d-md-inline-flex">
              {button.text}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default InteractiveElements;
