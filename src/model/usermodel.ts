import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";
const userDataModel = new mongoose.Schema({
  _id: {
    type: String,
    default() {
      return `MEM-${v4()}`;
    },
  },
  userName: {
    type: String,
  },

  mobile: {
    type: Number,
    require: true,
    unique: true,
  },

  email: {
    type: String,
  },

  address: {
    type: String,
  },

  password: {
    type: String,
  },
});

export default mongoose.model("user", userDataModel);
