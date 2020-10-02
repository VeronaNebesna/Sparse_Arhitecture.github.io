import React, { Fragment } from "react"
import HeaderItems from "../CategoryPages/HeaderItems"
import ContentData, {getCategoryMap} from "../../Main/PortfolioDarkSection/ContentPortfolio/ContentData"
import "./ReadMore.css"


const ReadMore =({
    match,
    mapId = getCategoryMap(ContentData)
})=>{
    return(
        <Fragment>
             <HeaderItems
                valueOfCategory={mapId[match.params.arrCategory].category}
             />
            <div className="container">
                <div  className ="row dark_row content_row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="headline_of_the_items_of_list">
                            <p>{mapId[match.params.arrCategory].p1}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="pic_portfolio">
                            <img src={mapId[match.params.arrCategory].img}/>
                        </div>
                        <div className="description_item_extended">
                            <p>{mapId[match.params.arrCategory].p2_extended}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="architects_team">
                            <i class="fas fa-chalkboard-teacher"></i>
                            Architects:<span> {mapId[match.params.arrCategory].design_Team}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-calendar-alt"></i>
                            Years: <span> {mapId[match.params.arrCategory].years}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-warehouse"></i>    
                            Area: <span>{mapId[match.params.arrCategory].area}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-user-shield"></i>    
                            Project Architect: <span> {mapId[match.params.arrCategory].project_Architect}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-pencil-alt"></i>
                            Design Team: <span> {mapId[match.params.arrCategory].design_Team}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-chalkboard-teacher"></i>
                            Structural Engineer: <span> {mapId[match.params.arrCategory].structural_Engineer}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-ruler-combined"></i>
                            Construction: <span> {mapId[match.params.arrCategory].construction}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-building"></i>
                            City: <span> {mapId[match.params.arrCategory].city}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-flag"></i>
                            Country: <span> {mapId[match.params.arrCategory].country}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ReadMore