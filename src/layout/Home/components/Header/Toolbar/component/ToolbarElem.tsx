import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../../../../../assets/styles/dashboard.scss';

const ToolbarElem = () => {
    const menuItems = [
        {
            iconClass: "fa fa-bar-chart",
            text: "Dashboard",
            route: "/Dashboard"
        },
        {
            iconClass: "fa fa-exchange",
            text: "Transactions",
            route: "/transactions"
        },
        {
            iconClass: "fa fa-credit-card",
            text: "Cards",
            route: "/cards"
        },
        {
            iconClass: "fa fa-file",
            text: "Reports",
            route: "/reports"
        },
        {
            iconClass: "fa fa-calendar-minus",
            text: "Calendar",
            route: "/calendar"
        },
        {
            iconClass: "fa fa-sliders",
            text: "Settings",
            route: "/settings"
        },
        {
            iconClass: "fa fa-commenting",
            text: "Chat",
            route: "/chat"
        }
    ];

    return (
        <div>
            <div>
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.route}>
                        <div className="ms-4 my-1 btn d-block text-start">
                            <p className="d-inline-flex">
                                <i className={item.iconClass + " mt-1"}></i>
                            </p>
                            <p className="ms-2 text-body-secondary d-inline-flex">{item.text}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ToolbarElem;
