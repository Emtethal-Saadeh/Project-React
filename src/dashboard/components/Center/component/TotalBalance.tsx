import React from 'react'
import '../../../../assets/styles/dashboard.scss';

const TotalBalance = () => {
  return (
    <div className=" my-1 text-center col rounded-5 bg-white" >
        <p className="fw-bold mt-5 my-1 pt-4">Total balance</p>
        <p className="ms-2 fs-1 fw-bold my-1"><sup>$</sup>12,319</p>
        <div className="status mx-auto my-4 mt-0"> 	
        <span> <i className="fa fa-level-up mt-1 fz20" ></i></span> 3,27%
        </div>
    </div>
  )
}

export default TotalBalance
