import React from 'react';
import '../../../../assets/styles/dashboard.scss';
import TotalBalnce from './component/TotalBalnce';
import AnalyticsWeek from './AnalyticsWeek/AnalyticsWeek';
import CardsImg from './component/CardsImg';
import Today from './Today/Today';


class Aside extends React.Component {
  render() {
    return (
      <div >
        <div className="row">
          <div className="col">
            <TotalBalnce/>
          </div>
          <div className="col-md-8">
            <CardsImg/>
          </div>
        </div>
        <AnalyticsWeek/>
        <Today/>
      </div>
    );
  }
}

export default Aside;
