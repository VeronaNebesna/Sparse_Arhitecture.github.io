import React, { Fragment } from "react"
import ContentPortfolioItems from "./ContentPortfolioItems"
import ContentData from "./ContentData"


const ContentPortfolio = (
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
                   category
               })=>(
                   
                <ContentPortfolioItems
                    img={img}
                    id={id}
                    p1={p1}
                    p2={p2}
                    headline={headline}
                    category={category}
                />
               ))
            }
            
        </Fragment>
    )
}

export default  ContentPortfolio 