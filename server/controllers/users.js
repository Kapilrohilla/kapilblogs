const userRouter = require("express").Router();
const User = require("../models/user");

// userRouter.get("/", async (req, res) => {
//   let userDetail;
//   try {
//     userDetail = await User.find({});
//     return res.status(204).json(userDetail);
//   } catch (err) {
//     console.log("unable to fetch userData");
//     return res.statusCode(500);
//   }
// });
// userRouter.post("/", async (req, res) => {
//   const { username, email, password } = req.body;
// });

userRouter.get("/", (req, res) => {
  res.status(200).send("hello world");
});
module.exports = userRouter;
