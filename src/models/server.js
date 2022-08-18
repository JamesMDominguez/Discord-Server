import mongoose from 'mongoose'

const Server = mongoose.model("Server", {
  name: String,
  server_image: String,
  deleted: Boolean,
  ownerID: String
});

export default Server;