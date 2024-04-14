import React from 'react'
import Header from './component/header'
import Cards from './component/Cards'
import Receivers from './component/Receivers'
import RecentActivity from './component/RecentActivity'
import '../../../../assets/styles/dashboard.scss';
import { Col } from 'react-bootstrap'

const RigthAside = () => {
  return (
    <Col className=" d-none d-md-flex w-280 mt-0 ms-4 bg-white vh-100 rounded-5 rounded-start">
      <div className=" container text-center bg-white rounded-5 rounded-start ">
        <Header/>
        <Cards/>
        <Receivers/>
        <RecentActivity/>
      </div>
    </Col>

  )
}

export default RigthAside
