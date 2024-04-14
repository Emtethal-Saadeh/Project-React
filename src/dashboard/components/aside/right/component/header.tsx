import React from 'react'
import '../../../../../assets/styles/dashboard.scss';

const Header = () => {
  return (
    <div className="row mx-1">
        <p className="col text-start pt-4" ><i className="fa fa-bell me-2 border border-1 rounded-circle p-2 fz20" ></i></p>
        <p className="col text-end" ><img className="prof-img border border-1 rounded-circle text-end  mt-3" src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Abdullah" alt="Avatar" /></p>
    </div>
  )
}

export default Header
