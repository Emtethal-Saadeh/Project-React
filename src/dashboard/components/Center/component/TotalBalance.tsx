/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */


import React, { useEffect, useState } from 'react';
import '../../../../assets/styles/dashboard.scss';
import { dashboardStore } from '../../../../context/useDateFilterStore';
import { transactionsAPI } from '../../../transactions-api';

const TotalBalance = () => {
  const [totalBalance, setTotalBalance] = useState(0);
  const { period } = dashboardStore();
  // eslint-disable-next-line new-cap
  const mytransactionapi = new transactionsAPI();

  useEffect(() => {
    const calculateTotalBalance = () => {
      const transactions = mytransactionapi.getAllTransactions();
      const { startDate, endDate } = getDateRange(period);
      const balance = filterTransactions(transactions, startDate, endDate);

      setTotalBalance(balance);
    };

    calculateTotalBalance();
  }, [period]);

  const getDateRange = (period: string) => {
    const today = new Date();
    let startDate, endDate;

    switch (period) {
      case 'today':
        startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        break;
      case 'month':
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case 'year':
        startDate = new Date(today.getFullYear(), 0, 1);
        endDate = new Date(today.getFullYear(), 11, 31);
        break;
      default:
        startDate = new Date();
        endDate = new Date();
    }

    return { startDate, endDate };
  };

  const filterTransactions = (
    transactions: any[],
    startDate: number | Date,
    endDate: number | Date
  ) => {
    return transactions.reduce(
      (total: any, transaction: { date: string | number | Date; amount: any }) => {
        const transactionDate = new Date(transaction.date);
        if (transactionDate >= startDate && transactionDate <= endDate) {
          return total + transaction.amount;
        }
        return total;
      },
      0
    );
  };

  return (
    <div className="mt-1 text-center col rounded-4 bg-white">
      <p className="fw-bold mt-5 my-1 pt-4">Total balance</p>
      <p className="ms-2 fs-1 fw-bold my-1">
        <sup>$</sup>
        {totalBalance}
      </p>
      <div className="status mx-auto my-4 mt-0">
        <span>
          {' '}
          <i className="fa fa-level-up mt-1 fz20"></i>
        </span>{' '}
        3,27%
      </div>
    </div>
  );
};

export default TotalBalance;
