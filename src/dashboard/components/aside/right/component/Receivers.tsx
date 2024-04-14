import React from 'react'
import ReceiversHeader from './smallcomp/ReceiversHeader';
import ReciversUser from './smallcomp/ReciversUser';

const Receivers = () => {
    
  return (
    <div className="mt-3 row ms-1 d-none d-lg-flex ">
        <ReceiversHeader/>
        <ReciversUser/>
    </div>
  )
}

export default Receivers
