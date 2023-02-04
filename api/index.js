const bodyParser = require("body-parser");
const express =require("express");
const app=express();
const mongoose=require("mongoose");
const authRoute=require("./routes/auth");
const usersRoute=require("./routes/users");
const postsRoute=require("./routes/posts");
const categoryRoute=require("./routes/categories");
const multer=require("multer")


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose 
.connect("mongodb+srv://pradeep:pradeep123@cluster0.mqj0bli.mongodb.net/blog?retryWrites=true&w=majority", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,

}).then(console.log("database is connected"))
.catch((err)=>console.log(err));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },
        filename:(req,file,cb)=>{
            cb(null,req.body.name);
            
    }
});

const upload= multer({storage:storage});
app.post("/api/upload", upload.single("recfile"),(req,res)=>{
    res.status(200).json("FIle has been uploaded");
});



app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/users",usersRoute);
app.use("/api/categories",categoryRoute);


app.listen("5000",()=>{
    console.log("backend is running")
})   
