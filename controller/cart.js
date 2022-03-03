const CartModel = require("../models/Carts");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const createCart = async (req, res) => {
  // const cart = await CartModel.create({ ...req.body });
  // res.status(StatusCodes.CREATED).json({ cart: { title: cart.title } });
  res.status(StatusCodes.CREATED).send("Hey Beau");
};

const updateCart = async (req, res) => {
  //   const {
  //     // body: { username, password },
  //     // user: { userId },
  //     params: { id: cartId },
  //   } = req;

  //   const cart = await CartModel.findByIdAndUpdate(
  //     { _id: cartId },
  //     req.body,
  //     {
  //       new: true,
  //       runValidators: true,
  //     }
  //   );
  //   if (!cart) {
  //     throw new NotFoundError(`No cart with id : ${cartId}`);
  //   }
  //   res.status(StatusCodes.OK).json({ cart });
  res.status(StatusCodes.CREATED).send("Hey Beau");
};

const delCart = async (req, res) => {
  //   const {
  //     // user: { userId },
  //     params: { id: cartId },
  //   } = req;
  //   const cart = await CartModel.findByIdAndRemove({
  //     _id: productId,
  //   });
  //   if (!cart) {
  //     throw new NotFoundError(`No user with id : ${cartId}`);
  //   }
  //   res.status(StatusCodes.OK).send();
  res.status(StatusCodes.CREATED).send("Hey Beau");
};

const getCart = async (req, res) => {
  //   const {
  //     // user: { userId },
  //     params: { id: userID },
  //   } = req;
  //   const cart = await CartModel.findOne({
  //     userID: userID,
  //   });
  //   if (!cart) {
  //     throw new NotFoundError(`No user with id : ${userID}`);
  //   }
  //   res.status(StatusCodes.OK).json({ cart });
  res.status(StatusCodes.CREATED).send("Hey Beau");
};

const getAllCarts = async (req, res) => {
  //   const {
  //     user: { userId },
  //     params: { id: usrId },
  //     query: { latest },
  //   } = req;
  //   const cart = await CartModel.find();
  //   if (!cart) {
  //     throw new NotFoundError(`No carts`);
  //   }
  //   res.status(StatusCodes.OK).json({ cart });
  res.status(StatusCodes.CREATED).send("Hey Beau");
};
module.exports = {
  createCart,
  updateCart,
  delCart,
  getCart,
  getAllCarts,
};
