import React from "react"
import "./Logo.css"
import {Link} from "react-router-dom"
import logo from "./logo.png"




const Logo = () => {
    return(
        <div>
            <div className="logo">
                <Link to = "/"><img src={logo} alt=""/></Link>
            </div>
        </div>
    )
}

export default Logo