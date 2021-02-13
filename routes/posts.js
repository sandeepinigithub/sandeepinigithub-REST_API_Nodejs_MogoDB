const express = require("express");
const router = express.Router();
var Post = require("../models/Post");

// this route will come only localhost:3000/posts , since we are using middleware and triggering from there
router.get("/", (req, res) => {
  res.send("Hello from post");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch {
    res.json({ message: err });
  }
});

module.exports = router;
