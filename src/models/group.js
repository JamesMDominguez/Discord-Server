const mongoose = require('mongoose')

const Group = mongoose.model("Group", {
  userID: String,
  roomID: String,
  deleted: Boolean
});

module.exports = Group;

