const mongoose = require("mongoose");

// This Schema defines the details about users that will be stored in the database and can be queried
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "A user must have a name"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "A user must have an email address"]
  },
  address: {
    type: String
  },
  state: {
    type: String
  },
  agent: {
    type: String
  },
  partner: {
    type: String
  },
  loanId: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
