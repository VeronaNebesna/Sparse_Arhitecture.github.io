import React, { Fragment } from "react"
import HeaderItems from "../CategoryPages/HeaderItems"
import {connect} from 'react-redux'
import ContentData, {getCategoryMap} from "../../Main/PortfolioDarkSection/ContentPortfolio/ContentData"
import "./ReadMore.css"


const ReadMore =({
    match,
    mapId = getCategoryMap(ContentData),
    isLiked,
    addLike,
    removeLike,
    removeLikedPosts
})=>{
    const id = mapId[match.match.params.arrCategory].id
    console.log(isLiked)
    return(
        <Fragment>
             <HeaderItems
                valueOfCategory={mapId[match.match.params.arrCategory].category}
             />
            <div className="container">
                <div  className ="row dark_row content_row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="headline_of_the_items_of_list">
                            <p>{mapId[match.match.params.arrCategory].p1}</p>
                        </div>
                        <p className="like_read_more" onClick={()=> isLiked[id] ? removeLike(id) && removeLikedPosts(id): addLike(id)}> 
                        { isLiked[id]? <i class="fas fa-heart"></i>: <i class="far fa-heart"></i>}
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="pic_portfolio">
                            <img src={mapId[match.match.params.arrCategory].img}/>
                        </div>
                        <div className="description_item_extended">
                            <p>{mapId[match.match.params.arrCategory].p2_extended}</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="architects_team">
                            <i class="fas fa-chalkboard-teacher"></i>
                            Architects:<span> {mapId[match.match.params.arrCategory].design_Team}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-calendar-alt"></i>
                            Years: <span> {mapId[match.match.params.arrCategory].years}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-warehouse"></i>    
                            Area: <span>{mapId[match.match.params.arrCategory].area}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-user-shield"></i>    
                            Project Architect: <span> {mapId[match.match.params.arrCategory].project_Architect}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-pencil-alt"></i>
                            Design Team: <span> {mapId[match.match.params.arrCategory].design_Team}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-chalkboard-teacher"></i>
                            Structural Engineer: <span> {mapId[match.match.params.arrCategory].structural_Engineer}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-ruler-combined"></i>
                            Construction: <span> {mapId[match.match.params.arrCategory].construction}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-building"></i>
                            City: <span> {mapId[match.match.params.arrCategory].city}</span>
                        </div>
                        <div className="architects_team">
                            <i class="fas fa-flag"></i>
                            Country: <span> {mapId[match.match.params.arrCategory].country}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state)=>({
    isLiked:state.likeState
})
const mapDispatchToProps = (dispatch)=>({
    addLike: (id)=>dispatch({
        type:"LIKE",
        id
    }),
    removeLike: (id)=>dispatch({
        type:"DISLIKE",
        id
    }),
    removeLikedPosts:(id)=>dispatch({
        type:"REMOVE_LIKES_POSTS",
        id,
    })
})
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ReadMore)