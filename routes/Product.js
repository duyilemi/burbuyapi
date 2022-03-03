const express = require("express");
const router = express.Router();

const {
  authentication,
  userAuthentication,
} = require("../middleWare/authentication");
const {
  createProduct,
  updateProduct,
  delProduct,
  getProduct,
  getAllProduct,
} = require("../controller/product");

router.post("/", userAuthentication, createProduct);
router.patch("/updateproduct/:id", userAuthentication, updateProduct);
router.delete("/deleteproduct/:id", userAuthentication, delProduct);
router.get("/findproduct/:id", getProduct);
router.get("/", getAllProduct);

module.exports = router;
