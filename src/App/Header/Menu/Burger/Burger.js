import React from "react"
import "./Burger.css"

const Burger = (props) =>{
    return(
        <button className="mobile-menu_fixed"  onClick={props.drawerClickHandler}>
            <div className="mobile_menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
    )
}

export default Burger