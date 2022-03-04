require("dotenv").config();
require("express-async-errors");
const path = require("path");

const express = require("express");
const cors = require("cors");

const connectDB = require("./db/connect");
const router = require("./routes/auth");
const userRouter = require("./routes/User");
const productRouter = require("./routes/Product");
const cartRouter = require("./routes/Cart");
const orderRouter = require("./routes/Order");
const stripeRouter = require("./routes/stripe");

const app = express();

const notFoundMiddleware = require("./middleWare/not-found");
const errorHandlerMiddleware = require("./middleWare/error-handler");

app.use(cors());
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use(express.static(path.join(__dirname, "/burbuy_front/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/burbuy_front/build", "index.html"));
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`I am listening on port ${port} ... `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
