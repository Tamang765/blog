const router=require("express").Router();
const User= require("../models/User");
const Post=require("../models/Post");

//create
router.post("/", async(req, res)=>{
    const newPost=new Post(req.body);
    try {
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }

} )

//Update
router.put("/:id", async(req,res) =>{
    try {
        const post=await Post.findById(req.params.id);
        try {
            if(post.username===req.body.username){
                try {
                    const updatePost=await Post.findByIdAndUpdate(req.params.id,{
                        $set:req.body
                    },{new:true});
                    res.status(200).json(updatePost)
                } catch (error) {
                    res.status(401).json(error)
                }
            }
            else{
                res.status(401).json("Username doesn't match")
            }
        } catch (error) {
            res.status(401).json(error)
        }
    } catch (error) {
        res.status(500).json(error)
    }
} );

// //delete post
router.delete("/:id", async(req,res) =>{
  

    const post=await Post.findById(req.params.id);
    if (post.username=== req.body.username){  
            await post.delete();
            res.status(200).json("Post has been deleted....")
    }
    else{
    res.status(401).json("You can't deleted other's post")
    };

});

//Get Post
router.get("/:id", async(req,res) =>{
    try {
       const post=await Post.findById(req.params.id);
       res.status(200).json(post) 
    } catch (error) {
        res.status(500).json(error)
    };
});

//Get all the post
router.get("/", async (req, res) =>{
    const username=req.query.user;
    const catName= req.query.cat;
    try {
        let posts;   
        if(username){
            posts = await Post.find({username:username});
        }
        else if(catName){
            posts= await Post.find({categories:{
                $in:[catName],
            },
            })
        }
        else{
           posts= await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }
});
module.exports=router;