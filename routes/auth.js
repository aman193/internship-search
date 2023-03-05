const express = require("express");
const router = express.Router();
const User = require("../Schemas/user");
const passport = require("passport");

router.get("/login", (req, res) => {
  res.send("login");
});
router.get("/register", (req, res) => {
  res.send("register");
});

router.post("/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists.");
  const newUser = await User.create(req.body);
  res.status(201).send(newUser);
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/register",
    successRedirect: "/",
  }),
  (req, res) => {
    return res.status(200).send(req.user);
  }
);

module.exports = router;
