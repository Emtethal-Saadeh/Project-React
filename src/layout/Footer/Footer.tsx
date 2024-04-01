import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../assets/styles/dashboard.scss';

const buttons = [
    { icon: 'fas fa-home', text: 'Home', action: '/' },
    { icon: 'far fa-address-card', text: 'Address', action: '/address' },
    { icon: 'fas fa-piggy-bank', text: 'Page 2', action: '/bank' },
    { icon: 'fas fa-heartbeat', text: 'Heartbeat', action: '/heartbeat' }
];

const Footer = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const getButtonClass = (action: string) => {
        return pathname === action ? 'text-body' : 'text-body-secondary';
    };

    const handleClick = (action: string) => {
        navigate(action); 
    };

    return (
        <Navbar className="bg-white d-sm-none fixed-bottom">
            <Container fluid>
                {buttons.map((button, index) => (
                    <form key={index} onSubmit={(e) => { e.preventDefault(); handleClick(button.action) }}>
                        <button type="submit" className="btn fs-3">
                            <span className={`${button.icon} ${getButtonClass(button.action)}`}></span>
                        </button>
                    </form>
                ))}
            </Container>
        </Navbar>
    );
};

export default Footer;
