const mongoose = require('mongoose')

const Room = mongoose.model("Room", {
  name: String,
  deleted: Boolean
});

module.exports = Room;