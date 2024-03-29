import React from 'react'
import Header from './components/Header/Header'
import '../../assets/styles/dashboard.scss';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';

const MasterLayout = () => {
  return (
    <div className="vh-100 d-sm-none bgph">
      <Header/>
      <Aside/>
      <Footer/>
    </div>
  )
}

export default MasterLayout
