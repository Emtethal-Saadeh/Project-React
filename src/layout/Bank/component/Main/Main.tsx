import React from 'react'
import AnalyticsBadget from './component/AnalyticsBadget'
import TransactionJunction from './component/TransactionJunction'
import Expenses from './expenses/Expenses'

const Main = () => {
  return (
    <div>
       
           <AnalyticsBadget/>
           <TransactionJunction/>
           <Expenses/>
    </div>
  )
}

export default Main
