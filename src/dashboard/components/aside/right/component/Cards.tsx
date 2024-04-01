import React from 'react'
import CardImg from './smallcomp/CardImg'
import CardHeader from './smallcomp/CardHeader'

const Cards = () => {
  return (
    <div className="mt-3 row ms-1 d-none d-lg-flex">
        <CardHeader/>
        <CardImg/>
    </div>
  )
}

export default Cards
