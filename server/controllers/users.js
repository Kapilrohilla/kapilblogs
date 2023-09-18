const userRouter = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const multer = require("multer");
const Blog = require("../models/Blog");
const { userExtractor } = require("../utils/middleware");

// GET ALL USER
userRouter.get("/", async (_req, res, next) => {
  try {
    const users = await User.find().populate("blogs", {
      title: 1,
      desc: 1,
      id: 1,
    });
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

// GET SPECIFIC USER
userRouter.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await User.findById(id).populate("blogs");
    return res.status(200).json(response);
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

// PUT USER
// FIXME FIX RESPONSE LOGO, RESPONSE OBJECT RESPONSE'S IS INCORRECT:x
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/dp");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

userRouter.put("/:id", upload.single("profilePic"), async (req, res, next) => {
  if (!req.user) {
    return res.sendStatus(401);
  }

  const { username, email, password } = req.body;

  try {
    let response = await User.findByIdAndUpdate(req.user.id, {
      username,
      password,
      email,
      profilePic: req.file.path,
      blogs: req.user.blogs,
    });
    response.token = req.token;
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});

// DELETE USER
userRouter.delete("/:id", userExtractor, async (req, res, next) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  const id = req.params.id;
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  if (id) {
    const userDeleteResponse = await User.findOneAndDelete({
      username: req.user.username,
    });
    console.log(userDeleteResponse, 0);
    const blogDeleteResponse = await Blog.deleteMany({ user: id });
    console.log(blogDeleteResponse);
    return res.status(200).json(userDeleteResponse);
  } else {
    next();
  }
});
module.exports = userRouter;
