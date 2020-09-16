import React from "react"

import Components_1 from "./Components_1/Components_1"
import Components_2 from "./Components_2/Components_2"
import AchivementList from "./AchivementList/AchivementList"

const DarkSection = () =>{
    return(
        <div>
             <section className="dark_section">
                <div className="container">
                    <div className="row dark_row">
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                           <Components_1/>
                        </div>
                        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                            <Components_2/>
                        </div>
                    </div>
                        <div>
                            <AchivementList/>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default DarkSection