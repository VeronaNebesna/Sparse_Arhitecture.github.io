import React from "react"
import "./SideDrawer.css"

const SideDrawer = (props) => {
    let drawerClasses = "side-drawer";
    if(props.show){
        drawerClasses ="side-drawer open";
    }
    return (
        <nav className={drawerClasses} >
            <div className="close_menu" onClick={props.close}>X</div>
            <ul className="menu" >
                <li><a href="" >Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer 