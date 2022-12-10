const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  // mongodb query
  const userExists = await User.findOne({ email });
  if (userExists) {
    // throwing error code
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      // success respond
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new error("Error occured");
  }
});

// ----------------------------------- Login Part------------------------------

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // mongodb query
  const user = await User.findOne({ email });
  const pass = await User.findOne({ password });
  console.log(user);
  if (user && pass) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.json({
      error: "Invalid Email or Password ",
    });
  }

  // throw error if user doesn't match
});

module.exports = { registerUser, authUser };
