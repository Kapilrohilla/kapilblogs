const jwt = require("jsonwebtoken");
const logger = require("./logger");
const { SECRET } = require("./config");
const User = require("../models/User");

// Error Hanlding
function errorHandler(err, req, res, next) {
  logger.info(err);
  if (
    err.name === "MongoServerSelectionError" ||
    err.name === "MongooseError"
  ) {
    res.status(500).json({
      err: "Sorry! database integration is failed",
      // msg: err.message,
    });
  } else if (err.name === "ValidationError") {
    return res.status(400).json({
      err: err.message,
    });
  } else if (err.name === "CastError") {
    res.status(500).json({
      err: "malfunction id",
    });
  }
  // console.log(err);
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
    /*empty*/
  }

  next();
}
module.exports = { errorHandler, tokenExtractor, userExtractor };
