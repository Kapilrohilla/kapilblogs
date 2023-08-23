const logger = require("./logger");

// Error Hanlding
function errorHandler(err, req, res) {
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
  console.log(err);
  res.sendStatus(500);
}

module.exports = { errorHandler };
