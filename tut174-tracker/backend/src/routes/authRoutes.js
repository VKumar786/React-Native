const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const newUser = new User({ email, password });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, "BOLBOLBAMBAM");

    res.send({ token });
  } catch (error) {
    return res.status(422).send(error.message);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(422).send({ error: "Must provide email & password" });

  const user = await User.findOne({ email });

  if (!user)
    return res.status(422).send({ error: "Invalid Password or Email" });

  try {
    await user.comparePassword(password);

    const token = jwt.sign({ userId: user._id }, "BOLBOLBAMBAM");

    res.send({ token });
  } catch (error) {
    return res.status(422).send({ error: "Invalid Password or Email" });
  }
});

module.exports = router;
