const mongoose = require("mongoose");

const OrderModel = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    products: [
      {
        productsID: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderModel", OrderModel);
