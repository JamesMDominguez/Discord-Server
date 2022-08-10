import mongoose from 'mongoose'

const Channel = mongoose.model("Channel", {
  name: String,
  serverID: String,
  deleted: Boolean
});

export default Channel;