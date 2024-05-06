import React from 'react';
import RigthAside from './components/aside/right/RigthAside';
import Center from './components/Center/Center';
import '../assets/styles/dashboard.scss';
import { Row } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Row className="d-flex flex-row">
      <Center />
      <RigthAside />
    </Row>
  );
};

export default Dashboard;
