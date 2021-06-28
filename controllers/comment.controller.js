const mongoose = require("mongoose");
const Comment = require("../models/Comment");

const addComment = async (req, res) => {
  try {
    const comment = await new Comment({
      author: req.body.id,
      text: req.body.text,
      post: req.params.id,
    });
    comment.save();
    res.json("Comment add");
  } catch (e) {
    console.log(e.message);
  }
};

const getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  addComment,
  getComment,
};
