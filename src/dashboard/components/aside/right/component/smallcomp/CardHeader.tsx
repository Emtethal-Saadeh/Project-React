import React from 'react'

const CardHeader = () => {
  return (
    <div className="my-1 row">
        <p className="ms-1 col fw-bold text-start">Your cards</p>
        <p className="col text-end"><i className="fa text-body-secondary fa-square-plus mt-1 fz20" ></i></p>
    </div>
  )
}

export default CardHeader
