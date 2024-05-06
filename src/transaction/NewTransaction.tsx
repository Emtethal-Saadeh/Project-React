/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Table.scss';
import sideimag from '../assets/images/gg.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { transactionsAPI } from '../dashboard/transactions-api';
import { toast } from 'react-toastify';
import { Calendar } from 'primereact/calendar';
import 'react-toastify/dist/ReactToastify.css';

const NewTransaction = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    category: Yup.string().required('Category is required'),
    amount: Yup.number()
      .required('Amount is required')
      .typeError('Amount must be a number')
      .positive('Amount must be positive'),
    date: Yup.date().required('Date is required')
  });

  const initialValues = {
    name: '',
    date: new Date(),
    category: '',
    amount: 0
  };

  const [successMessage] = useState('');
  const navigate = useNavigate();
  // eslint-disable-next-line new-cap
  const mytransactionapi = new transactionsAPI();

  const onSubmit = async (
    values: { date: { toLocaleDateString: () => any }; name: any; category: any; amount: any },
    { resetForm, setSubmitting }: any
  ) => {
    const formattedDate = values.date.toLocaleDateString();
    const newTransaction = {
      name: values.name,
      category: values.category,
      date: formattedDate,
      amount: values.amount,
      id: Math.floor(Math.random() * 10000) + 1
    };
    mytransactionapi.addTransaction(newTransaction);
    resetForm();
    setSubmitting(false);
    toast.success('Data saved successfully.');
    navigate('/transactions');
  };

  return (
    <>
      <div className="p-2 pt-3">
        <header className="mb-3 d-flex justify-content-between align-items-center ">
          <div className="fs-1 fw-bold">Transactions</div>

          <Link to="/transaction/new">
            <div className="btn btn-primary">New Transaction</div>
          </Link>
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
                  <Field type="text" name="name" className="form-control w-200px" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
                <div className="form-group m-1">
                  <label>Category</label>
                  <Field as="select" name="category" className="form-control">
                    <option value="">Select category</option>
                    <option value="Supermarket">Supermarket</option>
                    <option value="Personal">Personal</option>
                    <option value="Home and Entertainment">Home and Entertainment</option>
                  </Field>
                  <ErrorMessage name="category" component="div" className="text-danger" />
                </div>
                <div className="form-group m-1">
                  <label>Date</label>
                  <div className="">
                    <Calendar
                      value={values.date}
                      onChange={async (e) => await setFieldValue('date', e.value)}
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
                  className="btn btn-primary color m-2 "
                  disabled={isSubmitting || !(isValid && dirty)}>
                  Submit
                </button>
                <Link to="/transactions" className="btn btn-light ">
                  Cancel
                </Link>
              </Form>
            )}
          </Formik>
          {successMessage.length > 0 && <div className="text-success">{successMessage}</div>}
        </div>
      </div>
    </>
  );
};

export default NewTransaction;
