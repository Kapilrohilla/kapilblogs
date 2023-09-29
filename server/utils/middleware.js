const jwt = require("jsonwebtoken");
const logger = require("./logger");
const { SECRET } = require("./config");
const User = require("../models/User");

// Error Hanlding
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  if (
    err.name === "MongoServerSelectionError" ||
    err.name === "MongooseError"
  ) {
    return res.status(500).json({
      err: "Sorry! database integration is failed",
      // msg: err.message,
    });
  } else if (err.name === "ValidationError") {
    return res.status(400).json({
      err: err.message,
    });
  } else if (err.name === "CastError") {
    return res.status(500).json({
      err: "malfunction id",
    });
  }
  logger.error(err);
  res.sendStatus(500);
}

function tokenExtractor(req, res, next) {
  const authorization = req.get("Authorization");

  if (authorization && authorization.startsWith("Bearer")) {
    req.token = authorization.replace("Bearer ", "");
  }
  next();
}
async function userExtractor(req, res, next) {
  const token = req.token;
  try {
    const decodedToken = jwt.verify(token, SECRET);
    req.user = await User.findById(decodedToken.id);
  } catch (err) {
    console.log(err);
  }

  next();
}
module.exports = { errorHandler, tokenExtractor, userExtractor };
