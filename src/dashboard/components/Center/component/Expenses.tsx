import React from 'react'
import St1 from '../../../../assets/images/static1.png';
import '../../../../assets/styles/dashboard.scss';

const Expenses = () => {
  return (
    <div className="ms-4 my-1 text-center col rounded-5 bg-white " >
        <div className="m-2 row"> 
            <p className="m-2 text-start col fs-5 fw-bold">Expenses</p>
            <p className=" m-2 text-body-secondary col text-end" ><i className="fa fa-ellipsis-h mt-1 fz20" ></i></p>
        </div>
        <div className="my-3 row d-flex justify-content-center">
            <img className="static-1" src={St1} alt="Avatar"/>
        </div>
                        
    </div>
  )
}

export default Expenses
