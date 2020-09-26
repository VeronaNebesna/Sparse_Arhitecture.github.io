import React from "react"
import {keys} from "lodash"
import  {Link} from "react-router-dom"
import ContentData from "../../Main/PortfolioDarkSection/ContentPortfolio/ContentData"
import ContCategoryPage from "../../Main/CategoryPage/ContCategoryPage/ContCategoryPage"

const mapId = ContentData.reduce( (accMap, currentValue) =>({
    ...accMap,
    [currentValue.id]:currentValue
}),{})

const LikedArticle = ({
    like,
})=>{

    const idOfArticle = keys(like).map(categoryId => (
        mapId[categoryId]
    ))
   
    return(
        <div>
            <div className ="header_img">
                <div className = "blog">
                    <p>Blog</p>
                        <button className="button_category"><Link to="/" className="link">Home</Link> | <div className="link" >Liked articles</div></button>
                </div>
            </div>
            <div>
                {
                    idOfArticle.map((currentValue)=>(
                         <ContCategoryPage
                            id={currentValue.id}
                            img={currentValue.img}
                            p1={currentValue.p1}
                            headline={currentValue.headline}
                         />
                    ) )
                }
               
            </div>
        </div>
    )
}

export default LikedArticle