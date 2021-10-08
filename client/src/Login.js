import React,{useContext, useState} from 'react'
import logimg from "./photos/login.jpg";
import {useHistory} from "react-router-dom";
import {context} from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const {state,dispatch}=useContext(context);
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const history=useHistory();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const res=await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        console.log(res);
        if(!res || res.status === 400)
        {
            // alert("Invalid credentials");
            toast("Invalid credentials", { type: "error" });
            console.log("invalid credentials");
        }
        else{
            alert("Login successful");
            dispatch({
                type:"USER",
                payload:true
            })
            history.push("/");
        }
    }
    return (
        <div>
            <ToastContainer position="top-right"></ToastContainer>
            <div className="container align-center sign">
            <div className="login">
            <div className="d-flex justify-content-between logmain">
            <figure>
                <img src={logimg} alt="" className="signimg"/>
            </figure>
            <form>
            <p className="signhead">Sign In</p>
            <div className="form-group">
            <input type="email" className="forminput" id="Email1" aria-describedby="emailHelp"
            value={email} onChange={(e)=>{setemail(e.target.value)}}
            autoComplete="off" placeholder="Email" required/>
            </div>
            <div className="form-group">
            <input type="password" className="forminput" id="Password1" placeholder="Password" value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
            required/>
             </div>
            <button type="submit" onClick={handlesubmit} className="btn btn-primary">Submit</button>
            </form>
           
            </div>
            
        </div>
    </div>
    </div>
    )
}

export default Login
