import React from 'react'
import HeaderExpenses from './component/HeaderExpenses'
import Day from './component/Day'
import ListElement from './component/ListElement'

const Expenses = () => {
  return (
    <div className="ps-3 my-1 py-5 pt-2 bg-white rounded-5  row ">
               <HeaderExpenses/>
               
               <Day/>

               <ListElement/>
    </div>
  )
}

export default Expenses
