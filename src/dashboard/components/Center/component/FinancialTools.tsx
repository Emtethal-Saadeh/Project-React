import React from 'react'
import '../../../../assets/styles/dashboard.scss';

const FinancialTools = () => {
    const buttons = [
        {
          icon: 'fa fa-share-square',
          text: 'Send money'
        },
        {
          icon: 'fa fa-file-text',
          text: 'Statements'
        },
        {
          icon: 'fa fa-caret-square-up',
          text: 'Top up'
        },
        {
          icon: 'fa fa-ellipsis',
          text: 'More'
        }
      ];
  return (
    <div className="bg-white row rounded-5 border-none mt-1 h-10 p-1">
                     <div className="row">
      {buttons.map((button, index) => (
        <div key={index} className="rounded-5 btn m-0 text-center col haver h-8">
          <p className="mt-2 m-1"><i className={button.icon + " mt-1 fz20"}></i></p>
          <p className="ms-2 text-body-secondary">{button.text}</p>
        </div>
      ))}
    </div>

    </div>
  )
}

export default FinancialTools
