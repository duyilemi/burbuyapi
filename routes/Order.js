const express = require("express");
const router = express.Router();

const {
  createOrder,
  updateOrder,
  delOrder,
  getOrder,
  getAllOrders,
  getMonthlyInc,
} = require("../controller/order");
const {
  authentication,
  userAuthentication,
} = require("../middleWare/authentication");

router.post("/", userAuthentication, createOrder);
router.patch("/updateorder/:id", userAuthentication, updateOrder);
router.delete("/deleteorder/:id", userAuthentication, delOrder);
router.get("/getorder/:id", authentication, getOrder);
router.get("/", userAuthentication, getAllOrders);
router.get("/income", userAuthentication, getMonthlyInc);

module.exports = router;
