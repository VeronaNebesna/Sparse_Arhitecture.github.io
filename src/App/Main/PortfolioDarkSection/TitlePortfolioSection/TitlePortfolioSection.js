import { keys } from "lodash"
import React, {Fragment} from "react"
import {Link} from "react-router-dom"


const TitlePortfolioSection= () =>{     
        return(
        <Fragment>
            <div className="column_caption">
                <p className="title">about portfolio</p>
                <div className="subtitle" >
                    Latest Completed Project
                </div>
                    <div className="yellow_line"></div>
            </div>
        </Fragment>
    )
}

export default TitlePortfolioSection