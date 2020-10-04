import React, { Fragment } from "react"
import ContentPortfolioItems from "./ContentPortfolioItems"
import ContentData from "./ContentData"


const ContentPortfolio = ({
    changeCategory,
    like,
    // changeLikedBtn
    removeLike,
    addLike
}
) =>{
    return(
        <Fragment>
            { 
               ContentData.map(({
                   id,
                   img,
                   p1,
                   p2,
                   headline,
                   category,      
               })=>(
                <ContentPortfolioItems
                    changeCategory={ changeCategory}
                    img={img}
                    id={id}
                    p1={p1}
                    p2={p2}
                    headline={headline}
                    category={category}  
                    isLiked={like[id]}
                    // changeLikedBtn={changeLikedBtn}
                    removeLike={removeLike}
                    addLike={addLike}
                />
               ))
            }
            
        </Fragment>
    )
}

export default  ContentPortfolio 