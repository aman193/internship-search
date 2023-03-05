// database username Aman2001

const express = require("express");
const app = express();
const { connectMongoose } = require("./database");
const User = require("./Schemas/user");
const { profile } = require("./Schemas/userProfile");
const passport = require("passport");
const { initializingPassport } = require("./passportConfig");
const expressSession = require("express-session");

connectMongoose();
initializingPassport(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "aynburnt",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(require("./routes/auth"));
app.use(require("./routes/profile"));
app.use(require("./routes/internship"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
