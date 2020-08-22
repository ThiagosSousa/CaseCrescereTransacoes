const mongoose = require('../../config/db');

const transactionSchema = mongoose.Schema(
  {
    cardNumber: {
      type: String,
      required: true,
    },
    establishment: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const transaction = mongoose.model('transaction', transactionSchema);
module.exports = transaction;
