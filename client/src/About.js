import React, { useEffect, useState } from 'react'
import aks from "./photos/aks.jpg";
import {useHistory} from "react-router-dom";
import userimg from "./photos/user-circle.png";
function About(){
    const history=useHistory();
    const [user,setuser]=useState({});
    const check=async()=>{
        try{
            const res=await fetch("/about",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            if(!res || res.status === 400)
            {
                history.push("/Login")
            }
            else{
                const data=await res.json();
                setuser(data);
            }
        }
        catch(err)
        {
            console.log("..............");
            console.log(err);
            history.push("/Login")
        }
    }
    useEffect(()=>{
        check();
    },[])

    return (
        <>
            <div className="container align-center mt-5 about" style={{padding:"20px"}}>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <figure>
                        <img src={(user.name === "akshita" || user.name === "Akshita")? aks:userimg} alt="" className="aboutimg"/>
                    </figure>
                </div>
                <div className="col-lg-6 col-md-6 aheader">
                    <p className="aboutname">{user.name}</p>
                    <p className="aboutprof">Web Developer</p>
                    <p className="rank mb-5">RANKING: 6/10</p>

    
                    <ul className="nav nav-tabs" role="tablist">
                        <li className=" nav-item active">
                            <a className="nav-link" href="#home" id="home-tab" data-toggle="tab" role="tab">About</a>
                        </li>
                        <li>
                        <a className="nav-link" href="#profile" id="profile-tab" data-toggle="tab" role="tab">Timeline</a>
                        </li>
                    </ul>
                    <br/>
                </div>
                <div className="col-lg-2 button">
                    <button type="button" className="btn">Edit profile</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="profilelinks">
                    <p>WORK LINK</p>
                    <a href="https://www.linkedin.com/feed/">LinkedIn profile</a><br/>
                    <a href="https://www.linkedin.com/feed/">Instagram</a><br/>
                    <a href="https://www.linkedin.com/feed/">Facebook</a><br/>
                    <a href="https://www.linkedin.com/feed/">Website</a><br/>
                    <a href="https://www.linkedin.com/feed/">Github profile</a><br/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 pl-5">
                    <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <label>User Id</label>
                            </div>
                            <div className="col-lg-6 col-md-6 aboutlink">
                                <p>{user._id}</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <label>Name</label>
                            </div>
                            <div className="col-lg-6 col-md-6 aboutlink">
                                <p>{user.name}</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <label>Email</label>
                            </div>
                            <div className="col-lg-6 col-md-6 aboutlink">
                                <p>{user.email}</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <label>Phone</label>
                            </div>
                            <div className="col-lg-6 col-md-6 aboutlink">
                                <p>{user.email}</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <label>Profession</label>
                            </div>
                            <div className="col-lg-6 col-md-6 aboutlink">
                                <p>Web Developer</p>
                            </div>
                            </div>
                            
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <label>Experience</label>
                            </div>
                            <div className="col-lg-6 col-md-6 aboutlink">
                                <p>Medium</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <label>Monthly Income</label>
                            </div>
                            <div className="col-lg-6 col-md-6 aboutlink">
                                <p>25000</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-4">
                                <label>Availability</label>
                            </div>
                            <div className="col-lg-6 col-md-4 aboutlink">
                                <p>6 months</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-6 col-md-4">
                                <label>Total Projects</label>
                            </div>
                            <div className="col-lg-6 col-md-4 aboutlink">
                                <p>12</p>
                            </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
 
            </div>
        </>
    )
}

export default About