const router= require("express").Router();
const User=require("../models/User");
const bcrypt=require("bcrypt");
//register

router.post("/register", async(req,res)=>{
        const salt=await bcrypt.genSalt(10);
        const hashPass=await bcrypt.hash(req.body.password,salt)
         const newUser=new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
            
        });
        const user=await newUser.save();
        res.status(200).json(user);
    }
);
//Login
router.post("/login",async(req,res)=>{

        const user= await User.findOne({
            username: req.body.username
            
        })
        !user && res.status(400).json("Wrong Credentials")
        const validate= bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json("Wrong Credentials")
        const {password, ...others} =user._doc;

        res.status(200).json(others)
    }
    )


 module.exports=router;