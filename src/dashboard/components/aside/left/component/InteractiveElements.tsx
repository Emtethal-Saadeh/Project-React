import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link from react-router-dom
import '../../../../../assets/styles/dashboard.scss';

const buttonsData = [
  { icon: 'fa fa-bar-chart', text: 'Dashboard', route: '/dashboard' },
  { icon: 'fa fa-exchange', text: 'Transactions', route: '/transactions' },
  { icon: 'fa fa-credit-card', text: 'Cards', route: '/cards' },
  { icon: 'fa fa-file', text: 'Reports', route: '/reports' },
  { icon: 'fa fa-calendar-days', text: 'Calendar', route: '/calendar' }
];

const InteractiveElements = () => {
  return (
    <div className="">
      {buttonsData.map((button, index) => (
        <NavLink
          key={index}
          to={button.route}
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
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
