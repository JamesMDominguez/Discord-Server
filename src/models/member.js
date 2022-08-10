import mongoose from 'mongoose'

const Member = mongoose.model("Member", {
  userID: String,
  serverID: String,
  deleted: Boolean
});

export default Member;

