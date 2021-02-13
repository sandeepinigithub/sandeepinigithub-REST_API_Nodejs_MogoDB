const express = require("express");
const router = express.Router();
var Post = require('../models/Post');
const bodyParser = require('body-parser'); 

// this route will come only localhost:3000/posts , since we are using middleware and triggering from there
router.get("/", (req, res) => {
  res.send("Hello from post");
});

router.post('/',(req,res)=>{
  console.log(req.body);
});

module.exports = router;