const mongoose = require("mongoose");

const CartModel = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    products: [
      {
        productsID: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("CartModel", CartModel);
