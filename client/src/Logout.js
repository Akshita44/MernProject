import React, { useContext, useEffect } from 'react'
import {useHistory} from "react-router-dom";
import {context} from "./App";
function Logout() {
    const history=useHistory();
    const {state,dispatch}=useContext(context);
    const clear=async()=>{
        try{
            const res=await fetch("/logout",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })
            console.log(res);
            if(res.status=== 200)
            {
                dispatch({
                    type:"USER",
                    payload:false
                })
                history.push("/Login");
            }
            else{
                throw Error("user not logged out")
            }
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(()=>{
        clear();
    },[])
    return (
        <div>
            <p>hello logout page</p>
        </div>
    )
}

export default Logout
