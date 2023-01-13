const Blogs = require("../models/blogs.model");

const findAllBlogs = async () => {
    const blogs = await Blogs.find({});
    return blogs;
}

module.exports = { findAllBlogs }