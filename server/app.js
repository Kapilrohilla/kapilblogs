const logger = require("./utils/logger");
const { MONGODB_URI } = require("./utils/config");
const express = require("express");
const app = express();
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const middleware = require("./utils/middleware");
// router
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const blogRouter = require("./controllers/blogs");

app.use(cors());
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

app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: false }));
app.use(middleware.tokenExtractor);

// routers
app.get("/", (req, res) => {
  res.sendStatus(200).end();
});
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/blogs", blogRouter);

// Error handling
app.use(middleware.errorHandler);
module.exports = app;
