import React from 'react'

import '../../../../assets/styles/dashboard.scss';
import Donut from '../../../../charts/Donut';

const Expenses = () => {
  return (
    <div className="ms-4 mt-1 text-center col rounded-5 bg-white " >
        <div className=" row"> 
            <p className="m-2 text-start col fs-5 fw-bold">Expenses</p>
            <p className=" m-2 text-body-secondary col text-end" ><i className="fa fa-ellipsis-h mt-1 fz20" ></i></p>
        </div>
        <div className=" row d-flex justify-content-center">
            <Donut/>
        </div>
                        
    </div>
  )
}

export default Expenses
