import React from 'react'
import '../../assets/styles/Login.scss'

import sideimag2 from '../../assets/images/333.png';


const LeftSide = () => {
  return (
    <div className="toggle-container">
        <div className="toggle">
            <div className="toggle-panel toggle-right">
            <img className="imgwallet" src={sideimag2} alt="Avatar" />
            </div>
        </div>
    </div>
  )
}

export default LeftSide
