import React from 'react'
import '../../../../../assets/styles/dashboard.scss';
import cards from '../../../../../assets/images/cards.png';

const CardsImg = () => {
  return (
    <div>
        <img className="d-block CardsImg" src={cards} alt="Avatar"/>
    </div>
  )
}

export default CardsImg
