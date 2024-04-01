import React from 'react'
import '../../../../assets/styles/dashboard.scss';
import TotalBalnce from './component/TotalBalnce';
import AnalyticsWeek from './AnalyticsWeek/AnalyticsWeek';
import CardsImg from './component/CardsImg';
import Today from './Today/Today';
import { Row ,Col } from 'react-bootstrap';

const Aside = () => {
  return (
    <div >

      <Row>
        <Col>
        <TotalBalnce/>
        </Col>
        <Col md={8}>
        <CardsImg/>
        </Col>
      </Row>
      <AnalyticsWeek/>
      <Today/>
       
       

      
    </div>
  )
}

export default Aside
