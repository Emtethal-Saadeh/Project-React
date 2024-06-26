/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../assets/styles/Table.scss';
import sideimag from '../assets/images/gg.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Calendar } from 'primereact/calendar';
import 'react-toastify/dist/ReactToastify.css';
import { type Transaction } from '../context/type';
import { transactionsAPI } from '../dashboard/transactions-api';
import 'primereact/resources/primereact.min.css';
import { type Category, getAllCategories } from '../categories/category-api';

interface TransactionFormProps {
  onSaveButtonClicked: (updatedTransaction: Transaction) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSaveButtonClicked }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    category: Yup.string().required('Category is required'),
    amount: Yup.number()
      .required('Amount is required')
      .typeError('Amount must be a number')
      .positive('Amount must be positive'),
    date: Yup.date().required('Date is required')
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  // eslint-disable-next-line new-cap
  const mytransactionapi = new transactionsAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id != null) {
          const transactionId = parseInt(id);
          const data = mytransactionapi.getTransaction(transactionId);
          setTransaction(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    void fetchData();
  }, [id]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryList = getAllCategories();
        setCategories(categoryList);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    
    void fetchCategories();
  }, []);

  if (transaction == null) {
    return <div>Loading...</div>;
  }

  const initialValues = {
    name: transaction.name,
    date: new Date(transaction.date),
    category: transaction.category,
    amount: transaction.amount
  };

  const onSubmit = async (
    values: { date: Date; name: string; category: string; amount: number },
    { setSubmitting }: any
  ) => {
    try {
      const formattedDate = values.date.toLocaleDateString();
      const updatedTransaction: Transaction = {
        ...transaction,
        name: values.name,
        category: values.category,
        date: formattedDate,
        amount: values.amount
      };

      mytransactionapi.editTransaction(updatedTransaction);
      toast.success('Transaction updated successfully. :)');
      navigate('/transactions');
      onSaveButtonClicked(updatedTransaction);
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  };

  return (
    <>
      <div className="p-2 pt-3">
        <header className="mb-3 d-flex justify-content-between align-items-center ">
          <div className="fs-1 fw-bold">Edit Transaction</div>
        </header>

        <div className="panel w-100">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting, isValid, dirty, setFieldValue, values }) => (
              <Form>
                <div className="form-group m-1">
                  <label>Name</label>
                  <Field type="text" name="name" className="form-control " />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
                <div className="form-group m-1">
                  <label>Category</label>
                  <Field as="select" name="category" className="form-control">
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="category" component="div" className="text-danger" />
                </div>
                <div className="form-group m-1">
                  <label>Date</label>
                  <div className="">
                    <Calendar
                      value={values.date}
                      onChange={async (e) => await setFieldValue('date', e.value)}
                      id="date"
                      name="date"
                    />
                  </div>
                  <ErrorMessage name="date" component="div" className="text-danger" />
                </div>
                <div className="form-group m-1">
                  <label>Amount</label>
                  <Field type="number" name="amount" step="1" className="form-control" />
                  <ErrorMessage name="amount" component="div" className="text-danger" />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary m-2 "
                  disabled={isSubmitting || !(isValid && dirty)}>
                  Edit
                </button>
                <Link to="/transactions" className="btn btn-light ">
                  Cancel
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default TransactionForm;
