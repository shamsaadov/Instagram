const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("User", userShema);
