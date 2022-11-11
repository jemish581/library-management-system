import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";
const booksdatamodel = new mongoose.Schema({
  _id: {
    type: String,
    default() {
      return `BOOK-${v4()}`;
    },
  },
  bookName: {
    type: String,
  },

  author: {
    type: String,
  },

  pages: {
    type: Number,
  },

  description: {
    type: String,
  },

  category: {
    type: String,
  },
  price: {
    type: Number,
  },
});

export default mongoose.model("books", booksdatamodel);
