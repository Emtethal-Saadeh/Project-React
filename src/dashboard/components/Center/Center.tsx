import React from 'react'
import DashHeader from './component/DashHeader'
import FinancialTools from './component/FinancialTools'
import FinancialOverview from './component/FinancialOverview'
import Transactions from './component/Transactions'
import '../../../assets/styles/dashboard.scss';

const Center = () => {
  return (
    <div className="flex-grow-1 ">
        <article className=" d-flex vh-100 d-none d-sm-flex">
            <article className="container text-center">
                <DashHeader/>
                <FinancialTools/>
                <FinancialOverview/>
                <Transactions/>
            </article>
        </article>
    </div>
  )
}

export default Center
