import React from "react"
import "./Category.css"
import { Link } from "react-router-dom"
import ContCategoryPage from "./ContCategoryPage/ContCategoryPage"
import ContentData from "../../Main/PortfolioDarkSection/ContentPortfolio/ContentData"
import {keys} from "lodash"



const categoryMap = ContentData.reduce((accMap, arrCategory) => ({
    ...accMap,
    [arrCategory.id]:arrCategory

}),{})


const CategoryPage = ({
    articleCategory,
}) => {
    const listOfCategory= keys(articleCategory).map(categoryId => (
        categoryMap[categoryId].category
    ))
    const valueOfCategory = listOfCategory[0];
    return(
        <div >
            <div className ="header_img">
                <div className = "blog">
                    <p>Blog</p>
                    <button><Link to="/" className="link">Home</Link> | <Link to="/category" className="link" >Blog</Link></button>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <p className="name_of_category"> Category: {valueOfCategory}</p>

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
        </div>
    )
}

export default CategoryPage