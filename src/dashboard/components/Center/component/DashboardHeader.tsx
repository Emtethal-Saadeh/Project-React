/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */

import React from 'react';
import '../../../../assets/styles/dashboard.scss';
import { Container, Navbar } from 'react-bootstrap';
import ToolbarHeader from '../../../../layout/Home/components/Header/Toolbar/component/ToolbarHeader';
import Toolbarbody from '../../../../layout/Home/components/Header/Toolbar/component/Toolbarbody';
import { dashboardStore } from '../../../../context/useDateFilterStore';
import { Dropdown } from 'primereact/dropdown';

const DashboardHeader = () => {
  const { period, setPeriod } = dashboardStore();

  const handlePeriodChange = (e: { target: { value: any } }) => {
    const selectedPeriod = e.target.value;
    setPeriod(selectedPeriod);
  };
  return (
    <>
      <div className="d-none d-sm-flex mt-0 justify-content-between ">
        <div className="fs-1 text-start  fw-bold mt-0">Dashboard</div>

        <div className="d-flex align-items-center ">
          <div className=" text-body-secondary fs-6  text-end me-1 ">Showing for :</div>

          <Dropdown
            className=""
            options={['today', 'month', 'year']}
            onChange={handlePeriodChange}
            value={period}
          />
        </div>
      </div>

      <Navbar expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" className="d-sm-none" />
          <h1 className="text-start col fw-bold d-sm-none ms-5">Dashboard</h1>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="start">
            <ToolbarHeader />
            <Toolbarbody />
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default DashboardHeader;
