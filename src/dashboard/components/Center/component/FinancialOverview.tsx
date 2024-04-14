import React from 'react'
import '../../../../assets/styles/dashboard.scss';
import TotalBalance from './TotalBalance';
import Expenses from './Expenses';

const FinancialOverview = () => {
  return (
    <div className=" mt-1 row">
        <TotalBalance/>
        <Expenses/>
                    
                    
    </div>
  )
}

export default FinancialOverview
