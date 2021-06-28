const { Router } = require("express");

const router = Router();

const controllers = require("../controllers/index");

router.get(`/posts`, controllers.getPosts); // get all posts
router.get("/post/:id", controllers.getPostById); // get post with Id
router.post("/post/:id", controllers.addPost); // add post
router.post("/post/:id/save", controllers.postSave); // userId in body
router.post("/post/:id/like", controllers.patchLike); // userId in body

module.exports = router;
