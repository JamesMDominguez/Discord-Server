const mongoose = require('mongoose')

const Member = mongoose.model("Member", {
  userID: String,
  serverID: String,
  deleted: Boolean
});

module.exports = Member;

