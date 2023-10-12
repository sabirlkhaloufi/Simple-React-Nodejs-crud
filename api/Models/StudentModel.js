const mongoose = require("mongoose");
const StudentScheme = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Students", StudentScheme);
