import React from 'react'
import DashHeader from './component/DashHeader'
import FinancialTools from './component/FinancialTools'
import FinancialOverview from './component/FinancialOverview'
import Transactions from './component/Transactions'
import '../../../assets/styles/dashboard.scss';
import { Col } from 'react-bootstrap'

const Center = () => {
  return (
    <Col className="flex-grow-1 " md={6}>
        <article className=" d-flex vh-100  d-sm-flex">
            <article className="container text-center">
                <DashHeader/>
                <FinancialTools/>
                <FinancialOverview/>
                <Transactions/>
            </article>
        </article>
    </Col>
  )
}

export default Center
