import React from 'react'
import '../../../../../../assets/styles/dashboard.scss';
import ToolbarElem from './ToolbarElem';
import ToolbartImg from './ToolbartImg';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Toolbarbody = () => {
  return (
    <Offcanvas.Body>
        <ToolbarElem/>
        <ToolbartImg/>   
    </Offcanvas.Body>
       
  )
}

export default Toolbarbody
