// import express from 'express';
// import { Port, MongoDBUrl } from './config.js';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import paymentRoute from './routes/paymentsRoute.js';

// const app = express();

// //to clear postman error use a middleware to parse the request
// app.use(express.json());

// app.get('/', (request, response) => {
//   console.log(request);
//   return response.status(234).send('Welcome');
// });

// //add new middleware for contribution routes
// //app.use('/paid', contributionRoutes);
// //cors
// //either allow all
// app.use(cors());
// //or allow custom
// // app.use(
// //   cors({
// //     origin: 'http://localhost:3000',
// //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //     allowedHeaders: ['Content-Type'],
// //   })
// // );

// //connect the database
// mongoose
//   .connect(MongoDBUrl)
//   .then(() => {
//     console.log('DB Connection: Success');
//     app.listen(Port, () => {
//       console.log(`Listening to Port: ${Port}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error.message);
//     console.log(error.request);
//   });
