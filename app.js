require('dotenv').config({path: __dirname+'/.env'});
const express=require("express");
const path=require("path")
const app=express();
const cookieparser=require("cookie-parser");
require("./db/conn");
const port=process.env.PORT || 8000;
app.use(express.json());
app.use(cookieparser())
app.use(express.urlencoded({extended:false}));
app.use(require("./router/rout"));
if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.resolve(__dirname,"./client","build")));
    app.get("/*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"./client","build","index.html"))
    })
}
app.listen(port,()=>{
    console.log("connection successful");
})
