// const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default ...
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, Please try again later",
  };

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }
  if (err.name === "ValidationError") {
    console.log(Object.values(err.errors));
    // overwrite the customError ...
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
    customError.statusCode = 400;
  }
  if (err.name === "CastError") {
    customError.msg = `Item with id - ${Object.values(err.value)} not found `;
    customError.statusCode = 404;
  }
  if (err.code && err.code === 11000) {
    // console.log(err);
    // overwrite the customError ...
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field ... ${Object.values(
      err.keyValue
    )}, choose a different ${Object.keys(err.keyValue)}`;
    customError.statusCode = 400;
  }
  return res.status(customError.statusCode).json({ msg: customError.msg });
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
};

module.exports = errorHandlerMiddleware;
