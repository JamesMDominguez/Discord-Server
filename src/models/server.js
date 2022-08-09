const mongoose = require('mongoose')

const Server = mongoose.model("Server", {
  name: String,
  deleted: Boolean,
  ownerID: String
});

module.exports = Server;