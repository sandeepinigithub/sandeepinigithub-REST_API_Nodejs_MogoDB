const express = require("express");
const router = express.Router();
var Post = require("../models/Post");

// this route will come only localhost:3000/posts , since we are using middleware and triggering from there

//GET BACK ALL THE POST
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT A POST
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

//SPECIFIC POST
router.get("/:postId", async (req, res) => {
  // console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch(err) {
    res.json({message  : err });    
  }
});

//DELETE Post
router.delete('/:postId',async(req,res)=>{
  try{
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);

  }catch(err){
    res.json({message : err});
  }
});

//Update a post 
router.patch('/:postId' , async (req,res)=>{

  try{
    const updatedPost = await Post.updateOne({_id: req.params.postId},{$set : {title: req.body.title}});
    res.json(updatedPost);


  }catch(err){
    res.json({message : err});
  }

});

module.exports = router;
