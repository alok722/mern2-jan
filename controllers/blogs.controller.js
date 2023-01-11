const Blogs = require("../models/blogs.model");

const createNewBlog = async (req, res) => {
    const newBlog = new Blogs(req.body);
    const result = await newBlog.save();
    res.status(201).json(result);
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find({});
        return res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ message: "Couldn't fetch data" })
    }
}

const deleteBlogWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Blogs.findOneAndDelete({ _id: id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Blog Not Found' })
    }
}

const updateBlog = async (req, res) => {
    const { id } = req.params;
    const result = await Blogs.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.status(200).json(result)
}

module.exports = { createNewBlog, getAllBlogs, deleteBlogWithId, updateBlog };