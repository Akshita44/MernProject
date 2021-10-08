import React from 'react'
import homeimg from "./photos/homeimg.png";
import homeimg2 from "./photos/homeimg2.png";
function Home() {
    return (
        <>
            <div className="homebox">
                <figure>
                    <img src={homeimg} alt="" className="homeimg"></img>
                </figure>
                <figure>
                    <img src={homeimg2} alt="" className="homeimg2"></img>
                </figure>
                <div className="homecenter">
                <p className="homeheading">
                    Welcome
                </p>
                <p className="homesubhead">We are Mern Developer</p>
                </div>
            </div>
        </>
    )
}

export default Home
