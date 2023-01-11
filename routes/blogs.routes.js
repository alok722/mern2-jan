const { createNewBlog } = require('../controllers/blogs.controller');

const router = require('express').Router();

router.get("/new", createNewBlog); //api/blogs/new

module.exports = router;