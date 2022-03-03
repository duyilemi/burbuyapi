const express = require("express");
const router = express.Router();

const {
  authentication,
  userAuthentication,
} = require("../middleWare/authentication");
const {
  createCart,
  updateCart,
  delCart,
  getCart,
  getAllCarts,
} = require("../controller/cart");

router.post("/", authentication, createCart);
router.patch("/updatecart/:id", authentication, updateCart);
router.delete("/deletecart/:id", authentication, delCart);
router.get("/getcart/:id", authentication, getCart);
router.get("/", userAuthentication, getAllCarts);

module.exports = router;
