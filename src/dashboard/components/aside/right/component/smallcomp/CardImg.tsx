import React from 'react'
import cards from '../../../../../../assets/images/sideright.png';
import '../../../../../../assets/styles/dashboard.scss';
const CardImg = () => {
  return (
      <div className=" row">
            <img className="m-0 img-card" src={cards} alt="Avatar"/>
        </div>

  )
}

export default CardImg
