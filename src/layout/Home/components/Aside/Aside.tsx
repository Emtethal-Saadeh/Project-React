import React from 'react'
import '../../../../assets/styles/dashboard.scss';
import TotalBalnce from './component/TotalBalnce';
import AnalyticsWeek from './AnalyticsWeek/AnalyticsWeek';
import CardsImg from './component/CardsImg';
import Today from './Today/Today';

const Aside = () => {
  return (
    <div>

      <TotalBalnce/>
      <CardsImg/>
      <AnalyticsWeek/>
      <Today/>
       
       

      
    </div>
  )
}

export default Aside
