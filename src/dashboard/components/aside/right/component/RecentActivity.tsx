/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React, { useState } from 'react';
import '../../../../../assets/styles/dashboard.scss';
import Brands from './smallcomp/Brands';
import RecentHeader from './smallcomp/RecentHeader';

const RecentActivity = () => {
  const [isRecentTransactions, setIsRecentTransactions] = useState(true); 

  const toggleTransactionsView = () => {
    setIsRecentTransactions(!isRecentTransactions); 
  };

  return (
    <div className="mt-3 row ms-1">
      <RecentHeader toggleTransactionsView={toggleTransactionsView} isRecentTransactions={isRecentTransactions} />
      <Brands isRecentTransactions={isRecentTransactions} />
    </div>
  );
};

export default RecentActivity;
