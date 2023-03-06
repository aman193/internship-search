const mongoose = require("mongoose");
const { ObjectId, Decimal128, Number } = mongoose.Schema.Types;
const profileSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "User",
    require: true,
  },
  name: {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
  },
  DOB: {
    type: String,
    default: "",
  },
  education: {
    collegeName: {
      type: String,
      require: true,
    },
    degree: {
      type: String,
    },
    cgpa: {
      type: Decimal128,
    },
    startDate: {
      type: Date,
    },
  },
  experience: {
    type: Number,
    require: true,
  },
  skills: {
    type: Array,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("Profile", profileSchema);
