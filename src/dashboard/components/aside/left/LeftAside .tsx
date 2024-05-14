/* eslint-disable prettier/prettier */
import React from 'react';
import Header from './component/header';
import InteractiveElements from './component/InteractiveElements';
import AsideImg from './component/AsideImg';

const LeftAside = () => {
  return (
    <div className="p-1 pe-3">
      <div className="flex-column rounded-4 h-100 bg-white d-none d-sm-flex">
        <Header />

        <div className="flex-grow-1">
          <InteractiveElements />
        </div>

        <AsideImg />
      </div>
    </div>
  );
};

export default LeftAside;
