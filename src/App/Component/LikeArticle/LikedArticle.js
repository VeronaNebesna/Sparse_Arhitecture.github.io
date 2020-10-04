import React from "react"
import {keys} from "lodash"
import  {Link} from "react-router-dom"
import ContentData, {getCategoryMap} from "../../Main/PortfolioDarkSection/ContentPortfolio/ContentData"
import ContCategoryPage from "../CategoryPages/ContCategoryPage"



const LikedArticle = ({
    like,
    mapId = getCategoryMap(ContentData),
    id
})=>{

    const listOfLikePosts = keys(like).map(categoryId => (
       mapId[categoryId]
    ))

    return(
        <div >
            <div className ="header_img">
                <div className = "blog">
                    <p>Blog</p>
                        <button className="button_category"><Link to="/" className="link">Home</Link> | <div className="link" >Liked articles</div></button>
                </div>
            </div>
            <div className="container">
                { listOfLikePosts.map((currentValue)=>(
                    
                         <ContCategoryPage
                            // isLiked={like}
                            id={like[id]}
                            img={currentValue.img}
                            p1={currentValue.p1}
                            headline={currentValue.headline}
                         /> 
                )) 
            }
            </div>
        </div>
    )
}


export default LikedArticle