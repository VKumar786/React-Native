const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === 'Bearer LJSDKLFJSDFLLKJFD'

  if (!authorization)
    return res.status(401).send({ error: "You must be logged in" });

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "BOLBOLBAMBAM", async (err, payload) => {
    if (err) return res.status(401).send({ error: "You must be logged in" });

    const { userId } = payload;

    const user = await User.findById(userId);

    if (!user) return res.status(401).send({ error: "You must be logged in" });

    req.user = user;
    next();
  });
};
