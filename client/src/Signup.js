import React,{useState} from 'react'
import signimg from "./photos/girlsign.jpg";
import {useHistory} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
    const [userdata,setdata]=useState({name:"",email:"",password:"",cpassword:"",phone:""});
    const history=useHistory();
    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setdata({...userdata,[name]:value});
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        // console.log(userdata);
        const {name,phone,email,password,cpassword}=userdata
            const res=await fetch("/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,email,password,cpassword,phone
                })
            })
            console.log(res);
            // const data=await res.json();
            console.log("....................");
            // console.log(data);
            if(res.status === 400)
            {
                // alert("Invalid credentials");
                toast("Invalid credentials", { type: "error" });
            }
            else{
                alert("User registered");
                // return toast("User registered", { type: "success" });
                history.push("/Login")
            }
    }
    return (
        <div>
            <ToastContainer position="top-right"></ToastContainer>
            <div className="container align-center mt-5">
            <div className="signup">
            <div className="d-flex justify-content-between signmain">
            <form method="POST">
            <p className="signhead">Sign Up</p>
            <div className="form-group">
            <input type="text" className="forminput" name="name" id="Password1"
            value={userdata.name}
            onChange={handlechange}
            placeholder="Name" required/>
             </div>
            <div className="form-group">
            <input type="email" className="forminput" name="email" id="Email1" aria-describedby="emailHelp" 
            value={userdata.email}
            onChange={handlechange}
            autoComplete="off"  placeholder="Email" required/>
            </div>
            <div className="form-group">
            <input type="password" className="forminput"  name="password" id="Password1" 
            value={userdata.password}
            onChange={handlechange}
            placeholder="Password" required/>
             </div>
            <div className="form-group">
            <input type="password" className="forminput" name="cpassword" 
            value={userdata.cpassword}
            onChange={handlechange}
            id="Password1" placeholder="Confirm Password" required/>
            </div>
            <div className="form-group">
            <input type="text" className="forminput" name="phone" id="Password1" 
            value={userdata.phone}
            onChange={handlechange}
            placeholder="Phone" required/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
            </form>
            <figure>
                <img src={signimg} alt="" className="signimg"/>
            </figure>
            </div>
            
        </div>
    </div>
    </div>
    )
}

export default Signup