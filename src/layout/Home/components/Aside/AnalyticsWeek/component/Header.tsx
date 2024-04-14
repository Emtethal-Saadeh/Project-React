import React from 'react'
import { Row ,Col } from 'react-bootstrap'

const Header = () => {
  return (

    <Row className="m-2 mb-0 ">
        <Col className="ms-1 text-start  black-text fs-6">This week<i className="fas fa-angle-down ms-1 fz10"></i></Col>
        <Col className=" fz14"  ><i className="fa fa-minus me-1 text-primary fz8" ></i> Income  <i className="fa fa-minus ms-2 me-1 text-danger fz8"></i> Expenses</Col>
    </Row>

  )
}

export default Header
