const express = require("express");
const router = express.Router();

const {
  authentication,
  userAuthentication,
} = require("../middleWare/authentication");
const {
  updateUser,
  delUser,
  getUser,
  getAllUser,
  getUserStats,
} = require("../controller/user");

router.patch("/updateuser/:id", authentication, updateUser);

router.delete("/deleteuser/:id", authentication, delUser);

router.get("/finduser/:id", userAuthentication, getUser);

router.get("/", userAuthentication, getAllUser);

router.get("/stats", userAuthentication, getUserStats);

module.exports = router;
