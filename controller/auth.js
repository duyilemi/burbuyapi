const UserModel = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  // console.log(req.body);
  const user = await UserModel.create({ ...req.body });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.username }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError(
      "Please enter a valid email address and password"
    );
  }
  let user = await UserModel.findOne({ email });
  // compare password ...
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePasswords(password);
  //   console.log(isPasswordCorrect);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user = user._doc;
  const { password: pass, ...others } = user;
  console.log(others);
  user = others;

  res.status(StatusCodes.OK).json({ user, token });
};

module.exports = { register, login };
