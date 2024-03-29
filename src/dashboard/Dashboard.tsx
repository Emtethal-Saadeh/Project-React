import React from 'react';
import LeftAside  from './components/aside/left/LeftAside ';
import RigthAside from './components/aside/right/RigthAside';
import Center from './components/Center/Center';
import '../assets/styles/dashboard.scss';

const Dashboard = () => {
  return (
    <div className="d-flex flex-row bgc ">
      <LeftAside/>
      <Center/>
      <RigthAside/>
    </div>
  );
};

export default Dashboard;
