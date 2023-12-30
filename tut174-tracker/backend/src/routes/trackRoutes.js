const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middleware/requireAuth");
const Track = mongoose.model("Track");
const router = express.Router();

// It want user to first login
router.use(requireAuth);

router.get("/", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });
  res.send({
    tracks,
  });
});

router.post("/", async (req, res) => {
  const { name, locations } = req.body;

  if (!name || !locations)
    return res.status(422).send({
      error: "You must provide a name & location",
    });

  try {
    const track = await Track({
      userId: req.user._id,
      name,
      locations,
    });

    await track.save();

    return res.send(track);
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
});

module.exports = router;
