import React from 'react'
import Header from './component/header'
import Cards from './component/Cards'
import Receivers from './component/Receivers'
import RecentActivity from './component/RecentActivity'
import '../../../../assets/styles/dashboard.scss';

const RigthAside = () => {
  return (
    <article className=" d-none d-sm-flex w-280 mt-0 ms-4 bg-white vh-100 rounded-5 rounded-start">
      <div className=" container text-center bg-white rounded-5 rounded-start ">
        <Header/>
        <Cards/>
        <Receivers/>
        <RecentActivity/>
      </div>
    </article>

  )
}

export default RigthAside
