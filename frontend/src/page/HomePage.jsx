import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1989/paid`)
      .then((response) => {
        setPayments(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">List</h1>
          {/* <NavLink to="/payments/addPay"> */}
          <NavLink to={`payments/addPay`}>
            <button className="text-sky-800 text-4xl">+</button>
          </NavLink>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <table className="w-full  border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">
                  Year Group
                </th>
                <th className="border border-slate-600 rounded-md">Amount</th>
                <th className="border border-slate-600 rounded-md">
                  Outstanding
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Mode of Payment
                </th>
                <th className="border border-slate-600 rounded-md">Payee</th>
                <th className="border border-slate-600 rounded-md">
                  Date Received
                </th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item, index) => (
                <tr key={item._id} className="h-8">
                  <tr>
                    <th className="border border-slate-600 rounded-md">
                      {index + 1}
                    </th>
                    <th className="border border-slate-600 rounded-md">
                      {item.title}
                    </th>
                    <th className="border border-slate-600 rounded-md">
                      {item.amount}
                    </th>
                    <th className="border border-slate-600 rounded-md">
                      Outstanding
                    </th>
                    <th className="border border-slate-600 rounded-md max-md:hidden">
                      {item.paymentMode}
                    </th>
                    <th className="border border-slate-600 rounded-md">
                      {item.payee}
                    </th>
                    <th className="border border-slate-600 rounded-md">
                      <div className="flex justify-center gap-x-4">
                        <NavLink to={`payments/details/${book._id}`}>
                          <i class="fas fa-eye text-sky-600"></i>
                        </NavLink>
                        <NavLink to={`payments/editPay/${book._id}`}>
                          <i class="fas fa-edit text-pink-600"></i>
                        </NavLink>
                        <NavLink to={`payments/delete/${book._id}`}>
                          <i class="fas fa-trash-alt text-red-600"></i>
                        </NavLink>
                      </div>
                    </th>
                  </tr>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default HomePage;
