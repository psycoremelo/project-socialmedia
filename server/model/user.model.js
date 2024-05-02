import { Schema, model } from "mongoose";

const schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  profile: {
    type: String,
    required: false,
    unique: false
  },
  bio: {
    type: String,
    required: false,
    unique: false,
  }

});

export default model.Users || model("User", schema);