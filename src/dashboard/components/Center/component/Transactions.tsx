import React from 'react'
import '../../../../assets/styles/dashboard.scss';
import TranactionsHeader from './TranactionsHeader';
import TransactionsImg from './TransactionsImg';

const Transactions = () => {
  return (
    <div className=" mt-1 row  my-2">

        <div className=" my-1 text-center col rounded-5 bg-white ">
            <TranactionsHeader/>
           <TransactionsImg/>
        </div>
                    
                
    </div>
  )
}

export default Transactions
