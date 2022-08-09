const mongoose = require('mongoose')

const Message = mongoose.model("Message", {
  content: String,
  userID: String,
  serverID: String,
  deleted: Boolean
});

module.exports = Message;
