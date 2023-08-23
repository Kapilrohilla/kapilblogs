const blogRouter = require("express").Router();
const Blog = require("../models/Blog");
const multer = require("multer");

// GET ALL BLOG
blogRouter.get("/", async (req, res, next) => {
  try {
    const allBlog = await Blog.find({});
    res.status(200).json(allBlog);
  } catch (err) {
    next(err);
  }
});

// GET SPECIFIC BLOG
blogRouter.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const blog = await Blog.findById(id);
    return res.status(200).json(blog);
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
blogRouter.post("/", upload.single("blogImg"), async (req, res) => {
  const preNewBlog = {
    title: req.body.title,
    desc: req.body.desc,
    photo: req.file.path,
  };

  //   console.log(req.file);
  if (!preNewBlog.title) {
    return res.status(400).json({
      err: "title is required",
    });
  }

  const newBlog = new Blog(preNewBlog);
  try {
    const response = await newBlog.save();
    return res.status(204).json(response);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
});

module.exports = blogRouter;
