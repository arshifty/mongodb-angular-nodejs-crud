const express = require("express");
const router = express.Router();
const Post = require("../model/usermodel");


//update a post

router.patch( '/:postId', async (req, res) => { 
  try {
    const updateOnePost =await  Post.updateOne({_id: req.params.postId}, {$set: {userName: req.body.userName , contact: req.body.contact , password: req.body.password  , city: req.body.city, country: req.body.country, code: req.body.code  } });
    res.json(updateOnePost);
    console.log(updateOnePost);

  } catch(err) {
    res.json({message: err});
  }

});

//delete a post

router.delete( '/:postId', async (req, res) => { 
  try {
    const deleteOnePost =await  Post.remove({_id: req.params.postId});
    res.json(deleteOnePost);
    console.log(deleteOnePost);

  } catch(err) {
    res.json({message: err});
  }

});

//get a specific post
router.get( '/:postId', async (req,res) => {
  console.log(req.params.postId);
  try {
   const retriveOnePost = await  Post.findById(req.params.postId);
   res.json(retriveOnePost);
   console.log(retriveOnePost);
   } catch(err) {
     res.json({message: err});
     //console.log(err);
   }

});

//get back all the post
router.get("/", async (req, res) => {
  try {
  const retrivePost = await  Post.find();
  res.json(retrivePost);
  console.log(retrivePost);
  } catch(err) {
    res.json({message: err});
    //console.log(err);
  }

  //console.log("post");
  //res.send("post url");
});

//submit all the post
router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Post({
    userName: req.body.userName,
    contact: req.body.contact,
    password: req.body.password,
    city: req.body.city,
    country: req.body.country,
    code: req.body.code,

  });
 
  try{
   const savePost = await post.save();
   res.json(savePost);
   console.log(savePost);
  }
  catch(err){
    res.json({message: err});
  }
});



router.get('/',(req, res) =>{
  console.log('inside router');
res.send('inside router');
});


router.get('/ttt',(req, res) =>{
  console.log('test ttt');
res.send('home ttt');
});

module.exports = router;