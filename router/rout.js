const express=require("express");
const router= new express.Router();
// const jwt=require("jsonwebtoken");
const bcryptjs=require("bcryptjs");
const Users=require("../models/collection");
const auth=require("../middleware/auth");
// router.use(express.json());
router.get("/",(req,res)=>{
    res.send("hello world");
})
router.post("/signup",async(req,res)=>{
    try{
        const {name,email,password,cpassword,phone}=req.body;
        if(!name || !email || !password || !cpassword || !phone)
        {
            throw new Error("Fill the credentials")
        }
        else{
            const data=new Users(req.body);
            console.log(data);
            const a=await Users.find({email:null})
            console.log(a);
            if(req.body.password === req.body.cpassword)
            {
                console.log(".............");
                const d=await data.save();
                console.log("hello world");
                console.log(d);
                res.status(201).send(d);
            }
            else{
                res.status(400).send("Invalid credentials")
            }
        } 
    }
    catch(err)
    {
        console.log(err);
        res.status(400).send("Invalid credentials");
    }
})

router.post("/login",async(req,res)=>{
    try{
        if(!req.body.email || !req.body.password)
        {
            throw new Error("Fill the credentials")
        }
        const data=await Users.findOne({email:req.body.email});
        // console.log(data);
        if(data)
        {
            const token=await data.getauthtoken();
            const match=await bcryptjs.compare(req.body.password,data.password);
            console.log(match);
            if(match)
            {
                res.cookie("jwt",token,{
                expires:new Date(Date.now()+86400000),
                httpOnly:true})
                res.status(200).send("User registered successfully");
            }
            else{
                res.status(400).send("Invalid credentials");
            }
        }
        else{
            res.status(400).send("Invalid credentials");
        }
    }
    catch(err)
    {
        res.status(400).send(err);
    }

})
router.get("/about",auth,(req,res)=>{
    res.status(200).send(req.user);
})
router.get("/getdata",auth,(req,res)=>{
    res.status(200).send(req.user);
})
router.post("/contact",auth,async(req,res)=>{
    try{
        const data=await Users.findOne({_id:req.user._id})
        if(data)
        {
            const message=data.getmessage(req.body);
            // await data.save();
            console.log(message);
            res.status(200).json("message sent successfully");
        }
    }
    catch(err)
    {
        res.status(400).send(err)
        console.log(err);
    }
   
})
router.get("/logout",auth,async(req,res)=>{
    res.clearCookie("jwt");
    req.user.tokens=req.user.tokens.filter((element)=>{
            return req.token !== element.token;
    })
    await req.user.save();
    res.status(200).send("user logged out");
})
module.exports=router;