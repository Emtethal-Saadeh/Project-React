/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React from 'react';
import '../../../../../../assets/styles/dashboard.scss';
import { getMostRecentTransactions, getTopTransactionsByAmount } from '../../../../../../categories/category-api';

interface BrandsProps {
  isRecentTransactions: boolean;
}

const Brands: React.FC<BrandsProps> = ({ isRecentTransactions }) => {
  const fetchTransactions = () => {
    if (isRecentTransactions) {
      return getMostRecentTransactions(5);
    } else {
      return getTopTransactionsByAmount(5);
    }
  };

  const transactions = fetchTransactions();

  return (
    <div>
      {transactions.map((transaction, index) => (
        <div key={index} className="row">
          <div className="col-6 text-start">
            <p className="m-0 fw-bold fs-15">{transaction.name}</p>
            <p className="mt-1 text-body-secondary fs-12">{transaction.date}</p>
          </div>
          <p className="col-3 fw-bold text-end mt-2">{transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Brands;
