const ue = require("../models/upcomingEvents");

exports.createPost = async (req, res) => {
    try {
        const { heading, clubName, postTime } = req.body;

        if (!heading || !clubName) {
            return res.status(400).json({
                success: false,
                message: "Please provide all the required data: heading and clubName",
            });
        }

        const post = new ue({ 
            heading, 
            clubName, 
            postTime: postTime || undefined 
        });
        const savedPost = await post.save();

        return res.status(201).json({
            success: true,
            message: "Post created successfully",
            post: savedPost,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred while creating the post",
            error: error.message,
        });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await ue.find().exec();
        res.status(201).json({
            posts,
        });
    } catch (err) {
        console.error("Error creating post:", err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        });
    }
};


