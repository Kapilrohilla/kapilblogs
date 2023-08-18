const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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
});

const User = mongoose.model("user", userSchema);
return User;
