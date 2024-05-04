/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState, useEffect } from 'react';
import '../assets/styles/Table.scss'; 
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import sideimag from '../assets/images/t2.png';
import { Link , useNavigate } from 'react-router-dom';
import { transactionsAPI } from '../dashboard/transactions-api'; 
import { type Transaction } from '../context/type'; 
import { toast } from 'react-toastify';

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
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  // eslint-disable-next-line new-cap
  const mytransactionapi=new transactionsAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = mytransactionapi.getAllTransactions(); 
        setTransactions(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    void fetchData(); 
  }, [transactions]);

  const handleRemoveTransaction = (id: number) => {
    mytransactionapi.removeTransaction(id); 
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    toast.success('Removed successfully.');
  };
  const handleEditTransaction = (id: number) => {
    console.log(id);
    navigate(`/transactions/${id}`); 
  };
  

  if (loading) {
    return <div className='bg-white'>Loading...</div>;
  }

  if (error.length > 0) {
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
          value={transactions}
          scrollable
          scrollHeight="400px"
          virtualScrollerOptions={{ itemSize: 46 }}
          tableStyle={{ minWidth: '40rem', borderRadius: '20px' , background:'white'}}
          rowClassName={(data, index) => 'br-b'} 
        >
          {columns.map((col, index) => (
            <Column headerClassName='back' key={index} field={col.value} header={col.heading} />
          ))}
          <Column
            headerClassName='back'
            body={(rowData) => (
              <div>
                <button className="btn btn-white mr-1" onClick={() => { handleEditTransaction(rowData.id); }}><i className=" mt-1 fz20 fa fa-pencil text-blue"></i></button>
                <button className="btn btn-white" onClick={() => { handleRemoveTransaction(rowData.id); }}><i className=" mt-1 fz20 fa fa-trash text-danger"></i></button>
              </div>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default Transactions;
