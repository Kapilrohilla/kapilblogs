const loginRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { SECRET } = require("../utils/config");

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      err: `${email} not registered`,
    });
  }
  const isPasswordCorrect = password
    ? await bcrypt.compare(password, user.passwordHash)
    : false;

  if (!isPasswordCorrect) {
    return res.status(400).json({
      err: "wrong password",
    });
  }
  const userForToken = {
    username: user.username,
    id: user.id,
  };
  const token = jwt.sign(userForToken, SECRET);
  if (token) {
    return res.status(200).json({
      token,
      email: user.email,
      ...userForToken,
      profilePic: user.profilePic,
    });
  }

  res.sendStatus(500);
});

module.exports = loginRouter;
