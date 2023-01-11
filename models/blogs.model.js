const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: [String] },
        content: { type: String, default: "" },
        publishedAt: { type: Date, default: null },
    },
    { timestamps: true }
);

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel