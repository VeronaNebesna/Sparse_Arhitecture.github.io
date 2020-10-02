import React, {Fragment} from "react"
import {Link} from "react-router-dom"

const HeaderItems = ({
    valueOfCategory
})=>{
    return(
        <Fragment>
             <div className ="header_img">
                <div className = "blog">
                    <p>Blog</p>
                    <button className="button_category"><Link to="/" className="link">Home</Link> | <div className="link" >Category: {valueOfCategory}</div></button>
                </div>
            </div>
        </Fragment>
    )
}

export default HeaderItems