import React from 'react'
import '../../../../assets/styles/dashboard.scss';
import { useDateFilterStore } from '../../../../context/useDateFilterStore';

const TranactionsHeader = () => {
  const dateFilter = useDateFilterStore((state) => state.dateFilter);
  return (
    
    <div className="m-2 row">
    <p className="m-2 text-start col fw-bold fs-5">Transactions Overview</p>
    <p className="m-2 pt-1 mx-1 text-start col fs-6">{(dateFilter.length > 0) && `Date Filter: ${dateFilter}`}</p>
    <p className=" col text-end" ><i className="fa fa-circle me-2 text-primary fz10" ></i> Savings  <i className="fa fa-circle ms-4 me-2 text-danger fz10" ></i> Expenses</p>
</div>
  )
}

export default TranactionsHeader
