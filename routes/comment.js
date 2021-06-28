const { Router } = require("express");

const router = Router();
const controllers = require("../controllers/index");

router.get("/post/:id/comment", controllers.getComment); // get comments by post id
router.post("/post/:id/comment", controllers.addComment); // добавить коммент к посту

module.exports = router;
