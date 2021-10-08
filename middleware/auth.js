const jwt=require("jsonwebtoken");
const Users=require("../models/collection");

const auth=async function(req,res,next){
    try{
        const token=req.cookies.jwt;
        console.log(token);
        const verify=jwt.verify(token,process.env.SECRET_KEY);
        console.log(verify);
        const data= await Users.findOne({email:verify.email});
        console.log(data);
        req.user=data;
        req.token=token
        next();
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}

module.exports=auth;