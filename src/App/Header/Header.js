import React from "react"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"

const Header = ({
    like
})=>{
    return(
        <div>
            <Logo/>
            <Menu
                like={like}
            />
        </div>
    )
}
export default Header