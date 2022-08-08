const mongoose = require('mongoose')

const User = mongoose.model("User", {
  name: String,
  deleted: Boolean
});

module.exports = User;
