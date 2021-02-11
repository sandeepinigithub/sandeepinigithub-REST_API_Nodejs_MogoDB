const express = require("express");

const router = express.Router();

// this route will come only localhost:3000/posts , since we are using middleware and triggering from there
router.get("/", (req, res) => {
  res.send("Hello from post");
});

module.exports = router;