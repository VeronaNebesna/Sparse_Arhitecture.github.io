import React, {useEffect} from "react"
import AchivementData from "./AchivementData"
import AchivementListItem from "./AchivementListItem"
import Aos from "aos"
import "aos/dist/aos.css"
import "./AchivementList.css"


const AchivementList = () =>{
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    }, [])  
    return(
        <div className=" row achievements_row">
            {
                AchivementData.map(({
                    id,
                    text,
                    count,
                    icon,
                })=>(
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up">
                        <div key={id}>
                            <AchivementListItem
                            count={count}
                            text={text}
                            icon={icon}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AchivementList