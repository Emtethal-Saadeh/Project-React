import React from 'react';
import Header from './component/header';
import InteractiveElements from './component/InteractiveElements';
import AsideImg from './component/AsideImg';



const LeftAside = () => {
  return (
    <div className="float-start me-4 m-2 flex-column rounded-5 bg-white d-none d-sm-flex">
      <Header />
      <InteractiveElements/>
      <AsideImg/>
    </div>
  );
};

export default LeftAside;
