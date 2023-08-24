const blogRouter = require("express").Router();
const Blog = require("../models/Blog");
const User = require("../models/User");
const multer = require("multer");
const path = require("path");
// GET ALL BLOG
blogRouter.get("/", async (req, res, next) => {
  try {
    const allBlog = await Blog.find({}).populate("user");
    res.status(200).json(allBlog);
  } catch (err) {
    next(err);
  }
});

// GET SPECIFIC BLOG
blogRouter.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const blog = await Blog.findById(id).populate("user");
    const photoref = path.join(__dirname, "/../", blog.photo);
    res.status(200).json(blog);
    res.sendFile(photoref);
  } catch (err) {
    next(err);
  }
});

// CONFIGURING LOCALPATH TO ACCEPT IMAGES
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads/postsImage");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST BLOG
blogRouter.post("/", upload.single("blogImg"), async (req, res, next) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  const preNewBlog = {
    title: req.body.title,
    desc: req.body.desc,
    photo: req.file.path,
    user: req.user.id,
  };

  if (!preNewBlog.title) {
    return res.status(400).json({
      err: "title is required",
    });
  }

  const newBlog = new Blog(preNewBlog);
  try {
    const response = await newBlog.save();

    const user = await User.findById(req.user.id);
    user.blogs = user.blogs.concat(response._id);
    await user.save();

    return res.json(response).status(204);
  } catch (err) {
    next(err);
  }
});

module.exports = blogRouter;
