const mongoose = require("mongoose");
const { ObjectId, Decimal128, Number } = mongoose.Schema.Types;
const internshipSchema = mongoose.Schema({
  postedBy: {
    // recruiter's id
    type: ObjectId,
    ref: "User",
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  skillsRequired: {
    type: Array,
  },
  applicants: [
    {
      userId: {
        type: ObjectId,
        ref: "User",
      },
      resume: {
        type: String,
      },
      coverLetter: {
        type: String,
      },
    },
  ],
  messages: [
    {
      userId: {
        type: ObjectId,
        ref: "User",
      },
      message: {
        type: String,
      },
    },
  ],
  duration: {
    type: String,
  },
  stipend: {
    type: Number,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Internship = mongoose.model("Internship", internshipSchema);
