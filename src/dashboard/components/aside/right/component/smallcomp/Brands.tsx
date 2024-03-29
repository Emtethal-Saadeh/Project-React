import React from 'react'
import '../../../../../../assets/styles/dashboard.scss';

const Brands = () => {
    const brands = [
        {
          icon: 'fab fa-lyft text-pink',
          name: 'Lyft',
          date: '28 oct 2020',
          amount: '$12.45'
        },
        {
          icon: 'fa fa-check text-orange',
          name: 'Nike store',
          date: '28 oct 2020',
          amount: '$74.99'
        },
        {
          icon: 'fab fa-google text-primary',
          name: 'Google',
          date: '28 oct 2020',
          amount: '$5.99'
        },
        {
          icon: 'fab fa-lyft text-pink',
          name: 'Lyft',
          date: '28 oct 2020',
          amount: '$4.50'
        }
      ];
  return (
    <div>
      {brands.map((brand, index) => (
        <div key={index} className="row">
          <p className="col col-3 border border-1 rounded-5 d-flex justify-content-center align-items-center">
            <i className={brand.icon + " fz20"}></i>
          </p>
          <div className="col-6 text-start">
            <p className="m-0 fw-bold fs-15">{brand.name}</p>
            <p className="mt-1 text-body-secondary fs-12">{brand.date}</p>
          </div>
          <p className="col-3 fw-bold text-end mt-2">{brand.amount}</p>
        </div>
      ))}
    </div>
  )
}

export default Brands
