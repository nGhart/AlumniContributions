import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import AddPay from './page/AddPay';
import EditPay from './page/EditPay';
import DeletePay from './page/DeletePay';
import SinglePayment from './page/SinglePayment';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="payments/addPay" element={<AddPay />}></Route>
        <Route path="payments/editPay/:id" element={<EditPay />}></Route>
        <Route path="payments/delete/:id" element={<DeletePay />}></Route>
        <Route path="payments/details/:id" element={<SinglePayment />}></Route>
        {/* <Route path="/payments/addPay" element={<AddPay />}></Route>
        <Route path="/payments/editPay/:id" element={<EditPay />}></Route>
        <Route path="/payments/delete/:id" element={<DeletePay />}></Route>
        <Route path="/payments/details/:id" element={<SinglePayment />}></Route> */}
      </Routes>
    </div>
  );
};

export default Routing;
