require('dotenv').config({path:"./.env"});
const express=require("express");
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
    app.use(express.static("client/build"));
}
app.listen(port,()=>{
    console.log("connection successful");
})
