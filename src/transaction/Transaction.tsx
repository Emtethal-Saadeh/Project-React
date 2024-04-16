import React, { useState } from 'react';
import '../assets/styles/Table.scss';
import useData from '../context/useData';



interface Column {
  heading: string;
  value: string;
}

const columns: Column[] = [
  { heading: 'Name', value: 'name' },
  { heading: 'Category', value: 'category' },
  { heading: 'Date', value: 'date' },
  { heading: 'Amount', value: 'amount' },
];

const Transactions: React.FC = () => {
 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const { loading, error, transactions } = useData();

  if (loading) {
    return <div className='bg-white'>Loading...</div>;
  }

  if (error) {
    return <div className='bg-white'>Error fetching data. Please try again later.</div>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => { setCurrentPage(pageNumber); };

  return (
    <div className="Transactions">
      
      <div>
      <h1>Transactions Table</h1> 
      
          {Array.from({ length: Math.ceil(transactions.length / itemsPerPage) }, (_, i) => (
            <button key={i} onClick={() => { paginate(i + 1); }}>{i + 1}</button>
          ))}
      </div>
      <div className="App">
        <table>
          <thead>
            <tr>
              {columns.map((val, key) => (
                <th key={key}>{val.heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((val, key) => (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.category}</td>
                <td>{val.date}</td>
                <td>{val.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
