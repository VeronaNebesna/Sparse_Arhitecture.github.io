import React, {Component} from "react"
import CountUp from "react-countup"

const AchivementListItem =({
    id,
    count,
    text,
    icon
})=>{
        return(
            <div className="box_our_company">
                    <div className="font_icons">{icon}
                        <div className="desc">
                                <div className="num_count">
                                        <CountUp start={0} end={count} duration={10} />
                                </div>
                            <span>{text}</span>
                        </div>
                    </div>
            </div>
        )
}

export default AchivementListItem