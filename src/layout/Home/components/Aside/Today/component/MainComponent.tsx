import React from 'react'

const items = [
    { icon: 'fas fa-shopping-basket', bgColor: '#2c5fcc', title: 'Supermarket', time: '10:36', amount: '$86.00', marginTop: 'my-2' },
    { icon: 'fas fa-tshirt', bgColor: '#8946c4', title: 'H&M', time: '10:36', amount: '$33.00', marginTop: 'my-5 mt-2' }
];

const MainComponent = () => {
  return (
    <div className="m-0">
            {items.map((item, index) => (
                <div key={index} className={`row rounded-3 bg-white px-2 ${item.marginTop}`}>
                    <p className={`d-flex justify-content-center align-items-center rounded-3 col-2 my-2 col`} style={{ backgroundColor: item.bgColor }}>
                        <i className={`${item.icon} fs-1 text-white`}></i>
                    </p>
                    <div className="col-6 text-start mt-2 pt-2">
                        <p className="m-0 fw-bold fs-15">{item.title}</p>
                        <p className="mt-1 text-body-secondary fs-12">{item.time}</p>
                    </div>
                    <p className="col-3 fw-bold text-end mt-3 pt-2">{item.amount}</p>
                </div>
            ))}
    </div>
  )
}

export default MainComponent
