/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

// RecentHeader.tsx
import React from 'react';

interface RecentHeaderProps {
  toggleTransactionsView: () => void;
  isRecentTransactions: boolean;
}

const RecentHeader: React.FC<RecentHeaderProps> = ({ toggleTransactionsView, isRecentTransactions }) => {
  return (
    <div className="my-1 row">
      <p className="ms-1 col fw-bold text-start">{isRecentTransactions ? 'Recent Transactions' : 'Top Transactions'}</p>
      <button className="btn btn-primary m-1" onClick={toggleTransactionsView}>
        {isRecentTransactions ? 'View Top Transactions' : 'View Recent Transactions'}
      </button>
    </div>
  );
};

export default RecentHeader;

