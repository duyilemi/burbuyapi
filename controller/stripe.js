const express = require("express");
const stripe = require("stripe")(process.env.SECRET_KEY);

const stripeController = async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenID,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};

module.exports = stripeController;
