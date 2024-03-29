import React from 'react'
import '../../../../../../assets/styles/dashboard.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';

const ToolbarHeader = () => {
  return (
    <Offcanvas.Header closeButton>
        <img className="log-market rounded-circle" src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Abdullah" alt="Avatar"/>
    <Offcanvas.Title id={`offcanvasNavbarLabel-expand`} className="ms-2 mt-1 text-center fw-bold">
    Finarium
    </Offcanvas.Title>
  </Offcanvas.Header>
  )
}

export default ToolbarHeader
