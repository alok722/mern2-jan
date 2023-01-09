const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: String,
        author: [String],
        content: String,
        publishedAt: Date,
    }
);

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = { blogModel }