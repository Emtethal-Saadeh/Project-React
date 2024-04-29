/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react'
import '../../../../assets/styles/dashboard.scss';
import { Container, Navbar } from 'react-bootstrap';
import ToolbarHeader from '../../../../layout/Home/components/Header/Toolbar/component/ToolbarHeader';
import Toolbarbody from '../../../../layout/Home/components/Header/Toolbar/component/Toolbarbody';
import { usePeriodStore } from '../../../../context/usePeriodStore';

const DashboardHeader = () => {
  // const setdashboardStore = dashboardStore((state) => state.setDateFilter);
  const { period, setPeriod } = usePeriodStore();

  // const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //  const selectedDate = e.target.value;
  //  setdashboardStore(selectedDate); 
  // }; 
  const handlePeriodChange = (e: { target: { value: any; }; }) => {
    const selectedPeriod = e.target.value;
    setPeriod(selectedPeriod);
  };
  return (
    <>
    <div className="row d-none d-sm-flex mt-0">
        <h1 className="text-start col fw-bold mt-0">Dashboard</h1>
        <p className="ml-0 text-body-secondary fs-6 pt-1  text-end col mt-5 ">Showing for :</p>
        {/* <div className='ms-0 mt-5 pt-1 ps-0 col'><input type="date" onChange={handleDateChange} className="col bg-transparent border-0 ms-0" /></div> */} 
        <select
          value={period}
          onChange={handlePeriodChange}
          className="ms-0 mt-4 pt-3 ps-0 col bg-transparent border-0"
        >
          <option value="today">Today</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
    </div>
    <Navbar  expand={false}>
    <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand" className="d-sm-none"/>
        <h1 className="text-start col fw-bold d-sm-none ms-5">Dashboard</h1>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand`}
          aria-labelledby={`offcanvasNavbarLabel-expand`}
          placement="start"
        >
          <ToolbarHeader/>
          <Toolbarbody/>
        </Navbar.Offcanvas>
      </Container>



</Navbar>
</>
  )
}

export default DashboardHeader
