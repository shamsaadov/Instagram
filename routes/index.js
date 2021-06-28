const { Router } = require("express");

const router = Router();

const post = require("./post");
const users = require("./user");
const comment = require("./comment");

router.use(post);
router.use(users);
router.use(comment);

module.exports = router;
