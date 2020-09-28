import React from "react"
import "./Category.css"
import ContCategoryPage from "./ContCategoryPage/ContCategoryPage"
import ContentData, { getCategoryMap} from "../../Main/PortfolioDarkSection/ContentPortfolio/ContentData"
import {keys} from "lodash"
import HeaderItems from "./HeaderItems"



const CategoryPage = ({
    articleCategory,
    categoryMap  = getCategoryMap(ContentData)
}) => {
    const listOfCategory= keys(articleCategory).map(categoryId => (
        categoryMap[categoryId].category
    ))
    const valueOfCategory = listOfCategory[0];
    return(
        <div >
            <HeaderItems
                valueOfCategory={valueOfCategory}
            />
            {ContentData.map(function(categoryId){
                if(categoryId.category == valueOfCategory){
                    return(
                        <ContCategoryPage 
                            img={categoryId.img}
                            id={categoryId.id}
                            p1={categoryId.p1}
                            headline={categoryId.headline}
                            category={categoryId.category}
                        />
                    )
                }
                    
            }    
            )}          
        </div>
    )
}

export default CategoryPage