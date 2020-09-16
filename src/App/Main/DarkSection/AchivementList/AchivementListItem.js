import React, {Component} from "react"


class AchivementListItem extends Component{
    render(){
        const{
            id,
            count,
            text,
            icon
        } = this.props;
        return(
            <div className="box_our_company">
                    <div className="font_icons">{icon}
                        <div className="desc">
                            <div className="num_count">{count}</div>
                            <span>{text}</span>
                        </div>
                    </div>
            </div>
        )
    }
}

export default AchivementListItem