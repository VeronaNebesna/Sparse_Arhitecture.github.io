import React, {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import "./Components_1.css"
import about from "./about.png"

const Components_1 = () =>{
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    }, []);    
    return(
        <div>
            <div className="img_section_dark" data-aos="fade-up-right">
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