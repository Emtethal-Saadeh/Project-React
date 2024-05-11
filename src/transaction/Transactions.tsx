/* eslint-disable prettier/prettier */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link, useNavigate } from 'react-router-dom';
import { transactionsAPI } from '../dashboard/transactions-api';
import { type Transaction } from '../context/type';
import { toast } from 'react-toastify';
import Authenticate from '../Authenticate/Authenticate';
import { useAppStore } from '../context/app-store';
import { type Category, getAllCategories } from '../categories/category-api';


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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [globalFilter, setGlobalFilter] = useState<string | null>(null);
  const mytransactionapi = new transactionsAPI();
  const { role } = useAppStore();
  const dt = useRef<any>(null);

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
  }, []);

  const removeTransaction = (id: number) => {
    mytransactionapi.removeTransaction(id);
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
    toast.success('Removed successfully.');
  };

  const editTransaction = (id: number) => {
    navigate(`/transactions/${id}`);
  };

  const onCategoryChange = (e: { value: any }) => {
    setSelectedCategory(e.value);
  };

  const filteredTransactions = (selectedCategory != null)
    ? transactions.filter((transaction) => transaction.category === selectedCategory)
    : transactions;

  const allCategories: Category[] = getAllCategories();

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value);
  };

  const header = (
<div className="table-header d-flex justify-content-around align-items-center">
  <div className="p-input-icon-left">
    <i className="pi pi-search" />
    <input type="search" onChange={onGlobalFilterChange} placeholder="Search" />
  </div>
  <div className="mx-3">OR</div>
  <Dropdown
    value={selectedCategory}
    options={[
      { label: 'All Categories', value: null },
      ...allCategories.map(category => ({ label: category.name, value: category.name }))
    ]}
    onChange={onCategoryChange}
    placeholder="Select a Category"
  />
</div>




  );

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
          ref={dt}
          value={filteredTransactions}
          scrollable
          tableClassName="table table-hover rounded-3"
          scrollHeight="400px"
          virtualScrollerOptions={{ itemSize: 46 }}
          rowClassName={(data, index) => 'border-bottom'}
          header={header}
          globalFilter={globalFilter}
        >
          {columns.map((col, index) => (
            <Column key={index} field={col.value} header={col.heading} />
          ))}

          <Column
            body={(rowData) => (
              <Authenticate>
                <div>
                  <button
                    className="btn btn-icon me-1 "
                    onClick={() => {
                      editTransaction(rowData.id);
                    }}
                  >
                    <i className="fa fa-pencil text-warning"></i>
                  </button>
                  <button
                    className="btn btn-icon me-1"
                    onClick={() => {
                      removeTransaction(rowData.id);
                    }}
                  >
                    <i className="fa fa-trash text-danger"></i>
                  </button>
                </div>
              </Authenticate>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default Transactions;
