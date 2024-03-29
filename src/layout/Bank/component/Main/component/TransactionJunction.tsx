import React from 'react'
import { Row } from 'react-bootstrap'

const data = [
    { icon: 'fas fa-wallet', amount: '$30', label: 'Left Today', backgroundColor: '#dfdeee' },
    { icon: 'fas fa-money-bill-wave', amount: '$128', label: 'Spent Today', backgroundColor: '#dfdeee' }
];


const TransactionJunction = () => {
  return (
    <Row className="ms-4">
            {data.map((item, index) => (
                <div className="col" key={index}>
                    <div className="row">
                        <p className="col-3 mt-3 me-3">
                            <i className={`${item.icon} fs-3 p-3 rounded-4`} style={{ backgroundColor: item.backgroundColor }}></i>
                        </p>
                        <div className="col-6 ms-1 text-start p-2 mt-2 pt-2">
                            <p className="m-0 mt-2 fw-bold fs-15">{item.amount}</p>
                            <p className="mt-0 text-body-secondary fs-12">{item.label}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Row>
  )
}

export default TransactionJunction
