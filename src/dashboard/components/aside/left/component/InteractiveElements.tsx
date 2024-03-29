import React from 'react';
import '../../../../../assets/styles/dashboard.scss';

const buttonsData = [
    { icon: 'fa fa-bar-chart', text: 'Dashboard' },
    { icon: 'fa fa-exchange', text: 'Transactions' },
    { icon: 'fa fa-credit-card', text: 'Cards' },
    { icon: 'fa fa-file', text: 'Reports' },
    { icon: 'fa fa-calendar-days', text: 'Calendar' },
    { icon: 'fa fa-sliders', text: 'Settings' },
    { icon: 'fa fa-comment', text: 'Chat' }
  ];

const InteractiveElements = () => {
  return (
    <div>
      {buttonsData.map((button, index) => (
        <div key={index} className="ms-4 btn my-1 d-block text-start line">
          <p className="d-inline-flex"><i className={button.icon + " mt-1 fz20"}></i></p>
          <p className="ms-2 text-body-secondary d-inline-flex d-none d-md-inline-flex">{button.text}</p>
          <div className="border-right-view"></div>
        </div>
      ))}
    </div>
  )
}

export default InteractiveElements
