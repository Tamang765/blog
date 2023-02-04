const router= require("express").Router();
const User=require("../models/User");
const bcrypt=require("bcrypt");
const Posts=require("../models/Post");
const { json } = require("body-parser");
//update
// router.put('/:id',async(req,res) =>{
//     if (req.body.userId === req.params.id){
//         if(req.body.password){
//             const salt=await bcrypt.genSalt(10);
//             const passwordToString=req.body.password.toString();
//             req.body.password =await bcrypt.hash(passwordToString, salt)
//         }
//         try {
//             const updateUser= await User.findByIdAndUpdate(req.params.id,{
//                 $set: req.body,
//             },{new:true})
//             res.status(200).json(updateUser)
//         } catch (err) {
//             res.status(401).json(err)
//         }
//     }
//     else{
//         res.status(401).json("You are not allowed to change other's profile")
//     }
// })
router.put("/:id", async(req,res) =>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt =await bcrypt.genSalt(10);
            const passwordToString=req.body.password.toString();
            req.body.password= await bcrypt.hash(passwordToString, salt)
        }
       try{ const updateUser= await User.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true})
        res.status(200).json(updateUser);
    }
    catch(err){
        res.status(401).json(err);
    }
    }
    else{
        res.status(401).json("Your are only allowed to change your profile");
    }
})

//delete
router.delete("/:id", async(req, res) =>{
    if (req.body.userId === req.params.id){
        try {

            const user = await User.findById(req.params.id);
            try {
                await Posts.deleteMany({username:user.username});
                await User.findByIdAndRemove(req.params.id);
                res.status(200).json("Deleted Sucessfuly");
            } catch (error) {
                res.status(500).json(err);
            }
        } catch (error) {
            res.status(401).json("No user FOund")
        }

    }
    else{
        res.status(401).json("You don't have access")
    }
} )

//get 

router.get("/:id",async(req,res) =>{
    try {
        const user=await User.findById(req.params.id);
        const {password, ...others}=user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
        
    }
})
module.exports =router;