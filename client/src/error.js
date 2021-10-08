import React from 'react'
import { NavLink } from 'react-router-dom'
function error() {
    return (
        <>
        <div className="error">
            <NavLink to="/home">Go to Home Page</NavLink>
        </div>
        </>
    )
}

export default error
