import React, { useState, useEffect } from 'react';
import '../assets/styles/Table.scss'; 
import useData from '../context/useData';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import sideimag from '../assets/images/t2.png';
import type { Transaction } from '../context/Type'; 
import { Link } from 'react-router-dom';

interface Columns {
  heading: string;
  value: string;
}

const columns: Columns[] = [
  { heading: 'Name', value: 'name' },
  { heading: 'Category', value: 'category' },
  { heading: 'Date', value: 'date' },
  { heading: 'Amount', value: 'amount' },
];

const Transactions: React.FC = () => {
  const { loading, error, transactions } = useData();
  const [rowData, setRowData] = useState<Transaction[]>([]);
  const [rowColors, setRowColors] = useState<string[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (transactions) {
      const formattedData = transactions.map((transaction) => transaction);
      setRowData(formattedData);

      const colors = transactions.map((_, index) => index % 2 === 0 ? '' : 'color');
      setRowColors(colors);
    }
  }, [transactions]);

  if (loading) {
    return <div className='bg-white'>Loading...</div>;
  }

  if (error) {
    return <div className='bg-white'>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="transactions">
      <div>
        <h1><img className="img3" src={sideimag} alt="Avatar" />Transactions Table </h1>
        <Link to="/transaction/new" className="btn color m-2 btn1">Add New Transaction</Link>
      </div>
      <div className="app">
        <DataTable
          value={rowData}
          scrollable
          scrollHeight="400px"
          virtualScrollerOptions={{ itemSize: 46 }}
          tableStyle={{ minWidth: '40rem',  borderRadius: '20px' , background:'white'}}
          rowClassName={(data, index) => rowColors[data.id]} 
        >
          {columns.map((col, index) => (
            <Column headerClassName='back' key={index} field={col.value} header={col.heading} />
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default Transactions;
