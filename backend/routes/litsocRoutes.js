const express = require("express");
const router = express.Router();
const {getAllPosts,createPost}=require("../controllers/upcomingEventController");
router.post("/createPost",createPost);
router.get("/getAllPosts",getAllPosts);

module.exports = router;