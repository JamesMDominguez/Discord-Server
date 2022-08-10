import mongoose from 'mongoose'

const Message = mongoose.model("Message", {
  content: String,
  userID: String,
  channelID: String,
  deleted: Boolean
});

export default Message;
