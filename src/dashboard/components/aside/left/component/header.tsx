import React from 'react';
import '../../../../../assets/styles/dashboard.scss';
import { useAppStore } from '../../../../../context/app-store';

const Header = () => {
  const { username } = useAppStore();

  return (
    <div className="text-center py-2">
      <img
        className="left-aside-logo left-aside-logo-sm rounded-circle"
        src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Abdullah"
        alt="Avatar"
      />
      <h4 className="ms-2 mt-1 text-center fw-bold d-none d-md-inline-flex text-capitalize ">
        {username}
      </h4>
    </div>
  );
};

export default Header;
