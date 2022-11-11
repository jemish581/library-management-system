import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";
const bookIssueDataModel = new mongoose.Schema({
  _id: {
    type: String,
    default() {
      return `ISSUED-${v4()}`;
    },
  },
  userId: {
    type: String,
    ref: "userId",
  },

  bookId: {
    type: String,
    ref: "bookId",
  },
});

export default mongoose.model("issuedBooks", bookIssueDataModel);
