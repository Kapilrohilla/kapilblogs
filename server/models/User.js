const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minLength: 3,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    minLength: 5,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "uploads/defaults/user.svg",
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogs",
    },
  ],
});

mongoose.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});
mongoose.plugin(mongooseUniqueValidator);

const User = mongoose.model("users", Schema);
module.exports = User;
