import React from 'react'
import '../../../../../../assets/styles/dashboard.scss';

const ReciversUser = () => {
    const imgname = ['hala', 'hend', 'saja', 'masa'];
  return (
    <div className="row ">
        <p className="col m-0 mt-1 d-flex justify-content-center align-items-center p-0 " ><i className="fa fa-plus  rounded-circle p-3 text-black border-pro fz10" ></i></p>
            {imgname.map((seed, index) => (
                <p key={index} className="col m-0 d-flex justify-content-center align-items-center p-0">
                <img key={index} className="profs-img rounded-circle text-end" src={`https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=${seed}`} alt="Avatar"/>
                </p>
        ))}
    </div>
  )
}

export default ReciversUser
