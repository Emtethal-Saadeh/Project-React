import React from 'react'

const HeaderExp = () => {
  return (
    <div className="pt-2 row">
        <p className="text-start col fs-5">Expenses</p>
        <p className="col text-end me-3" style={{ color: '#5f45be' }}>
            View all <i className="fas fa-angle-right me-2 ps-1" style={{ fontSize: '10px', color: '#5f45be' }}></i>
        </p>    
    </div>
  )
}

export default HeaderExp
