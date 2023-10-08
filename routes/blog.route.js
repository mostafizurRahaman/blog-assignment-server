const express = require("express");
const blogController = require("../controllers/blog.controller");
const router = express.Router();

router.route("/").get(blogController.getBlogs);

module.exports = router;
