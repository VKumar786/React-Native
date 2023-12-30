require("./models/user");
require("./models/track");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const requireAuth = require("./middleware/requireAuth");

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/vishalCart");

mongoose.connection.on("error", (err) => {
  console.warn("Connection Error 🐹", err);
});

mongoose.connection.on("connected", () => {
  console.log("we are connected 🐰🐶🐹");
});

app.use(bodyParser.json());
app.use("/auth", require("./routes/authRoutes"));
app.use("/tracks", require("./routes/trackRoutes"));

app.get("/", requireAuth, (req, res) => {
  res.send({
    email: req.user.email,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
