const Post = require("../models/Post");

const getPosts = async (req, res) => {
  //  const allPosts = await Post.find()
  // const page = req.query.page
  //  const limit = req.query.limit
  //
  //  const startIndex = (page - 1) * limit
  //  const endIndex = page * limit
  //
  //  const resultPage = allPosts.slice(startIndex, endIndex)
  //  res.json(resultPage)
  try {
    const { page = 1, limit = 10 } = req.query;
    const posts = await Post.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.json({ total: posts.length, posts });
  } catch (e) {
    console.log(e.message);
  }
};
const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};
const addPost = async (req, res) => {
  try {
    const post = await new Post({
      desc: req.body.desc,
      img: req.body.img,
      user: req.params.id,
    });
    post.save();
    res.json("Post add");
  } catch (e) {
    console.log(e.message);
  }
};
const postSave = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const { user } = req.body;
    const userSave = {
      user,
    };
    post.savePost.push(userSave.user);
    post.save();
    res.json("Сохранить ди ахь");
  } catch (e) {
    console.log(e.message);
  }
};
const patchLike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const { user } = req.body;
    const userSave = {
      user,
    };
    post.like.push(userSave.user);
    post.save();
    res.json("Лайк хот йи ахь");
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = {
  getPostById,
  addPost,
  getPosts,
  postSave,
  patchLike,
  postSave,
};
