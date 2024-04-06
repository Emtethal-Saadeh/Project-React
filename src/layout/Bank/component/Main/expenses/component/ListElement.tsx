import React from 'react'

const element = [
    {
        backgroundColor: '#2c5fcc',
        iconClass: 'fas fa-shopping-basket',
        title: 'Groceries',
        amount: '$86.00'
    },
    {
        backgroundColor: '#3d3ca8',
        iconClass: 'fas fa-concierge-bell',
        title: 'Restaurants',
        amount: '$18.80'
    },
    {
        backgroundColor: '#8946c4',
        iconClass: 'fas fa-tshirt',
        title: 'Fashion',
        amount: '$23.20'
    }
];
const ListElement = () => {
    return (
        <div className="row my-3 mt-4">
            {element.map((elem, index) => (
                <div key={index} className="col rounded-5 mx-2" style={{ backgroundColor: elem.backgroundColor }}>
                    <p className="text-start my-5 rounded-5 row mt-4"><i className={`text-white ${elem.iconClass} fs-1`}></i></p>
                    <p className="row ps-3 my-0 text-white fs-15 text-start">{elem.title}</p>
                    <p className="mt-1 my-0 ps-3 row text-white text-start fw-bold fs-7 p-2">{elem.amount}</p>
                </div>
            ))}
        </div>
    );
}

export default ListElement
