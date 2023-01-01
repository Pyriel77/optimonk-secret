const mongoose = require("mongoose");

const SecretSchema = mongoose.Schema({
  hash: {
    type: String,
    required: true,
  },
  secretText: {
    type: String,
    required: [true, "You must provide a secret!"],
    trim: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  expiresAt: {
    type: Date,
  },
  remainingViews: {
    type: Number,
    required: [true, "Yout must provide a number!"],
  },
});

module.exports = mongoose.model("Secret", SecretSchema);
