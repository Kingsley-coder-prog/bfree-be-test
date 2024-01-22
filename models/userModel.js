const mongoose = require("mongoose");

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
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
