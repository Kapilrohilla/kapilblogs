require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("./utils/logger");
const { MONGODB_URI } = require("./utils/config");
// router
const userRouter = require("./controllers/users");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");

const morganString = ":method :url :status";
app.use("/api/users", userRouter);

logger.info(`connecting to mongodb ${MONGODB_URI}`);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info("connected to mongodb");
  })
  .catch((err) => {
    logger.error(`failed in connecting to mongodb, ${err}`);
  });

// routers

app.use(morgan(morganString));
module.exports = app;
