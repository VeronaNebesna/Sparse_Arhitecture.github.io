import React from "react"
import "./AchivementList.css"
import AchivementListItem from "./AchivementListItem"

import AchivementData from "./AchivementData"



const AchivementList = () =>{
    return(
        <div className=" row achievements_row">
            {
                AchivementData.map(({
                    id,
                    text,
                    count,
                    icon,
                })=>(
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
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