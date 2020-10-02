import React, { Fragment } from "react"
import "./Category.css"
import ContCategoryPage from "./ContCategoryPage/ContCategoryPage"
import ContentData, { getCategoryMap} from "../PortfolioDarkSection/ContentPortfolio/ContentData"
import {keys} from "lodash"
import HeaderItems from "./HeaderItems"
import Aside from "./ContCategoryPage/Aside/Aside"



const CategoryPage = ({
    articleCategory,
    categoryMap  = getCategoryMap(ContentData)
}) => {
    const listOfCategory= keys(articleCategory).map(categoryId => (
        categoryMap[categoryId].category
    ))
    const valueOfCategory = listOfCategory[0];
    return(
        <Fragment>
            <HeaderItems
                valueOfCategory={valueOfCategory}
            />
            <div className="container">
                <div className="row_page_cat">  
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
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
                    <div className ="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <Aside/>
                    </div>        
                </div>
            </div>
        </Fragment>
    )
}

export default CategoryPage