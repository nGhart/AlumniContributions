import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema(
  {
    year: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
    },
    payee: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Payment = mongoose.model('Payment', paymentSchema);
