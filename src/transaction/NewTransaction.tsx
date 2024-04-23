import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Table.scss';
import sideimag from '../assets/images/gg.png';
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import * as TransactionsAPI from '../dashboard/transactions-api';
import { type Transaction } from '../context/Type';

const NewTransaction = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    category: Yup.string().required('Category is required'),
    amount: Yup.number().required('Amount is required').typeError('Amount must be a number').positive('Amount must be positive'),
  });

  const initialValues = {
    name: '',
    date: new Date().toISOString().substr(0, 10),
    category: '',
    amount: 0,
  };

  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (values: any, { resetForm, setSubmitting }: FormikHelpers<any>) => {
    const newTransaction: Transaction = {
      name: values.name,
      category: values.category,
      date: values.date,
      amount: values.amount,
      id: TransactionsAPI.getAllTransactions().length + 1
    };
    TransactionsAPI.addTransaction(newTransaction);
    resetForm();
    setSuccessMessage('Data saved successfully.');
    setTimeout(() => { setSuccessMessage(''); }, 3000); 
    setSubmitting(false);
  };

  return (
    <>
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <div className='row bg-white p-4 rounded-5 '>
          <h1 className='m-0'><img className="img3" src={sideimag} alt="Avatar" /> Transactions Table</h1>
          <div className='bg-white rounded-5 '>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group m-1">
                    <label>Name</label>
                    <Field type="text" name="name" className="form-control " />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <div className="form-group m-1">
                    <label>Category</label>
                    <Field type="text" name="category" className="form-control" />
                    <ErrorMessage name="category" component="div" className="text-danger" />
                  </div>
                  <div className="form-group m-1">
                    <label>Amount</label>
                    <Field type="number" name="amount" step="1" className="form-control" />
                    <ErrorMessage name="amount" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn color m-2 btn1" disabled={isSubmitting}>Submit</button>
                  <Link to="/transactions" className="btn btn-secondary btn1">Cancel</Link>
                </Form>
              )}
            </Formik>
            {(successMessage.length > 0) && <div className="text-success">{successMessage}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTransaction;
