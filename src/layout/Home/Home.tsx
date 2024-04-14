import React from 'react'
import Header from './components/Header/Header'
import '../../assets/styles/dashboard.scss';
import Aside from './components/Aside/Aside';

const Home = () => {
  return (
    <div className="vh-100 bgph">
      <Header/>
      <Aside/>
    </div>
  )
}

export default Home
