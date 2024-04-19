import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../../../../assets/styles/dashboard.scss';

const buttonsData = [
    { icon: 'fa fa-bar-chart', text: 'Dashboard', route: '/dashboard' },
    { icon: 'fa fa-exchange', text: 'Transactions', route: '/transactions' },
    { icon: 'fa fa-credit-card', text: 'Cards', route: '/cards' },
    { icon: 'fa fa-file', text: 'Reports', route: '/reports' },
    { icon: 'fa fa-calendar-days', text: 'Calendar', route: '/calendar' },
    { icon: 'fa fa-sliders', text: 'Settings', route: '/settings' },
    { icon: 'fa fa-comment', text: 'Chat', route: '/chat' }
];

const InteractiveElements = () => {
    return (
        <div>
            {buttonsData.map((button, index) => (
                <Link key={index} to={button.route}>
                    <div className="ms-4 btn my-1 d-block text-start line">
                        <p className="d-inline-flex"><i className={button.icon + " mt-1 fz20"}></i></p>
                        <p className="ms-2 text-body-secondary d-inline-flex d-none d-md-inline-flex">{button.text}</p>
                        <div className="border-right-view"></div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default InteractiveElements;
