import React from 'react'
import '../../../../assets/styles/dashboard.scss';

const DashHeader = () => {
  return (
    <div className="row pt-2">
        <h1 className="text-start col fw-bold">Dashboard</h1>
        <p className="ml-auto text-body-secondary fs-6 mt-4 text-end col">Showing for: <span className="black-text">21 Oct-28 Oct 2020  ▼</span></p>
    </div>
  )
}

export default DashHeader
