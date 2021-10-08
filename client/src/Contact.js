import React, { useState,useEffect, useRef} from 'react'

function Contact(){
    const [usedata,setdata]=useState({name:"",email:"",phone:"",message:""});
    const eref=useRef(null)
    const nref=useRef(null)
    const pref=useRef(null)
    // const [data,setuserdata]=useState({});
    const check=async()=>{
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
                const data=await res.json();
                console.log(data);
                setdata({name:data.name,email:data.email,phone:data.phone,message:""})
                eref.current.disabled=true
                nref.current.disabled=true
                pref.current.disabled=true
            }
            else{
                throw new Error("error")
            }
        }
        catch(err)
        {
            console.log("..............");
            console.log(err);
        }
    }
    useEffect(()=>{
        check();
    },[])
    const handlechange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setdata({...usedata,[name]:value})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(!usedata.message ||!usedata.name || !usedata.email || !usedata.phone)
        {
            alert("Enter the message");
        }
        else{
            const res=await fetch("/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(usedata)
            })
            console.log(res);
            const data =await res.json();
            console.log(data);
            if(res.status === 200)
            {
                alert("Message sent successfully");
                setdata({...usedata,message:""});
            }
            else{
                alert("Invalid user")
                console.log("Message not send");
            }
        }        
    }
    return (
        <>
        <div className="container align-center mt-5 contact">
            <div className="row mb-3">
                <div className="col-lg-10 offset-lg-1 mt-3">
                <h2 className="contacthead">Get in Touch</h2>
                </div>
            </div>
            {/* <div className="row"> */}
            <form className="row">
                <div className="col-lg-10 offset-lg-1 forminputs d-flex justify-content-between">
                            <input type="text"  name="name" placeholder="Name" onChange={handlechange} ref={nref} required value={usedata.name}/>
                            <input type="text" name="email" placeholder="Email"  onChange={handlechange} ref={eref} required value={usedata.email}/>
                            <input type="text" name="phone" placeholder="Phone" onChange={handlechange} ref={pref} required value={usedata.phone}/>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-10 offset-lg-1">
                        <textarea cols="69" rows="6" placeholder="Message" name="message" value={usedata.message} onChange={handlechange} required/>
                    </div>
                </div>
                <div className="row mt-3 mb-5">
                    <div className="col-lg-10 offset-lg-1">
                        <button onClick={handlesubmit} className="btn btn-primary">Send message</button>
                    </div>
                </div>
            </form>
                </div>
            {/* </div> */}

        </>
    )
}

export default Contact
