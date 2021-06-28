const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  author: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  text: String,
  post: {
    ref: "Post",
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
