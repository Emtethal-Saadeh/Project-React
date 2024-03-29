import React from 'react'
import '../../../../assets/styles/dashboard.scss';

const TranactionsHeader = () => {
  return (
    
    <div className="m-2 row">
    <p className="m-2 text-start col fw-bold fs-5">Transactions Overview</p>
    <p className=" col text-end" ><i className="fa fa-circle me-2 text-primary fz10" ></i> Savings  <i className="fa fa-circle ms-4 me-2 text-danger fz10" ></i> Expenses</p>
</div>
  )
}

export default TranactionsHeader
