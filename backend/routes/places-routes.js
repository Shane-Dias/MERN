const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire   State Building",
    description: "You must visit this place!",
    location: {
      lat: "40.7484405",
      lng: "-73.9856644",
    },
    address: "20 W 34th St., New York, NY 10001, United States",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeID = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeID;
  });

  if (!place) {
    return res
      .status(404)
      .json({ message: "Could not find a place for the provided id." });
  }
  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    return res
      .status(404)
      .json({ message: "Could not find a place for the provided id." });
  }
  res.json({ place });
});

module.exports = router;
