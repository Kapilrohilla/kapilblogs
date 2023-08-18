const userRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

userRouter.get("/", async (_req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    console.log(`unable to fetch userData, ${err}`);
    return res.sendStatus(500);
  }
});

// working on creating user api
userRouter.post("/", async (req, res) => {
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
    await user.save();
    res.status(204).end();
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        err: err.message,
      });
    }
    console.log(err.name);
    res.sendStatus(500);
  }
});

module.exports = userRouter;
