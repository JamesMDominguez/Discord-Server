const mongoose = require('mongoose')

const Channel = mongoose.model("Channel", {
  name: String,
  serverID: String,
  deleted: Boolean
});

module.exports = Channel;