const mongoose = require('mongoose')

const Message = mongoose.model("Message", {
  content: String,
  userID: String,
  channelID: String,
  deleted: Boolean
});

module.exports = Message;
