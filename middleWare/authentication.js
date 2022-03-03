const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authentication = async (req, res, next) => {
  const { id } = req.params;
  // check header ..
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authetication Invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      userId: payload.userId,
      username: payload.username,
      isAdmin: payload.isAdmin,
    };
    console.log(req.user.isAdmin);
    if (id === req.user.userId || req.user.isAdmin) {
      next();
    } else {
      throw new UnauthenticatedError("Authetication Invalid");
    }
  } catch (error) {
    throw new UnauthenticatedError("You are not allowed to do that");
  }
};

const userAuthentication = async (req, res, next) => {
  console.log(req.headers.authorization);
  // check header ..
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authetication Invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      userId: payload.userId,
      username: payload.username,
      isAdmin: payload.isAdmin,
    };
    if (req.user.isAdmin) {
      next();
    } else {
      throw new UnauthenticatedError("Authetication Invalid");
    }
  } catch (error) {
    throw new UnauthenticatedError("You are not allowed to do that");
  }
};

module.exports = { authentication, userAuthentication };
