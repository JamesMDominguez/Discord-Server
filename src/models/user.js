const mongoose = require('mongoose')

const User = mongoose.model("User", {
  name: String,
  deleted: Boolean,
  email: String,
  profile_image: String
});

module.exports = User;