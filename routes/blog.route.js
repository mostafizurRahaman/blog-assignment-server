const express = require("express");
const blogController = require("../controllers/blog.controller");
const router = express.Router();

router.route("/blog-search").get(blogController.searchBlogByQuery);

router.route("/blog-stats").get(blogController.getBlogs);

module.exports = router;
