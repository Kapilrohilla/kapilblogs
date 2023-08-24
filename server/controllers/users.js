const userRouter = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// const multer = require("multer");
// GET ALL USER
userRouter.get("/", async (_req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

// POST NEW USER
userRouter.post("/", async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!(username && email && password)) {
    return res.status(400).json({
      err: "username / email / password not found",
    });
  }
  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = new User({
      username,
      email,
      passwordHash,
    });
    const response = await user.save();
    res.json(response).status(204);
  } catch (err) {
    next(err);
  }
});

module.exports = userRouter;
