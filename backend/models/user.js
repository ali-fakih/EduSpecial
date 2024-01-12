const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["admin", "user"],
    required: true, // Role is required
  },

  firstname: {
    type: String,
    required: true, // Username is required
    unique: true, // Username should be unique
  },
  lastname: {
    type: String,
    required: true, // Username is required
    unique: true, // Username should be unique
  },
  password: {
    type: String,
    required: true, // Password is required
  },
  bloodType: {
    type: String,
    required: true, // Password is required
  },

  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Email should be unique
    validate: {
      validator: function (value) {
        // Use a regular expression or a library like validator.js to validate email format
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
      },
      message: "Invalid email format",
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;