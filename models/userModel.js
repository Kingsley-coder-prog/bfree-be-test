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
  loanId: String,
  loanInstalmentId: String,
  daysLate: String,
  dueDate: String,
  originalAmountToPay: Number,
  lateFees: Number,
  originalInterestToPay: Number,
  amountPlusFees: Number,
  amountPreviouslyPaidByCustomer: Number,
  numberOfInstalments: Number,
  amountPlusTotalInstalments: Number,
  amountPaid: Number,
  customerDiscount: Number,
  balanceRemaining: Number,
  partnerAccountNumber: Number,
  partnerAccountName: String,
  partnerBankName: String,
  enterDate: String,
  userTelephone: Number,
  applicationTelephone: Number,
  lga: String,
  bvn: Number,
  bvnTelephone: Number,
  guarantorName: String,
  guarantorTelephone: Number,
  guarantorRelationship: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
