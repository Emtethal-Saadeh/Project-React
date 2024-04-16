import React, { useContext } from 'react';
import '../../../../../assets/styles/dashboard.scss';
import { useNameStore } from '../../../../../context/userNameStore';


const Header = () => {
  const { username } = useContext(useNameStore);
  return (
    <div className="left-aside-header">
      <img
        className="left-aside-logo left-aside-logo-sm rounded-circle"
        src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Abdullah"
        alt="Avatar"
      />
      <h4 className="ms-2 mt-1 text-center fw-bold d-none d-md-inline-flex">
        {username}
      </h4>
    </div>
  );
};

export default Header;
