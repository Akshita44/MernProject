import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {context} from "./App";
function Navbar(){
  const {state,dispatch}=useContext(context);
  const [co,setco]=useState();
  const con=async()=>{
    try{
        const res=await fetch("/getdata",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });
        console.log(res);
        if(res.status === 200)
        {
          setco(true)
        }
        else{
            setco(false)
        }
    }
    catch(err)
    {
        console.log("..............");
        console.log(err);
    }
}
  useEffect(()=>{
    con();
  },[])
  console.log(co);
    return(
        <>
        {(state || co)?(
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="#"><i class="fab fa-adn"></i></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Logout">Logout</NavLink>
              </li>
            </ul>
          </div>
        </nav>


    ):(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#"><i class="fab fa-adn"></i></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Login">Login</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Signup">SignUp</NavLink>
      </li>
    </ul>
  </div>
</nav>
    )}
  
        </>

    )
}

export default Navbar;