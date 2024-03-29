import React from 'react'
import '../../../../../../assets/styles/dashboard.scss';

const ToolbarElem = () => {
  const menuItems = [
        {
            iconClass: "fa fa-bar-chart",
            text: "Dashboard"
        },
        {
            iconClass: "fa fa-exchange",
            text: "Transactions"
        },
        {
            iconClass: "fa fa-credit-card",
            text: "Cards"
        },
        {
            iconClass: "fa fa-file",
            text: "Reports"
        },
        {
            iconClass: "fa fa-calendar-minus",
            text: "Calendar"
        },
        {
            iconClass: "fa fa-sliders",
            text: "Settings"
        },
        {
            iconClass: "fa fa-commenting",
            text: "Chat"
        }
  ];
  return (
    <div>
      <div>
            {menuItems.map((item, index) => (
                <div key={index} className="ms-4 my-1 btn d-block text-start">
                    <p className="d-inline-flex">
                        <i className={item.iconClass + " mt-1"}></i>
                    </p>
                    <p className="ms-2 text-body-secondary d-inline-flex">{item.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ToolbarElem
