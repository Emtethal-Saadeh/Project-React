import React from 'react';
import '../../../../../assets/styles/dashboard.scss';
import Brands from './smallcomp/Brands';
import RecentHeader from './smallcomp/RecentHeader';

const RecentActivity = () => {
    
  return (
    <div className="mt-3 row ms-1">
        <RecentHeader/>
        <Brands/>
    </div>
  )
}

export default RecentActivity
