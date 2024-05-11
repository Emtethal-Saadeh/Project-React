/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
import React from 'react'
import '../assets/styles/Login.scss'
import LeftSide from './component/LeftSide';
import RightSide from './component/RightSide';

const Login = () => {
    
    
  return (
    <div className='main vh-100'>
        <div className='card p-4'>
            <RightSide/>
            <LeftSide/>
        </div>
    </div>
  )
}

export default Login
