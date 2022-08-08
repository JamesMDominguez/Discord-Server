const mongoose = require('mongoose')

const Message = mongoose.model("Message", {
  message: String,
  userID: String,
  roomID: String,
  deleted: Boolean
});

module.exports = Message;
