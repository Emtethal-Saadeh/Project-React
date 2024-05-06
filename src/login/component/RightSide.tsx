import React, { useState } from 'react'
import { Button , Form , Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import sideimag from '../../assets/images/bb.png';
import '../../assets/styles/Login.scss'
import { useAppStore } from '../../context/app-store';

const RightSide = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const { setusername } = useAppStore();

    const handleClick = () => {
        if (email.trim() === '') {
            setError('error');
        } else {
            setError('');
            const username = email.split('@')[0]; 
            setusername(username);
            navigate('/');
        }
    };
  return (
    <div className='form-container'>
        <Form onSubmit={(e) => { e.preventDefault(); handleClick() }}>
            <h1 className='m-4 '>Log in  <img className="img2" src={sideimag} alt="Avatar" /> </h1>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); }}/>
                <p className="text-danger m-0 p-0">{error}</p>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Button type="submit">Sign in</Button>
            </Form.Group>
        </Form>
    </div>
  )
}

export default RightSide
