const OrderModel = require("../models/Order");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const createOrder = async (req, res) => {
  const order = await OrderModel.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ order });
  //   res.status(StatusCodes.CREATED).send("Hey Beau");
};

const updateOrder = async (req, res) => {
  //   const {
  //     // body: { username, password },
  //     // user: { userId },
  //     params: { id: orderId },
  //   } = req;

  //   const order = await OrderModel.findByIdAndUpdate(
  //     { _id: orderId },
  //     req.body,
  //     {
  //       new: true,
  //       runValidators: true,
  //     }
  //   );
  //   if (!order) {
  //     throw new NotFoundError(`No order with id : ${cartId}`);
  //   }
  //   res.status(StatusCodes.OK).json({ order });
  res.status(StatusCodes.CREATED).send("Hey Beau");
};

const delOrder = async (req, res) => {
  //   const {
  //     // order: { orderId },
  //     params: { id: orderId },
  //   } = req;
  //   const order = await OrderModel.findByIdAndRemove({
  //     _id: proorderId,
  //   });
  //   if (!order) {
  //     throw new NotFoundError(`No order with id : ${orderId}`);
  //   }
  //   res.status(StatusCodes.OK).send();
  res.status(StatusCodes.CREATED).send("Hey Beau");
};

const getOrder = async (req, res) => {
  //   const {
  //     // order: { orderId },
  //     params: { id: orderID },
  //   } = req;
  //   const order = await OrderModel.find({
  //     orderID: orderID,
  //   });
  //   if (!order) {
  //     throw new NotFoundError(`No order with id : ${orderID}`);
  //   }
  //   res.status(StatusCodes.OK).json({ order });
  res.status(StatusCodes.CREATED).send("Hey Beau");
};

const getAllOrders = async (req, res) => {
  console.log("oder called");
  const {
    // order: { userId },
    params: { id: usrId },
    query: { latest },
  } = req;
  const order = await OrderModel.find();
  if (!order) {
    throw new NotFoundError(`No orders`);
  }
  res.status(StatusCodes.OK).json(order);
  // res.status(StatusCodes.CREATED).send("Hey Beau");
};
const getMonthlyInc = async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  const income = await OrderModel.aggregate([
    {
      $match: {
        createdAt: { $gte: prevMonth },
        ...(productId && {
          products: { $elemMatch: { productId } },
        }),
      },
    },
    { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
    { $group: { _id: "$month", total: { $sum: "$sales" } } },
  ]);
  if (!income) {
    throw new NotFoundError(`No data with id stats ...`);
  }
  res.status(StatusCodes.OK).json(income);
};

module.exports = {
  createOrder,
  updateOrder,
  delOrder,
  getOrder,
  getAllOrders,
  getMonthlyInc,
};
