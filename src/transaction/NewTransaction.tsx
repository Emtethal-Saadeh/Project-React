/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Table.scss';
import sideimag from '../assets/images/gg.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as TransactionsAPI from '../dashboard/transactions-api';
import { toast } from 'react-toastify';
import { Calendar } from 'primereact/calendar';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const NewTransaction = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    category: Yup.string().required('Category is required'),
    amount: Yup.number().required('Amount is required').typeError('Amount must be a number').positive('Amount must be positive'),
    date: Yup.date().required('Date is required'),
  });

  const initialValues = {
    name: '',
    date: new Date(),
    category: '',
    amount: 0,
  };

  const [successMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (values: { date: { toLocaleDateString: () => any; }; name: any; category: any; amount: any; }, { resetForm, setSubmitting }: any) => {
    const formattedDate = values.date.toLocaleDateString();
    const newTransaction = {
      name: values.name,
      category: values.category,
      date: formattedDate,
      amount: values.amount,
      id: parseInt(uuidv4(), 16)
    };
    TransactionsAPI.addTransaction(newTransaction);
    resetForm();
    setSubmitting(false);
    toast.success('Data saved successfully.');
    navigate('/transactions');
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
                      <option value="Supermarket">Supermarket</option>
                      <option value="Personal">Personal</option>
                      <option value="Home and Entertainment">Home and Entertainment</option>
                    </Field>
                    <ErrorMessage name="category" component="div" className="text-danger" />
                  </div>
                  <div className="form-group m-1">
                    <label>Date</label>
                    <div className="">
                      <Calendar value={values.date} onChange={async (e) => await setFieldValue('date', e.value)} />
                    </div>
                    <ErrorMessage name="date" component="div" className="text-danger" />
                  </div>
                  <div className="form-group m-1">
                    <label>Amount</label>
                    <Field type="number" name="amount" step="1" className="form-control" />
                    <ErrorMessage name="amount" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn color m-2 btn1" disabled={isSubmitting || !(isValid && dirty)}>Submit</button>
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
