import React from "react"
import {Link} from "react-router-dom"
import {keys} from "lodash"
import "./SideDrawer.css"
import { connect } from "react-redux"


const SideDrawer = ({
    close,
    show,
    like,
    // changeColorTheme,
    addWhiteTheme,
    addDarkTheme,
    color
}) => {
    let drawerClasses = "side-drawer";
    if(show){
        drawerClasses ="side-drawer open";
    }
    return (
        <nav className={drawerClasses} >
            <div className="close_menu" onClick={close}>X</div>
            <ul className="menu" >
                <li><a href="" >Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Service</a></li>
                <li><Link to="/liked_post">My wishlist: {
                            keys(like).reduce((accObj, id)=>(
                                accObj + like[id]
                            ),0 )
                        }</Link></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
                <li><button className="btn_theme" onClick={ ()=> color ?  addDarkTheme() : addWhiteTheme() }>Theme</button></li>

            </ul>
        </nav>
    )
}


const mapStateToProps= (state,props)=>({
    like:state.likeState,
    color:state.colorTheme[props.color]
})
const mapDispatchToProps = (dispatch)=>({
    addWhiteTheme:()=>dispatch({
        type:"ADD_WHITE_THEME"
    }),
    addDarkTheme:()=>dispatch({
        type:"ADD_DARK_THEME"
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SideDrawer)