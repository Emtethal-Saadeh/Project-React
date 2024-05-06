/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState, useEffect } from 'react';
import '../assets/styles/Table.scss';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import sideimag from '../assets/images/t2.png';
import { Link, useNavigate } from 'react-router-dom';
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
  { heading: 'Amount', value: 'amount' }
];

const Transactions: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  // eslint-disable-next-line new-cap
  const mytransactionapi = new transactionsAPI();

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

  const removeTransaction = (id: number) => {
    mytransactionapi.removeTransaction(id);
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
    toast.success('Removed successfully.');
  };
  const editTransaction = (id: number) => {
    console.log(id);
    navigate(`/transactions/${id}`);
  };

  if (loading) {
    return <div className="bg-white">Loading...</div>;
  }

  if (error.length > 0) {
    return <div className="bg-white">Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="p-2 pt-3">
      <header className="mb-3 d-flex justify-content-between align-items-center ">
        <div className="fs-1 fw-bold">Transactions</div>

        <Link to="/transaction/new">
          <div className="btn btn-primary">Add Transaction</div>
        </Link>
      </header>

      <div className="panel w-100">
        <DataTable
          value={transactions}
          scrollable
          tableClassName="table table-hover rounded-3"
          scrollHeight="400px"
          virtualScrollerOptions={{ itemSize: 46 }}
          rowClassName={(data, index) => 'border-bottom'}>
          {columns.map((col, index) => (
            <Column headerClassName="" key={index} field={col.value} header={col.heading} />
          ))}

          <Column
            headerClassName="back"
            body={(rowData) => (
              <div>
                <button
                  className="btn btn-icon me-1 "
                  onClick={() => {
                    editTransaction(rowData.id);
                  }}>
                  <i className="fa fa-pencil  text-warning"></i>
                </button>
                <button
                  className="btn btn-icon me-1"
                  onClick={() => {
                    removeTransaction(rowData.id);
                  }}>
                  <i className="fa fa-trash  text-danger"></i>
                </button>
              </div>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default Transactions;
