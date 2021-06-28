const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  desc: String,
  img: String,
  like: Array,

  savePost: Array,
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Post", postSchema);
