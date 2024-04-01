import React from 'react'
import '../../../../assets/styles/dashboard.scss';
import Logo from './Logo/Logo';
import ToolbarHeader from './Toolbar/component/ToolbarHeader';
import Toolbarbody from './Toolbar/component/Toolbarbody';
import { Navbar, Container } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar  expand={false}>
        <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand" className="d-sm-none"/>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Logo />

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
  )
}

export default Header
