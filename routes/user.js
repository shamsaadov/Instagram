const { Router } = require("express");

const router = Router();
const controllers = require("../controllers/index");

router.get("/users", controllers.getUsers); // get all users
router.get("/user/:id/posts", controllers.getUsersPosts); // get all posts user
router.post("/user", controllers.addUser); // add user

module.exports = router;
