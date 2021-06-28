const { addUser, getUsers, getUsersPosts } = require("./user.controller");
const {
  getPostById,
  addPost,
  getPosts,
  patchLike,
  postSave,
} = require("./posts.controller");
const { addComment, getComment } = require("./comment.controller");

module.exports = {
  addUser,
  getUsers,
  getUsersPosts,
  getPostById,
  addPost,
  getPosts,
  addComment,
  getComment,
  patchLike,
  postSave,
};
