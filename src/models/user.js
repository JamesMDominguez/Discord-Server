import mongoose from 'mongoose'

const User = mongoose.model("User", {
  name: String,
  deleted: Boolean,
  email: String,
  profile_image: String
});

export default User;