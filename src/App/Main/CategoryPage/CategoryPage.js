import React from "react"
import "./Category.css"
import { Link } from "react-router-dom"
import ContCategoryPage from "./ContCategoryPage/ContCategoryPage"
import ContentData from "../../Main/PortfolioDarkSection/ContentPortfolio/ContentData"

const renderComponent = ContentData.filter( function(data) {
    if(data.category === "city"){
        // console.log(data.category)
        return (true)
    }
})


const CategoryPage = ({
}) => {
    return(
        <div >
              <div className ="header_img">
                <div className = "blog">
                    <p>Blog</p>
                    <button><Link to="/" className="link">Home</Link> | <Link to="/category" className="link" >Blog</Link></button>
                </div>
                  </div>
                  {
               renderComponent.map(({
                   id,
                   img,
                   p1,
                   p2,
                   headline,
                   category
               })=>(
                <ContCategoryPage 
                    img={img}
                    id={id}
                    p1={p1}
                    p2={p2}
                    headline={headline}
                    category={category}
                />
               ))
            }
                  
        </div>
    )
}

export default CategoryPage