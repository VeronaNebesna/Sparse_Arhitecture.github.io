import React from "react"

import "./Components_1.css"
import about from "./about.png"

const Components_1 = () =>{
    return(
        <div>
            <div className="img_section_dark">
                <img src={about} alt=""/>
                    <div className="description_photo">
                        <p className = "number">26</p>
                        <p>Years of Creativity</p>
                    </div>
            </div>
        </div>
    )
}

export default Components_1