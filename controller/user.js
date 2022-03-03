const UserModel = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const updateUser = async (req, res) => {
  const {
    body: { username, password },
    user: { userId },
    params: { id: usrId },
  } = req;
  if (username === "" || password === "") {
    throw new BadRequestError("Enter a valid Usename and Password");
  }
  const salt = await bcrypt.genSalt(10);
  newPassword = await bcrypt.hash(password, salt);
  req.body = { username: username, password: newPassword };
  const user = await UserModel.findByIdAndUpdate({ _id: userId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    throw new NotFoundError(`No job with id : ${userId}`);
  }
  res.status(StatusCodes.OK).json({ user });
};

const delUser = async (req, res) => {
  const {
    user: { userId },
    params: { id: usrId },
  } = req;
  const user = await UserModel.findByIdAndRemove({
    _id: usrId,
  });
  if (!user) {
    throw new NotFoundError(`No user with id : ${usrId}`);
  }
  res.status(StatusCodes.OK).send();
};

const getUser = async (req, res) => {
  const {
    user: { userId },
    params: { id: usrId },
  } = req;
  const user = await UserModel.findById({
    _id: usrId,
  });
  if (!user) {
    throw new NotFoundError(`No user with id : ${usrId}`);
  }
  res.status(StatusCodes.OK).json({ user });
};

const getAllUser = async (req, res) => {
  const {
    user: { userId },
    params: { id: usrId },
    query: { latest },
  } = req;
  const user = latest
    ? await UserModel.find().sort({ createdAt: -1 }).limit(6)
    : await UserModel.find();
  if (!user) {
    throw new NotFoundError(`No user with id : ${usrId}`);
  }
  res.status(StatusCodes.OK).json({ user });
};

const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  console.log(lastYear);
  const data = await UserModel.aggregate([
    { $match: { createdAt: { $gte: lastYear } } },
    { $project: { month: { $month: "$createdAt" } } },
    { $group: { _id: "$month", total: { $sum: 1 } } },
  ]);
  if (!data) {
    throw new NotFoundError(`No data with id stats ...`);
  }
  res.status(StatusCodes.OK).json(data);
};

module.exports = { updateUser, delUser, getUser, getAllUser, getUserStats };
