import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Loading from '../components/Loading';

import { useNavigate } from 'react-router-dom';

const AddPay = () => {
  const [year, setYear] = useState('');
  const [payee, setPayee] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddPayment = () => {
    const data = {
      year,
      payee,
      amount,
      paymentMode,
    };
    setLoading(true);
    axios
      .post('http://localhost:1989/payments', data)
      .then(() => {
        setLoading(false);
        alert('good');
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        // enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
    console.log('hi');
  };
  return (
    <div>
      {' '}
      <div className="p-4">
        <Navigation />
        <h1 className="text-3xl my-4">Create Book</h1>
        {loading ? <Loading /> : ''}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={payee}
              onChange={(e) => setPayee(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="text"
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleAddPayment}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPay;
