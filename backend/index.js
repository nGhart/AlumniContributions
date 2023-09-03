import express from 'express';
import { Port, MongoDBUrl } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import paymentRoute from './routes/paymentsRoute.js';

const app = express();

//to clear postman error use a middleware to parse the request
app.use(express.json());

//add new middleware for contribution routes
app.use('/payments', paymentRoute);

//cors
app.use(cors());
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome');
});

//connect the database
mongoose
  .connect(MongoDBUrl)
  .then(() => {
    console.log('DB Connection: Success');
    app.listen(Port, () => {
      console.log(`Listening to Port: ${Port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    console.log(error.request);
  });
