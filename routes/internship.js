const express = require("express");
const router = express.Router();
const Internship = require("../Schemas/internship");
const { isAuthenticated } = require("../passportConfig");

// Get all internships
router.get("/internships", async (req, res) => {
  try {
    const internships = await Internship.find();
    return res.status(201).send(internships);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Get all applicants for a particular internship posted by current user
router.get("/applicants", isAuthenticated, async (req, res) => {
  try {
    const internship = await Internship.find({
      $and: [{ _id: req.body._id }, { postedBy: req.user.id }],
    }).populate("applicants", "_id, name");
    return res.status(201).send(internship);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post("/createinternship", isAuthenticated, async (req, res) => {
  try {
    const newInternship = await Internship.create({
      postedBy: req.user.id,
      ...req.body,
    });
    res.status(201).send(newInternship);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Edit internship deatails
router.put("/editinternship", isAuthenticated, async (req, res) => {
  try {
    await Internship.findByIdAndUpdate(req.body._id, req.body);
    res.status(201).send("updated Successfully!");
  } catch (error) {
    res.status(500).send(error);
  }
});

// add current userId in applicants array
router.put("/applyforinternship", isAuthenticated, async (req, res) => {
  try {
    await Internship.findByIdAndUpdate(req.body._id, req.body);
    res.status(201).send("applied Successfully!");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
