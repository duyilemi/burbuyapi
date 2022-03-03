const ProductModel = require("../models/Products");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const createProduct = async (req, res) => {
  console.log(req.body);
  const product = await ProductModel.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ product: { title: product.title } });
};

const updateProduct = async (req, res) => {
  const {
    // body: { username, password },
    // user: { userId },
    params: { id: productId },
  } = req;

  const product = await ProductModel.findByIdAndUpdate(
    { _id: productId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!product) {
    throw new NotFoundError(`No product with id : ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};

const delProduct = async (req, res) => {
  const {
    // user: { userId },
    params: { id: productId },
  } = req;
  const product = await ProductModel.findByIdAndRemove({
    _id: productId,
  });
  if (!product) {
    throw new NotFoundError(`No user with id : ${productId}`);
  }
  res.status(StatusCodes.OK).send();
};

const getProduct = async (req, res) => {
  const {
    // user: { userId },
    params: { id: productID },
  } = req;
  const product = await ProductModel.findById({
    _id: productID,
  });
  if (!product) {
    throw new NotFoundError(`No user with id : ${productID}`);
  }
  res.status(StatusCodes.OK).json(product);
};

const getAllProduct = async (req, res) => {
  const {
    // user: { userId },
    params: { id: productID },
  } = req;
  const queryLatest = req.query.latest;
  const queryCategories = req.query.categories;
  let product;
  if (queryLatest) {
    product = await ProductModel.find().sort({ createdAt: -1 }).limit(6);
  } else if (queryCategories) {
    product = await ProductModel.find({
      category: { $in: [queryCategories] },
    });
  } else {
    product = await ProductModel.find();
  }
  if (!product) {
    throw new NotFoundError(`No product with id : ${productID}`);
  }
  res.status(StatusCodes.OK).json(product);
};

module.exports = {
  createProduct,
  updateProduct,
  delProduct,
  getProduct,
  getAllProduct,
};
