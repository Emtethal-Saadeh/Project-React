import React from 'react'
import { Navbar } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
      navigate('/'); 
    };

    return (
        <Navbar className="navbar ">
            <div className="container-fluid">
                <form onSubmit={handleBackButtonClick}>
                    <button type="submit" className="btn">
                        <span className="fas fa-angle-left" style={{ fontSize: '20px' }}></span>
                    </button>
                </form>
                <h4 className="ms-2 mt-1 col offcanvas-title text-center" id="offcanvaLabel">Monthly Budget</h4>
                <button className="btn me-1 px-3 py-0 btn-bank" >Edit</button>
            </div>
        </Navbar>
  )
}

export default Header
