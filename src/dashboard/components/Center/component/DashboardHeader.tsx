import React from 'react'
import '../../../../assets/styles/dashboard.scss';
import { Container, Navbar } from 'react-bootstrap';
import ToolbarHeader from '../../../../layout/Home/components/Header/Toolbar/component/ToolbarHeader';
import Toolbarbody from '../../../../layout/Home/components/Header/Toolbar/component/Toolbarbody';

const DashboardHeader = () => {
  return (
    <>
    <div className="row pt-2 d-none d-sm-flex">
        <h1 className="text-start col fw-bold">Dashboard</h1>
        <p className="ml-auto text-body-secondary fs-6 mt-4 text-end col">Showing for: <span className="black-text">21 Oct-28 Oct 2020  ▼</span></p>
    </div>
    <Navbar  expand={false}>
    <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand" className="d-sm-none"/>
        <h1 className="text-start col fw-bold d-sm-none ms-5">Dashboard</h1>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="start"
        >
          <ToolbarHeader/>
          <Toolbarbody/>
        </Navbar.Offcanvas>
      </Container>



</Navbar>
</>
  )
}

export default DashboardHeader
