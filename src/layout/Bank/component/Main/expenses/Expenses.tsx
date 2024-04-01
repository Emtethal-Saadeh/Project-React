import React from 'react'
import HeaderExp from './component/HeaderExp'
import Day from './component/Day'
import ListElem from './component/ListElem'

const Expenses = () => {
  return (
    <div className="ps-3 my-1 py-5 pt-2 bg-white rounded-5  row ">
               <HeaderExp/>
               
               <Day/>

               <ListElem/>
    </div>
  )
}

export default Expenses
