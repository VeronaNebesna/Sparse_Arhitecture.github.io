import React from "react"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"

const Header = ({
    like,
    changeColorTheme,
    color,
})=>{
    return(
        <div>
            <Logo/>
            <Menu
                like={like}
            changeColorTheme={changeColorTheme}
            color ={color}


            />
        </div>
    )
}
export default Header