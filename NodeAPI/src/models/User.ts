import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "Listener"
  },
  songs: {
    type: Array,
    default: []
  },
  authentication: {
    password: {type: String, required: true, select: false},
    salt: {type: String, select: false},
    sessionToken: {type: String, select: false},
  }
});

export const UserModel = mongoose.model('User', UserSchema);