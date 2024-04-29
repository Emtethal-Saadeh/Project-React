import React, { useEffect, useState } from 'react'
import '../../../../assets/styles/dashboard.scss';
import { usePeriodStore } from '../../../../context/usePeriodStore';
import { getAllTransactions } from '../../../transactions-api';

const TotalBalance = () => {
  const [totalBualance, setTotalBalance] = useState(0);
  const { period } = usePeriodStore();

  useEffect(() => {
    const calculateTotalBalance = () => {
      const transactions = getAllTransactions();
      let balance = 0;

      if (period === 'today') {
        const today = new Date();
        const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        balance = transactions.reduce((total, transaction) => {
          const transactionDate = new Date(transaction.date);
          if (transactionDate >= startOfToday && transactionDate < endOfToday) {
            return total + transaction.amount;
          }
          return total;
        }, 0);
      } else if (period === 'month') {
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        balance = transactions.reduce((total, transaction) => {
          const transactionDate = new Date(transaction.date);
          if (transactionDate >= startOfMonth && transactionDate <= endOfMonth) {
            return total + transaction.amount;
          }
          return total;
        }, 0);
      } else if (period === 'year') {
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 1);
        const endOfYear = new Date(today.getFullYear(), 11, 31);
        balance = transactions.reduce((total, transaction) => {
          const transactionDate = new Date(transaction.date);
          if (transactionDate >= startOfYear && transactionDate <= endOfYear) {
            return total + transaction.amount;
          }
          return total;
        }, 0);
      }

      setTotalBalance(balance);
    };

    calculateTotalBalance();
  }, [period]);
  return (
    <div className=" my-1 text-center col rounded-5 bg-white" >
        <p className="fw-bold mt-5 my-1 pt-4">Total balance</p>
        <p className="ms-2 fs-1 fw-bold my-1">
        <sup>$</sup>
        {totalBualance}
        </p>
        <div className="status mx-auto my-4 mt-0"> 	
        <span> <i className="fa fa-level-up mt-1 fz20" ></i></span> 3,27%
        </div>
    </div>
  )
}

export default TotalBalance
