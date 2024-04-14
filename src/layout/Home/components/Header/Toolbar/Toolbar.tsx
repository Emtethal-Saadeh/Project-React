import React from 'react'
import ToolbarHeader from './component/ToolbarHeader'
import Toolbarbody from './component/Toolbarbody'
import '../../../../../../assets/styles/dashboard.scss';
import Navbar from 'react-bootstrap/Navbar';

const Toolbar = () => {
  return (
    <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
           <ToolbarHeader/>
           <Toolbarbody/>
    </Navbar.Offcanvas>
  )
}

export default Toolbar
