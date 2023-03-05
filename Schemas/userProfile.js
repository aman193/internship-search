const mongoose = require("mongoose");
const { ObjectId, Decimal128, Number } = mongoose.Schema.Types;
const profileSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "User",
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  college: {
    type: String,
    require: true,
  },
  cgpa: {
    type: Decimal128,
    require: true,
  },
  experience: {
    type: Number,
    require: true,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("Profile", profileSchema);
