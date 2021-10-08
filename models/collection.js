const mongoose=require("mongoose");
const bcryptjs=require("bcryptjs");
const validator=require("validator");
const jwt=require("jsonwebtoken")
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Enter a valid email");

            }
        }
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true,
                validate(value){
                    if(!validator.isEmail(value))
                    {
                        throw new Error("Enter a valid email");
        
                    }
                }
            },
            phone:{
                type:Number,
                required:true,
                minlength:10,
                maxlength:10
            },
            message:{
                type:String,
                required:true
            }
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }

        }
    ]
})

userschema.methods.getauthtoken=async function(){
    try{
        const token=await jwt.sign({email:this.email},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token});
        await this.save();
        return token
    }
    catch(err)
    {
        console.log(err);
    }
    
}
userschema.methods.getmessage=async function(data)
{
    try{
        this.messages=this.messages.concat(data);
        await this.save();
        return this.messages;
    }
    catch(err)
    {
        console.log(err);
    }
}
userschema.pre("save",async function(next){
    if(this.isModified("password"))
    {
        this.password= await bcryptjs.hash(this.password,12);
        this.cpassword=await bcryptjs.hash(this.cpassword,12);
    }
    next();   
})

const Users=new mongoose.model("user",userschema);
module.exports=Users;