import express from 'express';
import { Payment } from '../models/model.js';

const router = express.Router();

//create an item
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.year ||
      !request.body.amount ||
      !request.body.paymentMode ||
      !request.body.payee
    ) {
      return response.status(400).send('Enter all required fields');
    }
    const newPayment = {
      year: request.body.year,
      amount: request.body.amount,
      paymentMode: request.body.paymentMode,
      payee: request.body.payee,
    };
    const payment = await Payment.create(newPayment);
    return response.status(201).send(payment);
  } catch (error) {
    console.log(error.request);
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get all data
router.get('/', async (request, response) => {
  try {
    const payments = await Payment.find({});
    return response.status(200).json({
      count: payments.length,
      data: payments,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//get one item
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const payment = await Payment.findById(id);
    return response.status(200).json(payment);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//update one item
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.year ||
      !request.body.amount ||
      !request.body.paymentMode ||
      !request.body.payee
    ) {
      return response.status(400).send('Enter all required fields');
    }
    const { id } = request.params;
    const updated = await Payment.findByIdAndUpdate(id, request.body);
    if (!updated) {
      return response.status(404).send('Payment not found');
    }
    return response.status(200).send('Payment updated successfully');
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//delete an item
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Payment.findByIdAndDelete(id);
    if (!deleted) {
      return response.status(404).send('Payment not found');
    }
    return response.status(200).send('Payment deleted successfully');
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
export default router;
