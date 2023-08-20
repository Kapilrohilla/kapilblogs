const logger = require("./utils/logger");
const { MONGODB_URI } = require("./utils/config");
const express = require("express");
const app = express();
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");

// router
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const blogRouter = require("./controllers/blogs");

app.use(express.json());

morgan.token("reqBody", function (req) {
  return JSON.stringify(req.body);
});

const morganString = ":method :url :status :reqBody";
app.use(morgan(morganString));

logger.info(`connecting to mongodb ${MONGODB_URI}`);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    logger.info("connected to mongodb");
  })
  .catch((err) => {
    logger.error(`failed in connecting to mongodb, ${err}`);
  });

app.use(express.urlencoded({ extended: false }));

// routers
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/blogs", blogRouter);
module.exports = app;
