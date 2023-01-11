const Blogs = require("../models/blogs.model");

const createNewBlog = (req, res) => {
    console.log(Blogs)
    const newBlog = new Blogs({ title: 'First Blog', content: 'Test Content', authorId: 'alok722' });
    console.log(newBlog);
    res.status(200).send();
}

module.exports = { createNewBlog };