import mongoose from 'mongoose'

const Server = mongoose.model("Server", {
  name: String,
  deleted: Boolean,
  ownerID: String
});

export default Server;