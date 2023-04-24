const mongoose = require('mongoose');

  const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
	    type: String,
	    required: true,
      minLength: 6,
    }
  });
  const User = mongoose.model("User", UserSchema);
  module.exports = User;
  // export default Item;
