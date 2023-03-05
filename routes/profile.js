const express = require("express");
const router = express.Router();
const Profile = require("../Schemas/userProfile");
const { isAuthenticated } = require("../passportConfig");

router.post("/createprofile", isAuthenticated, async (req, res) => {
  try {
    const newProfile = await Profile.create({
      userId: req.user.id,
      ...req.body,
    });
    res.status(201).send(newProfile);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/editprofile", isAuthenticated, async (req, res) => {
  try {
    await Profile.findByIdAndUpdate(req.body._id, req.body);
    res.status(201).send("updated Successfully!");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
