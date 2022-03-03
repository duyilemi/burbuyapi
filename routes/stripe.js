const express = require("express");
const router = express.Router();

const stripeController = require("../controller/stripe");

router.post("/payment", stripeController);

module.exports = router;
